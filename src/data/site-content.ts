// Copy in this file is transcribed verbatim from the LOEXA Africa website
// content document. Do not reword, embellish, or invent copy here — if a
// layout needs content the doc doesn't provide, use a {{PLACEHOLDER}}
// string instead of writing new copy.
//
// Exception: the block at the bottom of this file, clearly marked, is
// transcribed from the separate Corporate Profile PDF instead, per explicit
// user approval to pull in the stats/values/founder content it has that the
// website content doc doesn't.

export interface CTA {
  label: string;
  href: string;
}

export interface TextBlock {
  eyebrow?: string;
  heading: string;
  paragraphs: string[];
}

export interface ListBlock {
  heading: string;
  items: string[];
}

export interface PillarItem {
  number: string;
  title: string;
  description: string;
}

export interface ProcessStep {
  number?: string;
  title: string;
  description?: string;
}

export interface EcosystemNode {
  title: string;
  description: string;
}

export interface ConnectCategory {
  title: string;
  description: string;
}

// Repeated on the site (hero fallback, footer brand block).
export const brandLine = {
  name: "LOEXA AFRICA",
  tagline: "Building Africa's Future Workforce",
  description:
    "Africa's capability-building ecosystem connecting education, AI and industry for sustainable impact.",
};

// ---------------------------------------------------------------------------
// 1. HOME
// ---------------------------------------------------------------------------
export const homeContent = {
  hero: {
    heading: "Building Africa's Future Workforce",
    subheading:
      "Africa's capability-building ecosystem connecting education,\n AI and industry for sustainable impact.",
    description:
      "LOEXA Africa bridges the gap between human capital development and industry demand by connecting education institutions, employers, technology partners, governments and industry to develop future-ready capability.",
    ctas: [
      { label: "Explore LOEXA", href: "/about" },
      { label: "Partner With Us", href: "/contact" },
    ] as CTA[],
  },
  capabilityGap: {
    heading: "Africa's Capability Gap",
    paragraphs: [
      "Africa has a growing workforce and enormous economic potential. Yet many industries continue to face shortages of relevant technical, digital and leadership capabilities.",
      "The challenge is not simply more education.",
      "It is better alignment between learning, capability and economic opportunity.",
      "LOEXA connects these three.",
    ],
  } as TextBlock,
  pillarsHeading: "Our Five Pillars",
  pillars: [
    {
      number: "01",
      title: "Education & Human Capital",
      description: "Developing people, leaders and institutions for the future.",
    },
    {
      number: "02",
      title: "Technical Skills Academy",
      description: "Building industry-ready technical capability across critical sectors.",
    },
    {
      number: "03",
      title: "Digital Skills & AI Academy",
      description: "Preparing people and organisations for the AI-powered economy.",
    },
    {
      number: "04",
      title: "Accreditation & Strategic Advisory",
      description: "Building quality, compliance and sustainable capability systems.",
    },
    {
      number: "05",
      title: "Industry Partnerships & Strategic Alliances",
      description: "Connecting organisations to create scalable capability solutions.",
    },
  ] as PillarItem[],
  closing: {
    lines: ["Capability is Africa's competitive advantage.", "Let's build it together."],
  },
};

// ---------------------------------------------------------------------------
// 2. ABOUT LOEXA
// ---------------------------------------------------------------------------
export const aboutContent = {
  hero: {
    heading: "About LOEXA Africa",
    paragraphs: [
      "LOEXA Africa (Lotus Excellence Africa) is an ecosystem-driven capability-building platform designed to bridge the structural mismatch between human capital development and industrial demand across Africa.",
      "We connect education, AI, technical skills, industry and strategic partnerships to create practical pathways from learning to employment, leadership, innovation and enterprise growth.",
      "Unlike a conventional training provider, LOEXA operates as an ecosystem orchestrator, bringing together institutions and organisations with complementary capabilities to solve real workforce and industry challenges.",
    ],
  } as TextBlock,
  mission: {
    heading: "Our Mission",
    text: "To build Africa's capability-building ecosystem by connecting education, AI and industry for sustainable impact.",
  },
  vision: {
    heading: "Our Vision",
    text: "To become Africa's most trusted ecosystem for developing people, strengthening organisations and enabling sustainable industrial growth.",
  },
  philosophy: {
    heading: "Our Philosophy",
    steps: ["Learn", "Build", "Apply", "Transform", "Impact"],
  },
  purpose: {
    heading: "Our Purpose",
    text: "Connecting people, institutions and industry to develop capability and create opportunity.",
  },
};

// ---------------------------------------------------------------------------
// 3. OUR ECOSYSTEM
// ---------------------------------------------------------------------------
export const ecosystemContent = {
  hero: {
    heading: "Connecting the Capability Chain",
    paragraphs: [
      "LOEXA brings together the key players required to turn learning into economic impact.",
    ],
  } as TextBlock,
  nodes: [
    {
      title: "Education",
      description: "Schools, universities, colleges, TVET institutions and training organisations.",
    },
    {
      title: "Industry",
      description: "Corporates, SMEs, OEMs, contractors, manufacturers and employers.",
    },
    {
      title: "Technology",
      description: "AI, digital, automation and technology partners.",
    },
    {
      title: "Government",
      description: "Public institutions and agencies focused on skills and economic development.",
    },
    {
      title: "Development Partners",
      description:
        "Organisations focused on employment, inclusion, entrepreneurship and sustainable development.",
    },
    {
      title: "Professionals & Learners",
      description: "The people who ultimately drive Africa's economic transformation.",
    },
  ] as EcosystemNode[],
};

// ---------------------------------------------------------------------------
// Shared shape for the three Academy pages
// ---------------------------------------------------------------------------
export interface AcademyPageContent {
  hero: TextBlock;
  focusAreas: ListBlock;
  programmes?: ListBlock;
  approach?: {
    heading: string;
    text?: string;
    flow?: string[];
    note?: string;
  };
  principle?: {
    heading: string;
    text: string;
  };
  cta?: CTA;
}

// ---------------------------------------------------------------------------
// 4. EDUCATION & HUMAN CAPITAL
// ---------------------------------------------------------------------------
export const educationHumanCapitalContent: AcademyPageContent = {
  hero: {
    heading: "Developing People. Strengthening Institutions.",
    paragraphs: [
      "LOEXA supports individuals, educational institutions and organisations in developing the capabilities required for a changing economy.",
    ],
  },
  focusAreas: {
    heading: "Focus Areas",
    items: [
      "Leadership development",
      "Executive education",
      "Workforce development",
      "Employability",
      "Entrepreneurship",
      "Professional development",
      "Education transformation",
      "Future skills",
      "Career pathways",
    ],
  },
  approach: {
    heading: "Our Approach",
    text: "We connect learning with real-world application, industry requirements and measurable outcomes.",
  },
  cta: { label: "Explore Human Capital Solutions", href: "/contact" },
};

// ---------------------------------------------------------------------------
// 5. TECHNICAL SKILLS ACADEMY
// ---------------------------------------------------------------------------
export const technicalSkillsContent: AcademyPageContent = {
  hero: {
    heading: "Building the Technical Workforce That Powers Africa",
    paragraphs: [
      "Africa's industrial growth requires a new generation of skilled technicians, artisans, supervisors and technical professionals.",
      "The LOEXA Technical Skills Academy develops practical, industry-aligned technical capability across critical sectors.",
    ],
  },
  focusAreas: {
    heading: "Sector Focus",
    items: [
      "Construction & Infrastructure",
      "Mining & Resources",
      "Manufacturing",
      "Automotive & Mobility",
      "Energy & Utilities",
      "Logistics & Supply Chain",
      "Engineering & Maintenance",
      "Industrial Technology",
      "Health & Safety",
      "Green & Emerging Skills",
    ],
  },
  programmes: {
    heading: "Our Programmes",
    items: [
      "Technical training",
      "Artisan development",
      "Technician programmes",
      "Industry-specific academies",
      "Workplace learning",
      "Competency development",
      "Upskilling & reskilling",
      "Employer-led programmes",
      "Certification pathways",
    ],
  },
  principle: {
    heading: "Our Principle",
    text: "Train for the job. Develop for the industry. Build for the future.",
  },
};

// ---------------------------------------------------------------------------
// 6. DIGITAL SKILLS & AI ACADEMY
// ---------------------------------------------------------------------------
export const digitalAiContent: AcademyPageContent = {
  hero: {
    heading: "Preparing Africa for the AI Economy",
    paragraphs: [
      "AI is transforming every industry.",
      "LOEXA helps individuals and organisations develop the capability to understand, adopt and apply emerging technologies.",
    ],
  },
  focusAreas: {
    heading: "Capability Areas",
    items: [
      "Artificial Intelligence",
      "Generative AI",
      "Data & Analytics",
      "Digital Transformation",
      "Cybersecurity",
      "Cloud Technologies",
      "Automation",
      "Digital Productivity",
      "Emerging Technologies",
    ],
  },
  approach: {
    heading: "Our Model",
    flow: ["AI Awareness", "AI Skills", "AI Application", "Business Transformation"],
    note: "We focus on practical application rather than technology for technology's sake.",
  },
};

// ---------------------------------------------------------------------------
// 7. ACCREDITATION & STRATEGIC ADVISORY
// ---------------------------------------------------------------------------
export const accreditationAdvisoryContent = {
  hero: {
    heading: "From Training to Sustainable Capability",
    paragraphs: [
      "Capability development requires more than courses.",
      "It requires quality systems, accreditation, governance, strategy and implementation.",
      "LOEXA supports organisations throughout their capability transformation journey.",
    ],
  } as TextBlock,
  services: {
    heading: "Services",
    items: [
      "Accreditation advisory",
      "QCTO / SAQA pathway advisory",
      "Skills audits",
      "Training programme development",
      "Curriculum development",
      "Quality assurance",
      "Workforce strategy",
      "Organisational capability assessment",
      "Strategic advisory",
      "Compliance & governance",
    ],
  } as ListBlock,
  approach: {
    heading: "Our Approach",
    flow: ["Assess", "Design", "Align", "Implement", "Measure"],
  },
};

// ---------------------------------------------------------------------------
// 8. INDUSTRY PARTNERSHIPS
// ---------------------------------------------------------------------------
export const industryPartnershipsContent = {
  hero: {
    heading: "Building Partnerships That Create Impact",
    paragraphs: [
      "Africa's capability challenge cannot be solved by one organisation.",
      "LOEXA creates partnerships between organisations that have complementary capabilities, resources and market access.",
    ],
  } as TextBlock,
  weConnect: {
    heading: "We Connect",
    items: [
      "Education + Industry",
      "Technology + Talent",
      "Government + Business",
      "Global Expertise + African Opportunity",
      "Investment + Capability",
    ],
  } as ListBlock,
  partnershipModels: {
    heading: "Partnership Models",
    items: [
      "Corporate academies",
      "Industry training partnerships",
      "University partnerships",
      "Government programmes",
      "Technology partnerships",
      "CSR programmes",
      "Workforce development initiatives",
      "Joint ventures",
      "Strategic alliances",
    ],
  } as ListBlock,
  cta: { label: "Become a LOEXA Partner", href: "/contact" } as CTA,
};

// ---------------------------------------------------------------------------
// 9. FOR ORGANISATIONS
// ---------------------------------------------------------------------------
export const forOrganisationsContent = {
  hero: {
    heading: "Build the Capabilities Your Business Needs",
    paragraphs: [
      "Every organisation has different workforce challenges.",
      "LOEXA works with leadership teams to identify capability gaps and build solutions aligned to business strategy.",
    ],
  } as TextBlock,
  processHeading: "Our Process",
  process: [
    { number: "01", title: "Identify", description: "Understand your current and future capability requirements." },
    { number: "02", title: "Assess", description: "Measure existing skills and organisational capability." },
    { number: "03", title: "Design", description: "Create a solution aligned to your industry and business." },
    { number: "04", title: "Develop", description: "Build technical, digital and leadership capability." },
    { number: "05", title: "Deploy", description: "Implement learning and transformation programmes." },
    { number: "06", title: "Measure", description: "Track capability development and business outcomes." },
  ] as ProcessStep[],
  cta: { label: "Discuss Your Capability Challenge", href: "/contact" } as CTA,
};

// ---------------------------------------------------------------------------
// 10. FOR LEARNERS & PROFESSIONALS
// ---------------------------------------------------------------------------
export const forLearnersContent = {
  hero: {
    heading: "Build Skills for the Future",
    paragraphs: [
      "The world of work is changing rapidly.",
      "LOEXA provides pathways for learners, technicians, professionals, managers and entrepreneurs to develop relevant capabilities for the evolving economy.",
    ],
  } as TextBlock,
  explore: {
    heading: "Explore",
    items: [
      "Technical skills",
      "AI & digital skills",
      "Professional certifications",
      "Leadership",
      "Entrepreneurship",
      "Industry programmes",
      "Career development",
      "Executive education",
    ],
  } as ListBlock,
  promise: {
    heading: "Our Promise",
    words: ["Learn.", "Apply.", "Grow.", "Lead."],
  },
  cta: { label: "Explore Learning Opportunities", href: "/contact" } as CTA,
};

// ---------------------------------------------------------------------------
// 11. INSIGHTS
// ---------------------------------------------------------------------------
export const insightsContent = {
  hero: {
    heading: "LOEXA Insights",
    subheading: "Ideas shaping Africa's future workforce.",
    paragraphs: [
      "Our insights explore the trends, technologies and workforce challenges shaping Africa's economic future.",
    ],
  },
  topics: {
    heading: "Topics",
    items: [
      "Future of Work",
      "Skills Gap",
      "AI & Digital Transformation",
      "Technical Skills",
      "Industry Capability",
      "Leadership",
      "Education",
      "Africa's Workforce",
    ],
  } as ListBlock,
  signatureSeries: {
    heading: "Signature Series",
    items: [
      "LOEXA Africa Capability Index",
      "Future Skills Friday",
      "AI in Africa",
      "Industry Capability Spotlight",
      "LOEXA Leadership Insights",
    ],
  } as ListBlock,
};

// ---------------------------------------------------------------------------
// 12. PARTNERS
// ---------------------------------------------------------------------------
export const partnersContent = {
  hero: {
    heading: "Stronger Together",
    paragraphs: [
      "LOEXA believes sustainable impact comes from collaboration.",
      "We are building an ecosystem of:",
    ],
  } as TextBlock,
  partnerTypes: [
    "Education partners",
    "Industry partners",
    "Technology companies",
    "Government institutions",
    "Development organisations",
    "Certification bodies",
    "Strategic advisors",
    "Employers",
  ],
  philosophy: {
    heading: "Partnership Philosophy",
    text: "Complementary capabilities. Shared purpose. Sustainable impact.",
  },
  cta: { label: "Partner With LOEXA", href: "/contact" } as CTA,
};

// ---------------------------------------------------------------------------
// 13. NEWS & EVENTS
// ---------------------------------------------------------------------------
export const newsEventsContent = {
  hero: {
    heading: "LOEXA in Action",
    subheading: "Follow our latest developments across Africa.",
    paragraphs: [],
  },
  featured: {
    heading: "Featured Content",
    items: [
      "Partnership announcements",
      "Programme launches",
      "Industry events",
      "Webinars",
      "Workshops",
      "Research",
      "Thought leadership",
      "Success stories",
      "Community initiatives",
    ],
  } as ListBlock,
  cta: { label: "View Latest Updates", href: "/news" } as CTA,
};

// ---------------------------------------------------------------------------
// 14. CONTACT
// ---------------------------------------------------------------------------
export const contactContent = {
  hero: {
    heading: "Let's Build Africa's Capability Together",
    paragraphs: [
      "Whether you are an organisation looking to develop your workforce, an institution seeking an industry partner, a technology company looking to expand, or an individual looking to build future-ready skills, LOEXA would like to hear from you.",
    ],
  } as TextBlock,
  connectHeading: "Connect With Us",
  categories: [
    {
      title: "Corporate & Workforce Development",
      description: "Develop your people and organisational capability.",
    },
    { title: "Technical Skills", description: "Build industry-ready technical talent." },
    { title: "Digital & AI", description: "Prepare your organisation for the AI economy." },
    { title: "Education Partnerships", description: "Connect education with industry opportunity." },
    { title: "Strategic Partnerships", description: "Build new ecosystem opportunities across Africa." },
    { title: "Learning & Programmes", description: "Explore capability-building opportunities." },
  ] as ConnectCategory[],
  cta: { label: "Contact LOEXA Africa", href: "#contact-form" } as CTA,
};

// ---------------------------------------------------------------------------
// SOURCED FROM THE CORPORATE PROFILE PDF (not the website content doc).
// Added on explicit user approval — see conversation. Placed on Home
// ("Africa's Opportunity", "The LOEXA Way") and About ("Our Values" /
// "Founder's Message" / "Founding Leadership") per the agreed placement plan.
// ---------------------------------------------------------------------------

export interface StatItem {
  value: string;
  label: string;
}

// PDF tile 04 — "Africa's Opportunity" / "Why Africa? Why Now?"
export const homeOpportunityContent = {
  eyebrow: "Why Africa? Why Now?",
  heading: "Africa's Opportunity",
  stats: [
    { value: "1.4B+", label: "People by 2030 (60% under 25)" },
    { value: "3.8%", label: "Average GDP Growth (2023–2030)" },
    { value: "$2.6T", label: "Infrastructure Investment Needed by 2040" },
    { value: "60%", label: "Workforce will require new skills by 2030" },
    { value: "~20%", label: "of graduates ready today" },
    { value: "$712B", label: "Digital Economy Opportunity by 2030" },
  ] as StatItem[],
  quote:
    "Africa's future will be shaped by the quality of its people, the strength of its institutions and the partnerships that bring them together.",
};

// PDF tile 05 — "Vision • Mission • Values". Values-only content (Mission/
// Vision on this site use the website content doc's own wording, which
// differs from the PDF's, so only Values — which the content doc doesn't
// have — and the tile's own combined heading are added).
export const visionMissionValuesHeading = "Our Vision • Mission • Values";

export const aboutValues = {
  heading: "Our Values",
  items: ["Purpose", "Excellence", "Partnership", "Innovation", "Integrity", "Impact"],
};

// PDF tile 02 — "Founder's Message"
export const founderMessage = {
  eyebrow: "Founder's Message",
  quoteParagraphs: [
    "Africa stands at a defining moment. As industries evolve and economies grow, sustainable progress will depend on capable people, strong institutions and meaningful partnerships.",
    "LOEXA Africa was established to connect education, industry, governments and development partners through a collaborative platform that develops capability and supports long-term economic growth.",
    "We believe that by working together, we can create practical solutions that empower people, strengthen institutions and contribute to Africa's future.",
  ],
  name: "Prashant Shukla",
  title: "Founder & Chief Executive Officer",
};

// PDF tile 13 — "Founding Leadership". Bio text is small in the source
// image; Prashant's bio has one phrase I could not read with confidence,
// marked below rather than guessed.
export const foundingLeadership = {
  caption: "Two founders. One shared vision. Building capability for Africa's future.",
  founders: [
    {
      name: "Prashant Shukla",
      title: "Founder & Chief Executive Officer",
      bio: "25+ years of executive leadership across Africa and Asia in automotive, mobility, industrial {{PLACEHOLDER: illegible phrase in source}} businesses, developing teams and delivering sustainable growth across emerging markets.",
    },
    {
      name: "Seema Shukla",
      title: "Co-Founder & Director, Education & Human Capital",
      bio: "Founder of Lotus Preschool, South Africa. Passionate about early childhood education, teacher development and creating learning environments that nurture capable, confident and compassionate individuals.",
    },
  ],
};

// PDF tile 16 — back cover contact block.
export const contactDetails = {
  address: "Johannesburg, South Africa",
  website: "www.loexa.africa",
  email: "info@loexa.africa",
  linkedin: "linkedin.com/company/loexa-africa",
};

// PDF tile 16 — back cover tagline block and closing line.
export const backCoverContent = {
  taglineLines: ["Connecting People.", "Developing Capability.", "Empowering Africa."],
  missionLines: ["Empowering People.", "Strengthening Industries.", "Transforming Africa."],
  closingLine: "Together, we can build a capable, competitive and prosperous Africa.",
};

// PDF tile 14 — "The LOEXA Way".
export const loexaWayContent = {
  heading: "The LOEXA Way",
  steps: [
    { title: "Connect", description: "Bringing the right partners together." },
    { title: "Develop", description: "Building capability and strengthening institutions." },
    { title: "Empower", description: "Enabling people and organisations to thrive." },
    { title: "Grow", description: "Creating sustainable impact and shared prosperity." },
  ],
  closingLine:
    "We believe sustainable development begins with connection, grows through capability and creates opportunities that benefit people, institutions and industries.",
};

// PDF tile 10 — "Our Collaborative Approach". Five-segment radial diagram
// around the LOEXA Africa mark; used on Home and its own /approach page.
export const collaborativeApproachContent = {
  heading: "Our Collaborative Approach",
  categories: [
    "Government Partners",
    "Educational Institutions",
    "Industry Leaders",
    "Development Partners",
    "Communities",
  ],
};

// PDF tile 08 — "Markets We Enable".
export const marketsWeEnableContent = {
  heading: "Markets We Enable",
  sectors: [
    "Education",
    "Public Sector",
    "Automotive & Mobility",
    "Manufacturing",
    "Mining",
    "Energy",
    "Infrastructure",
    "Agriculture",
    "Logistics",
    "Financial Services",
  ],
  closingLine: "Supporting the sectors that drive Africa's development.",
};

// PDF tile 15 — "Building Capability Together".
export const buildingCapabilityTogether = {
  heading: "Building Capability Together",
  subheading: "We welcome collaboration with:",
  categories: [
    "Governments",
    "Educational Institutions",
    "Industry Leaders",
    "Technology Partners",
    "Development Organisations",
    "Foundations & NGOs",
    "Universities",
    "TVET Institutions",
  ],
  closingLine:
    "Every meaningful partnership creates new opportunities to develop people, strengthen institutions and enable sustainable growth.",
};

// PDF tile 12 — "Creating Shared Value".
export const creatingSharedValueContent = {
  heading: "Creating Shared Value",
  categories: ["People", "Institutions", "Industry", "Communities"],
  closingLine: "Developing capability that creates lasting impact.",
};

// PDF tile 07 — "Where We Create Capability".
export const whereWeCreateCapabilityContent = {
  heading: "Where We Create Capability",
  bands: [
    {
      title: "Education & Human Capital",
      description: "Developing educators, leaders and institutions.",
    },
    {
      title: "Workforce Development",
      description: "Building future-ready talent aligned to industry.",
    },
    {
      title: "Mobility & Industry",
      description: "Supporting industrial capability and workforce excellence.",
    },
    {
      title: "Digital & Technology",
      description: "Preparing organisations for the future of work.",
    },
    {
      title: "Strategic Advisory",
      description: "Connecting strategy with implementation.",
    },
  ],
};
