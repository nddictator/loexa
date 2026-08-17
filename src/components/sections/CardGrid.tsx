"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { StaggerGroup, StaggerItem } from "@/components/motion/Stagger";

// Renders a flat list of strings (e.g. "Focus Areas", "Services", "Topics")
// as a grid of small cards — the checklist/tag visual language used
// throughout the reference deck for capability/sector lists.
export function CardGrid({
  items,
  columns = 3,
}: {
  items: string[];
  columns?: 2 | 3 | 4;
}) {
  const colClass = {
    2: "sm:grid-cols-2",
    3: "sm:grid-cols-2 lg:grid-cols-3",
    4: "sm:grid-cols-2 lg:grid-cols-4",
  }[columns];

  return (
    <StaggerGroup className={cn("grid grid-cols-1 gap-4", colClass)}>
      {items.map((item) => (
        <StaggerItem key={item}>
          <motion.div
            className="flex h-full items-start gap-3 rounded-xl bg-white p-5 shadow-md shadow-navy/5"
            whileHover={{ y: -4, boxShadow: "0 16px 32px -8px rgba(46, 26, 92, 0.15)" }}
            transition={{ type: "spring", stiffness: 320, damping: 24 }}
          >
            <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-gold" />
            <span className="font-medium text-ink">{item}</span>
          </motion.div>
        </StaggerItem>
      ))}
    </StaggerGroup>
  );
}
