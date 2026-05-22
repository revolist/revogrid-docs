<template>
  <section class="rg-section rg-section-soft">
    <div class="rg-container">
      <HomeSectionHeader :section="section" />
      <div class="rg-usecases-grid">
        <div v-for="item in section?.items" :key="item.title" class="rg-usecase-card">
          <div class="rg-usecase-icon">
            <FontAwesomeSvgIcon :name="item.icon" />
          </div>
          <h3>{{ item.title }}</h3>
          <p v-html="productText(item.description)"></p>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import FontAwesomeSvgIcon from './FontAwesomeSvgIcon.vue'
import HomeSectionHeader from './HomeSectionHeader.vue'
import { linkProductMentions, type HomeV2Record, useHomeV2Links } from './homeV2Utils'

defineProps<{
  section?: HomeV2Record
}>()

const { linkOf } = useHomeV2Links()

function productText(value?: string) {
  return linkProductMentions(value, linkOf)
}
</script>

<style lang="scss" scoped>
.rg-usecase-icon {
  font-family: inherit;
  font-size: 0;
}
</style>
