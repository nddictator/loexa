import type { Metadata } from "next";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/motion/Reveal";
import { StaggerGroup, StaggerItem } from "@/components/motion/Stagger";
import { FounderMessage } from "@/components/sections/FounderMessage";
import { founderMessage, foundingLeadership } from "@/data/site-content";
import { placeholderImages } from "@/data/placeholder-images";

export const metadata: Metadata = {
  title: "Founder's Message | LOEXA Africa",
  description: founderMessage.quoteParagraphs[0],
};

const founderImages = [placeholderImages.foundingLeadership.prashant, placeholderImages.foundingLeadership.seema];

export default function FoundersMessagePage() {
  return (
    <>
      <FounderMessage
        eyebrow={founderMessage.eyebrow}
        quoteParagraphs={founderMessage.quoteParagraphs}
        name={founderMessage.name}
        title={founderMessage.title}
        image={placeholderImages.founderMessage}
      />

      <section className="bg-white py-20 sm:py-24">
        <Container>
          <Reveal>
            <h2 className="font-heading text-2xl font-bold uppercase tracking-wide text-navy sm:text-3xl">
              Founding Leadership
            </h2>
            <div className="mt-3 h-1 w-12 bg-gold" />
          </Reveal>

          <StaggerGroup className="mt-12 grid grid-cols-1 gap-12 sm:grid-cols-2">
            {foundingLeadership.founders.map((founder, i) => (
              <StaggerItem key={founder.name} className="flex gap-5">
                <div className="relative aspect-[3/4] w-32 shrink-0 overflow-hidden rounded-lg ring-1 ring-navy/10 sm:w-40">
                  <Image
                    src={founderImages[i]}
                    alt={founder.name}
                    fill
                    sizes="(min-width: 640px) 160px, 128px"
                    className="object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-heading text-base font-bold uppercase tracking-wide text-navy">
                    {founder.name}
                  </h3>
                  <p className="mt-1 text-sm font-semibold text-gold">{founder.title}</p>
                  <p className="mt-3 text-sm leading-relaxed text-slate">{founder.bio}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>

          <Reveal delay={0.15}>
            <p className="mx-auto mt-14 max-w-xl text-center font-heading font-semibold text-navy">
              {foundingLeadership.caption}
            </p>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
