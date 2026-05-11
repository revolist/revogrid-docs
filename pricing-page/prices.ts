export type Currency = 'EUR' | 'USD';

interface PeriodPrices {
  EUR: number;
  USD: number;
}

interface PlanPrice {
  month: PeriodPrices;
  year: PeriodPrices;
  link: string;
}

const lightYearPrices = {
  EUR: 170,
  USD: 199,
};

const advancedYearPrices = {
  EUR: 430,
  USD: 499,
};

export const PRICES: Record<'light' | 'advanced', PlanPrice> = {
  light: {
    month: {
      EUR: Math.round((lightYearPrices.EUR / 12)),
      USD: Math.round((lightYearPrices.USD / 12)),
    },
    year: lightYearPrices,
    link: 'https://buy.stripe.com/3cIcN62oL6MEcWm8miew80e',
  },
  advanced: {
    month: {
      EUR: Math.round((advancedYearPrices.EUR / 12)),
      USD: Math.round((advancedYearPrices.USD / 12)),
    },
    year: {
      EUR: advancedYearPrices.EUR,
      USD: advancedYearPrices.USD,
    },
    link: 'https://buy.stripe.com/dRm14ofbxfja5tU6eaew80f',
  },
};
