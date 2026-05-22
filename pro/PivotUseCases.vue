<template>
  <section id="usecases" class="usecases-section">
    <div class="container">
      <div class="section-tag">Use Cases</div>
      <h2 class="section-title">What teams build with it.</h2>
      <p class="section-sub">
        RevoGrid Pivot ships inside BI dashboards, analytics products,
        financial reporting tools, and data-heavy internal apps.
      </p>

      <div class="usecase-grid">
        <article v-for="useCase in USE_CASES" :key="useCase.number" class="usecase-card">
          <div class="usecase-num">{{ useCase.number }}</div>
          <h3 class="usecase-title">{{ useCase.title }}</h3>
          <p class="usecase-desc">{{ useCase.description }}</p>
          <div class="usecase-features">
            <div v-for="feature in useCase.features" :key="feature" class="usecase-feature">
              <span class="usecase-dot"></span>
              <span>{{ feature }}</span>
            </div>
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
    description: 'Slice revenue by segment, region, channel, and time period. Drill from quarterly to weekly with nested row grouping.',
    features: ['Revenue by segment and channel', 'Drill-down grouping', 'YoY comparison columns', 'SUM / percent change / growth agg'],
  },
  {
    number: '02',
    title: 'Customer Analytics',
    description: 'Pivot customer data by membership, spend, and behavioral metrics. Heatmap ratings across segments for instant insight.',
    features: ['Membership tier by city pivot', 'Avg rating heatmap', 'Spend distribution', 'Filter by discount applied'],
  },
  {
    number: '03',
    title: 'Financial Reporting',
    description: 'P&L, cost center analysis, and budget vs actuals in a live, filterable pivot table embedded in your app.',
    features: ['Budget vs actual', 'Cost center by department', 'Multi-currency aggregation', 'Export to Excel for finance teams'],
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
  color: var(--vp-c-text-1);
  font-size: clamp(30px, 3.6vw, 46px);
  font-weight: 600;
  letter-spacing: -1.4px;
  line-height: 1.08;
}

.section-sub {
  max-width: 560px;
  margin: 0 0 48px;
  color: var(--vp-c-text-2);
  font-size: 16px;
  line-height: 1.75;
}

.usecases-section {
  padding: 92px 0;
  border-top: 1px solid var(--vp-c-divider);
  background: var(--vp-c-bg-soft);
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
  padding: 30px 26px;
  border: 1px solid var(--vp-c-divider);
  border-radius: 14px;
  background: var(--vp-c-bg);
  box-shadow: var(--pro-doc-shadow-sm);
  transition: border-color 0.2s, box-shadow 0.2s, transform 0.2s;

  &:hover {
    border-color: var(--pivot-accent-border);
    box-shadow: var(--pro-doc-shadow-lg);
    transform: translateY(-4px);
  }
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
  color: var(--vp-c-text-1);
  font-size: 17px;
  font-weight: 750;
  letter-spacing: -0.2px;
  line-height: 1.25;
}

.usecase-desc {
  color: var(--vp-c-text-2);
  font-size: 14px;
  line-height: 1.7;
}

.usecase-features {
  display: grid;
  gap: 7px;
  margin-top: 16px;
}

.usecase-feature {
  display: flex;
  align-items: flex-start;
  gap: 8px;
  color: var(--vp-c-text-2);
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
</style>
