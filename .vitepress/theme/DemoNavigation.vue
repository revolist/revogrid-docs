<template>
  <template v-if="isDemo">
    <button class="demo-nav-trigger" type="button" :aria-expanded="open" @click="open = true">Examples</button>
    <aside class="demo-nav" :class="{ open }" aria-label="Demo examples">
      <header><button type="button" aria-label="Close examples" @click="open = false">×</button></header>
      <label><span class="sr-only">Find a demo</span><input v-model="query" type="search" placeholder="Find a demo…" /></label>
      <nav>
        <section v-for="group in filteredGroups" :key="group.label"><h2>{{ group.label }}</h2><a v-for="item in group.items" :key="item.id" :href="item.href" :class="{ active: active(item.href) }" @click="open = false"><FontAwesomeSvgIcon :name="item.icon"/><span>{{ item.label }}</span><small v-if="item.plan">{{ item.plan }}</small></a></section>
        <p v-if="!filteredGroups.length">No matching demos</p>
      </nav>
    </aside>
    <button v-if="open" class="demo-nav-scrim" type="button" aria-label="Close examples" @click="open = false" />
  </template>
</template>
<script setup lang="ts">
import { computed, ref } from 'vue';
import { useRoute } from 'vitepress';
import { PRODUCT_CATALOG, type DemoId } from '../../commercial/productCatalog';
import FontAwesomeSvgIcon from './home-v2/FontAwesomeSvgIcon.vue';
const route = useRoute(); const open = ref(false); const query = ref('');
const isDemo = computed(() => route.path === '/demo' || route.path.startsWith('/demo/'));
const item = (id: DemoId, label: string, href: string, icon = 'grid') => ({ id, label, href, icon, plan: PRODUCT_CATALOG.demos[id].planId === 'open-source' ? null : PRODUCT_CATALOG.demos[id].planId === 'pro-lite' ? 'Pro' : 'Advanced' });
const groups = [
  { label: 'Start here', items: [item('planning','Project workspace','/demo/','listCheck'), item('grid-at-scale','Performance','/demo/grid-at-scale','grid')] },
  { label: 'Data grid', items: [item('ai-prompt-library','AI prompts','/demo/ai-prompts','message'), item('project-portfolio','Project portfolio','/demo/project-portfolio','chart'), item('project-tracker','Project tracker','/demo/color','listCheck'), item('tree-data','Tree data','/demo/tree-data','tree'), item('filtering','Filtering','/demo/filtering','filter'), item('infinity-scroll','Infinity Scroll','/demo/infinity-scroll','arrowDown'), item('column-collapse','Column collapse','/demo/column-collapse','columns'), item('context-menu','Context menu','/demo/context-menu','tool'), item('row-master','Master detail','/demo/row-master','rectangleList'), item('audit-history','Audit history','/demo/audit-history','edit'), item('excel','Excel','/demo/excel','table')] },
  { label: 'Planning', items: [item('gantt','Gantt','/demo/gantt','chart'), item('gantt-big-data','10K Gantt','/demo/gantt-big-data','chart'), item('gantt-horizontal-big-data','20Y Gantt','/demo/gantt-horizontal-big-data','chart'), item('event-scheduler','Scheduler','/demo/event-scheduler','calendarDays'), item('kanban','Kanban','/demo/kanban','columns'), item('kanban-performance','50K Kanban','/demo/kanban-performance','columns'), item('kanban-server-loading','100K Remote Kanban','/demo/kanban-server-loading','columns'), item('pivot','Pivot table','/demo/pivot','chartColumn')] },
];
const filteredGroups = computed(() => { const value = query.value.trim().toLowerCase(); return groups.map(group => ({ ...group, items: group.items.filter(entry => !value || entry.label.toLowerCase().includes(value)) })).filter(group => group.items.length); });
function normalize(path: string) { const normalized = path.replace(/\/$/, ''); return normalized === '/demo' ? '/demo/' : normalized; }
function active(href: string) { const path = normalize(route.path); if (href === '/demo/') return path === '/demo/' || path === '/demo/planning'; if (href === '/demo/grid-at-scale') return path === href || path === '/demo/hr'; return path === href; }
</script>
<style scoped>
.demo-nav{position:fixed;z-index:35;top:var(--vp-nav-height,64px);bottom:0;left:0;width:var(--demo-sidebar-width,256px);padding:16px 0 0 10px;border-right:1px solid #cbd3cf;background:transparent;box-shadow:inset -1px 0 #d7ddda;font-size:13px;line-height:18px}
.demo-nav header{display:none;height:32px;margin-right:10px;padding:0;font-size:14px;font-weight:650;letter-spacing:-.01em}
.demo-nav header button{display:none}
.demo-nav>label{position:relative;display:flex;height:34px;align-items:center;gap:7px;margin-right:10px;padding:0 10px 0 30px;border:1px solid #bbc5c0;border-radius:6px;background:#fff;box-shadow:0 1px 2px rgb(15 23 42/8%)}
.demo-nav>label:before{position:absolute;left:11px;width:12px;height:12px;border:1.5px solid currentColor;border-radius:50%;content:"";opacity:.65}
.demo-nav>label:after{position:absolute;left:21px;top:21px;width:5px;height:1.5px;transform:rotate(45deg);background:currentColor;content:"";opacity:.65}
.demo-nav input{min-width:0;width:100%;border:0;outline:0;background:transparent;color:inherit;font:inherit}
.demo-nav nav{width:100%;height:calc(100% - 34px);overflow:auto;padding:12px 10px 16px 0;scrollbar-gutter:stable;scrollbar-width:thin}
.demo-nav nav::-webkit-scrollbar{width:10px}.demo-nav nav::-webkit-scrollbar-track{background:transparent}.demo-nav nav::-webkit-scrollbar-thumb{border:3px solid transparent;border-radius:10px;background:color-mix(in srgb,currentColor 50%,transparent);background-clip:padding-box}
.demo-nav section{margin:0 0 16px}
.demo-nav h2{margin:0 8px 5px;font-size:10px;font-weight:650;letter-spacing:.075em;text-transform:uppercase}
.demo-nav a{display:grid;grid-template-columns:16px minmax(0,1fr) auto;min-height:31px;align-items:center;gap:7px;padding:5px 8px;border:1px solid transparent;border-radius:6px;color:inherit;font-size:12.5px;font-weight:500;line-height:18px;text-decoration:none}
.demo-nav a span{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}
.demo-nav a:hover{background:#fff}
.demo-nav a.active{border-color:#9bcbb4;background:#dff1e8;font-weight:650}
.demo-nav a :deep(.fa-svg-icon){width:13px;height:13px;opacity:.82}
.demo-nav small{padding:1px 4px;border-radius:4px;background:#e3e7e5;font-size:8px;font-weight:600;line-height:14px;white-space:nowrap;opacity:.7}
.demo-nav a.active small{background:#c9e5d7}
.demo-nav-trigger,.demo-nav-scrim{display:none}
@media(max-width:1099px){.demo-nav{z-index:101;transform:translateX(-100%);transition:transform .16s ease}.demo-nav.open{transform:none}.demo-nav header{display:flex;justify-content:flex-end}.demo-nav header button{display:grid;width:30px;height:30px;place-items:center;border:0;background:transparent;color:inherit;font-size:20px}.demo-nav nav{height:calc(100% - 66px)}.demo-nav-trigger{display:block;position:fixed;z-index:34;top:calc(var(--vp-nav-height,64px) + 12px);left:14px;height:34px;padding:0 11px;border:1px solid var(--vp-c-divider);border-radius:6px;background:var(--vp-c-bg);color:inherit}.demo-nav-scrim{display:block;position:fixed;z-index:100;inset:0;border:0;background:rgb(15 23 42/35%)}}
@media(prefers-reduced-motion:reduce){.demo-nav{transition:none}}
</style>
