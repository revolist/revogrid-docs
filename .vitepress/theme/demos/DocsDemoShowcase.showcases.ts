import type { ShowcaseEntry } from './DocsDemoShowcase.types'

export const showcases: ShowcaseEntry[] = [
    {
        slug: 'hr',
        label: 'Grid at Scale',
        title: 'Grid at Scale',
        subtitle: 'High-volume HR records with virtualized rows, many columns, and custom renderers.',
        badge: 'Core',
        icon: 'scale',
        preview: 'scale',
    },
    {
        slug: 'ecommerce',
        label: 'Customer Analytics',
        title: 'Customer Analytics',
        subtitle: 'Inline visualizations, ratings, and segmentation across customers.',
        badge: 'Pro',
        icon: 'users',
        preview: 'customer',
    },
    {
        slug: 'color',
        label: 'Project Tracker',
        title: 'Project Tracker',
        subtitle: 'ERP-style task tracking with priorities, progress, and tags.',
        badge: 'Pro',
        icon: 'kanban',
        preview: 'tracker',
    },
    {
        slug: 'pivot',
        label: 'Pivot',
        title: 'Pivot Analytics',
        subtitle: 'Multidimensional summaries with row, column, and value fields.',
        badge: 'Enterprise',
        icon: 'table',
        preview: 'pivot',
    },
    {
        slug: 'gantt',
        label: 'Gantt',
        title: 'Gantt Planning',
        subtitle: 'Interactive scheduling with dependencies and critical path support.',
        badge: 'Enterprise',
        icon: 'gantt',
        preview: 'gantt',
    },
]
