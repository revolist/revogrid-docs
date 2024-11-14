// https://vitepress.dev/guide/custom-theme
import { h } from 'vue'
import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import './style.scss'
import HomeHero from './HomeHero.vue'
import HomeFeaturesBeforeVue from './HomeFeaturesBefore.vue'
import HomeHeroInfoAfter from './HomeHeroInfoAfter.vue'
import HomeHeroInfoBefore from './HomeHeroInfoBefore.vue'
import HomeMit from './HomeMit.vue'
import HomeHeroAfter from './HomeHeroAfter.vue'
import { enhanceAppWithTabs } from 'vitepress-plugin-tabs/client'
import VueGtag from 'vue-gtag'

export default {
    extends: DefaultTheme,
    Layout: () => {
        return h(DefaultTheme.Layout, null, {
            // https://vitepress.dev/guide/extending-default-theme#layout-slots
            'home-hero-after': () => h(HomeHeroAfter),
            'home-hero-image': () => h(HomeHero),
            'home-hero-info-before': () => h(HomeHeroInfoBefore),
            'home-hero-info-after': () => h(HomeHeroInfoAfter),
            'home-features-before': () => h(HomeFeaturesBeforeVue),
            'home-hero-actions-after': () => h(HomeMit),
        })
    },
    enhanceApp({ app, router, siteData }) {
        enhanceAppWithTabs(app)
        app.use(VueGtag, {
            config: {
                id: 'GTM-WZ5RXGZJ',
                params: {
                    anonymize_ip: true,
                },
            },
        })
    },
} satisfies Theme
