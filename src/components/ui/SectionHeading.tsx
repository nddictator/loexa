import { cn } from "@/lib/utils";

export function SectionHeading({
  eyebrow,
  heading,
  description,
  align = "left",
  light = false,
  className,
}: {
  eyebrow?: string;
  heading: string;
  description?: string;
  align?: "left" | "center";
  light?: boolean;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "max-w-3xl",
        align === "center" ? "mx-auto text-center" : "text-left",
        className,
      )}
    >
      {eyebrow && (
        <p
          className={cn(
            "mb-3 font-heading text-sm font-semibold uppercase tracking-[0.2em]",
            light ? "text-gold-light" : "text-gold",
          )}
        >
          {eyebrow}
        </p>
      )}
      <h2
        className={cn(
          "font-heading text-3xl font-bold leading-tight sm:text-4xl",
          light ? "text-white" : "text-navy",
        )}
      >
        {heading}
      </h2>
      {description && (
        <p
          className={cn(
            "mt-4 text-base leading-relaxed sm:text-lg",
            light ? "text-white/80" : "text-slate",
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}
