import assert from 'node:assert/strict'
import test from 'node:test'
import { createRequire } from 'node:module'

// Use the consumer's Vue runtime so effect-scope lifecycle assertions match its installation.
const themeRequire = createRequire(new URL('../../../../revogrid-demos/pro-advanced-scheduler/src/shared/theme.ts', import.meta.url))
const { effectScope, isRef } = themeRequire('vue') as typeof import('vue')
import { currentThemeVue } from '../../../../revogrid-demos/pro-advanced-scheduler/src/shared/theme'

test('Scheduler Vue theme follows explicit light and dark themes and cleans up observers', t => {
  let themeChanged = () => {}
  let observerDisconnected = false
  let mediaListenerRemoved = false
  const root = {
    dataset: { theme: 'light' },
    classList: { contains: () => false },
  }
  const originals = Object.fromEntries(
    ['window', 'document', 'MutationObserver'].map(key => [key, Object.getOwnPropertyDescriptor(globalThis, key)]),
  )
  const install = (key: string, value: unknown) => Object.defineProperty(globalThis, key, { configurable: true, value })
  install('window', {
    matchMedia: () => ({
      matches: true,
      addEventListener() {},
      removeEventListener() { mediaListenerRemoved = true },
    }),
  })
  install('document', { documentElement: root })
  install('MutationObserver', class {
    constructor(callback: () => void) { themeChanged = callback }
    observe() {}
    disconnect() { observerDisconnected = true }
  })
  const scope = effectScope()
  t.after(() => {
    scope.stop()
    for (const [key, descriptor] of Object.entries(originals)) {
      if (descriptor) Object.defineProperty(globalThis, key, descriptor)
      else Reflect.deleteProperty(globalThis, key)
    }
  })
  const { isDark } = scope.run(() => currentThemeVue())!
  assert.equal(isRef(isDark), true, 'Vue templates must receive an actual ref, not a truthy object')
  assert.equal(isDark.value, false, 'Explicit light overrides a dark OS preference')
  root.dataset.theme = 'dark'
  themeChanged()
  assert.equal(isDark.value, true)
  root.dataset.theme = 'light'
  themeChanged()
  assert.equal(isDark.value, false)
  scope.stop()
  assert.equal(observerDisconnected, true)
  assert.equal(mediaListenerRemoved, true)
})
