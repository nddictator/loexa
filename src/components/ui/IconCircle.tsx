import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

type Tone = "navy" | "gold" | "white";
type Size = "sm" | "md" | "lg";

const toneClasses: Record<Tone, string> = {
  navy: "bg-navy text-white",
  gold: "bg-gold text-navy",
  white: "bg-white text-navy",
};

const sizeClasses: Record<Size, string> = {
  sm: "h-10 w-10",
  md: "h-14 w-14",
  lg: "h-[4.5rem] w-[4.5rem]",
};

const iconSizeClasses: Record<Size, string> = {
  sm: "h-4 w-4",
  md: "h-6 w-6",
  lg: "h-8 w-8",
};

export function IconCircle({
  icon: Icon,
  tone = "navy",
  size = "md",
  className,
}: {
  icon: LucideIcon;
  tone?: Tone;
  size?: Size;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "flex shrink-0 items-center justify-center rounded-full",
        toneClasses[tone],
        sizeClasses[size],
        className,
      )}
    >
      <Icon className={iconSizeClasses[size]} strokeWidth={2} />
    </span>
  );
}
