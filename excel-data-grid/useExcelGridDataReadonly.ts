const connectedGrids = new WeakSet<HTMLRevoGridElement>()

/**
 * Block value-changing grid lifecycles without setting RevoGrid's global
 * readonly flag. The Pro formatting plugin can still change presentation.
 */
export function useExcelGridDataReadonly(
  getGridElement: () => HTMLRevoGridElement | undefined,
  isEnabled: () => boolean,
) {
  const preventDataMutation = (event: Event) => {
    if (isEnabled()) event.preventDefault()
  }

  const connectDataReadonly = () => {
    const grid = getGridElement()
    if (!grid || connectedGrids.has(grid)) return
    connectedGrids.add(grid)
    grid.addEventListener('beforeeditstart', preventDataMutation)
    grid.addEventListener('beforeedit', preventDataMutation)
    grid.addEventListener('beforeautofill', preventDataMutation)
    grid.addEventListener('beforepasteapply', preventDataMutation)
  }

  return { connectDataReadonly }
}
