import { Destination } from "@/types";

/**
 * Central image helper — every image is served from Unsplash's CDN with
 * explicit width/quality params so Next/Image can optimise on request.
 */
export function img(id: string, width = 1600, quality = 75) {
  return `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${width}&q=${quality}`;
}

export const destinations: Destination[] = [
  {
    slug: "giza",
    name: "Giza",
    arabicName: "الجيزة",
    tagline: "Where the last surviving wonder of the ancient world still stands",
    description:
      "Home to the Great Pyramids of Khufu, Khafre and Menkaure, and the Great Sphinx that has watched over the plateau for over four thousand years.",
    longDescription:
      "Giza is the postcard of Egypt itself: three pyramids rising from the desert edge, the Great Sphinx gazing east toward the sunrise, and a plateau that has drawn travelers since antiquity. Our Giza tours combine skip-the-line access with a private Egyptologist guide, so you spend your time understanding the monuments rather than queueing for them. Ride a camel along the ridge for the classic panoramic view, step inside a pyramid's burial chamber, and finish at the Solar Boat Museum where a 4,600 year old vessel still rests intact.",
    image: "/images/sphinx.jpeg",
    highlights: [
      "Skip-the-line entry to the Giza Plateau",
      "Private Egyptologist guide, no large-group shuffling",
      "Camel or horse ride along the panorama point",
      "Optional inside-the-pyramid chamber access",
    ],
  },
  {
    slug: "cairo",
    name: "Cairo",
    arabicName: "القاهرة",
    tagline: "A living city built on four thousand years of layered history",
    description:
      "The Egyptian Museum, Islamic Cairo's minarets, and the lantern-lit lanes of Khan El Khalili bazaar — Cairo rewards travelers who wander slowly.",
    longDescription:
      "Cairo is not a single sight but a texture: horse-drawn carts beside modern flyovers, the golden mask of Tutankhamun a few steps from Ottoman-era coffee houses, and a bazaar that has been trading since 1382. We build Cairo days around the Egyptian Museum (or the new Grand Egyptian Museum), the Citadel of Salah El-Din, and a slow walk through Khan El Khalili with time to actually sit, drink tea, and haggle — not just photograph.",
    image: "/images/cairo.jpeg",
    highlights: [
      "Egyptian Museum & Tutankhamun treasures",
      "Citadel of Salah El-Din and Old Cairo",
      "Khan El Khalili bazaar with a local guide",
      "Authentic Egyptian lunch included",
    ],
  },
  {
    slug: "alexandria",
    name: "Alexandria",
    arabicName: "الإسكندرية",
    tagline: "The Mediterranean city Alexander the Great built as his gateway",
    description:
      "The Qaitbay Citadel on the ruins of the ancient lighthouse, the Bibliotheca Alexandrina, and a corniche that stretches along the sea.",
    longDescription:
      "Alexandria trades the desert for the Mediterranean. Founded by Alexander the Great in 331 BC, it was once home to the Great Library and one of the Seven Wonders — the Pharos Lighthouse. Today the Qaitbay Citadel stands on the lighthouse's foundations, the modern Bibliotheca Alexandrina reimagines the ancient library, and the corniche is made for an unhurried afternoon walk with the sea on one side and belle-époque buildings on the other.",
    image: "/images/alexandria.jpeg",
    highlights: [
      "Qaitbay Citadel on the ancient lighthouse site",
      "Bibliotheca Alexandrina",
      "Roman Amphitheatre & Catacombs of Kom El Shoqafa",
      "Corniche seafront and fresh seafood lunch",
    ],
  },
  {
    slug: "fayoum",
    name: "Fayoum",
    arabicName: "الفيوم",
    tagline: "Desert lakes, waterfalls, and Egypt's quietest landscapes",
    description:
      "A day away from Cairo's traffic: Wadi El Rayan's twin lakes and waterfalls, golden dunes, and the fossil valley of Wadi El Hitan.",
    longDescription:
      "Fayoum is Egypt's escape hatch — a desert oasis just over an hour from Cairo where the pace changes completely. We visit Wadi El Rayan's man-made waterfalls (the only ones in Egypt), the Magic Lake at the edge of the dunes, and — for the curious — Wadi El Hitan, a UNESCO World Heritage site where 40-million-year-old whale skeletons sit in open desert. It's the tour we recommend for travelers who want Egypt's nature and silence, not only its monuments.",
    image: "/images/fayoum.jpeg",
    highlights: [
      "Wadi El Rayan waterfalls and twin lakes",
      "Magic Lake & golden sand dunes",
      "Wadi El Hitan (Valley of the Whales), UNESCO site",
      "Sandboarding and 4x4 desert safari options",
    ],
  },
];

export function getDestination(slug: string) {
  return destinations.find((d) => d.slug === slug);
}
