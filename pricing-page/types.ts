export interface PricingHeroData {
  eyebrow: string
  title: string
  titleEmphasis: string
  subtitle: string
}

export interface PricingFaqItem {
  question: string
  answer: string
}

export interface PricingFaqData {
  heading: string
  items: PricingFaqItem[]
}

export interface PricingCtaLink {
  label: string
  href: string
  external?: boolean
}

export interface PricingCtaData {
  title: string
  titleEmphasis: string
  subtitle: string
  primary: PricingCtaLink
  secondary: PricingCtaLink
  footerLinks: PricingCtaLink[]
}

export interface PricingCompareLinksData {
  heading: string
  description: string
  items: PricingCtaLink[]
}

export interface PricingPageData {
  featureComparison: {
    heading: string
  }
  compareLinks: PricingCompareLinksData
  faq: PricingFaqData
  cta: PricingCtaData
}
