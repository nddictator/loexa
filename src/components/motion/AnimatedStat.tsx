"use client";

import { useEffect, useRef, useState } from "react";
import { useInView, animate } from "framer-motion";
import { EASE_OUT } from "./Reveal";

// Splits "1.4B+", "$2.6T", "~20%", "60%" into a static prefix/suffix and a
// numeric core that can be tweened, so the count-up keeps the source
// formatting exactly (no invented precision or units).
function parseValue(raw: string) {
  const match = raw.match(/^([^\d]*)(\d+(?:\.\d+)?)(.*)$/);
  if (!match) return null;
  const [, prefix, number, suffix] = match;
  const decimals = number.includes(".") ? number.split(".")[1].length : 0;
  return { prefix, target: parseFloat(number), suffix, decimals };
}

export function AnimatedStat({ value, className }: { value: string; className?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const parsed = parseValue(value);
  const [display, setDisplay] = useState(() => (parsed ? `${parsed.prefix}0${parsed.suffix}` : value));

  useEffect(() => {
    if (!inView) return;
    const p = parseValue(value);
    if (!p) return;
    const controls = animate(0, p.target, {
      duration: 1.5,
      ease: EASE_OUT,
      onUpdate: (v) => setDisplay(`${p.prefix}${v.toFixed(p.decimals)}${p.suffix}`),
    });
    return () => controls.stop();
  }, [inView, value]);

  return (
    <span ref={ref} className={className}>
      {display}
    </span>
  );
}
