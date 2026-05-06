import type { DefaultTheme } from 'vitepress'
import { demosPortalUrl } from '../demoPortal'

export const navbarEn: DefaultTheme.NavItem[] = [
  {
    text: 'Product',
    items: [
      {
        text: 'Data Grid',
        link: '/',
        activeMatch: '^/$',
      },
      {
        text: 'Pivot Analytics',
        link: '/pivot',
        activeMatch: '^/pivot',
      },
      {
        text: 'Gantt & Scheduler',
        link: '/gantt',
        activeMatch: '^/gantt',
      },
    ],
  },
  {
    text: 'Docs',
    link: '/guide/',
    activeMatch: '^/guide/',
  },
  {
    text: 'Demos',
    items: [
      {
        text: 'Use Cases',
        link: '/demo/',
        activeMatch: '^/demo/',
      },
      {
        text: 'Examples Portal',
        link: demosPortalUrl('/', { framework: 'all' }),
      },
    ],
  },
  {
    text: 'Pricing',
    link: '/pro/prices',
  },
  {
    text: 'RevoGrid Pro',
    link: '/pro/',
    activeMatch: '^/(pro/(?!prices(?:/|$))|pro-docs/)',
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
      {
        text: 'v3.x',
        link: 'https://v3.rv-grid.com',
      },
      // {
      //   text: 'Changelog',
      //   link: 'https://github.com/revolist/revogrid/CHANGELOG.md',
      // },
    ],
  },
]
