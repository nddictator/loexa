import Image from "next/image";
import { Quote } from "lucide-react";
import { Reveal } from "@/components/motion/Reveal";

// "Founder's Message" — reference deck tile 02: white panel, navy heading +
// quote mark, full-bleed portrait on the right that fades in from the page
// background on its left edge, with a gold/navy ribbon-fold corner cut.
export function FounderMessage({
  eyebrow,
  quoteParagraphs,
  name,
  title,
  image,
}: {
  eyebrow: string;
  quoteParagraphs: string[];
  name: string;
  title: string;
  image: string;
}) {
  return (
    <section className="relative overflow-hidden bg-white">
      <div className="mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-2">
        <Reveal className="flex flex-col justify-center gap-5 px-6 py-16 sm:px-8 sm:py-20 lg:py-24 lg:pl-12 lg:pr-16">
          <div>
            <h2 className="font-heading text-2xl font-bold uppercase tracking-wide text-navy sm:text-3xl">
              {eyebrow}
            </h2>
            <div className="mt-3 h-1 w-12 bg-gold" />
          </div>

          <Quote className="h-10 w-10 -scale-x-100 fill-navy text-navy" stroke="none" />

          <div className="flex flex-col gap-4">
            {quoteParagraphs.map((p) => (
              <p key={p} className="leading-relaxed text-slate">
                {p}
              </p>
            ))}
          </div>

          <div className="mt-2 border-t border-navy/10 pt-6">
            <p className="font-signature text-3xl leading-none text-navy sm:text-4xl">{name}</p>
            <p className="mt-2 text-sm font-semibold uppercase tracking-wide text-gold">{title}</p>
          </div>
        </Reveal>

        <div className="relative min-h-[380px] overflow-hidden lg:min-h-[560px]">
          <Image
            src={image}
            alt={name}
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover"
          />
          <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-white to-transparent sm:w-24 lg:w-32" />

          <span
            aria-hidden
            className="pointer-events-none absolute bottom-0 right-0 h-20 w-20 bg-gold sm:h-24 sm:w-24"
            style={{ clipPath: "polygon(100% 0, 0% 100%, 100% 100%)" }}
          />
          <span
            aria-hidden
            className="pointer-events-none absolute bottom-0 right-0 h-12 w-12 bg-navy sm:h-14 sm:w-14"
            style={{ clipPath: "polygon(100% 0, 0% 100%, 100% 100%)" }}
          />
        </div>
      </div>
    </section>
  );
}
