<template>
  <div class="rg-demo-preview" :class="`is-${type}`">
    <MiniGridPreview v-if="gridRows" :rows="gridRows" />
    <div v-else-if="type === 'tree'" class="tree-mini">
      <div class="tree-row">
        <div class="tree-icon">▼</div>
        <div class="tree-cell strong">North America</div>
        <div class="tree-val">$4.2M</div>
      </div>
      <div class="tree-row">
        <div class="tree-indent"></div>
        <div class="tree-icon">▼</div>
        <div class="tree-cell">United States</div>
        <div class="tree-val">$3.1M</div>
      </div>
      <div class="tree-row muted">
        <div class="tree-indent"></div>
        <div class="tree-indent"></div>
        <div class="tree-icon">·</div>
        <div class="tree-cell">New York</div>
        <div class="tree-val">$1.4M</div>
      </div>
      <div class="tree-row muted">
        <div class="tree-indent"></div>
        <div class="tree-indent"></div>
        <div class="tree-icon">·</div>
        <div class="tree-cell">California</div>
        <div class="tree-val">$1.7M</div>
      </div>
      <div class="tree-row">
        <div class="tree-indent"></div>
        <div class="tree-icon">▶</div>
        <div class="tree-cell">Canada</div>
        <div class="tree-val">$1.1M</div>
      </div>
    </div>
    <div v-else-if="type === 'custom'" class="custom-mini">
      <div class="custom-pill status"><span>●</span> Active</div>
      <div class="custom-pill progress-text">▓▓▓▓░░ 65%</div>
      <div class="custom-pill rating">
        <span class="on">★</span><span class="on">★</span><span class="on">★</span><span>★</span><span>★</span>
      </div>
      <div class="custom-divider"></div>
      <small>custom renderers</small>
    </div>
    <div v-else class="realtime-mini">
      <div
        v-for="bar in realtimeBars"
        :key="bar.color"
        class="realtime-bar"
      >
        <i :style="{ width: `${bar.width}%`, background: bar.color, animationDelay: bar.delay }"></i>
      </div>
      <small>live data updates</small>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import MiniGridPreview from './MiniGridPreview.vue'

const props = defineProps<{
  type: string
}>()

const gridRows = computed(() => {
  if (props.type === 'dataset') {
    return [
      ['ID', 'Name', 'Val'],
      ['001', 'Alpha Corp', '149'],
      [{ text: '002', class: 'selected' }, { text: 'Beta Inc', class: 'selected' }, { text: '382', class: 'selected' }],
      ['003', 'Gamma LLC', '211'],
      ['...', { text: '100,000+ rows', class: 'muted-small' }, '...'],
    ]
  }
  if (props.type === 'editing') {
    return [
      ['Product', 'Q1', 'Q2'],
      ['Widget A', { text: '2,450', class: 'editing' }, '1,890'],
      ['Widget B', '3,100', '2,750'],
      ['Widget C', '980', '1,200'],
    ]
  }
  if (props.type === 'grouping') {
    return [
      [{ text: '', class: 'header no-border' }, { text: 'Q1 Results', class: 'header group-head accent', span: 2 }, { text: 'Q2 Forecast', class: 'header group-head', span: 2 }],
      ['Region', 'Revenue', 'Margin', 'Revenue', 'Margin'],
      ['EMEA', '2.1M', '34%', '2.4M', '36%'],
      ['APAC', '1.8M', '28%', '2.1M', '31%'],
    ]
  }
  return null
})

const realtimeBars = [
  { width: 72, color: 'var(--rg-font-green)', delay: '0s' },
  { width: 58, color: '#3b82f6', delay: '0.3s' },
  { width: 85, color: '#f59e0b', delay: '0.6s' },
]
</script>

<style lang="scss" scoped>
.rg-demo-preview {
  height: 110px;
  background: var(--rg-bg);
  border-bottom: 1px solid var(--rg-border);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--rg-text-3);
  font-size: 11px;
  overflow: hidden;
  position: relative;
}

.tree-mini {
  width: 100%;
  height: 100%;
  padding: 10px;
  background: var(--rg-bg);
  color: var(--rg-text-2);
  font-family: var(--vp-font-family-mono);
}

.tree-row {
  display: flex;
  align-items: center;
  gap: 4px;
  height: 18px;
  font-size: 9px;
}

.tree-indent {
  width: 12px;
  flex: 0 0 12px;
}

.tree-icon {
  width: 10px;
  flex: 0 0 10px;
  color: var(--rg-font-green);
  font-size: 8px;
}

.tree-cell {
  flex: 1;
  min-width: 0;
}

.tree-cell.strong {
  color: var(--rg-text);
  font-weight: 600;
}

.tree-row.muted .tree-cell {
  color: var(--rg-text-3);
}

.tree-val {
  color: var(--rg-text-2);
  font-size: 8px;
}

.custom-mini {
  width: 100%;
  height: 100%;
  padding: 10px;
  display: flex;
  align-content: flex-start;
  align-items: flex-start;
  flex-wrap: wrap;
  gap: 4px;
  background: var(--rg-bg);
}

.custom-pill {
  background: var(--rg-bg-3);
  border: 1px solid var(--rg-border);
  border-radius: 4px;
  padding: 3px 8px;
  color: var(--rg-text-3);
  font-size: 9px;
}

.status {
  display: flex;
  align-items: center;
  gap: 3px;
  padding: 5px 8px;
  color: var(--rg-font-green);
  font-weight: 600;
}

.rating {
  display: flex;
  gap: 2px;

  .on {
    color: var(--rg-font-green);
  }
}

.custom-divider {
  width: 100%;
  height: 1px;
  background: var(--rg-border);
}

.custom-mini small {
  width: 100%;
  color: var(--rg-text-3);
  font-size: 9px;
  text-align: center;
}

.realtime-mini {
  width: 80%;
  display: flex;
  flex-direction: column;
  gap: 5px;
}

.realtime-bar {
  height: 12px;
  background: var(--rg-bg-4);
  border-radius: 3px;
  overflow: hidden;
  position: relative;
}

.realtime-bar i {
  position: absolute;
  inset: 0 auto 0 0;
  border-radius: 3px;
  opacity: 0.8;
  animation: rgPreviewShimmer 1.5s ease-in-out infinite;
}

.realtime-mini small {
  color: var(--rg-text-3);
  font-size: 9px;
  text-align: center;
  margin-top: 4px;
}

@keyframes rgPreviewShimmer {
  0%, 100% { opacity: 0.65; }
  50% { opacity: 1; }
}
</style>
