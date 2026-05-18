import type { DefaultTheme } from 'vitepress'
export const sidebarReactEn: DefaultTheme.SidebarItem[] = [
    {
        text: 'Getting Started',
        link: '/guide/demos/react/react-datagrid',
    },
    {
        text: 'Cell component',
        link: '/guide/demos/react/react.cell',
    },
    {
        text: 'Editor component',
        link: '/guide/demos/react/react.editor',
    },
    {
        text: 'Grouping',
        link: '/guide/demos/react/react-grouping',
    },
    {
        text: 'Multi selection',
        link: '/guide/demos/react/react-multiselect',
    },
    {
        text: 'Tree view',
        link: '/guide/demos/react/react-tree',
    },
]

export const sidebarAngularEn: DefaultTheme.SidebarItem[] = [
    {
        text: 'Getting Started Standalone',
        link: '/guide/demos/angular/angular-datagrid',
    },
    {
        text: 'Cell component',
        link: '/guide/demos/angular/angular.cell',
    },
    {
        text: 'Column resize',
        link: '/guide/demos/angular/angular.column-resize',
    },
    {
        text: 'Header component & Tooltip',
        link: '/guide/demos/angular/angular.header',
    },
    {
        text: 'Editor component',
        link: '/guide/demos/angular/angular.editor',
    },
    {
        text: 'Editor custom date format',
        link: '/guide/demos/angular/angular.editor-custom',
    },
    {
        text: 'Focus Catch',
        link: '/guide/demos/angular/angular.focus',
    },
    {
        text: 'Demo: Inventory List',
        link: '/guide/demos/angular/angular.full-demo',
    },
    {
        text: 'Demo: Sample module',
        link: '/guide/demos/angular/angular.sample.module',
    },
    {
        text: 'Tree view',
        link: '/guide/demos/angular/angular-tree',
    }
]
export const sidebarVue3En: DefaultTheme.SidebarItem[] = [
    {
        text: 'Getting Started Composition API',
        link: '/guide/demos/vue/vue3-datagrid',
    },
    {
        text: 'Getting Started Options API',
        link: '/guide/demos/vue/vue.sample.options',
    },
    {
        text: 'Cell component',
        link: '/guide/demos/vue/vue.cell.composition',
    },
    {
        text: 'Editor component',
        link: '/guide/demos/vue/vue.editor.composition',
    },
    {
        text: 'Checkbox list with Select All',
        link: '/guide/demos/vue/vue.select',
    },
    {
        text: 'Grouping',
        link: '/guide/demos/vue/vue.grouping',
    },
    {
        text: 'Tree view',
        link: '/guide/demos/vue/vue-tree',
    },
]

export const sidebarVue2En: DefaultTheme.SidebarItem[] = [
    {
        text: 'Getting Started Options API',
        link: '/guide/demos/vue/vue2-datagrid',
    },
    {
        text: 'Cell component',
        link: '/guide/demos/vue/vue2.cell',
    },
    {
        text: 'Editor component',
        link: '/guide/demos/vue/vue2.editor',
    },
    {
        text: 'Editor date component',
        link: '/guide/demos/vue/vue2.date',
    },
    {
        text: 'Grouping',
        link: '/guide/demos/vue/vue2.grouping',
    },
    {
        text: 'List',
        link: '/guide/demos/vue/vue2.list',
    },
    {
        text: 'Checkbox list with Select All',
        link: '/guide/demos/vue/vue2.select',
    },
]

export const sidebarJavaScriptDemosEn: DefaultTheme.SidebarItem[] = [
    {
        text: 'Getting Started',
        link: '/guide/demos/js/js.overview',
    },
    {
        text: 'Grouping rows',
        link: '/guide/demos/js/js.grouping',
    },
    {
        text: 'Individual row sizes',
        link: '/guide/demos/js/js.custom.rows',
    },
    {
        text: 'Date column',
        link: '/guide/demos/js/js.date',
    },
    {
        text: 'Clear Filtering',
        link: '/guide/demos/js/js.filtering',
    },
    {
        text: 'JSX Template',
        link: '/guide/demos/jsx/jsx.template',
    },
    {
        text: 'Hierarchical Tree',
        link: '/guide/demos/jsx/jsx-tree',
    },
]

export const sidebarGuideDemosEn: DefaultTheme.SidebarItem[] = [
    {
        text: '<img src="/js.svg" alt="JS logo" width="15" height="15"/> JS,JSX',
        collapsed: true,
        items: sidebarJavaScriptDemosEn,
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
                link: '/guide/demos/svelte/svelte-datagrid',
            },
        ],
    },
    {
        text: '<img src="/stenciljs.svg" alt="StencilJs logo" width="15" height="15"/> StencilJs',
        collapsed: true,
        items: [
            {
                text: 'Getting Started',
                link: '/guide/demos/stencil/stencil.sample',
            },
        ],
    },
]

