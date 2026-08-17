import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";

// Same logo.png lockup used in the hero and footer. That asset is white-on-
// transparent (built for navy backgrounds), so on a light background
// (`light` false — the header's case) it's darkened with `brightness(0)` to
// stay legible; on a dark background it renders as-is.
export function Logo({ light = false, className }: { light?: boolean; className?: string }) {
  return (
    <Link href="/" className="flex items-center">
      <Image
        src="/logo.png"
        alt="LOEXA Africa"
        width={510}
        height={490}
        priority
        className={cn("h-12 w-auto sm:h-14", className)}
        style={{ filter: light ? "none" : "brightness(0)" }}
      />
    </Link>
  );
}
