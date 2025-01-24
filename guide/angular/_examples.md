<script setup>
    import { sidebarAngularEn } from '../../.vitepress/configs/sidebar/en.demo';
</script>

## Check out our Angular Data Grid examples

<ul>
<li v-for="example in sidebarAngularEn">
    <a :href="example.link">{{ example.text }}</a>
</li>
</ul>