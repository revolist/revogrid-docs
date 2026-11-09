import assert from 'node:assert/strict'
import test from 'node:test'
import { getRevoUiContent } from '../../.vitepress/theme/components/revo-ui/revoUiContent.ts'

test('page translations override shared and preview copy without changing other pages', () => {
  const translated = getRevoUiContent('gantt', {
    title: 'Une interface pour vos données.',
    description: 'Des formulaires et des commandes pour votre planning.',
    explore: 'Découvrir Revo UI',
    preview: {
      name: 'Nom du projet',
      save: 'Enregistrer',
      saved: 'Modifications enregistrées pour {name}.',
    },
  })
  assert.equal(translated.title, 'Une interface pour vos données.')
  assert.equal(translated.preview.name, 'Nom du projet')
  assert.equal(translated.preview.save, 'Enregistrer')
  assert.equal(translated.preview.saved, 'Modifications enregistrées pour {name}.')
  assert.equal(translated.preview.progress, 'Progress')
  const untouched = getRevoUiContent('gantt')
  assert.equal(untouched.preview.save, 'Save changes')
  assert.notEqual(untouched.description, translated.description)
  assert.notEqual(getRevoUiContent('pivot').description, untouched.description)
  assert.equal(
    getRevoUiContent('event-scheduler').description,
    getRevoUiContent('scheduler').description,
  )
})
