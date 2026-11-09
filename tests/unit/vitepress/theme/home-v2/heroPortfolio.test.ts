import assert from 'node:assert/strict'
import test from 'node:test'
import {
  applyHeroEdit,
  createHeroProjects,
  visibleHeroProjects,
  heroBudgetRows,
  heroDependencies,
} from '../../../../../.vitepress/theme/home-v2/hero/portfolio.ts'

test('budget chart ignores unrelated edits and retains stable IDs across value changes and filtering', () => {
  const rows = createHeroProjects()
  const initial = heroBudgetRows(rows)
  const unrelated = rows.map(row => ({ ...row, percentDone: 100, owner: 'Another owner' }))
  assert.equal(heroBudgetRows(unrelated, initial), initial)
  const edited = rows.map((row, index) => (index ? row : { ...row, budget: 200000 }))
  const updated = heroBudgetRows(edited, initial)
  assert.notEqual(updated, initial)
  assert.deepEqual(updated[0], { id: rows[0].id, name: rows[0].name, budget: 200000 })
  assert.equal(updated[1], initial[1])
  assert.equal(heroBudgetRows(edited.slice(1), updated)[0].id, rows[1].id)
})

test('guided budget filter excludes the threshold and keeps the original dataset', () => {
  const rows = createHeroProjects()
  const visible = visibleHeroProjects(rows, true)
  assert.equal(visible.length, 4)
  assert.equal(
    visible.reduce((sum, row) => sum + row.budget, 0),
    690000,
  )
  assert.equal(
    rows.reduce((sum, row) => sum + row.budget, 0),
    870000,
  )
  assert.equal(visibleHeroProjects(rows, false), rows)
})

test('edits use model IDs after native view sorting and projection', () => {
  const rows = createHeroProjects()
  const result = applyHeroEdit(rows, {
    data: { 0: { budget: '250000', name: 'New platform' } },
    models: { 0: rows[2] },
  })
  assert.equal(result[0], rows[0])
  assert.equal(result[2].name, 'New platform')
  assert.equal(result[2].budget, 250000)
  assert.equal(rows[2].name, 'Data Platform')
})

test('native progress patches map back to the shared progress field', () => {
  const rows = createHeroProjects()
  const result = applyHeroEdit(rows, {
    data: { 3: { progressPercent: 85 } },
    models: { 3: rows[0] },
  })
  assert.equal(result[0].percentDone, 85)
})

test('invalid budget values and patches without an original model cannot corrupt the portfolio', () => {
  const rows = createHeroProjects()
  const result = applyHeroEdit(rows, {
    data: { 0: { budget: 'invalid' }, 2: { budget: 0 } },
    models: { 0: rows[0] },
  })
  assert.equal(result[0].budget, rows[0].budget)
  assert.equal(result[2], rows[2])
  assert.equal(applyHeroEdit(rows, { data: {}, models: {} }), rows)
})

test('fixture timestamps use canonical ISO datetimes supported by native Gantt', () => {
  for (const row of createHeroProjects()) {
    assert.equal(new Date(row.startDate).toISOString(), row.startDate)
    assert.equal(new Date(row.endDate).toISOString(), row.endDate)
    assert.ok(row.startDate < row.endDate)
  }
})

test('sample board demonstrates every status without hiding a crowded lane', () => {
  const rows = createHeroProjects()
  const counts = rows.reduce<Record<string, number>>((result, row) => {
    result[row.workflowStatus] = (result[row.workflowStatus] ?? 0) + 1
    if (row.workflowStatus === 'done') assert.equal(row.percentDone, 100)
    return result
  }, {})
  assert.deepEqual(Object.keys(counts).sort(), ['blocked', 'done', 'in-progress', 'not-started'])
  assert.ok(Object.values(counts).every(count => count > 0 && count <= 2))
})

test('Gantt dependencies follow filtered endpoints and preserve the finish-to-start example', () => {
  const rows = createHeroProjects()
  const [dependency] = heroDependencies(rows)
  assert.equal(dependency.type, 'finish-to-start')
  const research = rows.find(row => row.id === dependency.predecessorTaskId)!
  const design = rows.find(row => row.id === dependency.successorTaskId)!
  assert.ok(research.endDate < design.startDate)
  assert.deepEqual(heroDependencies(rows.filter(row => row.id !== design.id)), [])
  assert.deepEqual(heroDependencies(rows.filter(row => row.id !== research.id)), [])
  assert.deepEqual(heroDependencies([]), [])
})

test('Scheduler starts with an overlapping allocation and an available destination', () => {
  const rows = createHeroProjects()
  const commerce = rows.find(row => row.name === 'Commerce API')!
  const portal = rows.find(row => row.name === 'Customer Portal')!
  assert.equal(commerce.owner, portal.owner)
  assert.ok(portal.startDate < commerce.endDate && commerce.startDate < portal.endDate)
  assert.ok(rows.every(row => row.owner !== 'Sofia Garcia'))
})

test('native source snapshots retain structural deletes, restores and hidden projects', () => {
  const rows = createHeroProjects()
  const visible = [rows[0], rows[2], rows[4]]
  const deleted = applyHeroEdit(rows, {
    data: {},
    models: {},
    source: { ids: visible.map(row => row.id), rows: visible.slice(1) },
  })
  assert.equal(deleted.length, 5)
  assert.ok(!deleted.some(row => row.id === rows[0].id))
  assert.equal(
    deleted.find(row => row.id === rows[1].id),
    rows[1],
  )
  const restored = applyHeroEdit(deleted, {
    data: {},
    models: {},
    source: { ids: visible.slice(1).map(row => row.id), rows: visible },
  })
  assert.equal(restored.length, 6)
  assert.equal(restored.find(row => row.id === rows[0].id)?.budget, 180000)
  assert.equal(restored.find(row => row.id === rows[0].id)?.owner, rows[0].owner)
})
