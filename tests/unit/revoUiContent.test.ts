import assert from 'node:assert/strict'
import test from 'node:test'
import { getRevoUiContent } from '../../.vitepress/theme/components/revo-ui/revoUiContent.ts'

test('page translations override shared and preview copy without changing other pages', () => {
  const translated = getRevoUiContent('gantt', {
    title: 'Une interface pour vos données.',
    description: 'Des formulaires et des commandes pour votre planning.',
    explore: 'Découvrir Revo UI',
    preview: {
      markPaid: 'Marquer comme payée',
      settled: '{count} factures payées.',
    },
  })
  assert.equal(translated.title, 'Une interface pour vos données.')
  assert.equal(translated.preview.markPaid, 'Marquer comme payée')
  assert.equal(translated.preview.settled, '{count} factures payées.')
  assert.equal(translated.preview.period, 'Reporting period')
  const untouched = getRevoUiContent('gantt')
  assert.equal(untouched.preview.markPaid, 'Mark as paid')
  assert.notEqual(untouched.description, translated.description)
  assert.notEqual(getRevoUiContent('pivot').description, untouched.description)
  assert.equal(
    getRevoUiContent('event-scheduler').description,
    getRevoUiContent('scheduler').description,
  )
})
