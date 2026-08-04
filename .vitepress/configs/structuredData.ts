import type { HeadConfig } from 'vitepress'
import {
    getPlan,
    getProduct,
    getProductOfferPlanIds,
    resolvePlanPrice,
    type ProductId,
} from '../../commercial/productCatalog'

type JsonLdData = Record<string, unknown>

interface FaqItem {
    q?: string
    a?: string
}

interface StructuredDataHeadOptions {
    siteUrl: string
    relativePath: string
    title: string
    faq?: {
        items?: FaqItem[]
    }
}

const cleanPagePath = (relativePath: string): string => {
    const withoutExtension = relativePath.replace(/\.md$/, '')

    if (withoutExtension === 'index') {
        return '/'
    }

    if (withoutExtension.endsWith('/index')) {
        return `/${withoutExtension.replace(/\/index$/, '/')}`
    }

    return `/${withoutExtension}`
}

const jsonLdScript = (id: string, data: JsonLdData): HeadConfig => [
    'script',
    { type: 'application/ld+json', id },
    JSON.stringify(data),
]

const humanizePathSegment = (segment: string): string =>
    segment
        .replace(/\.md$/, '')
        .replace(/[-_]+/g, ' ')
        .replace(/\b\w/g, (char) => char.toUpperCase())

const breadcrumbJsonLd = (
    siteUrl: string,
    relativePath: string,
    title: string
): JsonLdData => {
    const path = cleanPagePath(relativePath)
    const segments = path.split('/').filter(Boolean)
    const items = [
        {
            '@type': 'ListItem',
            position: 1,
            name: 'Home',
            item: siteUrl,
        },
        ...segments.map((segment, index) => {
            const segmentPath = `/${segments.slice(0, index + 1).join('/')}`
            const isCurrentPage = index === segments.length - 1

            return {
                '@type': 'ListItem',
                position: index + 2,
                name: isCurrentPage ? title.replace(/ \| RevoGrid$/, '') : humanizePathSegment(segment),
                item: `${siteUrl}${segmentPath}`,
            }
        }),
    ]

    return {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: items,
    }
}

const structuredProductForPath = (relativePath: string): ProductId | undefined => {
    if (relativePath === 'index.md') {
        return 'revogrid'
    }
    if (['react-data-grid.md', 'vue-data-grid.md', 'angular-data-grid.md', 'svelte-data-grid.md'].includes(relativePath)) {
        return 'revogrid'
    }
    if (relativePath === 'pivot/index.md') return 'pivot'
    if (relativePath === 'gantt.md') return 'gantt'
    if (relativePath === 'scheduler.md') return 'scheduler'
    if (relativePath === 'event-scheduler.md') return 'event-scheduler'
    return undefined
}

const offerJsonLd = (siteUrl: string, planId: 'open-source' | 'pro-lite' | 'pro-advanced'): JsonLdData => {
    const plan = getPlan(planId)
    if (planId === 'open-source') {
        return {
            '@type': 'Offer',
            name: `RevoGrid ${plan.name}`,
            price: 0,
            priceCurrency: 'USD',
            category: 'Free',
            url: `${siteUrl}/guide/installation`,
            availability: 'https://schema.org/InStock',
        }
    }

    const price = resolvePlanPrice(planId)
    return {
        '@type': 'Offer',
        name: `RevoGrid ${plan.name}`,
        price: price.year.USD,
        priceCurrency: 'USD',
        ...(price.promotion ? { priceValidUntil: price.promotion.priceValidUntil } : {}),
        priceSpecification: {
            '@type': 'UnitPriceSpecification',
            price: price.year.USD,
            priceCurrency: 'USD',
            unitText: 'developer seat per year',
        },
        url: `${siteUrl}/pricing`,
        availability: 'https://schema.org/InStock',
    }
}

const softwareApplicationJsonLd = (
    siteUrl: string,
    relativePath: string,
    productId: ProductId,
): JsonLdData => {
    const product = getProduct(productId)
    const pagePath = relativePath === 'index.md' && productId !== 'revogrid'
        ? product.pageUrl
        : cleanPagePath(relativePath)

    return {
        '@context': 'https://schema.org',
        '@type': 'SoftwareApplication',
        '@id': `${siteUrl}/#software`,
        name: product.name,
        alternateName: productId === 'revogrid' ? 'RevoGrid Data Grid' : undefined,
        applicationCategory: 'DeveloperApplication',
        applicationSubCategory: 'JavaScript Data Grid',
        operatingSystem: 'Any',
        url: `${siteUrl}${pagePath === '/' ? '' : pagePath}`,
        image: `${siteUrl}/og-image.jpg`,
        description: productId === 'revogrid'
            ? 'A high-performance JavaScript data grid for Vue, React, Angular, Svelte, and JavaScript applications.'
            : `${product.name} is an embeddable commercial module for data-heavy web applications.`,
        author: {
            '@type': 'Organization',
            name: 'Revolist OU',
            url: 'https://revolist.eu/',
        },
        publisher: {
            '@type': 'Organization',
            name: 'Revolist OU',
            url: 'https://revolist.eu/',
        },
        softwareVersion: '4',
        offers: getProductOfferPlanIds(productId)
            .filter((planId): planId is 'open-source' | 'pro-lite' | 'pro-advanced' => planId !== 'enterprise')
            .map((planId) => offerJsonLd(siteUrl, planId)),
    }
}

const faqJsonLd = (faq: StructuredDataHeadOptions['faq']): JsonLdData | undefined => {
    const questions = faq?.items
        ?.filter((item) => item.q && item.a)
        .map((item) => ({
            '@type': 'Question',
            name: item.q,
            acceptedAnswer: {
                '@type': 'Answer',
                text: item.a,
            },
        }))

    if (!questions?.length) {
        return undefined
    }

    return {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: questions,
    }
}

export const createStructuredDataHead = ({
    siteUrl,
    relativePath,
    title,
    faq,
}: StructuredDataHeadOptions): HeadConfig[] => {
    const head = [
        jsonLdScript('breadcrumb-json-ld', breadcrumbJsonLd(siteUrl, relativePath, title)),
    ]

    const productId = structuredProductForPath(relativePath)
    if (productId) {
        head.push(jsonLdScript('software-application-json-ld', softwareApplicationJsonLd(siteUrl, relativePath, productId)))
    }

    const faqSchema = faqJsonLd(faq)

    if (faqSchema) {
        head.push(jsonLdScript('faq-json-ld', faqSchema))
    }

    return head
}
