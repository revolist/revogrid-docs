<template>
    <div class="mit-section vp-doc">
        <span v-html="md.renderInline(value.text ?? '')"></span>
        <strong style="display: inline-block; padding-top: 10px">
            {{ value.details }}
            <a v-if="value.action" href="/pro/">{{ value.action }}</a
            ></strong
            >
    </div>
</template>
<script lang="ts" setup>
import markdownit from 'markdown-it'
import { useData } from 'vitepress'
import { computed } from 'vue'
const md = markdownit()
const { frontmatter } = useData()
const value = computed(() => {
    return frontmatter.value.hero.license ?? {}
})
</script>
<style lang="scss" scoped>
.mit-section {
    align-items: center;
    gap: 2rem;
    font-size: 0.875rem;
    max-width: 500px;
    padding-top: 1.5rem;
    color: var(--vp-c-text-2);
    margin: 0 auto;
    justify-content: center;
}
</style>
