export type Theme = 'dark' | 'light';

export type Industry =
  | 'dental'
  | 'legal'
  | 'restaurant'
  | 'consulting'
  | 'spa'
  | 'vet';

export type PaletteKey = 'navy' | 'botanical' | 'rose';

export interface Palette {
  key: PaletteKey;
  name: string;
  mood: string;
  bg: string;
  text: string;
  accent: string;
  muted: string;
  swatches: [string, string, string];
}

export interface IndustryDef {
  key: Industry;
  name: string;
  meta: string;
  headline: string;
  sub: string;
  slug: string;
}

export interface ServiceItem {
  num: string;
  category: string;
  title: string;
  body: string;
}

export interface PortfolioItem {
  tag: string;
  name: string;
  description: string;
  price: string;
  days: string;
  colors: [string, string, string];
}

export interface PriceModel {
  label: string;
  title: string;
  amount: string;
  meta: string;
  features: string[];
  featured: boolean;
  ctaText: string;
}

export interface ProcessStep {
  num: string;
  day: string;
  title: string;
  body: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface ContactFormData {
  name: string;
  company: string;
  phone: string;
  email: string;
  type: string;
  idea: string;
}
