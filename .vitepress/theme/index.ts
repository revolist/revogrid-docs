// https://vitepress.dev/guide/custom-theme
import { h } from 'vue'
import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import { ID_INJECTION_KEY, ZINDEX_INJECTION_KEY } from 'element-plus'
import './style.scss'
import HomeHero from './HomeHero.vue'
import HomeFeaturesBeforeVue from './HomeFeaturesBefore.vue'
import HomeHeroInfoAfter from './HomeHeroInfoAfter.vue'
import HomeHeroInfoBefore from './HomeHeroInfoBefore.vue'
import HomeMit from './HomeMit.vue'
import HomeHeroAfter from './HomeHeroAfter.vue'
import CustomLayout from './CustomLayout.vue'
import { enhanceAppWithTabs } from 'vitepress-plugin-tabs/client'

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
        app.provide(ZINDEX_INJECTION_KEY, { current: 0 })
        app.provide(ID_INJECTION_KEY, { prefix: 1024, current: 0 })
        enhanceAppWithTabs(app)
        app.component('custom', CustomLayout)
    },
} satisfies Theme
