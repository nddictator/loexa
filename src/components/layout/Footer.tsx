import { Mail, MapPin, Globe, ExternalLink } from "lucide-react";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { AfricaMotif } from "@/components/ui/AfricaMotif";
import { Logo } from "./Logo";
import { backCoverContent, contactDetails } from "@/data/site-content";

const contactRows = [
  { icon: MapPin, label: contactDetails.address, href: undefined },
  { icon: Globe, label: contactDetails.website, href: `https://${contactDetails.website}` },
  { icon: Mail, label: contactDetails.email, href: `mailto:${contactDetails.email}` },
  { icon: ExternalLink, label: contactDetails.linkedin, href: `https://${contactDetails.linkedin}` },
];

// Back cover of the reference deck (tile 16) — replicated as-is: logo +
// tagline stack on the left, contact list + QR code on the right, gold/navy
// ribbon-fold corner accent bottom-right.
export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden bg-gradient-to-br from-navy-dark to-navy">
      <AfricaMotif className="pointer-events-none absolute -left-16 bottom-0 h-[120%] w-auto text-white/5" />

      <Container className="relative grid grid-cols-1 gap-12 py-16 sm:py-20 lg:grid-cols-[auto_auto] lg:items-center">
        <div className="flex flex-col gap-6">
          <Logo light className="h-36 w-auto sm:h-44" />
          <div className="flex flex-col gap-1">
            {backCoverContent.taglineLines.map((line) => (
              <p key={line} className="font-heading text-lg font-semibold text-white sm:text-xl">
                {line}
              </p>
            ))}
          </div>
          <div className="flex flex-col gap-1">
            {backCoverContent.missionLines.map((line) => (
              <p key={line} className="font-heading text-lg font-bold text-gold sm:text-xl">
                {line}
              </p>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-6">
          {/* Row 1: contact list, left-aligned */}
          <div className="flex flex-col gap-4">
            {contactRows.map(({ icon: Icon, label, href }) => {
              const row = (
                <span className="flex items-center gap-3 text-sm text-white/80">
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-gold text-gold">
                    <Icon className="h-3.5 w-3.5" strokeWidth={1.75} />
                  </span>
                  {label}
                </span>
              );
              return href ? (
                <a key={label} href={href} target="_blank" rel="noreferrer" className="w-fit hover:text-white">
                  {row}
                </a>
              ) : (
                <span key={label}>{row}</span>
              );
            })}
          </div>

          {/* Row 2: QR code, right-aligned */}
          <div className="ml-auto shrink-0 rounded-lg bg-white p-2">
            <Image
              src="https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=https://www.loexa.africa"
              alt="QR code linking to loexa.africa"
              width={112}
              height={112}
              className="h-24 w-24 sm:h-28 sm:w-28"
              unoptimized
            />
          </div>

          {/* Row 3: closing line, below the QR, left-aligned to match the address */}
          <p className="max-w-[14rem] font-heading text-xs font-semibold uppercase tracking-wide text-white/80 sm:text-sm">
            {backCoverContent.closingLine}
          </p>
        </div>
      </Container>

      <span
        aria-hidden
        className="pointer-events-none absolute bottom-0 right-0 h-24 w-24 bg-gold sm:h-28 sm:w-28"
        style={{ clipPath: "polygon(100% 0, 0% 100%, 100% 100%)" }}
      />
      <span
        aria-hidden
        className="pointer-events-none absolute bottom-0 right-0 h-14 w-14 bg-navy sm:h-16 sm:w-16"
        style={{ clipPath: "polygon(100% 0, 0% 100%, 100% 100%)" }}
      />

      <Container className="relative border-t border-white/10 py-6 text-xs text-white/50">
        <span>© {year} LOEXA Africa. All rights reserved.</span>
      </Container>
    </footer>
  );
}
