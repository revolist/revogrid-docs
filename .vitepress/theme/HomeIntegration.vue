<script setup lang="ts">
import { useData } from 'vitepress'
import { computed } from 'vue'
import Icon from './VPIcon.vue'
const { frontmatter } = useData()
const integrations = computed(() => {
    if (frontmatter.value.integrations?.length) {
        return frontmatter.value.integrations
    }
    return []
})
</script>

<template>
    <section class="rv-container integrations_banner" id="integrations">
        <header>
            <div>
                <h2 class="rv-overline-1">Framework Integrations</h2>
                <h3 class="rv-heading-2">
                    A single component library for all of your apps.
                </h3>
            </div>
            <p class="rv-paragraph-2">
                RevoGrid components are built to work with any major framework
                or no framework at all.
            </p>
        </header>
        <div>
            <ul class="integrationsList">
                <li v-for="item in integrations">
                    <a :href="`docs/${item.title.toLowerCase()}.html`" class="card integrationsCard"
                        ><div>
                            <h2 class="rv-overline-3">Integration</h2>
                            <h3 class="rv-heading-5">{{ item.title }}</h3>
                            <p class="rv-paragraph-4">
                                {{ item.details }}
                            </p>
                        </div>
                        <div class="flexEnd">
                            <Icon
                                style="margin-top: 8px;"
                                :alt="`${item.title.toLowerCase()} revogrid icon`"
                                :name="item.icon"
                                :width="40"
                                :height="45" />
                            <Icon
                                alt="arrow"
                                name="arrow-right-solid"
                                :width="18"
                                :height="16" />
                        </div>
                    </a>
                </li>
            </ul>
            <div class="ctaFlex">
                <a href="docs/overview" class="buttonSecondary"
                    >Explore Integrations →</a
                >
            </div>
        </div>
    </section>
</template>
<style lang="scss" scoped>
.integrations_banner {
    padding-block-start: var(--section-space);
    display: flex;
    flex-wrap: wrap;
    align-items: flex-end;
    justify-content: space-between;
    gap: 2rem;


    .code-switcher {
        margin-block-start: 4rem;
    }
    header {
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: flex-end;
        gap: 2rem;
        margin-block-end: 2rem;
    }
    header > :first-child {
        max-width: 30rem;
    }
    header > :first-child [class*='rv-heading'] {
        margin-block-end: 0;
    }
    header p {
        max-width: 27rem;
        height: auto;
        font-size: 1.2rem;
        letter-spacing: -0.01rem;
    }
    .ctaFlex {
        display: flex;
        justify-content: center;
    }
}
@media (max-width: 900px) {
    .integrations_banner header {
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;
    }
}

ul.integrationsList {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-column-gap: 2rem;
    -moz-column-gap: 2rem;
    column-gap: 2rem;
    grid-row-gap: 2rem;
    row-gap: 2rem;
    margin-block-end: 2rem;
}
@media (max-width: 900px) {
    ul.integrationsList {
        grid-template-columns: 1fr 1fr;
        -moz-column-gap: 2rem;
        column-gap: 2rem;
    }
}
@media (max-width: 500px) {
    ul.integrationsList {
        grid-template-columns: 1fr;
        -moz-column-gap: 2rem;
        column-gap: 2rem;
    }
}
.integrationsCard {
    padding: 2rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    min-width: 7.5rem;
    height: 100%;
    &:focus,
    &:hover {
        box-shadow:
            0 4px 8px rgba(0, 0, 0, 0.1),
            0 2px 4px rgba(0, 0, 0, 0.06);
    }
    [class*='rv-paragraph'] {
        margin-block-end: 3.188rem;
    }
    .flexEnd {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
}
</style>
