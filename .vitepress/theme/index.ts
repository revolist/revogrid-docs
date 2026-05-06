// https://vitepress.dev/guide/custom-theme
import { h } from 'vue'
import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import { ID_INJECTION_KEY, ZINDEX_INJECTION_KEY } from 'element-plus'
import './style.scss'
import HomeHero from './HomeHero.vue'
import HomeHeroActions from './HomeHeroActions.vue'
import HomeHeroInfoAfter from './HomeHeroInfoAfter.vue'
import HomeHeroInfoBefore from './HomeHeroInfoBefore.vue'
import HomeMit from './HomeMit.vue'
import CustomLayout from './CustomLayout.vue'
import Mermaid from './Mermaid.vue'
import HomeSocialProof from './HomeSocialProof.vue'
import HomeUseCases from './HomeUseCases.vue'
import HomeLicensing from './HomeLicensing.vue'
import HomeFeatureStats from './HomeFeatureStats.vue'
import HomeCtaBanner from './HomeCtaBanner.vue'
import ExternalHomeLinks from './ExternalHomeLinks.vue'
import HeaderNavControls from './HeaderNavControls.vue'
import ProDemoFrame from './ProDemoFrame.vue'
import DemoWidgetFrame from './DemoWidgetFrame.vue'
import { enhanceAppWithTabs } from 'vitepress-plugin-tabs/client'

export default {
    extends: DefaultTheme,
    Layout: () => {
        return h(DefaultTheme.Layout, null, {
            // https://vitepress.dev/guide/extending-default-theme#layout-slots
            'layout-top': () => [
                h(HeaderNavControls),
                h(ExternalHomeLinks),
            ],
            'home-hero-image': () => h(HomeHero),
            'home-hero-actions-before-actions': () => h(HomeHeroActions),
            'home-hero-info-before': () => h(HomeHeroInfoBefore),
            'home-hero-actions-after': () => h(HomeHeroInfoAfter),
            'home-hero-after': () => [
                h(HomeSocialProof),
                h(HomeUseCases),
                h(HomeLicensing),
                h(HomeFeatureStats),
                h(HomeCtaBanner),
            ],
        })
    },
    enhanceApp({ app, router, siteData }) {
        app.provide(ZINDEX_INJECTION_KEY, { current: 0 })
        app.provide(ID_INJECTION_KEY, { prefix: 1024, current: 0 })
        enhanceAppWithTabs(app)
        app.component('custom', CustomLayout)
        app.component('Mermaid', Mermaid)
        app.component('ProDemoFrame', ProDemoFrame)
        app.component('DemoWidgetFrame', DemoWidgetFrame)
    },
} satisfies Theme
