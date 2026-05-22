<template></template>

<script lang="ts" setup>
import { nextTick, onMounted, watch } from 'vue'
import { useData, useRoute } from 'vitepress'
import { useHomeLink } from './useHomeLink'

const { frontmatter } = useData()
const route = useRoute()
const { homeLink } = useHomeLink()

const rewriteLinks = async () => {
    await nextTick()
    if (!frontmatter.value.externalHomeLinks || typeof document === 'undefined') {
        return
    }

    document
        .querySelectorAll<HTMLAnchorElement>('.VPNav a[href^="/"], .VPFooter a[href^="/"]')
        .forEach((link) => {
            const href = link.getAttribute('href')
            if (href) {
                link.setAttribute('href', homeLink(href))
            }
        })
}

onMounted(rewriteLinks)
watch(() => route.path, rewriteLinks)
</script>
