import type { DefaultTheme } from 'vitepress'
import { sidebarGuideEn } from './en.guide'
import dotenv from 'dotenv'
dotenv.config()

// const PRO_BADGE = '<a href="/pro" rel="noopener noreferrer" target="_blank"><span class="VPBadge info">P</span></a>';

export const sidebarEn: DefaultTheme.Sidebar = {
    '/guide/': sidebarGuideEn,

    '/pro/': [
        {
            text: 'RevoGrid Pro',
            link: '/pro/',
        },
        {
            text: 'Gantt',
            link: '/gantt',
        },
    ],
}
