import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import ContactForm from "@/components/contact/ContactForm";
import { buildWhatsappUrl, siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Abado Pyramids & Sphinx Tours on WhatsApp, email or phone to book your private Egypt tour.",
  alternates: { canonical: `${siteConfig.url}/contact` },
};

export default function ContactPage() {
  return (
    <div className="pt-28">
      <section className="bg-papyrus py-16 sm:py-20">
        <Container className="grid grid-cols-1 gap-14 lg:grid-cols-2">
          <div>
            <SectionHeading
              align="left"
              eyebrow="Contact us"
              title="Tell us what you have in mind"
              description="The fastest way to reach us is WhatsApp — most messages get a reply within minutes during Cairo daytime hours. Prefer to fill in a few details first? Use the form and we'll pick up the conversation on WhatsApp."
            />

            <dl className="mt-10 space-y-5 text-sm">
              <div>
                <dt className="font-utility text-xs uppercase tracking-[0.2em] text-clay">
                  WhatsApp &amp; Phone
                </dt>
                <dd className="mt-1 text-ink/75">
                  <a href={buildWhatsappUrl()} className="hover:text-clay">
                    {siteConfig.phoneDisplay}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="font-utility text-xs uppercase tracking-[0.2em] text-clay">
                  Email
                </dt>
                <dd className="mt-1 text-ink/75">
                  <a href={`mailto:${siteConfig.email}`} className="hover:text-clay">
                    {siteConfig.email}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="font-utility text-xs uppercase tracking-[0.2em] text-clay">
                  Based in
                </dt>
                <dd className="mt-1 text-ink/75">{siteConfig.address}</dd>
              </div>
            </dl>
          </div>

          <div className="rounded-sm border border-limestone bg-white/50 p-7 sm:p-9">
            <h2 className="font-display text-xl text-ink">
              Send us your trip details
            </h2>
            <div className="mt-6">
              <ContactForm />
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
