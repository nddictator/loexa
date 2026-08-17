import type { Metadata } from "next";
import { Eye, Target, Cog, Lightbulb } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { IconCircle } from "@/components/ui/IconCircle";
import { CornerCut } from "@/components/ui/CornerCut";
import { Reveal } from "@/components/motion/Reveal";
import { StaggerGroup, StaggerItem } from "@/components/motion/Stagger";
import { aboutContent, aboutValues, visionMissionValuesHeading } from "@/data/site-content";

export const metadata: Metadata = {
  title: "Vision, Mission & Values | LOEXA Africa",
  description: aboutContent.vision.text,
};

export default function VisionMissionValuesPage() {
  return (
    <section className="relative overflow-hidden bg-offwhite py-24 sm:py-28">
      <Container>
        <Reveal>
          <h1 className="font-heading text-4xl font-bold leading-tight text-navy sm:text-5xl">
            {visionMissionValuesHeading}
          </h1>
          <div className="mt-4 h-1.5 w-16 bg-gold" />
        </Reveal>

        <div className="mt-16 grid grid-cols-1 gap-16 lg:grid-cols-[1.4fr_1fr]">
          <StaggerGroup className="flex flex-col gap-14">
            <StaggerItem className="flex items-start gap-6">
              <IconCircle icon={Eye} tone="navy" size="lg" />
              <div>
                <h3 className="font-heading text-lg font-bold uppercase tracking-wide text-navy sm:text-xl">
                  {aboutContent.vision.heading}
                </h3>
                <p className="mt-3 max-w-xl text-lg leading-relaxed text-slate">
                  {aboutContent.vision.text}
                </p>
              </div>
            </StaggerItem>
            <StaggerItem className="flex items-start gap-6">
              <IconCircle icon={Target} tone="navy" size="lg" />
              <div>
                <h3 className="font-heading text-lg font-bold uppercase tracking-wide text-navy sm:text-xl">
                  {aboutContent.mission.heading}
                </h3>
                <p className="mt-3 max-w-xl text-lg leading-relaxed text-slate">
                  {aboutContent.mission.text}
                </p>
              </div>
            </StaggerItem>
          </StaggerGroup>

          <Reveal delay={0.15}>
            <p className="mb-6 font-heading text-lg font-bold uppercase tracking-wide text-navy sm:text-xl">
              {aboutValues.heading}
            </p>
            <StaggerGroup className="flex flex-col gap-6">
              {aboutValues.items.map((item, i) => {
                const ValueIcon = i === 3 ? Lightbulb : Cog;
                return (
                  <StaggerItem key={item} className="flex items-center gap-4">
                    <ValueIcon className="h-7 w-7 text-gold" strokeWidth={1.5} />
                    <span className="text-lg font-medium text-ink">{item}</span>
                  </StaggerItem>
                );
              })}
            </StaggerGroup>
          </Reveal>
        </div>
      </Container>
      <CornerCut tone="navy" className="h-16 w-16 sm:h-20 sm:w-20" />
    </section>
  );
}
