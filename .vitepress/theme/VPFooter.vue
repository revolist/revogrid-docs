<script setup lang="ts">
import { useData } from 'vitepress'
import { useSidebar } from 'vitepress/theme'
import VPImage from './VPImage.vue'

const { site, theme, frontmatter } = useData()
const { hasSidebar } = useSidebar()
</script>

<template>
    <footer
        v-if="theme.footer && frontmatter.footer !== false"
        class="VPFooter"
        :class="{ 'has-sidebar': hasSidebar }"
    >
        <div class="container">
            <div>
                <span class="logo-container">
                    <VPImage
                        v-if="theme.logo"
                        class="logo"
                        :image="theme.logo"
                    />
                    <span
                        v-if="theme.siteTitle"
                        v-html="theme.siteTitle"
                    ></span>
                    <strong v-else-if="theme.siteTitle === undefined">{{
                        site.title
                    }}</strong>
                </span>
                <p
                    v-if="theme.footer.message"
                    class="message"
                    v-html="theme.footer.message"
                ></p>
                <p
                    v-if="theme.footer.copyright"
                    class="copyright"
                    v-html="theme.footer.copyright"
                ></p>
            </div>
            <div class="sections">
                <div v-for="section in theme.footer.items">
                    <div class="footer-title">{{ section.title }}</div>
                    <ul>
                        <li
                            v-for="item in section.links"
                            :key="item.text"
                            class="link"
                        >
                            <a :href="item.link" v-html="item.text"></a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </footer>
</template>

<style lang="scss" scoped>
.VPFooter {
    position: relative;
    z-index: var(--vp-z-index-footer);
    border-top: 1px solid var(--vp-c-gutter);
    padding: 32px 24px;
    background-color: var(--vp-c-bg);
}

.VPFooter.has-sidebar {
    display: none;
}

.VPFooter :deep(a) {
    text-decoration-line: underline;
    text-underline-offset: 2px;
    transition: color 0.25s;
}

.VPFooter :deep(a:hover) {
    color: var(--vp-c-text-1);
}

@media (min-width: 768px) {
    .VPFooter {
        padding: 32px;
    }
}

.container {
    /* margin: 0 auto; */
    text-align: left;

    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    margin: 0 auto;
    width: 100%;
    max-width: calc(var(--vp-layout-max-width) - 64px);

    > div {
        max-width: var(--vp-layout-max-width);
    }
}

.logo-container {
    display: flex;
    gap: 10px;
    margin-bottom: 10px;
}

:deep(.logo) {
    $size: 22px;
    width: $size;
    height: $size;
}

.sections {
    display: flex;
    gap: 90px;
}

a {
    font-size: 13px;
}
a:not(:hover) {
    text-decoration: none;
}

.footer-title {
    font-size: 12px;
    font-weight: 600;
    padding: 5px 0;
    margin-top: 15px;
    color: var(--vp-c-text-1);
    text-transform: uppercase;
}

.message,
.copyright {
    line-height: 24px;
    font-size: 14px;
    font-weight: 500;
    padding: 5px 0;
    color: var(--vp-c-text-2);
}
</style>
