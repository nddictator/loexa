import { cn } from "@/lib/utils";

// Faint decorative continent-line-art motif used at low opacity on navy
// panels, echoing the watermark behind the hero/footer tiles in the
// reference Corporate Profile deck. A stylised approximation, not a
// geographically precise map.
export function AfricaMotif({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden
      viewBox="0 0 300 340"
      className={cn("pointer-events-none select-none", className)}
      fill="none"
    >
      <path
        d="M120 5 C160 0 200 10 215 40 C230 65 210 90 235 110 C265 130 260 150 250 175 C245 195 260 205 255 230 C250 255 220 260 215 285 C210 305 190 300 185 320 C180 335 165 338 158 320 C150 300 140 305 130 285 C120 265 95 260 90 235 C85 210 60 200 65 175 C70 150 50 135 60 110 C70 90 55 65 75 45 C90 25 100 10 120 5 Z"
        stroke="currentColor"
        strokeWidth="2"
      />
      <circle cx="248" cy="292" r="6" stroke="currentColor" strokeWidth="2" />
    </svg>
  );
}
