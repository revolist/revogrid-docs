<script setup lang="ts">
import { computed, defineAsyncComponent } from 'vue'
import { useRoute } from 'vitepress'
import ecommerceCsv from '@revolist/revogrid-examples/components/sys-data/ecommerce.data.csv?raw'
import ecommerceColumnsRaw from '@revolist/revogrid-examples/components/sys-data/ecommerce.columns.ts?raw'
import ecommercePivotRaw from '@revolist/revogrid-examples/components/sys-data/ecommerce.pivot.ts?raw'
import ganttProjectRaw from '@revolist/revogrid-examples/components/gantt/gantt-project-data.ts?raw'
import colorDataRaw from '@revolist/revogrid-examples/components/showcase-color/color.data.ts?raw'
import hrDataRaw from '@revolist/revogrid-examples/components/sys-data/hr.data.ts?raw'
import hrColumnsRaw from '@revolist/revogrid-examples/components/sys-data/hr.columns.ts?raw'

type ShowcaseSlug = 'hr' | 'ecommerce' | 'color' | 'pivot' | 'gantt'
type ShowcaseBadge = 'Core' | 'Pro' | 'Enterprise'
type ShowcaseIcon = 'scale' | 'users' | 'kanban' | 'table' | 'gantt'
type ShowcasePreview = 'scale' | 'customer' | 'tracker' | 'pivot' | 'gantt'

type ShowcaseEntry = {
    slug: ShowcaseSlug
    label: string
    title: string
    subtitle: string
    meta: string
    badge: ShowcaseBadge
    icon: ShowcaseIcon
    preview: ShowcasePreview
}

const props = defineProps<{
    active?: ShowcaseSlug
}>()

const route = useRoute()

const ecommerceRowsCount = ecommerceCsv.trim().split(/\r?\n/).filter(Boolean).length - 1
const ecommerceColumnCount = (ecommerceColumnsRaw.match(/prop:\s*['"`](?!_checkbox)[^'"`]+['"`]/g) ?? []).length
const showcasePivotBlock = ecommercePivotRaw.match(/export const ECOMMERCE_SHOWCASE_PIVOT[\s\S]*?filters:/)?.[0] ?? ''
const pivotDimensionCount = new Set(
    (showcasePivotBlock.match(/(?:rows|columns):\s*\[([^\]]*)\]/g) ?? [])
        .flatMap((entry) => entry.match(/['"`]([^'"`]+)['"`]/g) ?? [])
        .map((entry) => entry.slice(1, -1)),
).size
const showcaseTasksBlock = ganttProjectRaw.match(/export const SHOWCASE_TASKS[\s\S]*?];/)?.[0] ?? ''
const ganttTaskCount = (showcaseTasksBlock.match(/projectId:\s*SHOWCASE_PROJECT_ID/g) ?? []).length
const ganttDates = (showcaseTasksBlock.match(/(?:startDate|endDate):\s*['"`]([^'"`]+)['"`]/g) ?? [])
    .map((entry) => new Date(entry.split(/['"`]/)[1]).getTime())
    .filter(Number.isFinite)
const ganttWeeks = Math.max(1, Math.ceil((Math.max(...ganttDates) - Math.min(...ganttDates)) / (1000 * 60 * 60 * 24 * 7)))
const trackerTaskCount = (colorDataRaw.match(/task:\s*['"`]/g) ?? []).length
const trackerSectionCount = new Set(
    (colorDataRaw.match(/week:\s*WEEK_DATES\.([a-zA-Z]+)/g) ?? []).map((entry) => entry.split('.').at(-1)),
).size
const hrMaxRows = Math.max(
    ...(hrDataRaw.match(/value:\s*(\d+)/g) ?? []).map((entry) => Number(entry.match(/\d+/)?.[0] ?? 0)),
)
const hrColumnCount = Number(hrColumnsRaw.match(/getExtraHRColumns\((\d+)\)/)?.[1] ?? 100)

const showcases: ShowcaseEntry[] = [
    {
        slug: 'hr',
        label: 'Grid at Scale',
        title: 'Grid at Scale',
        subtitle: 'High-volume HR records with virtualized rows, many columns, and custom renderers.',
        meta: `${new Intl.NumberFormat('en-US', { notation: 'compact', maximumFractionDigits: 0 }).format(hrMaxRows)} rows · ${hrColumnCount} columns`,
        badge: 'Core',
        icon: 'scale',
        preview: 'scale',
    },
    {
        slug: 'ecommerce',
        label: 'Customer Analytics',
        title: 'Customer Analytics',
        subtitle: 'Inline visualizations, ratings, and segmentation across customers.',
        meta: `${ecommerceRowsCount} customers · ${ecommerceColumnCount} columns`,
        badge: 'Pro',
        icon: 'users',
        preview: 'customer',
    },
    {
        slug: 'color',
        label: 'Project Tracker',
        title: 'Project Tracker',
        subtitle: 'ERP-style task tracking with priorities, progress, and tags.',
        meta: `${trackerTaskCount} tasks · ${trackerSectionCount} sections`,
        badge: 'Pro',
        icon: 'kanban',
        preview: 'tracker',
    },
    {
        slug: 'pivot',
        label: 'Pivot',
        title: 'Pivot Analytics',
        subtitle: 'Multidimensional summaries with row, column, and value fields.',
        meta: `${ecommerceRowsCount} rows · ${pivotDimensionCount} dimensions`,
        badge: 'Enterprise',
        icon: 'table',
        preview: 'pivot',
    },
    {
        slug: 'gantt',
        label: 'Gantt',
        title: 'Gantt Planning',
        subtitle: 'Interactive scheduling with dependencies and critical path support.',
        meta: `${ganttTaskCount} tasks · ${ganttWeeks} weeks`,
        badge: 'Enterprise',
        icon: 'gantt',
        preview: 'gantt',
    },
]

const demoComponents = {
    hr: defineAsyncComponent(() => import('./DemoHr.vue')),
    ecommerce: defineAsyncComponent(() => import('./DemoEcommerce.vue')),
    color: defineAsyncComponent(() => import('./DemoColor.vue')),
    pivot: defineAsyncComponent(() => import('./DemoPivot.vue')),
    gantt: defineAsyncComponent(() => import('./DemoGantt.vue')),
} satisfies Record<ShowcaseSlug, ReturnType<typeof defineAsyncComponent>>

const activeSlug = computed<ShowcaseSlug>(() => {
    if (props.active) {
        return props.active
    }

    const path = route.path.replace(/\/$/, '')
    const slug = path.split('/').pop()

    return isShowcaseSlug(slug) ? slug : 'hr'
})

const activeShowcase = computed(() => showcases.find((item) => item.slug === activeSlug.value) ?? showcases[0])
const activeDemoComponent = computed(() => demoComponents[activeShowcase.value.slug])

function isShowcaseSlug(value: string | undefined): value is ShowcaseSlug {
    return value === 'hr' || value === 'ecommerce' || value === 'color' || value === 'pivot' || value === 'gantt'
}

function showcaseHref(slug: ShowcaseSlug) {
    return slug === 'hr' ? '/demo/hr' : `/demo/${slug}`
}
</script>

<template>
    <div class="docs-demo-showcase">
        <aside class="docs-demo-showcase__sidebar" aria-label="Use case navigation">
            <div class="docs-demo-showcase__sidebar-header">
                <span class="docs-demo-showcase__eyebrow">Use cases</span>
                <span class="docs-demo-showcase__count">{{ String(showcases.length).padStart(2, '0') }}</span>
            </div>

            <nav class="docs-demo-showcase__nav">
                <a
                    v-for="(item, index) in showcases"
                    :key="item.slug"
                    class="docs-demo-showcase__nav-card"
                    :class="{ 'is-active': item.slug === activeShowcase.slug }"
                    :href="showcaseHref(item.slug)"
                    :aria-current="item.slug === activeShowcase.slug ? 'page' : undefined"
                >
                    <span class="docs-demo-showcase__thumb" aria-hidden="true">
                        <span class="docs-demo-showcase__num">{{ String(index + 1).padStart(2, '0') }}</span>
                        <span class="docs-demo-showcase__icon">
                            <svg v-if="item.icon === 'table'" viewBox="0 0 24 24"><path d="M4 5h16v14H4z" /><path d="M4 10h16M9 5v14M15 5v14" /></svg>
                            <svg v-else-if="item.icon === 'gantt'" viewBox="0 0 24 24"><path d="M4 7h4M4 12h8M4 17h12M16 12h4" /></svg>
                            <svg v-else-if="item.icon === 'users'" viewBox="0 0 24 24"><path d="M16 20v-2a4 4 0 0 0-8 0v2" /><circle cx="12" cy="8" r="4" /><path d="M22 20v-2a4 4 0 0 0-3-3.87M16 4.13a4 4 0 0 1 0 7.75" /></svg>
                            <svg v-else-if="item.icon === 'kanban'" viewBox="0 0 24 24"><path d="M6 5v14M12 5v9M18 5v6" /></svg>
                            <svg v-else viewBox="0 0 24 24"><path d="M4 7h16M4 12h16M4 17h16" /><path d="M8 5v14M16 5v14" /></svg>
                        </span>

                        <svg class="docs-demo-showcase__preview" :class="`docs-demo-showcase__preview--${item.preview}`" viewBox="0 0 260 56" preserveAspectRatio="none">
                            <line x1="0" y1="18" x2="260" y2="18" />
                            <line x1="0" y1="36" x2="260" y2="36" />
                            <line x1="60" y1="0" x2="60" y2="56" />
                            <line x1="130" y1="0" x2="130" y2="56" />
                            <line x1="200" y1="0" x2="200" y2="56" />

                            <template v-if="item.preview === 'pivot'">
                                <rect x="14" y="28" width="42" height="4" rx="2" />
                                <rect x="72" y="28" width="42" height="4" rx="2" />
                                <rect x="146" y="28" width="42" height="4" rx="2" />
                                <rect x="14" y="40" width="66" height="4" rx="2" />
                                <rect x="92" y="40" width="48" height="4" rx="2" />
                                <rect x="154" y="40" width="48" height="4" rx="2" />
                            </template>
                            <template v-else-if="item.preview === 'gantt'">
                                <rect x="14" y="18" width="58" height="5" rx="2" />
                                <rect x="58" y="30" width="76" height="5" rx="2" />
                                <rect x="112" y="42" width="98" height="5" rx="2" />
                                <rect x="178" y="51" width="72" height="4" rx="2" />
                            </template>
                            <template v-else-if="item.preview === 'customer'">
                                <rect x="16" y="32" width="8" height="18" rx="2" />
                                <rect x="34" y="22" width="8" height="28" rx="2" />
                                <rect x="52" y="28" width="8" height="22" rx="2" />
                                <rect x="70" y="18" width="8" height="32" rx="2" />
                                <rect x="88" y="24" width="8" height="26" rx="2" />
                                <circle cx="158" cy="34" r="5" />
                                <circle cx="174" cy="34" r="5" />
                                <circle cx="190" cy="34" r="5" />
                                <rect x="220" y="28" width="28" height="3" rx="2" />
                                <rect x="210" y="38" width="38" height="3" rx="2" />
                            </template>
                            <template v-else-if="item.preview === 'tracker'">
                                <rect x="14" y="22" width="36" height="8" rx="4" />
                                <rect x="56" y="22" width="48" height="8" rx="4" />
                                <rect x="110" y="22" width="42" height="8" rx="4" />
                                <rect x="158" y="22" width="38" height="8" rx="4" />
                                <rect x="14" y="36" width="48" height="7" rx="4" />
                                <rect x="68" y="36" width="40" height="7" rx="4" />
                                <rect x="114" y="36" width="44" height="7" rx="4" />
                                <rect x="210" y="30" width="36" height="4" rx="2" />
                                <rect x="210" y="42" width="54" height="4" rx="2" />
                            </template>
                            <template v-else>
                                <rect x="14" y="18" width="34" height="5" rx="2" />
                                <rect x="60" y="18" width="26" height="5" rx="2" />
                                <rect x="104" y="18" width="32" height="5" rx="2" />
                                <rect x="150" y="18" width="24" height="5" rx="2" />
                                <rect x="194" y="18" width="36" height="5" rx="2" />
                                <rect x="14" y="31" width="48" height="5" rx="2" />
                                <rect x="74" y="31" width="34" height="5" rx="2" />
                                <rect x="120" y="31" width="46" height="5" rx="2" />
                                <rect x="178" y="31" width="28" height="5" rx="2" />
                                <rect x="218" y="31" width="34" height="5" rx="2" />
                                <rect x="14" y="44" width="30" height="5" rx="2" />
                                <rect x="56" y="44" width="44" height="5" rx="2" />
                                <rect x="112" y="44" width="30" height="5" rx="2" />
                                <rect x="154" y="44" width="50" height="5" rx="2" />
                            </template>
                        </svg>
                    </span>
                    <span class="docs-demo-showcase__nav-card-body">
                        <span class="docs-demo-showcase__title-row">
                            <span class="docs-demo-showcase__nav-title">{{ item.label }}</span>
                            <span class="docs-demo-showcase__badge" :class="`docs-demo-showcase__badge--${item.badge.toLowerCase()}`">{{ item.badge }}</span>
                        </span>
                        <span class="docs-demo-showcase__meta">{{ item.meta }}</span>
                    </span>
                </a>
            </nav>
        </aside>

        <main class="docs-demo-showcase__main">
            <header class="docs-demo-showcase__head">
                <div>
                    <div class="docs-demo-showcase__page-title-row">
                        <h1>{{ activeShowcase.title }}</h1>
                        <span class="docs-demo-showcase__badge docs-demo-showcase__tier-badge" :class="`docs-demo-showcase__badge--${activeShowcase.badge.toLowerCase()}`">
                            {{ activeShowcase.badge }}
                        </span>
                    </div>
                    <p>{{ activeShowcase.subtitle }}</p>
                </div>
            </header>

            <section class="docs-demo-showcase__workspace">
                <component :is="activeDemoComponent" :title="activeShowcase.title" min-height="100%" />
            </section>
        </main>
    </div>
</template>

<style scoped>
:global(.demo-page-class .VPDoc),
:global(.demo-page-class .VPDoc .container),
:global(.demo-page-class .VPDoc .content),
:global(.demo-page-class .VPDoc .content-container),
:global(.demo-page-class .VPDoc main) {
    width: 100% !important;
    max-width: none !important;
    margin: 0 !important;
    padding: 0 !important;
}

:global(.demo-page-class .vp-doc) {
    width: 100%;
    max-width: none;
}

:global(body:has(.docs-demo-showcase)) {
    background: var(--docs-demo-bg);
    overflow: hidden;
}

.docs-demo-showcase {
    --docs-demo-brand-50: #eef2ff;
    --docs-demo-brand-100: #e0e7ff;
    --docs-demo-brand-500: #6366f1;
    --docs-demo-brand-600: #4f46e5;
    --docs-demo-brand-700: #4338ca;
    --docs-demo-bg: #fafafa;
    --docs-demo-surface: #ffffff;
    --docs-demo-surface-2: #f8fafc;
    --docs-demo-border: #e5e7eb;
    --docs-demo-border-strong: #d1d5db;
    --docs-demo-text-1: #0f172a;
    --docs-demo-text-2: #334155;
    --docs-demo-text-3: #64748b;
    --docs-demo-text-4: #94a3b8;
    --docs-demo-shadow-xs: 0 1px 2px rgba(15, 23, 42, 0.04);
    --docs-demo-shadow-sm: 0 1px 2px rgba(15, 23, 42, 0.04), 0 1px 3px rgba(15, 23, 42, 0.04);
    --docs-demo-shadow-md: 0 2px 4px rgba(15, 23, 42, 0.04), 0 4px 12px rgba(15, 23, 42, 0.06);
    --docs-demo-sidebar-w: 250px;
    --docs-demo-viewport-h: calc(100vh - var(--vp-nav-height, 44px));

    box-sizing: border-box;
    display: grid;
    grid-template-columns: var(--docs-demo-sidebar-w) minmax(0, 1fr);
    height: var(--docs-demo-viewport-h);
    min-height: 0;
    overflow: hidden;
    color: var(--docs-demo-text-1);
    background: var(--docs-demo-bg);
}

:global(html.dark .docs-demo-showcase),
:global([data-theme='dark'] .docs-demo-showcase) {
    --docs-demo-brand-50: rgba(99, 102, 241, 0.12);
    --docs-demo-brand-100: rgba(99, 102, 241, 0.22);
    --docs-demo-brand-500: #818cf8;
    --docs-demo-brand-600: #6366f1;
    --docs-demo-brand-700: #a5b4fc;
    --docs-demo-bg: #0a0a0c;
    --docs-demo-surface: #131318;
    --docs-demo-surface-2: #1a1a20;
    --docs-demo-border: #2a2a33;
    --docs-demo-border-strong: #3a3a45;
    --docs-demo-text-1: #f4f4f6;
    --docs-demo-text-2: #c8c8d2;
    --docs-demo-text-3: #898996;
    --docs-demo-text-4: #5a5a66;
    --docs-demo-shadow-xs: 0 1px 2px rgba(0, 0, 0, 0.5);
    --docs-demo-shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.4), 0 1px 3px rgba(0, 0, 0, 0.3);
    --docs-demo-shadow-md: 0 2px 4px rgba(0, 0, 0, 0.35), 0 8px 24px rgba(0, 0, 0, 0.45);
}

.docs-demo-showcase__sidebar {
    box-sizing: border-box;
    display: flex;
    height: var(--docs-demo-viewport-h);
    min-height: 0;
    flex-direction: column;
    gap: 16px;
    border-right: 1px solid var(--docs-demo-border);
    background: var(--docs-demo-surface-2);
    padding: 20px 16px;
    overflow-y: auto;
}

.docs-demo-showcase__sidebar-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 4px;
}

.docs-demo-showcase__eyebrow {
    color: var(--docs-demo-text-3);
    font-size: 10.5px;
    font-weight: 700;
    letter-spacing: 1px;
    text-transform: uppercase;
}

.docs-demo-showcase__count {
    font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
    font-weight: 500;
}

.docs-demo-showcase__count {
    color: var(--docs-demo-text-4);
    font-size: 11px;
}

.docs-demo-showcase__nav {
    display: flex;
    flex-direction: column;
    gap: 10px;
}

.docs-demo-showcase__nav-card {
    position: relative;
    display: flex;
    height: 122px;
    flex-direction: column;
    overflow: hidden;
    border: 1px solid var(--docs-demo-border);
    border-radius: 12px;
    background: var(--docs-demo-surface);
    color: inherit;
    text-decoration: none;
    box-shadow: var(--docs-demo-shadow-xs);
    transition: transform 160ms cubic-bezier(0.4, 0, 0.2, 1), box-shadow 160ms ease, border-color 160ms ease;
}

.docs-demo-showcase__nav-card:hover {
    border-color: var(--docs-demo-border-strong);
    box-shadow: var(--docs-demo-shadow-md);
    transform: translateY(-1px);
}

.docs-demo-showcase__nav-card.is-active {
    border-color: var(--docs-demo-brand-500);
    box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.14), var(--docs-demo-shadow-md);
}

.docs-demo-showcase__nav-card.is-active::before {
    position: absolute;
    top: 10px;
    left: -1px;
    z-index: 2;
    width: 3px;
    height: 28px;
    border-radius: 0 3px 3px 0;
    background: var(--docs-demo-brand-600);
    content: '';
}

.docs-demo-showcase__thumb {
    position: relative;
    height: 56px;
    overflow: hidden;
    border-bottom: 1px solid var(--docs-demo-border);
    background: var(--docs-demo-surface-2);
}

.docs-demo-showcase__nav-card.is-active .docs-demo-showcase__thumb {
    background: linear-gradient(180deg, var(--docs-demo-brand-50), var(--docs-demo-surface));
}

.docs-demo-showcase__num {
    position: absolute;
    top: 8px;
    left: 10px;
    z-index: 1;
    color: var(--docs-demo-text-4);
    font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
    font-size: 10.5px;
    font-weight: 600;
    letter-spacing: 0.4px;
}

.docs-demo-showcase__nav-card.is-active .docs-demo-showcase__num {
    color: var(--docs-demo-brand-600);
}

.docs-demo-showcase__icon {
    position: absolute;
    top: 8px;
    right: 10px;
    z-index: 1;
    display: grid;
    width: 24px;
    height: 24px;
    place-items: center;
    border: 1px solid var(--docs-demo-border);
    border-radius: 6px;
    background: var(--docs-demo-surface);
    color: var(--docs-demo-text-3);
}

.docs-demo-showcase__icon svg {
    width: 14px;
    height: 14px;
    fill: none;
    stroke: currentColor;
    stroke-linecap: round;
    stroke-linejoin: round;
    stroke-width: 1.8;
}

.docs-demo-showcase__nav-card.is-active .docs-demo-showcase__icon {
    border-color: var(--docs-demo-brand-100);
    color: var(--docs-demo-brand-700);
}

.docs-demo-showcase__preview {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 32px;
}

.docs-demo-showcase__preview line {
    stroke: rgba(100, 116, 139, 0.16);
    stroke-width: 1;
}

:global(html.dark .docs-demo-showcase__preview line),
:global([data-theme='dark'] .docs-demo-showcase__preview line) {
    stroke: rgba(255, 255, 255, 0.06);
}

.docs-demo-showcase__preview rect,
.docs-demo-showcase__preview circle {
    fill: var(--docs-demo-brand-500);
}

.docs-demo-showcase__preview--gantt rect:nth-of-type(1),
.docs-demo-showcase__preview--customer rect:nth-of-type(1),
.docs-demo-showcase__preview--tracker rect:nth-of-type(1) {
    fill: #ec4899;
}

.docs-demo-showcase__preview--gantt rect:nth-of-type(2),
.docs-demo-showcase__preview--customer rect:nth-of-type(2),
.docs-demo-showcase__preview--tracker rect:nth-of-type(2) {
    fill: #8b5cf6;
}

.docs-demo-showcase__preview--gantt rect:nth-of-type(3),
.docs-demo-showcase__preview--customer rect:nth-of-type(3),
.docs-demo-showcase__preview--tracker rect:nth-of-type(3) {
    fill: #4ade80;
}

.docs-demo-showcase__preview--gantt rect:nth-of-type(4),
.docs-demo-showcase__preview--customer rect:nth-of-type(4),
.docs-demo-showcase__preview--tracker rect:nth-of-type(4) {
    fill: #f59e0b;
}

.docs-demo-showcase__nav-card-body {
    display: flex;
    flex-direction: column;
    gap: 4px;
    padding: 10px 14px 12px;
}

.docs-demo-showcase__title-row {
    display: flex;
    min-width: 0;
    align-items: center;
    justify-content: space-between;
    gap: 8px;
}

.docs-demo-showcase__nav-title {
    min-width: 0;
    overflow: hidden;
    color: var(--docs-demo-text-1);
    font-size: 13.5px;
    font-weight: 600;
    letter-spacing: 0;
    line-height: 1.25;
    text-overflow: ellipsis;
    white-space: nowrap;
}

.docs-demo-showcase__nav-card.is-active .docs-demo-showcase__nav-title {
    color: var(--docs-demo-brand-700);
}

.docs-demo-showcase__badge {
    display: inline-flex;
    min-height: 20px;
    flex: 0 0 auto;
    align-items: center;
    border: 1px solid transparent;
    border-radius: 999px;
    font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
    font-size: 10px;
    font-weight: 600;
    letter-spacing: 0;
    line-height: 1;
    padding: 0 7px;
    text-transform: uppercase;
    white-space: nowrap;
}

.docs-demo-showcase__badge--core {
    border-color: rgba(14, 165, 233, 0.24);
    background: rgba(14, 165, 233, 0.1);
    color: #0369a1;
}

.docs-demo-showcase__badge--pro {
    border-color: rgba(16, 185, 129, 0.24);
    background: rgba(16, 185, 129, 0.1);
    color: #047857;
}

.docs-demo-showcase__badge--enterprise {
    border-color: rgba(245, 158, 11, 0.28);
    background: rgba(245, 158, 11, 0.12);
    color: #92400e;
}

:global(html.dark .docs-demo-showcase__badge--core),
:global([data-theme='dark'] .docs-demo-showcase__badge--core) {
    border-color: rgba(56, 189, 248, 0.24);
    background: rgba(56, 189, 248, 0.12);
    color: #7dd3fc;
}

:global(html.dark .docs-demo-showcase__badge--pro),
:global([data-theme='dark'] .docs-demo-showcase__badge--pro) {
    border-color: rgba(52, 211, 153, 0.24);
    background: rgba(52, 211, 153, 0.12);
    color: #6ee7b7;
}

:global(html.dark .docs-demo-showcase__badge--enterprise),
:global([data-theme='dark'] .docs-demo-showcase__badge--enterprise) {
    border-color: rgba(251, 191, 36, 0.28);
    background: rgba(251, 191, 36, 0.12);
    color: #fcd34d;
}

.docs-demo-showcase__meta {
    color: var(--docs-demo-text-3);
    font-size: 11.5px;
    font-weight: 500;
    line-height: 1.35;
}

.docs-demo-showcase__main {
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    min-width: 0;
    height: var(--docs-demo-viewport-h);
    overflow: hidden;
    padding: 0;
    background: var(--docs-demo-bg);
}

.docs-demo-showcase__head {
    display: none;
    align-items: center;
    justify-content: space-between;
    gap: 24px;
    margin-bottom: 16px;
}

.docs-demo-showcase__head h1 {
    margin: 0;
    color: var(--docs-demo-text-1);
    font-size: 18px;
    font-weight: 600;
    letter-spacing: 0;
    line-height: 1.25;
}

.docs-demo-showcase__page-title-row {
    display: flex;
    min-width: 0;
    align-items: center;
    gap: 10px;
}

.docs-demo-showcase__tier-badge {
    min-height: 22px;
    font-size: 10.5px;
    padding: 0 8px;
}

.docs-demo-showcase__head p {
    margin: 2px 0 0;
    color: var(--docs-demo-text-3);
    font-size: 12px;
}

.docs-demo-showcase__workspace {
    flex: 1 1 auto;
    height: auto;
    min-height: 0;
    overflow: hidden;
    border: 1px solid var(--docs-demo-border);
    border-radius: 0;
    background: var(--docs-demo-surface);
    box-shadow: var(--docs-demo-shadow-sm);
}

.docs-demo-showcase__workspace :deep(.direct-ts-demo-frame) {
    display: flex;
    flex-direction: column;
    height: 100%;
    min-height: 100% !important;
    margin: 0;
    border-radius: 0;
}

.docs-demo-showcase__workspace :deep(.direct-ts-demo-frame__mount) {
    height: 100%;
    min-height: 0;
}

.docs-demo-showcase__workspace :deep(.grow),
.docs-demo-showcase__workspace :deep(.h-full) {
    height: 100%;
    min-height: 0;
}

@media (max-width: 900px) {
    :global(body:has(.docs-demo-showcase)) {
        overflow: auto;
    }

    .docs-demo-showcase {
        grid-template-columns: 1fr;
        height: auto;
        min-height: 100vh;
    }

    .docs-demo-showcase__sidebar {
        height: auto;
        min-height: auto;
        border-right: 0;
        border-bottom: 1px solid var(--docs-demo-border);
    }

    .docs-demo-showcase__nav {
        display: grid;
        grid-template-columns: repeat(2, minmax(0, 1fr));
    }

    .docs-demo-showcase__main {
        height: auto;
        min-height: 70vh;
        padding: 0;
    }

    .docs-demo-showcase__head {
        flex-direction: column;
        align-items: flex-start;
        gap: 10px;
    }

    .docs-demo-showcase__workspace {
        height: calc(100vh - var(--vp-nav-height, 64px));
        min-height: 620px;
    }
}

@media (max-width: 560px) {
    .docs-demo-showcase__sidebar {
        padding-inline: 12px;
    }

    .docs-demo-showcase__nav {
        grid-template-columns: 1fr;
    }
}
</style>
