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
  EUR: 150,
  USD: 170,
};

const advancedYearPrices = {
  EUR: 360,
  USD: 400,
};

export const PRICES: Record<'light' | 'advanced', PlanPrice> = {
  light: {
    month: {
      EUR: Math.round((lightYearPrices.EUR / 12)),
      USD: Math.round((lightYearPrices.USD / 12)),
    },
    year: lightYearPrices,
    link: 'https://buy.stripe.com/7sYaEYaVhfja09A0TQew80c',
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
    link: 'https://buy.stripe.com/28E14od3pdb2bSi1XUew80b',
  },
};
