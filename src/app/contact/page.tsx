import type { Metadata } from "next";
import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { IconCircle } from "@/components/ui/IconCircle";
import { HeroSection } from "@/components/sections/HeroSection";
import { ContactForm } from "@/components/sections/ContactForm";
import { Reveal } from "@/components/motion/Reveal";
import { StaggerGroup, StaggerItem } from "@/components/motion/Stagger";
import { contactContent } from "@/data/site-content";

export const metadata: Metadata = {
  title: "Contact LOEXA Africa",
  description: contactContent.hero.paragraphs[0],
};

export default function ContactPage() {
  return (
    <>
      <HeroSection heading={contactContent.hero.heading} description={contactContent.hero.paragraphs[0]} size="md" />

      <section className="bg-white py-20 sm:py-24">
        <Container>
          <Reveal>
            <SectionHeading heading={contactContent.connectHeading} align="center" />
          </Reveal>
          <StaggerGroup className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {contactContent.categories.map((category) => (
              <StaggerItem
                key={category.title}
                className="flex flex-col gap-4 rounded-2xl bg-offwhite p-6 shadow-md shadow-navy/5 transition-shadow duration-300 hover:shadow-xl hover:shadow-navy/15"
              >
                <IconCircle icon={ArrowUpRight} tone="navy" size="sm" />
                <h3 className="font-heading text-lg font-bold text-navy">{category.title}</h3>
                <p className="text-sm leading-relaxed text-slate">{category.description}</p>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </Container>
      </section>

      <section id="contact-form" className="bg-offwhite py-20 sm:py-24">
        <Container className="max-w-2xl">
          <Reveal>
            <ContactForm categories={contactContent.categories} submitLabel={contactContent.cta.label} />
          </Reveal>
        </Container>
      </section>
    </>
  );
}
