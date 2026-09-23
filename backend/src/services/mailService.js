import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: parseInt(process.env.SMTP_PORT, 10),
  secure: process.env.SMTP_SECURE === "true",
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

export const sendNewsletterNotification = async (
  email,
  ipAddress,
  userAgent,
) => {
  const timestamp = new Date().toLocaleString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
    timeZone: "UTC",
  });

  const mailOptions = {
    from: process.env.SMTP_FROM || "C2X <support.cloudeide@gmail.com>",
    to: "support.cloudeide@gmail.com",
    subject: "🎉 New Newsletter Subscriber",
    text: `
A new user subscribed to C2X.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  📧 Email: ${email}
  🕐 Time: ${timestamp} UTC
  🌐 IP Address: ${ipAddress || "N/A"}
  🖥️ Browser: ${userAgent || "N/A"}
  🏢 Website: C2X

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

This is an automated notification from C2X.
    `.trim(),
    html: `
      <h2>🎉 New Newsletter Subscriber</h2>
      <p>A new user subscribed to C2X.</p>
      <hr>
      <table>
        <tr><td><strong>📧 Email:</strong></td><td>${email}</td></tr>
        <tr><td><strong>🕐 Time:</strong></td><td>${timestamp} UTC</td></tr>
        <tr><td><strong>🌐 IP Address:</strong></td><td>${ipAddress || "N/A"}</td></tr>
        <tr><td><strong>🖥️ Browser:</strong></td><td>${userAgent || "N/A"}</td></tr>
        <tr><td><strong>🏢 Website:</strong></td><td>C2X</td></tr>
      </table>
      <hr>
      <p><small>This is an automated notification from C2X.</small></p>
    `,
  };

  const info = await transporter.sendMail(mailOptions);
  return info;
};

export const testEmailConnection = async () => {
  try {
    await transporter.verify();
    return { success: true };
  } catch (error) {
    return { success: false, error: error.message };
  }
};

export default {
  sendNewsletterNotification,
  testEmailConnection,
};
