import type { Metadata } from "next";
import {
  GraduationCap,
  Wrench,
  Monitor,
  Landmark,
  Handshake,
  Users,
  TrendingUp,
  Building2,
  Network,
  Quote,
  Car,
  Factory,
  Pickaxe,
  Zap,
  Sprout,
  Truck,
  Banknote,
  Cog,
  UsersRound,
  Cpu,
  Compass,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { PillarCard } from "@/components/ui/PillarCard";
import { IconCircle } from "@/components/ui/IconCircle";
import { HeroSection } from "@/components/sections/HeroSection";
import { LoexaWaySteps } from "@/components/sections/LoexaWaySteps";
import { FounderMessage } from "@/components/sections/FounderMessage";
import { CollaborativeApproachDiagram } from "@/components/sections/CollaborativeApproachDiagram";
import { IconLabelGrid } from "@/components/sections/IconLabelGrid";
import { StatGrid } from "@/components/sections/StatGrid";
import { SharedValueGrid } from "@/components/sections/SharedValueGrid";
import { CapabilityBands } from "@/components/sections/CapabilityBands";
import { Button } from "@/components/ui/Button";
import { CornerCut } from "@/components/ui/CornerCut";
import { Reveal } from "@/components/motion/Reveal";
import { StaggerGroup, StaggerItem } from "@/components/motion/Stagger";
import {
  homeContent,
  homeOpportunityContent,
  collaborativeApproachContent,
  loexaWayContent,
  founderMessage,
  marketsWeEnableContent,
  creatingSharedValueContent,
  whereWeCreateCapabilityContent,
} from "@/data/site-content";
import { placeholderImages } from "@/data/placeholder-images";

export const metadata: Metadata = {
  title: "LOEXA Africa | Building Africa's Future Workforce",
  description: homeContent.hero.description,
};

const pillarIcons = [GraduationCap, Wrench, Monitor, Landmark, Handshake];
const statIcons = [Users, TrendingUp, Building2, GraduationCap, Handshake, Network];
const marketIcons = [GraduationCap, Landmark, Car, Factory, Pickaxe, Zap, Building2, Sprout, Truck, Banknote];
const sharedValueTones = ["navy", "navy-light", "gold", "navy-dark"] as const;
const sharedValueIcons = [Users, Landmark, Cog, UsersRound];
const sharedValueImages = [
  placeholderImages.sharedValue.people,
  placeholderImages.sharedValue.institutions,
  placeholderImages.sharedValue.industry,
  placeholderImages.sharedValue.communities,
];
const capabilityBandTones = ["navy-light", "navy", "gold", "navy-light", "navy-dark"] as const;
const capabilityBandIcons = [GraduationCap, Users, Factory, Cpu, Compass];
const capabilityBandImages = [
  placeholderImages.capabilityBands.education,
  placeholderImages.capabilityBands.workforce,
  placeholderImages.capabilityBands.mobility,
  placeholderImages.capabilityBands.digital,
  placeholderImages.capabilityBands.strategic,
];

export default function HomePage() {
  return (
    <>
      {/* 01 — Cover / Hero */}
      <HeroSection
        logo
        headingLines={[{ text: "Building Africa's" }, { text: "Future Workforce", accent: true }]}
        subheading={homeContent.hero.subheading}
        description={homeContent.hero.description}
        ctas={homeContent.hero.ctas}
        image={placeholderImages.homeHero}
      />

      {/* 04 — Africa's Opportunity */}
      <section className="relative overflow-hidden bg-white py-20 sm:py-24">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow={homeOpportunityContent.eyebrow}
              heading={homeOpportunityContent.heading}
            />
          </Reveal>
          <div className="mt-12">
            <StatGrid
              stats={homeOpportunityContent.stats}
              icons={statIcons.map((Icon, i) => (
                <Icon key={i} className="mt-1 h-8 w-8 shrink-0 text-navy" strokeWidth={1.5} />
              ))}
            />
          </div>
          <Reveal delay={0.1} className="mt-10 flex max-w-2xl items-start gap-4">
            <Quote className="h-8 w-8 shrink-0 text-gold" strokeWidth={1.75} />
            <p className="italic leading-relaxed text-slate sm:text-lg">{homeOpportunityContent.quote}</p>
          </Reveal>
        </Container>
        <CornerCut />
      </section>

      {/* Africa's Capability Gap — site-only content, not in the deck */}
      <section className="bg-offwhite py-20 sm:py-24">
        <Container>
          <Reveal>
            <SectionHeading heading={homeContent.capabilityGap.heading} align="center" />
          </Reveal>
          <Reveal delay={0.1} className="mx-auto mt-6 max-w-2xl text-center">
            <p className="leading-relaxed text-slate">{homeContent.capabilityGap.paragraphs[0]}</p>
          </Reveal>
          <Reveal delay={0.2} className="mx-auto mt-8 flex max-w-2xl flex-col items-center gap-2 text-center">
            {homeContent.capabilityGap.paragraphs.slice(1).map((line) => (
              <p key={line} className="font-heading text-xl font-bold text-navy sm:text-2xl">
                {line}
              </p>
            ))}
          </Reveal>
        </Container>
      </section>

      {/* Our Five Pillars — site-only content, not in the deck */}
      <section className="bg-white py-20 sm:py-24">
        <Container>
          <Reveal>
            <SectionHeading heading={homeContent.pillarsHeading} align="center" />
          </Reveal>
          <StaggerGroup className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {homeContent.pillars.map((pillar, i) => (
              <StaggerItem key={pillar.number}>
                <PillarCard
                  number={pillar.number}
                  title={pillar.title}
                  description={pillar.description}
                  icon={<IconCircle icon={pillarIcons[i]} tone={i === 4 ? "gold" : "navy"} size="md" />}
                />
              </StaggerItem>
            ))}
          </StaggerGroup>
        </Container>
      </section>

      {/* 07 — Where We Create Capability */}
      <section className="relative overflow-hidden bg-offwhite py-20 sm:py-24">
        <Container>
          <Reveal>
            <SectionHeading heading={whereWeCreateCapabilityContent.heading} align="left" />
          </Reveal>
          <div className="mt-12">
            <CapabilityBands
              items={whereWeCreateCapabilityContent.bands.map((band, i) => ({
                title: band.title,
                description: band.description,
                icon: capabilityBandIcons[i],
                image: capabilityBandImages[i],
                tone: capabilityBandTones[i],
              }))}
            />
          </div>
        </Container>
        <CornerCut tone="navy" />
      </section>

      {/* 08 — Markets We Enable */}
      <section className="bg-white py-20 sm:py-24">
        <Container>
          <Reveal>
            <SectionHeading heading={marketsWeEnableContent.heading} />
          </Reveal>
          <div className="mt-10">
            <IconLabelGrid
              items={marketsWeEnableContent.sectors.map((label, i) => {
                const Icon = marketIcons[i];
                return { label, icon: <Icon className="h-8 w-8 text-navy" strokeWidth={1.5} /> };
              })}
              columns={5}
            />
          </div>
          <Reveal delay={0.1} className="mt-8 max-w-2xl">
            <p className="leading-relaxed text-slate">{marketsWeEnableContent.closingLine}</p>
          </Reveal>
        </Container>
      </section>

      {/* 10 — Our Collaborative Approach */}
      <section className="relative bg-offwhite py-20 sm:py-24">
        <Container>
          <Reveal>
            <SectionHeading heading={collaborativeApproachContent.heading} />
          </Reveal>
          <div className="mt-12">
            <CollaborativeApproachDiagram categories={collaborativeApproachContent.categories} />
          </div>
          <Reveal delay={0.15} className="mt-10 text-center">
            <Button href="/approach" variant="outline">
              Learn More
            </Button>
          </Reveal>
        </Container>
        <CornerCut />
      </section>

      {/* 12 — Creating Shared Value */}
      <section className="relative overflow-hidden bg-white py-20 sm:py-24">
        <Container>
          <Reveal>
            <SectionHeading heading={creatingSharedValueContent.heading} align="center" />
          </Reveal>
          <div className="mt-12">
            <SharedValueGrid
              items={creatingSharedValueContent.categories.map((label, i) => ({
                label,
                icon: sharedValueIcons[i],
                image: sharedValueImages[i],
                tone: sharedValueTones[i],
              }))}
            />
          </div>
          <Reveal delay={0.1} className="mx-auto mt-8 max-w-2xl text-center">
            <p className="leading-relaxed text-slate">{creatingSharedValueContent.closingLine}</p>
          </Reveal>
        </Container>
        <CornerCut tone="navy" />
      </section>

      {/* 14 — The LOEXA Way */}
      <section className="bg-offwhite py-20 sm:py-24">
        <Container>
          <Reveal>
            <SectionHeading heading={loexaWayContent.heading} />
          </Reveal>
          <div className="mt-12">
            <LoexaWaySteps steps={loexaWayContent.steps} />
          </div>
          <Reveal delay={0.1} className="mt-14 max-w-2xl border-t border-navy/10 pt-8">
            <p className="leading-relaxed text-slate">{loexaWayContent.closingLine}</p>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
