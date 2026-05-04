<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, ref, watch } from 'vue'
import { useData } from 'vitepress'
import { DEMOS_PORTAL_ORIGIN } from '../configs/demoPortal'

type DemoWidgetTheme = 'dark' | 'light' | 'auto'

type DemoWidgetResizeMessage = {
    source?: string
    type?: string
    demo?: string
    framework?: string
    view?: string
    height?: number
}

const props = withDefaults(
    defineProps<{
        demo: string
        framework?: string
        view?: string
        theme?: DemoWidgetTheme
        origin?: string
        title?: string
        initialHeight?: number
        minHeight?: number
        maxHeight?: number
    }>(),
    {
        framework: 'ts',
        theme: 'auto',
        origin: DEMOS_PORTAL_ORIGIN,
        initialHeight: 320,
        minHeight: 240,
        maxHeight: 900,
    },
)

const iframeRef = ref<HTMLIFrameElement>()
const iframeHeight = ref(props.initialHeight)
const widgetView = ref(props.view)
const iframeSrc = ref('')
const { isDark } = useData()

const resolvedTheme = computed(() => {
    if (props.theme !== 'auto') {
        return props.theme
    }

    return isDark.value ? 'dark' : 'light'
})

function buildIframeSrc() {
    const url = new URL('/demo.html', props.origin)
    url.searchParams.set('demo', props.demo)
    url.searchParams.set('framework', props.framework)
    url.searchParams.set('widget', '1')
    url.searchParams.set('theme', resolvedTheme.value)

    if (widgetView.value) {
        url.searchParams.set('view', widgetView.value)
    }

    return url.toString()
}

function updateIframeSrc() {
    iframeSrc.value = buildIframeSrc()
}

const frameTitle = computed(
    () => props.title || `RevoGrid ${props.demo} demo`,
)

function clampHeight(height: number) {
    return Math.min(Math.max(height, props.minHeight), props.maxHeight)
}

function isResizeMessage(data: unknown): data is DemoWidgetResizeMessage {
    if (!data || typeof data !== 'object') {
        return false
    }

    const message = data as DemoWidgetResizeMessage
    return (
        message.source === 'revogrid-demos' &&
        message.type === 'revogrid-demo-widget:resize' &&
        typeof message.height === 'number' &&
        Number.isFinite(message.height)
    )
}

function handleMessage(event: MessageEvent) {
    if (event.source !== iframeRef.value?.contentWindow) {
        return
    }

    if (!isResizeMessage(event.data)) {
        return
    }

    iframeHeight.value = clampHeight(Math.ceil(event.data.height))

    if (event.data.view) {
        widgetView.value = event.data.view
    }
}

watch(
    () => props.initialHeight,
    height => {
        iframeHeight.value = clampHeight(height)
    },
)

watch(
    () => props.view,
    view => {
        widgetView.value = view
        updateIframeSrc()
    },
)

watch(
    [() => props.demo, () => props.framework, () => props.origin, resolvedTheme],
    updateIframeSrc,
    { immediate: true },
)

onMounted(() => {
    window.addEventListener('message', handleMessage)
})

onBeforeUnmount(() => {
    window.removeEventListener('message', handleMessage)
})
</script>

<template>
    <ClientOnly>
        <iframe
            ref="iframeRef"
            :src="iframeSrc"
            :title="frameTitle"
            class="demo-widget-frame"
            :style="{ height: `${iframeHeight}px` }"
            loading="lazy"
            allowfullscreen
        ></iframe>
    </ClientOnly>
</template>

<style scoped>
.demo-widget-frame {
    display: block;
    width: 100%;
    border: 0;
    border-radius: 24px;
    overflow: hidden;
    transition: height 160ms ease;
}
</style>
