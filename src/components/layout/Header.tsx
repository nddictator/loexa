"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, Menu } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Logo } from "./Logo";
import { MobileNav } from "./MobileNav";
import { mainNav, isNavDropdown } from "@/data/nav";
import { cn } from "@/lib/utils";

const navLinkClass =
  "relative font-heading text-sm font-semibold text-ink transition-colors hover:text-navy after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-full after:origin-left after:scale-x-0 after:bg-gold after:transition-transform after:duration-300 hover:after:scale-x-100";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const primary = mainNav.slice(0, -1);
  const contactItem = mainNav[mainNav.length - 1];

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full bg-white/95 backdrop-blur transition-shadow",
        scrolled ? "shadow-md shadow-navy/5" : "shadow-none",
      )}
    >
      <Container className="flex h-20 items-center justify-between">
        <Logo />

        <nav className="hidden items-center gap-8 lg:flex">
          {primary.map((entry) =>
            isNavDropdown(entry) ? (
              <div
                key={entry.label}
                className="relative"
                onMouseEnter={() => setOpenDropdown(entry.label)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <button
                  className={cn(navLinkClass, "flex items-center gap-1 after:hidden")}
                  onClick={() => setOpenDropdown(openDropdown === entry.label ? null : entry.label)}
                >
                  {entry.label}
                  <ChevronDown
                    className={cn("h-4 w-4 transition-transform", openDropdown === entry.label && "rotate-180")}
                  />
                </button>
                <AnimatePresence>
                  {openDropdown === entry.label && (
                    <motion.div
                      initial={{ opacity: 0, y: -8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      transition={{ duration: 0.18 }}
                      className="absolute left-0 top-full w-64 rounded-xl border border-navy/5 bg-white py-2 shadow-xl shadow-navy/10"
                    >
                      {entry.items.map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          className="block px-5 py-3 text-sm font-medium text-ink transition-colors hover:bg-offwhite hover:text-navy"
                        >
                          {item.label}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ) : (
              <Link key={entry.href} href={entry.href} className={navLinkClass}>
                {entry.label}
              </Link>
            ),
          )}
        </nav>

        <div className="hidden lg:block">
          {!isNavDropdown(contactItem) && (
            <Button href={contactItem.href} variant="primary">
              {contactItem.label}
            </Button>
          )}
        </div>

        <button
          className="flex items-center justify-center rounded-full p-2 text-navy lg:hidden"
          onClick={() => setMobileOpen(true)}
          aria-label="Open menu"
        >
          <Menu className="h-6 w-6" />
        </button>
      </Container>

      <AnimatePresence>{mobileOpen && <MobileNav onClose={() => setMobileOpen(false)} />}</AnimatePresence>
    </header>
  );
}
