"use client";

import { Fragment } from "react";
import { motion } from "framer-motion";
import { Landmark, GraduationCap, Lightbulb, UserCog, Globe, type LucideIcon } from "lucide-react";
import { EASE_OUT } from "@/components/motion/Reveal";

// Matches each category in `collaborativeApproachContent.categories` (site-content.ts)
// by position — icon + wedge colour for "OUR COLLABORATIVE APPROACH" (PDF tile 10).
const SEGMENTS: { icon: LucideIcon; color: string }[] = [
  { icon: Landmark, color: "#3D2470" }, // Government Partners
  { icon: GraduationCap, color: "#1B1440" }, // Educational Institutions
  { icon: Lightbulb, color: "#C9A227" }, // Industry Leaders
  { icon: UserCog, color: "#3D2470" }, // Development Partners
  { icon: Globe, color: "#1B1440" }, // Communities
];

const R_OUTER = 32;
const R_INNER = 17;
const GAP_DEG = 3;
const STEP_DELAY = 0.1;
const BASE_DELAY = 0.25;

function polarToCartesian(r: number, angleDeg: number) {
  const angleRad = (angleDeg * Math.PI) / 180;
  return { x: 50 + r * Math.cos(angleRad), y: 50 + r * Math.sin(angleRad) };
}

// First wedge is centred over the upper-left position (matching the
// reference deck's layout) rather than starting at 12 o'clock.
function wedgeAngles(index: number, count: number) {
  const step = 360 / count;
  const start = -90 + (index - 1) * step + GAP_DEG / 2;
  const end = start + step - GAP_DEG;
  return { start, end, mid: (start + end) / 2 };
}

function donutSegmentPath(startDeg: number, endDeg: number) {
  const outerStart = polarToCartesian(R_OUTER, startDeg);
  const outerEnd = polarToCartesian(R_OUTER, endDeg);
  const innerStart = polarToCartesian(R_INNER, startDeg);
  const innerEnd = polarToCartesian(R_INNER, endDeg);
  const largeArc = endDeg - startDeg > 180 ? 1 : 0;
  return [
    `M ${outerStart.x} ${outerStart.y}`,
    `A ${R_OUTER} ${R_OUTER} 0 ${largeArc} 1 ${outerEnd.x} ${outerEnd.y}`,
    `L ${innerEnd.x} ${innerEnd.y}`,
    `A ${R_INNER} ${R_INNER} 0 ${largeArc} 0 ${innerStart.x} ${innerStart.y}`,
    "Z",
  ].join(" ");
}

// Radial donut diagram matching "OUR COLLABORATIVE APPROACH" in the
// reference deck: LOEXA mark centred in a white ring, five coloured wedges
// with an icon each, labels outside the ring. Wedges sweep in from the
// centre one after another the first time the diagram scrolls into view;
// each wedge lifts slightly on hover.
export function CollaborativeApproachDiagram({ categories }: { categories: string[] }) {
  const count = categories.length;
  const viewport = { once: true, margin: "-60px" } as const;

  return (
    <div className="relative mx-auto aspect-square w-full max-w-2xl">
      <svg viewBox="0 0 100 100" className="h-full w-full overflow-visible">
        {categories.map((title, i) => {
          const { start, end } = wedgeAngles(i, count);
          return (
            <motion.path
              key={title}
              d={donutSegmentPath(start, end)}
              fill={SEGMENTS[i % SEGMENTS.length].color}
              style={{ transformBox: "view-box", transformOrigin: "50px 50px" } as React.CSSProperties}
              initial={{ opacity: 0, scale: 0.4 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.035 }}
              viewport={viewport}
              transition={{ duration: 0.55, delay: BASE_DELAY + i * STEP_DELAY, ease: EASE_OUT }}
            />
          );
        })}
        <circle cx="50" cy="50" r={R_INNER - 1} fill="white" />
      </svg>

      <motion.div
        className="absolute left-1/2 top-1/2 flex flex-col items-center text-center"
        initial={{ opacity: 0, scale: 0.6, x: "-50%", y: "-50%" }}
        whileInView={{ opacity: 1, scale: 1, x: "-50%", y: "-50%" }}
        viewport={viewport}
        transition={{ duration: 0.5, ease: EASE_OUT }}
      >
        <svg width="28" height="28" viewBox="0 0 40 40" aria-hidden focusable="false" className="mb-1 sm:h-9 sm:w-9">
          <path d="M20 4 L34 34 H26 L20 20 L14 34 H6 Z" fill="#2E1A5C" />
          <path d="M20 4 L27 20 H13 Z" fill="#C9A227" opacity="0.9" />
        </svg>
        <span className="font-heading text-xs font-bold leading-tight text-navy sm:text-base">LOEXA</span>
        <span className="font-heading text-[0.65rem] font-semibold leading-tight tracking-[0.15em] text-gold sm:text-xs">
          AFRICA
        </span>
      </motion.div>

      {categories.map((title, i) => {
        const { mid } = wedgeAngles(i, count);
        const iconPos = polarToCartesian((R_OUTER + R_INNER) / 2, mid);
        const labelPos = polarToCartesian(R_OUTER + 12, mid);
        const Icon = SEGMENTS[i % SEGMENTS.length].icon;
        const delay = BASE_DELAY + i * STEP_DELAY + 0.2;
        return (
          <Fragment key={title}>
            <motion.div
              className="absolute -translate-x-1/2 -translate-y-1/2"
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={viewport}
              transition={{ duration: 0.4, delay, ease: EASE_OUT }}
              style={{ left: `${iconPos.x}%`, top: `${iconPos.y}%` }}
            >
              <Icon className="h-6 w-6 text-white sm:h-8 sm:w-8" strokeWidth={1.5} />
            </motion.div>
            <motion.div
              className="absolute w-20 -translate-x-1/2 -translate-y-1/2 text-center sm:w-28"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={viewport}
              transition={{ duration: 0.4, delay, ease: EASE_OUT }}
              style={{ left: `${labelPos.x}%`, top: `${labelPos.y}%` }}
            >
              <p className="font-heading text-xs font-bold leading-tight text-navy sm:text-base">{title}</p>
            </motion.div>
          </Fragment>
        );
      })}
    </div>
  );
}
