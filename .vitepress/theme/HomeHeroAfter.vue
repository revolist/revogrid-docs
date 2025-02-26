<template>
    <hr />

    <div class="VPFeatures VPHomeFeatures">
        <div class="container">
            <h2 class="rv-overline-1">{{ value.title }}</h2>
            <div class="rv-heading-2">{{ value.details }}</div>
        </div>
    </div>

    <VPFeatures :features="features" />
    <br />

    <hr />
    <br />
    <br />
    <div class="VPFeatures VPHomeFeatures">
        <div class="container flex">
            <div class="VPFeature">
                <h2 class="rv-overline-1">Get started</h2>
                <div class="rv-heading-2">
                    In a few seconds.
                </div>
                <div class="details">
                    With just a few lines of code, you can have a powerful data grid up and running.
                    Simple API, intuitive configuration, and out of the box integration with your favorite framework - Vue, React, Angular, Svelte or vanilla JavaScript.  
                    <br /><br /> Easy right? So what are you waiting for?
                    <br />
                    <br />
                    <VPButton theme="alt" text="Documentation" href="/guide" />
                </div>
            </div>
            <div class="custom-tabs grow">
                <div class="tab-header">
                    <button 
                        v-for="(tab, index) in tabs" 
                        :key="index"
                        :class="{ active: activeTab === index }"
                        @click="activeTab = index"
                    >
                        {{ tab.label }}
                    </button>
                </div>
                <div class="tab-content">
                    <div v-html="code"/>
                </div>
            </div>
        </div>
    </div>
    <br />
    <br />
</template>

<script lang="ts" setup>
import VPFeatures from 'vitepress/dist/client/theme-default/components/VPFeatures.vue'
import { VPButton } from 'vitepress/theme'
import { useData } from 'vitepress'
import { codeToHtml } from 'shiki'
import { computed, ref, watch } from 'vue'
import VueExample from '../../demo/vue/vue3-short.vue?raw'
import AngularExample from '../../demo/angular/angular.simple-grid.ts?raw'
import ReactExample from '../../demo/react/react.simple-grid.tsx?raw'
import SvelteExample from '../../demo/svelte/svelte.simple-grid.svelte?raw'
import JSExample from '../../demo/js/simple-grid.js?raw'

const { frontmatter } = useData()
const value = computed(() => {
    return frontmatter.value.recommended ?? {}
})
const features = computed(() => {
    return frontmatter.value.recommended.features ?? []
})

const code = ref('')
const activeTab = ref(0)
const tabs = [
    { label: 'Vue', code: VueExample, lang: 'vue' },
    { label: 'React', code: ReactExample, lang: 'tsx' },
    { label: 'Angular', code: AngularExample, lang: 'ts' },
    { label: 'Svelte', code: SvelteExample, lang: 'svelte' },
    { label: 'JS', code: JSExample, lang: 'js' },
]
watch(activeTab, async (newTab) => {
    const html = await codeToHtml(tabs[newTab].code, {
        lang: tabs[newTab].lang,
        theme: 'github-dark-high-contrast',
    })
    code.value = html
}, { immediate: true })
</script>

<style lang="scss" scoped>
.VPFeatures {
    background-color: transparent;
    padding-bottom: 5px;
}

hr {
    border: none;
    border-top: 1px solid var(--vp-c-divider);
}

:deep(.VPFeature) {
    background-color: transparent;
    border: 0;
    padding: 0;
}

.details {
    padding-top: 8px;
    line-height: 24px;
    font-size: 14px;
    font-weight: 500;
    color: var(--vp-c-text-2);
}

.container.flex {
    display: flex;
    gap: 2rem;
    align-items: flex-start;
    justify-content: space-between;
    flex-direction: column;

    @media (min-width: 960px) {
        flex-direction: row;

        > div:first-child {
            flex: 1;
            max-width: 33%;
        }

        > div.custom-tabs {
            flex: 2;
            width: 66.666%;
            max-width: 600px;
        }
    }
}

.custom-tabs {
    --tabs-bg-main: #0a0c10;
    --tabs-bg-header: #252525;
    --tabs-border: #2c2c2c;
    --tabs-text-inactive: #c6c6c6;
    --tabs-text-hover: #eee;
    --tabs-text-active: #42b883;

    border: 1px solid var(--tabs-border);
    border-radius: 16px;
    overflow: hidden;
    background-color: var(--tabs-bg-main);
    width: 100%;
    box-shadow: 0 20px 50px 0 rgba(0, 0, 0, 0.3);
}

.tab-header {
    display: flex;
    border-bottom: 1px solid var(--tabs-border);
    background-color: var(--tabs-bg-header);
    width: 100%;
    
    button {
        flex: 1;
        padding: 8px 16px;
        border: none;
        background: none;
        cursor: pointer;
        font-size: 14px;
        color: var(--tabs-text-inactive);
        transition: color 0.2s, background-color 0.2s;
        text-align: center;

        &:hover {
            color: var(--tabs-text-hover);
        }

        &.active {
            color: var(--tabs-text-active);
            background-color: var(--tabs-bg-main);
            border-bottom: 2px solid var(--tabs-text-active);
            font-weight: 600;
        }
    }
}

.tab-content {
    padding: 16px;
    font-size: 14px;
    background-color: var(--tabs-bg-main);
    color: var(--tabs-text-hover);
}
</style>
