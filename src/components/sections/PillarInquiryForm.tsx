"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Loader2, Send } from "lucide-react";
import { EASE_OUT } from "@/components/motion/Reveal";
import { contactDetails } from "@/data/site-content";

// Must match the hidden static form in layout.tsx (Netlify's build-time bot
// scans that file, not this client component, to register the form) — same
// name and the same field names.
const FORM_NAME = "pillar-inquiry";
const HONEYPOT_FIELD = "botField";

const inputClass =
  "rounded-lg border border-navy/15 bg-white px-4 py-3 text-ink outline-none transition-colors focus:border-[var(--pillar-accent)]";

function encode(data: Record<string, string>) {
  return Object.entries(data)
    .map(([key, value]) => `${encodeURIComponent(key)}=${encodeURIComponent(value)}`)
    .join("&");
}

type Status = "idle" | "submitting" | "success" | "error";

export function PillarInquiryForm({ pillarTitle }: { pillarTitle: string }) {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const values = Object.fromEntries(new FormData(form).entries()) as Record<string, string>;

    if (values[HONEYPOT_FIELD]) {
      // Bot-filled honeypot — pretend success without sending anything.
      setStatus("success");
      return;
    }

    setStatus("submitting");

    const [emailResult] = await Promise.allSettled([
      fetch("/api/pillar-inquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      }),
      fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode({ "form-name": FORM_NAME, ...values }),
      }),
    ]);

    if (emailResult.status === "fulfilled" && emailResult.value.ok) {
      setStatus("success");
      form.reset();
    } else {
      setStatus("error");
    }
  }

  return (
    <>
      <AnimatePresence mode="wait">
        {status === "success" ? (
          <motion.div
            key="thanks"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: EASE_OUT }}
            className="rounded-2xl border border-[var(--pillar-ring)] bg-white p-8 text-center"
          >
            <h3 className="font-heading text-lg font-bold text-navy">Thank you.</h3>
            <p className="mt-2 text-sm leading-relaxed text-slate">
              We&apos;ve received your enquiry about {pillarTitle} and will be in touch shortly.
            </p>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            name={FORM_NAME}
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.4, ease: EASE_OUT }}
            className="flex flex-col gap-5 rounded-2xl border border-[var(--pillar-ring)] bg-white p-6 sm:p-8"
          >
            <div>
              <h3 className="font-heading text-lg font-bold text-navy">Enquire about this pillar</h3>
              <div className="mt-2 inline-flex items-center gap-1.5 rounded-full bg-[var(--pillar-tint)] px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wide text-navy">
                Category: <span style={{ color: "var(--pillar-accent)" }}>{pillarTitle}</span>
              </div>
            </div>
            <input type="hidden" name="category" value={pillarTitle} />
            {/* Honeypot: visually and structurally hidden, never filled by a real visitor. */}
            <input
              type="text"
              name={HONEYPOT_FIELD}
              tabIndex={-1}
              autoComplete="off"
              aria-hidden="true"
              className="hidden"
            />

            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              <label className="flex flex-col gap-2">
                <span className="font-heading text-sm font-semibold text-navy">Full Name</span>
                <input required name="fullName" type="text" className={inputClass} />
              </label>
              <label className="flex flex-col gap-2">
                <span className="font-heading text-sm font-semibold text-navy">Email Address</span>
                <input required name="email" type="email" className={inputClass} />
              </label>
              <label className="flex flex-col gap-2">
                <span className="font-heading text-sm font-semibold text-navy">Contact Number</span>
                <input required name="contactNo" type="tel" className={inputClass} />
              </label>
              <label className="flex flex-col gap-2">
                <span className="font-heading text-sm font-semibold text-navy">WhatsApp Contact</span>
                <input required name="whatsappContact" type="tel" className={inputClass} />
              </label>
            </div>

            <label className="flex flex-col gap-2">
              <span className="font-heading text-sm font-semibold text-navy">Organization (optional)</span>
              <input name="organization" type="text" className={inputClass} />
            </label>

            <label className="flex flex-col gap-2">
              <span className="font-heading text-sm font-semibold text-navy">Message (optional)</span>
              <textarea name="message" rows={4} className={`resize-none ${inputClass}`} />
            </label>

            {status === "error" && (
              <p className="text-sm text-red-600">
                Something went wrong sending your enquiry. Please try again, or email us directly at{" "}
                <a href={`mailto:${contactDetails.email}`} className="underline">
                  {contactDetails.email}
                </a>
                .
              </p>
            )}

            <button
              type="submit"
              disabled={status === "submitting"}
              className="inline-flex w-fit items-center gap-2 rounded-full px-6 py-3 font-heading text-sm font-semibold uppercase tracking-wide text-white shadow-lg transition-transform hover:scale-[1.03] disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:scale-100"
              style={{ background: "var(--pillar-accent)" }}
            >
              {status === "submitting" ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" />
                  Sending
                </>
              ) : (
                <>
                  Send Enquiry
                  <Send className="h-4 w-4" />
                </>
              )}
            </button>
          </motion.form>
        )}
      </AnimatePresence>
    </>
  );
}
