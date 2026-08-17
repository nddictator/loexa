"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary" | "outline" | "ghost-light";

const variantClasses: Record<ButtonVariant, string> = {
  primary: "bg-gold text-navy hover:bg-gold-light",
  secondary: "bg-navy text-white hover:bg-navy-light",
  outline: "border border-navy text-navy hover:bg-navy hover:text-white",
  "ghost-light": "border border-white/40 text-white hover:bg-white hover:text-navy",
};

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  variant?: ButtonVariant;
  type?: "button" | "submit";
  className?: string;
  onClick?: () => void;
}

export function Button({
  children,
  href,
  variant = "primary",
  type = "button",
  className,
  onClick,
}: ButtonProps) {
  const classes = cn(
    "group inline-flex items-center gap-2 rounded-full px-6 py-3 font-heading text-sm font-semibold uppercase tracking-wide transition-colors duration-200",
    variantClasses[variant],
    className,
  );

  const content = (
    <>
      {children}
      <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
    </>
  );

  const tap = { scale: 0.96 };
  const hover = { scale: 1.03 };
  const spring = { type: "spring" as const, stiffness: 400, damping: 22 };

  if (href) {
    return (
      <motion.span className="inline-block" whileHover={hover} whileTap={tap} transition={spring}>
        <Link href={href} className={classes} onClick={onClick}>
          {content}
        </Link>
      </motion.span>
    );
  }

  return (
    <motion.button
      type={type}
      onClick={onClick}
      className={classes}
      whileHover={hover}
      whileTap={tap}
      transition={spring}
    >
      {content}
    </motion.button>
  );
}
