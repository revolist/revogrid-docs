export type ShowcaseSlug = 'hr' | 'ecommerce' | 'color' | 'pivot' | 'gantt'
export type ShowcaseBadge = 'Core' | 'Pro' | 'Enterprise'
export type ShowcaseIcon = 'scale' | 'users' | 'kanban' | 'table' | 'gantt'
export type ShowcasePreview = 'scale' | 'customer' | 'tracker' | 'pivot' | 'gantt'

export type ShowcaseEntry = {
    slug: ShowcaseSlug
    label: string
    title: string
    subtitle: string
    badge: ShowcaseBadge
    icon: ShowcaseIcon
    preview: ShowcasePreview
}
