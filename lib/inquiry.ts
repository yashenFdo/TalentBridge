/*
 * Who receives each website inquiry.
 *
 * Every form submits a `category`; the server looks up the recipient here.
 * hello@ is copied on everything so nothing is missed when someone is away.
 */

export const INQUIRY_ROUTES = {
  hiring: {
    label: "Hiring Talent",
    recipientName: "Yazid Kathir",
    recipientRole: "Growth and Partnerships Lead",
    email: "yazid@talentbridge.lk",
  },
  candidate: {
    label: "Finding Opportunities",
    recipientName: "Aman Siddik",
    recipientRole: "Founder / Head of Recruitment",
    email: "aman@talentbridge.lk",
  },
  general: {
    label: "General Inquiry",
    recipientName: "Talent Bridge",
    recipientRole: "General Inquiries",
    email: "hello@talentbridge.lk",
  },
} as const;

export type InquiryCategory = keyof typeof INQUIRY_ROUTES;

export const INQUIRY_CC = "hello@talentbridge.lk";

export function isInquiryCategory(value: unknown): value is InquiryCategory {
  return typeof value === "string" && Object.prototype.hasOwnProperty.call(INQUIRY_ROUTES, value);
}

/** CV uploads are sent as email attachments; keep under hosting request limits (Vercel: 4.5MB). */
export const MAX_CV_BYTES = 4 * 1024 * 1024;
export const CV_EXTENSIONS = /\.(pdf|docx?)$/i;

/** Name of the hidden anti-spam field. Real visitors never fill it in. */
export const HONEYPOT_FIELD = "website";
