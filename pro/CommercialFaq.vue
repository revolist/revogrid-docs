<template>
  <section
    v-if="faq.items.length"
    :id="id"
    class="commercial-faq"
    :aria-labelledby="headingId"
  >
    <div class="commercial-faq__heading">
      <p>FAQ</p>
      <h2 :id="headingId">{{ faq.heading || 'Frequently asked questions' }}</h2>
    </div>

    <div class="commercial-faq__list">
      <article
        v-for="(item, index) in faq.items"
        :key="item.q"
        class="commercial-faq__item"
        :class="{ open: openItem === index }"
      >
        <h3>
          <button
            :id="triggerId(index)"
            type="button"
            :aria-expanded="openItem === index"
            :aria-controls="panelId(index)"
            @click="toggle(index)"
          >
            <span>{{ item.q }}</span>
            <span class="commercial-faq__toggle" aria-hidden="true">+</span>
          </button>
        </h3>
        <div
          v-show="openItem === index"
          :id="panelId(index)"
          class="commercial-faq__answer"
          role="region"
          :aria-labelledby="triggerId(index)"
          v-html="item.a"
        ></div>
      </article>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import { useData } from 'vitepress'

interface CommercialFaqItem {
  q: string
  a: string
}

interface CommercialFaqData {
  heading?: string
  items?: CommercialFaqItem[]
}

const props = withDefaults(defineProps<{
  data?: CommercialFaqData
  id?: string
}>(), {
  data: undefined,
  id: 'commercial-faq',
})

const { frontmatter } = useData()
const faq = computed(() => {
  const source = props.data ?? (frontmatter.value.faq as CommercialFaqData | undefined)
  return {
    heading: source?.heading,
    items: source?.items ?? [],
  }
})
const openItem = ref<number | null>(0)
const headingId = computed(() => `${props.id}-heading`)
const triggerId = (index: number) => `${props.id}-trigger-${index}`
const panelId = (index: number) => `${props.id}-panel-${index}`
const toggle = (index: number) => {
  openItem.value = openItem.value === index ? null : index
}
</script>

<style scoped>
.commercial-faq {
  margin: 3rem 0;
}

.commercial-faq__heading {
  max-width: 780px;
  margin-bottom: 1.5rem;
}

.commercial-faq__heading p {
  margin: 0 0 0.5rem;
  color: var(--vp-c-brand-1);
  font-size: 0.78rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.commercial-faq__heading h2 {
  margin: 0;
  color: var(--vp-c-text-1);
  font-size: clamp(1.8rem, 2vw, 2.5rem);
  line-height: 1.12;
}

.commercial-faq__list {
  display: grid;
  gap: 0.75rem;
}

.commercial-faq__item {
  overflow: hidden;
  border: 1px solid var(--vp-c-divider);
  border-radius: 10px;
  background: var(--vp-c-bg);
  transition: border-color 0.2s ease, box-shadow 0.2s ease;
}

.commercial-faq__item.open {
  border-color: color-mix(in srgb, var(--vp-c-brand-1), var(--vp-c-divider) 58%);
  box-shadow: 0 14px 36px color-mix(in srgb, #000, transparent 94%);
}

.commercial-faq__item h3 {
  margin: 0;
}

.commercial-faq__item button {
  display: flex;
  width: 100%;
  min-height: 60px;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  border: 0;
  background: transparent;
  color: var(--vp-c-text-1);
  cursor: pointer;
  font: inherit;
  font-size: 1rem;
  font-weight: 700;
  line-height: 1.4;
  padding: 1rem 1.15rem;
  text-align: left;
}

.commercial-faq__item button:hover {
  background: color-mix(in srgb, var(--vp-c-brand-1), transparent 95%);
}

.commercial-faq__item button:focus-visible {
  outline: 3px solid color-mix(in srgb, var(--vp-c-brand-1), transparent 60%);
  outline-offset: -3px;
}

.commercial-faq__toggle {
  flex: 0 0 auto;
  color: var(--vp-c-text-3);
  font-size: 1.4rem;
  line-height: 1;
  transition: color 0.2s ease, transform 0.2s ease;
}

.commercial-faq__item.open .commercial-faq__toggle {
  color: var(--vp-c-brand-1);
  transform: rotate(45deg);
}

.commercial-faq__answer {
  border-top: 1px solid var(--vp-c-divider);
  padding: 1rem 1.15rem 1.2rem;
  color: var(--vp-c-text-2);
  font-size: 0.96rem;
  line-height: 1.7;
}

.commercial-faq__answer :deep(a) {
  color: var(--vp-c-brand-1);
  text-decoration: underline;
  text-underline-offset: 3px;
}

@media (prefers-reduced-motion: reduce) {
  .commercial-faq__item,
  .commercial-faq__toggle {
    transition: none;
  }
}
</style>
