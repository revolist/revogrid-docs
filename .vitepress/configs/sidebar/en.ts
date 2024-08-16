import type { DefaultTheme } from 'vitepress'

const PRO_BADGE = '<span class="VPBadge tip">P</span>';
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
                { text: 'Typings', link: '/guide/types/README' },
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
                    text: 'StencilJs',
                    collapsed: true,
                    items: [
                        { text: 'Getting Started', link: '/guide/stencil/' },
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
                        {
                            text: 'Column Header',
                            link: '/guide/column/header.template',
                        },
                        {
                            text: 'Column Header Properties',
                            link: '/guide/column/properties',
                        },
                        {
                            text: 'Column Readonly',
                            link: '/guide/column/readonly',
                        },
                        {
                            text: 'Column Ordering',
                            link: '/guide/column/order',
                        },
                        {
                            text: 'Column Pinning',
                            link: '/guide/column/pin',
                        },
                        {
                            text: 'Column Groups',
                            link: '/guide/column/grouping',
                        },
                        {
                            text: 'Custom Columns',
                            link: '/guide/column/types',
                        },
                        {
                            text:  `Column Selection ${PRO_BADGE}`,
                            link: '/guide/column/selection',
                        },
                        {
                            text: 'Column Stretching',
                            link: '/guide/column/stretch',
                            items: [
                                {
                                    text: `Advanced Stretch ${PRO_BADGE}`,
                                    link: '/guide/column/stretch.pro',
                                }
                            ]
                        },
                        {
                            text: `Column Spanning ${PRO_BADGE}`,
                            link: '/guide/column/span',
                        },
                    ]
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
                            text: 'Cell Readonly',
                            link: '/guide/column/readonly',
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
            ],
        },
        {
            text: 'Rows',
            collapsed: true,
            items: [
                {
                    text: 'Row Definitions',
                    link: '/guide/row',
                    items: [
                        {
                            text: 'Row Height',
                            link: '/guide/row/height',
                        },
                        {
                            text: 'Row Pinning',
                            link: '/guide/row/pin',
                        },
                        {
                            text: 'Row Headers',
                            link: '/guide/row/headers',
                        },
                        {
                            text: 'Row Ordering',
                            link: '/guide/row/order',
                            items: [
                                {
                                    text: `Multi Row Ordering ${PRO_BADGE}`,
                                    link: '/guide/row/order.pro',  
                                },
                            ]
                        },
                        {
                            text: `Row Auto-Focus ${PRO_BADGE}`,
                            link: '/guide/row/next.focus',
                        },
                        {
                            text: `Row Selection ${PRO_BADGE}`,
                            link: '/guide/row/selection',
                        },
                        {
                            text: `Row Odd ${PRO_BADGE}`,
                            link: '/guide/row/odd',
                        },
                        {
                            text: `Row Spanning ${PRO_BADGE}`,
                            link: '/guide/row/span',
                        }
                    ]
                },
            ],
        },
        {
            text: 'Advance',
            items: [
                // {
                //     text: 'Accessibility',
                //     link: '/guide/wcag',
                // },
                {
                    text: `Formula ${PRO_BADGE}`,
                    link: '/guide/formula',
                },
                {
                    text: `Pagination ${PRO_BADGE}`,
                    link: '/guide/pagination',
                },
                {
                    text: 'Copy and Paste',
                    link: '/guide/clipboard',
                    items: [
                        {
                            text: `JSON ${PRO_BADGE}`,
                            link: '/guide/clipboard.pro',
                        }
                    ]
                },
                {
                    text: 'Editing',
                    link: '/guide/editing',
                },
                {
                    text: 'Export',
                    link: '/guide/export',
                    items: [
                        {
                            text: `Excel ${PRO_BADGE}`,
                            link: '/guide/export.excel',
                        }
                    ]
                },
                {
                    text: 'Filtering',
                    link: '/guide/filters',
                },
                {
                    text: 'Plugins',
                    link: '/guide/plugin',
                },
                {
                    text: 'Security',
                    link: '/guide/security',
                },
                { text: 'Slots', link: '/guide/slots' },
                {
                    text: 'Sorting',
                    link: '/guide/sorting',
                },
                {
                    text: 'Standalone',
                    link: '/guide/standalone',
                },
                {
                    text: 'SSR',
                    link: '/guide/ssr',
                },
                {
                    text: 'Theme Manager',
                    link: '/guide/theme',
                },
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
                    text: 'Date column',
                    link: '/demo/js/js.date',
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
            text: 'StencilJs',
            items: [
                {
                    text: 'Getting Started',
                    link: '/demo/stencil/stencil.sample',
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
                    text: 'Column resize',
                    link: '/demo/angular/angular.column-resize',
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
