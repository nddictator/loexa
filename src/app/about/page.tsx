import type { Metadata } from "next";
import Image from "next/image";
import { Target } from "lucide-react";
import { IconCircle } from "@/components/ui/IconCircle";
import { Reveal } from "@/components/motion/Reveal";
import { aboutContent } from "@/data/site-content";
import { placeholderImages } from "@/data/placeholder-images";

export const metadata: Metadata = {
  title: "About LOEXA Africa",
  description: aboutContent.hero.paragraphs[0],
};

export default function AboutPage() {
  return (
    <section className="relative overflow-hidden bg-white">
      <div className="mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-2">
        <Reveal className="flex flex-col justify-center gap-6 px-6 py-16 sm:px-8 sm:py-20 lg:py-24 lg:pl-12 lg:pr-16">
          <div>
            <h1 className="font-heading text-2xl font-bold uppercase tracking-wide text-navy sm:text-3xl">
              {aboutContent.hero.heading}
            </h1>
            <div className="mt-3 h-1 w-12 bg-gold" />
          </div>

          <div className="flex flex-col gap-4">
            {aboutContent.hero.paragraphs.map((p) => (
              <p key={p} className="leading-relaxed text-slate">
                {p}
              </p>
            ))}
          </div>

          <div className="h-px w-12 bg-gold" />

          <div className="flex items-start gap-4">
            <IconCircle icon={Target} tone="navy" size="md" />
            <div>
              <h3 className="font-heading text-sm font-bold uppercase tracking-wide text-gold">
                {aboutContent.purpose.heading}
              </h3>
              <p className="mt-1 text-sm leading-relaxed text-slate">{aboutContent.purpose.text}</p>
            </div>
          </div>
        </Reveal>

        <div className="relative min-h-[380px] overflow-hidden lg:min-h-[560px]">
          <div
            className="absolute inset-0"
            style={{
              clipPath:
                "polygon(16% 0%, 100% 0%, 100% 100%, 20% 100%, 8% 58%)",
            }}
          >
            <Image src={placeholderImages.aboutIntro} alt="" fill className="object-cover" />
          </div>

          {/* Ribbon-fold corner accent: two backward diagonals stacked over the forward photo cut */}
          <div className="pointer-events-none absolute bottom-0 right-0 h-20 w-20 overflow-hidden sm:h-28 sm:w-28">
            <div className="absolute -bottom-4 -right-10 h-9 w-40 rotate-45 bg-navy sm:h-12 sm:w-56" />
            <div className="absolute -bottom-9 -right-14 h-6 w-40 rotate-45 bg-gold sm:h-8 sm:w-56" />
          </div>
        </div>
      </div>
    </section>
  );
}
