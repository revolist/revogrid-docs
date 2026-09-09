<template>
  <template v-if="isDemo">
    <aside class="demo-nav" :class="{ open }" aria-label="Demo examples">
      <header>
        <button type="button" aria-label="Close examples" @click="open = false">×</button>
      </header>
      <label
        ><span class="sr-only">Find a demo</span
        ><input v-model="query" type="search" placeholder="Find a demo…"
      /></label>
      <nav>
        <section v-for="group in filteredGroups" :key="group.label">
          <h2>{{ group.label }}</h2>
          <a
            v-for="item in group.items"
            :key="item.id"
            :href="item.href"
            :class="{ active: active(item.href) }"
            @click="open = false"
            ><FontAwesomeSvgIcon :name="item.icon" /><span>{{ item.label }}</span
            ><small v-if="item.plan">{{ item.plan }}</small></a
          >
        </section>
        <p v-if="!filteredGroups.length">No matching demos</p>
      </nav>
    </aside>
    <button
      v-if="open"
      class="demo-nav-scrim"
      type="button"
      aria-label="Close examples"
      @click="open = false"
    />
  </template>
</template>
<script setup lang="ts">
import { useScrollLock } from '@vueuse/core'
import { computed, onBeforeUnmount, onMounted, ref, watch } from 'vue'
import { inBrowser, useRoute } from 'vitepress'
import { PRODUCT_CATALOG, type DemoId } from '../../commercial/productCatalog'
import FontAwesomeSvgIcon from './home-v2/FontAwesomeSvgIcon.vue'
const route = useRoute()
const open = ref(false)
const query = ref('')
const isDemo = computed(() => route.path === '/demo' || route.path.startsWith('/demo/'))
const isPageScrollLocked = useScrollLock(inBrowser ? document.body : null)

watch(open, value => (isPageScrollLocked.value = value))
watch(isDemo, value => {
  if (!value) open.value = false
})

function openFromLocalMenu(event: MouseEvent) {
  const target = event.target
  if (!isDemo.value || !(target instanceof Element) || !target.closest('.VPLocalNav .menu')) return

  event.preventDefault()
  event.stopImmediatePropagation()
  open.value = true
}

onMounted(() => document.addEventListener('click', openFromLocalMenu, true))
onBeforeUnmount(() => {
  document.removeEventListener('click', openFromLocalMenu, true)
  isPageScrollLocked.value = false
})

const item = (id: DemoId, label: string, href: string, icon = 'grid') => ({
  id,
  label,
  href,
  icon,
  plan:
    PRODUCT_CATALOG.demos[id].planId === 'open-source'
      ? null
      : PRODUCT_CATALOG.demos[id].planId === 'pro-lite'
        ? 'Pro'
        : 'Advanced',
})
const groups = [
  {
    label: 'Start here',
    items: [
      item('planning', 'Project workspace', '/demo/', 'listCheck'),
      item('grid-at-scale', 'Performance', '/demo/grid-at-scale', 'grid'),
    ],
  },
  {
    label: 'Data grid',
    items: [
      item('ai-prompt-library', 'AI prompts', '/demo/ai-prompts', 'message'),
      item('project-portfolio', 'Row Grouping', '/demo/project-portfolio', 'chart'),
      item('project-tracker', 'Project tracker', '/demo/color', 'listCheck'),
      item('tree-data', 'Tree data', '/demo/tree-data', 'tree'),
      item('filtering', 'Advanced filtering', '/demo/filtering', 'filter'),
      item('infinity-scroll', 'Server-side scrolling', '/demo/infinity-scroll', 'server'),
      item('column-collapse', 'Column collapse', '/demo/column-collapse', 'collapseColumns'),
      item('context-menu', 'Grid formatting', '/demo/context-menu', 'tool'),
      item('row-master', 'Master detail', '/demo/row-master', 'rectangleList'),
      item('audit-history', 'Audit history', '/demo/audit-history', 'edit'),
      item('excel', 'Collaboration', '/demo/excel', 'users'),
    ],
  },
  { label: 'Pivot table', items: [item('pivot', 'Pivot table', '/demo/pivot', 'chartColumn')] },
  {
    label: 'Gantt',
    items: [
      item('gantt', 'Gantt chart', '/demo/gantt', 'gantt'),
      item('gantt-big-data', '10K tasks', '/demo/gantt-big-data', 'gantt'),
      item(
        'gantt-horizontal-big-data',
        '20-year timeline',
        '/demo/gantt-horizontal-big-data',
        'gantt',
      ),
    ],
  },
  {
    label: 'Scheduler',
    items: [item('event-scheduler', 'Shift scheduling', '/demo/event-scheduler', 'calendarDays')],
  },
  {
    label: 'Kanban',
    items: [
      item('kanban', 'Task board', '/demo/kanban', 'columns'),
      item('kanban-performance', '50K cards', '/demo/kanban-performance', 'columns'),
      item('kanban-server-loading', 'Server loading', '/demo/kanban-server-loading', 'columns'),
    ],
  },
]
const filteredGroups = computed(() => {
  const value = query.value.trim().toLowerCase()
  return groups
    .map(group => ({
      ...group,
      items: group.items.filter(entry => !value || entry.label.toLowerCase().includes(value)),
    }))
    .filter(group => group.items.length)
})
function normalize(path: string) {
  const normalized = path.replace(/\/$/, '')
  return normalized === '/demo' ? '/demo/' : normalized
}
function active(href: string) {
  const path = normalize(route.path)
  if (href === '/demo/') return path === '/demo/' || path === '/demo/planning'
  if (href === '/demo/grid-at-scale') return path === href || path === '/demo/hr'
  return path === href
}
</script>
<style scoped>
.demo-nav {
  position: fixed;
  z-index: 35;
  top: var(--vp-nav-height, 64px);
  bottom: 0;
  left: 0;
  width: var(--demo-sidebar-width, 256px);
  padding: 16px 0 0 10px;
  border-right: 1px solid var(--vp-c-divider);
  background: transparent;
  color: var(--vp-c-neutral);
  font-size: 13px;
  line-height: 21px;
}
.demo-nav header {
  display: none;
  height: 32px;
  margin-right: 10px;
  padding: 0;
  font-size: 14px;
  font-weight: 650;
  letter-spacing: -0.01em;
}
.demo-nav header button {
  display: none;
}
.demo-nav > label {
  position: relative;
  display: flex;
  height: 34px;
  align-items: center;
  gap: 7px;
  margin-right: 10px;
  padding: 0 10px 0 30px;
  border: 1px solid var(--vp-c-divider);
  border-radius: 6px;
  background: var(--vp-c-bg);
}
.demo-nav > label:focus-within {
  border-color: var(--demo-focus-color);
  outline: 0;
  box-shadow: 0 0 0 3px var(--demo-focus-ring);
}
.demo-nav > label:before {
  position: absolute;
  left: 11px;
  width: 12px;
  height: 12px;
  border: 1.5px solid currentColor;
  border-radius: 50%;
  content: '';
  opacity: 0.65;
}
.demo-nav > label:after {
  position: absolute;
  left: 21px;
  top: 21px;
  width: 5px;
  height: 1.5px;
  transform: rotate(45deg);
  background: currentColor;
  content: '';
  opacity: 0.65;
}
.demo-nav input {
  min-width: 0;
  width: 100%;
  border: 0;
  outline: 0;
  background: transparent;
  color: inherit;
  font: inherit;
}
.demo-nav .sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}
.demo-nav nav {
  width: 100%;
  height: calc(100% - 34px);
  overflow: auto;
  padding: 12px 10px 16px 0;
  scrollbar-gutter: stable;
  scrollbar-width: thin;
}
.demo-nav nav::-webkit-scrollbar {
  width: 10px;
}
.demo-nav nav::-webkit-scrollbar-track {
  background: transparent;
}
.demo-nav nav::-webkit-scrollbar-thumb {
  border: 3px solid transparent;
  border-radius: 10px;
  background: color-mix(in srgb, currentColor 50%, transparent);
  background-clip: padding-box;
}
.demo-nav section {
  margin: 0 0 16px;
}
.demo-nav h2 {
  margin: 0 8px 5px;
  color: var(--vp-c-text-1);
  font-size: 10px;
  font-weight: 650;
  letter-spacing: 0.075em;
  text-transform: uppercase;
}
.demo-nav a {
  display: grid;
  grid-template-columns: 16px minmax(0, 1fr) auto;
  min-height: 38px;
  align-items: center;
  gap: 7px;
  padding: 6px 9px;
  border: 0;
  border-radius: 6px;
  color: inherit;
  line-height: 18px;
  text-decoration: none;
}
.demo-nav a span {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.demo-nav a:hover {
  background: var(--vp-c-default-soft);
}
.demo-nav a.active {
  background: var(--vp-c-brand-soft);
  font-weight: 650;
}
.demo-nav a :deep(.fa-svg-icon) {
  width: 13px;
  height: 13px;
  color: var(--vp-c-text-1);
  opacity: 0.82;
}
.demo-nav small {
  padding: 1px 4px;
  border-radius: 4px;
  background: var(--vp-c-default-soft);
  font-size: 8px;
  font-weight: 600;
  line-height: 14px;
  white-space: nowrap;
  opacity: 0.7;
}
.demo-nav a.active small {
  background: var(--vp-c-brand-soft);
}
.demo-nav-scrim {
  display: none;
}
@media (max-width: 1099px) {
  .demo-nav {
    z-index: 101;
    top: 0;
    width: 100vw;
    transform: translateX(-100%);
    transition: transform 0.16s ease;
    background: var(--vp-c-bg);
  }
  .demo-nav.open {
    transform: none;
  }
  .demo-nav header {
    display: flex;
    justify-content: flex-end;
  }
  .demo-nav header button {
    display: grid;
    width: 30px;
    height: 30px;
    place-items: center;
    border: 0;
    background: transparent;
    color: inherit;
    font-size: 20px;
  }
  .demo-nav nav {
    height: calc(100% - 66px);
  }
  .demo-nav-scrim {
    display: block;
    position: fixed;
    z-index: 100;
    inset: 0;
    border: 0;
    background: rgb(15 23 42/35%);
  }
}
@media (prefers-reduced-motion: reduce) {
  .demo-nav {
    transition: none;
  }
}
</style>
