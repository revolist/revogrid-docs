<script setup lang="ts">
import { computed, nextTick, ref, watch } from 'vue'
import { onClickOutside } from '@vueuse/core'
import { useRoute, withBase } from 'vitepress'
import FontAwesomeSvgIcon from './home-v2/FontAwesomeSvgIcon.vue'
import { useHomeLink } from './useHomeLink'

type NavLink = { text: string; link: string; activeMatch?: string }
type NavGroup = { text: string; items: NavLink[] }
const props = defineProps<{
  text: string
  items: (NavLink | NavGroup)[]
  screenMenu?: boolean
}>()
const route = useRoute()
const { homeLink } = useHomeLink()
const root = ref<HTMLElement>()
const trigger = ref<HTMLButtonElement>()
const panel = ref<HTMLElement>()
const open = ref(false)
let openedByHover = false
const products = computed(() => props.items.filter((item): item is NavLink => 'link' in item))
const frameworks = computed(() => props.items.find((item): item is NavGroup => 'items' in item))
const details: Record<string, { icon: string; color: string; description: string }> = {
  '/excel-data-grid': {
    icon: 'grid',
    color: '#16865f',
    description: 'Fast, flexible spreadsheets for your app.',
  },
  '/pivot': {
    icon: 'pivot',
    color: '#8950c5',
    description: 'Turn complex data into clear insights.',
  },
  '/charts/': {
    icon: 'trend',
    color: '#3568cf',
    description: 'Bring your data to life with interactive charts.',
  },
  '/kanban': {
    icon: 'columns',
    color: '#00889c',
    description: 'Organize work and keep your team moving.',
  },
  '/gantt': {
    icon: 'gantt',
    color: '#c95112',
    description: 'Plan projects, dependencies, and timelines.',
  },
  '/jsscheduler': {
    icon: 'calendarDays',
    color: '#bc3481',
    description: 'Schedule events, teams, and resources.',
  },
}
const frameworkIcons: Record<string, string> = {
  React: '/react.svg',
  Vue: '/vuejs.svg',
  Angular: '/angular.svg',
  Svelte: '/svelte.svg',
}
const href = (link: string) => withBase(homeLink(link))
const active = (item: NavLink) =>
  new RegExp(item.activeMatch ?? `^${item.link}/?$`).test(route.path)

onClickOutside(root, () => (open.value = false))
watch(
  () => route.path,
  () => (open.value = false),
)

function enter() {
  if (props.screenMenu) return
  openedByHover = !open.value
  open.value = true
}
function toggle() {
  open.value = openedByHover ? true : !open.value
  openedByHover = false
}
function leave() {
  if (!props.screenMenu && !root.value?.contains(document.activeElement)) open.value = false
}
function focusOut(event: FocusEvent) {
  if (!root.value?.contains(event.relatedTarget as Node | null)) open.value = false
}
function escape() {
  if (!open.value) return
  open.value = false
  trigger.value?.focus()
}
async function focusFirst() {
  open.value = true
  await nextTick()
  panel.value?.querySelector<HTMLAnchorElement>('a')?.focus()
}
</script>

<template>
  <div
    ref="root"
    class="product-dropdown"
    :class="{ 'is-open': open, 'is-screen': screenMenu }"
    @mouseenter="enter"
    @mouseleave="leave"
    @focusout="focusOut"
    @keydown.esc.stop.prevent="escape"
  >
    <button
      ref="trigger"
      class="product-dropdown__trigger"
      type="button"
      :aria-expanded="open"
      :aria-controls="screenMenu ? 'product-menu-mobile' : 'product-menu-desktop'"
      @click="toggle"
      @keydown.down.prevent="focusFirst"
    >
      {{ text }}<span class="product-dropdown__chevron" aria-hidden="true" />
    </button>
    <div
      v-show="open"
      :id="screenMenu ? 'product-menu-mobile' : 'product-menu-desktop'"
      ref="panel"
      class="product-dropdown__panel"
    >
      <div class="product-dropdown__products">
        <a
          v-for="product in products"
          :key="product.link"
          class="product-dropdown__card"
          :href="href(product.link)"
          :aria-current="active(product) ? 'page' : undefined"
          :style="{ '--product-color': details[product.link]?.color }"
          @click="open = false"
        >
          <span class="product-dropdown__icon"
            ><FontAwesomeSvgIcon :name="details[product.link]?.icon ?? 'grid'"
          /></span>
          <span class="product-dropdown__copy">
            <span class="product-dropdown__title">{{ product.text }}</span>
            <span class="product-dropdown__description">{{
              details[product.link]?.description
            }}</span>
          </span>
          <span class="product-dropdown__arrow" aria-hidden="true">↗</span>
        </a>
      </div>
      <div v-if="frameworks" class="product-dropdown__footer">
        <span class="product-dropdown__footer-label">{{ frameworks.text }}</span>
        <div class="product-dropdown__frameworks">
          <a
            v-for="framework in frameworks.items"
            :key="framework.link"
            :href="href(framework.link)"
            :aria-current="active(framework) ? 'page' : undefined"
            @click="open = false"
            ><img :src="withBase(frameworkIcons[framework.text])" alt="" width="18" height="18" />{{
              framework.text
            }}</a
          >
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.product-dropdown {
  position: relative;
  height: var(--vp-nav-height);
  display: flex;
  align-items: center;
}
.product-dropdown__trigger {
  display: flex;
  align-items: center;
  gap: 7px;
  padding: 0 12px;
  height: 100%;
  color: var(--vp-c-text-1);
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
}
.product-dropdown__chevron {
  width: 7px;
  height: 7px;
  border-right: 1.5px solid currentColor;
  border-bottom: 1.5px solid currentColor;
  transform: translateY(-2px) rotate(45deg);
  transition: transform 160ms;
}
.is-open .product-dropdown__chevron {
  transform: translateY(2px) rotate(225deg);
}
.product-dropdown__panel {
  position: fixed;
  top: calc(var(--vp-nav-height) - 8px);
  left: 50%;
  transform: translateX(-50%);
  white-space: normal;
  width: min(680px, calc(100vw - 48px));
  overflow: hidden;
  border: 1px solid var(--vp-c-divider);
  border-radius: 18px;
  background: var(--vp-c-bg-elv);
  box-shadow: var(--vp-shadow-3);
}
.product-dropdown__products {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 2px 6px;
  padding: 12px;
}
.product-dropdown__card {
  display: flex;
  align-items: flex-start;
  gap: 14px;
  padding: 10px 14px;
  border-radius: 11px;
  transition: background 160ms;
}
.product-dropdown__icon {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  width: 38px;
  height: 38px;
  border-radius: 10px;
  color: var(--product-color);
  background: color-mix(in srgb, var(--product-color) 10%, var(--vp-c-bg-elv));
  :deep(.fa-svg-icon) {
    width: 22px;
    height: 22px;
  }
  :deep(svg) {
    fill: currentColor;
    opacity: 1;
  }
}
.product-dropdown__copy {
  min-width: 0;
  overflow-wrap: anywhere;
  display: grid;
  gap: 5px;
}
.product-dropdown__title {
  font-size: 15px;
  font-weight: 600;
  line-height: 22px;
  color: var(--vp-c-text-1);
}
.product-dropdown__description {
  font-size: 13px;
  line-height: 20px;
  color: var(--vp-c-text-2);
}
.product-dropdown__arrow {
  flex-shrink: 0;
  margin-left: auto;
  color: var(--vp-c-text-3);
  opacity: 0;
  transition: opacity 160ms;
}
.product-dropdown__card:hover,
.product-dropdown__card:focus-visible {
  background: var(--vp-c-default-soft);
}
.product-dropdown__card:hover .product-dropdown__arrow,
.product-dropdown__card:focus-visible .product-dropdown__arrow {
  flex-shrink: 0;
  opacity: 1;
}
.product-dropdown__footer {
  display: flex;
  align-items: center;
  gap: 24px;
  padding: 18px 30px;
  border-top: 1px solid var(--vp-c-divider);
}
.product-dropdown__footer-label {
  font-size: 12px;
  font-weight: 600;
  color: var(--vp-c-text-2);
}
.product-dropdown__frameworks {
  display: flex;
  flex: 1;
  flex-wrap: wrap;
  min-width: 0;
  justify-content: space-between;
  gap: 12px;
  a {
    display: flex;
    align-items: center;
    gap: 6px;
    font-size: 13px;
    font-weight: 500;
    border-radius: 5px;
  }
  span {
    color: var(--vp-c-text-3);
  }
}
a[aria-current='page'],
.product-dropdown__trigger:hover,
.is-open .product-dropdown__trigger,
.product-dropdown__frameworks a:hover {
  color: var(--vp-c-brand-1);
}
a:focus-visible,
button:focus-visible {
  outline: 2px solid var(--vp-c-brand-1);
  outline-offset: -2px;
  border-radius: 6px;
}
.is-screen {
  display: block;
  height: auto;
  border-bottom: 1px solid var(--vp-c-divider);
  .product-dropdown__trigger {
    width: 100%;
    height: 48px;
    padding: 0;
    justify-content: space-between;
  }
  .product-dropdown__panel {
    position: static;
    transform: none;
    width: 100%;
    margin-bottom: 16px;
    box-shadow: none;
    border-radius: 12px;
  }
  .product-dropdown__products {
    grid-template-columns: 1fr;
    padding: 8px;
    gap: 0;
  }
  .product-dropdown__card {
    padding: 12px 8px;
  }
  .product-dropdown__footer {
    flex-direction: column;
    align-items: stretch;
    gap: 10px;
    padding: 16px;
  }
}
@media (prefers-reduced-motion: reduce) {
  .product-dropdown * {
    transition: none;
  }
}
</style>
