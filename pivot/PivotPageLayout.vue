<template>
  <div class="pivot-page" :style="pageStyle">
    <section class="pivot-hero">
      <div class="container hero-inner">
        <div class="hero-copy">
          <div class="eyebrow fade-up">
            <span class="eyebrow-dot"></span>
            {{ page.hero.eyebrow }}
          </div>
          <h1 class="hero-title fade-up-2">
            <span v-if="page.hero.titleHighlightParts.length" class="hero-title-highlight">
              <span v-for="part in page.hero.titleHighlightParts" :key="part" class="hero-title-part">{{ part }}</span>
            </span>
            {{ page.hero.titleSuffix }}
          </h1>
          <p class="hero-sub fade-up-3">
            {{ page.hero.description }}
          </p>
          <div class="hero-actions fade-up-4">
            <ProDocButton
              v-for="action in page.hero.actions"
              :key="action.label"
              :href="resolvePivotLink(action.href)"
              :variant="action.variant"
              :target="action.target"
              :rel="action.rel"
              :arrow="action.arrow"
            >
              {{ action.label }}
            </ProDocButton>
          </div>
          <div v-if="page.hero.badges.length" class="hero-badges fade-up-4">
            <span v-for="badge in page.hero.badges" :key="badge">{{ badge }}</span>
          </div>
        </div>

        <div v-if="page.preview.enabled" class="fade-up-3">
          <PivotDemo />
        </div>
      </div>
    </section>

    <ProStatsBar v-if="page.stats.length" :items="page.stats" :aria-label="page.statsAriaLabel" />

    <section v-if="page.features.items.length" :id="page.features.id" class="features-section">
      <div class="container">
        <div class="section-head">
          <div class="section-tag">{{ page.features.kicker }}</div>
          <h2 class="section-title">{{ page.features.title }}</h2>
          <p class="section-sub">
            {{ page.features.description }}
          </p>
        </div>

        <ProFeatureGrid :features="page.features.items" />
      </div>
    </section>

    <PivotUseCases v-if="page.useCases.enabled" />

    <ProAdvancedCallout
      v-if="page.advancedCallout"
      :title="page.advancedCallout.title"
      :section-id="page.advancedCallout.sectionId"
    />

    <ProCtaBanner
      v-if="page.cta"
      :title="page.cta.title"
      :description="page.cta.description"
      :primary-href="resolvePivotLink(page.cta.primaryHref)"
      :primary-label="page.cta.primaryLabel"
      :secondary-href="resolvePivotLink(page.cta.secondaryHref)"
      :secondary-label="page.cta.secondaryLabel"
    />
  </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import { useData } from 'vitepress'
import ProAdvancedCallout from '../pro/ProAdvancedCallout.vue'
import ProCtaBanner from '../pro/ProCtaBanner.vue'
import ProDocButton from '../pro/ProDocButton.vue'
import ProFeatureGrid from '../pro/ProFeatureGrid.vue'
import ProStatsBar from '../pro/ProStatsBar.vue'
import PivotDemo from '../pro/PivotDemo.vue'
import PivotUseCases from '../pro/PivotUseCases.vue'

type PivotLandingAction = {
  label: string
  href: string
  variant?: 'primary' | 'secondary'
  target?: string
  rel?: string
  arrow?: boolean
}

type PivotLandingPage = {
  colors: {
    accent: string
    accentMid: string
    accentVivid: string
    soft: string
    border: string
    darkAccent: string
    darkAccentMid: string
    darkAccentVivid: string
    darkSoft: string
    darkBorder: string
  }
  hero: {
    eyebrow: string
    titleHighlightParts: string[]
    titleSuffix: string
    description: string
    actions: PivotLandingAction[]
    badges: string[]
  }
  preview: {
    enabled: boolean
  }
  statsAriaLabel: string
  stats: { value: string, label: string }[]
  features: {
    id: string
    kicker: string
    title: string
    description: string
    items: { icon: string, title: string, description: string, tags: string[], codeExample?: string }[]
  }
  useCases: {
    enabled: boolean
  }
  advancedCallout?: {
    title: string
    sectionId?: string
  }
  cta?: {
    title: string
    description: string
    primaryHref: string
    primaryLabel: string
    secondaryHref: string
    secondaryLabel: string
  }
}

const DEFAULT_PAGE: PivotLandingPage = {
  colors: {
    accent: '#0f766e',
    accentMid: '#0d9488',
    accentVivid: '#10b981',
    soft: 'rgba(15, 118, 110, 0.09)',
    border: 'rgba(15, 118, 110, 0.22)',
    darkAccent: 'oklch(0.72 0.18 185)',
    darkAccentMid: 'oklch(0.76 0.18 185)',
    darkAccentVivid: 'oklch(0.78 0.18 175)',
    darkSoft: 'oklch(0.72 0.18 185 / 0.14)',
    darkBorder: 'oklch(0.72 0.18 185 / 0.28)',
  },
  hero: {
    eyebrow: 'RevoGrid Pro / Pivot',
    titleHighlightParts: ['Multi', 'dimensional'],
    titleSuffix: 'analytics, embedded.',
    description: 'Drag-and-drop pivot tables for web apps. Slice any dataset by rows, columns, aggregations, and filters without leaving the page.',
    actions: [
      { label: 'Try live demo', href: '/demo/pivot', arrow: true },
      { label: 'Read docs', href: 'https://pro.rv-grid.com/guides/pivot/', variant: 'secondary', target: '_blank', rel: 'noopener' },
    ],
    badges: [
      'Drag-and-drop dimensions',
      'Multi-level aggregation',
      'Heatmap cell rendering',
      'Client-side on 350K+ rows',
    ],
  },
  preview: {
    enabled: true,
  },
  statsAriaLabel: 'Pivot product stats',
  stats: [
    { value: '350K+', label: 'rows client-side' },
    { value: 'Any', label: 'dimension combination' },
    { value: '8', label: 'aggregation types' },
    { value: '0', label: 'server round-trips' },
  ],
  features: {
    id: 'features',
    kicker: 'Features',
    title: 'Everything a production\npivot table needs.',
    description: 'Not a summary view bolted on top. A full-featured pivot engine built on RevoGrid\'s high-performance rendering core.',
    items: [
      {
        icon: 'DnD',
        title: 'Drag-and-Drop Dimensions',
        description: 'Move fields between Rows, Columns, Data, and Filters slots at runtime. The pivot table updates instantly.',
        tags: ['Drag fields', 'Runtime pivot', 'Zero reload'],
      },
      {
        icon: 'SUM',
        title: 'Multi-Level Aggregation',
        description: 'Sum, average, count, min/max, median, or bring your own aggregation function. Use multiple aggregations on the same field.',
        tags: ['SUM / AVG / CNT', 'Custom agg fn', 'Multi-agg'],
      },
      {
        icon: 'MAP',
        title: 'Heatmap Cell Rendering',
        description: 'Built-in value-based color coding with configurable thresholds and custom color scales for fast outlier detection.',
        tags: ['Heatmap cells', 'Color scales', 'Threshold config'],
      },
      {
        icon: 'ROW',
        title: 'Row & Column Grouping',
        description: 'Drag any dimension field to Rows or Columns. Subtotals and grand totals are computed automatically at every group level.',
        tags: ['Subtotals', 'Grand total', 'Nested groups'],
      },
      {
        icon: 'CPU',
        title: 'Client-Side at Scale',
        description: 'No server round-trip on pivot operations. Bind the pivot config directly and run aggregations against the grid source.',
        tags: ['350K rows', 'In-memory', 'PivotPlugin'],
        codeExample: 'pivot',
      },
      {
        icon: 'CSV',
        title: 'Export to Excel / CSV',
        description: 'Export pivot tables with headers, subtotals, and formatted values. Works with filtered or fully pivoted views.',
        tags: ['XLSX export', 'CSV export', 'Formatted values'],
      },
    ],
  },
  useCases: {
    enabled: true,
  },
  advancedCallout: {
    title: 'Pivot is part of the Pro Advanced bundle.',
  },
  cta: {
    title: 'Embed pivot analytics\nin your product.',
    description: 'Client-side pivot tables for React, Vue, Angular, Svelte, and vanilla JS. Included in Pro Advanced.',
    primaryHref: '/demo/pivot',
    primaryLabel: 'Try live demo',
    secondaryHref: '/pro/prices',
    secondaryLabel: 'View Pro pricing',
  },
}

function mergePivotPageConfig(config: Partial<PivotLandingPage> = {}): PivotLandingPage {
  return {
    ...DEFAULT_PAGE,
    ...config,
    colors: { ...DEFAULT_PAGE.colors, ...config.colors },
    hero: { ...DEFAULT_PAGE.hero, ...config.hero },
    preview: { ...DEFAULT_PAGE.preview, ...config.preview },
    features: { ...DEFAULT_PAGE.features, ...config.features },
    useCases: { ...DEFAULT_PAGE.useCases, ...config.useCases },
    advancedCallout: config.advancedCallout === null
      ? undefined
      : { ...DEFAULT_PAGE.advancedCallout, ...config.advancedCallout },
    cta: config.cta === null
      ? undefined
      : { ...DEFAULT_PAGE.cta, ...config.cta },
  }
}

const { frontmatter, isDark } = useData()
const rvGridBaseUrl = trimTrailingSlash(import.meta.env.VITE_RV_GRID_BASE_URL || 'https://rv-grid.com')
const rvGridProBaseUrl = trimTrailingSlash(import.meta.env.VITE_RV_GRID_PRO_BASE_URL || 'https://pro.rv-grid.com')
const page = computed(() => mergePivotPageConfig(frontmatter.value.pivotLanding ?? {}))
const pageStyle = computed(() => ({
  '--pivot-accent': isDark.value ? page.value.colors.darkAccent : page.value.colors.accent,
  '--pivot-accent-mid': isDark.value ? page.value.colors.darkAccentMid : page.value.colors.accentMid,
  '--pivot-accent-vivid': isDark.value ? page.value.colors.darkAccentVivid : page.value.colors.accentVivid,
  '--pivot-accent-soft': isDark.value ? page.value.colors.darkSoft : page.value.colors.soft,
  '--pivot-accent-border': isDark.value ? page.value.colors.darkBorder : page.value.colors.border,
}))

function trimTrailingSlash(value: string) {
  return value.replace(/\/+$/, '')
}

function resolvePivotLink(href: string) {
  if (href.startsWith('https://rv-grid.com')) {
    return `${rvGridBaseUrl}${href.slice('https://rv-grid.com'.length)}`
  }

  if (href.startsWith('https://pro.rv-grid.com')) {
    return `${rvGridProBaseUrl}${href.slice('https://pro.rv-grid.com'.length)}`
  }

  if (frontmatter.value.externalHomeLinks && href.startsWith('/')) {
    return `${rvGridBaseUrl}${href}`
  }

  return href
}
</script>

<style lang="scss" scoped>
@keyframes fadeUp {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}

.fade-up { animation: fadeUp 0.6s ease both; }
.fade-up-2 { animation: fadeUp 0.6s 0.08s ease both; }
.fade-up-3 { animation: fadeUp 0.6s 0.16s ease both; }
.fade-up-4 { animation: fadeUp 0.6s 0.24s ease both; }

:global(.pivot-page-doc .VPDoc) {
  padding-top: 0;
}

:global(.pivot-page-doc .vp-doc h1),
:global(.pivot-page-doc .vp-doc h2),
:global(.pivot-page-doc .vp-doc h3),
:global(.pivot-page-doc .vp-doc p) {
  margin: 0;
}

.pivot-page {
  --pivot-accent: #0f766e;
  --pivot-accent-mid: #0d9488;
  --pivot-accent-vivid: #10b981;
  --pivot-accent-soft: rgba(15, 118, 110, 0.09);
  --pivot-accent-border: rgba(15, 118, 110, 0.22);
  --pro-doc-accent: var(--pivot-accent);
  --pro-doc-accent-2: var(--pivot-accent-vivid);
  --pro-doc-soft: var(--pivot-accent-soft);
  --pro-doc-accent-border: var(--pivot-accent-border);
  --pivot-blue: #1d4ed8;
  --pivot-green: #047857;
  --pivot-orange: #b45309;
  --pivot-shadow-sm: 0 1px 3px rgba(0, 0, 0, 0.06), 0 1px 2px rgba(0, 0, 0, 0.04);
  --pivot-shadow-lg: 0 18px 48px rgba(0, 0, 0, 0.1), 0 6px 18px rgba(0, 0, 0, 0.06);
  --pro-doc-shadow-sm: var(--pivot-shadow-sm);
  --pro-doc-shadow-lg: var(--pivot-shadow-lg);

  color: var(--vp-c-text-1);
  background: var(--vp-c-bg);
}

:global(.dark) .pivot-page {
  --pivot-accent: oklch(0.72 0.18 185);
  --pivot-accent-mid: oklch(0.76 0.18 185);
  --pivot-accent-vivid: oklch(0.78 0.18 175);
  --pivot-accent-soft: oklch(0.72 0.18 185 / 0.14);
  --pivot-accent-border: oklch(0.72 0.18 185 / 0.28);
  --pivot-shadow-sm: 0 1px 3px rgba(0, 0, 0, 0.32);
  --pivot-shadow-lg: 0 26px 80px rgba(0, 0, 0, 0.45), 0 8px 24px rgba(0, 0, 0, 0.28);
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 48px;

  @media (max-width: 768px) {
    padding: 0 24px;
  }
}

.pivot-hero {
  position: relative;
  padding: 112px 0 88px;
}

.pivot-hero .container {
  max-width: 1400px;
}

.hero-inner {
  display: grid;
  grid-template-columns: minmax(400px, 0.85fr) minmax(720px, 1.65fr);
  gap: 36px;
  align-items: center;

  @media (max-width: 1160px) {
    grid-template-columns: 1fr;
    gap: 40px;
  }
}

.hero-copy {
  min-width: 0;
}

.hero-inner > .fade-up-3 {
  min-width: 0;
}

.eyebrow,
.section-tag,
.section-kicker,
.callout-eyebrow {
  color: var(--pivot-accent);
  font-family: var(--vp-font-family-mono);
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.eyebrow {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 5px 13px;
  margin-bottom: 22px;
  border: 1px solid var(--pivot-accent-border);
  border-radius: 999px;
  background: var(--pivot-accent-soft);
}

.eyebrow-dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: var(--pivot-accent);
  flex: 0 0 auto;
}

.hero-title {
  max-width: 680px;
  color: var(--vp-c-text-1);
  font-size: clamp(40px, 5.2vw, 68px);
  font-weight: 760;
  letter-spacing: -2px;
  line-height: 1.04;
  margin: 0 0 22px;

  .hero-title-highlight {
    background: linear-gradient(105deg, var(--pivot-accent) 0%, var(--pivot-accent-vivid) 44%, #0891b2 100%);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    display: flex;
    flex-wrap: wrap;
  }

  .hero-title-part {
    white-space: nowrap;
  }
}

.hero-sub,
.section-sub {
  color: var(--vp-c-text-2);
  font-size: 16px;
  line-height: 1.75;
}

.hero-sub {
  max-width: 600px;
  margin: 0 0 32px;
}

.hero-actions {
  display: flex;
  align-items: center;
  gap: 12px;
  flex-wrap: wrap;
}

.hero-actions {
  margin-bottom: 0;
}

.hero-badges {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 26px;
}

.hero-badges span {
  padding: 7px 11px;
  border: 1px solid var(--vp-c-divider);
  border-radius: 8px;
  color: var(--vp-c-text-2);
  background: var(--vp-c-bg-soft);
  font-size: 12px;
  font-weight: 600;
}

.features-section {
  padding: 92px 0;
}

.features-section {
  border-top: 1px solid var(--vp-c-divider);
}

.section-head {
  margin-bottom: 52px;
}

.section-title {
  max-width: 660px;
  margin: 12px 0 14px;
  color: var(--vp-c-text-1);
  font-size: clamp(30px, 3.6vw, 46px);
  font-weight: 760;
  letter-spacing: -1.4px;
  line-height: 1.08;
  white-space: pre-line;
}

.section-sub {
  max-width: 560px;
  margin: 0 0 48px;
}

@media (max-width: 620px) {
  .pivot-hero {
    padding-top: 76px;
  }
}
</style>
