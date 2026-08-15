<template>
  <section id="usecases" class="usecases-section">
    <div class="container">
      <div class="section-tag">Use Cases</div>
      <h2 class="section-title">What teams build with it.</h2>
      <p class="section-sub">
        RevoGrid Pivot ships with linked charts for BI dashboards, analytics
        products, financial reporting tools, and data-heavy internal apps.
      </p>

      <div class="usecase-grid">
        <article v-for="useCase in USE_CASES" :key="useCase.number" class="usecase-card">
          <figure class="usecase-media">
            <img
              :src="useCase.image.src"
              :alt="useCase.image.alt"
              :width="useCase.image.width"
              :height="useCase.image.height"
              loading="lazy"
              decoding="async"
            >
          </figure>

          <div class="usecase-content">
            <div class="usecase-num">{{ useCase.number }}</div>
            <h3 class="usecase-title">{{ useCase.title }}</h3>
            <p class="usecase-desc">{{ useCase.description }}</p>
            <div class="usecase-features">
              <div v-for="feature in useCase.features" :key="feature" class="usecase-feature">
                <span class="usecase-dot"></span>
                <span>{{ feature }}</span>
              </div>
            </div>
            <a class="usecase-link" :href="useCase.href">
              Read the {{ useCase.title }} guide
              <span aria-hidden="true">→</span>
            </a>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
const USE_CASES = [
  {
    number: '01',
    title: 'Revenue Analytics',
    href: '/pivot/use-cases/revenue-analytics',
    description: 'Turn raw sales records into an interactive revenue view by region, channel, and quarter. Teams can expand a market, compare its channels, and see linked chart updates without building a separate reporting workflow.',
    features: [
      'Revenue by region, channel, and quarter',
      'Linked charts update with pivot context',
      'Expandable hierarchy from market to channel',
      'SUM totals with growth and percent-change metrics',
    ],
    image: {
      src: '/img/pivot-use-cases/revenue-analytics.webp',
      alt: 'Revenue analytics dashboard with a linked quarterly chart and pivot table grouping North America and EMEA revenue by Online and Enterprise channels, including quarterly totals and year-over-year growth.',
      width: 1536,
      height: 1024,
    },
  },
  {
    number: '02',
    title: 'Customer Analytics',
    href: '/pivot/use-cases/customer-analytics',
    description: 'Turn customer behavior into clear, actionable segments. Compare spend, ratings, membership tiers, cities, and discount usage in one interactive pivot, then follow patterns instantly through linked charts and heatmapped values.',
    features: [
      'Segment customers by city and membership tier',
      'Compare spend and ratings with heatmapped values',
      'Filter cohorts by tier and discount usage',
      'Explore every segment through linked charts',
    ],
    image: {
      src: '/img/pivot-use-cases/customer-analytics.webp',
      alt: 'Customer analytics dashboard with a pivot table grouping Gold, Silver, and Bronze membership tiers by city, heatmapped spend and average-rating values split by discount usage, and a linked bar chart comparing tier spend.',
      width: 1536,
      height: 1024,
    },
  },
  {
    number: '03',
    title: 'Financial Reporting',
    href: '/pivot/use-cases/financial-reporting',
    description: 'Turn live finance data into board-ready P&L, cost-center, and budget-versus-actual views. Teams can drill from consolidated totals into departmental variances while filters, subtotals, and linked charts remain synchronized inside their application.',
    features: [
      'Budget vs actuals with variance highlighting',
      'Expandable department and cost-center rollups',
      'Multi-period and multi-currency aggregation',
      'Linked variance charts and Excel-ready exports',
    ],
    image: {
      src: '/img/pivot-use-cases/financial-reporting.webp',
      alt: 'Financial reporting application showing an expandable budget-versus-actual pivot table by department and cost center, quarterly variance columns, highlighted unfavorable values, filters, totals, and a linked variance chart.',
      width: 1536,
      height: 1024,
    },
  },
] as const
</script>

<style lang="scss" scoped>
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 48px;

  @media (max-width: 768px) {
    padding: 0 24px;
  }
}

.section-tag {
  color: var(--pivot-accent);
  font-family: var(--vp-font-family-mono);
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.section-title {
  max-width: 660px;
  margin: 12px 0 14px;
  color: var(--rg-text);
  font-size: clamp(34px, 4.2vw, 56px);
  font-weight: 400;
  letter-spacing: -0.01em;
  line-height: 1.08;
}

.section-sub {
  max-width: 560px;
  margin: 0 0 48px;
  color: var(--rg-text-2);
  font-size: 16px;
  line-height: 1.7;
}

.usecases-section {
  padding: 96px 0;
  border-top: 1px solid var(--vp-c-divider);
  background: var(--rg-bg-2);
}

.usecase-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  margin-top: 50px;

  @media (max-width: 920px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
}

.usecase-card {
  display: flex;
  min-width: 0;
  overflow: hidden;
  flex-direction: column;
  border: 1px solid var(--vp-c-divider);
  border-radius: 16px;
  background: var(--rg-bg);
  box-shadow: var(--pro-doc-shadow-sm);
  transition: border-color 0.2s, box-shadow 0.2s, transform 0.2s;

  &:hover {
    border-color: var(--pivot-accent-border);
    box-shadow: var(--pro-doc-shadow-lg);
    transform: translateY(-2px);
  }
}

.usecase-media {
  position: relative;
  overflow: hidden;
  aspect-ratio: 3 / 2;
  margin: 0;
  border-bottom: 1px solid var(--vp-c-divider);
  background: var(--rg-bg-2);
}

.usecase-media img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.35s ease;
}

.usecase-card:hover .usecase-media img {
  transform: scale(1.015);
}

.usecase-content {
  display: flex;
  flex: 1;
  flex-direction: column;
  padding: 26px;
}

.usecase-num {
  margin-bottom: 6px;
  color: rgba(15, 118, 110, 0.18);
  font-size: 40px;
  font-weight: 600;
  letter-spacing: -2px;
  line-height: 1;
}

:global(.dark) .usecase-num {
  color: oklch(0.72 0.18 185 / 0.2);
}

.usecase-title {
  margin-bottom: 10px;
  color: var(--rg-text);
  font-size: 17px;
  font-weight: 600;
  letter-spacing: -0.2px;
  line-height: 1.25;
}

.usecase-desc {
  margin: 0;
  color: var(--rg-text-2);
  font-size: 14px;
  line-height: 1.7;
}

.usecase-features {
  display: grid;
  gap: 7px;
  margin-top: auto;
  padding-top: 18px;
}

.usecase-feature {
  display: flex;
  align-items: flex-start;
  gap: 8px;
  color: var(--rg-text-2);
  font-size: 13px;
  line-height: 1.45;
}

.usecase-dot {
  flex: 0 0 auto;
  width: 6px;
  height: 6px;
  margin-top: 7px;
  border-radius: 50%;
  background: var(--pivot-accent);
}

.usecase-link {
  display: inline-flex;
  align-items: center;
  align-self: flex-start;
  gap: 7px;
  margin-top: 22px;
  color: var(--pivot-accent);
  font-size: 13px;
  font-weight: 600;
  line-height: 1.4;
  text-decoration: none;
}

.usecase-link span {
  transition: transform 0.2s ease;
}

.usecase-link:hover span {
  transform: translateX(3px);
}

.usecase-link:focus-visible {
  border-radius: 4px;
  outline: 2px solid var(--pivot-accent);
  outline-offset: 4px;
}

@media (prefers-reduced-motion: reduce) {
  .usecase-card,
  .usecase-media img,
  .usecase-link span {
    transition: none;
  }
}
</style>
