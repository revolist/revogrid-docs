<template>
  <nav class="rg-top-nav">
    <div class="rg-nav-inner">
      <a class="rg-logo" :href="linkOf('/')">
        <span class="rg-logo-mark">R</span>
        RevoGrid
      </a>
      <ul class="rg-nav-links">
        <li><a href="#capabilities">Product</a></li>
        <li><a :href="linkOf('/guide/')">Docs</a></li>
        <li><a href="#demos">Demos</a></li>
        <li><a href="#pricing">Pricing</a></li>
        <li><a class="rg-pro-link" :href="linkOf('/pro/')">RevoGrid Pro</a></li>
      </ul>
      <div class="rg-nav-actions">
        <button class="rg-nav-icon" type="button" aria-label="Toggle theme" @click="toggleTheme">
          {{ isDark ? '☀️' : '🌙' }}
        </button>
      </div>
    </div>
  </nav>
</template>

<script lang="ts" setup>
import { useData } from 'vitepress'
import { useHomeV2Links } from './homeV2Utils'

const { isDark } = useData()
const { linkOf } = useHomeV2Links()

function toggleTheme() {
  isDark.value = !isDark.value
}
</script>
