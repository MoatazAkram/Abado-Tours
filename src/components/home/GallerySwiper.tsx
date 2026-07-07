"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { img } from "@/lib/destinations";

const galleryImages = [
  { src: "/images/customer1.jpg", alt: "Travelers at the Great Sphinx and Pyramids of Giza" },
  { src: "/images/customer2.jpg", alt: "The Great Pyramids of Giza from the desert" },
  { src: "/images/customer3.jpg", alt: "Exploring Khan El Khalili bazaar in Cairo" },
  { src: "/images/customer4.jpg", alt: "The Alexandria coastline" },
  { src: "/images/customer5.jpg", alt: "Sunrise over the dunes near Fayoum" },
  { src: "/images/customer6.jpg", alt: "Sunrise over the dunes near Fayoum" },
  { src: "/images/customer7.jpg", alt: "Sunrise over the dunes near Fayoum" },
];

export default function GallerySwiper() {
  return (
    <section className="bg-papyrus py-24 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="Gallery"
          title="Moments with our customers"
          description="A few frames from recent tours across Giza, Cairo, Alexandria and Fayoum."
        />
      </Container>

      <div className="mt-14">
        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={20}
          slidesPerView={1.15}
          centeredSlides={false}
          pagination={{ clickable: true }}
          autoplay={{ delay: 4200, disableOnInteraction: false }}
          breakpoints={{
            640: { slidesPerView: 2.2, spaceBetween: 24 },
            1024: { slidesPerView: 3.4, spaceBetween: 28 },
          }}
          className="!px-5 !pb-14 sm:!px-8 lg:!px-12"
        >
          {galleryImages.map((image) => (
            <SwiperSlide key={image.src}>
              <div className="relative aspect-[4/3] overflow-hidden rounded-sm">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 30vw"
                  className="object-cover"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
