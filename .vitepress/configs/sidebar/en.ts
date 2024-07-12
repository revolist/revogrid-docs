import type { DefaultTheme } from 'vitepress'

export const sidebarEn: DefaultTheme.Sidebar = {
    '/guide/': [
        {
            text: 'Essentials',
            collapsed: false,
            items: [
                {
                    text: 'JSX/TSX Template',
                    link: '/guide/jsx.template',
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
                {
                    text: 'Installation',
                    link: '/guide/installation',
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
                            text: 'Column Resizing',
                            link: '/guide/column/resize',
                        },
                        {
                            text: 'Column Autosize',
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
                    text: 'Cell Definitions',
                    link: '/guide/cell/',
                    items: [
                        {
                            text: 'Cell Renderer',
                            link: '/guide/cell/renderer',
                        },
                        {
                            text: 'Cell Editor',
                            link: '/guide/cell/editor',
                        },
                    ]
                },
            ],
        },
        {
            text: 'Rows',
            collapsed: true,
            items: [
                {
                    text: 'Row Definitions',
                    link: '/guide/row',
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
            text: 'Security',
            link: '/guide/security',
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

                { text: 'TypeScript', link: '/guide/ts/', items: [{ text: 'Typings', link: '/guide/types/README' }] },
                { text: 'Slots', link: '/guide/slots' },
            ],
        },
        {
            text: 'Remove Attribution',
            link: '/guide/attribution',
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
                    link: '/demo/js/js.overview',
                },
                {
                    text: 'Individual row sizes',
                    link: '/demo/js/js.custom.rows',
                },

                {
                    text: 'Grouping',
                    link: '/demo/js/js.grouping',
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
                    text: 'Getting Started Standalone',
                    link: '/demo/angular/angular.sample',
                },
                {
                    text: 'Cell component',
                    link: '/demo/angular/angular.cell',
                },
                {
                    text: 'Editor component',
                    link: '/demo/angular/angular.editor',
                },
            ],
        },
        {
            text: 'React',
            items: [
                {
                    text: 'Getting Started',
                    link: '/demo/react/react.sample',
                },
                {
                    text: 'Cell component',
                    link: '/demo/react/react.cell',
                },
                {
                    text: 'Editor component',
                    link: '/demo/react/react.editor',
                },
            ],
        },
        {
            text: 'Svelte',
            items: [
                {
                    text: 'Getting Started',
                    link: '/demo/svelte/svelte.sample',
                },
            ],
        },

        {
            text: 'Vue 3',
            items: [
                {
                    text: 'Getting Started Options API',
                    link: '/demo/vue/vue.sample.options',
                },
                {
                    text: 'Getting Started Composition API',
                    link: '/demo/vue/vue.sample.composition',
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
                    text: 'Grouping',
                    link: '/demo/vue/vue.grouping',
                },
            ],
        },
        {
            text: 'Vue 2',
            items: [
                {
                    text: 'Getting Started Options API',
                    link: '/demo/vue/vue2.sample',
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
