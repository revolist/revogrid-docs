import { stripeLinkWithClientReferenceId } from './stripeClientReference'

export type PurchasablePlanId = 'light' | 'advanced'
export type PriceTimestamp = Date | number | string

export interface ResolvedPromotion {
  id: 'summer-sale-2026'
  label: string
  title: string
  description: string
  badge: string
  discountLabel: string
  expiresAt: string
  priceValidUntil: string
}

export interface ResolvedPlanPrice {
  month: number
  year: number
  compareAtYear?: number
  link: string
  promotion?: ResolvedPromotion
}

interface BasePlanPrice {
  year: number
  link: string
}

interface PromotionPrice {
  planId: PurchasablePlanId
  startsAt: string
  expiresAt: string
  year: number
  link: string
  content: Omit<ResolvedPromotion, 'expiresAt'>
}

const BASE_PRICES: Record<PurchasablePlanId, BasePlanPrice> = {
  light: {
    year: 199,
    link: 'https://buy.stripe.com/3cIcN62oL6MEcWm8miew80e',
  },
  advanced: {
    year: 499,
    link: 'https://buy.stripe.com/dRm14ofbxfja5tU6eaew80f',
  },
}

export const SUMMER_SALE_EXPIRES_AT = '2026-08-31T23:59:59Z'
export const SUMMER_SALE_CUTOFF = '2026-09-01T00:00:00Z'

const SUMMER_SALE: PromotionPrice = {
  planId: 'light',
  startsAt: '2026-06-01T00:00:00Z',
  expiresAt: SUMMER_SALE_EXPIRES_AT,
  year: 149,
  link: 'https://buy.stripe.com/5kQeVe8N9ef67C29qmew80g',
  content: {
    id: 'summer-sale-2026',
    label: 'Summer sale',
    title: '25% off Pro Lite.',
    description: 'Pro Lite is $149/year for the summer discount, down from $199/year.',
    badge: '25% off summer discount',
    discountLabel: '25% off',
    priceValidUntil: '2026-08-31',
  },
}

const asTimestamp = (at: PriceTimestamp): number => {
  const value = at instanceof Date ? at.getTime() : new Date(at).getTime()
  return Number.isFinite(value) ? value : Number.POSITIVE_INFINITY
}

const monthlyPrice = (year: number): number => Math.round(year / 12)

export const resolvePlanPrice = (
  planId: PurchasablePlanId,
  at: PriceTimestamp = new Date(),
): ResolvedPlanPrice => {
  const base = BASE_PRICES[planId]
  const timestamp = asTimestamp(at)
  const promotionIsActive = planId === SUMMER_SALE.planId
    && timestamp >= asTimestamp(SUMMER_SALE.startsAt)
    && timestamp < asTimestamp(SUMMER_SALE_CUTOFF)

  if (!promotionIsActive) {
    return {
      month: monthlyPrice(base.year),
      year: base.year,
      link: stripeLinkWithClientReferenceId(base.link),
    }
  }

  return {
    month: monthlyPrice(SUMMER_SALE.year),
    year: SUMMER_SALE.year,
    compareAtYear: base.year,
    link: stripeLinkWithClientReferenceId(SUMMER_SALE.link),
    promotion: {
      ...SUMMER_SALE.content,
      expiresAt: SUMMER_SALE.expiresAt,
    },
  }
}

export const formatFrameworkPricingNote = (
  at: PriceTimestamp = new Date(),
): string => {
  const lightPrice = resolvePlanPrice('light', at)
  const advancedPrice = resolvePlanPrice('advanced', at)
  const lightPriceCopy = lightPrice.compareAtYear
    ? `$${lightPrice.year}/year sale ($${lightPrice.compareAtYear} regular)`
    : `$${lightPrice.year}/year`

  return `Open-source core. Pro Lite: ${lightPriceCopy}. Pro Advanced: $${advancedPrice.year}/year. Per-developer licensing. No deployment counting.`
}

export const PRICES: Record<PurchasablePlanId, ResolvedPlanPrice> = {
  get light() {
    return resolvePlanPrice('light')
  },
  get advanced() {
    return resolvePlanPrice('advanced')
  },
}
