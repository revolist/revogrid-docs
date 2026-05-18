<script setup lang="ts">
import { computed, defineAsyncComponent, defineComponent, h, onMounted, ref, watch, type Component } from 'vue'
import { useRoute } from 'vitepress'
import DocsDemoShowcaseHeader from './DocsDemoShowcaseHeader.vue'
import DocsDemoShowcaseSidebar from './DocsDemoShowcaseSidebar.vue'
import { showcases } from './DocsDemoShowcase.showcases'
import type { ShowcaseSlug } from './DocsDemoShowcase.types'

const props = defineProps<{
    active?: ShowcaseSlug
}>()

const route = useRoute()

const demoComponents = {
    hr: defineAsyncComponent(() => import('@revolist/revogrid-examples/components/hr/HRDemo.vue')),
    ecommerce: defineAsyncComponent(async () => {
        const [{ default: ECommerce }, { default: ecommerceData }] = await Promise.all([
            import('@revolist/revogrid-examples/components/showcase/ECommerce.vue'),
            import('@revolist/revogrid-examples/components/sys-data/ecommerce.data.json'),
            import('@revolist/revogrid-pro/dist/revogrid-pro.css'),
        ])

        return defineComponent({
            name: 'DocsDemoShowcaseEcommerce',
            setup: () => () => h(ECommerce, { rows: ecommerceData }),
        })
    }),
    color: defineAsyncComponent(async () => {
        const [{ default: Color }] = await Promise.all([
            import('@revolist/revogrid-examples/components/showcase-color/Color.vue'),
            import('@revolist/revogrid-pro/dist/revogrid-pro.css'),
        ])

        return Color
    }),
    pivot: defineAsyncComponent(async () => {
        const [{ default: PivotShowcase }, { default: ecommerceData }] = await Promise.all([
            import('@revolist/revogrid-examples/components/showcase-pivot/PivotShowcase.vue'),
            import('@revolist/revogrid-examples/components/sys-data/ecommerce.data.json'),
            import('@revolist/revogrid-pro/dist/revogrid-pro.css'),
            import('@revolist/revogrid-enterprise/dist/revogrid-enterprise.css'),
        ])
        const rows = (ecommerceData as Record<string, unknown>[]).map((row, index) => ({
            ...row,
            Time: `${String(index % 24).padStart(2, '0')}:00`,
        }))

        return defineComponent({
            name: 'DocsDemoShowcasePivot',
            setup: () => () => h(PivotShowcase, { rows }),
        })
    }),
    gantt: defineAsyncComponent(async () => {
        const [{ default: GanttShowcase }] = await Promise.all([
            import('@revolist/revogrid-examples/components/gantt/GanttShowcase.vue'),
            import('@revolist/revogrid-pro/dist/revogrid-pro.css'),
            import('@revolist/revogrid-enterprise/dist/revogrid-enterprise.css'),
        ])

        return GanttShowcase
    }),
} satisfies Record<ShowcaseSlug, Component>

const activeSlug = computed<ShowcaseSlug>(() => {
    if (props.active) {
        return props.active
    }

    const path = route.path.replace(/\/$/, '')
    const slug = path.split('/').pop()

    return isShowcaseSlug(slug) ? slug : 'hr'
})

const activeShowcase = computed(() => showcases.find((item) => item.slug === activeSlug.value) ?? showcases[0])
const activeDemoComponent = ref<Component | null>(null)

onMounted(() => {
    watch(
        () => activeShowcase.value.slug,
        (slug) => {
            activeDemoComponent.value = demoComponents[slug]
        },
        { immediate: true },
    )
})

function isShowcaseSlug(value: string | undefined): value is ShowcaseSlug {
    return value === 'hr' || value === 'ecommerce' || value === 'color' || value === 'pivot' || value === 'gantt'
}
</script>

<template>
    <div class="docs-demo-showcase">
        <DocsDemoShowcaseSidebar :items="showcases" :active-slug="activeShowcase.slug" />

        <main class="docs-demo-showcase__main">
            <DocsDemoShowcaseHeader :item="activeShowcase" />

            <section class="docs-demo-showcase__workspace">
                <component v-if="activeDemoComponent" :is="activeDemoComponent" />
            </section>
        </main>
    </div>
</template>

<style>
.demo-page-class .VPDoc,
.demo-page-class .VPDoc .container,
.demo-page-class .VPDoc .content,
.demo-page-class .VPDoc .content-container,
.demo-page-class .VPDoc main {
    width: 100% !important;
    max-width: none !important;
    margin: 0 !important;
    padding: 0 !important;
}

.demo-page-class .vp-doc {
    width: 100%;
    max-width: none;
}

body:has(.docs-demo-showcase) {
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

html.dark .docs-demo-showcase,
[data-theme='dark'] .docs-demo-showcase {
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

html.dark .docs-demo-showcase__preview line,
[data-theme='dark'] .docs-demo-showcase__preview line {
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

html.dark .docs-demo-showcase__badge--core,
[data-theme='dark'] .docs-demo-showcase__badge--core {
    border-color: rgba(56, 189, 248, 0.24);
    background: rgba(56, 189, 248, 0.12);
    color: #7dd3fc;
}

html.dark .docs-demo-showcase__badge--pro,
[data-theme='dark'] .docs-demo-showcase__badge--pro {
    border-color: rgba(52, 211, 153, 0.24);
    background: rgba(52, 211, 153, 0.12);
    color: #6ee7b7;
}

html.dark .docs-demo-showcase__badge--enterprise,
[data-theme='dark'] .docs-demo-showcase__badge--enterprise {
    border-color: rgba(251, 191, 36, 0.28);
    background: rgba(251, 191, 36, 0.12);
    color: #fcd34d;
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

.docs-demo-showcase__workspace .grow,
.docs-demo-showcase__workspace .h-full {
    height: 100%;
    min-height: 0;
}

.docs-demo-showcase__workspace .pivot-grid-container {
    display: flex;
    flex: 1 1 auto;
    width: 100%;
    height: 100%;
    min-height: 0;
}

.docs-demo-showcase__workspace .pivot-grid-container > revo-grid {
    display: block;
    flex: 1 1 auto;
    width: 100%;
    height: 100%;
    min-height: 0;
}

@media (max-width: 900px) {
    body:has(.docs-demo-showcase) {
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
