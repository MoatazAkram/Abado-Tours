import Image from "next/image";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import { buildWhatsappUrl } from "@/lib/site-config";
import { img } from "@/lib/destinations";

export default function FinalCta() {
  return (
    <section className="relative overflow-hidden bg-nile-night py-24 sm:py-28">
      <Image
        src={img("photo-1678388103961-5e1254fcc42a", 2000, 70)}
        alt="The Pyramids of Giza in the desert"
        fill
        sizes="100vw"
        className="object-cover opacity-25"
      />
      <Container className="relative text-center">
        <p className="font-utility text-xs uppercase tracking-[0.3em] text-gold-bright">
          Ready when you are
        </p>
        <h2 className="mx-auto mt-4 max-w-2xl font-display text-3xl text-papyrus sm:text-4xl">
          Tell us your dates on WhatsApp, and we&rsquo;ll build the day around them.
        </h2>
        <div className="mt-9 flex justify-center">
          <Button href={buildWhatsappUrl()} variant="primary">
            Start planning on WhatsApp
          </Button>
        </div>
      </Container>
    </section>
  );
}
