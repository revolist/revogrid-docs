import type { DefaultTheme } from 'vitepress/types/default-theme'

export const sidebarEn: DefaultTheme.Sidebar = {
    '/': [
        // {
        //   text: 'Setup',
        //   items: [
        //     {
        //       text: 'Introduction',
        //       link: '/introduction.html',
        //     },
        //     {
        //       text: 'Installation',
        //       link: '/installation.html',
        //     },
        //   ],
        // },
        {
          text: 'Essentials',
          collapsed: false,
          items: [
            {
              text: 'Introduction',
              link: '/guide/overview.html',
            },
            {
              text: 'Getting Started',
              link: '/guide/',
            },
            {
              text: 'JSX/TSX Template',
              link: '/guide/jsx.template.html',
            },
            {
              text: 'Grid size',
              link: '/guide/grid.size.html',
            }
          ],
        },
        {
          text: 'Columns',
          collapsed: false,
          items: [
            {
              text: 'Properties',
              link: '/guide/column/properties.html',
            },
            {
              text: 'Custom Header Template',
              link: '/guide/column/customHeader.html',
            },
            {
              text: 'Formatting',
              link: '/guide/column/types.html',
            },
            {
              text: 'Pinning',
              link: '/guide/column/pinned.html',
            },
            {
              text: 'Grouping',
              link: '/guide/column/grouping.html',
            },
            {
              text: 'Resizing',
              link: '/guide/column/resize.html',
            },
            {
              text: 'Autosize',
              link: '/guide/column/autosize.html',
            },
          ],
        },
        {
          text: 'Cells',
          collapsed: false,
          items: [
            {
              text: 'Properties',
              link: '/guide/cell/properties.html',
            },
            {
              text: 'Renderer',
              link: '/guide/cell/renderer.html',
            },
            {
              text: 'Editor',
              link: '/guide/cell/editor.html',
            },
          ],
        },
        {
          text: 'Filtering',
          link: '/guide/filters.html',
        },
        {
          text: 'Sorting',
          link: '/guide/sorting.html',
        },
        {
          text: 'Rows',
          collapsed: false,
          items: [
            {
              text: 'Properties',
              link: '/guide/rows.class.html',
            },
            {
              text: 'Pinning',
              link: '/guide/rows.pinned.html',
            },
            {
              text: 'Headers',
              link: '/guide/rows.headers.html',
            },
            {
              text: 'Size definition',
              link: '/guide/rows.size.html',
            },
          ],
        },
        {
          text: 'Theme Manager',
          collapsed: false,
          items: [
            {
              text: 'Theme',
              link: '/guide/theme/theme.html',
            },
            {
              text: 'Light Theme',
              link: '/guide/theme/theme.light.html',
            },
            {
              text: 'Dark Theme',
              link: '/guide/theme/theme.dark.html',
            },
          ],
        },
        {
          text: 'Export',
          link: '/guide/export.plugin.html',
        },
        {
          text: 'Migration',
          items: [
            {
              text: 'Migrating from Revogrid v3.x',
              link: '/guide/migration.html',
            },
          ],
        },
        {
          text: 'API',
          link: '/guide/api.html',
        },
        {
          text: 'Frameworks',
          items: [
            {
              text: 'Vue',
              items: [
                { text: 'Overview', link: '/guide/framework/framework.vue.overview.html' },
                { text: 'Component', link: '/guide/framework/framework.vue.component' },
                { text: 'Editor', link: '/guide/framework/framework.vue.editor' },
                { text: 'WebComponent', link: '/guide/framework/framework.vue.webcomponent' },
              ],
            },
            {
              text: 'React',
              items: [
                { text: 'Overview', link: '/guide/framework/framework.react.overview.html' },
                { text: 'Component', link: '/guide/framework/framework.react.component' },
              ],
            },
            {
              text: 'Svelte',
              items: [
                { text: 'Overview', link: '/guide/framework/framework.svelte.overview.html'},
              ],
            },
            {
              text: 'Angular 2+',
              items: [
                { text: 'Overview', link: '/guide/framework/framework.angular.overview.html' },
                { text: 'WebComponent', link: '/guide/framework/framework.angular.webcomponent' },
              ],
            },
            { text: 'TypeScript', link: '/guide/framework/framework.ts' },
          ],
        },
      ],

      // '/api/': [
      //   {
      //     text: 'packages',
      //     items: [{ text: 'vue-router', link: '/api/' }],
      //   },
      // ],
}

// export const sidebarEn: DefaultTheme.Sidebar = {
//     '/guide/': [
//         {
//           text: 'Documentation',
//           items: [
//             { link: 'getting-started' },
//             {
//               text: 'Column definitions',
//               items: [
//                 { link: 'column/properties'},
//                 { link: 'column/pinned'},
//                 { link: 'column/customHeader'},
//                 { link: 'column/grouping'},
//                 { link: 'autosize'},
//                 { link: 'column/resize' },
//               ]
//             },
//             // 'column/types',
//             // {
//             //   text: 'Cells',
//             //   collapsible: true,
//             //   items: [
//             //     'cell/renderer',
//             //     'cell/editor',
//             //     'cell/properties',
//             //   ]
//             // },
//             // 'sorting',
//             // 'filters',
//             // {
//             //   text: 'Row properties',
//             //   collapsible: true,
//             //   items: [
//             //     'rows.pinned',
//             //     'rows.class',
//             //     'rows.headers',
//             //     'rows.size'
//             //   ]
//             // },
//             // {
//             //   text: 'Theme Manager',
//             //   collapsible: true,
//             //   items: ['theme', 'theme.light', 'theme.dark'],
//             // },
//             // 'jsx.template',
//             // 'export.plugin',
//             // 'grid.size',
//             // 'migration',
//             // 'api',
//           ]
//         },
//         // {
//         //   text: 'Frameworks',
//         //   collapsible: true,
//         //   items: [
//         //     {
//         //       text: 'Vue',
//         //       collapsible: true,
//         //       items: [
//         //         vueLink,
//         //         'framework.vue.component',
//         //         'framework.vue.editor',
//         //         'framework.vue.webcomponent',
//         //       ]
//         //     },
//         //     {
//         //       text: 'React',
//         //       collapsible: true,
//         //       items: [reactLink, 'framework.react.component']
//         //     },
//         //     {
//         //       text: 'Svelte',
//         //       collapsible: true,
//         //       items: [
//         //         svelteLink,
//         //       ]
//         //     },
//         //     {
//         //       text: 'Angular 2+',
//         //       collapsible: true,
//         //       items: [
//         //         angularLink,
//         //         'framework.angular.webcomponent'
//         //       ]
//         //     },
//         //     'framework.ts',
//         //   ],
//         // }
//       ],
// }
