import { defineConfig, devices } from '@playwright/test'

const port = Number(process.env.CHART_STORIES_PORT || 49291)
export default defineConfig({
  testDir: './tests/e2e/docs',
  testMatch: 'chart-use-cases.spec.ts',
  timeout: 60_000,
  expect: { timeout: 20_000 },
  fullyParallel: false,
  workers: 1,
  outputDir: 'test-results/chart-use-cases',
  use: {
    baseURL: `http://127.0.0.1:${port}`,
    contextOptions: { reducedMotion: 'reduce' },
    trace: 'retain-on-failure',
    screenshot: 'only-on-failure',
  },
  projects: [
    { name: 'desktop', use: { viewport: { width: 1280, height: 900 }, colorScheme: 'light' } },
    {
      name: 'mobile',
      use: { ...devices['iPhone 13'], defaultBrowserType: 'chromium', colorScheme: 'dark' },
    },
  ],
  webServer: {
    command: `npm exec -- vitepress preview --host 127.0.0.1 --port ${port}`,
    url: `http://127.0.0.1:${port}/charts/`,
    reuseExistingServer: false,
    timeout: 120_000,
  },
})
