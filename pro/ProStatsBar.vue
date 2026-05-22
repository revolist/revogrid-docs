<template>
  <section class="pro-stats" :aria-label="ariaLabel">
    <div class="container pro-stats__inner">
      <div v-for="item in items" :key="item.label" class="pro-stats__item">
        <strong>{{ item.value }}</strong>
        <span>{{ item.label }}</span>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
defineProps<{
  items: readonly { value: string, label: string }[]
  ariaLabel?: string
}>()
</script>

<style lang="scss" scoped>
.pro-stats {
  padding: 42px 0;
  border-top: 1px solid var(--vp-c-divider);
  background: var(--vp-c-bg-soft);
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 48px;

  @media (max-width: 768px) {
    padding: 0 24px;
  }
}

.pro-stats__inner {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1px;

  @media (max-width: 760px) {
    grid-template-columns: repeat(2, 1fr);
  }
}

.pro-stats__item {
  text-align: center;

  strong {
    display: block;
    color: var(--vp-c-text-1);
    font-size: 31px;
    line-height: 1.1;
  }

  span {
    display: block;
    margin-top: 4px;
    color: var(--vp-c-text-3);
    font-family: var(--vp-font-family-mono);
    font-size: 11px;
    font-weight: 600;
    letter-spacing: 0.06em;
    text-transform: uppercase;
  }
}
</style>
