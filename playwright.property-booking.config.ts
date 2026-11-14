import { defineConfig } from '@playwright/test'
import docsConfig from './playwright.docs.config'

export default defineConfig(docsConfig, {
  testMatch: 'property-booking-scroll.spec.ts',
  projects: [
    {
      name: 'chrome',
      use: {
        browserName: 'chromium',
        channel: 'chrome',
        // Headless Chrome otherwise hides every native scrollbar.
        launchOptions: { ignoreDefaultArgs: ['--hide-scrollbars'] },
      },
    },
    { name: 'webkit', use: { browserName: 'webkit' } },
  ],
})
