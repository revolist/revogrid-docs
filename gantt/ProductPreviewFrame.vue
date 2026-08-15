<template>
  <div class="product-preview-frame">
    <div class="product-preview-toolbar">
      <span class="traffic red"></span>
      <span class="traffic yellow"></span>
      <span class="traffic green"></span>
      <span class="product-preview-title">{{ preview.title }}</span>
      <span
        v-for="pill in preview.pills"
        :key="pill.label"
        class="product-preview-pill"
        :class="{ active: pill.active }"
      >
        {{ pill.label }}
      </span>
      <span v-if="preview.liveLabel" class="product-preview-live">{{ preview.liveLabel }}</span>
    </div>
    <slot />
  </div>
</template>

<script lang="ts" setup>
import type { GanttLandingPage } from './ganttLanding'

defineProps<{
  preview: GanttLandingPage['preview']
}>()
</script>

<style lang="scss" scoped>
.product-preview-frame {
  overflow: hidden;
  border: 1px solid var(--vp-c-divider);
  border-radius: 14px;
  background: var(--vp-c-bg);
  box-shadow: var(--pro-doc-shadow-lg);

  &::before {
    content: '';
    display: block;
    height: 2px;
    background: linear-gradient(90deg, transparent 0%, var(--gantt-accent) 35%, var(--gantt-accent-2) 65%, transparent 100%);
  }
}

.product-preview-toolbar {
  display: flex;
  align-items: center;
  gap: 8px;
  min-height: 42px;
  padding: 9px 14px;
  border-bottom: 1px solid var(--vp-c-divider);
  background: var(--vp-c-bg-soft);
}

.traffic {
  width: 9px;
  height: 9px;
  border-radius: 50%;
}

.red { background: #ff5f57; }
.yellow { background: #febc2e; }
.green { background: #28c840; }

.product-preview-title {
  min-width: 0;
  flex: 1;
  margin-left: 4px;
  overflow: hidden;
  color: var(--vp-c-text-3);
  font-family: var(--vp-font-family-mono);
  font-size: 11px;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.product-preview-pill,
.product-preview-live {
  padding: 3px 8px;
  border: 1px solid var(--vp-c-divider);
  border-radius: 5px;
  color: var(--vp-c-text-3);
  font-family: var(--vp-font-family-mono);
  font-size: 10px;
  white-space: nowrap;
}

.product-preview-pill.active,
.product-preview-live {
  border-color: var(--gantt-accent-border);
  color: var(--gantt-accent);
  background: var(--gantt-soft);
}

@media (max-width: 620px) {
  .product-preview-pill {
    display: none;
  }
}
</style>
