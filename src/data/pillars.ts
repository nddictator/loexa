import type { LucideIcon } from "lucide-react";
import { GraduationCap, Wrench, Monitor, Landmark, Handshake } from "lucide-react";
import {
  homeContent,
  educationHumanCapitalContent,
  technicalSkillsContent,
  digitalAiContent,
  accreditationAdvisoryContent,
  industryPartnershipsContent,
  contactContent,
  type CTA,
  type TextBlock,
} from "@/data/site-content";
import { placeholderImages } from "@/data/placeholder-images";

// Falls back to the site's general contact CTA (same sourced copy used on
// the Contact page) for pillars whose content doc entry has no CTA of its
// own — every detail page ends with a call to action either way.
const fallbackCta: CTA = { label: contactContent.cta.label, href: "/contact#contact-form" };

export interface PillarTheme {
  accent: string;
  accentSoft: string;
  tint: string;
  ring: string;
  glow: string;
}

export interface PillarListBlock {
  heading: string;
  items: string[];
}

export interface PillarDetail {
  hero: TextBlock;
  lists: PillarListBlock[];
  flow?: { heading: string; steps: string[]; note?: string };
  principle?: { heading: string; text: string };
  cta?: CTA;
}

export interface PillarConfig {
  slug: string;
  number: string;
  title: string;
  tagline: string;
  icon: LucideIcon;
  image: string;
  theme: PillarTheme;
  detail: PillarDetail;
}

// Distinct hue per pillar — brand navy/gold stays the site's structural
// colour, these accents are layered on only within each pillar's own grid
// card and detail page so the five feel individually themed.
export const pillars: PillarConfig[] = [
  {
    slug: "education-human-capital",
    number: homeContent.pillars[0].number,
    title: homeContent.pillars[0].title,
    tagline: homeContent.pillars[0].description,
    icon: GraduationCap,
    image: placeholderImages.capabilityBands.education,
    theme: {
      accent: "#4338CA",
      accentSoft: "#6366F1",
      tint: "#EEF2FF",
      ring: "#C7D2FE",
      glow: "#818CF8",
    },
    detail: {
      hero: educationHumanCapitalContent.hero,
      lists: [
        { heading: educationHumanCapitalContent.focusAreas.heading, items: educationHumanCapitalContent.focusAreas.items },
      ],
      flow: educationHumanCapitalContent.approach?.flow
        ? { heading: educationHumanCapitalContent.approach.heading, steps: educationHumanCapitalContent.approach.flow }
        : undefined,
      principle: educationHumanCapitalContent.approach?.text
        ? { heading: educationHumanCapitalContent.approach.heading, text: educationHumanCapitalContent.approach.text }
        : undefined,
      cta: educationHumanCapitalContent.cta,
    },
  },
  {
    slug: "technical-skills-academy",
    number: homeContent.pillars[1].number,
    title: homeContent.pillars[1].title,
    tagline: homeContent.pillars[1].description,
    icon: Wrench,
    image: placeholderImages.capabilityBands.mobility,
    theme: {
      accent: "#C2410C",
      accentSoft: "#EA580C",
      tint: "#FFF7ED",
      ring: "#FED7AA",
      glow: "#FB923C",
    },
    detail: {
      hero: technicalSkillsContent.hero,
      lists: [
        { heading: technicalSkillsContent.focusAreas.heading, items: technicalSkillsContent.focusAreas.items },
        ...(technicalSkillsContent.programmes
          ? [{ heading: technicalSkillsContent.programmes.heading, items: technicalSkillsContent.programmes.items }]
          : []),
      ],
      principle: technicalSkillsContent.principle,
      cta: technicalSkillsContent.cta ?? fallbackCta,
    },
  },
  {
    slug: "digital-skills-ai-academy",
    number: homeContent.pillars[2].number,
    title: homeContent.pillars[2].title,
    tagline: homeContent.pillars[2].description,
    icon: Monitor,
    image: placeholderImages.capabilityBands.digital,
    theme: {
      accent: "#0E7490",
      accentSoft: "#0891B2",
      tint: "#ECFEFF",
      ring: "#A5F3FC",
      glow: "#22D3EE",
    },
    detail: {
      hero: digitalAiContent.hero,
      lists: [{ heading: digitalAiContent.focusAreas.heading, items: digitalAiContent.focusAreas.items }],
      flow: digitalAiContent.approach?.flow
        ? { heading: digitalAiContent.approach.heading, steps: digitalAiContent.approach.flow, note: digitalAiContent.approach.note }
        : undefined,
      cta: digitalAiContent.cta ?? fallbackCta,
    },
  },
  {
    slug: "accreditation-strategic-advisory",
    number: homeContent.pillars[3].number,
    title: homeContent.pillars[3].title,
    tagline: homeContent.pillars[3].description,
    icon: Landmark,
    image: placeholderImages.capabilityBands.strategic,
    theme: {
      accent: "#047857",
      accentSoft: "#059669",
      tint: "#ECFDF5",
      ring: "#A7F3D0",
      glow: "#34D399",
    },
    detail: {
      hero: accreditationAdvisoryContent.hero,
      lists: [{ heading: accreditationAdvisoryContent.services.heading, items: accreditationAdvisoryContent.services.items }],
      flow: accreditationAdvisoryContent.approach?.flow
        ? { heading: accreditationAdvisoryContent.approach.heading, steps: accreditationAdvisoryContent.approach.flow }
        : undefined,
      cta: fallbackCta,
    },
  },
  {
    slug: "industry-partnerships-strategic-alliances",
    number: homeContent.pillars[4].number,
    title: homeContent.pillars[4].title,
    tagline: homeContent.pillars[4].description,
    icon: Handshake,
    image: placeholderImages.sharedValue.industry,
    theme: {
      accent: "#BE123C",
      accentSoft: "#E11D48",
      tint: "#FFF1F2",
      ring: "#FECDD3",
      glow: "#FB7185",
    },
    detail: {
      hero: industryPartnershipsContent.hero,
      lists: [
        { heading: industryPartnershipsContent.weConnect.heading, items: industryPartnershipsContent.weConnect.items },
        { heading: industryPartnershipsContent.partnershipModels.heading, items: industryPartnershipsContent.partnershipModels.items },
      ],
      cta: industryPartnershipsContent.cta,
    },
  },
];

export function getPillarBySlug(slug: string) {
  return pillars.find((pillar) => pillar.slug === slug);
}
