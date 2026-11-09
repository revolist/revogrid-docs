import { expect, test } from '@playwright/test'

test('published benchmark matrix and all four workload assets render', async ({
  page,
  request,
}) => {
  await page.goto('/benchmarks?automated=1')

  await expect(page.getByRole('heading', { name: 'RevoGrid Benchmarks' })).toBeVisible()
  const results = page.getByRole('table').filter({ hasText: 'First data paint' })
  await expect(results.locator('tbody tr')).toHaveCount(4)
  for (const workload of ['1,000 × 100', '10,000 × 100', '100,000 × 100', '1,000,000 × 100']) {
    await expect(results.getByRole('row', { name: new RegExp(workload) })).toBeVisible()
  }

  for (const suffix of ['-1k', '-10k', '', '-1m']) {
    for (const extension of ['png', 'webm']) {
      const asset = `/benchmarks/revo-grid-benchmark${suffix}.${extension}`
      await expect(page.locator(`a[href="${asset}"]`)).toHaveCount(1)
      const response = await request.get(asset)
      expect(response.ok(), asset).toBe(true)
    }
  }
})
