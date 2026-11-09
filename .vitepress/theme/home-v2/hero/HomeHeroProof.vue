<template>
  <div class="rg-hero-proof-badges" aria-label="RevoGrid package popularity">
    <a
      class="rg-hero-proof-badge"
      href="https://www.jsdelivr.com/package/npm/@revolist/revogrid"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img
        src="https://data.jsdelivr.com/v1/package/npm/@revolist/revogrid/badge"
        alt="jsDelivr downloads for @revolist/revogrid"
      />
    </a>
    <a
      class="rg-hero-proof-badge rg-hero-text-badge rg-hero-feedback-badge"
      href="#feedback"
      aria-label="Read what RevoGrid users say"
    >
      <span class="rg-hero-feedback-mark" aria-hidden="true">“</span>
      <strong>Loved by builders</strong>
    </a>
  </div>
</template>

<style scoped lang="scss">
.rg-hero-proof-badges {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 8px;
  min-height: 22px;
  margin: 14px 0 0;
}

.rg-hero-proof-badge {
  display: inline-flex;
  align-items: center;
  height: 22px;
  color: var(--rg-text-2);
  text-decoration: none;
}

.rg-hero-proof-badge img {
  display: block;
  width: auto;
  height: 20px;
}

.rg-hero-text-badge {
  gap: 5px;
  padding: 0 7px 0 6px;
  border: 1px solid var(--rg-border);
  border-radius: 4px;
  background: var(--rg-bg-2);
  font-size: 11px;
  line-height: 20px;
}

.rg-hero-text-badge strong {
  color: var(--rg-text);
  font-weight: 650;
}

.rg-hero-text-badge span {
  color: var(--rg-text-2);
}

.rg-hero-feedback-badge {
  border-color: color-mix(in srgb, var(--rg-green) 35%, var(--rg-border));
  background: var(--rg-green-bg);
}

.rg-hero-feedback-badge strong,
.rg-hero-feedback-mark {
  color: var(--rg-font-green);
}

.rg-hero-feedback-mark {
  font-family: Georgia, serif;
  font-size: 17px;
  font-weight: 700;
  line-height: 1;
  transform: translateY(1px);
}

.rg-hero-proof-badge:hover {
  opacity: 0.78;
}

.rg-hero-proof-badge:focus-visible {
  outline: 3px solid color-mix(in srgb, var(--rg-green) 35%, transparent);
  outline-offset: 3px;
}

@media (max-width: 640px) {
  .rg-hero-proof-badges {
    justify-content: center;
    margin: 12px 0 0;
  }
}
</style>
