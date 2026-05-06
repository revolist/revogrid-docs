<template>
  <nav class="sat-nav">
    <div class="nav-left">
      <a class="logo" href="#top" aria-label="PivotGrid.io home">
        <span class="logo-mark" aria-hidden="true">
          <svg viewBox="0 0 18 18" fill="none">
            <rect x="1.5" y="1.5" width="6.5" height="6.5" rx="1.5" fill="white" opacity=".95" />
            <rect x="10" y="1.5" width="6.5" height="6.5" rx="1.5" fill="white" opacity=".5" />
            <rect x="1.5" y="10" width="6.5" height="6.5" rx="1.5" fill="white" opacity=".5" />
            <rect x="10" y="10" width="6.5" height="6.5" rx="1.5" fill="white" opacity=".22" />
          </svg>
        </span>
        <span class="logo-copy">
          <span>pivotgrid.io</span>
          <small>powered by RevoGrid</small>
        </span>
      </a>
      <div class="nav-links">
        <a href="#">Home</a>
        <a href="#caps">Features</a>
        <a href="#code">Code</a>
        <a href="#cmp">Compare</a>
      </div>
    </div>
    <div class="nav-right">
      <button class="theme-toggle" type="button" title="Toggle theme" @click="$emit('toggle-theme')">
        <span></span>
      </button>
      <a class="nav-cta" href="/">Use with RevoGrid -></a>
    </div>
  </nav>
</template>

<script lang="ts" setup>
defineEmits<{
  'toggle-theme': []
}>()
</script>
