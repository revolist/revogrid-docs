<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from 'vue'
const host = ref<HTMLElement>()
const ready = ref(false)
const busy = ref(false)
const error = ref('')
const path = ref<string[]>([])
const february = ref(false)
let example: Awaited<ReturnType<typeof import('./mount').mountSalesExample>> | undefined
let disposed = false
async function act(action: () => Promise<unknown> | undefined) {
  busy.value = true
  error.value = ''
  try {
    await action()
  } catch (cause) {
    error.value = String(cause)
  } finally {
    busy.value = false
  }
}
onMounted(async () => {
  try {
    const { mountSalesExample } = await import('./mount')
    if (disposed || !host.value) return
    host.value.addEventListener('sales-chart-change', event => {
      ready.value = true
      path.value = (event as CustomEvent).detail.path.map(String)
    })
    host.value.addEventListener('sales-chart-error', event => {
      error.value = (event as CustomEvent).detail
    })
    example = await mountSalesExample(host.value)
    if (disposed) example.destroy()
  } catch (cause) {
    error.value = String(cause)
  }
})
onBeforeUnmount(() => {
  disposed = true
  example?.destroy()
})
</script>

<template>
  <section class="sales-example" aria-label="Interactive sales Pivot Charts example">
    <header class="sales-example-header">
      <div>
        <span class="sales-eyebrow">FROM SUMMARY TO SOURCE</span>
        <h3>Where does the revenue come from?</h3>
      </div>
      <span class="sales-data-label">18 fictional order lines · USD</span>
    </header>
    <div class="sales-actions">
      <button :disabled="!ready || busy" @click="act(() => example?.reset())">All regions</button>
      <button
        :disabled="!ready || busy || path[0] === 'Europe'"
        @click="act(() => example?.exploreEurope())"
      >
        Explore Europe →
      </button>
      <label
        ><input
          v-model="february"
          type="checkbox"
          :disabled="!ready || busy"
          @change="act(() => example?.showFebruary(february))"
        />
        February only</label
      >
      <button :disabled="!ready || busy" @click="act(() => example?.exportCsv())">
        Export chart CSV
      </button>
    </div>
    <p class="sales-breadcrumb" aria-live="polite">
      {{
        ready
          ? `All regions${path.length ? ' / ' + path.join(' / ') : ''}`
          : 'Loading Pivot Charts…'
      }}
    </p>
    <p v-if="error" role="alert">{{ error }}</p>
    <div ref="host" class="sales-render-host" :aria-busy="busy" />
    <p class="sales-hint">
      Click a region bar to drill into products. The period filter updates the linked report; chart
      drilling leaves the table layout unchanged. CSV exports chart data at the current drill level.
    </p>
  </section>
</template>

<style>
.sales-example {
  box-sizing: border-box;
  width: 100%;
  min-width: 0;
  margin: 24px 0 36px;
  padding: 24px;
  border: 1px solid var(--vp-c-divider);
  border-radius: 16px;
  background: var(--vp-c-bg);
  box-shadow: 0 10px 32px #162b4610;
}
.sales-example-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
}
.sales-example-header h3 {
  margin: 6px 0 0;
  font-size: 21px;
  line-height: 1.3;
}
.sales-eyebrow {
  color: #635bd6;
  font-size: 11px;
  font-weight: 750;
  letter-spacing: 0.12em;
}
.sales-data-label,
.sales-hint {
  color: var(--vp-c-text-2);
  font-size: 12px;
  line-height: 1.7;
}
.sales-actions {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 10px;
  margin: 20px 0 0;
}
.sales-actions button {
  border: 1px solid var(--vp-c-divider);
  border-radius: 7px;
  padding: 7px 12px;
  font-size: 12px;
  background: var(--vp-c-bg-soft);
  cursor: pointer;
}
.sales-actions button:disabled {
  opacity: 0.5;
  cursor: default;
}
.sales-actions button:focus-visible {
  outline: 2px solid var(--vp-c-brand-1);
  outline-offset: 3px;
}
.sales-actions label {
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 12px;
}
.sales-breadcrumb {
  color: var(--vp-c-text-2);
  font-size: 12px;
  margin: 12px 0 4px !important;
}
.sales-render-host {
  min-width: 0;
}
.article-pivot-chart {
  height: 355px;
  position: relative;
}
.article-pivot-table {
  margin-top: 18px;
  border: 1px solid var(--vp-c-divider);
  border-radius: 8px;
  overflow: hidden;
  /* Compact grid text uses a light theme; give its transparent cells a surface. */
  background: #fff;
  color: #1b2942;
  color-scheme: light;
}
.article-pivot-table revo-grid {
  width: 100%;
  font-size: 12px;
}
.sales-hint {
  margin: 14px 0 0 !important;
}
.sales-example [data-chart-underlying-records],
.sales-example [data-chart-underlying-records-dialog] button {
  border: 1px solid var(--vp-c-divider);
  border-radius: 6px;
  padding: 6px 10px;
  margin: 4px 8px 4px 0;
  font-size: 12px;
  background: var(--vp-c-bg-soft);
  cursor: pointer;
}
.sales-example [data-chart-underlying-records]:disabled,
.sales-example [data-chart-underlying-records-dialog] button:disabled {
  opacity: 0.5;
  cursor: default;
}
.sales-example [data-chart-underlying-records-dialog] h2 {
  border: 0;
  padding: 0;
  font-size: 16px;
  font-weight: 600;
}
.sales-example [data-chart-underlying-records-dialog] table {
  width: 100%;
  border-collapse: collapse;
  font-size: 13px;
}
.sales-example [data-chart-underlying-records-dialog] th,
.sales-example [data-chart-underlying-records-dialog] td {
  padding: 10px 14px;
  border-bottom: 1px solid var(--vp-c-divider);
  text-align: left;
}
@media (max-width: 600px) {
  .sales-example {
    padding: 14px;
  }
  .sales-example-header {
    align-items: flex-start;
    flex-direction: column;
    gap: 8px;
  }
  .sales-example-header h3 {
    font-size: 18px;
  }
  .article-pivot-chart {
    height: 370px;
  }
}
</style>
