"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import type { ConnectCategory } from "@/data/site-content";
import { Button } from "@/components/ui/Button";
import { EASE_OUT } from "@/components/motion/Reveal";

export function ContactForm({
  categories,
  submitLabel,
}: {
  categories: ConnectCategory[];
  submitLabel: string;
}) {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget));
    // Static prototype — no backend wired up yet.
    console.log("LOEXA contact form submission", data);
    setSubmitted(true);
  }

  return (
    <AnimatePresence mode="wait">
      {submitted ? (
        <motion.div
          key="thanks"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: EASE_OUT }}
          className="rounded-2xl bg-white p-10 text-center shadow-lg shadow-navy/5"
        >
          <h3 className="font-heading text-xl font-bold text-navy">Thank you.</h3>
          <p className="mt-3 text-slate">
            {"{{PLACEHOLDER: submission confirmation copy}}"}
          </p>
        </motion.div>
      ) : (
        <motion.form
          key="form"
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          transition={{ duration: 0.4, ease: EASE_OUT }}
          className="flex flex-col gap-6 rounded-2xl bg-white p-8 shadow-lg shadow-navy/5 sm:p-10"
        >
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <label className="flex flex-col gap-2">
              <span className="font-heading text-sm font-semibold text-navy">Full Name</span>
              <input
                required
                name="name"
                type="text"
                className="rounded-lg border border-navy/15 px-4 py-3 text-ink outline-none transition-colors focus:border-navy"
              />
            </label>
            <label className="flex flex-col gap-2">
              <span className="font-heading text-sm font-semibold text-navy">Email Address</span>
              <input
                required
                name="email"
                type="email"
                className="rounded-lg border border-navy/15 px-4 py-3 text-ink outline-none transition-colors focus:border-navy"
              />
            </label>
          </div>

          <label className="flex flex-col gap-2">
            <span className="font-heading text-sm font-semibold text-navy">Organisation</span>
            <input
              name="organisation"
              type="text"
              className="rounded-lg border border-navy/15 px-4 py-3 text-ink outline-none transition-colors focus:border-navy"
            />
          </label>

          <label className="flex flex-col gap-2">
            <span className="font-heading text-sm font-semibold text-navy">I&apos;m Reaching Out About</span>
            <select
              name="category"
              required
              defaultValue=""
              className="rounded-lg border border-navy/15 bg-white px-4 py-3 text-ink outline-none transition-colors focus:border-navy"
            >
              <option value="" disabled>
                Select a category
              </option>
              {categories.map((category) => (
                <option key={category.title} value={category.title}>
                  {category.title}
                </option>
              ))}
            </select>
          </label>

          <label className="flex flex-col gap-2">
            <span className="font-heading text-sm font-semibold text-navy">Message</span>
            <textarea
              required
              name="message"
              rows={5}
              className="resize-none rounded-lg border border-navy/15 px-4 py-3 text-ink outline-none transition-colors focus:border-navy"
            />
          </label>

          <Button type="submit" variant="primary" className="self-start">
            {submitLabel}
          </Button>
        </motion.form>
      )}
    </AnimatePresence>
  );
}
