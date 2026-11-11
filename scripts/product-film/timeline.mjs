/** Shared by the artwork renderer and the site's media-driven headline. */
export const FILM_DURATION = 34.7
export const FILM_VIEWS = [
  { id: 'grid', tab: 'Data Grid', icon: 0, enter: 0, exit: 4.6, transition: 0.8 },
  { id: 'pivot', tab: 'Pivot', icon: 5, enter: 5.4, exit: 9.5, transition: 0.8 },
  { id: 'charts', tab: 'Charts', icon: 1, enter: 10.3, exit: 14.4, transition: 0.8 },
  { id: 'gantt', tab: 'Gantt', icon: 2, enter: 15.2, exit: 21.1, transition: 0.8 },
  { id: 'scheduler', tab: 'Scheduler', icon: 3, enter: 21.9, exit: 26.6, transition: 0.8 },
  { id: 'kanban', tab: 'Kanban', icon: 4, enter: 27.4, exit: 32.1, transition: 0.9 },
]
const clamp = value => Math.max(0, Math.min(1, value))
const ease = value => {
  const x = clamp(value)
  return clamp(x * x * x * (x * (x * 6 - 15) + 10))
}
export function normalizeFilmTime(seconds) {
  return Number.isFinite(seconds) ? ((seconds % FILM_DURATION) + FILM_DURATION) % FILM_DURATION : 0
}
export function getFilmTransitionProgress(seconds, index, delay = 0) {
  const view = FILM_VIEWS[index]
  return ease(
    (normalizeFilmTime(seconds) - view.exit - delay) / (view.transition - (delay ? 0.1 : 0)),
  )
}
export function getFilmState(seconds) {
  const time = normalizeFilmTime(seconds)
  const weights = FILM_VIEWS.map((_, i) => (i === 0 ? 1 : 0))
  let activeIndex = 0
  FILM_VIEWS.forEach((view, index) => {
    const progress = getFilmTransitionProgress(time, index)
    weights[index] *= 1 - progress
    weights[(index + 1) % weights.length] += progress
    if (time >= view.exit + view.transition / 2) activeIndex = (index + 1) % weights.length
  })
  const last = FILM_VIEWS.at(-1)
  const ink = FILM_VIEWS.map((view, i) => {
    const fadeOut = 1 - ease((time - view.exit) / 0.18)
    const fadeIn = i ? ease((time - view.enter + 0.18) / 0.18) : 1
    return (
      fadeIn * fadeOut + (i === 0 ? ease((time - last.exit - last.transition + 0.18) / 0.18) : 0)
    )
  })
  return { time, activeIndex, weights, ink }
}

/** Localized labels are keyed by view ID so locale/config order cannot reorder the film. */
export function getFilmProductLabels(labels = {}) {
  return FILM_VIEWS.map(view => labels[view.id] ?? view.tab)
}
