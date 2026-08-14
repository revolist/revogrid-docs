<template>
  <span class="fa-svg-icon" aria-hidden="true" v-html="svg"></span>
</template>

<script lang="ts" setup>
import githubIcon from '@fortawesome/fontawesome-free/svgs/brands/github.svg?raw'
import linkedinIcon from '@fortawesome/fontawesome-free/svgs/brands/linkedin.svg?raw'
import starOutlineIcon from '@fortawesome/fontawesome-free/svgs/regular/star.svg?raw'
import arrowDownIcon from '@fortawesome/fontawesome-free/svgs/solid/arrow-down.svg?raw'
import borderAllIcon from '@fortawesome/fontawesome-free/svgs/solid/border-all.svg?raw'
import boxesStackedIcon from '@fortawesome/fontawesome-free/svgs/solid/boxes-stacked.svg?raw'
import buildingColumnsIcon from '@fortawesome/fontawesome-free/svgs/solid/building-columns.svg?raw'
import calendarDaysIcon from '@fortawesome/fontawesome-free/svgs/solid/calendar-days.svg?raw'
import chartLineIcon from '@fortawesome/fontawesome-free/svgs/solid/chart-line.svg?raw'
import chartColumnIcon from '@fortawesome/fontawesome-free/svgs/solid/chart-column.svg?raw'
import checkIcon from '@fortawesome/fontawesome-free/svgs/solid/check.svg?raw'
import circleCheckIcon from '@fortawesome/fontawesome-free/svgs/solid/circle-check.svg?raw'
import codeIcon from '@fortawesome/fontawesome-free/svgs/solid/code.svg?raw'
import filterIcon from '@fortawesome/fontawesome-free/svgs/solid/filter.svg?raw'
import folderIcon from '@fortawesome/fontawesome-free/svgs/solid/folder.svg?raw'
import gaugeHighIcon from '@fortawesome/fontawesome-free/svgs/solid/gauge-high.svg?raw'
import headsetIcon from '@fortawesome/fontawesome-free/svgs/solid/headset.svg?raw'
import industryIcon from '@fortawesome/fontawesome-free/svgs/solid/industry.svg?raw'
import linkIcon from '@fortawesome/fontawesome-free/svgs/solid/link.svg?raw'
import listCheckIcon from '@fortawesome/fontawesome-free/svgs/solid/list-check.svg?raw'
import lockIcon from '@fortawesome/fontawesome-free/svgs/solid/lock.svg?raw'
import paletteIcon from '@fortawesome/fontawesome-free/svgs/solid/palette.svg?raw'
import penToSquareIcon from '@fortawesome/fontawesome-free/svgs/solid/pen-to-square.svg?raw'
import puzzlePieceIcon from '@fortawesome/fontawesome-free/svgs/solid/puzzle-piece.svg?raw'
import rectangleListIcon from '@fortawesome/fontawesome-free/svgs/solid/rectangle-list.svg?raw'
import scaleBalancedIcon from '@fortawesome/fontawesome-free/svgs/solid/scale-balanced.svg?raw'
import screwdriverWrenchIcon from '@fortawesome/fontawesome-free/svgs/solid/screwdriver-wrench.svg?raw'
import shieldIcon from '@fortawesome/fontawesome-free/svgs/solid/shield.svg?raw'
import sitemapIcon from '@fortawesome/fontawesome-free/svgs/solid/sitemap.svg?raw'
import tableColumnsIcon from '@fortawesome/fontawesome-free/svgs/solid/table-columns.svg?raw'
import tabletScreenButtonIcon from '@fortawesome/fontawesome-free/svgs/solid/tablet-screen-button.svg?raw'
import usersIcon from '@fortawesome/fontawesome-free/svgs/solid/users.svg?raw'
import userTieIcon from '@fortawesome/fontawesome-free/svgs/solid/user-tie.svg?raw'
import wandMagicSparklesIcon from '@fortawesome/fontawesome-free/svgs/solid/wand-magic-sparkles.svg?raw'

const props = defineProps<{
  name: string
}>()

const icons: Record<string, string> = {
  github: githubIcon,
  linkedin: linkedinIcon,
  starOutline: starOutlineIcon,
  arrowDown: arrowDownIcon,
  pulse: gaugeHighIcon,
  grid: borderAllIcon,
  edit: penToSquareIcon,
  columns: tableColumnsIcon,
  palette: paletteIcon,
  tree: sitemapIcon,
  star: wandMagicSparklesIcon,
  plugin: puzzlePieceIcon,
  scaleBalanced: scaleBalancedIcon,
  links: linkIcon,
  lock: lockIcon,
  chart: rectangleListIcon,
  chartColumn: chartColumnIcon,
  filter: filterIcon,
  listCheck: listCheckIcon,
  app: tabletScreenButtonIcon,
  tool: screwdriverWrenchIcon,
  shield: shieldIcon,
  check: checkIcon,
  circleCheck: circleCheckIcon,
  code: codeIcon,
  calendarDays: calendarDaysIcon,
  headset: headsetIcon,
  users: usersIcon,
  userTie: userTieIcon,
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
