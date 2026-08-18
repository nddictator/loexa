"use client";

import { useEffect } from "react";
import { createPortal } from "react-dom";
import { motion } from "framer-motion";
import { X } from "lucide-react";
import type { PillarTheme } from "@/data/pillars";
import { PillarInquiryForm } from "@/components/sections/PillarInquiryForm";

// Rendered only while open (parent wraps this in <AnimatePresence>), so the
// exit animation gets to play before unmount — same pattern as MobileNav.
export function PillarInquiryModal({
  pillarTitle,
  theme,
  onClose,
}: {
  pillarTitle: string;
  theme: PillarTheme;
  onClose: () => void;
}) {
  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [onClose]);

  return createPortal(
    <div
      className="fixed inset-0 z-[70] flex items-center justify-center p-4"
      style={
        {
          "--pillar-accent": theme.accent,
          "--pillar-accent-soft": theme.accentSoft,
          "--pillar-tint": theme.tint,
          "--pillar-ring": theme.ring,
          "--pillar-glow": theme.glow,
        } as React.CSSProperties
      }
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.25 }}
        className="absolute inset-0 bg-navy-dark/50 backdrop-blur-sm"
        onClick={onClose}
      />

      <motion.div
        initial={{ opacity: 0, y: 16, scale: 0.97 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 16, scale: 0.97 }}
        transition={{ type: "spring", stiffness: 320, damping: 30 }}
        role="dialog"
        aria-modal="true"
        aria-label={`Enquire about ${pillarTitle}`}
        className="relative w-full max-w-lg"
      >
        <button
          onClick={onClose}
          aria-label="Close"
          className="absolute right-4 top-4 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-offwhite text-navy transition-colors hover:bg-navy hover:text-white"
        >
          <X className="h-4 w-4" />
        </button>
        <div className="max-h-[90vh] overflow-y-auto rounded-2xl shadow-2xl">
          <PillarInquiryForm pillarTitle={pillarTitle} />
        </div>
      </motion.div>
    </div>,
    document.body,
  );
}
