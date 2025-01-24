<template>
    <div
        v-if="frontmatter.layout !== false"
        class="Layout"
        :class="{ [frontmatter.pageClass || 'no-class']: true}"
    >
        <VPPage>
            <template #doc-top v-if="frontmatter.breadcrumbs !== false"> <Breadcrumbs /></template>
        </VPPage>
    </div>
</template>
<script setup lang="ts">
import { useData } from 'vitepress'
import VPPage from 'vitepress/dist/client/theme-default/components/VPDoc.vue'
import Breadcrumbs from './Breadcrumbs.vue'

const { frontmatter } = useData()
</script>

<style lang="scss" scoped>
@media (min-width: 960px) {
    :deep(.VPDoc):not(.has-sidebar) .content {
        max-width: 1100px;
    }
}
.Layout {
    max-width: 1200px;
    margin: 0 auto;

   
}
.breadcrumbs {
    background-color: var(--vp-c-bg);
    position: sticky;
    top: 64px;
    z-index: 10;
    padding: 10px 0;
}
</style>