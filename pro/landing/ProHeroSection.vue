<template>
  <section class="hero">
    <div class="pro-container hero-grid">
      <div class="hero-copy">
        <span class="eyebrow"><span class="dot"></span>{{ page.hero.badge }}</span>
        <h1>
          {{ page.hero.title.prefix }}
          <em>{{ page.hero.title.highlight }}</em>,
          {{ page.hero.title.suffix }}
        </h1>
        <p class="lead">{{ page.hero.subtitle }}</p>
        <div class="hero-cta">
          <a :href="page.hero.actions.primary.href" class="pro-btn pro-btn-primary pro-btn-lg">
            {{ page.hero.actions.primary.label }} <span>{{ page.hero.actions.primary.detail }}</span>
          </a>
          <a :href="page.hero.actions.secondary.href" class="pro-btn pro-btn-ghost pro-btn-lg">
            {{ page.hero.actions.secondary.label }}
            <span aria-hidden="true">-&gt;</span>
          </a>
        </div>
        <div class="hero-meta">
          <span v-for="item in page.hero.meta" :key="item"><span class="check">✓</span>{{ item }}</span>
        </div>
      </div>

      <div class="showcase" aria-label="RevoGrid Pro data grid preview">
        <div class="showcase-chrome">
          <div class="chrome-dots" aria-hidden="true"><span></span><span></span><span></span></div>
          <div class="chrome-title">{{ page.hero.showcase.title }}</div>
          <div class="chrome-actions">
            <span v-for="action in page.hero.showcase.actions" :key="action">{{ action }}</span>
          </div>
        </div>
        <div class="showcase-body">
          <div class="mini-toolbar">
            <div class="toolbar-left">
              <span class="pill">{{ page.hero.showcase.toolbar.pill }}</span>
              <span>filtered by Region = "EMEA"</span>
            </div>
            <div class="toolbar-actions" aria-hidden="true">
              <button type="button">+</button>
              <button type="button">≡</button>
              <button type="button">...</button>
            </div>
          </div>
          <div class="mini-grid">
            <div class="gh-row">
              <div>#</div><div>Customer</div><div>Region</div><div>Status</div><div>MRR</div><div>QoQ</div>
            </div>
            <div v-for="row in heroRows" :key="row.id" class="g-row" :class="{ alt: row.alt }">
              <div class="idx">{{ row.id }}</div>
              <div :class="{ sel: row.selected }">{{ row.customer }}</div>
              <div :class="{ sel: row.selected }">{{ row.region }}</div>
              <div :class="{ sel: row.selected }"><span class="badge" :class="row.badgeClass">{{ row.status }}</span></div>
              <div class="num" :class="{ sel: row.selected }">{{ row.mrr }}</div>
              <div class="num trend" :class="[row.trendClass, { sel: row.selected }]">{{ row.trend }}</div>
            </div>
          </div>
          <div class="mini-foot">
            <div class="formula"><span>fx</span> {{ page.hero.showcase.toolbar.formula }}</div>
          </div>
        </div>
        <div class="float-card" aria-hidden="true">
          <div class="label">{{ page.hero.showcase.float.label }}</div>
          <div class="value">{{ page.hero.showcase.float.value }}</div>
          <div class="delta">{{ page.hero.showcase.float.delta }}</div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
defineProps<{
  page: Record<string, any>
}>()

const heroRows = [
  { id: '01', customer: 'Acme Industries', region: 'EMEA', status: 'Active', mrr: 'EUR 18,420', trend: '+12%', badgeClass: 'badge-good', trendClass: 'good' },
  { id: '02', customer: 'Northwind GmbH', region: 'EMEA', status: 'Active', mrr: 'EUR 14,210', trend: '+4%', badgeClass: 'badge-good', trendClass: 'good', alt: true },
  { id: '03', customer: 'Initech Holdings', region: 'EMEA', status: 'Trial', mrr: 'EUR 9,840', trend: '+22%', badgeClass: 'badge-warn', trendClass: 'good' },
  { id: '04', customer: 'Globex SA', region: 'EMEA', status: 'Onboarding', mrr: 'EUR 7,500', trend: '-', badgeClass: 'badge-info', trendClass: 'dim', alt: true },
  { id: '05', customer: 'Vandelay Industries', region: 'EMEA', status: 'Churn risk', mrr: 'EUR 6,120', trend: '-8%', badgeClass: 'badge-rose', trendClass: 'rose', selected: true },
  { id: '06', customer: 'Hooli Cloud', region: 'EMEA', status: 'Active', mrr: 'EUR 5,900', trend: '+9%', badgeClass: 'badge-good', trendClass: 'good', alt: true },
]
</script>
