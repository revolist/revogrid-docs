---
title: RevoGrid Themes
description: Use built-in RevoGrid themes, inheritable CSS variables, and typed per-grid custom theme definitions.
---

# Themes

RevoGrid includes five built-in themes and supports two additive customization paths:

-   CSS custom properties for local or application-wide styling
-   typed `ThemeDefinition` presets for reusable, per-grid themes

Both paths use the existing `theme` property. A custom theme name stays reflected in the `theme` attribute, so ordinary CSS selectors remain available as an advanced escape hatch.

## Built-in themes

| Theme          | Structure | Color scheme | Default row height |
| -------------- | --------- | ------------ | -----------------: |
| `default`      | Default   | Light        |              27 px |
| `material`     | Material  | Light        |              42 px |
| `compact`      | Compact   | Light        |              32 px |
| `darkMaterial` | Material  | Dark         |              42 px |
| `darkCompact`  | Compact   | Dark         |              32 px |

```js
const grid = document.querySelector('revo-grid')
grid.theme = 'material'
```

Changing `theme` at runtime updates the structure, color scheme, tokens, and default density together. After application, RevoGrid emits `afterthemechanged` with the normalized theme name in `event.detail`.

## CSS-only customization

CSS variables inherit normally. Define them on an application container to affect all descendant grids, or on one grid for an instance-specific override.

```css
.billing-screen {
    --revo-grid-font-family: Inter, system-ui, sans-serif;
    --revo-grid-primary: #6d4aff;
}

revo-grid[theme='billing'] {
    --revo-grid-background: #fbfaff;
    --revo-grid-header-bg: #f0edff;
    --revo-grid-header-color: #241c45;
    --revo-grid-selection-border: #6d4aff;
}
```

```js
const grid = document.querySelector('revo-grid')
grid.theme = 'billing'
```

Any non-empty name is valid. If no typed definition exists, the name remains reflected and RevoGrid uses `default` layout metadata. A blank name normalizes to `default`.

## Typed reusable themes

Use `defineTheme` for type checking and autocomplete. A custom theme can extend a built-in theme or another custom definition registered on the same grid.

```ts
import { defineTheme, type ThemeDefinition } from '@revolist/revogrid'

export const billingTheme = defineTheme({
    name: 'billing',
    extends: 'darkMaterial',
    defaultRowSize: 36,
    tokens: {
        primary: '#9b8cff',
        background: '#17151f',
        text: '#f4f1ff',
        headerBg: '#242031',
        selectionBorder: '#b8adff',
        filterPanelBg: '#242031',
        filterPanelText: '#f4f1ff',
    },
} satisfies ThemeDefinition)

const grid = document.querySelector('revo-grid')!
grid.themeDefinitions = [billingTheme]
grid.theme = billingTheme.name
```

`themeDefinitions` is a JavaScript property containing objects. Do not serialize it into an HTML attribute. Built-in names are reserved, and the last definition wins when the array contains duplicate custom names.

Invalid or missing parents, non-positive `defaultRowSize` values, invalid color schemes, and unknown token keys are ignored in favor of default or inherited values. Cyclic inheritance is detected and falls back to the built-in `default` metadata for the affected child while keeping that child's valid overrides.

### Structure and color scheme

`extends` selects the parent theme. The child inherits its structural preset, color scheme, density, and tokens. `colorScheme`, `defaultRowSize`, and child tokens override their inherited values without coupling behavior to the custom theme name.

```ts
const highContrastCompact = defineTheme({
    name: 'highContrastCompact',
    extends: 'compact',
    colorScheme: 'dark',
    tokens: {
        background: '#000',
        text: '#fff',
        cellBorder: '#777',
    },
})
```

Darkness is resolved from `colorScheme`; RevoGrid does not infer it from words in `name`.

### Extend another custom theme

Register the parent and child definitions on the same grid. Definition order does not affect inheritance; duplicate names still use the last definition in the array.

```ts
const productTheme = defineTheme({
    name: 'product',
    extends: 'material',
    defaultRowSize: 38,
    tokens: {
        primary: '#2563eb',
        background: '#f8fafc',
        text: '#0f172a',
        headerBg: '#e2e8f0',
    },
})

const billingTheme = defineTheme({
    name: 'billing',
    extends: productTheme.name,
    tokens: {
        primary: '#7c3aed',
        headerBg: '#ede9fe',
    },
})

grid.themeDefinitions = [productTheme, billingTheme]
grid.theme = billingTheme.name
```

`billing` inherits the material structure, 38 px density, background, and text from `product`, then replaces only `primary` and `headerBg`.

## Precedence

Theme values resolve in this order, from lowest to highest priority:

1. built-in fallback values at the root of the inheritance chain
2. inherited or grid-level CSS custom properties
3. ancestor `ThemeDefinition` tokens, from root to immediate parent
4. tokens from the active child `ThemeDefinition`
5. a positive `rowSize` property for row geometry

This means application CSS is a convenient default, while a reusable typed preset remains deterministic on the grid using it.

## Density and row sizes

`defaultRowSize` belongs to the theme definition. The public `rowSize` property is an explicit grid override:

```ts
grid.rowSize = 44
grid.theme = 'compact'
grid.theme = 'material'
// Rows remain 44 px across both switches.

grid.rowSize = 0
// The active theme's defaultRowSize applies again.
```

Custom entries in `rowDefinitions` remain in force when the theme density changes. RevoGrid updates virtual geometry only when the effective row size changes; color-only token changes do not reset row geometry.

## Runtime updates

```ts
grid.addEventListener('afterthemechanged', (event) => {
    console.log(event.detail) // normalized string name
})

grid.theme = 'billing'

grid.themeDefinitions = [
    {
        ...billingTheme,
        tokens: { ...billingTheme.tokens, primary: '#ffb86b' },
    },
]
```

Assign a new `themeDefinitions` array when changing a definition. This matches React, Vue, Angular, and Svelte change-detection conventions and ensures the grid reapplies the active preset.

Definitions are registered per grid. Two grids may use the same custom name with different definitions without leaking styles or configuration between instances.

## Modern preset collection

RevoGrid exports five opt-in presets built with the same public `ThemeDefinition` API. They are ordinary definitions rather than additional structural modes, so applications only ship and register the designs they use.

| Preset             | Direction                                                   | Base           | Row height |
| ------------------ | ----------------------------------------------------------- | -------------- | ---------: |
| `ocean`            | Airy blue and slate for light workspaces                    | `material`     |      38 px |
| `midnight`         | Deep navy with cyan and violet accents                      | `darkMaterial` |      40 px |
| `aurora`           | Compact graphite with luminous green states                 | `darkCompact`  |      34 px |
| `highContrast`     | Strong light surfaces, borders, and blue focus states       | `material`     |      40 px |
| `highContrastDark` | Near-black surfaces with yellow and cyan interaction states | `darkMaterial` |      40 px |

Register the full collection:

```ts
import { modernThemeDefinitions } from '@revolist/revogrid'

grid.themeDefinitions = modernThemeDefinitions
grid.theme = 'midnight'
```

Or import one independently to keep configuration explicit:

```ts
import { oceanTheme } from '@revolist/revogrid'

grid.themeDefinitions = [oceanTheme]
grid.theme = oceanTheme.name
```

Curated presets can also serve as parents. Register the preset alongside the child definition:

```ts
import { defineTheme, oceanTheme } from '@revolist/revogrid'

const brandedOcean = defineTheme({
    name: 'brandedOcean',
    extends: oceanTheme.name,
    tokens: {
        primary: '#db2777',
        buttonBg: '#db2777',
    },
})

grid.themeDefinitions = [oceanTheme, brandedOcean]
grid.theme = brandedOcean.name
```

For accessibility-focused registration, import only the dedicated collection:

```ts
import { highContrastThemeDefinitions } from '@revolist/revogrid'

grid.themeDefinitions = highContrastThemeDefinitions
grid.theme = 'highContrastDark'
```

The exports are `oceanTheme`, `midnightTheme`, `auroraTheme`, `highContrastTheme`, `highContrastDarkTheme`, `highContrastThemeDefinitions`, and `modernThemeDefinitions`. The high-contrast presets provide stronger default differentiation, but application overrides and custom cell renderers still need their own accessibility review. Since definitions remain per-grid, their names can be replaced by a later definition in your own array without affecting another grid.

## Framework examples

All framework wrappers pass `themeDefinitions` as an object-valued property.

::: code-group

```tsx [React]
import { RevoGrid } from '@revolist/react-datagrid'
import { defineTheme } from '@revolist/revogrid'

const themes = [
    defineTheme({
        name: 'brand',
        extends: 'material',
        tokens: { primary: '#6d4aff', headerBg: '#f0edff' },
    }),
]

export function Grid() {
    return (
        <RevoGrid
            columns={columns}
            source={source}
            theme="brand"
            themeDefinitions={themes}
        />
    )
}
```

```vue [Vue 3]
<script setup lang="ts">
import RevoGrid, { defineTheme } from '@revolist/vue3-datagrid'

const themes = [
    defineTheme({
        name: 'brand',
        extends: 'material',
        tokens: { primary: '#6d4aff', headerBg: '#f0edff' },
    }),
]
</script>

<template>
    <RevoGrid
        :columns="columns"
        :source="source"
        theme="brand"
        :theme-definitions="themes"
    />
</template>
```

```ts [Angular]
import { Component } from '@angular/core'
import { RevoGrid, defineTheme } from '@revolist/angular-datagrid'

@Component({
    standalone: true,
    imports: [RevoGrid],
    template: `
        <revo-grid
            [columns]="columns"
            [source]="source"
            theme="brand"
            [themeDefinitions]="themes"
        ></revo-grid>
    `,
})
export class AppComponent {
    themes = [
        defineTheme({
            name: 'brand',
            extends: 'material',
            tokens: { primary: '#6d4aff', headerBg: '#f0edff' },
        }),
    ]
}
```

```svelte [Svelte]
<script lang="ts">
  import { RevoGrid } from '@revolist/svelte-datagrid';
  import { defineTheme } from '@revolist/revogrid';

  const themes = [
    defineTheme({
      name: 'brand',
      extends: 'material',
      tokens: { primary: '#6d4aff', headerBg: '#f0edff' },
    }),
  ];
</script>

<RevoGrid
  {columns}
  {source}
  theme="brand"
  themeDefinitions={themes}
/>
```

```python [Dash]
from dash_datagrid import RevoGrid

RevoGrid(
    columns=columns,
    source=rows,
    theme="brand",
    themeDefinitions=[{
        "name": "brand",
        "extends": "material",
        "tokens": {
            "primary": "#6d4aff",
            "headerBg": "#f0edff",
        },
    }],
    style={"height": 420},
)
```

:::

## Public theme tokens

Token keys are type checked by `ThemeTokens`. Each key maps to an inheritable CSS custom property.

### Foundation and grid states

| Token                | CSS custom property               |
| -------------------- | --------------------------------- |
| `primary`            | `--revo-grid-primary`             |
| `primaryTransparent` | `--revo-grid-primary-transparent` |
| `background`         | `--revo-grid-background`          |
| `foreground`         | `--revo-grid-foreground`          |
| `divider`            | `--revo-grid-divider`             |
| `shadow`             | `--revo-grid-shadow`              |
| `text`               | `--revo-grid-text`                |
| `border`             | `--revo-grid-border`              |
| `headerBg`           | `--revo-grid-header-bg`           |
| `headerColor`        | `--revo-grid-header-color`        |
| `headerBorder`       | `--revo-grid-header-border`       |
| `headerFocusedBg`    | `--revo-grid-header-focused-bg`   |
| `headerHoverBg`      | `--revo-grid-header-hover-bg`     |
| `cellBorder`         | `--revo-grid-cell-border`         |
| `cellVerticalBorder` | `--revo-grid-cell-vertical-border` |
| `focusedBg`          | `--revo-grid-focused-bg`          |
| `rowHover`           | `--revo-grid-row-hover`           |
| `rowHeadersBg`       | `--revo-grid-row-headers-bg`      |
| `rowHeadersColor`    | `--revo-grid-row-headers-color`   |
| `cellDisabledBg`     | `--revo-grid-cell-disabled-bg`    |

`cellVerticalBorder` is transparent by default for material and compact structures. Set it in a custom definition or with its CSS variable to opt into vertical separators; the `highContrastDark` preset enables it automatically.

### Typography and spacing

| Token                 | CSS custom property                 |
| --------------------- | ----------------------------------- |
| `fontFamily`          | `--revo-grid-font-family`           |
| `fontSize`            | `--revo-grid-font-size`             |
| `headerHeight`        | `--revo-grid-header-height`         |
| `headerFontSize`      | `--revo-grid-header-font-size`      |
| `headerFontWeight`    | `--revo-grid-header-font-weight`    |
| `headerTextTransform` | `--revo-grid-header-text-transform` |
| `headerTextAlign`     | `--revo-grid-header-text-align`     |
| `cellTextAlign`       | `--revo-grid-cell-text-align`       |
| `headerPadding`       | `--revo-grid-header-padding`        |
| `cellPadding`         | `--revo-grid-cell-padding`          |

### Selection, autofill, and resize

| Token                      | CSS custom property                      |
| -------------------------- | ---------------------------------------- |
| `selectionBorder`          | `--revo-grid-selection-border`           |
| `selectionBg`              | `--revo-grid-selection-bg`               |
| `autofillHandleBg`         | `--revo-grid-autofill-handle-bg`         |
| `autofillHandleBorder`     | `--revo-grid-autofill-handle-border`     |
| `rangeHandleBg`            | `--revo-grid-range-handle-bg`            |
| `temporaryRangeBorder`     | `--revo-grid-temporary-range-border`     |
| `temporarySelectionBorder` | `--revo-grid-temporary-selection-border` |
| `headerResizeHover`        | `--revo-grid-header-resize-hover`        |

### Filter panel

| Token                            | CSS custom property                              |
| -------------------------------- | ------------------------------------------------ |
| `filterPanelBg`                  | `--revo-grid-filter-panel-bg`                    |
| `filterPanelBorder`              | `--revo-grid-filter-panel-border`                |
| `filterPanelShadow`              | `--revo-grid-filter-panel-shadow`                |
| `filterPanelInputBg`             | `--revo-grid-filter-panel-input-bg`              |
| `filterPanelDivider`             | `--revo-grid-filter-panel-divider`               |
| `filterPanelSelectBorder`        | `--revo-grid-filter-panel-select-border`         |
| `filterPanelSelectBorderHover`   | `--revo-grid-filter-panel-select-border-hover`   |
| `filterPanelReorderAccent`       | `--revo-grid-filter-panel-reorder-accent`        |
| `filterPanelReorderColor`        | `--revo-grid-filter-panel-reorder-color`         |
| `filterPanelText`                | `--revo-grid-filter-panel-text`                  |
| `filterPanelMutedText`           | `--revo-grid-filter-panel-muted-text`            |
| `filterPanelFocusRing`           | `--revo-grid-filter-panel-focus-ring`            |
| `filterPanelIcon`                | `--revo-grid-filter-panel-icon`                  |
| `filterPanelIconActive`          | `--revo-grid-filter-panel-icon-active`           |
| `filterPanelSelectArrow`         | `--revo-grid-filter-panel-select-arrow`          |
| `filterPanelSelectArrowDisabled` | `--revo-grid-filter-panel-select-arrow-disabled` |

### Buttons

| Token                 | CSS custom property                 |
| --------------------- | ----------------------------------- |
| `buttonText`          | `--revo-grid-button-text`           |
| `buttonBg`            | `--revo-grid-button-bg`             |
| `buttonSuccessBg`     | `--revo-grid-button-success-bg`     |
| `buttonDangerBg`      | `--revo-grid-button-danger-bg`      |
| `buttonOutlineBorder` | `--revo-grid-button-outline-border` |
| `buttonOutlineText`   | `--revo-grid-button-outline-text`   |

Token values are CSS strings. RevoGrid does not inject arbitrary CSS or global stylesheets; use normal selectors when token-level customization is not sufficient.
