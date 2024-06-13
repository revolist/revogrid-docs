import type { DefaultTheme } from 'vitepress'

export const sidebarEn: DefaultTheme.Sidebar = {
    '/guide/': [
        {
            text: 'Getting Started',
            collapsed: false,
            items: [
                {
                    text: 'Overview',
                    link: '/guide/overview',
                },
                {
                    text: 'Quick Start',
                    link: '/guide/',
                },
            ],
        },
        {
            text: 'Essentials',
            collapsed: false,
            items: [
                {
                    text: 'JSX/TSX Template',
                    link: '/guide/jsx.template',
                },
                {
                    text: 'Installation',
                    link: '/guide/installation',
                },
                {
                    text: 'Lifecycle Hooks',
                    link: '/guide/lifecycle',
                },
                {
                    text: 'Features and Definitions',
                    link: '/guide/defs',
                },
                {
                    text: 'Grid size',
                    link: '/guide/grid.size',
                },
                {
                    text: 'API',
                    link: '/guide/api/revoGrid',
                },
            ],
        },
        {
            text: 'Columns',
            collapsed: true,
            items: [
                {
                    text: 'Column Definitions',
                    link: '/guide/column/',
                    items: [
                        {
                            text: 'Format',
                            link: '/guide/column/types',
                        },
                        {
                            text: 'Grouping',
                            link: '/guide/column/grouping',
                        },
                        {
                            text: 'Resizing',
                            link: '/guide/column/resize',
                        },
                        {
                            text: 'Autosize',
                            link: '/guide/column/autosize',
                        },
                    ],
                },
            ],
        },
        {
            text: 'Cells',
            collapsed: true,
            items: [
                {
                    text: 'Properties',
                    link: '/guide/cell/properties',
                },
                {
                    text: 'Cell Renderer',
                    link: '/guide/cell/renderer',
                },
                {
                    text: 'Cell Editor',
                    link: '/guide/cell/editor',
                },
            ],
        },
        {
            text: 'Rows',
            collapsed: true,
            items: [
                {
                    text: 'Properties',
                    link: '/guide/rows.class',
                },
                {
                    text: 'Pinning',
                    link: '/guide/rows.pinned',
                },
                {
                    text: 'Headers',
                    link: '/guide/rows.headers',
                },
                {
                    text: 'Size definition',
                    link: '/guide/rows.size',
                },
            ],
        },
        {
            text: 'Export',
            link: '/guide/export.plugin',
        },
        {
            text: 'Filtering',
            link: '/guide/filters',
        },
        {
            text: 'Sorting',
            link: '/guide/sorting',
        },
        {
            text: 'SSR',
            link: '/guide/ssr',
        },
        {
            text: 'Theme Manager',
            link: '/guide/theme',
        },
        {
            text: 'Frameworks',
            items: [
                {
                    text: 'Angular',
                    collapsed: true,
                    items: [
                        { text: 'Getting Started', link: '/guide/angular/' },
                        {
                            text: 'Cell Renderer',
                            link: '/guide/angular/renderer',
                        },
                        { text: 'Cell Editor', link: '/guide/angular/editor' },
                        // {
                        //     text: 'Web Component',
                        //     link: '/guide/angular/webcomponent',
                        // },
                    ],
                },
                {
                    text: 'React',
                    collapsed: true,
                    items: [
                        { text: 'Getting Started', link: '/guide/react/' },
                        {
                            text: 'Cell Renderer',
                            link: '/guide/react/renderer',
                        },
                        { text: 'Cell Editor', link: '/guide/react/editor' },
                    ],
                },
                {
                    text: 'Svelte',
                    collapsed: true,
                    items: [
                        { text: 'Getting Started', link: '/guide/svelte/' },
                    ],
                },
                {
                    text: 'Vue 2',
                    collapsed: true,
                    items: [
                        { text: 'Getting Started', link: '/guide/vue2/' },
                        { text: 'Cell Renderer', link: '/guide/vue2/renderer' },
                        { text: 'Cell Editor', link: '/guide/vue2/editor' },
                        // {
                        //     text: 'Web Component',
                        //     link: '/guide/vue2/webcomponent',
                        // },
                    ],
                },
                {
                    text: 'Vue 3',
                    collapsed: true,
                    items: [
                        { text: 'Getting Started', link: '/guide/vue3/' },
                        { text: 'Cell Renderer', link: '/guide/vue3/renderer' },
                        { text: 'Cell Editor', link: '/guide/vue3/editor' },
                    ],
                },
            ],
        },
        {
            text: 'Advance',
            items: [
                {
                    text: 'Standalone',
                    link: '/guide/standalone',
                },

                { text: 'TypeScript', link: '/guide/ts/' },
                { text: 'Slots', link: '/guide/slots' },
            ],
        },
        {
            text: 'Contributor Guide',
            link: '/guide/CONTRIBUTING',
        },
        {
            text: 'Versioning',
            link: '/guide/migration',
        },
    ],

    '/demo/': [
        {
            text: 'Demo',
            link: '/demo/',
        },
        {
            text: 'Vanilla Js',
            items: [
                {
                    text: 'First run',
                    link: '/demo/js/js.first',
                },
                {
                    text: 'Grouping',
                    link: '/demo/vue/vue.grouping',
                },
                {
                    text: 'Individual row sizes',
                },
            ],
        },
        {
            text: 'JSX/TSX',
            items: [
                {
                    text: 'Template',
                    link: '/demo/jsx/jsx.template',
                },
                {
                    text: 'Tree',
                    link: '/demo/jsx/jsx.tree',
                },
            ],
        },
        {
            text: 'Angular',
            items: [
                {
                    text: 'Cell component',
                    link: '/demo/vue/vue.list',
                },
                {
                    text: 'Editor component',
                    link: '/demo/vue/vue.list',
                },
            ],
        },
        {
            text: 'React',
            items: [
                {
                    text: 'Cell component',
                    link: '/demo/vue/vue.list',
                },
                {
                    text: 'Editor component',
                    link: '/demo/vue/vue.list',
                },
            ],
        },
        {
            text: 'Svelte',
            items: [
                {
                    text: 'Cell component',
                    link: '/demo/vue/vue.list',
                },
                {
                    text: 'Editor component',
                    link: '/demo/vue/vue.list',
                },
            ],
        },
        {
            text: 'Vue 2',
            items: [
                {
                    text: 'Cell component',
                    link: '/demo/vue/vue.list',
                },
                {
                    text: 'Editor component',
                    link: '/demo/vue/vue.list',
                },
                {
                    text: 'List',
                    link: '/demo/vue/vue.list',
                },
                {
                    text: 'Checkbox list with Select All',
                    link: '/demo/vue/vue.selectall',
                },
                {
                    text: 'Grouping',
                    link: '/demo/vue/vue.grouping',
                },
            ],
        },
    ],
    '/pro/': [
        {
            text: 'Revogrid Pro',
            link: '/pro/',
        },
    ],
}
