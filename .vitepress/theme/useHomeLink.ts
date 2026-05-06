import { useData } from 'vitepress'

const trimTrailingSlash = (value: string) => value.replace(/\/+$/, '')

export function useHomeLink() {
    const { frontmatter } = useData()
    const baseUrl = trimTrailingSlash(import.meta.env.VITE_RV_GRID_BASE_URL || 'https://rv-grid.com')

    const homeLink = (href: string) => {
        if (!frontmatter.value.externalHomeLinks || !href.startsWith('/')) {
            return href
        }
        return `${baseUrl}${href}`
    }

    return { homeLink }
}
