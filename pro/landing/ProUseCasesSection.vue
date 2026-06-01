<template>
  <section class="section usecase-section">
    <div class="pro-container">
      <div class="section-head">
        <div class="section-tag">- {{ page.useCases.tag }}</div>
        <h2>
          {{ page.useCases.title.prefix }}
          <em>{{ page.useCases.title.highlight }}</em>
        </h2>
        <p class="section-sub">{{ page.useCases.subtitle }}</p>
      </div>

      <div class="usecases">
        <div v-for="item in page.useCases.items" :key="item.title" class="uc">
          <div class="uc-icon">{{ item.icon }}</div>
          <h3>{{ item.title }}</h3>
          <p>{{ item.description }}</p>
          <ul>
            <li v-for="tag in item.tags" :key="tag">{{ tag }}</li>
          </ul>
        </div>
      </div>

      <div class="frameworks">
        <div class="copy">
          <h3>{{ page.useCases.frameworks.title }}</h3>
          <p>{{ page.useCases.frameworks.description }}</p>
        </div>
        <div class="logos">
          <span v-for="framework in page.useCases.frameworks.items" :key="framework">{{ framework }}</span>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
defineProps<{
  page: Record<string, any>
}>()
</script>
