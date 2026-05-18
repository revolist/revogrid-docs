<script setup lang="ts">
import { computed, nextTick, onBeforeUnmount, onMounted, ref, watch } from 'vue'
import { useData } from 'vitepress'
import '@revolist/revogrid-examples/components/shared/demo-utilities.css'

type Cleanup = () => void
type LoadDemo = (parentSelector: string, runtimeArg?: unknown) => void | Cleanup | Promise<void | Cleanup>

const props = withDefaults(
    defineProps<{
        load: LoadDemo
        title?: string
        minHeight?: number | string
        maxHeight?: number | string
        runtimeArg?: unknown
        fullPage?: boolean
    }>(),
    {
        minHeight: 320,
        maxHeight: 'none',
        fullPage: false,
    },
)

const mountEl = ref<HTMLElement>()
const mountId = `revogrid-doc-demo-${Math.random().toString(36).slice(2)}`
const cleanup = ref<Cleanup>()
const error = ref<string>()
const { isDark } = useData()

const frameTitle = computed(() => props.title || 'RevoGrid TypeScript demo')
const wrapperStyle = computed(() => ({
    minHeight: cssSize(props.minHeight),
    maxHeight: cssSize(props.maxHeight),
}))

function cssSize(value: number | string) {
    return typeof value === 'number' ? `${value}px` : value
}

function getRuntimeArg() {
    if (props.runtimeArg !== undefined) {
        return props.runtimeArg
    }

    return { isDark: isDark.value }
}

async function clearMountedDemo() {
    cleanup.value?.()
    cleanup.value = undefined
    await nextTick()
    if (mountEl.value) {
        mountEl.value.innerHTML = ''
    }
}

async function mountDemo() {
    error.value = undefined
    await clearMountedDemo()

    try {
        const result = await props.load(`#${mountId}`, getRuntimeArg())
        if (typeof result === 'function') {
            cleanup.value = result
        }
    } catch (reason) {
        error.value = reason instanceof Error ? reason.message : 'Demo failed to mount.'
    }
}

onMounted(() => {
    mountDemo()
})

watch(isDark, () => {
    if (mountEl.value) {
        mountDemo()
    }
})

onBeforeUnmount(() => {
    cleanup.value?.()
})
</script>

<template>
    <figure
        class="direct-ts-demo-frame"
        :class="{ 'direct-ts-demo-frame--full-page': fullPage }"
        :style="wrapperStyle"
        :data-theme="isDark ? 'dark' : 'light'"
        :aria-label="frameTitle"
    >
        <div
            :id="mountId"
            ref="mountEl"
            class="direct-ts-demo-frame__mount"
        >
            <div
                v-if="error"
                class="direct-ts-demo-frame__error"
            >
                {{ error }}
            </div>
        </div>
    </figure>
</template>

<style scoped>
.direct-ts-demo-frame {
    --showcase-surface: #ffffff;
    --showcase-surface-2: #f8fafc;
    --showcase-hover: #f1f5f9;
    --showcase-border: #e5e7eb;
    --showcase-border-strong: #cbd5e1;
    --showcase-text-1: #0f172a;
    --showcase-text-2: #334155;
    --showcase-text-3: #64748b;
    --showcase-text-4: #94a3b8;

    display: flex;
    flex-direction: column;
    width: 100%;
    margin: 16px 0;
    border-radius: 24px;
    overflow: hidden;
    background: var(--vp-c-bg-soft);
}

.direct-ts-demo-frame[data-theme='dark'] {
    --showcase-surface: #131318;
    --showcase-surface-2: #1a1a20;
    --showcase-hover: #25252d;
    --showcase-border: #2a2a33;
    --showcase-border-strong: #3a3a45;
    --showcase-text-1: #f4f4f6;
    --showcase-text-2: #c8c8d2;
    --showcase-text-3: #898996;
    --showcase-text-4: #5a5a66;
}

.direct-ts-demo-frame--full-page {
    min-height: calc(100vh - var(--vp-nav-height, 64px)) !important;
    margin: 45px 0 0;
    border-radius: 0;
}

.direct-ts-demo-frame--full-page :deep(.grow),
.direct-ts-demo-frame--full-page :deep(.h-full) {
    min-height: inherit;
}

.direct-ts-demo-frame__mount {
    display: flex;
    flex: 1 1 auto;
    flex-direction: column;
    width: 100%;
    height: 100%;
    min-height: inherit;
}

.direct-ts-demo-frame__mount > :deep(div) {
    display: flex;
    flex: 1 1 auto;
    flex-direction: column;
    width: 100%;
    height: 100%;
    min-height: 0;
}

.direct-ts-demo-frame__error {
    display: flex;
    min-height: inherit;
    align-items: center;
    justify-content: center;
    padding: 24px;
    color: var(--vp-c-danger-1);
    text-align: center;
}
</style>
