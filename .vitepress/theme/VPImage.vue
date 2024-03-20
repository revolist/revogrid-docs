<script setup lang="ts">
import type { DefaultTheme } from 'vitepress/theme'
import { withBase } from 'vitepress'
import { computed } from 'vue'
import VPIcon from './VPIcon.vue'

const props = defineProps<{
    image: DefaultTheme.ThemeableImage
    alt?: string
}>()

defineOptions({ inheritAttrs: false })
function isSVGFilename(filename) {
    const pattern = /\.svg$/i
    return pattern.test(filename)
}

const src = computed(() => {
    if (typeof props.image === 'string') {
        return props.image
    } else if ('src' in props.image) {
        return props.image.src
    }
    return '';
})

const svg = computed(() => isSVGFilename(src.value))
</script>

<template>
    <template v-if="image">
        <component
            v-if="typeof image === 'string' || 'src' in image"
            :is="!svg ? 'img' : VPIcon"
            class="VPImage"
            v-bind="
                typeof image === 'string' ? $attrs : { ...image, ...$attrs }
            "
            :src="withBase(src)"
            :alt="alt ?? (typeof image === 'string' ? '' : image.alt || '')"
        />
        <template v-else>
            <VPImage
                class="dark"
                :image="image.dark"
                :alt="image.alt"
                v-bind="$attrs"
            />
            <VPImage
                class="light"
                :image="image.light"
                :alt="image.alt"
                v-bind="$attrs"
            />
        </template>
    </template>
</template>

<style scoped>
html:not(.dark) .VPImage.dark {
    display: none;
}
.dark .VPImage.light {
    display: none;
}
</style>
