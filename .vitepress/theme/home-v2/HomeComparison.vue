<template>
  <section class="rg-section">
    <div class="rg-container">
      <HomeSectionHeader :section="section" />
      <div class="rg-comparison-wrap">
        <table class="rg-comparison">
          <thead>
            <tr>
              <th v-for="(col, index) in section?.columns" :key="col" :class="{ highlight: index === 2 }">
                {{ col }}
              </th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="row in section?.rows" :key="row[0]">
              <td v-for="(cell, index) in row" :key="`${row[0]}-${index}`" :class="comparisonClass(cell, index)">
                {{ comparisonText(cell) }}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import HomeSectionHeader from './HomeSectionHeader.vue'
import { comparisonClass, comparisonText, type HomeV2Record } from './homeV2Utils'

defineProps<{
  section?: HomeV2Record
}>()
</script>
