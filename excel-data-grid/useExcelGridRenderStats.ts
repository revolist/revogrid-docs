import { onBeforeUnmount } from 'vue'

export interface ExcelGridRenderStats {
  rows: number
  columns: number
  domNodes: number
}

type GridElementGetter = () => HTMLRevoGridElement | undefined

export function useExcelGridRenderStats(options: {
  getGridElement: GridElementGetter
  isEnabled: () => boolean
  getRowCount: () => number
  getColumnCount: () => number
  onStats: (stats: ExcelGridRenderStats) => void
}) {
  let statsObserver: MutationObserver | null = null
  let statsFrame: number | undefined
  let lastStatsSignature = ''

  function collectRenderStats() {
    statsFrame = undefined
    if (!options.isEnabled()) return
    const grid = options.getGridElement()
    if (!grid?.isConnected) return
    const stats = {
      rows: options.getRowCount(),
      columns: options.getColumnCount(),
      domNodes: grid.getElementsByTagName('*').length,
    }
    const signature = `${stats.rows}:${stats.columns}:${stats.domNodes}`
    if (signature === lastStatsSignature) return
    lastStatsSignature = signature
    options.onStats(stats)
  }

  function scheduleRenderStats() {
    if (!options.isEnabled() || typeof window === 'undefined' || statsFrame !== undefined) return
    statsFrame = window.requestAnimationFrame(collectRenderStats)
  }

  function startStatsTracking() {
    if (!options.isEnabled() || statsObserver || typeof MutationObserver === 'undefined') return
    const grid = options.getGridElement()
    if (!grid) return
    statsObserver = new MutationObserver(scheduleRenderStats)
    statsObserver.observe(grid, { childList: true, subtree: true })
    scheduleRenderStats()
  }

  onBeforeUnmount(() => {
    statsObserver?.disconnect()
    if (statsFrame !== undefined && typeof window !== 'undefined') window.cancelAnimationFrame(statsFrame)
  })

  return { scheduleRenderStats, startStatsTracking }
}
