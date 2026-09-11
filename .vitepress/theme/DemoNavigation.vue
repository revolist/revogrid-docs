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
      <div v-if="!queryValue || filteredPinnedItems.length" class="demo-nav__pinned">
        <section>
          <h2>{{ pinnedGroup.label }}</h2>
          <a
            v-for="item in filteredPinnedItems"
            :key="item.id"
            :href="item.href"
            :class="{ active: active(item.href) }"
            @click="open = false"
            ><FontAwesomeSvgIcon :name="item.icon" /><span>{{ item.label }}</span
            ><small v-if="item.plan">{{ item.plan }}</small></a
          >
        </section>
      </div>
      <nav ref="featureList">
        <p v-if="!queryValue" class="demo-nav__eyebrow">Explore demos</p>
        <section v-for="group in filteredFeatureGroups" :key="group.id">
          <h2>
            <button
              type="button"
              class="demo-nav__group-toggle"
              :aria-expanded="isGroupExpanded(group)"
              :aria-controls="`demo-nav-group-${group.id}`"
              :disabled="Boolean(queryValue)"
              @click="toggleGroup(group)"
            >
              <FontAwesomeSvgIcon :name="group.icon" />
              <span>{{ group.label }}</span
              ><span aria-hidden="true" class="demo-nav__chevron" />
            </button>
          </h2>
          <div
            :id="`demo-nav-group-${group.id}`"
            v-show="isGroupExpanded(group)"
            class="demo-nav__children"
          >
            <a
              v-for="item in group.items"
              :key="item.id"
              :href="item.href"
              :class="{ active: active(item.href) }"
              @click="open = false"
              ><FontAwesomeSvgIcon :name="item.icon" /><span>{{ item.label }}</span
              ><small v-if="item.plan">{{ item.plan }}</small></a
            >
          </div>
        </section>
        <p v-if="!hasSearchMatches">No matching demos</p>
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
import { computed, nextTick, onBeforeUnmount, onMounted, ref, watch } from 'vue'
import { inBrowser, useRoute } from 'vitepress'
import { PRODUCT_CATALOG, type DemoId } from '../../commercial/productCatalog'
import { getDemoPageConfig } from './demoPageLayout'
import FontAwesomeSvgIcon from './home-v2/FontAwesomeSvgIcon.vue'
const route = useRoute()
const open = ref(false)
const query = ref('')
const featureList = ref<HTMLElement | null>(null)
const expandedGroups = ref<Set<string>>(new Set(['data-grid']))
const manuallyCollapsedGroups = ref<Set<string>>(new Set())
const isDemo = computed(() => route.path === '/demo' || route.path.startsWith('/demo/'))
const isPageScrollLocked = useScrollLock(inBrowser ? document.body : null)
const expandedGroupsStorageKey = 'revogrid-demo-navigation-expanded-groups'

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

onMounted(() => {
  try {
    const storedValue = localStorage.getItem(expandedGroupsStorageKey)
    const storedGroups = storedValue === null ? null : JSON.parse(storedValue)
    if (Array.isArray(storedGroups)) {
      expandedGroups.value = new Set(
        storedGroups.filter(value => typeof value === 'string' && featureGroupIds.has(value)),
      )
    }
  } catch {
    expandedGroups.value = new Set()
  }
  document.addEventListener('click', openFromLocalMenu, true)
  void nextTick(keepActiveDemoVisible)
})
onBeforeUnmount(() => {
  document.removeEventListener('click', openFromLocalMenu, true)
  isPageScrollLocked.value = false
})

const createItem = (
  id: DemoId,
  label: string,
  href: string,
  icon = 'grid',
  aliases: readonly string[] = [],
) => {
  const catalogDemo = PRODUCT_CATALOG.demos[id]
  const page = getDemoPageConfig(id)

  return {
    id,
    label,
    href,
    icon,
    searchTerms: [
      label,
      catalogDemo.title,
      page.title,
      id.replaceAll('-', ' '),
      ...aliases,
      ...page.featureBadges.map(feature => feature.label),
    ].map(term => term.toLowerCase()),
    plan:
      catalogDemo.planId === 'open-source'
        ? 'Free'
        : catalogDemo.planId === 'pro-lite'
          ? 'Pro'
          : 'Advanced',
  }
}
const pinnedGroup = {
  id: 'start-here',
  label: 'Start here',
  items: [
    createItem('planning', 'Project workspace', '/demo/', 'listCheck', ['planning']),
    createItem('grid-at-scale', 'Performance', '/demo/grid-at-scale', 'grid', ['HR']),
  ],
}
const featureGroups = [
  {
    id: 'data-grid',
    label: 'Data grid',
    icon: 'grid',
    items: [
      createItem('ai-prompt-library', 'AI prompts', '/demo/ai-prompts', 'message'),
      createItem('project-portfolio', 'Row Grouping', '/demo/project-portfolio', 'chart', [
        'Project portfolio',
      ]),
      createItem('tree-data', 'Tree data', '/demo/tree-data', 'tree'),
      createItem('filtering', 'Advanced filtering', '/demo/filtering', 'filter'),
      createItem('infinity-scroll', 'Server-side scrolling', '/demo/infinity-scroll', 'server'),
      createItem('column-collapse', 'Column collapse', '/demo/column-collapse', 'collapseColumns'),
      createItem('context-menu', 'Grid formatting', '/demo/context-menu', 'tool', ['Context menu']),
      createItem('row-master', 'Master detail', '/demo/row-master', 'rectangleList', [
        'Row master',
      ]),
      createItem('audit-history', 'Audit history', '/demo/audit-history', 'edit'),
      createItem('project-tracker', 'Project tracker', '/demo/color', 'listCheck', ['Color']),
      createItem('excel', 'Collaboration', '/demo/excel', 'users', ['Excel', 'Spreadsheet']),
    ],
  },
  {
    id: 'pivot',
    label: 'Pivot',
    icon: 'chartColumn',
    items: [createItem('pivot', 'Pivot table', '/demo/pivot', 'chartColumn')],
  },
  {
    id: 'gantt',
    label: 'Gantt',
    icon: 'gantt',
    items: [
      createItem('gantt', 'Gantt chart', '/demo/gantt', 'gantt'),
      createItem('gantt-big-data', '10K tasks', '/demo/gantt-big-data', 'gantt'),
      createItem(
        'gantt-horizontal-big-data',
        '20-year timeline',
        '/demo/gantt-horizontal-big-data',
        'gantt',
      ),
    ],
  },
  {
    id: 'scheduler',
    label: 'Scheduler',
    icon: 'calendarDays',
    items: [
      createItem('event-scheduler', 'Shift scheduling', '/demo/event-scheduler', 'calendarDays', [
        'Calendar',
        'Event scheduler',
      ]),
    ],
  },
  {
    id: 'kanban',
    label: 'Kanban',
    icon: 'columns',
    items: [
      createItem('kanban', 'Task board', '/demo/kanban', 'columns'),
      createItem('kanban-performance', '50K cards', '/demo/kanban-performance', 'columns'),
      createItem(
        'kanban-server-loading',
        'Server loading',
        '/demo/kanban-server-loading',
        'columns',
      ),
    ],
  },
]
const featureGroupIds = new Set(featureGroups.map(group => group.id))
const queryValue = computed(() => query.value.trim().toLowerCase())
const filteredPinnedItems = computed(() => {
  if (!queryValue.value) return pinnedGroup.items
  return pinnedGroup.items.filter(item => matchesSearch(pinnedGroup, item, queryValue.value))
})
const filteredFeatureGroups = computed(() =>
  featureGroups
    .map(group => ({
      ...group,
      items: group.items.filter(item => matchesSearch(group, item, queryValue.value)),
    }))
    .filter(group => group.items.length),
)
const hasSearchMatches = computed(
  () => filteredPinnedItems.value.length > 0 || filteredFeatureGroups.value.length > 0,
)

function matchesSearch(
  group: (typeof featureGroups)[number] | typeof pinnedGroup,
  item: ReturnType<typeof createItem>,
  value: string,
) {
  return (
    !value ||
    group.label.toLowerCase().includes(value) ||
    item.searchTerms.some(term => term.includes(value))
  )
}

function groupHasActive(group: (typeof featureGroups)[number]) {
  return group.items.some(item => active(item.href))
}

function isGroupExpanded(group: (typeof featureGroups)[number]) {
  return (
    Boolean(queryValue.value) ||
    (groupHasActive(group) && !manuallyCollapsedGroups.value.has(group.id)) ||
    expandedGroups.value.has(group.id)
  )
}

function toggleGroup(group: (typeof featureGroups)[number]) {
  if (queryValue.value) return
  const next = new Set(expandedGroups.value)
  const manuallyCollapsed = new Set(manuallyCollapsedGroups.value)
  if (isGroupExpanded(group)) {
    next.delete(group.id)
    if (groupHasActive(group)) manuallyCollapsed.add(group.id)
  } else {
    next.add(group.id)
    manuallyCollapsed.delete(group.id)
  }
  expandedGroups.value = next
  manuallyCollapsedGroups.value = manuallyCollapsed
  try {
    localStorage.setItem(expandedGroupsStorageKey, JSON.stringify([...next]))
  } catch {
    // Disclosure state remains usable when browser storage is unavailable.
  }
}

function keepActiveDemoVisible() {
  featureList.value?.querySelector<HTMLElement>('a.active')?.scrollIntoView({
    block: 'nearest',
    inline: 'nearest',
  })
}

watch(
  () => route.path,
  () => {
    manuallyCollapsedGroups.value = new Set()
    void nextTick(keepActiveDemoVisible)
  },
  { flush: 'post' },
)
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
  display: flex;
  flex-direction: column;
  padding: 16px 0 0 10px;
  border-right: 1px solid var(--vp-c-divider);
  background: var(--vp-c-bg);
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
  flex: none;
  height: 34px;
  align-items: center;
  gap: 7px;
  margin-right: 10px;
  padding: 0 10px 0 30px;
  border: 1px solid var(--vp-c-divider);
  border-radius: 6px;
  background: var(--vp-c-default-soft);
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
  flex: 1;
  min-height: 0;
  width: 100%;
  overflow: auto;
  padding: 9px 10px 16px 0;
  scrollbar-gutter: stable;
  scrollbar-width: thin;
}
.demo-nav__pinned {
  flex: none;
  margin-top: 12px;
  padding: 0 10px 13px 0;
  border-bottom: 1px solid var(--vp-c-divider);
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
  margin: 0 0 2px;
}
.demo-nav__pinned section {
  margin: 0;
}
.demo-nav h2 {
  margin: 0;
  color: var(--vp-c-text-1);
  font-size: 10px;
  font-weight: 650;
  letter-spacing: 0.075em;
  text-transform: uppercase;
}
.demo-nav__pinned h2 {
  margin: 0 8px 6px;
}
.demo-nav__eyebrow {
  margin: 0 9px 5px;
  color: var(--vp-c-text-2);
  font-size: 10px;
  font-weight: 650;
  letter-spacing: 0.075em;
  line-height: 24px;
  text-transform: uppercase;
}
.demo-nav__group-toggle {
  display: grid;
  grid-template-columns: 16px minmax(0, 1fr) auto;
  width: 100%;
  min-height: 42px;
  align-items: center;
  gap: 8px;
  padding: 7px 10px 7px 9px;
  border: 0;
  border-radius: 6px;
  background: transparent;
  color: inherit;
  cursor: pointer;
  font: inherit;
  font-size: 13px;
  font-weight: 600;
  letter-spacing: -0.01em;
  text-align: left;
  text-transform: none;
}
.demo-nav__group-toggle:hover {
  background: var(--vp-c-default-soft);
}
.demo-nav__group-toggle:disabled {
  cursor: default;
}
.demo-nav__group-toggle:focus-visible {
  outline: 2px solid var(--demo-focus-color);
  outline-offset: -2px;
}
.demo-nav__group-toggle :deep(.fa-svg-icon) {
  width: 14px;
  height: 14px;
  color: var(--vp-c-text-2);
  opacity: 0.82;
}
.demo-nav__chevron {
  width: 7px;
  height: 7px;
  flex: none;
  transform: rotate(-45deg);
  border-right: 1.5px solid currentColor;
  border-bottom: 1.5px solid currentColor;
  opacity: 0.72;
  transition: transform 0.16s ease;
}
.demo-nav__group-toggle[aria-expanded='true'] .demo-nav__chevron {
  transform: rotate(45deg);
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
.demo-nav__children {
  margin: 0 0 5px 17px;
  padding-left: 8px;
  border-left: 1px solid var(--vp-c-divider);
}
.demo-nav__children a {
  grid-template-columns: minmax(0, 1fr) auto;
  min-height: 34px;
  padding: 5px 8px;
  font-size: 12px;
  line-height: 17px;
}
.demo-nav__children a :deep(.fa-svg-icon) {
  display: none;
}
.demo-nav nav > p:not(.demo-nav__eyebrow) {
  margin: 8px 9px;
  color: var(--vp-c-text-2);
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
  .demo-nav,
  .demo-nav__chevron {
    transition: none;
  }
}
</style>
