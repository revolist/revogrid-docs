<template>
  <section class="rg-section">
    <div class="rg-container">
      <HomeSectionHeader :section="section" />
      <div class="rg-faq-list">
        <div
          v-for="(item, index) in section?.items"
          :key="item.q"
          class="rg-faq-item"
          :class="{ open: openFaqs[index] }"
        >
          <button type="button" @click="toggleFaq(index)">
            <span>{{ item.q }}</span>
            <span aria-hidden="true">+</span>
          </button>
          <p>{{ item.a }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import HomeSectionHeader from './HomeSectionHeader.vue'
import type { HomeV2Record } from './homeV2Utils'

defineProps<{
  section?: HomeV2Record
}>()

const openFaqs = ref<Record<number, boolean>>({ 0: true })

function toggleFaq(index: number) {
  openFaqs.value = {
    ...openFaqs.value,
    [index]: !openFaqs.value[index],
  }
}
</script>
