import type { DefaultTheme } from 'vitepress'

export const navbarEn: DefaultTheme.NavItem[] = [
  {
    text: 'Docs',
    link: '/guide/',
    activeMatch: '^/guide/',
  },
  {
    text: 'Use Cases',
    link: '/demo/',
    activeMatch: '^/demo/',
  },
  {
    text: 'Interactive Demos',
    link: 'https://demo.rv-grid.com/?framework=all',
  },
  {
    text: 'Pricing',
    link: '/pro/prices',
  },
  {
    text: 'RevoGrid Pro',
    link: '/pro/',
    activeMatch: '^/(pro/(?!prices(?:/|$))|pro-docs/)',
  }, {
    text: 'v4.x',
    items: [{ text: 'v3.x', link: 'https://v3.rv-grid.com' }],
  },
  {
    text: 'Links',
    items: [
      {
        text: 'Discussions',
        link: 'https://github.com/revolist/revogrid/discussions',
      },
      {
        text: 'Roadmap',
        link: 'https://github.com/users/revolist/projects/3',
      },
      // {
      //   text: 'Changelog',
      //   link: 'https://github.com/revolist/revogrid/CHANGELOG.md',
      // },
    ],
  },
]
