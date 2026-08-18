import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/motion/Reveal";
import { PillarInquiryTrigger } from "@/components/sections/PillarInquiryTrigger";
import { pillars, getPillarBySlug } from "@/data/pillars";

export function generateStaticParams() {
  return pillars.map((pillar) => ({ slug: pillar.slug }));
}

export async function generateMetadata(props: PageProps<"/pillars/[slug]">): Promise<Metadata> {
  const { slug } = await props.params;
  const pillar = getPillarBySlug(slug);
  if (!pillar) return {};

  return {
    title: `${pillar.title} | LOEXA Africa`,
    description: pillar.tagline,
  };
}

export default async function PillarDetailPage(props: PageProps<"/pillars/[slug]">) {
  const { slug } = await props.params;
  const pillar = getPillarBySlug(slug);
  if (!pillar) notFound();

  const { theme, detail } = pillar;

  return (
    <section
      className="relative overflow-hidden bg-[var(--pillar-tint)] lg:flex lg:h-[calc(100vh-5rem)] lg:flex-col"
      style={
        {
          "--pillar-accent": theme.accent,
          "--pillar-accent-soft": theme.accentSoft,
          "--pillar-tint": theme.tint,
          "--pillar-ring": theme.ring,
          "--pillar-glow": theme.glow,
        } as React.CSSProperties
      }
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[var(--pillar-glow)] opacity-20 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-0 left-1/3 h-56 w-56 rounded-full bg-[var(--pillar-accent-soft)] opacity-10 blur-3xl"
      />

      <Container className="relative flex flex-col gap-6 py-8 sm:py-10 lg:min-h-0 lg:flex-1">
        <Link
          href="/"
          className="inline-flex w-fit shrink-0 items-center gap-2 text-sm font-semibold text-navy/60 transition-colors hover:text-[var(--pillar-accent)]"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to LOEXA Africa
        </Link>

        <div className="grid gap-12 pb-8 lg:min-h-0 lg:flex-1 lg:grid-cols-2 lg:items-stretch lg:pb-0">
          {/* Left: content, capped to the layout height and independently scrollable */}
          <Reveal delay={0.2} className="pillar-scroll min-w-0 lg:h-full lg:min-h-0 lg:overflow-y-auto lg:pr-3">
            <p className="font-heading text-sm font-semibold uppercase tracking-[0.2em] text-[var(--pillar-accent)]">
              Pillar {pillar.number}
            </p>
            <h1 className="mt-3 font-heading text-3xl font-bold leading-tight text-navy sm:text-4xl lg:text-5xl">
              {pillar.title}
            </h1>
            <div className="mt-4 h-1 w-14 rounded-full bg-[var(--pillar-accent)]" />

            <p className="mt-6 text-lg font-medium leading-relaxed text-navy/80">{pillar.tagline}</p>

            <div className="mt-4 flex flex-col gap-4">
              {detail.hero.paragraphs.map((p) => (
                <p key={p} className="leading-relaxed text-slate">
                  {p}
                </p>
              ))}
            </div>

            {detail.lists.map((list) => (
              <div key={list.heading} className="mt-8">
                <h2 className="font-heading text-sm font-bold uppercase tracking-wide text-navy">
                  {list.heading}
                </h2>
                <div className="mt-3 flex flex-wrap gap-2">
                  {list.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-[var(--pillar-ring)] bg-white px-3.5 py-1.5 text-sm font-medium text-navy"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}

            {detail.flow && (
              <div className="mt-8">
                <h2 className="font-heading text-sm font-bold uppercase tracking-wide text-navy">
                  {detail.flow.heading}
                </h2>
                <div className="mt-3 flex flex-wrap items-center gap-2">
                  {detail.flow.steps.map((step, i, arr) => (
                    <span key={step} className="flex items-center gap-2">
                      <span className="rounded-full bg-[var(--pillar-accent)] px-4 py-1.5 text-sm font-semibold text-white">
                        {step}
                      </span>
                      {i < arr.length - 1 && <ArrowRight className="h-4 w-4 text-navy/30" />}
                    </span>
                  ))}
                </div>
                {detail.flow.note && <p className="mt-3 text-sm italic text-slate">{detail.flow.note}</p>}
              </div>
            )}

            {detail.principle && (
              <div className="mt-8 rounded-xl border-l-4 border-[var(--pillar-accent)] bg-white/60 py-4 pl-5 pr-4">
                <h2 className="font-heading text-sm font-bold uppercase tracking-wide text-navy">
                  {detail.principle.heading}
                </h2>
                <p className="mt-1 leading-relaxed text-slate">{detail.principle.text}</p>
              </div>
            )}

            {detail.cta && (
              <PillarInquiryTrigger pillarTitle={pillar.title} ctaLabel={detail.cta.label} theme={theme} />
            )}
          </Reveal>

          {/* Right: large styled placeholder image, matching the content column's height */}
          <Reveal
            delay={0.1}
            className="relative aspect-[4/5] overflow-hidden rounded-3xl shadow-2xl shadow-navy/20 lg:aspect-auto lg:h-full"
          >
            <Image
              src={pillar.image}
              alt={pillar.title}
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
              priority
            />
            <div
              className="absolute inset-0"
              style={{ background: `linear-gradient(160deg, ${theme.accent}55, transparent 55%)` }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/50 via-transparent to-transparent" />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
