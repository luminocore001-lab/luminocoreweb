# Luminocore Website

A responsive black-and-yellow creative studio website with animated sections, a project enquiry form, Gmail delivery through SMTP, and WhatsApp message handoff.

## 1. Requirements

- Node.js 18 or newer
- Internet connection for Google Fonts and WhatsApp
- A Gmail account with 2-Step Verification enabled

## 2. Install and run

Open a terminal inside this folder:

```bash
npm install
```

Copy `.env.example` to `.env`, then edit `.env`:

```env
SMTP_HOST=smtp.gmail.com
SMTP_PORT=465
SMTP_SECURE=true
SMTP_USER=luminocore001@gmail.com
SMTP_PASS=YOUR_16_CHARACTER_GOOGLE_APP_PASSWORD
MAIL_TO=luminocore001@gmail.com
PORT=3000
```

Start the website:

```bash
npm start
```

Open http://localhost:3000

## 3. Set up Gmail delivery

Do not use your normal Gmail password.

1. Sign in to `luminocore001@gmail.com`.
2. Enable Google 2-Step Verification.
3. Create a Google App Password from your Google Account security settings.
4. Copy the generated 16-character app password into `SMTP_PASS` in `.env`.
5. Save `.env` and restart the server.

Keep `.env` private. Never upload it to GitHub or share it publicly. The `.env` file is ignored by Git.

The website sends enquiries to `luminocore001@gmail.com`. The customer's email is used as Reply-To. A success message is shown only after Gmail accepts the email. If Gmail rejects the login, the website displays a setup hint and the server terminal logs the technical error code. Check Spam/Promotions if the message is not in the Inbox.

## 4. WhatsApp behaviour

The form opens WhatsApp with the customer's enquiry pre-filled for **+91 94453 76413**. The visitor must press **Send** in WhatsApp. Websites cannot silently send a WhatsApp message from a visitor's account or detect whether the visitor pressed Send. The page therefore confirms the email result and reminds the visitor to press Send in WhatsApp.

## 5. Important before publishing

- Configure Gmail App Password before testing email.
- Deploy the Node.js server to a host that supports Node applications; static-only hosting will not run `server.js`.
- Use HTTPS in production.
- Add rate limiting and spam protection at the hosting layer before public launch.
- Test a form submission on desktop and mobile.

## Contact destinations

- WhatsApp: +91 94453 76413
- Email: luminocore001@gmail.com

## Brand details

Luminocore helps businesses grow their digital presence through web development, app development, UI/UX design and practical digital solutions. Founder & Owner: Gokulakrishnan. Instagram: https://www.instagram.com/lumino_core/
