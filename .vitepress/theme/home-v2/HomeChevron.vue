<template>
  <svg class="rg-chevron" viewBox="0 0 12 12" aria-hidden="true">
    <path d="M4.8 2.8 8 6l-3.2 3.2" />
  </svg>
</template>

<style lang="scss" scoped>
.rg-chevron {
  width: 9px;
  height: 9px;
  fill: none;
  stroke: currentColor;
  stroke-width: 1.7;
  stroke-linecap: round;
  stroke-linejoin: round;
  transition: transform 0.15s;
}

a:hover .rg-chevron {
  transform: translateX(2px);
}
</style>
