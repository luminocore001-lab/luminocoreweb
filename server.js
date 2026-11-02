require("dotenv").config();
const http = require("http");
const fs = require("fs");
const path = require("path");
const nodemailer = require("nodemailer");

const ROOT = __dirname;
const PORT = Number(process.env.PORT || 3000);
const MIME = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".svg": "image/svg+xml",
  ".ico": "image/x-icon"
};

function sendJson(res, status, data) {
  res.writeHead(status, {
    "Content-Type": "application/json; charset=utf-8",
    "Cache-Control": "no-store",
    "X-Content-Type-Options": "nosniff"
  });
  res.end(JSON.stringify(data));
}

function readBody(req) {
  return new Promise((resolve, reject) => {
    let raw = "";
    req.on("data", chunk => {
      raw += chunk;
      if (raw.length > 20_000) {
        reject(new Error("Request too large"));
        req.destroy();
      }
    });
    req.on("end", () => {
      try { resolve(JSON.parse(raw || "{}")); }
      catch { reject(new Error("Invalid JSON")); }
    });
    req.on("error", reject);
  });
}

function clean(value, max = 1000) {
  return String(value || "").replace(/[<>]/g, "").trim().slice(0, max);
}

async function handleEnquiry(req, res) {
  let data;
  try { data = await readBody(req); }
  catch (error) { return sendJson(res, 400, { ok: false, message: error.message }); }

  // Honeypot field: silently reject automated spam.
  if (data.companyWebsite) return sendJson(res, 200, { ok: true });

  const name = clean(data.name, 100);
  const phone = clean(data.phone, 30);
  const email = clean(data.email, 160);
  const service = clean(data.service, 100);
  const message = clean(data.message, 3000);

  if (!name || !phone || !email || !service || !message) {
    return sendJson(res, 400, { ok: false, message: "Please complete all required fields." });
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return sendJson(res, 400, { ok: false, message: "Please enter a valid email address." });
  }

  const required = ["SMTP_USER", "SMTP_PASS", "MAIL_TO"];
  const missing = required.filter(key => !process.env[key] || process.env[key].includes("PASTE_YOUR"));
  if (missing.length) {
    return sendJson(res, 503, {
      ok: false,
      message: "Email is not configured yet. Add your Gmail App Password to the .env file, then restart the server."
    });
  }

  try {
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || "smtp.gmail.com",
      port: Number(process.env.SMTP_PORT || 465),
      secure: String(process.env.SMTP_SECURE || "true") === "true",
      auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS },
      connectionTimeout: 15000,
      greetingTimeout: 15000,
      socketTimeout: 20000
    });

    await transporter.sendMail({
      from: `"Luminocore Website" <${process.env.SMTP_USER}>`,
      to: process.env.MAIL_TO,
      replyTo: email,
      subject: `New ${service} enquiry from ${name}`,
      text: [
        "NEW LUMINOCORE WEBSITE ENQUIRY",
        "",
        `Name: ${name}`,
        `Phone: ${phone}`,
        `Email: ${email}`,
        `Service: ${service}`,
        "",
        "Project details:",
        message
      ].join("\n")
    });

    return sendJson(res, 200, { ok: true, message: "Your enquiry email has been sent." });
  } catch (error) {
    console.error("Email delivery failed:", error.code || "UNKNOWN", error.message);
    let message = "Email could not be sent. Check the Gmail App Password and .env settings, then restart the website.";
    if (error.code === "EAUTH" || error.responseCode === 535) {
      message = "Gmail rejected the login. Create a fresh Google App Password and update SMTP_PASS in .env.";
    } else if (error.code === "ECONNECTION" || error.code === "ETIMEDOUT") {
      message = "Could not connect to Gmail. Check your internet connection and try again.";
    }
    return sendJson(res, 502, { ok: false, message });
  }
}

const server = http.createServer(async (req, res) => {
  const url = new URL(req.url, `http://${req.headers.host || "localhost"}`);

  if (req.method === "POST" && url.pathname === "/api/enquiry") {
    return handleEnquiry(req, res);
  }

  if (req.method !== "GET" && req.method !== "HEAD") {
    res.writeHead(405, { Allow: "GET, HEAD, POST" });
    return res.end("Method Not Allowed");
  }

  let requested = decodeURIComponent(url.pathname === "/" ? "/index.html" : url.pathname);
  const filePath = path.resolve(ROOT, "." + requested);
  if (!filePath.startsWith(ROOT + path.sep) && filePath !== ROOT) {
    res.writeHead(403); return res.end("Forbidden");
  }

  fs.readFile(filePath, (error, content) => {
    if (error) {
      res.writeHead(404, { "Content-Type": "text/plain; charset=utf-8" });
      return res.end("Not found");
    }
    res.writeHead(200, {
      "Content-Type": MIME[path.extname(filePath)] || "application/octet-stream",
      "X-Content-Type-Options": "nosniff",
      "Referrer-Policy": "strict-origin-when-cross-origin"
    });
    if (req.method === "HEAD") return res.end();
    res.end(content);
  });
});

server.listen(PORT, () => {
  console.log(`Luminocore is running at http://localhost:${PORT}`);
});
