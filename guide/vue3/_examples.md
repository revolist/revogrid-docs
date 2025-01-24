<script lang="ts">
    import { sidebarVue3En } from '../../.vitepress/configs/sidebar/en.demo';
</script>

## Check out our Vue Data Grid examples

<ul>
<li v-for="example in sidebarVue3En">
    <a :href="example.link">{{ example.text }}</a>
</li>
</ul>