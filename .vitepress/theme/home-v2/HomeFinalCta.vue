<template>
  <section class="rg-final-cta">
    <h2>{{ section?.title }}</h2>
    <p v-html="descriptionHtml"></p>
    <div class="rg-actions rg-final-actions">
      <a
        v-for="action in section?.actions"
        :key="action.text"
        class="rg-btn"
        :class="`rg-btn-${action.variant}`"
        :href="linkOf(action.link)"
        :target="action.target"
      >
        {{ action.text }}<HomeChevron v-if="action.variant === 'ghost'" />
      </a>
    </div>
    <small>{{ section?.note }}</small>
  </section>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import HomeChevron from './HomeChevron.vue'
import { linkProductMentions, type HomeV2Record, useHomeV2Links } from './homeV2Utils'

const props = defineProps<{
  section?: HomeV2Record
}>()

const { linkOf } = useHomeV2Links()
const descriptionHtml = computed(() => linkProductMentions(props.section?.description, linkOf))
</script>
