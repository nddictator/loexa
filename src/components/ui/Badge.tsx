import { cn } from "@/lib/utils";

export function Badge({
  children,
  tone = "navy",
  className,
}: {
  children: React.ReactNode;
  tone?: "navy" | "gold" | "light";
  className?: string;
}) {
  const toneClasses = {
    navy: "bg-navy/5 text-navy",
    gold: "bg-gold/10 text-navy",
    light: "bg-white/10 text-white",
  }[tone];

  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium",
        toneClasses,
        className,
      )}
    >
      <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
      {children}
    </span>
  );
}
