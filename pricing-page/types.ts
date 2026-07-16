export type PricingPlanId = 'light' | 'advanced' | 'enterprise'

export interface PricingLink {
  label: string
  href: string
  external?: boolean
}

export interface PricingFeature {
  text: string
  link?: string
}

export type PricingFeatureEntry = string | PricingFeature

export interface PricingCardData {
  id: PricingPlanId
  name?: string
  description: string
  action?: string
  features?: PricingFeatureEntry[]
  featured?: boolean
  badge?: string
  price?: string
  period?: string
  sub?: string
  billingNote?: string
  link?: string
}

export interface ResolvedPricingCardData extends PricingCardData {
  name: string
  action: string
  features: PricingFeatureEntry[]
  compareAtPrice?: string
  discountLabel?: string
}

export interface PricingPromotionContent {
  label: string
  title: string
  description: string
}

export interface PricingSectionData {
  label: string
  title: string
  description: string
  note: string
  cards: PricingCardData[]
}

export type PricingDifferenceKind = 'included' | 'not-included' | 'text'

export interface PricingDifferenceValue {
  kind: PricingDifferenceKind
  text?: string
}

export interface PricingDifferenceFeaturePart {
  text: string
  href?: string
}

export type PricingDifferenceFeature =
  | string
  | {
      text: string
      href?: string
      parts?: PricingDifferenceFeaturePart[]
    }

export interface PricingDifferenceRow {
  feature: PricingDifferenceFeature
  free: PricingDifferenceValue
  lite: PricingDifferenceValue
  advanced: PricingDifferenceValue
}

export interface PricingKeyDifferencesData {
  heading: string
  description: string
  scrollHint: string
  rows: PricingDifferenceRow[]
  link: PricingLink
}

export interface PricingEvaluationOption {
  eyebrow: string
  heading: string
  description: string
  features: string[]
  action: PricingLink
  recommended?: boolean
}

export interface PricingEvaluationData {
  heading: string
  description: string
  options: PricingEvaluationOption[]
  clarification: string
}

export interface PricingGuidanceData {
  eyebrow: string
  heading: string
  description: string
  action: string
}

export interface PricingFaqItem {
  q: string
  a: string
}

export interface PricingFaqData {
  heading: string
  items: PricingFaqItem[]
}

export interface PricingCompareLinksData {
  heading: string
  description: string
  items: PricingLink[]
}

export interface PricingPageData {
  keyDifferences: PricingKeyDifferencesData
  evaluation: PricingEvaluationData
  guidance: PricingGuidanceData
  compareLinks: PricingCompareLinksData
}
