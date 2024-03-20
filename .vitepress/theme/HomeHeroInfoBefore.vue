<template>
    <a target="_blank" rel="noopener" class="topPill" v-if="value.action">
        <span class="pill-promo">{{ value.text }}
            <span class="pill-link">{{ value.action }}</span></span
        >
    </a>
</template>
<script lang="ts" setup>
import { useData } from 'vitepress'
import { computed } from 'vue'
const { frontmatter } = useData()
const value = computed(() => {
    return frontmatter.value.hero?.banner ?? {}
})
</script>
<style lang="scss" scoped>
.topPill {
    font-size: 0.75rem;
    line-height: 1.6;
    display: inline-flex;
    justify-content: center;
    gap: 0.75rem;
    line-height: 100%;
    color: var(--vp-button-sponsor-text);
    padding: 0.2rem 0.2rem 0.2rem 0.688rem;
    border: 1px solid var(--vp-c-gutter);
    border-radius: 200px;
    margin-block-end: 2rem;
    transition: border-color 0.1s ease-out;

    &:focus,
    &:hover {
        border-color: var(--vp-c-brand-1);
    }
}
:deep() {
    .pill-promo {
        display: inline-flex;
        align-items: center;
        gap: 0.5rem;
        span {
            white-space: pre;
        }
    }
    @media (max-width: 560px) {
        .pill-promo span {
            display: none;
        }
    }
    .pill-link {
        display: inline-flex;
        align-items: center;
        background: var(--vp-input-switch-bg-color);
        border-radius: 200px;
        font-weight: 600;
        color: var(--vp-c-brand-1);
        padding: 0.5rem 0.625rem;
        transition: background-color 0.2s ease-out;
    }
}
</style>
