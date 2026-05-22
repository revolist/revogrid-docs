<template>
  <section class="pro-cta">
    <div class="cta-glow" aria-hidden="true"></div>
    <div class="cta-inner">
      <h2>{{ title }}</h2>
      <p>{{ description }}</p>
      <div class="cta-actions">
        <ProDocButton :href="primaryHref" :target="primaryTarget" :rel="primaryRel" arrow>{{ primaryLabel }}</ProDocButton>
        <ProDocButton :href="secondaryHref" :target="secondaryTarget" :rel="secondaryRel" variant="secondary">{{ secondaryLabel }}</ProDocButton>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import ProDocButton from './ProDocButton.vue'

defineProps<{
  title: string
  description: string
  primaryHref: string
  primaryLabel: string
  primaryTarget?: string
  primaryRel?: string
  secondaryHref: string
  secondaryLabel: string
  secondaryTarget?: string
  secondaryRel?: string
}>()
</script>

<style lang="scss" scoped>
.pro-cta {
  position: relative;
  overflow: hidden;
  padding: 92px 24px;
  border-top: 1px solid var(--vp-c-divider);
  text-align: center;
}

.cta-inner {
  position: relative;
  width: min(100%, 760px);
  margin: 0 auto;
}

.cta-glow {
  position: absolute;
  top: -110px;
  left: 50%;
  width: 700px;
  height: 380px;
  pointer-events: none;
  background: radial-gradient(ellipse, var(--pro-doc-soft, var(--gantt-soft, rgba(29, 78, 216, 0.09))) 0%, transparent 70%);
  transform: translateX(-50%);
}

h2 {
  margin: 0 0 14px;
  color: var(--vp-c-text-1);
  font-size: clamp(30px, 3.8vw, 48px);
  line-height: 1.1;
  letter-spacing: -1.4px;
  white-space: pre-line;
}

p {
  max-width: 640px;
  margin: 0 auto 32px;
  color: var(--vp-c-text-2);
  font-size: 17px;
  line-height: 1.7;
}

.cta-actions {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 12px;
  align-items: center;
}
</style>
