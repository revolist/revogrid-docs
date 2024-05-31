import type { DefaultTheme } from 'vitepress/types/default-theme'

export const sidebarEn: DefaultTheme.Sidebar = {
    '/guide/': [
        // {
        //   text: 'Setup',
        //   items: [
        //     {
        //       text: 'Introduction',
        //       link: '/introduction',
        //     },
        //     {
        //       text: 'Installation',
        //       link: '/installation',
        //     },
        //   ],
        // },
        {
            text: 'Getting Started',
            collapsed: false,
            items: [
                {
                    text: 'Motivation',
                    link: '/guide/motivation',
                },
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
                    text: 'Features and Definitions',
                    link: '/guide/defs',
                },
                {
                    text: 'Installation',
                    link: '/guide/installation',
                },
                {
                    text: 'JSX/TSX Template',
                    link: '/guide/jsx.template',
                },
                {
                    text: 'Grid size',
                    link: '/guide/grid.size',
                },
                {
                    text: 'Lifecycle Hooks',
                    link: '/guide/lifecycle',
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
                            text: 'Types',
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
                    text: 'Renderer',
                    link: '/guide/cell/renderer',
                },
                {
                    text: 'Editor',
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
            text: 'Theme Manager',
            collapsed: true,
            items: [
                {
                    text: 'Theme',
                    link: '/guide/theme/theme',
                },
                {
                    text: 'Light Theme',
                    link: '/guide/theme/theme.light',
                },
                {
                    text: 'Dark Theme',
                    link: '/guide/theme/theme.dark',
                },
            ],
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
            text: 'Export',
            link: '/guide/export.plugin',
        },
        {
            text: 'Versioning',
            link: '/guide/migration',
        },
        {
            text: 'API',
            link: '/guide/api/revoGrid',
        },
        {
            text: 'Contributor Guide',
            link: '/guide/CONTRIBUTING',
        },
        {
            text: 'Frameworks',
            items: [
                {
                    text: 'Angular',
                    collapsed: true,
                    items: [
                        { text: 'Getting Started', link: '/guide/angular/' },
                        { text: 'Renderer', link: '/guide/angular/renderer' },
                        { text: 'Editor', link: '/guide/angular/editor' },
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
                        { text: 'Renderer', link: '/guide/react/renderer' },
                        { text: 'Editor', link: '/guide/react/editor' },
                    ],
                },
                {
                    text: 'Svelte',
                    collapsed: true,
                    items: [{ text: 'Getting Started', link: '/guide/svelte/' }],
                },
                { text: 'TypeScript', link: '/guide/ts/' },
                {
                    text: 'Vue 2',
                    collapsed: true,
                    items: [
                        { text: 'Getting Started', link: '/guide/vue2/' },
                        { text: 'Renderer', link: '/guide/vue2/renderer' },
                        { text: 'Editor', link: '/guide/vue2/editor' },
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
                        { text: 'Renderer', link: '/guide/vue3/renderer' },
                        { text: 'Editor', link: '/guide/vue3/editor' },
                    ],
                },
            ],
        },
    ],

    '/demo/': [
        {
            text: 'Demo',
            link: '/demo/',
        },
        {
            text: 'JS',
            items: [
                {
                    text: 'First run',
                    link: '/demo/js/js.first',
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
            text: 'Vue',
            items: [
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
