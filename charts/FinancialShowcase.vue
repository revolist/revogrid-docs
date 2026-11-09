<template>
  <div
    class="financial-showcase"
    role="group"
    aria-label="Illustrative financial dashboard, FY2025"
  >
    <div class="showcase-context">
      <span><i aria-hidden="true"></i> A year in perspective</span
      ><span>FY2025 <b>·</b> USD <b>·</b> Sample data</span>
    </div>
    <div class="financial-cards">
      <article class="finance-card performance-card">
        <header>
          <p class="finance-eyebrow">THE BIG PICTURE</p>
          <h2>Growth with a healthy margin.</h2>
        </header>
        <div class="performance-canvas">
          <LiveChart type="columnLine" :example="performance" eager />
        </div>
        <div class="mobile-axis month-axis" aria-hidden="true">
          <span>Jan</span><span>Jun</span><span>Dec</span>
        </div>
        <footer class="performance-footer">
          <div>
            <span>Operating profit</span><strong>{{ money(operatingProfit) }}</strong>
          </div>
          <div>
            <span>Operating margin</span><strong>{{ operatingMargin }}%</strong>
          </div>
          <div><span>Exit margin · Dec</span><strong>31.0%</strong></div>
        </footer>
      </article>
      <article class="finance-card mix-card">
        <header>
          <p class="finance-eyebrow">THE CONTRIBUTION</p>
          <h2>Where revenue comes from.</h2>
        </header>
        <figure class="mix-figure" aria-labelledby="mix-ring-key mix-insight">
          <div class="mix-chart"><LiveChart type="donut" :example="mix" eager /></div>
          <figcaption id="mix-ring-key" class="ring-key">
            <span><i class="outer-ring" aria-hidden="true"></i>Outer · actual</span
            ><span><i class="inner-ring" aria-hidden="true"></i>Inner · plan</span>
          </figcaption>
          <div id="mix-insight" class="mix-insight">
            <span class="insight-anchor" aria-hidden="true">1</span>
            <p>
              <strong>Enterprise mix is expanding.</strong
              ><span
                >{{ enterpriseMix.share }}% of revenue, up {{ enterpriseMix.mixDelta }} pp from the
                {{ enterpriseMix.plannedShare }}% plan.</span
              >
            </p>
          </div>
        </figure>
      </article>
      <article class="finance-card regional-card">
        <header>
          <p class="finance-eyebrow">THE COMPARISON</p>
          <h2>Every region. Against plan.</h2>
        </header>
        <div class="regional-canvas">
          <LiveChart type="groupedColumn" :example="regional" eager />
        </div>
        <div class="mobile-axis region-axis" aria-hidden="true">
          <span>N. Am.</span><span>Europe</span><span>APAC</span><span>Other</span>
        </div>
        <footer class="regional-footer">
          <span>Revenue variance</span>
          <div>
            <span v-for="item in regions" :key="item.region"
              >{{ item.region }}<strong>+{{ item.variance }}%</strong></span
            >
          </div>
        </footer>
      </article>
    </div>
  </div>
</template>
<script setup lang="ts">
import LiveChart from './LiveChart.vue'
import {
  performance,
  mix,
  regional,
  regions,
  money,
  enterpriseMix,
  operatingProfit,
  operatingMargin,
} from './financial-showcase'
</script>
<style scoped lang="scss">
.financial-showcase {
  margin-top: 48px;
  text-align: left;
}
.showcase-context {
  display: flex;
  justify-content: space-between;
  gap: 12px;
  margin: 0 2px 14px;
  color: var(--vp-c-text-2);
  font-size: 11px;
}
.showcase-context > span:first-child {
  display: flex;
  align-items: center;
  gap: 7px;
  font-weight: 600;
  color: var(--vp-c-text-1);
}
.showcase-context i {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: #6647f0;
}
.showcase-context b {
  font-weight: 400;
  margin: 0 7px;
  opacity: 0.5;
}
.financial-cards {
  display: grid;
  grid-template-columns: 1.5fr 1fr 1.15fr;
  gap: 16px;
}
.finance-card {
  display: flex;
  flex-direction: column;
  min-width: 0;
  border: 1px solid var(--vp-c-divider);
  border-radius: 14px;
  padding: 22px 20px 18px;
  background: var(--vp-c-bg);
}
p,
h2 {
  margin: 0;
}
.finance-eyebrow {
  font-size: 9px;
  letter-spacing: 1.6px;
  color: var(--vp-c-text-2);
}
h2 {
  margin-top: 7px;
  font-size: 16px;
  font-weight: 600;
  letter-spacing: -0.35px;
  line-height: 1.5;
}
i {
  display: inline-block;
  flex-shrink: 0;
}
.mobile-axis {
  display: none;
}
.performance-canvas {
  height: 400px;
  flex: 1;
  min-height: 400px;
  margin: 10px -12px 0;
}
footer {
  border-top: 1px solid var(--vp-c-divider);
  margin-top: 12px;
  padding-top: 15px;
}
.performance-footer {
  margin-top: auto;
  display: flex;
  justify-content: space-between;
  gap: 12px;
}
.performance-footer span,
.regional-footer > span {
  display: block;
  color: var(--vp-c-text-2);
  font-size: 10px;
}
.performance-footer strong {
  display: block;
  font-size: 18px;
  margin-top: 4px;
  font-weight: 600;
  letter-spacing: -0.4px;
}
.mix-figure {
  margin: 0;
  display: flex;
  flex-direction: column;
  flex: 1;
}
.ring-key {
  display: flex;
  justify-content: center;
  gap: 16px;
  color: var(--vp-c-text-2);
  font-size: 9px;
  margin: 0 0 14px;
}
.ring-key > span {
  display: flex;
  gap: 5px;
  align-items: center;
}
.ring-key i {
  width: 10px;
  height: 10px;
  border: 2px solid var(--vp-c-text-2);
  border-radius: 50%;
}
.ring-key .inner-ring {
  width: 7px;
  height: 7px;
  border-width: 1px;
}
.mix-insight {
  position: relative;
  display: flex;
  gap: 8px;
  background: var(--vp-c-bg-soft);
  border-left: 2px solid #6647f0;
  border-radius: 0 5px 5px 0;
  padding: 10px;
  margin-bottom: 16px;
}
.insight-anchor {
  display: grid;
  place-items: center;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background: var(--vp-c-brand-soft);
  color: var(--vp-c-brand-1);
  font-size: 9px;
  font-weight: 600;
  flex-shrink: 0;
}
.mix-insight strong {
  display: block;
  font-size: 10px;
  font-weight: 600;
}
.mix-insight p > span {
  display: block;
  color: var(--vp-c-text-2);
  font-size: 10px;
  line-height: 1.6;
  margin-top: 2px;
}
.mix-chart {
  flex: 1;
  min-height: 300px;
  height: 300px;
  margin: 4px -8px 0;
}
.mix-chart :deep(.live-chart-host) {
  min-height: 0;
}
.regional-canvas {
  height: 320px;
  flex: 1;
  min-height: 320px;
  margin: 10px -12px 0;
}
.regional-footer {
  margin-top: auto;
}
.regional-footer > div {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 8px 16px;
  margin-top: 9px;
}
.regional-footer > div > span {
  display: flex;
  justify-content: space-between;
  gap: 5px;
  font-size: 9px;
  color: var(--vp-c-text-2);
}
.regional-footer strong {
  color: var(--vp-c-brand-1);
  font-weight: 600;
}
@media (max-width: 1100px) {
  .financial-cards {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
  .performance-card {
    grid-column: 1 / -1;
  }
  .performance-canvas {
    height: 270px;
  }
}
@media (max-width: 640px) {
  .performance-canvas :deep([data-pivot-chart-category-label]),
  .regional-canvas :deep([data-pivot-chart-category-label]) {
    display: none;
  }
  .mobile-axis {
    display: flex;
    justify-content: space-between;
    font-size: 9px;
    color: var(--vp-c-text-2);
    margin-top: -25px;
    margin-bottom: 28px;
    position: relative;
  }
  .month-axis {
    padding-inline: 48px 40px;
  }
  .region-axis {
    padding-inline: 34px 0;
  }
  .region-axis span {
    width: 25%;
    text-align: center;
  }
  .financial-showcase {
    margin-top: 34px;
  }
  .financial-cards {
    grid-template-columns: minmax(0, 1fr);
  }
  .finance-card {
    display: flex;
    flex-direction: column;
    padding: 20px 16px 18px;
  }
  .showcase-context {
    flex-wrap: wrap;
    font-size: 10px;
  }
  .performance-canvas {
    height: 250px;
  }
  .performance-footer {
    gap: 8px;
  }
  .performance-footer span {
    font-size: 9px;
  }
  .performance-footer strong {
    font-size: 16px;
  }
}
</style>
