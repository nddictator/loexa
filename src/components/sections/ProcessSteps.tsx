"use client";

import { motion } from "framer-motion";
import type { ProcessStep } from "@/data/site-content";
import { cn } from "@/lib/utils";
import { StaggerGroup, StaggerItem } from "@/components/motion/Stagger";

const tones = ["bg-navy-dark", "bg-navy", "bg-navy-light", "bg-gold"];

// Handles both shapes the content doc uses: full steps with a description
// (e.g. "Our Process": Identify/Assess/Design/...), and bare label flows
// (e.g. "Assess → Design → Align → Implement → Measure") passed with only
// a title.
export function ProcessSteps({ steps }: { steps: ProcessStep[] }) {
  return (
    <StaggerGroup className="grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-3 lg:flex lg:flex-row lg:items-start lg:justify-between lg:gap-4">
      {steps.map((step, i) => {
        const tone = tones[i % tones.length];
        const isGold = tone === "bg-gold";
        return (
          <StaggerItem key={step.title} className="relative flex flex-1 flex-col items-center gap-4 px-2 text-center">
            {i > 0 && (
              <span
                aria-hidden
                className="absolute left-[-50%] top-7 hidden h-px w-full bg-navy/15 lg:block"
              />
            )}
            <motion.span
              className={cn(
                "relative z-10 flex h-14 w-14 items-center justify-center rounded-full font-heading text-lg font-bold",
                tone,
                isGold ? "text-navy" : "text-white",
              )}
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 350, damping: 20 }}
            >
              {step.number ?? i + 1}
            </motion.span>
            <h3 className="font-heading text-base font-bold text-navy">{step.title}</h3>
            {step.description && (
              <p className="text-sm leading-relaxed text-slate">{step.description}</p>
            )}
          </StaggerItem>
        );
      })}
    </StaggerGroup>
  );
}
