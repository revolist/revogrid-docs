<!--@include: ./_cross-framework-banner.md-->

:::warning Can't find your framework?

[Ask us](https://github.com/revolist/revogrid/discussions) or [open an issue](https://github.com/revolist/revogrid/issues/new?assignees=&labels=&projects=&template=new-issue.md&title=) on GitHub.
:::

<style scoped>
    .framework-list {
        display: grid;
        gap: 14px;
        margin: 32px 0;
    }

    .framework-list__item {
        display: flex;
        align-items: center;
        gap: 10px;
        min-height: 28px;
    }

    .framework-list__item img {
        flex: 0 0 24px;
        width: 20px;
        height: 20px;
        object-fit: contain;
    }

    .framework-list__item a {
        font-weight: 500;
    }
</style>

<div class="framework-list">
    <div class="framework-list__item">
        <img src="/angular.svg" alt="" />
        <span><a href="/guide/angular/">Angular</a> – Setup and usage in Angular environments.</span>
    </div>
    <div class="framework-list__item">
        <img src="/react.svg" alt="" />
        <span><a href="/guide/react/">React</a> – Usage within React applications.</span>
    </div>
    <div class="framework-list__item">
        <img src="/svelte.svg" alt="" />
        <span><a href="/guide/svelte/">Svelte</a> – Integrating into Svelte projects.</span>
    </div>
    <div class="framework-list__item">
        <img src="/vuejs.svg" alt="" />
        <span><a href="/guide/vue2/">Vue 2</a> – Specific adaptations for Vue 2.</span>
    </div>
    <div class="framework-list__item">
        <img src="/vuejs.svg" alt="" />
        <span><a href="/guide/vue3/">Vue 3</a> – Detailed guide for integrating with Vue 3.</span>
    </div>
</div>
