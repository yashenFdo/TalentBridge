import type { FormEvent, InputHTMLAttributes } from "react";

/*
 * Shared form validation rules.
 *
 * These are used as HTML `pattern` attributes, which browsers anchor
 * automatically (^...$) and compile with the `v` (or `u`) flag — so
 * `\p{L}` works and a literal `-` inside a character class must be escaped.
 */

/** Letters (any language), single spaces, and . ' - between words. No digits or symbols. */
export const NAME_PATTERN = String.raw` *\p{L}+(?:(?:\. ?| +|['’\-])\p{L}+)*\.? *`;

/** name@domain.tld — no leading/trailing/double dots, TLD of 2+ letters. */
export const EMAIL_PATTERN = String.raw`[A-Za-z0-9_%+\-]+(?:\.[A-Za-z0-9_%+\-]+)*@(?:[A-Za-z0-9](?:[A-Za-z0-9\-]{0,61}[A-Za-z0-9])?\.)+[A-Za-z]{2,}`;

/**
 * Mobile numbers.
 * - Sri Lanka: 07X XXX XXXX, +94 7X XXX XXXX, 947XXXXXXXX, 00947XXXXXXXX
 * - International (non +94): + country code followed by 7–16 digits in total
 * Spaces or dashes between digits are allowed.
 */
export const PHONE_PATTERN = String.raw`(?:\+94|0094|94|0)[ \-]?7[0-9](?:[ \-]?[0-9]){7}|\+(?!94)[1-9][0-9]{0,3}(?:[ \-]?[0-9]){6,12}`;

export const NAME_MESSAGE =
  "Please enter a valid name using letters only (no numbers or special characters).";
export const EMAIL_MESSAGE = "Please enter a valid email address, e.g. name@company.com.";
export const PHONE_MESSAGE =
  "Please enter a valid mobile number, e.g. 077 123 4567 or +94 77 123 4567.";

type FieldProps = Pick<
  InputHTMLAttributes<HTMLInputElement>,
  "pattern" | "title" | "onInvalid" | "onInput" | "autoComplete" | "inputMode"
>;

function field(
  pattern: string,
  message: string,
  extra: Pick<FieldProps, "autoComplete" | "inputMode">
): FieldProps {
  return {
    pattern,
    title: message,
    // Show our message for format errors; keep the browser's "please fill out" for empty required fields.
    onInvalid: (e: FormEvent<HTMLInputElement>) => {
      const el = e.currentTarget;
      el.setCustomValidity(el.validity.valueMissing ? "" : message);
    },
    // Clear the custom error as soon as the user edits, so the pattern is re-checked.
    onInput: (e: FormEvent<HTMLInputElement>) => e.currentTarget.setCustomValidity(""),
    ...extra,
  };
}

/** Spread onto a name <input>: `<input type="text" {...NAME_FIELD} ... />` */
export const NAME_FIELD = field(NAME_PATTERN, NAME_MESSAGE, { autoComplete: "name" });

/** Spread onto an email <input>: `<input type="email" {...EMAIL_FIELD} ... />` */
export const EMAIL_FIELD = field(EMAIL_PATTERN, EMAIL_MESSAGE, {
  autoComplete: "email",
  inputMode: "email",
});

/** Spread onto a mobile number <input>: `<input type="tel" {...PHONE_FIELD} ... />` */
export const PHONE_FIELD = field(PHONE_PATTERN, PHONE_MESSAGE, {
  autoComplete: "tel",
  inputMode: "tel",
});
