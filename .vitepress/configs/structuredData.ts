import type { HeadConfig } from 'vitepress'
import { PRICES } from '../../pricing-page/prices'

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

const softwareApplicationJsonLd = (siteUrl: string): JsonLdData => ({
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    '@id': `${siteUrl}/#software`,
    name: 'RevoGrid',
    alternateName: 'RevoGrid Data Grid',
    applicationCategory: 'DeveloperApplication',
    applicationSubCategory: 'JavaScript Data Grid',
    operatingSystem: 'Any',
    url: siteUrl,
    image: `${siteUrl}/og-image.jpg`,
    description: 'A high-performance JavaScript data grid for Vue, React, Angular, Svelte, and JavaScript applications.',
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
    offers: [
        {
            '@type': 'Offer',
            name: 'RevoGrid Open Source',
            price: 0,
            priceCurrency: 'USD',
            category: 'Free',
            url: `${siteUrl}/guide/installation`,
            availability: 'https://schema.org/InStock',
        },
        {
            '@type': 'Offer',
            name: 'RevoGrid Pro Light',
            price: PRICES.light.year.USD,
            priceCurrency: 'USD',
            priceSpecification: {
                '@type': 'UnitPriceSpecification',
                price: PRICES.light.year.USD,
                priceCurrency: 'USD',
                unitText: 'developer seat per year',
            },
            url: `${siteUrl}/pricing`,
            availability: 'https://schema.org/InStock',
        },
        {
            '@type': 'Offer',
            name: 'RevoGrid Pro Advanced',
            price: PRICES.advanced.year.USD,
            priceCurrency: 'USD',
            priceSpecification: {
                '@type': 'UnitPriceSpecification',
                price: PRICES.advanced.year.USD,
                priceCurrency: 'USD',
                unitText: 'developer seat per year',
            },
            url: `${siteUrl}/pricing`,
            availability: 'https://schema.org/InStock',
        },
    ],
})

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

    if (relativePath !== 'index.md') {
        return head
    }

    head.push(jsonLdScript('software-application-json-ld', softwareApplicationJsonLd(siteUrl)))

    const faqSchema = faqJsonLd(faq)

    if (faqSchema) {
        head.push(jsonLdScript('faq-json-ld', faqSchema))
    }

    return head
}
