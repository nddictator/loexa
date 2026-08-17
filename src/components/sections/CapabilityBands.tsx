import Image from "next/image";
import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { StaggerGroup, StaggerItem } from "@/components/motion/Stagger";

export interface CapabilityBandItem {
  icon: LucideIcon;
  title: string;
  description: string;
  image: string;
  tone: "navy" | "navy-light" | "gold" | "navy-dark";
}

const gradientClasses: Record<CapabilityBandItem["tone"], string> = {
  navy: "bg-gradient-to-r from-navy-dark to-navy",
  "navy-light": "bg-gradient-to-r from-navy to-navy-light",
  gold: "bg-gradient-to-r from-gold to-gold-light",
  "navy-dark": "bg-gradient-to-r from-navy-dark to-navy-dark",
};

// Matches the solid color each gradient ends on, so the fade overlay on the
// photo can pick up seamlessly where the panel leaves off.
const fadeClasses: Record<CapabilityBandItem["tone"], string> = {
  navy: "from-navy",
  "navy-light": "from-navy-light",
  gold: "from-gold-light",
  "navy-dark": "from-navy-dark",
};

// Stacked full-width bands, each a gradient icon/text panel beside a photo
// strip — matches the reference deck's "Where We Create Capability" tile.
export function CapabilityBands({ items }: { items: CapabilityBandItem[] }) {
  return (
    <StaggerGroup className="flex flex-col gap-3">
      {items.map((item) => (
        <StaggerItem
          key={item.title}
          className="group flex overflow-hidden rounded-xl shadow-md shadow-navy/10 transition-shadow duration-300 hover:shadow-xl hover:shadow-navy/20"
        >
          <div
            className={cn(
              "flex flex-1 items-center gap-4 px-5 py-5 transition-transform duration-300 ease-out group-hover:-translate-y-0.5 sm:px-8",
              gradientClasses[item.tone],
            )}
          >
            <item.icon className="h-8 w-8 shrink-0 text-white" strokeWidth={1.5} />
            <div>
              <h3 className="font-heading text-sm font-bold uppercase tracking-wide text-white sm:text-base">
                {item.title}
              </h3>
              <p className="mt-1 text-xs leading-snug text-white/80 sm:text-sm">{item.description}</p>
            </div>
          </div>
          <div className="relative w-24 shrink-0 overflow-hidden sm:w-40 md:w-56 lg:w-72">
            <Image
              src={item.image}
              alt=""
              fill
              className="object-cover transition-transform duration-500 ease-out group-hover:scale-110"
            />
            <div
              className={cn(
                "pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r to-transparent sm:w-24",
                fadeClasses[item.tone],
              )}
            />
          </div>
        </StaggerItem>
      ))}
    </StaggerGroup>
  );
}
