"use client";

import type { ReactNode } from "react";
import { motion } from "framer-motion";

// `icon` is a pre-rendered node (e.g. <IconCircle icon={X} .../>), not a
// component reference — Server Components can't hand raw icon component
// functions to a "use client" component like this one, only rendered JSX.
export function PillarCard({
  number,
  title,
  description,
  icon,
}: {
  number: string;
  title: string;
  description: string;
  icon: ReactNode;
}) {
  return (
    <motion.div
      className="flex h-full flex-col gap-4 rounded-2xl bg-white p-8 shadow-lg shadow-navy/5"
      whileHover={{ y: -8, boxShadow: "0 24px 48px -12px rgba(46, 26, 92, 0.18)" }}
      transition={{ type: "spring", stiffness: 300, damping: 24 }}
    >
      <div className="flex items-start justify-between">
        {icon}
        <span className="font-heading text-4xl font-bold leading-none text-gold">{number}</span>
      </div>
      <h3 className="font-heading text-xl font-bold text-navy">{title}</h3>
      <p className="leading-relaxed text-slate">{description}</p>
    </motion.div>
  );
}
