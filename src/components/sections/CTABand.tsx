"use client";

import { motion, type Variants } from "framer-motion";
import type { CTA } from "@/data/site-content";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { CornerCut } from "@/components/ui/CornerCut";
import { AfricaMotif } from "@/components/ui/AfricaMotif";
import { EASE_OUT } from "@/components/motion/Reveal";

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 22 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE_OUT } },
};

export function CTABand({
  eyebrow,
  heading,
  description,
  cta,
}: {
  eyebrow?: string;
  heading: string;
  description?: string;
  cta?: CTA;
}) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-navy to-navy-dark py-16 sm:py-20">
      <AfricaMotif className="pointer-events-none absolute -right-10 top-1/2 h-[140%] w-auto -translate-y-1/2 text-white/5" />
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        variants={containerVariants}
      >
        <Container className="relative flex flex-col items-center gap-6 text-center">
          {eyebrow && (
            <motion.p
              variants={itemVariants}
              className="font-heading text-sm font-semibold uppercase tracking-[0.2em] text-gold-light"
            >
              {eyebrow}
            </motion.p>
          )}
          <motion.h2 variants={itemVariants} className="max-w-2xl font-heading text-3xl font-bold text-white sm:text-4xl">
            {heading}
          </motion.h2>
          {description && (
            <motion.p variants={itemVariants} className="max-w-xl text-white/80">
              {description}
            </motion.p>
          )}
          {cta && (
            <motion.div variants={itemVariants}>
              <Button href={cta.href} variant="primary">
                {cta.label}
              </Button>
            </motion.div>
          )}
        </Container>
      </motion.div>
      <CornerCut className="hidden sm:block" />
    </section>
  );
}
