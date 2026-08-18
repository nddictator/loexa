"use client";

import { useState } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import { AnimatePresence, motion, type Variants } from "framer-motion";
import { X, ChevronDown, ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { AfricaMotif } from "@/components/ui/AfricaMotif";
import { Logo } from "./Logo";
import { mainNav, isNavDropdown } from "@/data/nav";
import { cn } from "@/lib/utils";

const listVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.06, delayChildren: 0.15 } },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, x: 24 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] } },
};

const navRowClass =
  "group flex w-full items-center justify-between rounded-xl px-4 py-4 text-left font-heading text-base font-semibold text-navy transition-colors hover:bg-offwhite";

// Rendered only while open (parent wraps this in <AnimatePresence>), so the
// exit animation below actually gets to play before unmount.
export function MobileNav({ onClose }: { onClose: () => void }) {
  const [openGroup, setOpenGroup] = useState<string | null>(null);

  // Portalled to <body> because `backdrop-blur` on the sticky header
  // creates a new containing block for `position: fixed` descendants,
  // which otherwise collapses this overlay to the header's own height.
  // Safe to call document.body here unguarded: this component only mounts
  // client-side, from a click handler, after the DOM exists.
  return createPortal(
    <div className="fixed inset-0 z-[60] lg:hidden">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.25 }}
        className="absolute inset-0 bg-navy-dark/50 backdrop-blur-sm"
        onClick={onClose}
      />

      <motion.div
        initial={{ x: "100%" }}
        animate={{ x: 0 }}
        exit={{ x: "100%" }}
        transition={{ type: "spring", stiffness: 320, damping: 34 }}
        className="absolute right-0 top-0 flex h-full w-full max-w-sm flex-col overflow-hidden bg-white shadow-2xl"
      >
        <AfricaMotif className="pointer-events-none absolute -bottom-10 -left-16 h-64 w-auto text-navy/[0.04]" />

        <div className="relative flex h-20 shrink-0 items-center justify-between border-b border-navy/10 px-6">
          <Logo className="h-11 sm:h-11" />
          <button
            onClick={onClose}
            aria-label="Close menu"
            className="flex h-10 w-10 items-center justify-center rounded-full bg-offwhite text-navy transition-colors hover:bg-navy hover:text-white"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={listVariants}
          className="relative flex-1 overflow-y-auto px-4 py-4"
        >
          {mainNav.map((entry) =>
            isNavDropdown(entry) ? (
              <motion.div key={entry.label} variants={itemVariants}>
                <button
                  className={navRowClass}
                  onClick={() => setOpenGroup(openGroup === entry.label ? null : entry.label)}
                >
                  {entry.label}
                  <ChevronDown
                    className={cn(
                      "h-5 w-5 text-navy/40 transition-transform",
                      openGroup === entry.label && "rotate-180 text-gold",
                    )}
                  />
                </button>
                <AnimatePresence initial={false}>
                  {openGroup === entry.label && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                      className="overflow-hidden"
                    >
                      <div className="ml-6 flex flex-col gap-0.5 border-l-2 border-gold/30 py-1 pl-4">
                        {entry.items.map((item) => (
                          <Link
                            key={item.href}
                            href={item.href}
                            onClick={onClose}
                            className="rounded-lg px-3 py-2.5 text-sm font-medium text-slate transition-colors hover:bg-offwhite hover:text-navy"
                          >
                            {item.label}
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ) : (
              <motion.div key={entry.href} variants={itemVariants}>
                <Link href={entry.href} onClick={onClose} className={navRowClass}>
                  {entry.label}
                  <ArrowRight className="h-4 w-4 -translate-x-1 text-navy/0 transition-all duration-200 group-hover:translate-x-0 group-hover:text-gold" />
                </Link>
              </motion.div>
            ),
          )}
        </motion.div>

        <Container className="relative shrink-0 border-t border-navy/10 py-6">
          <Button href="/contact" variant="primary" className="w-full justify-center" onClick={onClose}>
            Contact
          </Button>
        </Container>
      </motion.div>
    </div>,
    document.body,
  );
}
