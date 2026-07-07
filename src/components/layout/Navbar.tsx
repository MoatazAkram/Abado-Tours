"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { buildWhatsappUrl } from "@/lib/site-config";
import Button from "@/components/ui/Button";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/destinations", label: "Destinations" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact Us" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const [prevPathname, setPrevPathname] = useState(pathname);

  if (pathname !== prevPathname) {
    setPrevPathname(pathname);
    setOpen(false);
  }

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-colors duration-300 ${
        scrolled || open
          ? "bg-nile-night/95 backdrop-blur shadow-md"
          : "bg-gradient-to-b from-nile-night/70 to-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3.5 sm:px-8 lg:px-12">
        <Link href="/" className="flex items-center gap-3">
          <span className="flex h-11 w-11 items-center justify-center rounded-full border border-gold/70">
            <svg viewBox="0 0 40 40" width="24" height="24" aria-hidden="true">
              <path
                d="M20 8 L32 30 H8 Z"
                fill="none"
                stroke="var(--color-gold)"
                strokeWidth="1.6"
              />
              <path
                d="M14 30 L20 17 L26 30"
                fill="none"
                stroke="var(--color-gold)"
                strokeWidth="1.2"
              />
              <circle cx="20" cy="12.5" r="1.4" fill="var(--color-gold)" />
            </svg>
          </span>
          <span className="font-display text-lg leading-none tracking-wide text-papyrus sm:text-xl">
            Abado
            <span className="block font-utility text-[0.55rem] font-normal tracking-[0.28em] text-gold-bright">
              PYRAMIDS &amp; SPHINX TOURS
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-9 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`font-body text-sm uppercase tracking-[0.14em] text-papyrus/85 transition-colors hover:text-gold-bright ${
                pathname === link.href ? "text-gold-bright" : ""
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Button href={buildWhatsappUrl()} variant="primary">
            Book Now
          </Button>
        </div>

        <button
          className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 lg:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span
            className={`h-px w-6 bg-papyrus transition-transform duration-300 ${
              open ? "translate-y-2 rotate-45" : ""
            }`}
          />
          <span
            className={`h-px w-6 bg-papyrus transition-opacity duration-300 ${
              open ? "opacity-0" : ""
            }`}
          />
          <span
            className={`h-px w-6 bg-papyrus transition-transform duration-300 ${
              open ? "-translate-y-2 -rotate-45" : ""
            }`}
          />
        </button>
      </div>

      {open && (
        <div className="border-t border-papyrus/10 bg-nile-night px-5 pb-6 pt-2 lg:hidden">
          <nav className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`rounded-sm px-2 py-3 font-body text-base uppercase tracking-[0.1em] text-papyrus/90 hover:text-gold-bright ${
                  pathname === link.href ? "text-gold-bright" : ""
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <Button href={buildWhatsappUrl()} variant="primary" className="mt-3 w-full">
            Book Now
          </Button>
        </div>
      )}
    </header>
  );
}
