import { HONEYPOT_FIELD } from "@/lib/inquiry";

/** Hidden field that only spam bots fill in. Place inside a <form>. */
export function HoneypotField() {
  return (
    <div aria-hidden="true" className="absolute -left-[9999px] w-px h-px overflow-hidden">
      <label>
        Leave this field empty
        <input type="text" name={HONEYPOT_FIELD} tabIndex={-1} autoComplete="off" defaultValue="" />
      </label>
    </div>
  );
}
