<template>
  <template v-if="isDemo">
    <button class="demo-nav-trigger" type="button" :aria-expanded="open" @click="open = true">Examples</button>
    <aside class="demo-nav" :class="{ open }" aria-label="Demo examples">
      <header><strong>Examples</strong><button type="button" aria-label="Close examples" @click="open = false">×</button></header>
      <label><span aria-hidden="true">⌕</span><span class="sr-only">Find a demo</span><input v-model="query" type="search" placeholder="Find a demo…" /></label>
      <nav>
        <section v-for="group in filteredGroups" :key="group.label"><h2>{{ group.label }}</h2><a v-for="item in group.items" :key="item.id" :href="item.href" :class="{ active: active(item.href) }" @click="open = false"><FontAwesomeSvgIcon :name="item.icon"/><span>{{ item.label }}</span><small>{{ item.plan }}</small></a></section>
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
const item = (id: DemoId, label: string, href: string, icon = 'grid') => ({ id, label, href, icon, plan: PRODUCT_CATALOG.demos[id].planId === 'open-source' ? 'Core' : PRODUCT_CATALOG.demos[id].planId === 'pro-lite' ? 'Pro' : 'Advanced' });
const groups = [
  { label: 'Start here', items: [item('planning','Project workspace','/demo/','listCheck'), item('grid-at-scale','Grid at Scale','/demo/grid-at-scale','grid')] },
  { label: 'Data grid', items: [item('ai-prompt-library','AI prompts','/demo/ai-prompts','message'), item('project-portfolio','Project portfolio','/demo/project-portfolio','chart'), item('project-tracker','Project tracker','/demo/color','listCheck'), item('tree-data','Tree data','/demo/tree-data','tree'), item('filtering','Filtering','/demo/filtering','filter'), item('infinity-scroll','Infinity Scroll','/demo/infinity-scroll','arrowDown'), item('column-collapse','Column collapse','/demo/column-collapse','columns'), item('context-menu','Context menu','/demo/context-menu','tool'), item('row-master','Master detail','/demo/row-master','rectangleList'), item('audit-history','Audit history','/demo/audit-history','edit'), item('excel','Excel','/demo/excel','table')] },
  { label: 'Planning', items: [item('gantt','Gantt','/demo/gantt','chart'), item('gantt-big-data','10K Gantt','/demo/gantt-big-data','chart'), item('gantt-horizontal-big-data','20Y Gantt','/demo/gantt-horizontal-big-data','chart'), item('event-scheduler','Scheduler','/demo/event-scheduler','calendarDays'), item('kanban','Kanban','/demo/kanban','columns'), item('kanban-performance','50K Kanban','/demo/kanban-performance','columns'), item('kanban-server-loading','100K Remote Kanban','/demo/kanban-server-loading','columns'), item('pivot','Pivot table','/demo/pivot','chartColumn')] },
];
const filteredGroups = computed(() => { const value = query.value.trim().toLowerCase(); return groups.map(group => ({ ...group, items: group.items.filter(entry => !value || entry.label.toLowerCase().includes(value)) })).filter(group => group.items.length); });
function normalize(path: string) { return path === '/demo' ? '/demo/' : path.replace(/\/$/, ''); }
function active(href: string) { const path = normalize(route.path); if (href === '/demo/') return path === '/demo/' || path === '/demo/planning'; if (href === '/demo/grid-at-scale') return path === href || path === '/demo/hr'; return path === href; }
</script>
<style scoped>
.demo-nav{position:fixed;z-index:35;top:var(--vp-nav-height,64px);bottom:0;left:0;width:196px;padding:18px 12px;border-right:1px solid var(--vp-c-divider);background:var(--vp-c-bg);font:400 13px/18px Geist,Inter,system-ui,sans-serif}.demo-nav header{display:flex;align-items:center;justify-content:space-between;padding:0 6px 12px;font-size:15px}.demo-nav header button{display:none}.demo-nav>label{display:flex;height:36px;align-items:center;gap:7px;padding:0 9px;border:1px solid var(--vp-c-divider);border-radius:6px}.demo-nav input{min-width:0;width:100%;border:0;outline:0;background:transparent;color:var(--vp-c-text-1);font:inherit}.demo-nav nav{height:calc(100% - 61px);overflow:auto;padding-top:10px}.demo-nav section{margin:0 0 13px}.demo-nav h2{margin:0 6px 5px;color:var(--vp-c-text-2);font-size:11px;font-weight:500}.demo-nav a{display:grid;grid-template-columns:18px minmax(0,1fr) auto;min-height:34px;align-items:center;gap:7px;padding:5px 7px;border-radius:6px;color:var(--vp-c-text-1);text-decoration:none}.demo-nav a:hover{background:var(--vp-c-bg-soft)}.demo-nav a.active{background:color-mix(in srgb,#008b55 10%,var(--vp-c-bg));color:#00784a}.demo-nav a :deep(.fa-svg-icon){width:14px;height:14px}.demo-nav small{color:var(--vp-c-text-3);font-size:9px}.demo-nav-trigger,.demo-nav-scrim{display:none}@media(max-width:1099px){.demo-nav{z-index:101;transform:translateX(-100%);transition:transform .16s ease}.demo-nav.open{transform:none}.demo-nav header button{display:block;border:0;background:transparent;color:inherit;font-size:20px}.demo-nav-trigger{display:block;position:fixed;z-index:34;top:calc(var(--vp-nav-height,64px) + 12px);left:14px;height:34px;padding:0 11px;border:1px solid var(--vp-c-divider);border-radius:6px;background:var(--vp-c-bg);color:var(--vp-c-text-1)}.demo-nav-scrim{display:block;position:fixed;z-index:100;inset:0;border:0;background:rgb(15 23 42/35%)}}@media(prefers-reduced-motion:reduce){.demo-nav{transition:none}}
</style>
