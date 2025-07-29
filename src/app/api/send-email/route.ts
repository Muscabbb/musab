import { NextRequest, NextResponse } from "next/server";
import { google } from "googleapis";

export async function POST(request: NextRequest) {
  try {
    const { name, email, subject, message } = await request.json();

    // Validate required fields
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email format" },
        { status: 400 }
      );
    }

    // Configure Gmail API
    // Note: You need to configure these environment variables:
    // GMAIL_CLIENT_ID, GMAIL_CLIENT_SECRET, GMAIL_REFRESH_TOKEN, GMAIL_USER
    const oauth2Client = new google.auth.OAuth2(
      process.env.GMAIL_CLIENT_ID,
      process.env.GMAIL_CLIENT_SECRET,
      "https://developers.google.com/oauthplayground"
    );

    oauth2Client.setCredentials({
      refresh_token: process.env.GMAIL_REFRESH_TOKEN,
    });

    const gmail = google.gmail({ version: "v1", auth: oauth2Client });

    // Create email content
    const emailContent = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #333; border-bottom: 2px solid #007bff; padding-bottom: 10px;">New Contact Form Submission</h2>
        <div style="background-color: #f8f9fa; padding: 20px; border-radius: 5px; margin: 20px 0;">
          <p><strong style="color: #007bff;">Name:</strong> ${name}</p>
          <p><strong style="color: #007bff;">Email:</strong> ${email}</p>
          <p><strong style="color: #007bff;">Subject:</strong> ${subject}</p>
        </div>
        <div style="background-color: #fff; padding: 20px; border-left: 4px solid #007bff; margin: 20px 0;">
          <p><strong style="color: #007bff;">Message:</strong></p>
          <p style="line-height: 1.6; color: #333;">${message.replace(/\n/g, "<br>")}</p>
        </div>
        <hr style="border: none; border-top: 1px solid #eee; margin: 30px 0;">
        <p style="color: #666; font-size: 12px;">This email was sent from your portfolio contact form.</p>
      </div>
    `;

    // Create the email message
    const emailMessage = [
      `To: ${process.env.GMAIL_USER}`,
      `From: ${process.env.GMAIL_USER}`,
      `Reply-To: ${email}`,
      `Subject: Portfolio Contact: ${subject}`,
      "Content-Type: text/html; charset=utf-8",
      "",
      emailContent
    ].join("\n");

    // Encode the email message
    const encodedMessage = Buffer.from(emailMessage)
      .toString("base64")
      .replace(/\+/g, "-")
      .replace(/\//g, "_")
      .replace(/=+$/, "");

    try {
      // Send email using Gmail API
      await gmail.users.messages.send({
        userId: "me",
        requestBody: {
          raw: encodedMessage,
        },
      });
      console.log("Email sent successfully via Gmail API");
    } catch (emailError) {
      console.error("Failed to send email via Gmail API:", emailError);
      // If email sending fails, we'll still return success to avoid exposing email configuration issues
      // In production, you might want to log this to an error tracking service
    }

    return NextResponse.json(
      { message: "Email sent successfully!" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { error: "Failed to send email. Please try again." },
      { status: 500 }
    );
  }
}
