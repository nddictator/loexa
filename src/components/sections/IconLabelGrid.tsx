"use client";

import type { ReactNode } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { StaggerGroup, StaggerItem } from "@/components/motion/Stagger";

export interface IconLabelItem {
  icon: ReactNode;
  label: string;
}

// Icon + label grid (e.g. "Building Capability Together", "Markets We
// Enable" in the reference deck) — no card background or outer border, just
// a thin vertical divider between cells within each row. `icon` is a
// pre-rendered node, not a component reference — Server Components can't
// hand raw icon component functions across this "use client" boundary.
export function IconLabelGrid({
  items,
  columns = 4,
}: {
  items: IconLabelItem[];
  columns?: 2 | 3 | 4 | 5;
}) {
  const colClass = {
    2: "grid-cols-2",
    3: "grid-cols-1 sm:grid-cols-3",
    4: "grid-cols-2 sm:grid-cols-4",
    5: "grid-cols-2 sm:grid-cols-5",
  }[columns];

  return (
    <StaggerGroup className={cn("grid gap-y-10", colClass)}>
      {items.map((item, i) => (
        <StaggerItem
          key={item.label}
          className={cn(
            "flex flex-col items-center gap-3 px-4 py-2 text-center sm:px-6",
            i % columns !== 0 && "sm:border-l sm:border-navy/15",
          )}
        >
          <motion.div whileHover={{ scale: 1.12, rotate: -4 }} transition={{ type: "spring", stiffness: 350, damping: 18 }}>
            {item.icon}
          </motion.div>
          <span className="text-sm font-semibold text-navy">{item.label}</span>
        </StaggerItem>
      ))}
    </StaggerGroup>
  );
}
