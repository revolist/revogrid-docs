<template>
  <div
    class="hero-demo-menu"
    :class="{ 'can-scroll-left': canScrollLeft, 'can-scroll-right': canScrollRight }"
  >
    <div
      ref="scroller"
      role="tablist"
      :aria-label="label"
      class="hero-demo-tabs"
      @scroll="updateEdges"
    >
      <button
        v-for="(tab, index) in tabs"
        :id="`hero-tab-${tab.id}`"
        :key="tab.id"
        :ref="
          el => {
            if (el) buttons[index] = el as HTMLButtonElement
          }
        "
        v-rv-control
        type="button"
        role="tab"
        class="rv-btn rv-btn-tab"
        :aria-selected="active === tab.id"
        :aria-controls="`hero-panel-${tab.id}`"
        :tabindex="active === tab.id ? 0 : -1"
        @click="emit('update:active', tab.id)"
        @keydown="moveTab($event, index)"
      >
        <FontAwesomeSvgIcon :name="tab.icon" />{{ tab.name }}
      </button>
    </div>
  </div>
</template>
<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref, watch } from 'vue'
import { vRvControl } from '@revolist/ui/vue-control'
import FontAwesomeSvgIcon from '../FontAwesomeSvgIcon.vue'
import type { HomeV2Record } from '../homeV2Utils'
import type { HeroView } from './portfolio'
const props = defineProps<{ active: HeroView; tabs: HomeV2Record[]; label: string }>()
const emit = defineEmits<{ 'update:active': [view: HeroView] }>()
const buttons = ref<HTMLButtonElement[]>([])
const scroller = ref<HTMLElement>()
const canScrollLeft = ref(false)
const canScrollRight = ref(false)
let resizeObserver: ResizeObserver | undefined

function updateEdges() {
  const element = scroller.value
  if (!element) return
  canScrollLeft.value = element.scrollLeft > 1
  canScrollRight.value = element.scrollLeft + element.clientWidth < element.scrollWidth - 1
}
function observeSizes() {
  resizeObserver?.disconnect()
  if (scroller.value) resizeObserver?.observe(scroller.value)
  buttons.value.forEach(button => resizeObserver?.observe(button))
  updateEdges()
}
onMounted(() => {
  resizeObserver = new ResizeObserver(updateEdges)
  observeSizes()
})
watch(() => props.tabs, observeSizes, { flush: 'post' })
onBeforeUnmount(() => resizeObserver?.disconnect())

function moveTab(event: KeyboardEvent, index: number) {
  let next = index
  if (event.key === 'ArrowRight') next = (index + 1) % props.tabs.length
  else if (event.key === 'ArrowLeft') next = (index - 1 + props.tabs.length) % props.tabs.length
  else if (event.key === 'Home') next = 0
  else if (event.key === 'End') next = props.tabs.length - 1
  else return
  event.preventDefault()
  emit('update:active', props.tabs[next].id)
  buttons.value[next]?.focus()
  buttons.value[next]?.scrollIntoView({ block: 'nearest', inline: 'nearest' })
}
</script>
<style scoped>
.hero-demo-menu {
  --hero-menu-edge: #fff;
  position: relative;
  min-width: 0;
}
:global(.dark .hero-demo-menu) {
  --hero-menu-edge: #000;
}
.hero-demo-menu::before,
.hero-demo-menu::after {
  content: '';
  position: absolute;
  top: 0;
  bottom: 1px;
  width: 28px;
  z-index: 1;
  pointer-events: none;
  opacity: 0;
  transition: opacity 150ms;
}
.hero-demo-menu::before {
  left: 0;
  background: linear-gradient(to right, var(--hero-menu-edge), transparent);
}
.hero-demo-menu::after {
  right: 0;
  background: linear-gradient(to left, var(--hero-menu-edge), transparent);
}
.can-scroll-left::before,
.can-scroll-right::after {
  opacity: 1;
}
.hero-demo-tabs {
  --rv-tab-accent: var(--vp-c-brand-1);
  gap: 16px;
  display: flex;
  overflow-x: auto;
  scrollbar-width: none;
  scroll-padding-inline: 10px;
  background: var(--rg-bg);
  border-radius: 10px 10px 0 0;
  border-bottom: 1px solid var(--rg-border);
  padding: 0 10px;
}
.hero-demo-tabs::-webkit-scrollbar {
  display: none;
}
button {
  min-height: 48px;
  flex-shrink: 0;
}
:deep(svg) {
  fill: currentColor;
}
@media (prefers-reduced-motion: reduce) {
  .hero-demo-menu::before,
  .hero-demo-menu::after {
    transition: none;
  }
}
@media (max-width: 640px) {
  .hero-demo-tabs {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 4px;
    padding: 0;
    overflow: visible;
  }
  button {
    gap: 6px;
    padding: 10px 4px;
    min-width: 0;
    min-height: 44px;
    font-size: 11px;
  }
  :deep(svg) {
    width: 16px;
    height: 16px;
  }
}
</style>
