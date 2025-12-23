import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER, // Your email
        pass: process.env.EMAIL_PASS, // Your App Password (not your Gmail password)
      },
    });

    const mailOptions = {
      from: email,
      to: process.env.EMAIL_USER,
      subject: `🚀 Portfolio: New Message from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
      html: `
    <div style="background-color: #f4f4f4; padding: 40px 10px; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;">
      <div style="max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 8px; overflow: hidden; box-shadow: 0 4px 10px rgba(0,0,0,0.1); border-top: 6px solid #fdb400;">
        
        <div style="background-color: #222222; padding: 30px; text-align: center;">
          <h1 style="color: #fdb400; margin: 0; font-size: 24px; letter-spacing: 1px; text-transform: uppercase;">New Inquiry</h1>
        </div>

        <div style="padding: 40px 30px;">
          <p style="font-size: 16px; color: #555; margin-bottom: 25px;">You have received a new message from your portfolio website.</p>
          
          <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0">
            <tr>
              <td style="padding-bottom: 15px;">
                <strong style="color: #222222; display: block; font-size: 12px; text-transform: uppercase; letter-spacing: 1px;">From</strong>
                <span style="font-size: 16px; color: #333;">${name}</span>
              </td>
            </tr>
            <tr>
              <td style="padding-bottom: 15px;">
                <strong style="color: #222222; display: block; font-size: 12px; text-transform: uppercase; letter-spacing: 1px;">Email Address</strong>
                <a href="mailto:${email}" style="font-size: 16px; color: #fdb400; text-decoration: none;">${email}</a>
              </td>
            </tr>
            <tr>
              <td style="padding-top: 10px; border-top: 1px solid #eeeeee;">
                <strong style="color: #222222; display: block; font-size: 12px; text-transform: uppercase; letter-spacing: 1px; margin-top: 15px;">Message</strong>
                <p style="font-size: 16px; color: #333; line-height: 1.6; background-color: #f9f9f9; padding: 15px; border-radius: 4px; border-left: 4px solid #fdb400;">
                  ${message}
                </p>
              </td>
            </tr>
          </table>
        </div>

        <div style="background-color: #f9f9f9; padding: 20px; text-align: center; border-top: 1px solid #eeeeee;">
          <p style="font-size: 12px; color: #999; margin: 0;">Sent via Portfolio Contact Form</p>
        </div>
      </div>
    </div>
  `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ message: "Email sent" }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: `Error sending email: ${error}` },
      { status: 500 }
    );
  }
}
