<template>
  <div class="vp-card">
      <div class="vp-card__header">
          <span class="plan-name">{{ props.title }}</span>
          <p>{{ props.description }}</p>
      </div>
      <div class="vp-card__body">
          <div class="plan-price">
              <span class="price">{{ props.price }}</span>
              <span v-if="props.pricePeriod" class="price-period">{{
                  props.pricePeriod
              }}</span>
          </div>
          <hr />
          <ul class="plan-features">
              <li v-for="feature in props.features" :key="feature">
                  <span class="icon">{{ props.icon || '✅' }}</span> <span v-html="feature"></span>
              </li>
          </ul>
          <br />

          <slot />

          <VPButton
              size="medium"
              :text="props.buttonText"
              :theme="props.buttonTheme"
              :href="props.href"
              @click="() => !props.href && emit('open')"
          />

          <span class="plan-footer">
            <slot name="footer" />
          </span>
      </div>
  </div>
</template>
<script setup lang="ts">
import { defineProps, defineEmits } from 'vue'
// @ts-ignore
import VPButton from 'vitepress/dist/client/theme-default/components/VPButton.vue'

interface PlanProps {
  title: string
  description: string
  price?: string
  pricePeriod?: string
  buttonText: string
  href?: string
  features: string[]
  icon?: string
  buttonTheme?: 'brand' | 'alt' | 'sponsor'
}

const props = defineProps<PlanProps>()
  const emit = defineEmits<{
    (e: 'open'): void
}>()
</script>

<style scoped lang="scss">
.plans-container {
  display: flex;
  gap: 1.5em;
  justify-content: center;
}

.vp-card {
  flex: 1;
  border: 1px solid var(--vp-c-divider-light);
  padding: 1.5em;
  margin: 1.5em 0;
  border-radius: 10px;
  background-color: var(--vp-c-bg);
  border: 1px solid var(--vp-c-gutter);
  text-align: center;

  .VPButton {
      text-decoration: none;
  }

  &:focus,
  &:hover {
      box-shadow:
          0 4px 8px rgba(0, 0, 0, 0.1),
          0 2px 4px rgba(0, 0, 0, 0.06);
  }

  .vp-card__header {
      margin-bottom: 1em;
      padding-top: 20px;

      .plan-name {
          margin: 0;
          font-size: 1.5em;
          font-weight: 600;
          color: var(--vp-c-text-1);
      }

      p {
          font-size: 1.1em;
          color: var(--vp-c-text);
          text-wrap: pretty;
      }
  }

  .vp-card__body {
      .plan-price {
          margin: 1em 0;
          font-size: 1.5em;
          font-weight: bold;
          color: var(--vp-c-brand-dark);

          .price-period {
              font-size: 0.75em;
              color: var(--vp-c-text-light);
          }
      }

      .plan-features {
          list-style: none;
          padding: 0;
          text-align: left;
          margin: 0 auto;

          li {
              display: flex;
              margin: 0.5em 0;
              font-size: 0.95em;
              gap: 10px;
          }
      }
  }
}
</style>
