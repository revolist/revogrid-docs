import { onBeforeUnmount } from 'vue'

const KEYBOARD_EVENTS = ['keydown', 'keypress', 'keyup'] as const

/** Keep toolbar keyboard input inside the maintained formatting surface. */
export function useExcelGridFormattingSurface(
  getGridElement: () => HTMLRevoGridElement | undefined,
) {
  let surface: HTMLElement | null = null
  const stopGridKeyboard = (event: Event) => event.stopPropagation()

  function disconnect() {
    if (!surface) return
    for (const type of KEYBOARD_EVENTS) surface.removeEventListener(type, stopGridKeyboard)
    surface = null
  }

  function connectFormattingSurface() {
    const nextSurface = getGridElement()?.querySelector<HTMLElement>('.rv-data-grid-formatting-panel') ?? null
    if (nextSurface === surface) return
    disconnect()
    surface = nextSurface
    if (!surface) return
    for (const type of KEYBOARD_EVENTS) surface.addEventListener(type, stopGridKeyboard)
  }

  onBeforeUnmount(disconnect)
  return { connectFormattingSurface }
}
