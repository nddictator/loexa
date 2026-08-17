import { GraduationCap, Wrench, Monitor, Landmark, Handshake } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { PillarCard } from "@/components/ui/PillarCard";
import { StatCard } from "@/components/ui/StatCard";
import { Badge } from "@/components/ui/Badge";
import { IconCircle } from "@/components/ui/IconCircle";
import { HeroSection } from "@/components/sections/HeroSection";
import { CTABand } from "@/components/sections/CTABand";
import { ProcessSteps } from "@/components/sections/ProcessSteps";
import { CardGrid } from "@/components/sections/CardGrid";
import { TwoColumnSection } from "@/components/sections/TwoColumnSection";
import { EcosystemDiagram } from "@/components/sections/EcosystemDiagram";
import { homeContent, forOrganisationsContent, ecosystemContent } from "@/data/site-content";

const pillarIcons = [GraduationCap, Wrench, Monitor, Landmark, Handshake];

export default function StyleCheckPage() {
  return (
    <div className="flex flex-col">
      <HeroSection
        eyebrow="Style Check"
        heading={homeContent.hero.heading}
        subheading={homeContent.hero.subheading}
        description={homeContent.hero.description}
        ctas={homeContent.hero.ctas}
      />

      <HeroSection
        eyebrow="Inner page hero (size=md)"
        heading="Building the Technical Workforce That Powers Africa"
        description="Africa's industrial growth requires a new generation of skilled technicians, artisans, supervisors and technical professionals."
        size="md"
      />

      <Container className="flex flex-col gap-16 py-20">
        <section>
          <SectionHeading eyebrow="Buttons" heading="Button variants" />
          <div className="mt-8 flex flex-wrap items-center gap-4 rounded-2xl bg-white p-8 shadow-md shadow-navy/5">
            <Button variant="primary">Primary</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="outline">Outline</Button>
          </div>
          <div className="mt-4 flex flex-wrap items-center gap-4 rounded-2xl bg-navy p-8">
            <Button variant="ghost-light">Ghost (on navy)</Button>
            <Button variant="primary">Primary (on navy)</Button>
          </div>
        </section>

        <section>
          <SectionHeading eyebrow="Badges" heading="Tag / badge component" />
          <div className="mt-8 flex flex-wrap gap-3">
            <Badge>Education partners</Badge>
            <Badge tone="gold">Strategic advisory</Badge>
          </div>
        </section>

        <section>
          <SectionHeading eyebrow="Icon circles" heading="IconCircle tones & sizes" />
          <div className="mt-8 flex flex-wrap items-center gap-6">
            <IconCircle icon={GraduationCap} tone="navy" size="sm" />
            <IconCircle icon={GraduationCap} tone="navy" size="md" />
            <IconCircle icon={GraduationCap} tone="navy" size="lg" />
            <IconCircle icon={Handshake} tone="gold" size="md" />
          </div>
        </section>

        <section>
          <SectionHeading
            eyebrow={homeContent.pillarsHeading}
            heading="Our Five Pillars"
          />
          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {homeContent.pillars.map((pillar, i) => (
              <PillarCard
                key={pillar.number}
                number={pillar.number}
                title={pillar.title}
                description={pillar.description}
                icon={<IconCircle icon={pillarIcons[i]} tone={i === 4 ? "gold" : "navy"} size="md" />}
              />
            ))}
          </div>
        </section>

        <section>
          <SectionHeading eyebrow="Stat cards" heading="StatCard (built for future use — no stats in content doc yet)" />
          <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
            <StatCard icon={GraduationCap} value="{{X}}" label="{{PLACEHOLDER: stat label}}" />
            <StatCard icon={Wrench} value="{{X}}" label="{{PLACEHOLDER: stat label}}" />
          </div>
        </section>

        <section>
          <SectionHeading eyebrow="List content" heading="CardGrid (bullet-list pages)" />
          <div className="mt-8">
            <CardGrid items={["Leadership development", "Executive education", "Workforce development", "Employability", "Entrepreneurship", "Professional development"]} />
          </div>
        </section>

        <section>
          <SectionHeading eyebrow={forOrganisationsContent.processHeading} heading="Process steps (with descriptions)" />
          <div className="mt-10">
            <ProcessSteps steps={forOrganisationsContent.process} />
          </div>
        </section>

        <section>
          <SectionHeading eyebrow="Flow" heading="Process steps (label-only flow)" />
          <div className="mt-10">
            <ProcessSteps
              steps={["Learn", "Build", "Apply", "Transform", "Impact"].map((title) => ({ title }))}
            />
          </div>
        </section>

        <section>
          <SectionHeading eyebrow="Ecosystem" heading="Hub-and-spoke diagram" />
          <div className="mt-10">
            <EcosystemDiagram nodes={ecosystemContent.nodes} />
          </div>
        </section>

        <TwoColumnSection
          eyebrow="Two column"
          heading="TwoColumnSection component"
          paragraphs={["Left column carries a SectionHeading and paragraphs.", "Right column is a free-form slot for a diagram, image, or card stack."]}
          className="rounded-2xl bg-white px-8 shadow-md shadow-navy/5"
        >
          <div className="flex h-full items-center justify-center rounded-xl bg-offwhite p-12 text-center text-slate">
            {"{{PLACEHOLDER: image / visual}}"}
          </div>
        </TwoColumnSection>
      </Container>

      <CTABand
        eyebrow="Closing"
        heading={homeContent.closing.lines[0]}
        description={homeContent.closing.lines[1]}
        cta={{ label: "Partner With Us", href: "/contact" }}
      />
    </div>
  );
}
