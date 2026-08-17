"use client";

import { Users, BookOpen, Lightbulb, TrendingUp, ArrowRight } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { StaggerGroup, StaggerItem } from "@/components/motion/Stagger";

const icons: LucideIcon[] = [Users, BookOpen, Lightbulb, TrendingUp];
const circleTones = ["bg-navy", "bg-navy", "bg-gold", "bg-navy-dark"];
const ringTones = ["ring-navy", "ring-navy", "ring-gold", "ring-navy-dark"];
const textTones = ["text-white", "text-white", "text-navy", "text-white"];

// "The LOEXA Way" — Connect / Develop / Empower / Grow. Circle icon flow
// with arrow connectors, distinct from ProcessSteps' numbered-dot layout.
export function LoexaWaySteps({ steps }: { steps: { title: string; description: string }[] }) {
  return (
    <StaggerGroup className="flex flex-col items-stretch gap-10 sm:flex-row sm:items-start sm:justify-center sm:gap-0">
      {steps.map((step, i) => (
        <div key={step.title} className="flex items-start">
          <StaggerItem className="flex w-36 flex-col items-center gap-4 text-center sm:w-40">
            <motion.span
              className={cn(
                "flex h-20 w-20 shrink-0 items-center justify-center rounded-full ring-2 ring-offset-4 ring-offset-white",
                circleTones[i % circleTones.length],
                ringTones[i % ringTones.length],
              )}
              whileHover={{ scale: 1.08 }}
              transition={{ type: "spring", stiffness: 350, damping: 20 }}
            >
              {(() => {
                const Icon = icons[i % icons.length];
                return <Icon className={cn("h-8 w-8", textTones[i % textTones.length])} strokeWidth={1.75} />;
              })()}
            </motion.span>
            <div>
              <h3 className="font-heading text-lg font-bold uppercase tracking-wide text-navy">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate">{step.description}</p>
            </div>
          </StaggerItem>
          {i < steps.length - 1 && (
            <ArrowRight className="mt-9 hidden h-5 w-5 shrink-0 text-ink sm:block" strokeWidth={2.25} />
          )}
        </div>
      ))}
    </StaggerGroup>
  );
}
