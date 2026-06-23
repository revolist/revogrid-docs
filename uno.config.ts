import { defineConfig } from 'unocss'
import { presetWind3 } from '@unocss/preset-wind3'

const BTN_BASE = [
  'inline-flex items-center justify-center gap-1',
  'rounded-[var(--rv-ui-radius,6px)]',
  'py-1.5 px-3',
  'border border-transparent',
  'text-sm font-medium leading-none',
  'cursor-pointer select-none whitespace-nowrap',
  'transition-[background-color,color,opacity] duration-[var(--rv-ui-transition,150ms)]',
  'disabled:pointer-events-none disabled:opacity-50',
].join(' ')

export default defineConfig({
  presets: [
    presetWind3({
      dark: { dark: '[data-theme="dark"]' },
    }),
  ],
  shortcuts: {
    'rv-btn': `${BTN_BASE} bg-[var(--rv-ui-btn-bg)] text-[var(--rv-ui-btn-fg)] shadow-sm hover:bg-[var(--rv-ui-btn-bg-hover)] active:bg-[var(--rv-ui-btn-bg-hover)]`,
    'rv-btn-primary': `${BTN_BASE} bg-[var(--rv-ui-accent)] text-[var(--rv-ui-accent-fg)] shadow-sm hover:bg-[var(--rv-ui-accent-hover)] active:bg-[var(--rv-ui-accent-hover)]`,
    'rv-btn-danger': `${BTN_BASE} bg-[var(--rv-ui-btn-danger-bg)] text-[var(--rv-ui-btn-danger-fg)] shadow-sm hover:bg-[var(--rv-ui-btn-danger-bg-hover)] active:bg-[var(--rv-ui-btn-danger-bg-hover)]`,
    'rv-btn-secondary': `${BTN_BASE} bg-[var(--rv-ui-btn-secondary-bg)] text-[var(--rv-ui-btn-secondary-fg)] hover:bg-[var(--rv-ui-btn-secondary-bg-hover)] active:bg-[var(--rv-ui-btn-secondary-bg-hover)]`,
    'rv-btn-ghost': `${BTN_BASE} bg-transparent text-current hover:bg-[var(--rv-ui-btn-ghost-hover-bg)] active:bg-[var(--rv-ui-btn-ghost-active-bg)]`,
    'rv-switch-label': 'inline-flex items-center gap-2 cursor-pointer select-none text-sm',
    'rv-switch-track': 'relative inline-flex items-center flex-shrink-0 w-9 h-5 rounded-full bg-[var(--rv-ui-switch-track-off)] transition-[background-color] duration-200',
    'rv-switch-thumb': 'absolute left-0.5 w-4 h-4 rounded-full bg-[var(--rv-ui-switch-thumb)] shadow-sm transition-transform duration-200',
    'rv-btn-group': 'inline-flex rounded-[var(--rv-ui-radius,6px)] border border-[var(--rv-ui-group-border)] overflow-hidden',
    'rv-btn-group-item': 'relative inline-flex [&>input]:sr-only [&>input:checked~span]:bg-[var(--rv-ui-accent)] [&>input:checked~span]:text-[var(--rv-ui-accent-fg)] hover:[&>span]:bg-[var(--rv-ui-group-hover-bg)]',
    'rv-badge': 'absolute -top-1.5 -right-1.5 min-w-[18px] h-[18px] rounded-full bg-[var(--rv-ui-badge-bg)] text-[var(--rv-ui-badge-fg)] text-[10px] font-bold flex items-center justify-center px-1 leading-none pointer-events-none',
  },
  content: {
    filesystem: [
      './**/*.{html,md,js,ts,jsx,tsx,vue}',
      '../../examples/components/src/components/**/*.{html,js,ts,jsx,tsx,vue}',
      '../../packages/pro/plugins/**/*.{html,js,ts,jsx,tsx,vue}',
      '../../packages/enterprise/plugins/**/*.{html,js,ts,jsx,tsx,vue}',
    ],
  },
})
