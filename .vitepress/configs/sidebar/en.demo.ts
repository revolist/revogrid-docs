import type { DefaultTheme } from 'vitepress'
export const sidebarReactEn: DefaultTheme.SidebarItem[] = [
    {
        text: 'Getting Started',
        link: '/demo/react/react-datagrid',
    },
    {
        text: 'Cell component',
        link: '/demo/react/react.cell',
    },
    {
        text: 'Editor component',
        link: '/demo/react/react.editor',
    },
    {
        text: 'Grouping',
        link: '/demo/react/react-grouping',
    },
    {
        text: 'Multi selection',
        link: '/demo/react/react-multiselect',
    },
    {
        text: 'Tree view',
        link: '/demo/react/react-tree',
    },
]

export const sidebarAngularEn: DefaultTheme.SidebarItem[] = [
    {
        text: 'Getting Started Standalone',
        link: '/demo/angular/angular-datagrid',
    },
    {
        text: 'Cell component',
        link: '/demo/angular/angular.cell',
    },
    {
        text: 'Column resize',
        link: '/demo/angular/angular.column-resize',
    },
    {
        text: 'Header component & Tooltip',
        link: '/demo/angular/angular.header',
    },
    {
        text: 'Editor component',
        link: '/demo/angular/angular.editor',
    },
    {
        text: 'Editor custom date format',
        link: '/demo/angular/angular.editor-custom',
    },
    {
        text: 'Focus Catch',
        link: '/demo/angular/angular.focus',
    },
    {
        text: 'Demo: Inventory List',
        link: '/demo/angular/angular.full-demo',
    },
]
export const sidebarVue3En: DefaultTheme.SidebarItem[] = [
    {
        text: 'Getting Started Composition API',
        link: '/demo/vue/vue3-datagrid',
    },
    {
        text: 'Getting Started Options API',
        link: '/demo/vue/vue.sample.options',
    },
    {
        text: 'Cell component',
        link: '/demo/vue/vue.cell.composition',
    },
    {
        text: 'Editor component',
        link: '/demo/vue/vue.editor.composition',
    },
    {
        text: 'Checkbox list with Select All',
        link: '/demo/vue/vue.select',
    },
    {
        text: 'Tree view',
        link: '/demo/vue/vue.tree',
    },
    {
        text: 'Grouping',
        link: '/demo/vue/vue.grouping',
    },
]

export const sidebarVue2En: DefaultTheme.SidebarItem[] = [
    {
        text: 'Getting Started Options API',
        link: '/demo/vue/vue2-datagrid',
    },
    {
        text: 'Cell component',
        link: '/demo/vue/vue2.cell',
    },
    {
        text: 'Editor component',
        link: '/demo/vue/vue2.editor',
    },
    {
        text: 'Editor date component',
        link: '/demo/vue/vue2.date',
    },
    {
        text: 'Grouping',
        link: '/demo/vue/vue2.grouping',
    },
    {
        text: 'List',
        link: '/demo/vue/vue2.list',
    },
    {
        text: 'Checkbox list with Select All',
        link: '/demo/vue/vue2.select',
    },
]

export const sidebarDemonEn: DefaultTheme.SidebarItem[] = [
    {
        text: 'Demo',
        link: '/demo/',
    },
    {
        text: 'Demo: Prompts',
        link: '/demo/vue/ai-prompts',
    },
    {
        text: 'Demo: Pivot',
        link: '/demo/pivot',
    },
    {
        text: '<img src="/js.svg" alt="JS logo" width="15" height="15"/> JS,JSX',
        collapsed: true,
        items: [
            {
                text: 'Getting Started',
                link: '/demo/js/js.overview',
            },
            {
                text: 'Grouping rows',
                link: '/demo/js/js.grouping',
            },
            {
                text: 'Individual row sizes',
                link: '/demo/js/js.custom.rows',
            },
            {
                text: 'Date column',
                link: '/demo/js/js.date',
            },
            {
                text: 'Clear Filtering',
                link: '/demo/js/js.filtering',
            },
            {
                text: 'Hierarchical Tree',
                link: '/demo/jsx/jsx.tree',
            },
            {
                text: 'JSX Template',
                link: '/demo/jsx/jsx.template',
            },
        ],
    },
    {
        text: '<img src="/vuejs.svg" alt="Vue 3 logo" width="15" height="15"/> Vue 3',
        collapsed: true,
        items: sidebarVue3En,
    },
    {
        text: '<img src="/vuejs.svg" alt="Vue 2 logo" width="15" height="15"/> Vue 2',
        collapsed: true,
        items: sidebarVue2En,
    },
    {
        text: '<img src="/react.svg" alt="React logo" width="15" height="15"/> React',
        collapsed: true,
        items: sidebarReactEn,
    },
    {
        text: '<img src="/angular.svg" alt="Angular logo" width="15" height="15"/> Angular',
        collapsed: true,
        items: sidebarAngularEn,
    },
    {
        text: '<img src="/svelte.svg" alt="Svelte logo" width="15" height="15"/> Svelte',
        collapsed: true,
        items: [
            {
                text: 'Getting Started',
                link: '/demo/svelte/svelte-datagrid',
            },
        ],
    },
    {
        text: '<img src="/stenciljs.svg" alt="StencilJs logo" width="15" height="15"/> StencilJs',
        collapsed: true,
        items: [
            {
                text: 'Getting Started',
                link: '/demo/stencil/stencil.sample',
            },
        ],
    },
]
