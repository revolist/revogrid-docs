<template>
  <template v-if="titleParts.length === 2 && products.length">
    <h1 id="rg-hero-title" class="rg-hero-semantic-title">{{ title }}</h1>
    <div
      class="rg-hero-title"
      aria-hidden="true"
      @mouseenter="rotationPaused = true"
      @mouseleave="rotationPaused = false"
    >
      <span class="rg-hero-title-line"
        ><span v-html="titleParts[0]"></span
        ><span
          class="rg-hero-product"
          :data-product="productIndex"
          :style="productWidth === undefined ? undefined : { width: `${productWidth}px` }"
          aria-hidden="true"
        >
          <Transition name="hero-product" mode="out-in">
            <span
              :key="productIndex"
              :ref="el => measureProductLabel(el as HTMLElement | null)"
              class="rg-hero-product-label"
              >{{ products[productIndex] }}</span
            >
          </Transition>
        </span></span
      ><span v-html="titleParts[1]"></span>
    </div>
  </template>
  <h1 v-else id="rg-hero-title" class="rg-hero-title" v-html="heroTitle"></h1>
</template>

<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, ref, watch } from 'vue'
import { emphasizeText, escapeHtml } from '../homeV2Utils'

const props = withDefaults(
  defineProps<{
    title?: string
    emphasis?: string
    rotatingTerm?: string
    products?: string[]
    paused?: boolean
  }>(),
  { products: () => [], paused: false },
)

const heroTitle = computed(() => emphasizeText(props.title, props.emphasis))
const titleParts = computed(() =>
  props.rotatingTerm ? heroTitle.value.split(escapeHtml(props.rotatingTerm)) : [],
)
const productIndex = ref(0)
const productWidth = ref<number>()
const rotationPaused = ref(false)

// Frontmatter/localization can replace or shorten the product list while mounted.
watch(
  () => [props.rotatingTerm, ...props.products],
  () => {
    productIndex.value = 0
    productWidth.value = undefined
  },
)
let productResizeObserver: ResizeObserver | undefined
let productTimer: ReturnType<typeof setInterval> | undefined
let motionPreference: MediaQueryList | undefined

// Capsule width follows the visible label without coupling measurement to grid state.
function measureProductLabel(element: HTMLElement | null) {
  productResizeObserver?.disconnect()
  if (!element) return
  productWidth.value = element.getBoundingClientRect().width
  productResizeObserver ??= new ResizeObserver(([entry]) => {
    productWidth.value = entry.contentRect.width
  })
  productResizeObserver.observe(element)
}

function syncMotionPreference() {
  if (productTimer) clearInterval(productTimer)
  productTimer = undefined
  productIndex.value = 0
  if (motionPreference?.matches) return
  productTimer = setInterval(() => {
    if (document.hidden || rotationPaused.value || props.paused || props.products.length < 2) return
    productIndex.value = (productIndex.value + 1) % props.products.length
  }, 3000)
}

onMounted(() => {
  motionPreference = window.matchMedia('(prefers-reduced-motion: reduce)')
  motionPreference.addEventListener('change', syncMotionPreference)
  syncMotionPreference()
})
onBeforeUnmount(() => {
  if (productTimer) clearInterval(productTimer)
  productResizeObserver?.disconnect()
  motionPreference?.removeEventListener('change', syncMotionPreference)
})
</script>

<style scoped lang="scss">
.rg-hero-semantic-title {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip-path: inset(50%);
  white-space: nowrap;
  border: 0;
}

.rg-hero-title {
  font-size: clamp(36px, 3.5vw, 48px);
  font-weight: 500;
  line-height: 1.08;
  letter-spacing: -2.5px;
  margin: 12px 0 16px;

  :deep(em) {
    display: inline;
    color: var(--vp-c-brand-1);
    font-style: normal;
  }
}

.rg-hero-title-line {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.3em;
}

.rg-hero-product {
  display: inline-grid;
  place-items: center;
  box-sizing: content-box;
  min-height: 1lh;
  padding: 0.18em 0.5em;
  border-radius: 999px;
  background: #e0f5eb;
  color: #087f55;
  font-size: 0.88em;
  letter-spacing: -0.04em;
  transition:
    width 300ms ease,
    background-color 300ms,
    color 300ms;
  overflow: hidden;
}
.rg-hero-product[data-product='1'] {
  background: #ece7ff;
  color: #6245cb;
}
.rg-hero-product[data-product='2'] {
  background: #e3efff;
  color: #266fc2;
}
.rg-hero-product[data-product='3'] {
  background: #ffecd9;
  color: #a85513;
}
.rg-hero-product[data-product='4'] {
  background: #fce4f4;
  color: #ae307d;
}
.rg-hero-product[data-product='5'] {
  background: #e1f2fa;
  color: #176a91;
}
.rg-hero-product-label {
  display: inline-flex;
  align-items: center;
  gap: 0.3em;
  grid-area: 1 / 1;
  white-space: nowrap;
}
.rg-hero-product-label::before {
  content: '';
  flex: none;
  width: 0.4em;
  height: 0.4em;
  border-radius: 50%;
  background: currentColor;
}
.hero-product-enter-active,
.hero-product-leave-active {
  transition:
    opacity 150ms,
    transform 150ms;
}
.hero-product-enter-from {
  opacity: 0;
  transform: translateY(0.35em);
}
.hero-product-leave-to {
  opacity: 0;
  transform: translateY(-0.35em);
}
@media (prefers-reduced-motion: reduce) {
  .rg-hero-product,
  .hero-product-enter-active,
  .hero-product-leave-active {
    transition: none;
  }
}

@media (max-width: 640px) {
  .rg-hero-title {
    font-size: 34px;
    letter-spacing: -1.8px;
  }
}
</style>
