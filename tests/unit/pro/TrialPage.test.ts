import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'
import test from 'node:test'

const trialPage = readFileSync(new URL('../../../pro/TrialPage.vue', import.meta.url), 'utf8')
const trialRoute = readFileSync(new URL('../../../trial.md', import.meta.url), 'utf8')
const trialRequestForm = readFileSync(
  new URL('../../../pro/TrialRequestForm.vue', import.meta.url),
  'utf8',
)

test('keeps immediate public trial access ahead of the optional contact form', () => {
  assert.match(trialPage, /<h1>Evaluate RevoGrid Pro now<\/h1>/)
  assert.match(
    trialPage,
    /<ProDocButton[\s\S]*?href="https:\/\/pro\.rv-grid\.com\/guides\/installation-npm-trial\/"[\s\S]*?>\s*Install Pro Trial\s*<\/ProDocButton>/,
  )
  assert.match(
    trialPage,
    /<ProDocButton[\s\S]*?href="https:\/\/github\.com\/revolist\/revogrid-pro-trial"[\s\S]*?variant="secondary"[\s\S]*?>\s*Clone Trial Starter\s*<\/ProDocButton>/,
  )
  assert.match(
    trialPage,
    /npm config set &quot;@revolist:registry=https:\/\/trial\.rv-grid\.com&quot;/,
  )
  assert.match(trialPage, /No npm login or authentication token is required\./)
  assert.match(trialPage, /No license key is required to start the trial\./)
  assert.match(trialPage, /No approval email is required\./)
  assert.match(trialPage, /public starter can be cloned and run immediately/i)
  assert.ok(trialPage.indexOf('Install Pro Trial') < trialPage.indexOf('<TrialRequestForm'))
  assert.ok(trialPage.indexOf('Clone Trial Starter') < trialPage.indexOf('<TrialRequestForm'))
})

test('keeps contact optional without changing trial form submission ownership', () => {
  assert.match(
    trialPage,
    /Want evaluation help, architecture guidance, or commercial information\? Contact our team\./,
  )
  assert.match(trialPage, /<TrialRequestForm[\s\S]*?request-type="trial"[\s\S]*?\/>/)
  assert.doesNotMatch(trialPage, /private npm access/i)
  assert.doesNotMatch(trialPage, /we(?:’|')ll send (?:trial )?access details/i)
  assert.doesNotMatch(trialRoute, /private npm trial/i)
  assert.match(trialRoute, /immediately with public trial access/i)
  assert.match(trialRequestForm, /\? 'trial_contact_submit'/)
  assert.match(trialRequestForm, /demo_id: props\.demoId/)
  assert.doesNotMatch(trialRequestForm, /businessEmail.*analytics|analytics.*businessEmail/s)
})

test('keeps query-aware package installation instructions on the public trial page', () => {
  assert.match(trialPage, /const query = new URLSearchParams\(window\.location\.search\)/)
  assert.match(trialPage, /const product = query\.get\('product'\)/)
  assert.match(trialPage, /pnpm i @revolist\/revogrid/)
  assert.match(trialPage, /pnpm i @revolist\/rv-pro-trial/)
  assert.match(trialPage, /@revolist\/pivot-trial/)
  assert.match(trialPage, /@revolist\/kanban-trial/)
  assert.match(trialPage, /@revolist\/gantt-trial/)
  assert.match(trialPage, /@revolist\/scheduler-trial/)
  assert.match(trialPage, /Standalone product trials build on the Pro trial/)
  assert.match(trialPage, /:aria-current="option\.id === selectedTrial\.id \? 'page' : undefined"/)
  assert.match(trialPage, /query\.get\('demo_id'\)/)
  assert.match(trialPage, /:href="trialOptionHref\(option\.id\)"/)
  assert.match(trialPage, /query\.set\('demo_id', demoId\.value\)/)
  assert.match(trialPage, /query\.set\('experiment_variant', experimentVariant\.value\)/)
  assert.match(trialPage, /trial_install_click/)
  assert.match(trialPage, /trial_starter_click/)
  assert.match(trialPage, /trackTrialClick\('trial_install_click', 'hero_install'\)/)
  assert.match(trialPage, /trackTrialClick\('trial_starter_click', 'hero_starter'\)/)
  assert.match(trialPage, /\.trial-copy,\s*\.quick-start-panel \{\s*min-width: 0;/)
})

test('keeps the trial trust strip without the metrics row', () => {
  assert.match(trialPage, /<TrustedLogoStrip[\s\S]*?variant="trial"[\s\S]*?\/>/)
  assert.ok(
    trialPage.indexOf('<TrustedLogoStrip') < trialPage.indexOf('<section class="trial-steps"'),
  )
  assert.doesNotMatch(trialPage, /:metrics=/)
  assert.doesNotMatch(trialPage, /const metrics\s*=/)
  assert.doesNotMatch(trialPage, /typical access time|jsDelivr downloads \/ mo/)
})
