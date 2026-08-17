"use client";

import Image from "next/image";
import { motion, type Variants } from "framer-motion";
import type { CTA } from "@/data/site-content";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { CornerCut } from "@/components/ui/CornerCut";
import { AfricaMotif } from "@/components/ui/AfricaMotif";
import { EASE_OUT } from "@/components/motion/Reveal";
import { cn } from "@/lib/utils";

interface HeadingLine {
  text: string;
  accent?: boolean;
}

// Above the fold, so the entrance fires on mount rather than on scroll —
// each piece rises in a beat after the last, heaviest element (heading)
// first, supporting copy trailing behind it.
const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 26 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: EASE_OUT } },
};

export function HeroSection({
  eyebrow,
  heading,
  headingLines,
  subheading,
  description,
  ctas,
  size = "lg",
  image,
  logo = false,
}: {
  eyebrow?: string;
  // Plain single-line heading. Ignored when `headingLines` is provided.
  heading?: string;
  // Stacked two-tone heading (e.g. cover-tile style: white line(s), then a
  // gold accent line) — same words as the content doc, just re-flowed and
  // recoloured, not reworded.
  headingLines?: HeadingLine[];
  subheading?: string;
  description?: string;
  ctas?: CTA[];
  size?: "lg" | "md";
  // Temporary stock photo until the client provides real photography —
  // rendered under a left-to-right gradient so the text zone stays fully
  // legible while the photo's own colour stays visible toward the right,
  // matching the reference cover tile rather than flattening it to navy.
  image?: string;
  // Shows the logo lockup (public/logo.png) top-left inside the hero,
  // cover-tile style — off by default since most inner-page heroes sit
  // directly under the header logo already.
  logo?: boolean;
}) {
  return (
    <section
      className={cn(
        "relative overflow-hidden bg-gradient-to-br from-navy to-navy-dark",
        size === "lg" ? "py-12 sm:py-22" : "py-8 sm:py-20",
      )}
    >
      {image && (
        <motion.div
          className="absolute inset-0"
          initial={{ opacity: 0, scale: 1.06 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: EASE_OUT }}
        >
          <Image src={image} alt="" fill priority sizes="100vw" className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/75 to-navy/25" />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/80 via-transparent to-navy/30" />
        </motion.div>
      )}
      <AfricaMotif className="pointer-events-none absolute -right-10 top-1/2 h-[150%] w-auto -translate-y-1/2 text-white/15" />
      <Container className="relative max-w-4xl">
        <motion.div
          className="flex flex-col gap-6"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          {logo && (
            <motion.div variants={itemVariants} className="-mb-3 self-start">
              <Image
                src="/logo.png"
                alt="LOEXA Africa"
                width={510}
                height={490}
                className="h-28 w-auto sm:h-32 lg:h-36"
                priority
              />
            </motion.div>
          )}
          {eyebrow && (
            <motion.p
              variants={itemVariants}
              className="font-heading text-sm font-semibold uppercase tracking-[0.2em] text-gold-light"
            >
              {eyebrow}
            </motion.p>
          )}
          {headingLines ? (
            <motion.h1
              variants={itemVariants}
              className={cn(
                "font-heading font-bold leading-tight",
                size === "lg" ? "text-4xl sm:text-5xl lg:text-6xl" : "text-3xl sm:text-4xl",
              )}
            >
              {headingLines.map((line) => (
                <span key={line.text} className={cn("block", line.accent ? "text-gold" : "text-white")}>
                  {line.text}
                </span>
              ))}
            </motion.h1>
          ) : (
            heading && (
              <motion.h1
                variants={itemVariants}
                className={cn(
                  "font-heading font-bold leading-tight text-white",
                  size === "lg" ? "text-4xl sm:text-5xl lg:text-6xl" : "text-3xl sm:text-4xl",
                )}
              >
                {heading}
              </motion.h1>
            )
          )}
          {subheading && (
            <motion.p variants={itemVariants} className="font-heading text-lg font-medium text-gold-light sm:text-xl">
              {subheading}
            </motion.p>
          )}
          {description && (
            <motion.p variants={itemVariants} className="max-w-2xl text-base leading-relaxed text-white/80 sm:text-lg">
              {description}
            </motion.p>
          )}
          {ctas && ctas.length > 0 && (
            <motion.div variants={itemVariants} className="mt-2 flex flex-wrap gap-4">
              {ctas.map((cta, i) => (
                <Button key={cta.label} href={cta.href} variant={i === 0 ? "primary" : "ghost-light"}>
                  {cta.label}
                </Button>
              ))}
            </motion.div>
          )}
        </motion.div>
      </Container>
      <CornerCut />
    </section>
  );
}
