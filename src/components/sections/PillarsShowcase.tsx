"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { pillars } from "@/data/pillars";
import { StaggerGroup, StaggerItem } from "@/components/motion/Stagger";

// The five-card grid on Home. Each card opens its detail page in a new tab
// (the pillar pages are a deep-dive destination, not a replacement for the
// homepage scroll) and is themed with that pillar's own accent colour via
// CSS custom properties, so Tailwind's static utility classes stay generic
// (`bg-[var(--pillar-accent)]`) while the actual colour is set per card.
export function PillarsShowcase() {
  return (
    <StaggerGroup className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-6">
      {pillars.map((pillar, i) => {
        const Icon = pillar.icon;
        return (
          <StaggerItem
            key={pillar.slug}
            className={i === 3 ? "lg:col-span-2 lg:col-start-2" : "lg:col-span-2"}
          >
            <Link
              href={`/pillars/${pillar.slug}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group block h-full"
              style={
                {
                  "--pillar-accent": pillar.theme.accent,
                  "--pillar-tint": pillar.theme.tint,
                  "--pillar-ring": pillar.theme.ring,
                } as React.CSSProperties
              }
            >
              <motion.div
                className="relative flex h-full flex-col gap-5 overflow-hidden rounded-2xl border border-transparent bg-white p-8 shadow-lg shadow-navy/5 transition-colors duration-300 group-hover:border-[var(--pillar-ring)]"
                whileHover={{ y: -8, boxShadow: "0 28px 56px -16px rgba(46, 26, 92, 0.24)" }}
                transition={{ type: "spring", stiffness: 300, damping: 24 }}
              >
                {/* Tint wash that fades in behind the content on hover */}
                <div
                  aria-hidden
                  className="pointer-events-none absolute inset-0 bg-[var(--pillar-tint)] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                />

                <div className="relative flex items-start justify-between">
                  <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[var(--pillar-accent)] text-white transition-transform duration-300 group-hover:scale-110">
                    <Icon className="h-6 w-6" strokeWidth={2} />
                  </span>
                  <span className="font-heading text-4xl font-bold leading-none text-navy/10">
                    {pillar.number}
                  </span>
                </div>

                <div className="relative flex-1">
                  <h3 className="font-heading text-xl font-bold text-navy">{pillar.title}</h3>
                  <p className="mt-2 leading-relaxed text-slate">{pillar.tagline}</p>
                </div>

                <div className="relative flex items-center gap-1.5 text-sm font-semibold text-[var(--pillar-accent)]">
                  Explore More
                  <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                </div>
              </motion.div>
            </Link>
          </StaggerItem>
        );
      })}
    </StaggerGroup>
  );
}
