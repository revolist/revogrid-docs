<template>
  <section class="trusted-logo-strip" :class="variantClass" :aria-labelledby="titleId">
    <div class="trusted-logo-strip__inner">
      <div class="trusted-logo-strip__copy">
        <p class="trusted-logo-strip__kicker">{{ resolvedSection.kicker }}</p>
        <h2 :id="titleId">{{ resolvedSection.title }}</h2>
      </div>
      <div class="trusted-logo-strip__logos" aria-label="Companies using RevoGrid">
        <span
          v-for="logo in trustedLogos"
          :key="logo.name"
          class="trusted-logo-strip__logo"
          :class="`trusted-logo-strip__logo--${logo.id}`"
        >
          <component :is="logo.component" role="img" :aria-label="logo.name" />
        </span>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import AxonLogo from '../../public/orgs/axon.svg'
import BasfLogo from '../../public/orgs/basf.svg'
import BayerLogo from '../../public/orgs/bayer.svg'
import CbreLogo from '../../public/orgs/cbre.svg'
import DeltekLogo from '../../public/orgs/deltek.svg'

type TrustedLogoId = 'axon' | 'basf' | 'bayer' | 'cbre' | 'deltek'
type TrustedLogoConfig = {
  name: string
  id: TrustedLogoId
}
type TrustedLogoSection = {
  kicker?: string
  title?: string
  logos?: TrustedLogoConfig[]
}

const props = withDefaults(defineProps<{
  section?: TrustedLogoSection
  titleId?: string
  variant?: 'home' | 'pivot' | 'trial'
}>(), {
  titleId: 'trusted-logo-strip-title',
  variant: 'home',
})

const LOGO_COMPONENTS = {
  axon: AxonLogo,
  basf: BasfLogo,
  bayer: BayerLogo,
  cbre: CbreLogo,
  deltek: DeltekLogo,
} satisfies Record<TrustedLogoId, unknown>

const DEFAULT_SECTION: Required<TrustedLogoSection> = {
  kicker: 'Trusted by thousands of teams building critical data products',
  title: 'Companies using RevoGrid',
  logos: [
    { name: 'Axon', id: 'axon' },
    { name: 'BASF', id: 'basf' },
    { name: 'Bayer', id: 'bayer' },
    { name: 'CBRE', id: 'cbre' },
    { name: 'Deltek', id: 'deltek' },
  ],
}

const resolvedSection = computed(() => ({
  ...DEFAULT_SECTION,
  ...props.section,
  logos: props.section?.logos?.length ? props.section.logos : DEFAULT_SECTION.logos,
}))

const trustedLogos = computed(() => {
  return resolvedSection.value.logos
    .map((logo) => ({
      ...logo,
      component: LOGO_COMPONENTS[logo.id],
    }))
    .filter((logo) => Boolean(logo.component))
})

const variantClass = computed(() => `trusted-logo-strip--${props.variant}`)
</script>

<style lang="scss" scoped>
.trusted-logo-strip {
  --trusted-strip-bg: var(--vp-c-bg-soft);
  --trusted-strip-border: var(--vp-c-divider);
  --trusted-strip-text: var(--vp-c-text-1);
  --trusted-strip-muted: var(--vp-c-text-2);
  --trusted-strip-accent: var(--vp-c-brand-1);
  --trusted-strip-inner-width: min(1180px, calc(100% - 48px));

  border-top: 1px solid var(--trusted-strip-border);
  border-bottom: 1px solid var(--trusted-strip-border);
  background: var(--trusted-strip-bg);
  padding: 3.75rem 0 4rem;
}

.trusted-logo-strip--home {
  --trusted-strip-bg: var(--rg-bg-2, var(--vp-c-bg-soft));
  --trusted-strip-border: var(--rg-border, var(--vp-c-divider));
  --trusted-strip-text: var(--rg-text, var(--vp-c-text-1));
  --trusted-strip-muted: var(--rg-text-2, var(--vp-c-text-2));
  --trusted-strip-accent: var(--rg-font-green, var(--vp-c-brand-1));
  --trusted-strip-inner-width: min(1200px, calc(100% - 48px));
}

.trusted-logo-strip--pivot {
  --trusted-strip-bg: var(--bg, var(--vp-c-bg));
  --trusted-strip-border: var(--bd, var(--vp-c-divider));
  --trusted-strip-text: var(--tx, var(--vp-c-text-1));
  --trusted-strip-muted: var(--tx2, var(--vp-c-text-2));
  --trusted-strip-accent: var(--accent, var(--vp-c-brand-1));
  --trusted-strip-inner-width: min(1120px, calc(100% - 48px));
}

.trusted-logo-strip__inner {
  display: grid;
  gap: 2.25rem;
  width: var(--trusted-strip-inner-width);
  margin: 0 auto;
  text-align: center;
}

.trusted-logo-strip__copy {
  display: grid;
  gap: 0.85rem;
  justify-items: center;
}

.trusted-logo-strip__kicker {
  margin: 0;
  color: var(--trusted-strip-accent);
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 0.1em;
  text-transform: uppercase;
}

.trusted-logo-strip__copy h2 {
  margin: 0;
  color: var(--trusted-strip-text);
  font-size: clamp(2rem, 3vw, 3.25rem);
  line-height: 1.08;
}

.trusted-logo-strip__logos {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: clamp(2.6rem, 7vw, 6.5rem);
}

.trusted-logo-strip__logo {
  --trusted-logo-height: 42px;

  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 96px;
  color: var(--trusted-strip-muted);
  opacity: 0.78;
  filter: grayscale(1);
  transition:
    opacity 0.2s ease,
    filter 0.2s ease;

  svg {
    display: block;
    width: auto;
    height: var(--trusted-logo-height);
    max-width: 100%;
  }

  &:hover {
    opacity: 1;
    filter: grayscale(0);
  }
}

.trusted-logo-strip__logo--axon {
  --trusted-logo-height: 180px;
}

.trusted-logo-strip__logo--basf {
  --trusted-logo-height: 48px;
}

.trusted-logo-strip__logo--bayer {
  --trusted-logo-height: 60px;
}

.trusted-logo-strip__logo--cbre {
  --trusted-logo-height: 38px;
}

.trusted-logo-strip__logo--deltek {
  --trusted-logo-height: 42px;
}

@media (max-width: 640px) {
  .trusted-logo-strip {
    --trusted-strip-inner-width: min(100% - 32px, 1180px);
  }
}
</style>
