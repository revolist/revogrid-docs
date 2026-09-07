<template>
  <template v-if="isDemo">
    <button class="demo-nav-trigger" type="button" :aria-expanded="open" @click="open = true">Examples</button>
    <aside class="demo-nav" :class="{ open }" aria-label="Demo examples">
      <header><strong>Examples</strong><button type="button" aria-label="Close examples" @click="open = false">×</button></header>
      <label><span class="sr-only">Find a demo</span><input v-model="query" type="search" placeholder="Find a demo…" /></label>
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

/* Demo navigation polish */
.demo-nav{width:var(--demo-sidebar-width,256px);padding:16px 0 0 10px;background:color-mix(in srgb,var(--vp-c-bg-soft) 56%,var(--vp-c-bg));box-shadow:inset -1px 0 color-mix(in srgb,var(--vp-c-divider) 72%,transparent)}
.demo-nav header{height:32px;margin-right:10px;padding:0 8px 10px;font-size:14px;font-weight:600;letter-spacing:-.01em}
.demo-nav>label{position:relative;height:34px;margin-right:10px;padding:0 10px 0 30px;border-color:color-mix(in srgb,var(--vp-c-divider) 88%,transparent);background:var(--vp-c-bg);box-shadow:0 1px 2px rgb(15 23 42/3%)}
.demo-nav>label:before{position:absolute;left:11px;width:12px;height:12px;border:1.5px solid var(--vp-c-text-3);border-radius:50%;content:""}
.demo-nav>label:after{position:absolute;left:21px;top:21px;width:5px;height:1.5px;transform:rotate(45deg);background:var(--vp-c-text-3);content:""}
.demo-nav input::placeholder{color:var(--vp-c-text-3)}
.demo-nav nav{width:100%;height:calc(100% - 66px);padding:12px 10px 16px 0;scrollbar-gutter:stable;scrollbar-width:thin}
.demo-nav nav::-webkit-scrollbar{width:10px}.demo-nav nav::-webkit-scrollbar-track{background:transparent}.demo-nav nav::-webkit-scrollbar-thumb{border:3px solid transparent;border-radius:10px;background:color-mix(in srgb,var(--vp-c-text-3) 50%,transparent);background-clip:padding-box}
.demo-nav section{margin-bottom:16px}
.demo-nav h2{margin:0 8px 5px;color:var(--vp-c-text-3);font-size:10px;font-weight:600;letter-spacing:.075em;text-transform:uppercase}
.demo-nav a{grid-template-columns:16px minmax(0,1fr) auto;min-height:31px;gap:7px;padding:5px 8px;border:1px solid transparent;border-radius:6px;color:var(--vp-c-text-2);font-size:12.5px;line-height:18px}
.demo-nav a span{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}
.demo-nav a:hover{background:var(--vp-c-bg);color:var(--vp-c-text-1)}
.demo-nav a.active{border-color:color-mix(in srgb,#008b55 18%,transparent);background:color-mix(in srgb,#008b55 9%,var(--vp-c-bg));color:color-mix(in srgb,#008b55 82%,var(--vp-c-text-1));font-weight:550}
.demo-nav a :deep(.fa-svg-icon){width:13px;height:13px;opacity:.72}
.demo-nav small{padding:1px 4px;border-radius:4px;background:color-mix(in srgb,var(--vp-c-text-3) 8%,transparent);color:var(--vp-c-text-3);font-size:8px;line-height:14px;white-space:nowrap}
.demo-nav a.active small{background:color-mix(in srgb,#008b55 10%,transparent);color:inherit}

/* Stronger separation from the workspace and clearer navigation states. */
.demo-nav{border-right-color:#cbd3cf;background:#f3f5f4;box-shadow:inset -1px 0 #d7ddda}
.demo-nav header{color:#18211d;font-weight:650}
.demo-nav>label{border-color:#bbc5c0;background:#fff;box-shadow:0 1px 2px rgb(15 23 42/8%)}
.demo-nav input{color:#17211d}.demo-nav input::placeholder{color:#68736d}
.demo-nav h2{color:#5c6862;font-weight:650}
.demo-nav a{color:#45514b;font-weight:500}
.demo-nav a :deep(.fa-svg-icon){opacity:.82}
.demo-nav a:hover{background:#fff;color:#17211d}
.demo-nav a.active{border-color:#9bcbb4;background:#dff1e8;color:#075f3c;font-weight:650}
.demo-nav small{background:#e3e7e5;color:#59645f;font-weight:600}
.demo-nav a.active small{background:#c9e5d7;color:#075f3c}
.demo-nav nav::-webkit-scrollbar-thumb{background-color:#8f9994}
</style>
