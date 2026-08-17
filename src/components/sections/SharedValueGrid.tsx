import Image from "next/image";
import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { StaggerGroup, StaggerItem } from "@/components/motion/Stagger";

export interface SharedValueItem {
  label: string;
  icon: LucideIcon;
  image: string;
  tone: "navy" | "navy-light" | "gold" | "navy-dark";
}

const toneClasses: Record<SharedValueItem["tone"], string> = {
  navy: "bg-navy",
  "navy-light": "bg-navy-light",
  gold: "bg-gold",
  "navy-dark": "bg-navy-dark",
};

// Four-card layout matching the reference deck's "Creating Shared Value"
// tile: a solid-colour icon+label header over a photo, one card per
// stakeholder group. Photo zooms gently on hover, in-view stagger on scroll.
export function SharedValueGrid({ items }: { items: SharedValueItem[] }) {
  return (
    <StaggerGroup className="grid grid-cols-2 gap-4 lg:grid-cols-4">
      {items.map((item) => (
        <StaggerItem
          key={item.label}
          className="group overflow-hidden rounded-2xl shadow-lg shadow-navy/10 transition-shadow duration-300 hover:shadow-xl hover:shadow-navy/20"
        >
          <div
            className={cn(
              "flex flex-col items-center gap-2 px-4 py-6 sm:py-8",
              toneClasses[item.tone],
            )}
          >
            <item.icon className="h-8 w-8 text-white" strokeWidth={1.5} />
            <span className="text-xs font-bold uppercase tracking-wide text-white sm:text-sm">
              {item.label}
            </span>
          </div>
          <div className="relative h-32 overflow-hidden sm:h-44">
            <Image
              src={item.image}
              alt=""
              fill
              className="object-cover transition-transform duration-500 ease-out group-hover:scale-110"
            />
          </div>
        </StaggerItem>
      ))}
    </StaggerGroup>
  );
}
