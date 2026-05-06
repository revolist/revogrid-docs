<script lang="ts" setup>
import { nextTick, onBeforeUnmount, onMounted, watch, watchEffect } from 'vue'
import { useData, useRoute } from 'vitepress'

type HeaderNavLinkOverride = {
    text: string
    href: string
    base?: 'rv' | 'pro'
    target?: string
    rel?: string
}

type HeaderNavControls = {
    hiddenItems?: string[]
    links?: HeaderNavLinkOverride[]
}

type NavItem = {
    text?: string
    link?: string
    target?: string
    rel?: string
    items?: NavItem[]
    [key: string]: unknown
}

let originalNav: NavItem[] | undefined

const trimTrailingSlash = (value: string) => value.replace(/\/+$/, '')
const rvGridBaseUrl = trimTrailingSlash(import.meta.env.VITE_RV_GRID_BASE_URL || 'https://rv-grid.com')
const rvGridProBaseUrl = trimTrailingSlash(import.meta.env.VITE_RV_GRID_PRO_BASE_URL || 'https://pro.rv-grid.com')

const { frontmatter, theme } = useData()
const route = useRoute()
let observer: MutationObserver | undefined

function cloneNav(items: NavItem[] = []): NavItem[] {
    return items.map((item) => ({
        ...item,
        items: item.items ? cloneNav(item.items) : undefined,
    }))
}

function resolveHeaderLink(href: string, base?: HeaderNavLinkOverride['base']) {
    if (href.startsWith('https://rv-grid.com')) {
        return `${rvGridBaseUrl}${href.slice('https://rv-grid.com'.length)}`
    }

    if (href.startsWith('https://pro.rv-grid.com')) {
        return `${rvGridProBaseUrl}${href.slice('https://pro.rv-grid.com'.length)}`
    }

    if (href.startsWith('/')) {
        if (base === 'pro') {
            return `${rvGridProBaseUrl}${href}`
        }

        if (base === 'rv' || frontmatter.value.externalHomeLinks) {
            return `${rvGridBaseUrl}${href}`
        }
    }

    return href
}

function applyLinkOverrides(items: NavItem[], overrides: HeaderNavLinkOverride[]) {
    return items.map((item) => {
        const override = overrides.find((entry) => entry.text === item.text)
        const next: NavItem = {
            ...item,
            items: item.items ? applyLinkOverrides(item.items, overrides) : undefined,
        }

        if (override) {
            next.link = resolveHeaderLink(override.href, override.base)
            next.target = override.target
            next.rel = override.rel
            delete next.items
        }

        return next
    })
}

watchEffect(() => {
    if (!originalNav) {
        originalNav = cloneNav(theme.value.nav as NavItem[])
    }

    const controls = (frontmatter.value.headerNav ?? {}) as HeaderNavControls
    const hidden = new Set(controls.hiddenItems ?? [])
    const links = controls.links ?? []

    let nav = cloneNav(originalNav).filter((item) => !item.text || !hidden.has(item.text))

    if (links.length) {
        nav = applyLinkOverrides(nav, links)
    }

    theme.value.nav = nav as typeof theme.value.nav
})

function textContent(element: Element) {
    return element.textContent?.replace(/\s+/g, ' ').trim() ?? ''
}

function rememberOriginal(element: HTMLElement, name: string, value: string | null) {
    const key = `headerNavOriginal${name}`
    if (!(key in element.dataset)) {
        element.dataset[key] = value ?? ''
    }
}

function restoreControlledElements() {
    document.querySelectorAll<HTMLElement>('[data-header-nav-controlled="true"]').forEach((element) => {
        element.style.display = element.dataset.headerNavOriginalDisplay ?? ''
        delete element.dataset.headerNavControlled
        delete element.dataset.headerNavOriginalDisplay
    })

    document.querySelectorAll<HTMLAnchorElement>('a[data-header-nav-link-controlled="true"]').forEach((link) => {
        const href = link.dataset.headerNavOriginalHref
        const target = link.dataset.headerNavOriginalTarget
        const rel = link.dataset.headerNavOriginalRel

        if (href !== undefined) {
            link.setAttribute('href', href)
        }

        if (target) {
            link.setAttribute('target', target)
        } else {
            link.removeAttribute('target')
        }

        if (rel) {
            link.setAttribute('rel', rel)
        } else {
            link.removeAttribute('rel')
        }

        delete link.dataset.headerNavLinkControlled
        delete link.dataset.headerNavOriginalHref
        delete link.dataset.headerNavOriginalTarget
        delete link.dataset.headerNavOriginalRel
    })
}

function topLevelNavItems() {
    return [
        ...document.querySelectorAll<HTMLElement>('.VPNavBarMenu > *'),
        ...document.querySelectorAll<HTMLElement>('.VPNavScreenMenu > *'),
    ]
}

function hideNavItems(hiddenItems: Set<string>) {
    if (!hiddenItems.size) return

    topLevelNavItems().forEach((item) => {
        const label = textContent(item.querySelector('button, a, .button-text') ?? item)

        if (!hiddenItems.has(label)) return

        rememberOriginal(item, 'Display', item.style.display)
        item.dataset.headerNavControlled = 'true'
        item.style.display = 'none'
    })
}

function rewriteNavLinks(links: HeaderNavLinkOverride[]) {
    if (!links.length) return

    const linkByText = new Map(links.map((link) => [link.text, link]))

    document
        .querySelectorAll<HTMLAnchorElement>('.VPNavBarMenu a, .VPNavScreenMenu a')
        .forEach((anchor) => {
            const label = textContent(anchor)
            const override = linkByText.get(label)

            if (!override) return

            rememberOriginal(anchor, 'Href', anchor.getAttribute('href'))
            rememberOriginal(anchor, 'Target', anchor.getAttribute('target'))
            rememberOriginal(anchor, 'Rel', anchor.getAttribute('rel'))
            anchor.dataset.headerNavLinkControlled = 'true'
            anchor.setAttribute('href', resolveHeaderLink(override.href, override.base))

            if (override.target) {
                anchor.setAttribute('target', override.target)
            } else {
                anchor.removeAttribute('target')
            }

            if (override.rel) {
                anchor.setAttribute('rel', override.rel)
            } else {
                anchor.removeAttribute('rel')
            }
        })
}

function applyDomControls() {
    if (typeof document === 'undefined') return

    restoreControlledElements()

    const controls = (frontmatter.value.headerNav ?? {}) as HeaderNavControls
    hideNavItems(new Set(controls.hiddenItems ?? []))
    rewriteNavLinks(controls.links ?? [])
}

async function scheduleDomControls() {
    await nextTick()
    applyDomControls()
}

onMounted(() => {
    scheduleDomControls()
    observer = new MutationObserver(() => scheduleDomControls())
    const nav = document.querySelector('.VPNav')
    if (nav) {
        observer.observe(nav, { childList: true, subtree: true })
    }
})

onBeforeUnmount(() => {
    observer?.disconnect()
    restoreControlledElements()
})

watch(
    () => [route.path, JSON.stringify(frontmatter.value.headerNav ?? {})],
    () => scheduleDomControls(),
    { immediate: true },
)
</script>

<template>
    <span hidden />
</template>
