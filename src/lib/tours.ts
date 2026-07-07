import { Tour } from "@/types";
import { img } from "./destinations";

export const tours: Tour[] = [
  {
    slug: "giza-pyramids-sphinx-half-day",
    title: "Pyramids of Giza & The Great Sphinx",
    destinationSlug: "giza",
    duration: "Half day · 5 hours",
    image: "/images/sphinx-pyramid.webp",
    summary:
      "The essential first tour: the three Great Pyramids, the Sphinx, and the Valley Temple, with a private guide and skip-the-line entry.",
    price: "From $45 per person",
  },
  {
    slug: "memphis-saqqara-giza-full-day",
    title: "Memphis, Saqqara & Giza — Full Day",
    destinationSlug: "giza",
    duration: "Full day · 8 hours",
    image: "/images/saqqara.webp",
    summary:
      "Add Memphis, the ancient capital, and Saqqara's Step Pyramid — the oldest large stone building on Earth — to your Giza day.",
    price: "From $70 per person",
  },
  {
    slug: "cairo-museum-citadel-bazaar",
    title: "Cairo City: Museum, Citadel & Khan El Khalili",
    destinationSlug: "cairo",
    duration: "Full day · 8 hours",
    image: "/images/cairo-elmoez.webp",
    summary:
      "Tutankhamun's treasures, the Citadel of Salah El-Din, and an evening in Khan El Khalili bazaar with tea and time to shop.",
    price: "From $60 per person",
  },
  {
    slug: "alexandria-day-trip",
    title: "Alexandria Day Trip from Cairo",
    destinationSlug: "alexandria",
    duration: "Full day · 10 hours",
    image: "/images/citadel-of-alexandria.webp",
    summary:
      "Qaitbay Citadel, the Bibliotheca Alexandrina and the Roman Catacombs, with a seafood lunch on the corniche.",
    price: "From $85 per person",
  },
  {
    slug: "fayoum-wadi-el-rayan",
    title: "Fayoum Oasis & Wadi El Rayan",
    destinationSlug: "fayoum",
    duration: "Full day · 10 hours",
    image: "/images/fayoum.webp",
    summary:
      "Waterfalls, the Magic Lake, golden dunes and an optional stop at Wadi El Hitan's whale valley.",
    price: "From $65 per person",
  },
  {
    slug: "grand-egyptian-museum-dahshur",
    title: "Grand Egyptian Museum & Dahshur",
    destinationSlug: "fayoum",
    duration: "Full day · 8 hours",
    image: "/images/dahshur.webp",
    summary:
      "Explore the world's largest archaeological museum, home to the complete Tutankhamun collection, monumental statues, and thousands of ancient Egyptian treasures.",
    price: "From $65 per person",
  },
];
  


export function getTour(slug: string) {
  return tours.find((t) => t.slug === slug);
}

export function toursForDestination(destinationSlug: string) {
  return tours.filter((t) => t.destinationSlug === destinationSlug);
}
