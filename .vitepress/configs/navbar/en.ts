import type { DefaultTheme } from 'vitepress'

export const navbarEn: DefaultTheme.NavItem[] = [
  {
    text: 'Guide',
    link: '/guide/',
    activeMatch: '^/guide/',
  },
  {
    text: 'Demo',
    link: '/demo/',
    activeMatch: '^/demo/',
  },
  {
    text: 'Revogrid Pro',
    link: '/pro/',
    activeMatch: '^/pro/',
  }, {
    text: 'v4.x',
    items: [{ text: 'v3.x', link: 'https://v3.router.vuejs.org' }],
  },
  {
    text: 'Links',
    items: [
      {
        text: 'Discussions',
        link: 'https://github.com/vuejs/router/discussions',
      },
      {
        text: 'Changelog',
        link: 'https://github.com/vuejs/router/blob/main/packages/router/CHANGELOG.md',
      },
    ],
  },
]
