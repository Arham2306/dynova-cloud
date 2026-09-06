import express from 'express';
import rateLimit from 'express-rate-limit';
import nodemailer from 'nodemailer';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

// Load local .env file if available (Node 20+)
try {
  process.loadEnvFile?.();
} catch {
  // Gracefully continue when .env is absent or environment variables are provided by host
}

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const distPath = path.resolve(__dirname, 'dist');

const PORT = process.env.PORT || 3000;
const app = express();

app.disable('x-powered-by');
app.set('trust proxy', 1);

// Parse JSON request bodies
app.use(express.json({ limit: '500kb' }));

// Handle JSON body parser syntax errors
app.use((err, req, res, next) => {
  if (err instanceof SyntaxError && 'body' in err) {
    return res.status(400).json({ success: false, message: 'Invalid JSON payload' });
  }
  next(err);
});

const contactLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  limit: 5,
  standardHeaders: true,
  legacyHeaders: false,
  message: {
    success: false,
    message: 'Too many submissions. Please try again later.',
  },
});

// Reject obsolete PHP endpoints with HTTP 410
app.all(['/api/contact.php', '/contact.php'], (_req, res) => {
  res.status(410).json({ success: false, message: 'PHP endpoints are deprecated. Use /api/contact.' });
});

// HTML escaping helper
function escapeHtml(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

// Authoritative contact form submission endpoint
app.post('/api/contact', (req, res, next) => {
  // Explicit Content-Type validation
  if (!req.is('application/json')) {
    return res.status(415).json({ success: false, message: 'Content-Type must be application/json' });
  }

  const rawFullName = typeof req.body?.fullName === 'string' ? req.body.fullName : '';
  const rawEmail    = typeof req.body?.email === 'string' ? req.body.email : '';
  const rawPhone    = typeof req.body?.phone === 'string' ? req.body.phone : 'Not provided';
  const rawService  = typeof req.body?.service === 'string' ? req.body.service : 'General Inquiry';
  const rawMessage  = typeof req.body?.message === 'string' ? req.body.message : '';
  const hpCheck     = req.body?._hp_check;

  // Honeypot check: silently accept bot submissions
  if (hpCheck) {
    return res.status(200).json({ success: true, message: 'Inquiry received successfully' });
  }

  res.locals.contactInput = {
    rawFullName,
    rawEmail,
    rawPhone,
    rawService,
    rawMessage,
  };

  next();
}, contactLimiter, async (_req, res) => {
  const {
    rawFullName,
    rawEmail,
    rawPhone,
    rawService,
    rawMessage,
  } = res.locals.contactInput;

  // Header injection validation on raw values
  if (/[\r\n]/.test(rawFullName + rawEmail + rawPhone + rawService)) {
    return res.status(400).json({ success: false, message: 'Invalid input.' });
  }

  // Sanitize & trim inputs
  const fullName = rawFullName.trim();
  const email    = rawEmail.trim();
  const phone    = rawPhone.trim();
  const service  = rawService.trim();
  const message  = rawMessage.trim();

  // Validate required fields
  if (!fullName || !email || !service || !message) {
    return res.status(400).json({ success: false, message: 'Please fill in all required fields' });
  }

  // Validate email format
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({ success: false, message: 'Please enter a valid email address' });
  }

  // Validate length limits
  if (fullName.length > 100 || email.length > 120 || service.length > 100 || phone.length > 50) {
    return res.status(400).json({ success: false, message: 'One or more fields exceed maximum allowed length' });
  }

  if (message.length < 8 || message.length > 5000) {
    return res.status(400).json({ success: false, message: 'Project brief must be between 8 and 5000 characters' });
  }

  // Retrieve SMTP credentials from environment variables
  const smtpHost = process.env.SMTP_HOST || 'smtp.hostinger.com';
  const smtpPort = parseInt(process.env.SMTP_PORT || '465', 10);
  const smtpSecure = process.env.SMTP_SECURE === 'true' || smtpPort === 465;
  const smtpUser = process.env.SMTP_USER || 'info@dynova.cloud';
  const smtpPass = process.env.SMTP_PASS;
  const contactTo = process.env.CONTACT_TO || 'info@dynova.cloud';
  const contactFrom = process.env.CONTACT_FROM || smtpUser;

  if (!smtpPass) {
    console.error('[Contact API Configuration Error]: SMTP_PASS is not configured in environment variables.');
    return res.status(500).json({ success: false, message: 'Unable to send inquiry right now' });
  }

  const transporter = nodemailer.createTransport({
    host: smtpHost,
    port: smtpPort,
    secure: smtpSecure,
    auth: {
      user: smtpUser,
      pass: smtpPass,
    },
  });

  const textBody = [
    'New Project Inquiry - Dynova Cloud',
    '',
    `Client Name: ${fullName}`,
    `Email: ${email}`,
    `Phone: ${phone}`,
    `Service Selected: ${service}`,
    `Submission Time: ${new Date().toISOString()}`,
    '',
    'Project Brief:',
    message,
  ].join('\n');

  const htmlBody = `<!DOCTYPE html>
<html>
<head><meta charset="utf-8"></head>
<body style="margin: 0; padding: 20px; background-color: #000814; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;">
  <table role="presentation" style="max-width: 600px; width: 100%; margin: 0 auto; background: #00102b; border: 1px solid #1a2a47; border-radius: 8px; overflow: hidden; border-collapse: collapse;">
    <tr>
      <td style="padding: 24px; background: linear-gradient(135deg, #00102b 0%, #001f54 100%); border-bottom: 2px solid #FFC300;">
        <h1 style="margin: 0; font-size: 20px; color: #FFC300; font-weight: 700; letter-spacing: 0.5px;">DYNOVA CLOUD</h1>
        <p style="margin: 6px 0 0; color: #94a3b8; font-size: 13px;">New Project Blueprint Inquiry Received</p>
      </td>
    </tr>
    <tr>
      <td style="padding: 24px; color: #f8fafc;">
        <table role="presentation" style="width: 100%; border-collapse: collapse; margin-bottom: 20px; font-size: 14px;">
          <tr>
            <td style="padding: 8px 0; color: #64748b; width: 130px; font-weight: 500;">Client Name:</td>
            <td style="padding: 8px 0; color: #f8fafc; font-weight: 600;">${escapeHtml(fullName)}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; color: #64748b; font-weight: 500;">Email Address:</td>
            <td style="padding: 8px 0;"><a href="mailto:${escapeHtml(email)}" style="color: #FFC300; text-decoration: none;">${escapeHtml(email)}</a></td>
          </tr>
          <tr>
            <td style="padding: 8px 0; color: #64748b; font-weight: 500;">Phone:</td>
            <td style="padding: 8px 0; color: #cbd5e1;">${escapeHtml(phone)}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; color: #64748b; font-weight: 500;">Service:</td>
            <td style="padding: 8px 0; color: #38bdf8; font-weight: 600;">${escapeHtml(service)}</td>
          </tr>
        </table>
        <div style="margin-top: 16px;">
          <h3 style="margin: 0 0 10px; font-size: 13px; text-transform: uppercase; letter-spacing: 1px; color: #94a3b8;">Project Overview & Requirements:</h3>
          <div style="background: #000814; padding: 16px; border-radius: 6px; border: 1px solid #1a2a47; color: #e2e8f0; font-size: 14px; line-height: 1.6; white-space: pre-wrap;">${escapeHtml(message)}</div>
        </div>
      </td>
    </tr>
    <tr>
      <td style="padding: 14px 24px; background: #00050e; text-align: center; font-size: 12px; color: #475569; border-top: 1px solid #0f172a;">
        Transmitted securely via Dynova Cloud Production Web Application
      </td>
    </tr>
  </table>
</body>
</html>`;

  try {
    await transporter.sendMail({
      from: `"${fullName.replace(/["\\]/g, '')} via Dynova" <${contactFrom}>`,
      to: contactTo,
      replyTo: email,
      subject: `New Lead: ${fullName} - ${service}`,
      text: textBody,
      html: htmlBody,
    });

    return res.status(200).json({ success: true, message: 'Inquiry received successfully' });
  } catch (err) {
    console.error('[Nodemailer Error]:', err);
    return res.status(500).json({ success: false, message: 'Unable to send inquiry right now' });
  }
});

// Reject non-POST requests to /api/contact
app.all('/api/contact', (_req, res) => {
  res.status(405).json({ success: false, message: 'Method Not Allowed' });
});

// Serve built static assets from dist
app.use(express.static(distPath));

// Safe SPA Fallback for non-API GET requests (avoids Express 5 wildcard regex issues)
app.use((req, res, next) => {
  if (req.method === 'GET' && !req.path.startsWith('/api')) {
    return res.sendFile(path.resolve(distPath, 'index.html'));
  }
  next();
});

// Unmatched API or non-GET routes return clean JSON 404
app.use((_req, res) => {
  res.status(404).json({ success: false, message: 'Not Found' });
});

app.listen(PORT, () => {
  console.log(`Dynova Cloud Web App running on port ${PORT}`);
});
