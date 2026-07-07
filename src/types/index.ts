export interface Destination {
  slug: string;
  name: string;
  arabicName: string;
  tagline: string;
  description: string;
  longDescription: string;
  image: string;
  highlights: string[];
}

export interface Tour {
  slug: string;
  title: string;
  destinationSlug: string;
  duration: string;
  image: string;
  summary: string;
  price: string;
}

export interface Testimonial {
  name: string;
  country: string;
  quote: string;
  image: string;
  rating: number;
}

export interface FAQ {
  question: string;
  answer: string;
}
