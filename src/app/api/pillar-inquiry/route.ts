import { Resend } from "resend";
import { pillarInquiryEmailHtml } from "@/lib/email-templates";

interface PillarInquiryPayload {
  fullName: string;
  contactNo: string;
  whatsappContact: string;
  email: string;
  organization?: string;
  category: string;
  message?: string;
  // Honeypot — real visitors never fill this in; bots that autofill every
  // field do. Silently accept without sending mail when it's populated.
  botField?: string;
}

const REQUIRED_FIELDS: (keyof PillarInquiryPayload)[] = ["fullName", "contactNo", "whatsappContact", "email", "category"];

export async function POST(request: Request) {
  let payload: PillarInquiryPayload;
  try {
    payload = await request.json();
  } catch {
    return Response.json({ error: "Invalid request body" }, { status: 400 });
  }

  if (payload.botField) {
    return Response.json({ ok: true });
  }

  for (const field of REQUIRED_FIELDS) {
    if (!payload[field] || typeof payload[field] !== "string") {
      return Response.json({ error: `Missing required field: ${field}` }, { status: 400 });
    }
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("pillar-inquiry: RESEND_API_KEY is not configured");
    return Response.json({ error: "Email is not configured" }, { status: 500 });
  }

  const resend = new Resend(apiKey);
  const from = process.env.RESEND_FROM_EMAIL ?? "LOEXA Africa Website <onboarding@resend.dev>";
  const to = process.env.RESEND_TO_EMAIL ?? "info@loexa.africa";

  const { fullName, contactNo, whatsappContact, email, organization, category, message } = payload;

  const { error } = await resend.emails.send({
    from,
    to,
    replyTo: email,
    subject: `New pillar enquiry: ${category} — ${fullName}`,
    html: pillarInquiryEmailHtml({ fullName, contactNo, whatsappContact, email, organization, category, message }),
    text: [
      `Pillar: ${category}`,
      `Full name: ${fullName}`,
      `Contact number: ${contactNo}`,
      `WhatsApp contact: ${whatsappContact}`,
      `Email: ${email}`,
      `Organization: ${organization || "—"}`,
      "",
      "Message:",
      message || "—",
    ].join("\n"),
  });

  if (error) {
    console.error("pillar-inquiry: Resend send failed", error);
    return Response.json({ error: "Failed to send email" }, { status: 502 });
  }

  return Response.json({ ok: true });
}
