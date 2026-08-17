"use client";

import type { ReactNode } from "react";
import { motion } from "framer-motion";
import type { StatItem } from "@/data/site-content";
import { StaggerGroup, StaggerItem } from "@/components/motion/Stagger";
import { AnimatedStat } from "@/components/motion/AnimatedStat";

// Bordered stat grid with divider lines between cells (e.g. "Africa's
// Opportunity") — small line icon beside a big figure, in the same
// bordered/divided visual language as IconLabelGrid. Figures count up from
// zero the first time the grid scrolls into view. `icons` are pre-rendered
// nodes, not component references — this is a "use client" boundary and
// Server Components can't hand raw icon component functions across it.
export function StatGrid({ stats, icons }: { stats: StatItem[]; icons: ReactNode[] }) {
  return (
    <StaggerGroup className="grid grid-cols-1 divide-y divide-navy/10 overflow-hidden rounded-2xl border border-navy/10 bg-white sm:grid-cols-3 sm:divide-x">
      {stats.map((stat, i) => (
        <StaggerItem key={stat.label}>
          <motion.div
            className="flex h-full items-start gap-4 p-6 sm:p-8"
            whileHover={{ backgroundColor: "rgba(46, 26, 92, 0.03)" }}
            transition={{ duration: 0.2 }}
          >
            {icons[i % icons.length]}
            <div>
              <p className="font-heading text-2xl font-bold text-navy sm:text-3xl">
                <AnimatedStat value={stat.value} />
              </p>
              <p className="mt-1 text-sm leading-snug text-slate">{stat.label}</p>
            </div>
          </motion.div>
        </StaggerItem>
      ))}
    </StaggerGroup>
  );
}
