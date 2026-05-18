<script setup lang="ts">
import type { ShowcasePreview } from './DocsDemoShowcase.types'

defineProps<{
    preview: ShowcasePreview
}>()
</script>

<template>
    <svg class="docs-demo-showcase__preview" :class="`docs-demo-showcase__preview--${preview}`" viewBox="0 0 260 56" preserveAspectRatio="none">
        <line x1="0" y1="18" x2="260" y2="18" />
        <line x1="0" y1="36" x2="260" y2="36" />
        <line x1="60" y1="0" x2="60" y2="56" />
        <line x1="130" y1="0" x2="130" y2="56" />
        <line x1="200" y1="0" x2="200" y2="56" />

        <template v-if="preview === 'pivot'">
            <rect x="14" y="28" width="42" height="4" rx="2" />
            <rect x="72" y="28" width="42" height="4" rx="2" />
            <rect x="146" y="28" width="42" height="4" rx="2" />
            <rect x="14" y="40" width="66" height="4" rx="2" />
            <rect x="92" y="40" width="48" height="4" rx="2" />
            <rect x="154" y="40" width="48" height="4" rx="2" />
        </template>
        <template v-else-if="preview === 'gantt'">
            <rect x="14" y="18" width="58" height="5" rx="2" />
            <rect x="58" y="30" width="76" height="5" rx="2" />
            <rect x="112" y="42" width="98" height="5" rx="2" />
            <rect x="178" y="51" width="72" height="4" rx="2" />
        </template>
        <template v-else-if="preview === 'customer'">
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
        <template v-else-if="preview === 'tracker'">
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
</template>
