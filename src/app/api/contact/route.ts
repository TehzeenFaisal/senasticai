import { NextResponse } from "next/server";
import sgMail from "@sendgrid/mail";

sgMail.setApiKey(process.env.SENDGRID_API_KEY!);

// Server-safe HTML escaping function
function escapeHtml(text: string): string {
	const htmlEntities: Record<string, string> = {
		"&": "&amp;",
		"<": "&lt;",
		">": "&gt;",
		'"': "&quot;",
		"'": "&#39;",
		"/": "&#x2F;",
		"`": "&#x60;",
		"=": "&#x3D;"
	};

	return text.replace(/[&<>"'/`=]/g, (char) => htmlEntities[char] || char);
}

// Validate email format
function isValidEmail(email: string): boolean {
	const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
	return emailRegex.test(email);
}

// Validate phone number (international format)
function isValidPhone(phone: string): boolean {
	const phoneRegex = /^[\+]?[(]?[0-9]{1,4}[)]?[-\s\.]?[(]?[0-9]{1,4}[)]?[-\s\.]?[0-9]{3,4}[-\s\.]?[0-9]{3,4}$/;
	return phoneRegex.test(phone);
}

export async function POST(request: Request) {
	try {
		const { name, email, mobile, message } = await request.json();

		// Validate required fields
		if (!name || !email || !mobile || !message) {
			return NextResponse.json({ error: "All fields are required" }, { status: 400 });
		}

		// Validate email format
		if (!isValidEmail(email)) {
			return NextResponse.json({ error: "Please enter a valid email address" }, { status: 400 });
		}

		// Validate phone format
		if (!isValidPhone(mobile)) {
			return NextResponse.json({ error: "Please enter a valid phone number" }, { status: 400 });
		}

		// Escape all user inputs for safety
		const safeName = escapeHtml(name.trim());
		const safeEmail = escapeHtml(email.trim());
		const safeMobile = escapeHtml(mobile.trim());
		const safeMessage = escapeHtml(message.trim()).replace(/\n/g, "<br>");

		// Email to admin
		const adminEmail = {
			to: process.env.TO_EMAIL!,
			from: process.env.FROM_EMAIL!,
			replyTo: email,
			subject: `[SenasticAI - Website] New Contact Form Submission`,
			html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <title>New Contact Form Submission</title>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: #0E76BC; color: white; padding: 20px; text-align: center; }
            .content { background: #f9f9f9; padding: 20px; }
            .field { margin-bottom: 15px; }
            .label { font-weight: bold; color: #555; }
            .value { margin-top: 5px; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h2>New Contact Form Submission</h2>
            </div>
            <div class="content">
              <div class="field">
                <div class="label">Name:</div>
                <div class="value">${safeName}</div>
              </div>
              <div class="field">
                <div class="label">Email:</div>
                <div class="value">${safeEmail}</div>
              </div>
              <div class="field">
                <div class="label">Mobile:</div>
                <div class="value">${safeMobile}</div>
              </div>
              <div class="field">
                <div class="label">Message:</div>
                <div class="value">${safeMessage}</div>
              </div>
            </div>
          </div>
        </body>
        </html>
      `,
			text: `
        New Contact Form Submission

        Name: ${safeName}
        Email: ${safeEmail}
        Mobile: ${safeMobile}
        Message: ${message}
      `
		};

		// Send to admin
		await sgMail.send(adminEmail);

		// Auto-reply to user
		const userReply = {
			to: email,
			from: process.env.FROM_EMAIL!,
			subject: `Thank you for contacting us, ${safeName}!`,
			html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <title>Thank You</title>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: #0E76BC; color: white; padding: 20px; text-align: center; }
            .content { background: #f9f9f9; padding: 20px; }
            .message { background: white; padding: 15px; border-left: 4px solid #0E76BC; margin: 20px 0; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h2>Thank You for Contacting Us!</h2>
            </div>
            <div class="content">
              <p>Dear ${safeName},</p>
              <p>Thank you for reaching out to us. We have received your message and will get back to you as soon as possible.</p>
              <div class="message">
                <strong>Your message:</strong><br>
                ${safeMessage}
              </div>
              <p>Best regards,<br>Your Team</p>
            </div>
          </div>
        </body>
        </html>
      `,
			text: `
        Thank you for contacting us!

        Dear ${safeName},

        Thank you for reaching out to us. We have received your message and will get back to you as soon as possible.

        Your message:
        ${message}

        Best regards,
        Your Team
      `
		};

		await sgMail.send(userReply);

		return NextResponse.json({ success: true, message: "Email sent successfully" }, { status: 200 });
	} catch (error: any) {
		console.error("SendGrid error:", error);

		// Handle SendGrid specific errors
		if (error.response?.body?.errors) {
			const errorMessage = error.response.body.errors[0].message;
			return NextResponse.json({ error: errorMessage }, { status: error.response.statusCode || 500 });
		}

		// Handle other errors
		return NextResponse.json({ error: "Failed to send message. Please try again." }, { status: 500 });
	}
}
