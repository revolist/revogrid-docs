<template>
  <main class="charts-page">
    <section class="charts-hero section-width" aria-labelledby="charts-heading">
      <p class="eyebrow">RevoGrid Charts <span>JavaScript · TypeScript</span></p>
      <h1 id="charts-heading">JavaScript charts.<br /><span>Bring your data to life.</span></h1>
      <p class="hero-copy">
        Build interactive dashboards with a JavaScript and TypeScript chart library for React, Vue,
        Angular, and vanilla applications. Compare performance, spot trends, and explore your data.
      </p>
      <div class="hero-actions">
        <AppButton href="#chart-gallery"
          >Explore charts <span aria-hidden="true">↗</span></AppButton
        >
        <AppButton href="/demo/pivot-charts" variant="secondary"
          >Open the chart dashboard</AppButton
        >
      </div>
      <p class="frameworks">
        Vanilla JavaScript <i aria-hidden="true">/</i> React <i aria-hidden="true">/</i> Vue
        <i aria-hidden="true">/</i> Angular
      </p>
      <div class="hero-financial-example">
        <AdvancedFinancialCharts example="composition" :show-source="false" :show-hint="false">
          <template #fallback>
            <img
              src="/blog/advanced-financial-charts/composition.svg"
              alt="Actual and budget revenue stacks with margin and target lines across twelve months"
              width="1200"
              height="640"
            />
          </template>
        </AdvancedFinancialCharts>
      </div>
      <FinancialShowcase />
    </section>

    <section class="benefits section-width" aria-label="Charts capabilities">
      <div>
        <ChartsBenefitIcon kind="chart" />
        <h2>One chart. Or a whole story.</h2>
        <p>Start with a standalone chart. Compose a dashboard as your questions grow.</p>
      </div>
      <div>
        <ChartsBenefitIcon kind="appearance" />
        <h2>Your app. Your visual language.</h2>
        <p>Bring your colors, labels, and theme. Keep every visualization feeling consistent.</p>
      </div>
      <div>
        <ChartsBenefitIcon kind="workflow" />
        <h2>From seeing to exploring.</h2>
        <p>
          Take the next step with Pivot: connect charts to reports, filters, and aggregated data.
        </p>
      </div>
    </section>

    <UseCaseExamples class="section-width" />

    <section id="chart-gallery" class="gallery section-width" aria-labelledby="gallery-heading">
      <div class="gallery-intro">
        <p class="eyebrow">Find your perspective</p>
        <h2 id="gallery-heading">A chart for every question.</h2>
        <p>
          Start with the question you need to answer. Explore a few different ways to see the story
          in your data.
        </p>
      </div>
      <section
        v-for="useCase in galleryUseCases"
        :key="useCase.id"
        class="gallery-area"
        :aria-labelledby="`case-${useCase.id}`"
      >
        <h3 :id="`case-${useCase.id}`" class="area-heading">{{ useCase.title }}</h3>
        <p class="area-description">{{ useCase.description }}</p>
        <div class="chart-grid" :class="{ 'chart-grid-pair': useCase.charts.length === 2 }">
          <article v-for="chart in useCase.charts" :key="chart.type" class="chart-card">
            <div class="card-topline">
              <span>{{ familyLabels[chart.family] }}</span
              ><span class="card-live">Live</span>
            </div>
            <div class="card-canvas"><LiveChart :type="chart.type" /></div>
            <div class="card-copy">
              <h4>{{ chart.label }}</h4>
              <p>{{ chart.description }}</p>
              <button type="button" :aria-label="`Explore ${chart.label}`" @click="explore(chart)">
                Explore chart <span aria-hidden="true">↗</span>
              </button>
            </div>
          </article>
        </div>
      </section>
      <div class="geographic-note">
        <div>
          <h3>Taking your data places?</h3>
          <p>
            Choropleth, proportional symbol, and geographic heatmaps are available through the
            optional geographic capability pack, using your application's map provider and assets.
          </p>
        </div>
        <a href="https://pro.rv-grid.com/guides/pivot-charts/chart-types/#optional-geographic-pack"
          >Explore geographic charts <span aria-hidden="true">↗</span></a
        >
      </div>
    </section>

    <DatumStylingExamples class="section-width" />

    <TransitionExamples class="section-width" />

    <section class="section-width charts-guides" aria-labelledby="charts-guides-heading">
      <h2 id="charts-guides-heading">Build and customize.</h2>
      <p>
        Explore the <a href="https://pro.rv-grid.com/guides/charts/">standalone Charts guides</a>
        for configuration, supported interactions and renderer limitations.
      </p>
      <nav aria-label="Charts configuration guides">
        <ul class="charts-guide-grid" role="list">
          <li v-for="guide in chartGuides" :key="guide.href" class="charts-guide-card">
            <span class="charts-guide-category">{{ guide.category }}</span>
            <a class="charts-guide-title" :href="guide.href">
              <span>{{ guide.title }}</span>
              <span class="charts-guide-arrow" aria-hidden="true">↗</span>
            </a>
            <a v-if="guide.related" class="charts-guide-related" :href="guide.related.href">
              {{ guide.related.title }} <span aria-hidden="true">→</span>
            </a>
          </li>
        </ul>
      </nav>
    </section>

    <section class="pivot-bridge section-width">
      <div>
        <p class="eyebrow">Better together</p>
        <h2>The chart starts the conversation.<br />Pivot takes it further.</h2>
        <p>
          Group and aggregate records in a Pivot table, then explore linked charts that follow the
          report's filters. See the dashboard that brings it all together.
        </p>
        <AppButton href="/demo/pivot-charts"
          >Try the live dashboard <span aria-hidden="true">→</span></AppButton
        >
      </div>
      <div class="bridge-chart"><LiveChart type="treemap" /></div>
    </section>

    <BlogRelated
      class="section-width charts-reading"
      :article-urls="[
        '/blog/advanced-financial-charts-business-analysis',
        '/blog/interactive-pivot-charts-javascript',
      ]"
    />
    <div class="section-width charts-faq"><CommercialFaq id="charts-faq" /></div>
    <ProCtaBanner
      title="Make your next dashboard a little more insightful."
      description="Explore the chart dashboard, or discover how Charts and Pivot fit into your application."
      primary-href="/demo/pivot-charts"
      primary-label="Explore the dashboard"
      secondary-href="/pivot/"
      secondary-label="Discover Pivot"
    />

    <dialog
      ref="dialog"
      class="chart-dialog"
      aria-labelledby="detail-title"
      aria-describedby="detail-description"
      @close="selected = undefined"
      @click="onBackdrop"
    >
      <template v-if="selected">
        <div class="dialog-heading">
          <div>
            <p class="eyebrow">{{ familyLabels[selected.family] }}</p>
            <h2 id="detail-title">{{ selected.label }}</h2>
          </div>
          <button
            type="button"
            class="close-dialog"
            aria-label="Close chart preview"
            @click="dialog?.close()"
          >
            ✕
          </button>
        </div>
        <p id="detail-description">{{ selected.description }}</p>
        <div class="detail-canvas">
          <LiveChart
            :key="selected.type"
            ref="detailChart"
            :type="selected.type"
            :labels="labels"
            eager
            @ready="detailReady = true"
            @error="detailReady = false"
          />
        </div>
        <div class="detail-controls">
          <label v-if="selected.interactions.labels"
            ><input v-model="labels" type="checkbox" /> Show data labels</label
          ><span v-else>Illustrative sample data</span
          ><button type="button" :disabled="!detailReady || downloading" @click="download">
            {{ downloading ? 'Preparing SVG…' : 'Download SVG' }}
          </button>
        </div>
        <p v-if="downloadError" role="alert">{{ downloadError }}</p>
      </template>
    </dialog>
  </main>
</template>

<script setup lang="ts">
import { nextTick, onBeforeUnmount, ref } from 'vue'
import AppButton from '../.vitepress/theme/AppButton.vue'
import ProCtaBanner from '../pro/ProCtaBanner.vue'
import CommercialFaq from '../pro/CommercialFaq.vue'
import BlogRelated from '../blog/BlogRelated.vue'
import LiveChart from './LiveChart.vue'
import UseCaseExamples from './UseCaseExamples.vue'
import TransitionExamples from './TransitionExamples.vue'
import DatumStylingExamples from './DatumStylingExamples.vue'
import FinancialShowcase from './FinancialShowcase.vue'
import AdvancedFinancialCharts from '../.vitepress/theme/components/blog/advanced-financial-charts/AdvancedFinancialCharts.vue'
import ChartsBenefitIcon from './ChartsBenefitIcon.vue'
import { galleryUseCases, familyLabels, type GalleryChart } from './catalog'

const chartGuides = [
  {
    category: 'Navigation',
    title: 'Value-axis navigation and XY brushing',
    href: 'https://pro.rv-grid.com/guides/charts/tools/value-navigation/',
  },
  {
    category: 'Rendering',
    title: 'Batched SVG policy',
    href: 'https://pro.rv-grid.com/guides/charts/tools/batched-svg/',
    related: {
      title: 'Measured SVG results',
      href: 'https://pro.rv-grid.com/guides/charts/tools/batched-svg-performance/',
    },
  },
  {
    category: 'Acceleration',
    title: 'Optional WebGL policy',
    href: 'https://pro.rv-grid.com/guides/charts/tools/webgl/',
    related: {
      title: 'Measured WebGL results',
      href: 'https://pro.rv-grid.com/guides/charts/tools/webgl-performance/',
    },
  },
  {
    category: 'Composition',
    title: 'Bubble and histogram combinations',
    href: 'https://pro.rv-grid.com/guides/charts/tools/cartesian-sample-layers/',
  },
  {
    category: 'Axes',
    title: 'Named polar axis layout',
    href: 'https://pro.rv-grid.com/guides/charts/tools/polar-axis-layout/',
  },
  {
    category: 'Dates and time',
    title: 'Date ranges and named timezones',
    href: 'https://pro.rv-grid.com/guides/charts/tools/date-ranges/',
  },
  {
    category: 'Integration',
    title: 'Host actions',
    href: 'https://pro.rv-grid.com/guides/charts/customization/#host-actions-and-dynamic-submenus',
    related: {
      title: 'Export lifecycle hooks',
      href: 'https://pro.rv-grid.com/guides/charts/tools/exports/#export-lifecycle-hooks',
    },
  },
  {
    category: 'Finance',
    title: 'Financial sessions and trading controls',
    href: 'https://pro.rv-grid.com/guides/charts/tools/financial-sessions/',
  },
]

const dialog = ref<HTMLDialogElement>()
const selected = ref<GalleryChart>()
const detailChart = ref<InstanceType<typeof LiveChart>>()
const labels = ref(false)
const detailReady = ref(false)
const downloading = ref(false)
const downloadError = ref('')
async function explore(chart: GalleryChart) {
  selected.value = chart
  labels.value = false
  detailReady.value = false
  downloadError.value = ''
  await nextTick()
  dialog.value?.showModal()
}
function onBackdrop(event: MouseEvent) {
  const modal = dialog.value
  if (!modal || event.target !== modal) return
  const rect = modal.getBoundingClientRect()
  if (
    event.clientX < rect.left ||
    event.clientX > rect.right ||
    event.clientY < rect.top ||
    event.clientY > rect.bottom
  )
    modal.close()
}
async function download() {
  downloading.value = true
  downloadError.value = ''
  try {
    await detailChart.value?.download()
  } catch {
    downloadError.value = 'The SVG could not download. Please try again.'
  } finally {
    downloading.value = false
  }
}
onBeforeUnmount(() => dialog.value?.close())
</script>

<style scoped lang="scss" src="./charts-page.scss"></style>

<style scoped>
.charts-guides {
  margin-block: 24px 72px;
}
.charts-guides h2 {
  scroll-margin-top: 96px;
  font-size: clamp(28px, 4vw, 40px);
  font-weight: 650;
  letter-spacing: -1.2px;
  line-height: 1.2;
}
.charts-guides > p {
  max-width: 760px;
  margin-block: 16px 28px;
  color: var(--vp-c-text-2);
  line-height: 1.7;
}
.charts-guide-grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 16px;
  margin: 0;
  padding: 0;
  list-style: none;
}
.charts-guide-card {
  display: grid;
  grid-template-rows: auto 1fr auto;
  align-content: start;
  gap: 14px;
  min-width: 0;
  min-height: 176px;
  box-sizing: border-box;
  margin: 0;
  padding: 22px;
  border: 1px solid var(--vp-c-divider);
  border-radius: 12px;
  background: var(--vp-c-bg);
}
.charts-guide-category {
  color: var(--vp-c-text-2);
  font-size: 11px;
  font-weight: 650;
  letter-spacing: 1px;
  line-height: 1.4;
  text-transform: uppercase;
}
.charts-guides .charts-guide-title {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 16px;
  color: var(--vp-c-text-1);
  font-size: 16px;
  font-weight: 600;
  line-height: 1.5;
  text-decoration: none;
}
.charts-guide-arrow {
  flex: none;
  color: var(--vp-c-brand-1);
  font-size: 18px;
  font-weight: 400;
}
.charts-guides .charts-guide-related {
  justify-self: start;
  font-size: 13px;
  line-height: 1.5;
}
.charts-guide-related span {
  margin-left: 5px;
}
.charts-guides a {
  color: var(--vp-c-brand-1);
  text-decoration: underline;
  text-underline-offset: 4px;
}
.charts-guide-title:hover span:first-child {
  color: var(--vp-c-brand-1);
  text-decoration: underline;
  text-underline-offset: 4px;
}
.charts-guide-card:focus-within {
  border-color: var(--vp-c-brand-1);
}
@media (max-width: 1100px) {
  .charts-guide-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}
@media (max-width: 600px) {
  .charts-guide-grid {
    grid-template-columns: minmax(0, 1fr);
    gap: 12px;
  }
  .charts-guide-card {
    min-height: 0;
    padding: 20px;
  }
  .charts-guides {
    margin-bottom: 48px;
  }
}
</style>
