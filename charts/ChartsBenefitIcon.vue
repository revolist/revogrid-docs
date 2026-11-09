<template>
  <svg
    class="benefit-icon"
    :class="`benefit-icon--${kind}`"
    width="72"
    height="64"
    viewBox="0 0 72 64"
    fill="none"
    aria-hidden="true"
    focusable="false"
  >
    <rect
      class="back-layer"
      x="16"
      y="12"
      width="46"
      height="46"
      rx="10"
      transform="rotate(9 39 35)"
    />
    <rect class="front-layer" x="5" y="3" width="48" height="48" rx="10" />
    <g stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round">
      <template v-if="kind === 'chart'">
        <path d="M17 15v24h25" />
        <path d="M23 33v-6m7 6V22m7 11V17" />
      </template>
      <template v-else-if="kind === 'appearance'">
        <path d="M17 19h5m7 0h12M17 27h14m7 0h3M17 35h5m7 0h12" />
        <circle cx="25.5" cy="19" r="3.5" />
        <circle cx="34.5" cy="27" r="3.5" />
        <circle cx="25.5" cy="35" r="3.5" />
      </template>
      <template v-else>
        <rect x="17" y="14" width="9" height="8" rx="2" />
        <rect x="32" y="31" width="9" height="8" rx="2" />
        <path d="M26 18h7a3 3 0 0 1 3 3v10M21 22v10a3 3 0 0 0 3 3h8" />
      </template>
    </g>
  </svg>
</template>

<script setup lang="ts">
defineProps<{ kind: 'chart' | 'appearance' | 'workflow' }>()
</script>

<style scoped>
.benefit-icon {
  display: block;
  width: 72px;
  height: 64px;
  overflow: visible;
  color: #6647f0;
}
.benefit-icon--appearance {
  color: #df641f;
}
.benefit-icon--workflow {
  color: #0c9e6b;
}
.back-layer {
  fill: color-mix(in srgb, currentColor 15%, var(--vp-c-bg));
}
.front-layer {
  fill: var(--vp-c-bg);
  stroke: color-mix(in srgb, currentColor 22%, var(--vp-c-divider));
  filter: drop-shadow(0 3px 4px color-mix(in srgb, currentColor 10%, transparent));
}
:global(.dark) .benefit-icon--chart {
  color: #ab98ff;
}
:global(.dark) .benefit-icon--appearance {
  color: #ffad73;
}
:global(.dark) .benefit-icon--workflow {
  color: #34d399;
}
</style>
