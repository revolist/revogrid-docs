<script setup lang="ts">
const props = defineProps<{
  title: string
  slug: string
  alt: string
  caption: string
  liveHref: string
}>()

const polishedImages: Record<string, string> = {
  'product-delivery': '/blog/kanban-product-development-polished.png',
  'support-operations': '/blog/kanban-support-operations-polished.png',
  'sales-onboarding': '/blog/kanban-sales-pipeline-polished.png',
  'content-approvals': '/blog/kanban-editorial-calendar-polished.png',
  'quality-manufacturing': '/blog/kanban-manufacturing-quality-polished.png',
  'internal-workflows': '/blog/kanban-internal-workflow-polished.png',
}

const imageSrc = polishedImages[props.slug] ?? `/img/kanban-use-cases/${props.slug}.webp`
</script>

<template>
  <div class="kanban-use-case-media">
    <figure class="kanban-use-case-media__figure">
      <img
        class="kanban-use-case-media__poster"
        :src="imageSrc"
        :alt="alt"
        width="1672"
        height="941"
        loading="eager"
        decoding="async"
      >
      <figcaption class="kanban-use-case-media__caption">
        <span>{{ caption }}</span>
        <a :href="liveHref" target="_blank" rel="noopener noreferrer">Open the interactive board ↗</a>
      </figcaption>
    </figure>
  </div>
</template>

<style scoped lang="scss">
.kanban-use-case-media { margin: 30px 0 38px; }
.kanban-use-case-media__figure { overflow: hidden; border: 1px solid var(--vp-c-divider); border-radius: 14px; background: var(--vp-c-bg-soft); }
.kanban-use-case-media__figure { margin: 0; }
.kanban-use-case-media__poster { display: block; width: 100%; aspect-ratio: 16 / 9; margin: 0; background: #eef2f1; object-fit: contain; }
.kanban-use-case-media__caption { display: flex; align-items: center; justify-content: space-between; gap: 18px; padding: 13px 16px; border-top: 1px solid var(--vp-c-divider); color: var(--vp-c-text-2); font-size: 13px; line-height: 1.55; }
.kanban-use-case-media__caption span { min-width: 0; }
.kanban-use-case-media__caption a { flex: 0 0 auto; color: var(--vp-c-brand-1); font-size: 12px; font-weight: 750; text-decoration: none; }
.kanban-use-case-media__caption a:hover { text-decoration: underline; text-underline-offset: 3px; }
.kanban-use-case-media__caption a:focus-visible { border-radius: 4px; outline: 2px solid var(--vp-c-brand-1); outline-offset: 3px; }
@media (max-width: 620px) { .kanban-use-case-media__caption { align-items: flex-start; flex-direction: column; gap: 8px; } }
</style>
