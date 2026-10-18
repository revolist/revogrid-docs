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
import TransitionExamples from './TransitionExamples.vue'
import DatumStylingExamples from './DatumStylingExamples.vue'
import FinancialShowcase from './FinancialShowcase.vue'
import AdvancedFinancialCharts from '../.vitepress/theme/components/blog/advanced-financial-charts/AdvancedFinancialCharts.vue'
import ChartsBenefitIcon from './ChartsBenefitIcon.vue'
import { galleryUseCases, familyLabels, type GalleryChart } from './catalog'

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
