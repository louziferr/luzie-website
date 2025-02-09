import { NextRequest } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: NextRequest) {
  const { name, email, message } = await request.json();

  // Configure the transporter (using Gmail SMTP as an example)
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.GMAIL_USER, // Your Gmail address
      pass: process.env.GMAIL_PASSWORD, // Your Gmail app password
    },
  });

  // Define the email options
  const mailOptions = {
    from: process.env.GMAIL_USER, // Sender address
    to: process.env.GMAIL_USER, // Send to yourself
    subject: `[LA] Kontaktanfrage von ${name}`, // Subject line
    text:`E-Mail: ${email}\n\n${message}`, // Plain text body
  };

  try {
    // Send the email
    await transporter.sendMail(mailOptions);
    return Response.json({ success: true, message: 'Message sent successfully!' });
  } catch (error) {
    console.error('Error sending email:', error);
    return Response.json({ success: false, message: 'Failed to send message.' }, { status: 500 });
  }
}