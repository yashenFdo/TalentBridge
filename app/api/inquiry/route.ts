import {
  CV_EXTENSIONS,
  HONEYPOT_FIELD,
  INQUIRY_CC,
  INQUIRY_ROUTES,
  MAX_CV_BYTES,
  isInquiryCategory,
} from "@/lib/inquiry";
import {
  EMAIL_MESSAGE,
  EMAIL_PATTERN,
  NAME_MESSAGE,
  NAME_PATTERN,
  PHONE_MESSAGE,
  PHONE_PATTERN,
} from "@/lib/validation";

const NAME_RE = new RegExp(`^(?:${NAME_PATTERN})$`, "u");
const EMAIL_RE = new RegExp(`^(?:${EMAIL_PATTERN})$`, "u");
const PHONE_RE = new RegExp(`^(?:${PHONE_PATTERN})$`, "u");

const FALLBACK_ERROR =
  "Sorry, we couldn't send your inquiry right now. Please try again or email us at hello@talentbridge.lk.";

/** Optional fields a form may send, with the label used in the email. */
const OPTIONAL_FIELDS = [
  ["company", "Company"],
  ["role", "Preferred role / industry"],
  ["currentRole", "Current role"],
  ["searchStatus", "Search status"],
] as const;

function fail(status: number, error: string) {
  return Response.json({ ok: false, error }, { status });
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

export async function POST(request: Request) {
  let form: FormData;
  try {
    form = await request.formData();
  } catch {
    return fail(400, "Invalid submission.");
  }

  const text = (key: string, max = 200) => {
    const value = form.get(key);
    return typeof value === "string" ? value.trim().slice(0, max) : "";
  };

  // Bots fill every field; pretend success so they don't retry.
  if (text(HONEYPOT_FIELD)) return Response.json({ ok: true });

  const category = text("category");
  if (!isInquiryCategory(category)) return fail(400, "Please choose an inquiry type.");

  const name = text("name").replace(/\s+/g, " ");
  const email = text("email");
  const phone = text("phone", 40);
  const message = text("message", 5000);
  const source = text("source", 120) || "Website";

  if (!NAME_RE.test(name)) return fail(422, NAME_MESSAGE);
  if (!EMAIL_RE.test(email)) return fail(422, EMAIL_MESSAGE);
  if (!PHONE_RE.test(phone)) return fail(422, PHONE_MESSAGE);

  // Optional CV attachment
  const attachments: { filename: string; content: string }[] = [];
  const cv = form.get("cv");
  if (cv instanceof File && cv.size > 0) {
    if (cv.size > MAX_CV_BYTES) return fail(413, "Your CV must be 4MB or smaller.");
    if (!CV_EXTENSIONS.test(cv.name)) return fail(422, "Please upload your CV as a PDF or Word document.");
    attachments.push({
      filename: cv.name.replace(/[^\w.\- ]+/g, "_").slice(0, 120),
      content: Buffer.from(await cv.arrayBuffer()).toString("base64"),
    });
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("[inquiry] RESEND_API_KEY is not set; inquiry was not sent.");
    return fail(503, FALLBACK_ERROR);
  }

  const route = INQUIRY_ROUTES[category];
  const rows: [string, string][] = [
    ["Inquiry type", route.label],
    ["Name", name],
    ["Email", email],
    ["Phone", phone],
    ...OPTIONAL_FIELDS.map(([key, label]) => [label, text(key)] as [string, string]),
    ["Submitted from", source],
  ].filter(([, value]) => value) as [string, string][];
  if (attachments.length) rows.push(["CV attached", attachments[0].filename]);

  const subject = `Website inquiry – ${route.label}: ${name}${text("company") ? ` (${text("company")})` : ""}`;

  const html = `<!doctype html><html><body style="margin:0;padding:24px;background:#f4f7f9;font-family:Arial,Helvetica,sans-serif;color:#0B1E36">
<table role="presentation" width="100%" style="max-width:600px;margin:0 auto;background:#ffffff;border-radius:12px;overflow:hidden;border:1px solid #e2e8f0">
<tr><td style="background:#091D34;padding:20px 24px;color:#ffffff">
<div style="font-size:12px;letter-spacing:2px;text-transform:uppercase;color:#5eead4">${escapeHtml(route.label)}</div>
<div style="font-size:20px;font-weight:bold;margin-top:4px">New website inquiry</div>
<div style="font-size:13px;color:#cbd5e1;margin-top:4px">For ${escapeHtml(route.recipientName)} &middot; ${escapeHtml(route.recipientRole)}</div>
</td></tr>
<tr><td style="padding:20px 24px">
<table role="presentation" width="100%" style="border-collapse:collapse;font-size:14px">
${rows
  .map(
    ([label, value]) =>
      `<tr><td style="padding:8px 12px 8px 0;color:#64748b;vertical-align:top;white-space:nowrap;border-bottom:1px solid #f1f5f9">${escapeHtml(label)}</td><td style="padding:8px 0;border-bottom:1px solid #f1f5f9">${escapeHtml(value)}</td></tr>`
  )
  .join("\n")}
</table>
${
  message
    ? `<div style="margin-top:20px;font-size:12px;letter-spacing:1px;text-transform:uppercase;color:#64748b">Message</div>
<div style="margin-top:6px;padding:14px 16px;background:#f8fafc;border-radius:8px;font-size:14px;line-height:1.6;white-space:pre-wrap">${escapeHtml(message)}</div>`
    : ""
}
<p style="margin-top:20px;font-size:12px;color:#94a3b8">Reply to this email to respond directly to ${escapeHtml(name)}.</p>
</td></tr></table></body></html>`;

  const plain = [
    `New ${route.label} inquiry (for ${route.recipientName})`,
    "",
    ...rows.map(([label, value]) => `${label}: ${value}`),
    ...(message ? ["", "Message:", message] : []),
  ].join("\n");

  const to = [route.email];
  const cc = route.email === INQUIRY_CC ? undefined : [INQUIRY_CC];

  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
      body: JSON.stringify({
        from: process.env.INQUIRY_FROM_EMAIL || "Talent Bridge Website <website@talentbridge.lk>",
        to,
        cc,
        reply_to: email,
        subject: subject.replace(/[\r\n]+/g, " "),
        html,
        text: plain,
        attachments: attachments.length ? attachments : undefined,
      }),
    });

    if (!res.ok) {
      console.error("[inquiry] Resend rejected the email:", res.status, await res.text());
      return fail(502, FALLBACK_ERROR);
    }
  } catch (err) {
    console.error("[inquiry] Could not reach Resend:", err);
    return fail(502, FALLBACK_ERROR);
  }

  return Response.json({ ok: true });
}
