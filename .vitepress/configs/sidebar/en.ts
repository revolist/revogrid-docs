import type { DefaultTheme } from 'vitepress'
import { sidebarDemonEn } from './en.demo'
import { sidebarGuideEn } from './en.guide'
import dotenv from 'dotenv'
dotenv.config()

// const PRO_BADGE = '<a href="/pro" rel="noopener noreferrer" target="_blank"><span class="VPBadge info">P</span></a>';

export const sidebarEn: DefaultTheme.Sidebar = {
    '/guide/': sidebarGuideEn,

    '/demo/': sidebarDemonEn,
    '/pro/': [
        {
            text: 'RevoGrid Pro',
            link: '/pro/',
        },
    ],
}
