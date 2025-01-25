<script setup lang="ts">
    import { sidebarVue2En } from '../../.vitepress/configs/sidebar/en.demo';
    console.log(sidebarVue2En);
</script>

## Check out our Vue Data Grid examples

<ul>
<li v-for="example in sidebarVue2En" :key="example.link">
    <a :href="example.link">{{ example.text }}</a>
</li>
</ul>