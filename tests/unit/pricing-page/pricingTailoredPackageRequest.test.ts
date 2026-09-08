import assert from 'node:assert/strict'
import test from 'node:test'
import { createTailoredPackageRequestPayload } from '../../../pricing-page/pricingTailoredPackageRequest.ts'

test('includes every selected capability and provided field in the email payload', () => {
  const payload = createTailoredPackageRequestPayload({
    email: 'buyer@example.com',
    message: 'We need these tools for a planning application.',
    selectedCapabilities: [
      { id: 'advanced-editing', name: 'Advanced editing' },
      { id: 'undo-redo-history', name: 'Undo, redo & history' },
    ],
    describeItMyself: false,
    pageUrl: 'https://rv-grid.com/pricing',
  })

  assert.equal(payload.name, 'Pricing tailored package request')
  assert.equal(payload.company, 'Not collected')
  assert.equal(payload.email, 'buyer@example.com')
  assert.deepEqual(payload.selectedCapabilities, ['advanced-editing', 'undo-redo-history'])
  assert.deepEqual(payload.selectedCapabilityNames, ['Advanced editing', 'Undo, redo & history'])
  assert.match(payload.message, /Selected capabilities:\n- Advanced editing\n- Undo, redo & history/)
  assert.match(payload.message, /Request details:\nWe need these tools for a planning application\./)
  assert.match(payload.message, /Describe it myself: No/)
  assert.match(payload.message, /Source: pricing-tailored-package/)
  assert.match(payload.message, /Page URL: https:\/\/rv-grid\.com\/pricing/)
})

test('marks a free-form request without inventing selected capabilities', () => {
  const payload = createTailoredPackageRequestPayload({
    email: 'buyer@example.com',
    message: 'We need a custom component.',
    selectedCapabilities: [],
    describeItMyself: true,
    pageUrl: 'https://rv-grid.com/pricing',
  })

  assert.deepEqual(payload.selectedCapabilities, [])
  assert.deepEqual(payload.selectedCapabilityNames, [])
  assert.match(payload.message, /Selected capabilities:\nNone — described in own words/)
  assert.match(payload.message, /Describe it myself: Yes/)
})
