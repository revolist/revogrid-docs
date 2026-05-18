import { defineConfig } from 'unocss'
import { presetWind3 } from '@unocss/preset-wind3'

export default defineConfig({
  presets: [
    presetWind3(),
  ],
  content: {
    filesystem: [
      './plugins/**/*.{html,js,ts,jsx,tsx,vue,svelte,astro}',
      './src/**/*.{html,js,ts,jsx,tsx,vue,svelte,astro}',
    ]
  },
  safelist: [
    'h-full',
    'w-full',
    'flex',
    'flex-col',
    'grow',
    'overflow-hidden',
  ],
})