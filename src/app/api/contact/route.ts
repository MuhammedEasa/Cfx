import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { fullName, email, phoneNumber, accountType, message, agreeToContact } = body;

    // Validate required fields
    if (!fullName || !email || !phoneNumber || !accountType || !agreeToContact) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Create transporter with environment variables
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || 'smtp.gmail.com',
      port: parseInt(process.env.SMTP_PORT || '587'),
      secure: false, // true for 465, false for other ports
      auth: {
        user: process.env.SMTP_USER || 'demo@cfxprime.com',
        pass: process.env.SMTP_PASS || 'demo_password_123',
      },
    });

    // Email content
    const mailOptions = {
      from: process.env.SMTP_FROM || 'CFX Prime <noreply@cfxprime.com>',
      to: process.env.CONTACT_EMAIL || 'support@cfxprime.com',
      subject: `New Contact Form Submission - ${accountType} Account Interest`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: linear-gradient(135deg, #C7AE6A 0%, #B8A05E 100%); padding: 20px; text-align: center;">
            <h1 style="color: white; margin: 0;">CFX Prime - New Contact Form Submission</h1>
          </div>
          
          <div style="padding: 30px; background: #f9f9f9;">
            <h2 style="color: #333; border-bottom: 2px solid #C7AE6A; padding-bottom: 10px;">Contact Details</h2>
            
            <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
              <tr>
                <td style="padding: 10px; font-weight: bold; color: #555; width: 30%;">Full Name:</td>
                <td style="padding: 10px; color: #333;">${fullName}</td>
              </tr>
              <tr style="background: #f0f0f0;">
                <td style="padding: 10px; font-weight: bold; color: #555;">Email:</td>
                <td style="padding: 10px; color: #333;">${email}</td>
              </tr>
              <tr>
                <td style="padding: 10px; font-weight: bold; color: #555;">Phone:</td>
                <td style="padding: 10px; color: #333;">${phoneNumber}</td>
              </tr>
              <tr style="background: #f0f0f0;">
                <td style="padding: 10px; font-weight: bold; color: #555;">Account Type:</td>
                <td style="padding: 10px; color: #333; text-transform: capitalize;">${accountType}</td>
              </tr>
              <tr>
                <td style="padding: 10px; font-weight: bold; color: #555;">Marketing Consent:</td>
                <td style="padding: 10px; color: #333;">${agreeToContact ? 'Yes' : 'No'}</td>
              </tr>
            </table>

            ${message ? `
              <h3 style="color: #333; border-bottom: 2px solid #C7AE6A; padding-bottom: 10px;">Message</h3>
              <div style="background: white; padding: 15px; border-left: 4px solid #C7AE6A; margin: 15px 0;">
                ${message.replace(/\n/g, '<br>')}
              </div>
            ` : ''}
            
            <div style="margin-top: 30px; padding: 15px; background: #e8f4f8; border-radius: 5px;">
              <p style="margin: 0; color: #555; font-size: 14px;">
                <strong>Submitted:</strong> ${new Date().toLocaleString()}<br>
                <strong>IP Address:</strong> ${request.headers.get('x-forwarded-for') || 'Unknown'}
              </p>
            </div>
          </div>
          
          <div style="background: #333; color: white; padding: 15px; text-align: center; font-size: 12px;">
            <p style="margin: 0;">This email was sent from the CFX Prime contact form.</p>
          </div>
        </div>
      `,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { message: 'Email sent successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { error: 'Failed to send email' },
      { status: 500 }
    );
  }
}
