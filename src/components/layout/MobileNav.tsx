"use client";

import { useState } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { X, ChevronDown } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Logo } from "./Logo";
import { mainNav, isNavDropdown } from "@/data/nav";
import { cn } from "@/lib/utils";

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
    <motion.div
      initial={{ x: "100%" }}
      animate={{ x: 0 }}
      exit={{ x: "100%" }}
      transition={{ type: "spring", stiffness: 320, damping: 34 }}
      className="fixed inset-0 z-[60] overflow-y-auto bg-navy lg:hidden"
    >
      <Container className="flex h-20 items-center justify-between">
        <Logo light />
        <button onClick={onClose} aria-label="Close menu" className="rounded-full p-2 text-white">
          <X className="h-6 w-6" />
        </button>
      </Container>
      <Container className="flex flex-col gap-2 pb-10">
        {mainNav.map((entry) =>
          isNavDropdown(entry) ? (
            <div key={entry.label} className="border-b border-white/10 py-3">
              <button
                className="flex w-full items-center justify-between font-heading text-lg font-semibold text-white"
                onClick={() => setOpenGroup(openGroup === entry.label ? null : entry.label)}
              >
                {entry.label}
                <ChevronDown
                  className={cn("h-5 w-5 transition-transform", openGroup === entry.label && "rotate-180")}
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
                    <div className="mt-2 flex flex-col gap-1 pl-2">
                      {entry.items.map((item) => (
                        <Link key={item.href} href={item.href} onClick={onClose} className="py-2 text-white/80">
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ) : (
            <Link
              key={entry.href}
              href={entry.href}
              onClick={onClose}
              className="border-b border-white/10 py-3 font-heading text-lg font-semibold text-white"
            >
              {entry.label}
            </Link>
          ),
        )}
        <Button href="/contact" variant="primary" className="mt-6 justify-center" onClick={onClose}>
          Contact
        </Button>
      </Container>
    </motion.div>,
    document.body,
  );
}
