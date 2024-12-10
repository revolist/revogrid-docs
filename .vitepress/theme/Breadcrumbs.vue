<template>
    <nav class="breadcrumbs">
      <ul>
        <li v-for="(crumb, index) in crumbs" :key="index">
          <span v-if="index !== crumbs.length - 1">
            <a :href="crumb.path">{{ crumb.label }}</a>
          </span>
          <span v-else>{{ crumb.label }}</span>
        </li>
      </ul>
    </nav>
  </template>
  
  <script setup lang="ts">
  import { computed } from 'vue'
  import { useRoute } from 'vitepress'
  
  interface Crumb {
    label: string
    path: string
  }
  
  // Get the current route
  const route = useRoute()
  
  // Dynamically generate breadcrumbs based on the current route
  const crumbs = computed<Crumb[]>(() => {
    const pathParts = route.path.split('/').filter(Boolean)
    return pathParts.map((part, index) => {
      const path = '/' + pathParts.slice(0, index + 1).join('/')
      const label = part.replace(/-/g, ' ').replace(/^\w/, (c) => c.toUpperCase()).replace('.html', '');
      return { label, path }
    })
  })
  </script>
  
  <style scoped>
  .breadcrumbs {
    font-size: 0.875rem;
    margin-bottom: 1rem;
  }
  
  .breadcrumbs ul {
    display: flex;
    list-style: none;
    gap: 0.5rem;
    padding: 0;
    margin: 0;
  }
  
  .breadcrumbs li {
    display: flex;
    align-items: center;
  }
  
  .breadcrumbs li a {
    color: var(--vp-c-brand);
    text-decoration: none;
  }
  
  .breadcrumbs li a:hover {
    text-decoration: underline;
  }
  
  .breadcrumbs li::after {
    content: '/';
    margin-left: 0.5rem;
  }
  
  .breadcrumbs li:last-child::after {
    content: '';
    margin: 0;
  }
  </style>