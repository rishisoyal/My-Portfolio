import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  if (req.method !== "POST") {
    return NextResponse.json({ error: "Method not allowed" }, { status: 405 });
  }

  const { name, email, subject, message, company } = await req.json();

  // Honeypot
  if (company) return NextResponse.json({ ok: true }, { status: 200 });

  if (!name || !email || !message) {
    return NextResponse.json({ error: "Missing fields" }, { status: 400 });
  }

  try {
    await resend.emails.send({
      from: "Portfolio <onboarding@resend.dev>",
      to: [process.env.TO_EMAIL!],
      subject: subject || "New Contact Message",
      replyTo: email,
      text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
    });

    return NextResponse.json({ success: true, message: "Successfully sent your message"}, { status: 200 });
  } catch {
    return NextResponse.json({ error: "Email failed" }, { status: 500 });
  }
}
