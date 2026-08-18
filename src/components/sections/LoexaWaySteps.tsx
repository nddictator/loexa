"use client";

import { Users, BookOpen, Lightbulb, TrendingUp, ArrowRight, ArrowDown } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { StaggerGroup, StaggerItem } from "@/components/motion/Stagger";

const icons: LucideIcon[] = [Users, BookOpen, Lightbulb, TrendingUp];
const circleTones = ["bg-navy", "bg-navy", "bg-gold", "bg-navy-dark"];
const ringTones = ["ring-navy", "ring-navy", "ring-gold", "ring-navy-dark"];
const textTones = ["text-white", "text-white", "text-navy", "text-white"];

function StepCircle({ step, index }: { step: { title: string; description: string }; index: number }) {
  const Icon = icons[index % icons.length];
  return (
    <StaggerItem className="flex w-full max-w-36 flex-col items-center gap-4 text-center sm:w-40">
      <motion.span
        className={cn(
          "flex h-20 w-20 shrink-0 items-center justify-center rounded-full ring-2 ring-offset-4 ring-offset-white",
          circleTones[index % circleTones.length],
          ringTones[index % ringTones.length],
        )}
        whileHover={{ scale: 1.08 }}
        transition={{ type: "spring", stiffness: 350, damping: 20 }}
      >
        <Icon className={cn("h-8 w-8", textTones[index % textTones.length])} strokeWidth={1.75} />
      </motion.span>
      <div>
        <h3 className="font-heading text-lg font-bold uppercase tracking-wide text-navy">{step.title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-slate">{step.description}</p>
      </div>
    </StaggerItem>
  );
}

// "The LOEXA Way" — Connect / Develop / Empower / Grow. Circle icon flow
// with arrow connectors, distinct from ProcessSteps' numbered-dot layout.
//
// Below `sm`, a single-column stack has no room for the row layout's
// horizontal arrows, so steps used to just stack with no connector at all.
// Instead, mobile lays steps out as a 2-column, snaking flow (right across
// each row, down to the next) with an arrow at every transition, so the
// sequence still reads clearly.
export function LoexaWaySteps({ steps }: { steps: { title: string; description: string }[] }) {
  const rows: { title: string; description: string }[][] = [];
  for (let i = 0; i < steps.length; i += 2) {
    rows.push(steps.slice(i, i + 2));
  }

  return (
    <>
      {/* Mobile: 2-column snaking flow — its own StaggerGroup so a hidden,
          zero-size block on desktop doesn't eat into the visible row's
          stagger delay (both blocks always exist in the DOM; only one is
          shown per breakpoint, same pattern as Header/MobileNav). */}
      <StaggerGroup className="flex flex-col items-center gap-6 sm:hidden">
        {rows.map((row, rowIndex) => (
          <div key={rowIndex} className="flex w-full flex-col items-center gap-6">
            {rowIndex > 0 && <ArrowDown className="h-5 w-5 shrink-0 text-ink" strokeWidth={2.25} />}
            <div className="grid w-full grid-cols-[1fr_auto_1fr] items-start gap-3">
              <StepCircle step={row[0]} index={rowIndex * 2} />
              {row.length > 1 ? (
                <ArrowRight className="mt-9 h-5 w-5 shrink-0 text-ink" strokeWidth={2.25} />
              ) : (
                <span />
              )}
              {row[1] && <StepCircle step={row[1]} index={rowIndex * 2 + 1} />}
            </div>
          </div>
        ))}
      </StaggerGroup>

      {/* sm and up: single row */}
      <StaggerGroup className="hidden items-start justify-center sm:flex">
        {steps.map((step, i) => (
          <div key={step.title} className="flex items-start">
            <StepCircle step={step} index={i} />
            {i < steps.length - 1 && (
              <ArrowRight className="mt-9 h-5 w-5 shrink-0 text-ink" strokeWidth={2.25} />
            )}
          </div>
        ))}
      </StaggerGroup>
    </>
  );
}
