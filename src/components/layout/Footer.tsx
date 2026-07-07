import Link from "next/link";
import Container from "@/components/ui/Container";
import { siteConfig, buildWhatsappUrl } from "@/lib/site-config";
import { destinations } from "@/lib/destinations";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-nile-night text-papyrus/80">
      <Container className="grid grid-cols-1 gap-10 py-16 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <span className="font-display text-xl text-papyrus">Abado</span>
          <span className="mt-1 block font-utility text-[0.6rem] tracking-[0.28em] text-gold-bright">
            PYRAMIDS &amp; SPHINX TOURS
          </span>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-papyrus/65">
            {siteConfig.description}
          </p>
        </div>

        <div>
          <h3 className="font-utility text-xs uppercase tracking-[0.24em] text-gold-bright">
            Destinations
          </h3>
          <ul className="mt-4 space-y-2.5 text-sm">
            {destinations.map((d) => (
              <li key={d.slug}>
                <Link
                  href={`/destinations/${d.slug}`}
                  className="hover:text-gold-bright"
                >
                  {d.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-utility text-xs uppercase tracking-[0.24em] text-gold-bright">
            Company
          </h3>
          <ul className="mt-4 space-y-2.5 text-sm">
            <li>
              <Link href="/about" className="hover:text-gold-bright">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-gold-bright">
                Contact Us
              </Link>
            </li>
            <li>
              <Link href="/destinations" className="hover:text-gold-bright">
                All Tours
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-utility text-xs uppercase tracking-[0.24em] text-gold-bright">
            Get in touch
          </h3>
          <ul className="mt-4 space-y-2.5 text-sm">
            <li>
              <a href={buildWhatsappUrl()} className="hover:text-gold-bright">
                WhatsApp: {siteConfig.phoneDisplay}
              </a>
            </li>
            <li>
              <a href={`mailto:${siteConfig.email}`} className="hover:text-gold-bright">
                {siteConfig.email}
              </a>
            </li>
            <li className="text-papyrus/60">{siteConfig.address}</li>
          </ul>
          <div className="mt-5 flex gap-4">
            <a
              href={siteConfig.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="text-papyrus/70 hover:text-gold-bright"
            >
              Instagram
            </a>
            <a
              href={siteConfig.social.facebook}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="text-papyrus/70 hover:text-gold-bright"
            >
              Facebook
            </a>
          </div>
        </div>
      </Container>

      <div className="border-t border-papyrus/10 py-6">
        <Container className="flex flex-col items-center justify-between gap-2 text-xs text-papyrus/50 sm:flex-row">
          <p>© {year} {siteConfig.name}. All rights reserved.</p>
          <p>Made for travelers who want Egypt done right.</p>
        </Container>
      </div>
    </footer>
  );
}
