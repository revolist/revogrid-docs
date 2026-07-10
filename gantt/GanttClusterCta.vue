<template>
  <aside class="gantt-cluster-cta" aria-label="Explore RevoGrid Gantt">
    <div>
      <span>RevoGrid Gantt</span>
      <h2>See the complete grid-first Gantt component.</h2>
      <p>Review features, live demos, framework support, performance evidence, pricing, and trial terms on the main Gantt page.</p>
    </div>
    <div class="actions">
      <ProDocButton href="/gantt">Explore RevoGrid Gantt</ProDocButton>
      <ProDocButton href="/demo/gantt" variant="secondary">Open live demo</ProDocButton>
      <ProDocButton href="/trial" variant="secondary">Request trial</ProDocButton>
    </div>
  </aside>
</template>

<script lang="ts" setup>
import ProDocButton from '../pro/ProDocButton.vue'
</script>

<style lang="scss" scoped>
.gantt-cluster-cta {
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  gap: 28px;
  align-items: center;
  margin: 30px 0 42px;
  padding: 26px 28px;
  border: 1px solid color-mix(in srgb, var(--vp-c-brand-1) 30%, var(--vp-c-divider));
  border-radius: 12px;
  background: linear-gradient(135deg, color-mix(in srgb, var(--vp-c-brand-1) 8%, transparent), var(--vp-c-bg-soft));

  span { color: var(--vp-c-brand-1); font-size: 12px; font-weight: 800; letter-spacing: .08em; text-transform: uppercase; }
  h2 { margin: 7px 0 6px; border: 0; padding: 0; font-size: 22px; }
  p { margin: 0; color: var(--vp-c-text-2); font-size: 14px; line-height: 1.65; }
}

.actions { display: grid; gap: 8px; min-width: 190px; }

@media (max-width: 760px) {
  .gantt-cluster-cta { grid-template-columns: 1fr; }
  .actions { grid-template-columns: 1fr; }
}
</style>
