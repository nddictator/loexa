"use client";

import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";
import type { PillarTheme } from "@/data/pillars";
import { PillarInquiryModal } from "@/components/sections/PillarInquiryModal";

export function PillarInquiryTrigger({
  pillarTitle,
  ctaLabel,
  theme,
}: {
  pillarTitle: string;
  ctaLabel: string;
  theme: PillarTheme;
}) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="mt-10 inline-flex w-fit items-center gap-2 rounded-full px-6 py-3 font-heading text-sm font-semibold uppercase tracking-wide text-white shadow-lg transition-transform hover:scale-[1.03]"
        style={{ background: theme.accent }}
      >
        {ctaLabel}
        <ArrowRight className="h-4 w-4" />
      </button>

      <AnimatePresence>
        {open && (
          <PillarInquiryModal pillarTitle={pillarTitle} theme={theme} onClose={() => setOpen(false)} />
        )}
      </AnimatePresence>
    </>
  );
}
