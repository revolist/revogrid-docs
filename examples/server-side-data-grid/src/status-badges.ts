import { badgeClassName } from '@revolist/ui/badge'
import { CHART_SERIES_COLORS } from '@revolist/ui/color-palette/chart-palettes'
import { statuses } from '../shared/query.ts'

export const statusColors = {
  pending: CHART_SERIES_COLORS.violet,
  paid: CHART_SERIES_COLORS.orange,
  shipped: CHART_SERIES_COLORS.blue,
  cancelled: CHART_SERIES_COLORS.magenta,
} as const
export type Status = (typeof statuses)[number]
export type StatusLabels = Record<Status, string>
export function statusNames(t: {
  pendingStatus: string
  paidStatus: string
  shippedStatus: string
  cancelledStatus: string
}): StatusLabels {
  return {
    pending: t.pendingStatus,
    paid: t.paidStatus,
    shipped: t.shippedStatus,
    cancelled: t.cancelledStatus,
  }
}
/** UI owns badge markup; the domain assigns stable status colors and captions. */
export function statusBadge<T>(
  h: (tag: string, props: Record<string, unknown>, children?: any) => T,
  status: string,
  labels: StatusLabels,
): T {
  const known = statuses.includes(status as Status)
  return h(
    'span',
    {
      class: `${badgeClassName({ variant: 'neutral' })} order-status`,
      style: { '--status-color': known ? statusColors[status as Status] : 'currentColor' },
    },
    known ? labels[status as Status] : status,
  )
}
