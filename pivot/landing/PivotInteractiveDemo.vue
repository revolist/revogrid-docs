<template>
  <section id="demo" class="demo-section">
    <div class="demo-inner">
      <div class="demo-head">
        <div class="section-label centered">Interactive Demo</div>
        <h2>Pivot. Group. Aggregate. <span>Instantly.</span></h2>
        <p>Switch aggregation mode - all cells recalculate in real time, client-side. Hover rows to inspect.</p>
      </div>

      <div class="demo-frame">
        <div class="demo-bar">
          <div class="window-dots"><span class="red"></span><span class="yellow"></span><span class="green"></span></div>
          <span class="zone-label">Rows</span>
          <span class="field-tag blue">Region</span>
          <span class="field-tag blue">Product</span>
          <span class="zone-label">Columns</span>
          <span class="field-tag green">Quarter</span>
          <span class="zone-label">Values</span>
          <span class="field-tag amber">Revenue</span>
          <div class="agg-tabs">
            <button v-for="mode in AGG_MODES" :key="mode" type="button" :class="{ on: agg === mode }" @click="agg = mode">
              {{ mode.toUpperCase() }}
            </button>
          </div>
        </div>
        <div class="table-wrap">
          <table class="pivot-table">
            <thead>
              <tr>
                <th>Region / Product</th>
                <th v-for="quarter in QUARTERS" :key="quarter" class="quarter">{{ quarter }}</th>
                <th class="total-head">Total</th>
              </tr>
            </thead>
            <tbody>
              <template v-for="region in REGIONS" :key="region">
                <tr>
                  <td class="group-label">{{ region }}</td>
                  <td v-for="quarter in QUARTERS" :key="quarter" class="num">
                    <span class="bar-wrap">
                      <span class="bar" :style="{ width: barWidth(regionTotal(region, quarter)) }"></span>
                      {{ format(regionTotal(region, quarter)) }}
                    </span>
                  </td>
                  <td class="row-total">{{ format(regionGrandTotal(region)) }}</td>
                </tr>
                <tr v-for="product in PRODUCTS" :key="`${region}-${product}`">
                  <td class="sub-label">{{ product }}</td>
                  <td v-for="quarter in QUARTERS" :key="quarter" class="num muted">{{ format(productValue(region, product, quarter)) }}</td>
                  <td class="row-total muted">{{ format(productGrandTotal(region, product)) }}</td>
                </tr>
              </template>
              <tr class="grand-row">
                <td>Grand Total</td>
                <td v-for="quarter in QUARTERS" :key="quarter">{{ format(quarterGrandTotal(quarter)) }}</td>
                <td>{{ format(grandTotal) }}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="demo-foot">
          <span>Aggregating <strong>{{ RAW.length }} rows</strong> -> <strong>{{ REGIONS.length * PRODUCTS.length * QUARTERS.length }} cells</strong></span>
          <span class="powered">Powered by RevoGrid</span>
        </div>
      </div>
      <div class="demo-caption">Real-time client-side pivoting · RevoGrid Pro pivot plugin</div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { AGG_MODES, PRODUCTS, QUARTERS, RAW, REGIONS, type AggMode } from './pivotLandingData'
import { usePivotLandingDemo } from './usePivotLandingDemo'

const agg = ref<AggMode>('sum')

const {
  barWidth,
  format,
  grandTotal,
  productGrandTotal,
  productValue,
  quarterGrandTotal,
  regionGrandTotal,
  regionTotal,
} = usePivotLandingDemo(agg)
</script>
