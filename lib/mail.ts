"use server";

import nodemailer from 'nodemailer';

interface mailData {
    name: string;
    email: string;
    message: string;
}
export async function sendMail({name, email, message}: mailData) {

  // Configure the transporter (using Gmail SMTP as an example)
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.GMAIL_USER, // Your Gmail address
      pass: process.env.GMAIL_PASSWORD, // Your Gmail app password
    },
  });

  const mailOptions = {
    from: process.env.GMAIL_USER, // Sender address
    to: process.env.GMAIL_USER, // Send to yourself
    subject: `[LA] Kontaktanfrage von ${name}`, // Subject line
    text:`E-Mail: ${email}\n\n${message}`, // Plain text body
  };

  const mailOptionsRequester = {
    from: process.env.GMAIL_USER,
    to: email,
    subject: `Deine Kontaktanfrage`, 
    text:`Hallo ${name},\n\nVielen Dank für deine Nachricht. Ich werde mich so schnell wie möglich zurückmelden.\n\nIhre Nachricht:\n${message}`, 
  };

  try {
    // Send the email
    await transporter.sendMail(mailOptions);
    await transporter.sendMail(mailOptionsRequester);
    return true;
  } catch (error) {
    console.error('Error sending email:', error);
    return false;
  }
}