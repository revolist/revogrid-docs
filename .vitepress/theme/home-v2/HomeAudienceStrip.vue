<template>
  <section class="rg-audience" aria-labelledby="rg-audience-title">
    <div class="rg-container rg-audience-grid">
      <header class="rg-audience-heading">
        <p>{{ section?.title }}</p>
        <h2 id="rg-audience-title">{{ section?.details }}</h2>
      </header>

      <article
        v-for="item in section?.features"
        :key="item.title"
        class="rg-audience-item"
      >
        <span class="rg-audience-icon" aria-hidden="true">
          <component :is="iconOf(item.icon?.src)" />
        </span>
        <div>
          <h3>{{ item.title }}</h3>
          <p>{{ item.details }}</p>
        </div>
      </article>
    </div>
  </section>
</template>

<script lang="ts" setup>
import IndividualIcon from '../images/individual.svg'
import OrganizationIcon from '../images/org.svg'
import StartupIcon from '../images/startup.svg'
import type { HomeV2Record } from './homeV2Utils'

defineProps<{
  section?: HomeV2Record
}>()

const icons: Record<string, unknown> = {
  'individual.svg': IndividualIcon,
  'startup.svg': StartupIcon,
  'org.svg': OrganizationIcon,
}

const iconOf = (src?: string) => src ? icons[src] : undefined
</script>

<style lang="scss" scoped>
.rg-audience {
  border-bottom: 1px solid var(--rg-border);
  background: var(--rg-bg);
  padding: 2.25rem 0 2.5rem;
}

.rg-audience-grid {
  display: grid;
  grid-template-columns: minmax(0, 0.8fr) repeat(3, minmax(0, 1fr));
  gap: clamp(1.5rem, 3vw, 3rem);
  align-items: start;
}

.rg-audience-heading p {
  margin: 0 0 0.45rem;
  color: var(--rg-font-green);
  font-size: 10px;
  font-weight: 600;
  letter-spacing: 0.14em;
  line-height: 1.4;
  text-transform: uppercase;
}

.rg-audience-heading h2 {
  margin: 0;
  color: var(--rg-text);
  font-size: clamp(1.25rem, 2vw, 1.55rem);
  font-weight: 600;
  letter-spacing: -0.025em;
  line-height: 1.15;
}

.rg-audience-item {
  display: grid;
  grid-template-columns: 30px minmax(0, 1fr);
  gap: 0.85rem;
  min-width: 0;
  padding-left: clamp(1.25rem, 2.5vw, 2rem);
  border-left: 1px solid var(--rg-border);
}

.rg-audience-icon {
  display: inline-flex;
  width: 30px;
  height: 30px;
  color: var(--rg-text-2);
}

.rg-audience-icon :deep(svg) {
  display: block;
  width: 100%;
  height: 100%;
}

.rg-audience-item h3 {
  margin: 0 0 0.4rem;
  color: var(--rg-text);
  font-size: 0.9rem;
  font-weight: 600;
  line-height: 1.3;
}

.rg-audience-item p {
  margin: 0;
  color: var(--rg-text-2);
  font-size: 0.76rem;
  line-height: 1.55;
}

@media (max-width: 900px) {
  .rg-audience-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    row-gap: 1.75rem;
  }

  .rg-audience-item:nth-child(3) {
    border-left: 0;
    padding-left: 0;
  }
}

@media (max-width: 640px) {
  .rg-audience {
    padding: 2rem 0 2.25rem;
  }

  .rg-audience-grid {
    grid-template-columns: 1fr;
    gap: 1.35rem;
  }

  .rg-audience-item,
  .rg-audience-item:nth-child(3) {
    padding: 1.25rem 0 0;
    border-top: 1px solid var(--rg-border);
    border-left: 0;
  }
}
</style>
