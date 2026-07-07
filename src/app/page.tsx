import Hero from "@/components/home/Hero";
import AboutSummary from "@/components/home/AboutSummary";
import DestinationsGrid from "@/components/destinations/DestinationsGrid";
import FeaturedTours from "@/components/home/FeaturedTours";
import BookWithConfidence from "@/components/home/BookWithConfidence";
import StatsCounter from "@/components/home/StatsCounter";
import GallerySwiper from "@/components/home/GallerySwiper";
import FAQSection from "@/components/home/FAQSection";
import FinalCta from "@/components/home/FinalCta";
import SunDivider from "@/components/ui/SunDivider";

export default function Home() {
  return (
    <>
      <Hero />
      <AboutSummary />
      <SunDivider />
      <DestinationsGrid />
      <FeaturedTours />
      <BookWithConfidence />
      <StatsCounter />
      <SunDivider tone="light" />
      <GallerySwiper />
      <FAQSection />
      <FinalCta />
    </>
  );
}
