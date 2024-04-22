<template>
    <div class="mit-section vp-doc">
        <div>
            {{ value.text }}
            <br />
            <strong style="display: inline-block; padding-top: 10px">
                {{ value.details }} <a v-if="value.action" href="/pro/">{{ value.action }}</a>.</strong
            >
        </div>
    </div>
</template>
<script lang="ts" setup>
import { useData } from 'vitepress'
import { computed } from 'vue'
const { frontmatter } = useData()
const value = computed(() => {
    return frontmatter.value.hero.license ?? {}
})
</script>
<style lang="scss" scoped>
.mit-section {
    display: flex;
    align-items: center;
    gap: 2rem;
    font-size: 0.875rem;
    max-width: 500px;
    padding-top: 4rem;
    color: var(--vp-c-text-2);
    margin: 0 auto;
}
</style>
