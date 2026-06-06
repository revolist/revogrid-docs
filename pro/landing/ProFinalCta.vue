<template>
  <section class="pro-container">
    <div class="final-cta">
      <div class="final-cta-inner">
        <h2>
          {{ page.cta.title.prefix }} <em>{{ page.cta.title.highlight }}</em><br />
          {{ page.cta.title.suffix }}
        </h2>
        <p>{{ page.cta.subtitle }}</p>
        <div class="cta-row">
          <a :href="page.cta.actions.primary.href" class="pro-btn pro-btn-primary pro-btn-lg">{{ page.cta.actions.primary.label }}</a>
          <a
            v-if="page.cta.actions.trial"
            :href="page.cta.actions.trial.href"
            class="pro-btn pro-btn-ghost pro-btn-lg"
          >
            {{ page.cta.actions.trial.label }}
          </a>
          <a :href="page.cta.actions.secondary.href" class="pro-btn pro-btn-ghost pro-btn-lg">{{ page.cta.actions.secondary.label }}</a>
        </div>
        <div class="note">{{ page.cta.note }}</div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
defineProps<{
  page: Record<string, any>
}>()
</script>
