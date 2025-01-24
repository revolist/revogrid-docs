<template>
    <div class="tagline vp-doc">
        <a
            v-for="(item, i) in integrations"
            :key="i"
            :href="item.path"
            :title="item.details"
        >
            <img width="24" :src="`/${item.icon}`" :alt="item.alt" />
            <abbr>{{ item.title }}</abbr>
        </a>
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
    padding-top: 20px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;

    a {
        display: flex;
        align-items: center;
        flex-wrap: nowrap;
        gap: 0.2rem;
        color: var(--vp-c-text-1);
        text-decoration: none;
        text-underline-offset: 0;

        padding: 2px 5px;
        border-radius: 8px;
        overflow: hidden;
        margin: 0.1rem 0;
        transition: background-color 0.2s ease-in-out;

        &:hover {
            background-color: var(--vp-c-bg-soft);
        }
    }
}
</style>
