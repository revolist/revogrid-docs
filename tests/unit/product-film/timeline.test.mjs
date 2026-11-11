import assert from 'node:assert/strict'
import test from 'node:test'
import {
  FILM_DURATION,
  FILM_VIEWS,
  getFilmState,
  getFilmProductLabels,
} from '../../../scripts/product-film/timeline.mjs'

test('badge and renderer share the complete product order', () => {
  assert.deepEqual(
    FILM_VIEWS.map(view => view.id),
    ['grid', 'pivot', 'charts', 'gantt', 'scheduler', 'kanban'],
  )
  const samples = [
    [0, 'grid'],
    [4.99, 'grid'],
    [5.01, 'pivot'],
    [7, 'pivot'],
    [9.89, 'pivot'],
    [9.91, 'charts'],
    [12, 'charts'],
    [14.79, 'charts'],
    [14.81, 'gantt'],
    [18, 'gantt'],
    [21.49, 'gantt'],
    [21.51, 'scheduler'],
    [24, 'scheduler'],
    [26.99, 'scheduler'],
    [27.01, 'kanban'],
    [30, 'kanban'],
    [32.54, 'kanban'],
    [32.56, 'grid'],
  ]
  for (const [time, id] of samples)
    assert.equal(FILM_VIEWS[getFilmState(time).activeIndex].id, id, `at ${time}s`)
})

test('seeking, loop wrap, and theme-source reload use media time without history', () => {
  assert.equal(getFilmState(7).activeIndex, 1)
  assert.equal(getFilmState(30).activeIndex, 5)
  assert.equal(getFilmState(2).activeIndex, 0)
  assert.deepEqual(getFilmState(FILM_DURATION + 24), getFilmState(24))
  assert.equal(getFilmState(FILM_DURATION).activeIndex, 0)
  assert.equal(getFilmState(Number.NaN).activeIndex, 0)
})

test('transition weights preserve one scene composition and valid surfaces', () => {
  for (let time = 0; time < FILM_DURATION; time += 1 / 60) {
    const { weights, ink } = getFilmState(time)
    assert.ok(Math.abs(weights.reduce((sum, value) => sum + value, 0) - 1) < 1e-9)
    assert.ok([...weights, ...ink].every(value => value >= 0 && value <= 1 + 1e-9))
  }
})

test('localized labels retain film order regardless of configuration insertion order', () => {
  assert.deepEqual(
    getFilmProductLabels({
      kanban: 'Tableau',
      scheduler: 'Calendrier',
      gantt: 'Planning',
      charts: 'Graphiques',
      pivot: 'Tableau croisé',
      grid: 'Grille',
    }),
    ['Grille', 'Tableau croisé', 'Graphiques', 'Planning', 'Calendrier', 'Tableau'],
  )
})
