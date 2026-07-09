<template>
  <div class="gantt-page" :style="pageStyle">
    <GanttHero
      :hero="page.hero"
      :preview="page.preview"
      :is-dark="isDark"
      :resolve-link="resolveLandingLink"
    />

    <ProStatsBar v-if="page.stats.length" :items="page.stats" :aria-label="page.statsAriaLabel" />

    <section v-if="page.positioning" :id="page.positioning.id" class="content-section">
      <div class="container split-section">
        <div>
          <div class="section-kicker">{{ page.positioning.kicker }}</div>
          <h2 class="section-title">{{ page.positioning.title }}</h2>
          <p class="section-sub">
            {{ page.positioning.description }}
          </p>
        </div>

        <div class="positioning-grid">
          <article v-for="item in page.positioning.items" :key="item.title" class="content-card">
            <h3>{{ item.title }}</h3>
            <p>{{ item.description }}</p>
          </article>
        </div>
      </div>
    </section>

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

    <section v-if="page.featureComparison" :id="page.featureComparison.id" class="content-section">
      <div class="container">
        <div class="section-kicker">{{ page.featureComparison.kicker }}</div>
        <h2 class="section-title">{{ page.featureComparison.title }}</h2>
        <p class="section-sub">
          {{ page.featureComparison.description }}
        </p>

        <div class="comparison-table-wrap">
          <table class="comparison-table">
            <thead>
              <tr>
                <th v-for="column in page.featureComparison.columns" :key="column">{{ column }}</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="row in page.featureComparison.rows" :key="row.feature">
                <th scope="row">{{ row.feature }}</th>
                <td>{{ row.revogrid }}</td>
                <td>{{ row.note }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>

    <section v-if="page.useCases" :id="page.useCases.id" class="content-section">
      <div class="container">
        <div class="section-kicker">{{ page.useCases.kicker }}</div>
        <h2 class="section-title">{{ page.useCases.title }}</h2>
        <p class="section-sub">
          {{ page.useCases.description }}
        </p>

        <div class="use-case-grid">
          <article v-for="item in page.useCases.items" :key="item.title" class="content-card">
            <h3>{{ item.title }}</h3>
            <p>{{ item.description }}</p>
          </article>
        </div>
      </div>
    </section>

    <section v-if="page.faq" :id="page.faq.id" class="content-section">
      <div class="container split-section">
        <div>
          <div class="section-kicker">{{ page.faq.kicker }}</div>
          <h2 class="section-title">{{ page.faq.title }}</h2>
        </div>

        <div class="faq-list">
          <article v-for="item in page.faq.items" :key="item.q" class="faq-item">
            <h3>{{ item.q }}</h3>
            <p>{{ item.a }}</p>
          </article>
        </div>
      </div>
    </section>

    <section v-if="page.linkSections" :id="page.linkSections.id" class="content-section">
      <div class="container">
        <div class="section-kicker">{{ page.linkSections.kicker }}</div>
        <h2 class="section-title">{{ page.linkSections.title }}</h2>
        <p class="section-sub">
          {{ page.linkSections.description }}
        </p>

        <div class="resource-grid">
          <div v-for="section in page.linkSections.sections" :key="section.title" class="resource-group">
            <h3>{{ section.title }}</h3>
            <a
              v-for="item in section.items"
              :key="item.href"
              :href="resolveLandingLink(item.href)"
              class="resource-link"
            >
              {{ item.label }}
            </a>
          </div>
        </div>
      </div>
    </section>

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

.features,
.content-section {
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

.split-section {
  display: grid;
  grid-template-columns: minmax(0, 0.85fr) minmax(0, 1.15fr);
  gap: 56px;
  align-items: start;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    gap: 28px;
  }
}

.positioning-grid,
.use-case-grid,
.faq-list,
.resource-grid {
  display: grid;
  gap: 14px;
}

.positioning-grid {
  grid-template-columns: 1fr;
}

.use-case-grid,
.resource-grid {
  grid-template-columns: repeat(3, minmax(0, 1fr));

  @media (max-width: 960px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
}

.content-card,
.faq-item,
.resource-group {
  border: 1px solid var(--vp-c-divider);
  border-radius: 8px;
  background: var(--vp-c-bg-soft);
}

.content-card {
  padding: 24px;

  h3 {
    margin: 0 0 10px;
    color: var(--vp-c-text-1);
    font-size: 17px;
    line-height: 1.35;
  }

  p {
    margin: 0;
    color: var(--vp-c-text-2);
    font-size: 14px;
    line-height: 1.7;
  }
}

.comparison-table-wrap {
  overflow-x: auto;
  border: 1px solid var(--vp-c-divider);
  border-radius: 8px;
  background: var(--vp-c-bg);
}

.comparison-table {
  width: 100%;
  min-width: 760px;
  border-collapse: collapse;
  font-size: 14px;

  th,
  td {
    padding: 16px 18px;
    border-bottom: 1px solid var(--vp-c-divider);
    text-align: left;
    vertical-align: top;
  }

  thead th {
    color: var(--vp-c-text-1);
    background: var(--vp-c-bg-soft);
    font-size: 12px;
    letter-spacing: 0.08em;
    text-transform: uppercase;
  }

  tbody th {
    width: 22%;
    color: var(--vp-c-text-1);
    font-weight: 700;
  }

  td {
    color: var(--vp-c-text-2);
    line-height: 1.6;
  }

  tr:last-child th,
  tr:last-child td {
    border-bottom: 0;
  }
}

.faq-list {
  gap: 10px;
}

.faq-item {
  padding: 22px 24px;

  h3 {
    margin: 0 0 8px;
    color: var(--vp-c-text-1);
    font-size: 16px;
    line-height: 1.4;
  }

  p {
    margin: 0;
    color: var(--vp-c-text-2);
    font-size: 14px;
    line-height: 1.7;
  }
}

.resource-group {
  padding: 22px;

  h3 {
    margin: 0 0 14px;
    color: var(--vp-c-text-1);
    font-size: 15px;
  }
}

.resource-link {
  display: block;
  padding: 9px 0;
  border-top: 1px solid var(--vp-c-divider);
  color: var(--gantt-accent);
  font-size: 14px;
  font-weight: 600;
  line-height: 1.4;
  text-decoration: none;

  &:hover {
    color: var(--gantt-accent-2);
  }
}
</style>
