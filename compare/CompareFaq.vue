<template>
  <section class="compare-faq" aria-labelledby="compare-faq-title">
    <div class="compare-faq-heading">
      <p>FAQ</p>
      <h2 id="compare-faq-title">{{ title }}</h2>
    </div>

    <div class="answer-list">
      <article
        v-for="(item, index) in items"
        :key="item.title"
        class="answer-item"
        :class="{ open: openAnswers[index] }"
      >
        <button
          type="button"
          class="answer-trigger"
          :aria-expanded="Boolean(openAnswers[index])"
          :aria-controls="`compare-faq-answer-${index}`"
          @click="toggleAnswer(index)"
        >
          <span>{{ item.title }}</span>
          <span class="answer-toggle" aria-hidden="true">+</span>
        </button>

        <div
          v-show="openAnswers[index]"
          :id="`compare-faq-answer-${index}`"
          class="answer-body"
        >
          <p>{{ item.description }}</p>
          <div v-if="item.links?.length" class="answer-links">
            <a
              v-for="link in item.links"
              :key="link.href"
              :href="link.href"
              :target="link.external ? '_blank' : undefined"
              :rel="link.external ? 'noopener noreferrer' : undefined"
            >
              {{ link.text }}
            </a>
          </div>
        </div>
      </article>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'

defineProps<{
  title: string
  items: Array<{
    title: string
    description: string
    links?: Array<{
      href: string
      text: string
      external?: boolean
    }>
  }>
}>()

const openAnswers = ref<Record<number, boolean>>({ 0: true })

function toggleAnswer(index: number) {
  openAnswers.value = {
    ...openAnswers.value,
    [index]: !openAnswers.value[index],
  }
}
</script>

<style scoped>
.compare-faq {
  margin: 3rem 0;
}

.compare-faq-heading {
  max-width: 780px;
  margin-bottom: 1.5rem;
}

.compare-faq-heading p {
  margin: 0 0 0.5rem;
  color: var(--vp-c-brand-1);
  font-size: 0.78rem;
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.compare-faq-heading h2 {
  margin: 0;
  color: var(--vp-c-text-1);
  font-size: clamp(1.8rem, 2vw, 2.5rem);
  line-height: 1.12;
}

.answer-list {
  display: grid;
  gap: 0.85rem;
  max-width: 900px;
}

.answer-item {
  border: 1px solid var(--vp-c-divider);
  border-radius: 8px;
  background: var(--vp-c-bg);
  overflow: hidden;
  transition:
    border-color 0.2s ease,
    box-shadow 0.2s ease;
}

.answer-item.open {
  border-color: color-mix(in srgb, var(--vp-c-brand-1), var(--vp-c-divider) 55%);
  box-shadow: 0 14px 36px color-mix(in srgb, #000, transparent 94%);
}

.answer-item.open .answer-toggle {
  transform: rotate(45deg);
  color: var(--vp-c-brand-1);
}

.answer-trigger {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  border: 0;
  background: transparent;
  color: var(--vp-c-text-1);
  cursor: pointer;
  font: inherit;
  font-size: 1.05rem;
  font-weight: 700;
  line-height: 1.3;
  padding: 1.1rem 1.25rem;
  text-align: left;
}

.answer-trigger:hover {
  background: color-mix(in srgb, var(--vp-c-brand-1), transparent 94%);
}

.answer-toggle {
  flex: 0 0 auto;
  color: var(--vp-c-text-3);
  font-size: 1.45rem;
  line-height: 1;
  transition:
    color 0.2s ease,
    transform 0.2s ease;
}

.answer-body {
  border-top: 1px solid var(--vp-c-divider);
  padding: 0 1.25rem 1.25rem;
}

.answer-body p {
  max-width: 720px;
  margin: 1rem 0 0;
  color: var(--vp-c-text-2);
  font-size: 0.98rem;
  line-height: 1.7;
}

.answer-links {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem 0.8rem;
  margin-top: 1rem;
}

.answer-links a {
  display: inline-flex;
  color: var(--vp-c-brand-1);
  font-size: 0.92rem;
  font-weight: 600;
  text-decoration: none;
}

.answer-links a:hover {
  text-decoration: underline;
}
</style>
