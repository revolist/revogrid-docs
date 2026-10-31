import { defineConfig } from 'unocss'
import { presetWind3 } from '@unocss/preset-wind3'

export default defineConfig({
  presets: [
    presetWind3({
      dark: { dark: '[data-theme="dark"]' },
    }),
  ],
  blocklist: [
    // TypeDoc markdown contains TypeScript object/type notation that Uno can
    // misread as arbitrary CSS property utilities, e.g. [prop:Object<string>].
    /^\[[\w-]+:[^\]]+\]$/,
  ],
  shortcuts: {
    // Pro's shared _ui.scss owns button variants; utility copies override plugin styles.
    'rv-switch-label': 'inline-flex items-center gap-2 cursor-pointer select-none text-sm',
    'rv-switch-track':
      'relative inline-flex items-center flex-shrink-0 w-9 h-5 rounded-full bg-[var(--rv-ui-switch-track-off)] transition-[background-color] duration-200',
    'rv-switch-thumb':
      'absolute left-0.5 w-4 h-4 rounded-full bg-[var(--rv-ui-switch-thumb)] shadow-sm transition-transform duration-200',
    'rv-btn-group':
      'inline-flex rounded-[var(--rv-ui-radius,6px)] border border-[var(--rv-ui-group-border)] overflow-hidden',
    'rv-btn-group-item':
      'relative inline-flex [&>input]:sr-only [&>input:checked~span]:bg-[var(--rv-ui-accent)] [&>input:checked~span]:text-[var(--rv-ui-accent-fg)] hover:[&>span]:bg-[var(--rv-ui-group-hover-bg)]',
    'rv-badge':
      'absolute -top-1.5 -right-1.5 min-w-[18px] h-[18px] rounded-full bg-[var(--rv-ui-badge-bg)] text-[var(--rv-ui-badge-fg)] text-[10px] font-bold flex items-center justify-center px-1 leading-none pointer-events-none',
  },
  content: {
    filesystem: [
      './**/*.{html,md,js,ts,jsx,tsx,vue}',
      '!./**/node_modules/**',
      // External workspace sources can contain their own nested dependencies.
      '!../../**/node_modules/**',
      // Build output and transient browser evidence are not utility sources.
      '!./.vitepress/cache/**',
      '!./.vitepress/dist/**',
      '!./test-results/**',
      '!./playwright-report/**',
      '!./output/**',
      '../../examples/components/src/components/**/*.{html,js,ts,jsx,tsx,vue}',
      '../../packages/pro/plugins/**/*.{html,js,ts,jsx,tsx,vue}',
      '../../packages/enterprise/plugins/**/*.{html,js,ts,jsx,tsx,vue}',
    ],
  },
})
