export interface NavLink {
  label: string;
  href: string;
}

export interface NavDropdown {
  label: string;
  items: NavLink[];
}

export type NavEntry = NavLink | NavDropdown;

export function isNavDropdown(entry: NavEntry): entry is NavDropdown {
  return "items" in entry;
}

// Source: content doc, "Recommended Website Navigation".
// "Workforce Development" and "Accreditation & Advisory" labels are verbatim
// from the nav list even though the underlying pages are titled "For
// Organisations" and "Accreditation & Strategic Advisory" respectively.
export const mainNav: NavEntry[] = [
  { label: "Home", href: "/" },
  { label: "Founder's Message", href: "/founders-message" },
  { label: "Vission & Mission", href: "/vision-mission-values" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

// Not part of the recommended nav (per content doc), reachable only via
// direct link / contextual cross-links from other pages.
export const unlistedRoutes: NavLink[] = [
  { label: "For Learners & Professionals", href: "/for-learners" },
  { label: "News & Events", href: "/news" },
  { label: "Our Collaborative Approach", href: "/approach" },
];
