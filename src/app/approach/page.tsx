import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { HeroSection } from "@/components/sections/HeroSection";
import { CTABand } from "@/components/sections/CTABand";
import { CollaborativeApproachDiagram } from "@/components/sections/CollaborativeApproachDiagram";
import { Reveal } from "@/components/motion/Reveal";
import {
  collaborativeApproachContent,
  homeContent,
  partnersContent,
  buildingCapabilityTogether,
} from "@/data/site-content";

export const metadata: Metadata = {
  title: "Our Collaborative Approach | LOEXA Africa",
  description: buildingCapabilityTogether.closingLine,
};

export default function ApproachPage() {
  return (
    <>
      <HeroSection heading={collaborativeApproachContent.heading} size="md" />

      <section className="bg-white py-20 sm:py-24">
        <Container className="flex flex-col items-center">
          <CollaborativeApproachDiagram categories={collaborativeApproachContent.categories} />
          <Reveal delay={0.15} className="mt-12 max-w-2xl text-center">
            <p className="leading-relaxed text-slate">{buildingCapabilityTogether.closingLine}</p>
          </Reveal>
        </Container>
      </section>

      <CTABand
        heading={homeContent.closing.lines[0]}
        description={homeContent.closing.lines[1]}
        cta={partnersContent.cta}
      />
    </>
  );
}
