import { cn } from "@/lib/utils";

// The diagonal corner notch seen on every tile in the reference Corporate
// Profile deck — gold on navy panels, navy on light panels (the accent
// always contrasts with the section it sits on).
export function CornerCut({
  position = "bottom-right",
  tone = "gold",
  className,
}: {
  position?: "bottom-right" | "bottom-left";
  tone?: "gold" | "navy";
  className?: string;
}) {
  const isRight = position === "bottom-right";
  return (
    <span
      aria-hidden
      className={cn(
        "pointer-events-none absolute bottom-0 h-10 w-10 sm:h-14 sm:w-14",
        tone === "gold" ? "bg-gold" : "bg-navy",
        isRight ? "right-0" : "left-0",
        className,
      )}
      style={{
        clipPath: isRight
          ? "polygon(100% 0, 0% 100%, 100% 100%)"
          : "polygon(0 0, 100% 100%, 0 100%)",
      }}
    />
  );
}
