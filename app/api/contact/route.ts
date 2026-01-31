import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  if (req.method !== "POST") {
    return NextResponse.json({ error: "Method not allowed" }, { status: 405 });
  }

  const { name, email, subject, message, company } = await req.json();
  console.log(name, company);
  

  // Honeypot
  if (company) return NextResponse.json({ ok: true }, { status: 200 });

  if (!name || !email || !message) {
    return NextResponse.json({ error: "Missing fields" }, { status: 400 });
  }

  try {
    const res = await resend.emails.send({
      from: "Portfolio <onboarding@resend.dev>",
      to: [process.env.TO_EMAIL!],
      subject: subject || "New Contact Message",
      replyTo: email,
      text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
    });

    if (res.error)
      return NextResponse.json(
        { error: res.error.message },
        { status: res.error.statusCode || 500 },
      );

    return NextResponse.json(
      { success: true, message: "Successfully sent email" },
      { status: 200 },
    );
  } catch (error: unknown) {
    return NextResponse.json(
      { error: (error as Error).message },
      { status: 500 },
    );
  }
}
