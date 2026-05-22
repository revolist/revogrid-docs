<template>
  <section id="capabilities" class="rg-section rg-section-soft">
    <div class="rg-container">
      <HomeSectionHeader :section="section" />
      <div class="rg-caps-grid">
        <a
          v-for="cap in section?.items"
          :key="cap.title"
          class="rg-cap-card"
          :href="linkOf(cap.link)"
          :target="targetOf(cap.link)"
          :rel="relOf(cap.link)"
          :aria-label="`${cap.title} documentation`"
        >
          <div class="rg-icon">
            <FontAwesomeSvgIcon :name="cap.icon" />
          </div>
          <h3>{{ cap.title }}</h3>
          <p>{{ cap.description }}</p>
        </a>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import FontAwesomeSvgIcon from './FontAwesomeSvgIcon.vue'
import HomeSectionHeader from './HomeSectionHeader.vue'
import { type HomeV2Record, useHomeV2Links } from './homeV2Utils'

defineProps<{
  section?: HomeV2Record
}>()

const { linkOf, targetOf, relOf } = useHomeV2Links()
</script>

<style lang="scss" scoped>
.rg-icon {
  font-family: inherit;
  font-size: 0;
}
</style>
