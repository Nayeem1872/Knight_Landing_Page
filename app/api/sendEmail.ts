// pages/api/sendEmail.ts
import type { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ error: 'Please fill out all fields.' });
    }

    // Create a Nodemailer transporter using your email provider's SMTP settings
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,    // e.g., smtp.gmail.com for Gmail
      port: 465,                      // usually 465 for secure connections
      secure: true,                   // true for 465, false for other ports
      auth: {
        user: process.env.SMTP_USER,  // your email account
        pass: process.env.SMTP_PASS,  // your email password or app password
      },
    });

    try {
      await transporter.sendMail({
        from: email, // sender's email
        to: process.env.RECEIVER_EMAIL, // receiver email (your email)
        subject: `New contact form message from ${name}`,
        html: `
          <h2>Contact Form Submission</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Message:</strong> ${message}</p>
        `,
      });

      res.status(200).json({ success: true, message: 'Email sent successfully!' });
    } catch (error) {
      res.status(500).json({ error: 'Error sending email.' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed.' });
  }
}
