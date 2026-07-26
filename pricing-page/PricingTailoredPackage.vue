<template>
  <aside
    class="tailored-package"
    :class="{ 'is-dark': isDark }"
    aria-labelledby="tailored-package-heading"
  >
    <div class="tailored-copy">
      <span class="tailored-new-badge">New</span>
      <h3 id="tailored-package-heading">Need only part of RevoGrid?</h3>
      <p>
        Choose the grid capabilities required for your project, and we'll suggest
        a tailored package.
      </p>
      <button class="rg-btn tailored-action" type="button" @click="$emit('contact-sales')">
        Tell us what you need
      </button>
      <div class="review-note">
        <span class="review-avatar" aria-hidden="true">
          <img src="/support-person.png" alt="" />
        </span>
        <span>
          <strong>Personally reviewed by the RevoGrid team</strong>
          <small>Product and licensing specialists</small>
        </span>
      </div>
    </div>

    <div class="capability-map" aria-hidden="true">
      <svg class="connection-lines" viewBox="0 0 600 310" preserveAspectRatio="none">
        <path d="M72 55 H240 Q250 55 250 65 V80" />
        <path d="M528 55 H360 Q350 55 350 65 V80" />
        <path d="M72 255 H240 Q250 255 250 245 V230" />
        <path d="M528 255 H360 Q350 255 350 245 V230" />
      </svg>

      <span class="map-node node-filter">
        <FontAwesomeSvgIcon name="filter" />
      </span>
      <span class="map-node node-chart">
        <FontAwesomeSvgIcon name="chartColumn" />
      </span>
      <span class="map-node node-list">
        <FontAwesomeSvgIcon name="listCheck" />
      </span>
      <span class="map-node node-lock">
        <FontAwesomeSvgIcon name="lock" />
      </span>

      <span class="map-placeholder placeholder-top"></span>
      <span class="map-placeholder placeholder-bottom"></span>

      <span class="map-grid">
        <span class="map-grid-bar"></span>
        <span class="map-grid-cells">
          <i v-for="cell in 15" :key="cell" :class="{ highlighted: [8, 12].includes(cell) }"></i>
        </span>
      </span>
    </div>
  </aside>
</template>

<script lang="ts" setup>
import { useData } from 'vitepress'
import FontAwesomeSvgIcon from '../.vitepress/theme/home-v2/FontAwesomeSvgIcon.vue'

const { isDark } = useData()

defineEmits<{
  (event: 'contact-sales'): void
}>()
</script>

<style lang="scss" scoped>
.tailored-package {
  display: grid;
  grid-template-columns: minmax(0, 0.95fr) minmax(420px, 1.05fr);
  min-height: 310px;
  overflow: hidden;
  position: relative;
  margin-top: 30px;
  border: 1px solid color-mix(in srgb, var(--rg-font-green) 30%, var(--rg-border));
  border-radius: 14px;
  background:
    radial-gradient(circle at 80% 50%, color-mix(in srgb, var(--rg-font-green) 8%, transparent), transparent 42%),
    color-mix(in srgb, var(--rg-font-green) 3%, var(--rg-bg));
}

.tailored-copy {
  z-index: 1;
  padding: 42px 24px 34px 38px;

  h3 {
    margin: 0 0 14px;
    color: var(--rg-text);
    font-size: clamp(26px, 3vw, 36px);
    font-weight: 400;
    letter-spacing: -0.03em;
    line-height: 1.15;
  }

  > p {
    max-width: 430px;
    margin: 0 0 22px;
    color: var(--rg-text-2);
    font-size: 16px;
    line-height: 1.65;
  }
}

.tailored-new-badge {
  display: inline-flex;
  align-items: center;
  margin-bottom: 16px;
  border-radius: 999px;
  background: #ff2693;
  padding: 7px 16px;
  color: #fff;
  box-shadow: 0 6px 18px color-mix(in srgb, #ff2693 28%, transparent);
  font-size: 13px;
  font-weight: 700;
  letter-spacing: 0.08em;
  line-height: 1.3;
  text-transform: uppercase;
}

.tailored-action {
  min-width: 220px;
  margin-bottom: 18px;
}

.review-note {
  display: flex;
  align-items: center;
  gap: 12px;
  color: var(--rg-text);

  > span:last-child {
    display: grid;
    gap: 2px;
  }

  strong {
    font-size: 13px;
    font-weight: 600;
    line-height: 1.35;
  }

  small {
    color: var(--rg-text-3);
    font-size: 11px;
    line-height: 1.35;
  }
}

.review-avatar {
  flex: 0 0 42px;
  width: 42px;
  height: 42px;
  overflow: hidden;
  border: 1px solid color-mix(in srgb, var(--rg-font-green) 28%, var(--rg-border));
  border-radius: 50%;
  background: var(--rg-bg);

  img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center 28%;
  }
}

.capability-map {
  min-height: 310px;
  position: relative;
}

.map-grid {
  display: block;
  width: 250px;
  height: 158px;
  overflow: hidden;
  position: absolute;
  z-index: 2;
  top: 76px;
  left: 50%;
  transform: translateX(-50%);
  border: 1px solid color-mix(in srgb, var(--rg-font-green) 20%, var(--rg-border));
  border-radius: 9px;
  background: var(--rg-bg);
  box-shadow: 0 14px 30px color-mix(in srgb, var(--rg-font-green) 13%, transparent);
}

.map-grid-bar {
  display: block;
  height: 20px;
  background: linear-gradient(90deg, var(--rg-font-green), var(--vp-c-brand-2));
}

.map-grid-cells {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(3, 1fr);
  height: 118px;
  margin: 10px;
  border-top: 1px solid var(--rg-border);
  border-left: 1px solid var(--rg-border);

  i {
    border-right: 1px solid var(--rg-border);
    border-bottom: 1px solid var(--rg-border);
    background: color-mix(in srgb, var(--rg-font-green) 2%, var(--rg-bg));

    &.highlighted {
      background: color-mix(in srgb, var(--rg-font-green) 16%, var(--rg-bg));
    }
  }
}

.tailored-package.is-dark .map-grid {
  border-color: color-mix(in srgb, var(--rg-font-green) 34%, #475569);
  background: #16241f;
  box-shadow:
    0 18px 42px rgba(0, 0, 0, 0.34),
    0 0 34px color-mix(in srgb, var(--rg-font-green) 15%, transparent);
}

.tailored-package.is-dark .map-grid-bar {
  background: linear-gradient(90deg, #0f9a61, #20d18b);
}

.tailored-package.is-dark .map-grid-cells {
  border-top-color: rgba(148, 163, 184, 0.3);
  border-left-color: rgba(148, 163, 184, 0.3);

  i {
    border-right-color: rgba(148, 163, 184, 0.3);
    border-bottom-color: rgba(148, 163, 184, 0.3);
    background: #1c2b25;

    &:nth-child(even) {
      background: #1a2823;
    }

    &.highlighted {
      background: color-mix(in srgb, var(--rg-font-green) 38%, #20362c);
      box-shadow: inset 0 0 18px color-mix(in srgb, var(--rg-font-green) 14%, transparent);
    }
  }
}

.tailored-package.is-dark .map-node {
  border-color: rgba(148, 163, 184, 0.25);
  background: #121b18;
}

.map-node {
  display: grid;
  width: 66px;
  height: 66px;
  place-items: center;
  position: absolute;
  z-index: 3;
  border: 1px solid color-mix(in srgb, var(--rg-font-green) 18%, var(--rg-border));
  border-radius: 9px;
  background: var(--rg-bg);
  color: var(--rg-font-green);
  box-shadow: 0 8px 20px color-mix(in srgb, var(--rg-text) 8%, transparent);
}

:deep(.map-node .fa-svg-icon) {
  width: 25px;
  height: 25px;
}

:deep(.map-node svg) {
  fill: currentColor;
}

.node-filter {
  top: 22px;
  left: 6%;
  color: #1a6eff;
}

.node-chart {
  top: 22px;
  right: 6%;
  color: #ffa200;
}

.node-list {
  bottom: 22px;
  left: 6%;
}

.node-lock {
  right: 6%;
  bottom: 22px;
  color: #ff2693;
}

.map-placeholder {
  width: 42px;
  height: 42px;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  border: 1px dashed color-mix(in srgb, var(--rg-font-green) 28%, var(--rg-border));
  border-radius: 7px;
}

.placeholder-top {
  top: 27px;
}

.placeholder-bottom {
  bottom: 27px;
}

.connection-lines {
  position: absolute;
  z-index: 1;
  inset: 0;
  width: 100%;
  height: 100%;
  overflow: visible;

  path {
    fill: none;
    stroke: color-mix(in srgb, var(--rg-font-green) 68%, transparent);
    stroke-width: 1.5;
    stroke-linecap: round;
    stroke-dasharray: 7 6;
    vector-effect: non-scaling-stroke;
    animation: marching-ants 1.1s linear infinite;
  }
}

@keyframes marching-ants {
  to {
    stroke-dashoffset: -26;
  }
}

@media (max-width: 900px) {
  .tailored-package {
    grid-template-columns: minmax(0, 1fr);
  }

  .tailored-copy {
    padding-right: 32px;
    padding-left: 32px;
  }

  .capability-map {
    min-height: 300px;
  }
}

@media (max-width: 520px) {
  .tailored-package {
    margin-top: 26px;
  }

  .tailored-copy {
    padding: 30px 22px 24px;

    > p {
      font-size: 14px;
    }
  }

  .tailored-action {
    width: 100%;
    min-width: 0;
  }

  .review-note {
    align-items: flex-start;
  }

  .capability-map {
    min-height: 270px;
    transform: scale(0.88);
    transform-origin: top center;
    margin-bottom: -32px;
  }
}

@media (prefers-reduced-motion: reduce) {
  .connection-lines path {
    animation: none;
  }
}
</style>
