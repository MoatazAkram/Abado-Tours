/**
 * Central site configuration.
 * IMPORTANT: replace `whatsappNumber` with the real business number
 * in international format, digits only, no + or spaces
 * (e.g. Egypt mobile 010xxxxxxxx -> "201xxxxxxxxx").
 */
export const siteConfig = {
  name: "Abado Pyramids Sphinx Tours",
  shortName: "Abado Tours",
  description:
    "Private day tours across Giza, Cairo, Alexandria and Fayoum with licensed Egyptologist guides. Book instantly on WhatsApp.",
  url: "https://abado-pyramids-tours.vercel.app",
  whatsappNumber: "201274574602",
  defaultWhatsappMessage:
    "Hello Abado Pyramids & Sphinx Tours! I'd like to know more about your tours.",
  email: "abadotours@gmail.com",
  phoneDisplay: "+20 12 745 74602",
  social: {
    instagram: "https://www.instagram.com/pyramidstourtop?utm_source=qr&igsh=enJpY29xOGQ3MGRl",
    facebook: "https://www.facebook.com/share/1NaAn2S8ik/",
    tripadvisor: "https://www.tripadvisor.com/",
  },
  address: "Giza, Egypt",
};

export function buildWhatsappUrl(message?: string) {
  const text = encodeURIComponent(message ?? siteConfig.defaultWhatsappMessage);
  return `https://wa.me/${siteConfig.whatsappNumber}?text=${text}`;
}
