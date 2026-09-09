import { defineConfig } from '@playwright/test'

export default defineConfig({
  testDir: './tests/e2e/docs',
  timeout: 45_000,
  expect: { timeout: 15_000 },
  fullyParallel: false,
  use: {
    baseURL: 'http://127.0.0.1:49281',
    viewport: { width: 1280, height: 720 },
    colorScheme: 'light',
    trace: 'retain-on-failure',
  },
  webServer: {
    command: 'pnpm dev --host 127.0.0.1 --port 49281',
    url: 'http://127.0.0.1:49281/demo/',
    reuseExistingServer: false,
    timeout: 120_000,
  },
})
