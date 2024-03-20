<template>
 <div class="tagline vp-doc">Works with
        <span class="integrations">
            <span
                v-for="(item, i) in integrations"
                :key="i">
            <a
                :href="`docs/${item.title.toLowerCase()}.html`"
                ><abbr>{{ item.title }}</abbr></a
            >,</span>
            </span
        >
        and plain JavaScript.
    </div>
</template>
<script lang="ts" setup>
import { useData } from 'vitepress'
import { computed } from 'vue'
const { frontmatter } = useData()
const integrations = computed(() => {
    if (frontmatter.value.integrations?.length) {
        return frontmatter.value.integrations
    }
    return []
})
</script>
<style lang="scss" scoped>
.tagline {
    padding-top: 10px;
}
.integrations {
    display: inline-flex;
    flex-direction: row;
    gap: 0.1rem;
}
</style>
