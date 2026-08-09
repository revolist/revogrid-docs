<script setup lang="ts">
defineProps<{
  slug: string
  alt: string
  caption: string
}>()

const mediaRevisions: Readonly<Record<string, string>> = {
  construction: '20260808-exact',
  erp: '20260808-polished',
  'internal-tools': '20260808-polished',
  manufacturing: '20260808-polished',
  'professional-services': '20260808-polished',
  'resource-planning': '20260808-polished',
}
</script>

<template>
  <div class="gantt-use-case-media">
    <figure>
      <img
        :src="`/img/gantt-use-cases/${slug}.webp${mediaRevisions[slug] ? `?v=${mediaRevisions[slug]}` : ''}`"
        :alt="alt"
        width="1200"
        height="675"
        loading="eager"
        decoding="async"
      >
      <figcaption>{{ caption }}</figcaption>
    </figure>
  </div>
</template>

<style scoped lang="scss">
.gantt-use-case-media {
  margin: 30px 0 38px;
}

figure {
  margin: 0;
  overflow: hidden;
  border: 1px solid var(--vp-c-divider);
  border-radius: 14px;
  background: var(--vp-c-bg-soft);

  img {
    display: block;
    width: 100%;
    height: auto;
    margin: 0;
  }

  figcaption {
    padding: 13px 16px;
    border-top: 1px solid var(--vp-c-divider);
    color: var(--vp-c-text-2);
    font-size: 13px;
    line-height: 1.55;
  }
}

</style>
