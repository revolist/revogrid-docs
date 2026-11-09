<script setup>
import { computed, nextTick, onMounted, onBeforeUnmount, ref, watch } from 'vue';
import { exampleOptions } from './examples.mjs';
import { complexExampleOptions } from './complex-examples.mjs';

const props = defineProps({ example: { type: String, required: true }, showSource: { type: Boolean, default: true }, showHint: { type: Boolean, default: true } });
const examples = {
  composition: { name: 'Revenue and margin example', snapshot: 'composition', hint: 'Toggle legend entries to compare series. Revenue uses the left axis; margins use the right.' },
  polar: { name: 'Operating profiles example', snapshot: 'polar', hint: 'Choose the actual, prior and target profiles below. Both layouts retain the same 0–100 scoring rubric.' },
  allocation: { name: 'Cost allocation example', snapshot: 'allocation', hint: 'Hover or focus a node to follow its connected allocations. Each stage reconciles to €1.68m.' },
  bins: { name: 'Payment histogram example', snapshot: 'bins', hint: 'Compare the same 72 settled invoices per cohort. Change bin width or measure; toggle a cohort in the legend.' },
  forecast: { name: 'Revenue forecast example', snapshot: 'forecast', hint: 'Change the forecast horizon or use the date controls. Only completed monthly observations feed the model.' },
  market: { name: 'Price and volume example', snapshot: 'market', hint: 'Change price display or use the date presets and custom UTC range below the chart. The guides are authored annotations.' },
};
const info = computed(() => examples[props.example]);
const period = ref('all');
const layout = ref('polar');
const profiles = ref(['current', 'prior', 'target']);
const profileLabels = { current: 'Q3 actual', prior: 'Q2 actual', target: 'Q3 target' };
const profileColors = { current: '#6347ef', prior: '#ff6b21', target: '#0099ff' };
const binWidth = ref(15);
const measure = ref('count');
const showValues = ref(false);
const horizon = ref(3);
const priceStyle = ref('candlestick');
const mounted = ref(false);
const host = ref();
const error = ref('');
const busy = ref(true);
let api, chart, observer;
let revision = 0;
let disposed = false;
let queue = Promise.resolve();

function options() {
  const kind = props.example;
  const settings = kind === 'forecast'
    ? exampleOptions(api, 'forecast')
    : complexExampleOptions(api, kind, kind === 'composition' ? period.value === 'quarter'
      : kind === 'polar' ? layout.value === 'radar'
      : kind === 'allocation' ? showValues.value
      : kind === 'market' ? priceStyle.value === 'line' : false);
  if (kind === 'polar') settings.mapping.series = settings.mapping.series.filter(series => profiles.value.includes(series.field));
  if (kind === 'bins') {
    settings.chartOptions = {
      ...settings.chartOptions,
      histogramBinBoundaries: Array.from({ length: 120 / binWidth.value + 1 }, (_, i) => i * binWidth.value),
      histogramAggregation: measure.value,
    };
    settings.axes.y.title = measure.value === 'count'
      ? `Invoices per ${binWidth.value}-day bin`
      : `${measure.value === 'sum' ? 'Total' : 'Mean'} invoice value · € thousands`;
    settings.presentation.title = measure.value === 'count' ? 'Compare payment frequency'
      : measure.value === 'sum' ? 'Compare settled invoice value by payment duration'
      : 'Compare mean invoice size within each duration bin';
    settings.presentation.subtitle = `72 settled invoices per cohort · shared ${binWidth.value}-day bins · overlapping distributions`;
  }
  if (kind === 'forecast') {
    settings.analysis.forecasts[0].horizon = horizon.value;
    settings.navigation = { enabled: true, crosshair: true, navigator: true, rangeSelector: { presets: ['3M', 'all'], custom: true } };
  }
  if (!['polar', 'allocation', 'market'].includes(kind)) {
    settings.presentation = { ...settings.presentation, legendAction: 'toggleVisibility' };
  }
  // Visibility belongs to the chart, including native legend interactions. Keep it
  // when changing the representation, data scope, bins, horizon or page theme.
  for (const [id, override] of Object.entries(chart?.model.seriesOverrides ?? {})) {
    if (typeof override.visible !== 'boolean') continue;
    settings.seriesOverrides ??= {};
    settings.seriesOverrides[id] = { ...settings.seriesOverrides[id], visible: override.visible };
  }
  settings.theme = document.documentElement.classList.contains('dark') ? 'dark' : 'light';
  return settings;
}

function render() {
  if (!api || !host.value || disposed) return;
  const current = ++revision;
  busy.value = true;
  queue = queue.then(async () => {
    if (disposed || current !== revision) return;
    error.value = '';
    try {
      const settings = options();
      // Polar families use an ordered runtime palette. Recreate this small chart
      // with the subset's keyed colors so removing a profile never recolors peers.
      // Other families update in place to preserve native navigation and legends.
      if (chart && props.example === 'polar') { chart.destroy(); chart = undefined; }
      if (chart) {
        // Updating the public chart preserves its viewport and native controls.
        await chart.update(settings);
      } else {
        const result = await api.createChart({
          ...settings, container: host.value,
          ...(props.example === 'polar' ? { rendererOptions: { palette: settings.mapping.series.map(series => profileColors[series.field]) } } : {}),
        });
        if (disposed) result.destroy(); else chart = result;
      }
    } catch (reason) {
      if (!disposed && current === revision) error.value = reason instanceof Error ? reason.message : String(reason);
    } finally {
      if (!disposed && current === revision) busy.value = false;
    }
  });
}
watch([period, layout, profiles, binWidth, measure, showValues, horizon, priceStyle], render);
onMounted(async () => {
  mounted.value = true;
  await nextTick();
  try {
    api = await import('@revolist/charts');
    if (disposed) return;
    render();
    observer = new MutationObserver(render);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });
  } catch (reason) {
    if (!disposed) { error.value = String(reason); busy.value = false; }
  }
});
onBeforeUnmount(() => {
  disposed = true;
  ++revision;
  observer?.disconnect();
  chart?.destroy();
});
</script>

<template>
  <section class="financial-investigation" :aria-label="info.name" :data-example="example">
    <template v-if="mounted">
    <div class="financial-controls">
      <label v-if="example === 'composition'">Reporting period
        <select v-model="period"><option value="all">All 12 months</option><option value="quarter">Q3 2026</option></select>
      </label>
      <label v-if="example === 'polar'">Chart layout
        <select v-model="layout"><option value="polar">Grouped polar columns</option><option value="radar">Radar profiles</option></select>
      </label>
      <template v-if="example === 'bins'">
        <label>Bin width
          <select v-model.number="binWidth"><option :value="10">10 days</option><option :value="15">15 days</option><option :value="30">30 days</option></select>
        </label>
        <label>Measure
          <select v-model="measure"><option value="count">Invoice count</option><option value="sum">Total invoice value</option><option value="mean">Mean invoice value</option></select>
        </label>
      </template>
      <label v-if="example === 'allocation'"><input v-model="showValues" type="checkbox"> Show allocation amounts</label>
      <label v-if="example === 'forecast'">Forecast horizon
        <select v-model.number="horizon"><option :value="3">3 months</option><option :value="6">6 months</option><option :value="12">12 months</option></select>
      </label>
      <label v-if="example === 'market'">Price display
        <select v-model="priceStyle"><option value="candlestick">Candlesticks</option><option value="line">Closing-price line</option></select>
      </label>
    </div>
    <fieldset v-if="example === 'polar'" class="financial-profiles">
      <legend>Profiles</legend>
      <label v-for="(label, id) in profileLabels" :key="id">
        <input v-model="profiles" type="checkbox" :value="id" :disabled="profiles.length === 1 && profiles.includes(id)"> {{ label }}
      </label>
    </fieldset>
    <p v-if="showHint" class="financial-explanation">{{ info.hint }}</p>
    <p v-if="error" role="alert">Chart could not load: {{ error }}</p>
    <div class="financial-scroll" :aria-busy="busy">
      <div ref="host" class="financial-chart" />
    </div>
    <p v-if="showSource" class="financial-source">Fictional data · Hover or focus to inspect values · <a :href="`/blog/advanced-financial-charts/${info.snapshot}.svg`">Open static chart</a></p>
    </template>
    <slot v-else name="fallback" />
  </section>
</template>

<style scoped>
.financial-investigation { margin: 1.5rem 0; border: 1px solid var(--vp-c-divider); border-radius: 14px; padding: 18px; background: var(--vp-c-bg-soft); min-width: 0; }
.financial-controls { display: flex; flex-wrap: wrap; align-items: center; gap: 12px 24px; font-size: 14px; }
.financial-controls label { display: flex; flex-wrap: wrap; align-items: center; gap: 8px; min-width: 0; max-width: 100%; }
.financial-controls select { min-width: 0; max-width: 100%; box-sizing: border-box; border: 1px solid var(--vp-c-divider); padding: 6px 12px; border-radius: 6px; background: var(--vp-c-bg); color: var(--vp-c-text-1); font: inherit; }
.financial-profiles { display: flex; flex-wrap: wrap; gap: 8px 20px; margin-top: 12px; border: 0; padding: 0; font-size: 14px; }
.financial-profiles legend { margin-bottom: 6px; }
.financial-profiles label { display: flex; align-items: center; gap: 6px; }
.financial-controls input, .financial-profiles input { accent-color: var(--vp-c-brand-1); }
.financial-explanation { line-height: 1.65; font-size: 14px; color: var(--vp-c-text-2); }
.financial-scroll { overflow-x: auto; background: var(--vp-c-bg); border-radius: 8px; }
.financial-chart { width: 100%; min-width: 0; height: 520px; }
.financial-investigation[data-example='market'] .financial-chart { height: 600px; }
.financial-source { color: var(--vp-c-text-2); font-size: 12px; line-height: 1.5; }
@media (max-width: 640px) {
  .financial-investigation { padding: 12px; }
  .financial-scroll { margin: 0 -12px; border-radius: 0; }
}
</style>
