<template>
  <section id="demos" class="rg-section">
    <div class="rg-container">
      <HomeSectionHeader :section="section" />
      <div class="rg-demo-grid">
        <a
          v-for="demo in section?.items"
          :key="demo.title"
          class="rg-demo-card"
          :href="linkOf(demo.link)"
        >
          <DemoPreview :type="demo.type" />
          <div class="rg-demo-card-body">
            <h3>{{ demo.title }}</h3>
            <p>{{ demo.description }}</p>
            <span>Open demo -&gt;</span>
          </div>
        </a>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import DemoPreview from './DemoPreview.vue'
import HomeSectionHeader from './HomeSectionHeader.vue'
import { type HomeV2Record, useHomeV2Links } from './homeV2Utils'

defineProps<{
  section?: HomeV2Record
}>()

const { linkOf } = useHomeV2Links()
</script>
