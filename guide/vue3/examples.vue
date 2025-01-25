<script setup lang="ts">
    import { sidebarVue3En } from '../../.vitepress/configs/sidebar/en.demo';
</script>

<template>
    <h2>Check out our Vue Data Grid examples</h2>

<ul>
<li v-for="example in sidebarVue3En">
    <a :href="example.link">{{ example.text }}</a>
</li>
</ul>
</template>