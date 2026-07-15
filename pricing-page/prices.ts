import { stripeLinkWithClientReferenceId } from './stripeClientReference'

export type Currency = 'EUR' | 'USD'
export type PurchasablePlanId = 'light' | 'advanced'
export type PriceTimestamp = Date | number | string

export interface PeriodPrices {
  EUR: number
  USD: number
}

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
  month: PeriodPrices
  year: PeriodPrices
  compareAtYear?: Partial<PeriodPrices>
  link: string
  promotion?: ResolvedPromotion
}

interface BasePlanPrice {
  year: PeriodPrices
  link: string
}

interface PromotionPrice {
  planId: PurchasablePlanId
  startsAt: string
  expiresAt: string
  year: Partial<PeriodPrices>
  link: string
  content: Omit<ResolvedPromotion, 'expiresAt'>
}

const BASE_PRICES: Record<PurchasablePlanId, BasePlanPrice> = {
  light: {
    year: { EUR: 170, USD: 199 },
    link: 'https://buy.stripe.com/3cIcN62oL6MEcWm8miew80e',
  },
  advanced: {
    year: { EUR: 430, USD: 499 },
    link: 'https://buy.stripe.com/dRm14ofbxfja5tU6eaew80f',
  },
}

export const SUMMER_SALE_EXPIRES_AT = '2026-08-31T23:59:59Z'
export const SUMMER_SALE_CUTOFF = '2026-09-01T00:00:00Z'

const SUMMER_SALE: PromotionPrice = {
  planId: 'light',
  startsAt: '2026-06-01T00:00:00Z',
  expiresAt: SUMMER_SALE_EXPIRES_AT,
  year: { USD: 149 },
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

const monthlyPrices = (year: PeriodPrices): PeriodPrices => ({
  EUR: Math.round(year.EUR / 12),
  USD: Math.round(year.USD / 12),
})

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
      month: monthlyPrices(base.year),
      year: { ...base.year },
      link: stripeLinkWithClientReferenceId(base.link),
    }
  }

  const promotionalYear = {
    ...base.year,
    ...SUMMER_SALE.year,
  }

  return {
    month: monthlyPrices(promotionalYear),
    year: promotionalYear,
    compareAtYear: { USD: base.year.USD },
    link: stripeLinkWithClientReferenceId(SUMMER_SALE.link),
    promotion: {
      ...SUMMER_SALE.content,
      expiresAt: SUMMER_SALE.expiresAt,
    },
  }
}

export const PRICES: Record<PurchasablePlanId, ResolvedPlanPrice> = {
  get light() {
    return resolvePlanPrice('light')
  },
  get advanced() {
    return resolvePlanPrice('advanced')
  },
}
