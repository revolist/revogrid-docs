<template>
  <section class="rg-section rg-section-soft">
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
<style lang="scss" scoped>

.rg-comparison-wrap {
  width: 100%;
  max-width: 100%;
  overflow-x: auto;
  border-radius: 16px;
  border: 1px solid var(--rg-border);
  background: var(--rg-bg);
}

.rg-comparison {
  width: 100%;
  min-width: 760px;
  border-collapse: collapse;
  font-size: 14px;

  th,
  td {
    border-bottom: 1px solid var(--rg-border);
    padding: 13px 18px;
    text-align: center;
  }

  th:first-child,
  td:first-child {
    text-align: left;
  }

  th {
    color: var(--rg-text);
    font-size: 14px;
  }

  .highlight {
    background: var(--rg-green-bg);
  }

  .check {
    color: var(--rg-font-green);
    font-weight: 600;
  }

  .cross {
    color: #f87171;
  }

  .partial {
    color: #f59e0b;
  }
}
</style>