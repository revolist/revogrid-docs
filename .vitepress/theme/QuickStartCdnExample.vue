<script setup lang="ts">
import { computed } from 'vue'

const closeScript = '</scr' + 'ipt>'

const srcDoc = computed(() =>
    [
        '<!DOCTYPE html>',
        '<html>',
        '<head>',
        '<meta charset="utf-8">',
        '<meta name="viewport" content="width=device-width, initial-scale=1">',
        '<style>',
        'html,body{height:100%;margin:0;background:#fff;font-family:Inter,system-ui,sans-serif;}',
        'body{box-sizing:border-box;padding:12px;}',
        'revo-grid{height:150px;min-height:0;width:100%;}',
        '</style>',
        '</head>',
        '<body>',
        '<revo-grid hide-attribution></revo-grid>',
        '<script type="module">',
        "import { defineCustomElement as defineRevoGrid } from 'https://cdn.jsdelivr.net/npm/@revolist/revogrid@latest/standalone/revo-grid.js/+esm';",
        'defineRevoGrid();',
        '',
        "const grid = document.querySelector('revo-grid');",
        'grid.columns = [',
        "  { prop: 'name', name: 'Name' },",
        "  { prop: 'role', name: 'Role' },",
        '];',
        'grid.source = [',
        "  { name: 'Ada Lovelace', role: 'Mathematician' },",
        "  { name: 'Grace Hopper', role: 'Computer scientist' },",
        '];',
        closeScript,
        '</body>',
        '</html>',
    ].join('\n'),
)
</script>

<template>
    <ClientOnly>
        <iframe
            class="quick-start-cdn-example"
            data-testid="quick-start-cdn-example"
            title="RevoGrid CDN quick start example"
            :srcdoc="srcDoc"
            loading="lazy"
        ></iframe>
    </ClientOnly>
</template>

<style scoped>
.quick-start-cdn-example {
    display: block;
    width: 100%;
    height: 176px;
    margin: 18px 0 20px;
    border: 1px solid var(--vp-c-divider);
    border-radius: 8px;
    background: var(--vp-c-bg);
}
</style>
