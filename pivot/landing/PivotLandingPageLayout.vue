<template>
  <main class="pivot-landing" :data-theme="theme">
    <PivotLandingNav @toggle-theme="toggleTheme" />
    <PivotLandingHero />
    <PivotLandingStats />
    <PivotInteractiveDemo />
    <PivotCapabilitiesSection />
    <hr />
    <PivotDifferenceSection />
    <hr />
    <PivotCodeSection />
    <hr />
    <PivotCompareSection />
    <hr />
    <PivotUseCasesSection />
    <PivotRevoBand />
    <PivotFinalCta />
    <PivotLandingFooter />
  </main>
</template>

<script lang="ts" setup>
import { onMounted, ref } from "vue"
import PivotCapabilitiesSection from "./PivotCapabilitiesSection.vue"
import PivotCodeSection from "./PivotCodeSection.vue"
import PivotCompareSection from "./PivotCompareSection.vue"
import PivotDifferenceSection from "./PivotDifferenceSection.vue"
import PivotFinalCta from "./PivotFinalCta.vue"
import PivotInteractiveDemo from "./PivotInteractiveDemo.vue"
import PivotLandingFooter from "./PivotLandingFooter.vue"
import PivotLandingHero from "./PivotLandingHero.vue"
import PivotLandingNav from "./PivotLandingNav.vue"
import PivotLandingStats from "./PivotLandingStats.vue"
import PivotRevoBand from "./PivotRevoBand.vue"
import PivotUseCasesSection from "./PivotUseCasesSection.vue"

const theme = ref<"light" | "dark">("light")

const toggleTheme = () => {
  theme.value = theme.value === "dark" ? "light" : "dark"
  localStorage.setItem("pg-theme", theme.value)
}

onMounted(() => {
  const stored = localStorage.getItem("pg-theme")
  if (stored === "dark" || stored === "light") {
    theme.value = stored
    return
  }
  theme.value = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"
})
</script>
<style lang="scss" src="./pivot-landing.scss"></style>
