<template>
  <footer class="hero-demo-footer">
    <button v-if="hasFilters" v-rv-control class="rv-btn" type="button" @click="emit('clear')">
      {{ labels.clearFilters }}
    </button>
    <button
      v-rv-control
      class="rv-btn"
      type="button"
      :aria-pressed="largeOnly"
      @click="emit('toggle-budget')"
    >
      <FontAwesomeSvgIcon name="star" />{{ largeOnly ? labels.reset : labels.guidedAction }}
    </button>
    <span role="status">{{ visibleCount }} / {{ totalCount }} {{ labels.projectsLabel }}</span>
    <span v-if="hasFilters" class="hero-demo-filter-scope">{{ labels.sharedFilters }}</span>
    <div v-if="trialLink" class="hero-demo-package">
      <a class="rv-btn" :href="linkOf(trialLink)" @click="emit('trial')">{{ labels.trial }}</a>
    </div>
  </footer>
</template>
<script setup lang="ts">
import { vRvControl } from '@revolist/ui/vue-control'
import FontAwesomeSvgIcon from '../FontAwesomeSvgIcon.vue'
import { useHomeV2Links, type HomeV2Record } from '../homeV2Utils'
defineProps<{
  labels: HomeV2Record
  visibleCount: number
  totalCount: number
  hasFilters: boolean
  largeOnly: boolean
  trialLink?: string
}>()
const emit = defineEmits<{ clear: []; 'toggle-budget': []; trial: [] }>()
const { linkOf } = useHomeV2Links()
</script>
<style scoped>
.hero-demo-footer {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 12px;
  padding: 14px 8px 0;
  color: var(--rg-text-2);
  font-size: 11px;
}
.hero-demo-footer .rv-btn {
  height: 32px;
}
:deep(svg) {
  fill: currentColor;
}
.hero-demo-package {
  display: flex;
  align-items: center;
  margin-inline-start: auto;
}
.hero-demo-package a {
  flex-shrink: 0;
}
.hero-demo-filter-scope {
  color: var(--rg-text);
}
@media (max-width: 640px) {
  .hero-demo-footer {
    display: grid;
    grid-template-columns: minmax(0, 1fr);
    padding-inline: 0;
    gap: 8px;
  }
  .hero-demo-footer .rv-btn {
    width: 100%;
    height: 44px;
    min-height: 44px;
  }
  [role='status'] {
    order: 2;
  }
  .hero-demo-package {
    margin-inline-start: 0;
    order: 1;
  }
  .hero-demo-filter-scope {
    order: 3;
  }
}
</style>
