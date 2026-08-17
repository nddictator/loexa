"use client";

import { MotionConfig } from "framer-motion";
import type { ReactNode } from "react";

// Honours the OS/browser "reduce motion" preference site-wide — every
// whileInView / whileHover animation collapses to an instant state change
// for users who've asked for it, without each component checking itself.
export function MotionProvider({ children }: { children: ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
