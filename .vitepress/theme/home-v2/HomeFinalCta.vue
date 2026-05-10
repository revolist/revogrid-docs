<template>
  <section class="rg-final-cta">
    <h2>{{ section?.title }}</h2>
    <p>{{ section?.description }}</p>
    <div class="rg-actions rg-final-actions">
      <a
        v-for="action in section?.actions"
        :key="action.text"
        class="rg-btn"
        :class="`rg-btn-${action.variant}`"
        :href="linkOf(action.link)"
      >
        {{ action.text }}<HomeChevron v-if="action.variant === 'ghost'" />
      </a>
    </div>
    <small>{{ section?.note }}</small>
  </section>
</template>

<script lang="ts" setup>
import HomeChevron from './HomeChevron.vue'
import { type HomeV2Record, useHomeV2Links } from './homeV2Utils'

defineProps<{
  section?: HomeV2Record
}>()

const { linkOf } = useHomeV2Links()
</script>
