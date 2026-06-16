<script setup lang="ts">
import { useData } from 'vitepress'
import { useLayout } from 'vitepress/dist/client/theme-default/composables/layout.js'
import VPImage from './VPImage.vue'
import { computed, ref } from 'vue'
import ContactForm from '../../pro/ContactForm.vue'
import { useHomeLink } from './useHomeLink'

let showForm = ref(false) // isVisible
const { site, theme, frontmatter } = useData()
const { hasSidebar } = useLayout()
const { homeLink } = useHomeLink()

const footerLink = (text: string, link: string) => {
    if (!frontmatter.value.externalHomeLinks) {
        return homeLink(link)
    }
    if (text === 'About us') {
        return homeLink('/about/')
    }
    if (text === 'Services') {
        return homeLink('/services/')
    }
    return homeLink(link)
}

const footerItems = computed(() =>
    (theme.value.footer?.items ?? []).map((section) => ({
        ...section,
        links: section.links.map((item) => ({
            ...item,
            link: item.link ? footerLink(item.text, item.link) : undefined,
            items: item.items?.map((subItem) => ({
                ...subItem,
                link: footerLink(subItem.text, subItem.link),
            })),
        })),
    }))
)
const homeUrl = computed(() => homeLink('/'))
const contactUrl = computed(() => homeLink('/contact/'))
</script>

<template>
    
    <ContactForm key="footer-contact" :isVisible="showForm" @close="showForm = false"/>
    <footer
        v-if="theme.footer && frontmatter.footer !== false"
        class="VPFooter"
        :class="{ 'has-sidebar': hasSidebar }"
    >
        <div v-if="footerItems.length" class="container">
            <div>
                <a class="logo-container" :href="homeUrl">
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
                </a>
            </div>
            <div class="sections">
                <ul v-for="section in footerItems">
                    <li
                        v-for="item in section.links"
                        :key="item.text"
                        class="link"
                    >
                        <div v-if="item.items?.length" class="footer-submenu">
                            <button type="button" class="footer-submenu-trigger" v-html="item.text"></button>
                            <div class="footer-submenu-panel">
                                <ul>
                                    <li
                                        v-for="subItem in item.items"
                                        :key="subItem.text"
                                    >
                                        <a :href="subItem.link" v-html="subItem.text"></a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <a v-else :href="item.link" v-html="item.text"></a>
                    </li>
                </ul>
                <ul style="margin-left: 15px;">
                    <li>
                        <a v-if="frontmatter.externalHomeLinks" :href="contactUrl">Contact us</a>
                        <a v-else href="#contact" @click="showForm = true">Contact us</a>
                    </li>
                </ul>
            </div>
        </div>
        <hr v-if="footerItems.length" />

        <p
            v-if="theme.footer.message"
            class="container message"
            v-html="theme.footer.message"
        ></p>
        <p
            v-if="theme.footer.copyright"
            class="copyright"
            v-html="theme.footer.copyright"
        ></p>
    </footer>
</template>

<style lang="scss" scoped>
.VPFooter {
    position: relative;
    z-index: var(--vp-z-index-footer);
    border-top: 1px solid var(--vp-c-gutter);
    padding: 20px 24px 32px 24px;
    background-color: var(--vp-c-bg);
    overflow: visible;

    .container {
        padding-bottom: 10px;
    }
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
    gap: 20px;
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

    ul {
        gap: 15px;
        padding: 0 40px;
        padding: 0;
        margin: 0;
        list-style: none;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
    }
}

a {
    font-size: 13px;
}
a:not(:hover) {
    text-decoration: none;
}

.footer-submenu {
    position: relative;

    .footer-submenu-trigger {
        border: 0;
        padding: 0;
        background: transparent;
        color: var(--vp-c-text-2);
        cursor: pointer;
        font-size: 13px;
        font-family: inherit;
    }

    .footer-submenu-trigger:hover,
    .footer-submenu-trigger:focus-visible {
        color: var(--vp-c-text-1);
    }

    .footer-submenu-trigger::after {
        content: ' ▾';
        color: var(--vp-c-text-3);
        font-size: 10px;
    }

    .footer-submenu-panel {
        position: absolute;
        left: 0;
        bottom: 100%;
        z-index: 5;
        min-width: 170px;
        padding: 10px;
        border: 1px solid var(--vp-c-divider);
        border-radius: 8px;
        background: var(--vp-c-bg);
        box-shadow: var(--vp-shadow-2);
        opacity: 0;
        pointer-events: none;
        transform: translateY(4px);
        transition: opacity 0.15s, transform 0.15s;
    }

    .footer-submenu-panel::after {
        content: '';
        position: absolute;
        left: 0;
        right: 0;
        bottom: -10px;
        height: 10px;
    }

    &:hover .footer-submenu-panel,
    &:focus-within .footer-submenu-panel {
        opacity: 1;
        pointer-events: auto;
        transform: translateY(0);
    }

    ul {
        display: flex;
        flex-direction: column;
        gap: 8px;
        min-width: 0;
        margin: 0;
        padding: 0;
    }
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
    font-size: 12px;
    padding: 5px 0;
    color: var(--vp-c-text-2);
    display: inherit;
}
hr {
    background-color: transparent;
    border: 0;
    border-top: 1px solid var(--vp-c-gutter);
    margin: 0 -40px 10px -40px;
}
</style>
