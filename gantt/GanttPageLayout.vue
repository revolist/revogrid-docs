<template>
  <div class="gantt-page" :style="pageStyle">
    <GanttHero
      :hero="page.hero"
      :preview="page.preview"
      :is-dark="isDark"
      :resolve-link="resolveLandingLink"
    />

    <ProStatsBar v-if="page.stats.length" :items="page.stats" :aria-label="page.statsAriaLabel" />

    <section v-if="page.demos" :id="page.demos.id" class="content-section">
      <div class="container">
        <div class="section-kicker">{{ page.demos.kicker }}</div>
        <h2 class="section-title">{{ page.demos.title }}</h2>
        <p class="section-sub">{{ page.demos.description }}</p>

        <div class="demo-grid">
          <a
            v-for="item in page.demos.items"
            :key="item.href"
            :href="resolveLandingLink(item.href)"
            class="demo-card"
          >
            <div class="demo-media">
              <video v-if="item.mediaKind === 'video'" :src="item.media" muted autoplay loop playsinline></video>
              <img v-else :src="item.media" :alt="item.title" loading="lazy">
            </div>
            <div class="demo-copy">
              <h3>{{ item.title }}</h3>
              <p>{{ item.description }}</p>
              <strong>Open live demo →</strong>
            </div>
          </a>
        </div>
      </div>
    </section>

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
      :resolve-link="resolveLandingLink"
    />

    <section v-if="page.evidence" :id="page.evidence.id" class="content-section evidence-section">
      <div class="container split-section">
        <div>
          <div class="section-kicker">{{ page.evidence.kicker }}</div>
          <h2 class="section-title">{{ page.evidence.title }}</h2>
          <p class="section-sub">{{ page.evidence.description }}</p>
          <p class="evidence-note">{{ page.evidence.note }}</p>
          <div class="evidence-links">
            <a v-for="link in page.evidence.links" :key="link.href" :href="resolveLandingLink(link.href)">{{ link.label }} →</a>
          </div>
        </div>
        <div class="evidence-grid">
          <article v-for="item in page.evidence.items" :key="item.title" class="evidence-card">
            <strong>{{ item.value }}</strong>
            <h3>{{ item.title }}</h3>
            <p>{{ item.description }}</p>
          </article>
        </div>
      </div>
    </section>

    <section v-if="page.featureComparison" :id="page.featureComparison.id" class="content-section">
      <div class="container">
        <div class="section-kicker">{{ page.featureComparison.kicker }}</div>
        <h2 class="section-title">{{ page.featureComparison.title }}</h2>
        <p class="section-sub">
          {{ page.featureComparison.description }}
        </p>

        <div>
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

    <section v-if="page.evaluation" :id="page.evaluation.id" class="content-section evaluation-section">
      <div class="container evaluation-shell">
        <div>
          <div class="section-kicker">{{ page.evaluation.kicker }}</div>
          <h2 class="section-title">{{ page.evaluation.title }}</h2>
          <p class="section-sub">{{ page.evaluation.description }}</p>
          <div class="evaluation-actions">
            <ProDocButton
              v-for="action in page.evaluation.actions"
              :key="action.href"
              :href="resolveLandingLink(action.href)"
              :variant="action.variant"
            >{{ action.label }}</ProDocButton>
          </div>
        </div>
        <div class="evaluation-card">
          <span>{{ page.evaluation.priceLabel }}</span>
          <strong>${{ proAdvancedUsdYear }} / developer / year</strong>
          <article v-for="item in page.evaluation.items" :key="item.title">
            <h3>{{ item.title }}</h3>
            <p>{{ item.description }}</p>
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
import ProDocButton from '../pro/ProDocButton.vue'
import ProFeatureGrid from '../pro/ProFeatureGrid.vue'
import ProStatsBar from '../pro/ProStatsBar.vue'
import { PRICES } from '../pricing-page/prices'
import GanttHero from './GanttHero.vue'
import GanttIntegrations from './GanttIntegrations.vue'
import { mergeGanttPageConfig } from './ganttLanding'

const { frontmatter, isDark } = useData()
const rvGridBaseUrl = trimTrailingSlash(import.meta.env.VITE_RV_GRID_BASE_URL || 'https://rv-grid.com')
const rvGridProBaseUrl = trimTrailingSlash(import.meta.env.VITE_RV_GRID_PRO_BASE_URL || 'https://pro.rv-grid.com')
const page = computed(() => mergeGanttPageConfig(frontmatter.value.ganttLanding ?? {}))
const proAdvancedUsdYear = PRICES.advanced.year.USD
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
  --gantt-accent: var(--vp-c-brand-3);
  --gantt-accent-2: var(--vp-c-brand-2);
  --gantt-soft: var(--vp-c-brand-soft);
  --gantt-accent-border: var(--rg-green-border);
  --pro-doc-accent: var(--gantt-accent);
  --pro-doc-accent-2: var(--gantt-accent-2);
  --pro-doc-soft: var(--gantt-soft);
  --pro-doc-accent-border: var(--gantt-accent-border);
  --gantt-border: var(--rg-border);
  --gantt-card: var(--rg-bg-2);
  --gantt-panel: var(--rg-bg);
  --pro-doc-shadow-sm: var(--rg-shadow);
  --pro-doc-shadow-lg: var(--rg-shadow);
  color: var(--rg-text);
}

:global(.gantt-page-doc) {
  max-width: 1240px !important;
  margin: 0 auto;
}

:global(.gantt-page-doc .VPDoc) {
  padding-left: 0;
  padding-right: 0;
}

:global(.gantt-page-doc .VPDoc .container),
:global(.gantt-page-doc .VPDoc .content)  {
  max-width: 1240px !important;
  padding: 0 !important;
}

.features,
.content-section {
  padding: 96px 0;
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
  color: var(--rg-text);
  font-size: clamp(34px, 4.2vw, 56px);
  font-weight: 400;
  line-height: 1.08;
  letter-spacing: -0.01em;
}

.section-sub {
  max-width: 560px;
  margin: 0 0 48px;
  color: var(--rg-text-2);
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
  border: 1px solid var(--rg-border);
  border-radius: 16px;
  background: var(--rg-bg-2);
}

.content-card {
  padding: 24px;

  h3 {
    margin: 0 0 10px;
    color: var(--rg-text);
    font-size: 17px;
    line-height: 1.35;
  }

  p {
    margin: 0;
    color: var(--rg-text-2);
    font-size: 14px;
    line-height: 1.7;
  }
}

.comparison-table {
  width: 100%;
  min-width: 760px;
  border-collapse: collapse;
  font-size: 14px;

  th,
  td {
    padding: 16px 18px;
    border-bottom: 1px solid var(--rg-border);
    text-align: left;
    vertical-align: top;
  }

  thead th {
    color: var(--rg-text);
    background: var(--rg-bg-2);
    font-size: 12px;
    letter-spacing: 0.08em;
    text-transform: uppercase;
  }

  tbody th {
    width: 22%;
    color: var(--rg-text);
    font-weight: 700;
  }

  td {
    color: var(--rg-text-2);
    line-height: 1.6;
  }
}

.faq-list {
  gap: 10px;
}

.faq-item {
  padding: 22px 24px;

  h3 {
    margin: 0 0 8px;
    color: var(--rg-text);
    font-size: 16px;
    line-height: 1.4;
  }

  p {
    margin: 0;
    color: var(--rg-text-2);
    font-size: 14px;
    line-height: 1.7;
  }
}

.resource-group {
  padding: 22px;

  h3 {
    margin: 0 0 14px;
    color: var(--rg-text);
    font-size: 15px;
  }
}

.resource-link {
  display: block;
  padding: 9px 0;
  border-top: 1px solid var(--rg-border);
  color: var(--rg-text);
  font-size: 14px;
  font-weight: 400;
  line-height: 1.4;
  text-decoration: none;

  &:hover {
    color: var(--rg-text);
    text-decoration: underline;
    text-underline-offset: 3px;
  }
}

.demo-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 16px;

  @media (max-width: 900px) { grid-template-columns: 1fr; }
}

.demo-card {
  overflow: hidden;
  border: 1px solid var(--rg-border);
  border-radius: 16px;
  background: var(--rg-bg-2);
  color: inherit;
  text-decoration: none;
  transition: transform 0.18s ease, border-color 0.18s ease;

  &:hover { border-color: var(--rg-border-hover); transform: translateY(-2px); box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2); }
}

.demo-media {
  position: relative;
  aspect-ratio: 16 / 9;
  overflow: hidden;
  background: var(--rg-bg-3);

  img, video { width: 100%; height: 100%; object-fit: cover; }
}

.demo-copy {
  padding: 20px;
  h3 { margin: 0 0 8px; font-size: 17px; }
  p { min-height: 66px; margin: 0 0 14px; color: var(--rg-text-2); font-size: 14px; line-height: 1.6; }
  strong { color: var(--rg-font-green); font-size: 13px; }
}

.evidence-note { padding: 16px; border: 1px solid var(--rg-green-border); border-radius: 12px; color: var(--rg-text-2); background: var(--rg-green-bg); font-size: 13px; line-height: 1.65; }
.evidence-links { display: flex; flex-wrap: wrap; gap: 18px; margin-top: 20px; a { color: var(--rg-font-green); font-size: 13px; font-weight: 600; text-decoration: none; } }
.evidence-grid { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 14px; @media (max-width: 600px) { grid-template-columns: 1fr; } }
.evidence-card { padding: 22px; border: 1px solid var(--rg-border); border-radius: 16px; background: var(--rg-bg); strong { color: var(--rg-font-green); font-family: var(--vp-font-family-mono); font-size: 23px; } h3 { margin: 10px 0 7px; font-size: 15px; } p { margin: 0; color: var(--rg-text-2); font-size: 13px; line-height: 1.6; } }

.evaluation-shell { display: grid; grid-template-columns: minmax(0, 1fr) minmax(320px, 0.75fr); gap: 48px; align-items: center; @media (max-width: 860px) { grid-template-columns: 1fr; } }
.evaluation-card { padding: 30px; border: 1px solid var(--rg-border); border-radius: 16px; background: var(--rg-bg); > span { color: var(--rg-text-3); font-size: 12px; text-transform: uppercase; } > strong { display: block; margin: 5px 0 22px; color: var(--rg-font-green); font-size: 34px; } article { padding: 15px 0; border-top: 1px solid var(--rg-border); h3 { margin: 0 0 4px; font-size: 14px; } p { margin: 0; color: var(--rg-text-2); font-size: 13px; line-height: 1.6; } } }
.evaluation-actions { display: flex; flex-wrap: wrap; gap: 12px; }

:deep(.pro-stats) {
  margin-top: 30px;
}

:deep(.pro-stats__item strong) { color: var(--rg-text); }
:deep(.pro-stats__item span) { color: var(--rg-text-3); }

:deep(.feature-grid) {
  border-color: var(--rg-border);
  border-radius: 16px;
  background: var(--rg-border);
}

:deep(.feature-card) { background: var(--rg-bg); }
:deep(.feature-card:hover) { background: var(--rg-bg-2); }
:deep(.feature-card h3) { color: var(--rg-text); }
:deep(.feature-card p) { color: var(--rg-text-2); }
:deep(.feature-tags span) { border-color: var(--rg-border); color: var(--rg-text-3); background: var(--rg-bg-2); }
</style>
