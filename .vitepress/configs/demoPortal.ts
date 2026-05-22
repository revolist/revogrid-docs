const DEFAULT_DEMOS_PORTAL_ORIGIN = 'https://demo.rv-grid.com'

const viteEnv = (
    import.meta as ImportMeta & {
        env?: Record<string, string | undefined>
    }
).env

const nodeEnv = typeof process === 'undefined' ? undefined : process.env

export const DEMOS_PORTAL_ORIGIN =
    viteEnv?.VITE_DEMOS_PORTAL_ORIGIN ||
    nodeEnv?.VITE_DEMOS_PORTAL_ORIGIN ||
    DEFAULT_DEMOS_PORTAL_ORIGIN

export function demosPortalUrl(
    path = '/',
    params: Record<string, string | undefined> = {},
) {
    const url = new URL(path, DEMOS_PORTAL_ORIGIN)

    for (const [key, value] of Object.entries(params)) {
        if (value) {
            url.searchParams.set(key, value)
        }
    }

    return url.toString()
}
