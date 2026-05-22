<template>
  <div class="gantt-page" :style="pageStyle">
    <GanttHero
      :hero="page.hero"
      :preview="page.preview"
      :is-dark="isDark"
      :resolve-link="resolveLandingLink"
    />

    <ProStatsBar v-if="page.stats.length" :items="page.stats" :aria-label="page.statsAriaLabel" />

    <section v-if="page.features.items.length" :id="page.features.id" class="features">
      <div class="container">
        <div class="section-kicker">{{ page.features.kicker }}</div>
        <h2 class="section-title">{{ page.features.title }}</h2>
        <p class="section-sub">
          {{ page.features.description }}
        </p>

        <ProFeatureGrid :features="page.features.items" />
      </div>
    </section>

    <GanttIntegrations
      v-if="page.integrations.items.length"
      :integrations="page.integrations"
    />

    <ProAdvancedCallout
      v-if="page.advancedCallout"
      :title="page.advancedCallout.title"
      :section-id="page.advancedCallout.sectionId"
    />

    <ProCtaBanner
      v-if="page.cta"
      :title="page.cta.title"
      :description="page.cta.description"
      :primary-href="resolveLandingLink(page.cta.primaryHref)"
      :primary-label="page.cta.primaryLabel"
      :secondary-href="resolveLandingLink(page.cta.secondaryHref)"
      :secondary-label="page.cta.secondaryLabel"
    />
  </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import { useData } from 'vitepress'
import ProAdvancedCallout from '../pro/ProAdvancedCallout.vue'
import ProCtaBanner from '../pro/ProCtaBanner.vue'
import ProFeatureGrid from '../pro/ProFeatureGrid.vue'
import ProStatsBar from '../pro/ProStatsBar.vue'
import GanttHero from './GanttHero.vue'
import GanttIntegrations from './GanttIntegrations.vue'
import { mergeGanttPageConfig } from './ganttLanding'

const { frontmatter, isDark } = useData()
const rvGridBaseUrl = trimTrailingSlash(import.meta.env.VITE_RV_GRID_BASE_URL || 'https://rv-grid.com')
const rvGridProBaseUrl = trimTrailingSlash(import.meta.env.VITE_RV_GRID_PRO_BASE_URL || 'https://pro.rv-grid.com')
const page = computed(() => mergeGanttPageConfig(frontmatter.value.ganttLanding ?? {}))
const pageStyle = computed(() => ({
  '--gantt-accent': isDark.value ? page.value.colors.darkAccent : page.value.colors.accent,
  '--gantt-accent-2': isDark.value ? page.value.colors.darkAccent2 : page.value.colors.accent2,
  '--gantt-soft': isDark.value ? page.value.colors.darkSoft : page.value.colors.soft,
  '--gantt-accent-border': isDark.value ? page.value.colors.darkBorder : page.value.colors.border,
}))

function trimTrailingSlash(value: string) {
  return value.replace(/\/+$/, '')
}

function resolveLandingLink(href: string) {
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
.gantt-page {
  --gantt-accent: #1d4ed8;
  --gantt-accent-2: #3b82f6;
  --gantt-soft: rgba(29, 78, 216, 0.09);
  --gantt-accent-border: rgba(29, 78, 216, 0.22);
  --pro-doc-accent: var(--gantt-accent);
  --pro-doc-accent-2: var(--gantt-accent-2);
  --pro-doc-soft: var(--gantt-soft);
  --pro-doc-accent-border: var(--gantt-accent-border);
  --gantt-border: var(--vp-c-divider);
  --gantt-card: var(--vp-c-bg-soft);
  --gantt-panel: var(--vp-c-bg);
  --pro-doc-shadow-sm: 0 1px 3px rgba(0, 0, 0, 0.06), 0 1px 2px rgba(0, 0, 0, 0.04);
  --pro-doc-shadow-lg: 0 18px 48px rgba(0, 0, 0, 0.1), 0 6px 18px rgba(0, 0, 0, 0.06);
  color: var(--vp-c-text-1);
}

:global(.dark) .gantt-page {
  --gantt-accent: #60a5fa;
  --gantt-accent-2: #93c5fd;
  --gantt-soft: rgba(96, 165, 250, 0.14);
  --gantt-accent-border: rgba(96, 165, 250, 0.28);
  --pro-doc-shadow-sm: 0 1px 3px rgba(0, 0, 0, 0.32);
  --pro-doc-shadow-lg: 0 26px 80px rgba(0, 0, 0, 0.45), 0 8px 24px rgba(0, 0, 0, 0.28);
}

:global(.gantt-page-doc .VPDoc) {
  padding-top: 0;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 48px;

  @media (max-width: 768px) {
    padding: 0 24px;
  }
}

.features {
  padding: 92px 0;
  border-top: 1px solid var(--vp-c-divider);
}

.section-kicker {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  color: var(--gantt-accent);
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
  line-height: 1.08;
  letter-spacing: -1.4px;
}

.section-sub {
  max-width: 560px;
  margin: 0 0 48px;
  color: var(--vp-c-text-2);
  font-size: 16px;
  line-height: 1.7;
}
</style>
