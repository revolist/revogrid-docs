export interface FilmView {
  id: string
  tab: string
  icon: number
  enter: number
  exit: number
  transition: number
}
export const FILM_DURATION: number
export const FILM_VIEWS: FilmView[]
export function normalizeFilmTime(seconds: number): number
export function getFilmTransitionProgress(seconds: number, index: number, delay?: number): number
export function getFilmState(seconds: number): {
  time: number
  activeIndex: number
  weights: number[]
  ink: number[]
}
export function getFilmProductLabels(labels?: Record<string, string>): string[]
