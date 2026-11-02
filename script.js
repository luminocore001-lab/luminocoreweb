const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });
document.querySelectorAll(".reveal").forEach(el => revealObserver.observe(el));

const menuButton = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav");
menuButton.addEventListener("click", () => {
  const open = nav.classList.toggle("open");
  menuButton.setAttribute("aria-expanded", String(open));
});
nav.querySelectorAll("a").forEach(link => link.addEventListener("click", () => {
  nav.classList.remove("open");
  menuButton.setAttribute("aria-expanded", "false");
}));

const glow = document.querySelector(".cursor-glow");
window.addEventListener("pointermove", event => {
  glow.style.left = `${event.clientX}px`;
  glow.style.top = `${event.clientY}px`;
}, { passive: true });

document.getElementById("year").textContent = new Date().getFullYear();

const form = document.getElementById("enquiry-form");
const status = document.getElementById("form-status");
const submitButton = form.querySelector("button[type=submit]");
const WHATSAPP_NUMBER = "919445376413";

form.addEventListener("submit", async event => {
  event.preventDefault();
  if (!form.reportValidity()) return;

  const data = Object.fromEntries(new FormData(form).entries());
  const whatsappMessage = [
    "Hello Luminocore! I'd like to discuss a project.",
    "",
    `Name: ${data.name}`,
    `Phone: ${data.phone}`,
    `Email: ${data.email}`,
    `Service: ${data.service}`,
    "",
    `Project details: ${data.message}`
  ].join("\n");
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(whatsappMessage)}`;

  // Open a tab immediately during the click so browser popup blockers do not block it.
  const whatsappTab = window.open("about:blank", "_blank");
  submitButton.disabled = true;
  submitButton.querySelector(".button-label").textContent = "Submitting...";
  status.textContent = "Sending your enquiry to Luminocore...";

  let emailSent = false;
  let emailMessage = "";
  try {
    const response = await fetch("/api/enquiry", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data)
    });
    const result = await response.json();
    emailSent = response.ok && result.ok;
    emailMessage = result.message || (emailSent ? "Email delivered." : "Email delivery failed.");
  } catch {
    emailMessage = "The website could not reach its email server.";
  }

  if (whatsappTab && !whatsappTab.closed) {
    whatsappTab.location.href = whatsappUrl;
  } else {
    // Fallback if the browser blocked the new tab.
    window.location.href = whatsappUrl;
  }

  if (emailSent) {
    status.textContent = "Enquiry submitted to Luminocore by email. WhatsApp is open with your details — press Send there to message us too.";
    form.reset();
  } else {
    status.textContent = `${emailMessage} WhatsApp is open with your details. Press Send there so we receive your enquiry.`;
  }
  submitButton.disabled = false;
  submitButton.querySelector(".button-label").textContent = "Send enquiry";
});
