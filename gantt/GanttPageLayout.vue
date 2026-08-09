<template>
  <div class="gantt-page" :style="pageStyle">
    <GanttHero
      :hero="page.hero"
      :preview="page.preview"
      :is-dark="isDark"
      :resolve-link="resolveLandingLink"
    />

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
              <video
                v-if="item.mediaKind === 'video'"
                :src="item.media"
                :poster="item.poster"
                muted
                autoplay
                loop
                playsinline
              ></video>
              <img
                v-else
                :src="item.media"
                :alt="item.title"
                loading="lazy"
              >
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

        <ProFeatureGrid :features="page.features.items" :show-icons="false" />
      </div>
    </section>

    <GanttIntegrations
      v-if="page.integrations.items.length"
      :integrations="page.integrations"
      :resolve-link="resolveLandingLink"
    />

    <section v-if="page.featureComparison" :id="page.featureComparison.id" class="content-section">
      <div class="container">
        <div class="section-kicker">{{ page.featureComparison.kicker }}</div>
        <h2 class="section-title">{{ page.featureComparison.title }}</h2>
        <p class="section-sub">
          {{ page.featureComparison.description }}
        </p>

        <div class="comparison-table-scroll">
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

    <section
      v-if="page.useCases"
      :id="page.useCases.id"
      :class="['content-section', page.useCases.items.some((item) => item.theme) ? 'use-cases-section--themed' : '']"
    >
      <div class="container">
        <div class="section-kicker">{{ page.useCases.kicker }}</div>
        <h2 class="section-title">{{ page.useCases.title }}</h2>
        <p class="section-sub">
          {{ page.useCases.description }}
        </p>
        <a
          v-if="page.useCases.benefits"
          :href="resolveLandingLink(page.useCases.benefits.href)"
          class="use-cases-benefits-link"
        >
          {{ page.useCases.benefits.label }} →
        </a>

        <div class="use-case-grid">
          <component
            :is="item.href ? 'a' : 'article'"
            v-for="item in page.useCases.items"
            :key="item.title"
            :href="item.href ? resolveLandingLink(item.href) : undefined"
            :class="['use-case-card', item.theme ? `use-case-card--${item.theme}` : '']"
          >
            <div v-if="item.media" class="use-case-media">
              <video
                v-if="item.mediaKind === 'video'"
                class="use-case-media__video"
                :src="item.media"
                :poster="item.poster"
                muted
                autoplay
                loop
                playsinline
                preload="metadata"
                aria-hidden="true"
              ></video>
              <img
                v-if="item.mediaKind !== 'video' || item.poster"
                :class="{ 'use-case-media__poster': item.mediaKind === 'video' }"
                :src="item.mediaKind === 'video' ? item.poster : item.media"
                :alt="item.mediaAlt || ''"
                width="1200"
                height="675"
                loading="lazy"
                decoding="async"
              >
            </div>
            <div class="use-case-copy">
              <h3>{{ item.title }}</h3>
              <p>{{ item.description }}</p>
              <strong v-if="item.href">{{ item.cta || 'Explore this use case' }} →</strong>
            </div>
          </component>
        </div>
      </div>
    </section>

    <section v-if="page.faq" class="content-section standard-faq-section">
      <div class="container">
        <CommercialFaq :id="page.faq.id" :data="faqData" />
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
      :product-id="page.catalogProductId"
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
import {
  getPlan,
  getProduct,
  resolveCommercialFaqs,
  resolvePlanPrice,
  type CommercialFaqKey,
} from '../commercial/productCatalog'
import CommercialFaq from '../pro/CommercialFaq.vue'
import ProAdvancedCallout from '../pro/ProAdvancedCallout.vue'
import ProCtaBanner from '../pro/ProCtaBanner.vue'
import ProDocButton from '../pro/ProDocButton.vue'
import ProFeatureGrid from '../pro/ProFeatureGrid.vue'
import GanttHero from './GanttHero.vue'
import GanttIntegrations from './GanttIntegrations.vue'
import { mergeGanttPageConfig } from './ganttLanding'

const { frontmatter, isDark } = useData()
const rvGridBaseUrl = trimTrailingSlash(import.meta.env.VITE_RV_GRID_BASE_URL || 'https://rv-grid.com')
const rvGridProBaseUrl = trimTrailingSlash(import.meta.env.VITE_RV_GRID_PRO_BASE_URL || 'https://pro.rv-grid.com')
const page = computed(() => {
  const merged = mergeGanttPageConfig(frontmatter.value.ganttLanding ?? {})
  const product = getProduct(merged.catalogProductId)
  const plan = getPlan(product.minimumPlan)
  const trialDays = plan.trial.durationDays ?? 30
  const commercialFaqs = resolveCommercialFaqs(
    (frontmatter.value.commercialFaqKeys ?? []) as CommercialFaqKey[],
  )
  return {
    ...merged,
    advancedCallout: merged.advancedCallout
      ? { ...merged.advancedCallout, title: `${product.name} is part of the ${plan.name} bundle.` }
      : undefined,
    evaluation: merged.evaluation
      ? {
          ...merged.evaluation,
          description: `${product.name} is included in ${plan.name}. Licensing is per front-end developer with no runtime royalties or deployment counting.`,
          items: [
            {
              title: `${trialDays}-day private npm trial`,
              description: `Request approved ${trialDays}-day private npm access. The public repository is setup boilerplate and does not contain Pro packages.`,
            },
            {
              title: plan.billingSummary,
              description: 'Licensed applications can be deployed without per-deployment or per-end-user charges, subject to the license terms.',
            },
            {
              title: `Full ${plan.name} bundle`,
              description: 'Includes Pivot, Kanban, Gantt, Scheduler, original private source access, and priority support.',
            },
          ],
          actions: [
            { label: 'Request Pro Trial', href: product.trialUrl! },
            { label: 'Review all pricing', href: '/pricing', variant: 'secondary' as const },
          ],
        }
      : undefined,
    faq: merged.faq
      ? { ...merged.faq, items: [...merged.faq.items, ...commercialFaqs] }
      : commercialFaqs.length
        ? { id: `${merged.catalogProductId}-faq`, kicker: 'FAQ', title: `${product.name} questions`, items: commercialFaqs }
        : undefined,
    cta: merged.cta
      ? {
          ...merged.cta,
          secondaryHref: product.trialUrl!,
          secondaryLabel: 'Request Pro Trial',
        }
      : undefined,
  }
})
const faqData = computed(() => page.value.faq
  ? { heading: page.value.faq.title, items: page.value.faq.items }
  : undefined)
const proAdvancedUsdYear = resolvePlanPrice('pro-advanced').year.USD
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

.gantt-page .use-cases-section--themed {
  width: 100vw;
  margin-left: calc(50% - 50vw);
}

.gantt-page .use-cases-section--themed > .container {
  width: min(1600px, calc(100% - 48px));
  max-width: 1600px !important;
  margin-right: auto;
  margin-left: auto;
}

.use-cases-section--themed .use-case-copy {
  padding: 20px;

  p {
    line-height: 1.55;
  }
}

@media (max-width: 640px) {
  #gantt-use-cases > .container {
    width: calc(100% - 32px);
    margin-right: auto;
    margin-left: auto;
  }
}

.use-cases-benefits-link {
  display: inline-flex;
  margin: -28px 0 40px;
  color: var(--gantt-accent);
  font-size: 14px;
  font-weight: 700;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
    text-underline-offset: 4px;
  }

  &:focus-visible {
    border-radius: 4px;
    outline: 2px solid var(--gantt-accent);
    outline-offset: 4px;
  }
}

.use-case-card {
  overflow: hidden;
  border: 1px solid var(--rg-border);
  border-radius: 16px;
  background: var(--rg-bg-2);
  color: inherit;
  text-decoration: none;
  transition: border-color 0.18s ease, box-shadow 0.18s ease, transform 0.18s ease;

  &[href]:hover {
    border-color: var(--rg-border-hover);
    box-shadow: 0 10px 28px rgba(15, 23, 42, 0.1);
    transform: translateY(-2px);
  }

  &[href]:focus-visible {
    outline: 2px solid var(--gantt-accent);
    outline-offset: 3px;
  }
}

.use-case-media {
  aspect-ratio: 16 / 9;
  overflow: hidden;
  border-bottom: 1px solid var(--rg-border);
  background: #f4f7f6;

  img,
  video {
    display: block;
    width: 100%;
    height: 100%;
    margin: 0;
    object-fit: cover;
  }
}

.use-case-media__poster {
  display: none !important;
}

@media (prefers-reduced-motion: reduce) {
  .use-case-media__video {
    display: none !important;
  }

  .use-case-media__poster {
    display: block !important;
  }

  .use-case-card {
    transition: none;
  }
}

.use-case-copy {
  padding: 22px;

  h3 {
    margin: 0 0 9px;
    color: var(--rg-text);
    font-size: 17px;
    line-height: 1.35;
  }

  p {
    margin: 0;
    color: var(--rg-text-2);
    font-size: 14px;
    line-height: 1.65;
  }

  strong {
    display: inline-block;
    margin-top: 16px;
    color: var(--gantt-accent);
    font-size: 13px;
  }
}

.use-case-card--product-delivery,
.use-case-card--sales-onboarding,
.use-case-card--quality-manufacturing {
  border-color: #30364f;
  background: #111522;

  .use-case-media { border-bottom-color: #30364f; }
  .use-case-copy h3 { color: #f8fafc; }
  .use-case-copy p { color: #b7bfd0; }
}

.use-case-card--product-delivery {
  background: #0d122c;

  .use-case-copy strong { color: #a99cff; }
}

.use-case-card--sales-onboarding {
  border-color: #343b2b;
  background: #10130e;

  .use-case-copy strong { color: #b8e24c; }
}

.use-case-card--content-approvals {
  border-color: #d9c8ba;
  background: #faf2e8;

  .use-case-copy h3 { color: #2b1b18; font-family: Georgia, 'Times New Roman', serif; }
  .use-case-copy p { color: #735f57; }
  .use-case-copy strong { color: #a23838; }
}

.use-case-card--quality-manufacturing {
  border-color: #42474e;
  background: #202327;

  .use-case-copy strong { color: #ffbd3f; }
}

.use-case-card--internal-workflows {
  border-color: #c7bde3;
  background: #f4f0ff;

  .use-case-copy h3 { color: #30284b; }
  .use-case-copy p { color: #6b6280; }
  .use-case-copy strong { color: #177d5b; }
}

.content-card,
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

.comparison-table-scroll {
  max-width: 100%;
  overflow-x: auto;
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

.standard-faq-section :deep(.commercial-faq) { margin: 0; }

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

  &:only-child { grid-column: 1 / -1; }
}

.demo-media {
  position: relative;
  aspect-ratio: 16 / 9;
  overflow: hidden;
  background: var(--rg-bg-3);

  img, video { width: 100%; height: 100%; object-position: top right; margin: 0; }
  img { object-fit: cover; }
  video { object-fit: fill; }
  .media-contain { object-fit: contain; }
}

.demo-copy {
  padding: 20px;
  h3 { margin: 0 0 8px; font-size: 17px; }
  p { min-height: 66px; margin: 0 0 14px; color: var(--rg-text-2); font-size: 14px; line-height: 1.6; }
  strong { color: var(--rg-font-green); font-size: 13px; }
}
.evaluation-shell { display: grid; grid-template-columns: minmax(0, 1fr) minmax(320px, 0.75fr); gap: 48px; align-items: center; @media (max-width: 860px) { grid-template-columns: 1fr; } }
.evaluation-card { padding: 30px; border: 1px solid var(--rg-border); border-radius: 16px; background: var(--rg-bg); > span { color: var(--rg-text-3); font-size: 12px; text-transform: uppercase; } > strong { display: block; margin: 5px 0 22px; color: var(--rg-font-green); font-size: 34px; } article { padding: 15px 0; border-top: 1px solid var(--rg-border); h3 { margin: 0 0 4px; font-size: 14px; } p { margin: 0; color: var(--rg-text-2); font-size: 13px; line-height: 1.6; } } }
.evaluation-actions { display: flex; flex-wrap: wrap; gap: 12px; }

:deep(.pro-stats) {
  margin-top: 30px;
}

:deep(.pro-stats__item strong) { color: var(--rg-text); }
:deep(.pro-stats__item span) { color: var(--rg-text-3); }

:deep(.feature-grid) {
  border-radius: 16px;
}

:deep(.feature-card) { background: var(--rg-bg); }
:deep(.feature-card:hover) { background: var(--rg-bg-2); }
:deep(.feature-card h3) { color: var(--rg-text); }
:deep(.feature-card p) { color: var(--rg-text-2); }
:deep(.feature-tags span) { border-color: var(--rg-border); color: var(--rg-text-3); background: var(--rg-bg-2); }
</style>
