<template>
  <section
    :id="id"
    class="compare-product-visuals"
    :aria-labelledby="headingId"
  >
    <div class="compare-product-visuals__heading">
      <p>{{ eyebrow }}</p>
      <h2 :id="headingId">{{ heading }}</h2>
      <div v-if="description">{{ description }}</div>
    </div>

    <div class="compare-product-visuals__grid">
      <figure
        v-for="product in products"
        :key="product.name"
        class="compare-product-visuals__card"
      >
        <div class="compare-product-visuals__label">
          <strong>{{ product.name }}</strong>
          <span>{{ product.badge }}</span>
        </div>

        <a
          class="compare-product-visuals__image-link"
          :href="product.href"
          :target="product.external ? '_blank' : undefined"
          :rel="product.external ? 'noopener noreferrer' : undefined"
          :aria-label="`${product.action}: ${product.name}`"
        >
          <img
            :src="product.src"
            :alt="product.alt"
            :width="product.width"
            :height="product.height"
            loading="lazy"
            decoding="async"
          />
        </a>

        <figcaption>
          <p>{{ product.caption }}</p>
          <a
            :href="product.href"
            :target="product.external ? '_blank' : undefined"
            :rel="product.external ? 'noopener noreferrer' : undefined"
          >
            {{ product.action }} <span aria-hidden="true">→</span>
          </a>
        </figcaption>
      </figure>
    </div>

    <p class="compare-product-visuals__note">{{ note }}</p>
  </section>
</template>

<script lang="ts" setup>
interface ComparisonProductVisual {
  name: string
  badge: string
  src: string
  alt: string
  width: number
  height: number
  caption: string
  href: string
  action: string
  external?: boolean
}

const props = withDefaults(defineProps<{
  id?: string
  eyebrow?: string
  heading: string
  description?: string
  note?: string
  products: ComparisonProductVisual[]
}>(), {
  id: 'compare-product-visuals',
  eyebrow: 'Product interface preview',
  description: undefined,
  note: 'These are product snapshots, not like-for-like benchmarks. Feature availability can vary by tier and configuration.',
})

const headingId = `${props.id}-heading`
</script>

<style scoped>
.compare-product-visuals {
  container-type: inline-size;
  margin: 3rem 0;
}

.compare-product-visuals__heading {
  max-width: 780px;
  margin-bottom: 1.5rem;
}

.compare-product-visuals__heading > p {
  margin: 0 0 0.5rem;
  color: var(--vp-c-brand-1);
  font-size: 0.78rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.compare-product-visuals__heading h2 {
  margin: 0;
  color: var(--vp-c-text-1);
  font-size: clamp(1.8rem, 2vw, 2.5rem);
  line-height: 1.12;
}

.compare-product-visuals__heading div {
  margin-top: 0.8rem;
  color: var(--vp-c-text-2);
  line-height: 1.7;
}

.compare-product-visuals__grid {
  display: grid;
  gap: 1.25rem;
}

.compare-product-visuals__card {
  overflow: hidden;
  margin: 0;
  border: 1px solid var(--vp-c-divider);
  border-radius: 16px;
  background: var(--vp-c-bg-soft);
  box-shadow: 0 16px 42px color-mix(in srgb, #000, transparent 95%);
}

.compare-product-visuals__label {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  padding: 0.85rem 1rem;
}

.compare-product-visuals__label strong {
  color: var(--vp-c-text-1);
  font-size: 1rem;
}

.compare-product-visuals__label span {
  border-radius: 999px;
  background: var(--vp-c-brand-soft);
  color: var(--vp-c-brand-1);
  font-size: 0.72rem;
  font-weight: 700;
  padding: 0.3rem 0.65rem;
  white-space: nowrap;
}

.compare-product-visuals__image-link {
  display: block;
  overflow: hidden;
  border-block: 1px solid var(--vp-c-divider);
  background: #fff;
}

.compare-product-visuals__image-link:focus-visible {
  outline: 3px solid var(--vp-c-brand-1);
  outline-offset: -3px;
}

.compare-product-visuals__image-link img {
  display: block;
  width: 100%;
  height: auto;
  margin: 0;
}

.compare-product-visuals__card figcaption {
  padding: 1rem;
}

.compare-product-visuals__card figcaption p {
  margin: 0;
  color: var(--vp-c-text-2);
  font-size: 0.9rem;
  line-height: 1.65;
}

.compare-product-visuals__card figcaption a {
  display: inline-flex;
  gap: 0.35rem;
  margin-top: 0.75rem;
  color: var(--vp-c-brand-1);
  font-size: 0.88rem;
  font-weight: 700;
  text-decoration: none;
}

.compare-product-visuals__card figcaption a:hover {
  text-decoration: underline;
  text-underline-offset: 3px;
}

.compare-product-visuals__note {
  margin: 0.9rem 0 0;
  color: var(--vp-c-text-3);
  font-size: 0.8rem;
  line-height: 1.55;
}

@container (min-width: 760px) {
  .compare-product-visuals__grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (max-width: 480px) {
  .compare-product-visuals__label {
    align-items: flex-start;
    flex-direction: column;
    gap: 0.5rem;
  }
}
</style>
