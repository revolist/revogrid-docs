import {
  SUMMER_SALE_CUTOFF,
  SUMMER_SALE_EXPIRES_AT,
  formatFrameworkPricingNote,
  resolvePlanPrice as resolveCatalogPlanPrice,
  type PriceTimestamp,
  type ResolvedPromotion,
} from '../commercial/productCatalog'

export {
  PRODUCT_CATALOG,
  SUMMER_SALE_CUTOFF,
  SUMMER_SALE_EXPIRES_AT,
  formatFrameworkPricingNote,
  type Currency,
  type PeriodPrices,
  type PriceTimestamp,
  type ResolvedPromotion,
} from '../commercial/productCatalog'

export type PurchasablePlanId = 'light' | 'advanced'

export interface ResolvedPlanPrice {
  month: number
  year: number
  compareAtYear?: number
  link: string
  promotion?: ResolvedPromotion
}

const catalogPlanId = {
  light: 'pro-lite',
  advanced: 'pro-advanced',
} as const

export const resolvePlanPrice = (
  planId: PurchasablePlanId,
  at: PriceTimestamp = new Date(),
): ResolvedPlanPrice => {
  const resolved = resolveCatalogPlanPrice(catalogPlanId[planId], at)
  return {
    month: resolved.month.USD,
    year: resolved.year.USD,
    compareAtYear: resolved.compareAtYear?.USD,
    link: resolved.link,
    promotion: resolved.promotion,
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
