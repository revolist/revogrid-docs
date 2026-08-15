<template>
  <nav class="pivot-framework-nav" aria-label="Pivot Table Component pages by framework">
    <span class="pivot-framework-nav__label">Choose framework</span>
    <div class="pivot-framework-nav__actions">
      <ProDocButton
        v-for="framework in frameworks"
        :key="framework.id"
        :href="framework.href"
        :variant="framework.id === active ? 'primary' : 'secondary'"
        :aria-current="framework.id === active ? 'page' : undefined"
      >
        {{ framework.label }}
      </ProDocButton>
    </div>
  </nav>
</template>

<script setup lang="ts">
import ProDocButton from '../pro/ProDocButton.vue'

defineProps<{
  active: 'react' | 'vue' | 'angular' | 'javascript'
}>()

const frameworks = [
  { id: 'react', label: 'React', href: '/pivot/react-pivot-table' },
  { id: 'vue', label: 'Vue', href: '/pivot/vue-pivot-table' },
  { id: 'angular', label: 'Angular', href: '/pivot/angular-pivot-table' },
  { id: 'javascript', label: 'JavaScript', href: '/pivot/javascript-pivot-table' },
] as const
</script>

<style scoped>
.pivot-framework-nav {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 12px;
  margin: 24px 0 32px;
  padding: 16px;
  border: 1px solid var(--vp-c-divider);
  border-radius: 12px;
  background: var(--vp-c-bg-soft);
}

.pivot-framework-nav__label {
  color: var(--vp-c-text-2);
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.06em;
  text-transform: uppercase;
}

.pivot-framework-nav__actions {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.pivot-framework-nav__actions :deep(.rg-btn) {
  min-height: 38px;
  padding: 9px 14px;
}

@media (max-width: 540px) {
  .pivot-framework-nav__actions,
  .pivot-framework-nav__actions :deep(.rg-btn) {
    width: 100%;
  }

  .pivot-framework-nav__actions :deep(.rg-btn) {
    justify-content: center;
  }
}
</style>
