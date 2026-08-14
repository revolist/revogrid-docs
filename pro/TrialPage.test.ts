import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'
import test from 'node:test'

const trialPage = readFileSync(new URL('./TrialPage.vue', import.meta.url), 'utf8')

test('keeps the trial trust strip without the metrics row', () => {
  assert.match(trialPage, /<TrustedLogoStrip[\s\S]*?variant="trial"[\s\S]*?\/>/)
  assert.ok(trialPage.indexOf('<TrustedLogoStrip') < trialPage.indexOf('<section class="trial-steps"'))
  assert.doesNotMatch(trialPage, /:metrics=/)
  assert.doesNotMatch(trialPage, /const metrics\s*=/)
  assert.doesNotMatch(trialPage, /typical access time|jsDelivr downloads \/ mo/)
})
