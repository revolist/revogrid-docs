<template>
  <span class="fa-svg-icon" aria-hidden="true" v-html="svg"></span>
</template>

<script lang="ts" setup>
import borderAllIcon from '@fortawesome/fontawesome-free/svgs/solid/border-all.svg?raw'
import boxesStackedIcon from '@fortawesome/fontawesome-free/svgs/solid/boxes-stacked.svg?raw'
import buildingColumnsIcon from '@fortawesome/fontawesome-free/svgs/solid/building-columns.svg?raw'
import chartLineIcon from '@fortawesome/fontawesome-free/svgs/solid/chart-line.svg?raw'
import folderIcon from '@fortawesome/fontawesome-free/svgs/solid/folder.svg?raw'
import gaugeHighIcon from '@fortawesome/fontawesome-free/svgs/solid/gauge-high.svg?raw'
import industryIcon from '@fortawesome/fontawesome-free/svgs/solid/industry.svg?raw'
import linkIcon from '@fortawesome/fontawesome-free/svgs/solid/link.svg?raw'
import lockIcon from '@fortawesome/fontawesome-free/svgs/solid/lock.svg?raw'
import puzzlePieceIcon from '@fortawesome/fontawesome-free/svgs/solid/puzzle-piece.svg?raw'
import rectangleListIcon from '@fortawesome/fontawesome-free/svgs/solid/rectangle-list.svg?raw'
import screwdriverWrenchIcon from '@fortawesome/fontawesome-free/svgs/solid/screwdriver-wrench.svg?raw'
import tabletScreenButtonIcon from '@fortawesome/fontawesome-free/svgs/solid/tablet-screen-button.svg?raw'
import wandMagicSparklesIcon from '@fortawesome/fontawesome-free/svgs/solid/wand-magic-sparkles.svg?raw'

const props = defineProps<{
  name: string
}>()

const icons: Record<string, string> = {
  pulse: gaugeHighIcon,
  grid: borderAllIcon,
  star: wandMagicSparklesIcon,
  plugin: puzzlePieceIcon,
  links: linkIcon,
  lock: lockIcon,
  chart: rectangleListIcon,
  app: tabletScreenButtonIcon,
  tool: screwdriverWrenchIcon,
  money: buildingColumnsIcon,
  box: boxesStackedIcon,
  factory: industryIcon,
  trend: chartLineIcon,
  calendar: folderIcon,
}

const svg = icons[props.name] ?? borderAllIcon
</script>

<style lang="scss" scoped>
.fa-svg-icon {
  display: inline-flex;
  width: 18px;
  height: 18px;
  color: currentColor;
  line-height: 1;

  :deep(svg) {
    width: 100%;
    height: 100%;
    display: block;
    fill: var(--rg-text, currentColor);
    opacity: 0.9;
  }
}
</style>
