<script setup>
    import { sidebarReactEn } from '../../.vitepress/configs/sidebar/en.demo';
</script>

## Check out our React Data Grid examples

<ul>
<li v-for="example in sidebarReactEn">
    <a :href="example.link">{{ example.text }}</a>
</li>
</ul>