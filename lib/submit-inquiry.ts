import { HONEYPOT_FIELD, type InquiryCategory } from "@/lib/inquiry";

type InquiryFields = {
  category: InquiryCategory;
  /** Which form/page sent it, shown in the email. */
  source: string;
  name: string;
  email: string;
  phone: string;
  message?: string;
  company?: string;
  role?: string;
  currentRole?: string;
  searchStatus?: string;
  cv?: File | null;
};

const NETWORK_ERROR =
  "We couldn't reach our server. Please check your connection and try again, or email us at hello@talentbridge.lk.";

/**
 * Sends a form to /api/inquiry, which emails the right person.
 * Pass the <form> element so the hidden anti-spam field is included.
 * Throws an Error with a user-friendly message on failure.
 */
export async function submitInquiry(fields: InquiryFields, form?: HTMLFormElement | null) {
  const body = new FormData();
  for (const [key, value] of Object.entries(fields)) {
    if (value instanceof File) body.append(key, value);
    else if (typeof value === "string" && value.trim()) body.append(key, value);
  }
  const trap = form?.elements.namedItem(HONEYPOT_FIELD);
  if (trap instanceof HTMLInputElement && trap.value) body.append(HONEYPOT_FIELD, trap.value);

  let res: Response;
  try {
    res = await fetch("/api/inquiry", { method: "POST", body });
  } catch {
    throw new Error(NETWORK_ERROR);
  }

  if (!res.ok) {
    const data = (await res.json().catch(() => null)) as { error?: string } | null;
    throw new Error(data?.error || NETWORK_ERROR);
  }
}
