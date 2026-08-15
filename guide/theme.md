---
title: RevoGrid Theme Manager and Theme-Driven Applications
description: Build theme-driven RevoGrid applications with typed design tokens, density, inheritance, runtime switching, and lifecycle-managed plugin presets.
outline: deep
head:
    - - link
      - rel: canonical
        href: https://rv-grid.com/guide/theme
    - - meta
      - name: keywords
        content: RevoGrid Theme Manager, JavaScript data grid themes, data grid design system, data grid plugins, theme-driven application, TypeScript grid theme, React data grid theme, Vue data grid theme, Angular data grid theme, Svelte data grid theme
    - - meta
      - property: og:title
        content: RevoGrid Theme Manager and Theme-Driven Applications
    - - meta
      - property: og:description
        content: Compose the visual language, density, and plugin capabilities of a RevoGrid workspace into reusable TypeScript theme presets.
    - - meta
      - property: og:url
        content: https://rv-grid.com/guide/theme
    - - meta
      - name: twitter:card
        content: summary_large_image
---

# Theme Manager: Build RevoGrid Applications, Not Just Color Themes

The RevoGrid Theme Manager is a composition layer for a grid workspace. A theme can describe how the grid looks, how densely it presents data, and which plugin-defined behaviors are active for that workspace.

That makes a theme useful for more than light and dark mode. A finance application can switch between a compact reconciliation workspace and a guarded approval workspace. An operations product can publish a support preset with its visual tokens and workflow plugins. A component library can distribute a consistent grid experience as one typed TypeScript module.

A RevoGrid theme has five coordinated parts:

| Layer         | What it controls                                                     | Public input                                                |
| ------------- | -------------------------------------------------------------------- | ----------------------------------------------------------- |
| Structure     | The classic, material-style, compact, or standalone custom CSS shell | The reflected `theme` name and RevoGrid's built-in CSS      |
| Color scheme  | Light or dark internal defaults                                      | `colorScheme` or an inherited scheme                        |
| Design tokens | Surfaces, typography, selection, filters, buttons, and spacing       | `ThemeDefinition.tokens` and `--revo-grid-*` CSS properties |
| Density       | Default virtual row geometry                                         | `ThemeDefinition.defaultRowSize`, overridden by `rowSize`   |
| Capabilities  | Plugins active while the theme is selected                           | `ThemeDefinition.plugins`, combined with `grid.plugins`     |

The visual layers and plugin layer are resolved together when `theme` or `themeDefinitions` changes. RevoGrid keeps plugin instances stable across overlapping configurations and destroys them when no active configuration needs them.

::: tip Theme-driven workspace
A theme is a good boundary when appearance, density, and a set of grid behaviors should change as one product mode. Keep columns, source data, permissions, and business state in the application; use the theme to select the grid experience over that state.
:::

## Quick start

This preset adds dark material defaults, a 36 px row size, application colors, and a plugin that blocks edits to locked records.

```ts
import {
    BasePlugin,
    defineTheme,
    type PluginProviders,
    type ThemeDefinition,
} from '@revolist/revogrid'

class LockedRecordsPlugin extends BasePlugin {
    constructor(grid: HTMLRevoGridElement, providers: PluginProviders) {
        super(grid, providers)

        this.addEventListener('beforeedit', (event) => {
            if (event.detail.model.locked === true) {
                event.preventDefault()
                this.emit('lockedrecordeditblocked', {
                    rowIndex: event.detail.rowIndex,
                    prop: event.detail.prop,
                })
            }
        })
    }
}

export const approvalWorkspace = defineTheme({
    name: 'approval-workspace',
    extends: 'darkMaterial',
    defaultRowSize: 36,
    tokens: {
        primary: '#8b5cf6',
        background: '#17151f',
        text: '#f5f3ff',
        headerBg: '#242031',
        selectionBorder: '#a78bfa',
    },
    plugins: [LockedRecordsPlugin],
} satisfies ThemeDefinition)

const grid = document.querySelector('revo-grid')!

// Complex definitions, especially plugin constructors, are JavaScript values.
grid.themeDefinitions = [approvalWorkspace]
grid.theme = approvalWorkspace.name
```

`LockedRecordsPlugin` is constructed with the grid element and its providers when the theme becomes active. `BasePlugin.addEventListener()` tracks the subscription, and the inherited `destroy()` removes it when the plugin is released.

The Theme Manager itself, `ThemeDefinition`, and custom `BasePlugin` classes are available in open-source RevoGrid Core. RevoGrid Pro and Enterprise provide additional plugin constructors that licensed applications can include in the same kind of preset; putting a Pro plugin in a theme does not make that capability part of Core.

## The public theme model

`defineTheme()` is a type-safe identity helper. It returns the definition you pass to it and helps TypeScript preserve names, tokens, and plugin constructors.

```ts
interface ThemeDefinition {
    name: string
    extends?: string
    colorScheme?: 'light' | 'dark'
    defaultRowSize?: number
    tokens?: ThemeTokens
    plugins?: GridPlugin[]
}
```

See the generated [`ThemeDefinition` API](/guide/types/Interface.ThemeDefinition) for the current type declaration and the [Plugin guide](/guide/plugin/) for providers, events, and plugin authoring.

### `name`

`name` is the public identity of the preset. RevoGrid trims it, reflects it to the grid's `theme` attribute, and emits it in `afterthemechanged` after the active theme has been applied.

-   A blank `theme` value normalizes to `default`.
-   Built-in names are reserved and cannot be replaced through `themeDefinitions`.
-   Definitions are registered per grid, so two grids can use the same custom name with different definitions.
-   If an array contains the same custom name more than once, the last valid definition wins.

### `extends`

`extends` names a built-in theme or another custom definition registered on the same grid. The Theme Manager walks the complete parent chain before applying the child.

Inheritance is additive for tokens and plugins:

-   the nearest explicit `colorScheme` wins;
-   the nearest positive `defaultRowSize` wins;
-   token keys merge from ancestor to child, with child values replacing matching keys;
-   plugin constructors merge from ancestor to child and cannot be subtracted by a descendant.

When `extends` is omitted, the definition inherits the `default` metadata.

### `colorScheme`

The resolved scheme is `light` or `dark`. It selects RevoGrid's internal light/dark fallback values for tokens the definition and application CSS did not provide. Darkness is not inferred from a registered definition's name.

For legacy CSS-only themes with no definition, names containing the case-sensitive substring `dark` continue to receive the dark scheme.

### `defaultRowSize` and `rowSize`

`defaultRowSize` is the theme's density. It participates in inheritance and updates virtual row geometry when the effective value changes.

The grid-level `rowSize` property is an explicit override:

```ts
grid.rowSize = 44
grid.theme = 'compact'
grid.theme = 'approval-workspace'
// Rows stay 44 px across both theme switches.

grid.rowSize = 0
// The active theme's defaultRowSize applies again.
```

Non-positive and non-finite definition sizes are ignored. Custom entries in `rowDefinitions` remain in force when the default density changes.

### `tokens`

Tokens are typed CSS string values. The Theme Manager maps every accepted key to a public `--revo-grid-*` custom property on that grid instance. Unknown keys, non-string values, and blank strings are ignored.

Only tokens present in the resolved definition are applied by the manager. Missing tokens continue through the normal CSS cascade and then RevoGrid's structure- and scheme-specific defaults.

### `plugins`

`plugins` is an array of plugin constructors. It is not an array of plugin instances, factories, package names, or serialized configuration objects. RevoGrid instantiates an active constructor with `(grid, providers)` and manages the instance lifecycle.

Theme plugin constructors are JavaScript-only values:

-   assign `themeDefinitions` as a property;
-   do not put plugin-bearing definitions in an HTML attribute;
-   do not expect JSON, a database record, or an SSR payload to preserve constructors;
-   publish plugin-bearing presets as TypeScript or JavaScript modules.

Visual-only definitions containing strings and numbers can be represented in JSON-aware integrations, but the plugin layer must be attached in executable client code.

## Structure is selected by the reflected theme name

The reflected `theme` attribute remains the CSS identity of the grid. Built-in names select their established structural rules:

| Theme          | Structural style | Scheme | Default row size |
| -------------- | ---------------- | ------ | ---------------: |
| `default`      | Classic          | Light  |            27 px |
| `material`     | Material         | Light  |            42 px |
| `compact`      | Compact material | Light  |            32 px |
| `darkMaterial` | Material         | Dark   |            42 px |
| `darkCompact`  | Compact material | Dark   |            32 px |

A standalone custom name uses RevoGrid's tokenized custom/material shell. Its `extends` chain supplies scheme, density, tokens, and plugins, but it does not replace the reflected custom name with the parent's name.

For example, `extends: 'darkCompact'` inherits dark scheme and a 32 px default row size. The grid still renders as `theme="my-workspace"`, so it uses the standalone custom structural selector rather than pretending to be `theme="darkCompact"`. Use typography and spacing tokens, or a selector for your reflected theme name, when a custom workspace needs additional structural styling.

```css
revo-grid[theme='my-workspace'] {
    --revo-grid-header-height: 44px;
    --revo-grid-header-padding: 0 12px;
    --revo-grid-cell-padding: 0 12px;
}
```

This separation is deliberate: the custom name remains stable for application CSS, analytics, tests, and runtime mode selection.

## How inheritance resolves

Definitions can appear in any array order. Resolution follows names, not array positions.

```ts
import { BasePlugin, defineTheme } from '@revolist/revogrid'

class AuditTrailPlugin extends BasePlugin {}
class ApprovalGuardPlugin extends BasePlugin {}

const approval = defineTheme({
    name: 'approval',
    extends: 'finance-foundation',
    tokens: {
        primary: '#7c3aed',
        headerBg: '#ede9fe',
    },
    plugins: [ApprovalGuardPlugin],
})

const foundation = defineTheme({
    name: 'finance-foundation',
    extends: 'material',
    defaultRowSize: 38,
    tokens: {
        primary: '#2563eb',
        background: '#f8fafc',
        text: '#0f172a',
    },
    plugins: [AuditTrailPlugin],
})

grid.themeDefinitions = [approval, foundation]
grid.theme = 'approval'
```

The resolved `approval` workspace has a 38 px default row size, the foundation surface and text tokens, the child's primary and header values, and both plugin constructors in this order:

```ts
const resolvedThemePlugins = [AuditTrailPlugin, ApprovalGuardPlugin]
```

Plugin inheritance is deduplicated by exact constructor identity. Repeating `AuditTrailPlugin` in the child does not create a second instance. A different subclass is a different constructor, even if it implements identical behavior.

### Invalid parents and cycles

The resolver fails safely:

-   a missing parent or inheritance cycle falls back to built-in `default` metadata;
-   the selected child keeps its own valid scheme, density, tokens, and plugins;
-   values from the invalid ancestor chain are not inherited;
-   invalid definitions, blank names, and attempts to redefine built-ins are ignored.

This behavior keeps the selected workspace usable, but it should not replace validation in a shared preset package. Test every exported theme name and inheritance chain before publishing it.

## Theme plugins and `grid.plugins` form one capability set

RevoGrid combines two declarative sources:

```ts
const requestedConstructors = unique([...grid.plugins, ...activeTheme.plugins])
```

The effective contract is a union by exact constructor:

| User configuration | Active theme | Result                                 |
| ------------------ | ------------ | -------------------------------------- |
| `[A]`              | `[]`         | One `A` instance                       |
| `[]`               | `[A]`        | One `A` instance                       |
| `[A]`              | `[A]`        | One shared `A` instance                |
| `[A, B]`           | `[B, C]`     | One instance each of `A`, `B`, and `C` |

A synchronized plugin remains active until neither source requests its constructor:

-   removing `A` from `grid.plugins` keeps it alive when the active theme still includes `A`;
-   switching away from a theme containing `A` keeps it alive when `grid.plugins` still includes `A`;
-   removing it from the last requesting source calls `destroy()` and unregisters the instance;
-   changing only the constructor order does not recreate retained instances.

User constructors are considered before theme-only constructors when a fresh set is created. Retained instances keep their existing registration order across runtime changes. Do not use `getPlugins()` array position as a dependency mechanism; use `providers.plugins.getByClass(SomePlugin)` or search the result of `await grid.getPlugins()` by class.

### Core and persistent plugins

RevoGrid also owns persistent internal plugins for core features such as sorting and grouping. Synchronized user/theme changes do not remove those instances. If a configured constructor is already registered persistently, the existing instance wins and the synchronized set does not create or later destroy a duplicate.

Application code should normally manage custom plugin constructors through `plugins` and themes, not by depending on this internal ownership distinction.

## Runtime switching and lifecycle

Themes are reactive properties. Assign new values; do not mutate an existing array or definition in place and expect framework change detection to notice.

```ts
grid.addEventListener('afterthemechanged', (event) => {
    console.log(event.detail) // normalized active theme name
})

// Switch the complete workspace.
grid.theme = 'approval'

// Replace an active definition without changing its name.
grid.themeDefinitions = grid.themeDefinitions.map((definition) =>
    definition.name === 'approval'
        ? {
              ...definition,
              tokens: {
                  ...definition.tokens,
                  primary: '#db2777',
              },
          }
        : definition
)

// Change application-selected plugins independently.
grid.plugins = [TelemetryPlugin]
```

The main transitions are:

| Change             | Theme resolution            | Plugin synchronization                      | Event               |
| ------------------ | --------------------------- | ------------------------------------------- | ------------------- |
| `theme`            | Resolve the new name        | Union `grid.plugins` with new theme plugins | `afterthemechanged` |
| `themeDefinitions` | Re-resolve the active name  | Union against the new resolved plugin set   | `afterthemechanged` |
| `plugins`          | Keep the active theme       | Synchronize the new union                   | No theme event      |
| `rowSize`          | Recompute effective density | No plugin change                            | No theme event      |

Plugin synchronization completes before `afterthemechanged` is emitted. An event handler can therefore call `await grid.getPlugins()` to inspect the active set for the new theme.

### Disconnect and reconnect

When a grid disconnects from the DOM, RevoGrid destroys all managed plugin instances to remove event subscriptions and avoid leaks. Reconnecting the same element registers fresh core, user, and active-theme plugin instances against that grid's existing providers.

If a custom plugin overrides `destroy()`, release its own timers, observers, external nodes, or application subscriptions and call `super.destroy()`:

```ts
class WorkspacePlugin extends BasePlugin {
    private observer?: ResizeObserver

    destroy() {
        this.observer?.disconnect()
        super.destroy()
    }
}
```

Never treat a plugin instance returned before disconnection as a permanent application singleton. Resolve it again from the connected grid when needed.

## Publish presets as application modules

A preset can be a distributable product contract: a named collection of visual tokens, density defaults, and plugin constructors. Package related definitions together so consumers register a complete inheritance graph.

```ts
// @acme/revogrid-workspaces/finance.ts
import { defineTheme } from '@revolist/revogrid'
import { AuditTrailPlugin } from './plugins/audit-trail'
import { ApprovalGuardPlugin } from './plugins/approval-guard'

export const financeFoundation = defineTheme({
    name: 'acme-finance',
    extends: 'material',
    defaultRowSize: 38,
    tokens: {
        primary: '#155eef',
        background: '#f8fafc',
        text: '#101828',
        headerBg: '#eef4ff',
    },
    plugins: [AuditTrailPlugin],
})

export const financeApproval = defineTheme({
    name: 'acme-finance-approval',
    extends: financeFoundation.name,
    tokens: {
        primary: '#7f56d9',
        selectionBorder: '#7f56d9',
    },
    plugins: [ApprovalGuardPlugin],
})

export const financeThemeDefinitions = [financeFoundation, financeApproval]
```

```ts
import { financeThemeDefinitions } from '@acme/revogrid-workspaces/finance'

grid.themeDefinitions = financeThemeDefinitions
grid.theme = 'acme-finance-approval'
```

Use namespaced theme names in a shared package to avoid collisions with application definitions. Keep constructors and definition arrays stable at module scope; generating a new plugin class on every render creates a new constructor identity and therefore a different plugin.

### What belongs in a workspace preset

A strong preset usually owns:

-   grid-specific design tokens and a density default;
-   plugins that implement the mode's grid behavior;
-   a small inheritance graph for shared product foundations;
-   tests for resolution, activation, cleanup, and accessibility.

Keep these outside the preset:

-   source rows and columns that change with application state;
-   user permissions or remote feature flags;
-   API clients and mutable business state hidden in module globals;
-   plugin constructor arguments, because a theme stores constructors rather than factories or configuration tuples.

If a plugin needs application configuration, expose that state through an application service the plugin can read, select a purpose-built subclass, or keep the configurable plugin in `grid.plugins`. Avoid creating anonymous subclasses during each render because constructor identity controls deduplication.

## Architecture patterns

### Product mode switcher

Map a stable application mode to a theme name:

```ts
const themeByMode = {
    browse: 'acme-finance',
    approve: 'acme-finance-approval',
} as const

grid.theme = themeByMode[applicationMode]
```

The application still authorizes mutations. The approval theme selects the correct grid behavior and presentation for an already-authorized mode.

### Shared foundation with focused descendants

Put brand tokens, telemetry, and common density in a parent. Add workflow-specific tokens and plugins in children. Because plugins inherit additively, place a plugin in the parent only when every descendant should activate it.

### Core preset with optional Pro capabilities

Publish a Core-only base definition, then extend it in a separate licensed package that imports Pro or Enterprise plugin constructors. This keeps the public Core bundle honest and lets licensed applications opt into advanced workspaces without duplicating brand tokens.

### CSS system plus typed capability themes

Keep broad brand values on an application container and use definitions only for mode-specific differences:

```css
.acme-app {
    --revo-grid-font-family: Inter, system-ui, sans-serif;
    --revo-grid-border: #d0d5dd;
}
```

```ts
const approval = defineTheme({
    name: 'approval',
    tokens: { primary: '#7f56d9' },
    plugins: [ApprovalGuardPlugin],
})
```

Tokens absent from `approval` continue to inherit from `.acme-app`.

## Framework integration notes

RevoGrid's wrappers pass `theme`, `themeDefinitions`, and `plugins` to the same Web Component. Keep definitions and plugin classes outside component render functions when possible, and replace arrays when their contents change.

::: code-group

```tsx [React]
const themes = [financeFoundation, financeApproval]

export function FinanceGrid({ mode }) {
    return (
        <RevoGrid
            columns={columns}
            source={source}
            theme={
                mode === 'approve' ? 'acme-finance-approval' : 'acme-finance'
            }
            themeDefinitions={themes}
            plugins={applicationPlugins}
        />
    )
}
```

```vue [Vue 3]
<script setup lang="ts">
const themes = [financeFoundation, financeApproval]
</script>

<template>
    <RevoGrid
        :columns="columns"
        :source="source"
        :theme="mode === 'approve' ? 'acme-finance-approval' : 'acme-finance'"
        :theme-definitions="themes"
        :plugins="applicationPlugins"
    />
</template>
```

```html [Angular]
<revo-grid
    [columns]="columns"
    [source]="source"
    [theme]="mode === 'approve' ? 'acme-finance-approval' : 'acme-finance'"
    [themeDefinitions]="themes"
    [plugins]="applicationPlugins"
></revo-grid>
```

```svelte [Svelte]
<RevoGrid
    {columns}
    {source}
    theme={mode === 'approve' ? 'acme-finance-approval' : 'acme-finance'}
    themeDefinitions={themes}
    plugins={applicationPlugins}
/>
```

:::

For server-rendered applications, import and attach plugin-bearing definitions on the client. Constructor references cannot cross a JSON server/client boundary.

## CSS-only themes remain compatible

Typed definitions are additive. Existing CSS-only themes continue to work:

```css
revo-grid[theme='billing'] {
    --revo-grid-background: #fbfaff;
    --revo-grid-header-bg: #f0edff;
    --revo-grid-header-color: #241c45;
    --revo-grid-selection-border: #6d4aff;
}
```

```ts
grid.theme = 'billing'
```

If `billing` has no registered definition, RevoGrid preserves the name, uses the standalone custom/material structural shell, falls back to a 27 px default row size, resolves a light scheme unless the name contains `dark`, and activates no theme plugins.

CSS custom properties also inherit normally from application containers:

```css
.billing-screen {
    --revo-grid-font-family: Inter, system-ui, sans-serif;
    --revo-grid-primary: #6d4aff;
}
```

Use CSS-only themes when selectors and inherited tokens are sufficient. Add a `ThemeDefinition` when the workspace needs typed tokens, explicit scheme/density, inheritance, plugins, or portable application presets.

## Built-in modern presets

RevoGrid exports five opt-in visual presets built with the public `ThemeDefinition` API:

| Preset             | Direction                                        | Scheme | Row height |
| ------------------ | ------------------------------------------------ | ------ | ---------: |
| `ocean`            | Airy blue and slate for light workspaces         | Light  |      38 px |
| `midnight`         | Deep navy with cyan and violet accents           | Dark   |      40 px |
| `aurora`           | Compact graphite with luminous green states      | Dark   |      34 px |
| `highContrast`     | Strong light surfaces, borders, and focus states | Light  |      40 px |
| `highContrastDark` | Near-black surfaces with yellow and cyan states  | Dark   |      40 px |

Register all of them:

```ts
import { modernThemeDefinitions } from '@revolist/revogrid'

grid.themeDefinitions = modernThemeDefinitions
grid.theme = 'midnight'
```

Or import only what an application uses:

```ts
import { defineTheme, oceanTheme } from '@revolist/revogrid'

const brandedOcean = defineTheme({
    name: 'acme-ocean',
    extends: oceanTheme.name,
    tokens: {
        primary: '#db2777',
        buttonBg: '#db2777',
    },
    plugins: [WorkspaceTelemetryPlugin],
})

grid.themeDefinitions = [oceanTheme, brandedOcean]
grid.theme = brandedOcean.name
```

The exports are `oceanTheme`, `midnightTheme`, `auroraTheme`, `highContrastTheme`, `highContrastDarkTheme`, `highContrastThemeDefinitions`, and `modernThemeDefinitions`. These built-in collections contain visual definitions; applications can extend them with their own plugins. High-contrast presets provide stronger default differentiation, but custom renderers and application overrides still need an accessibility review.

## Failure modes and safeguards

| Situation                                          | Behavior                                                           | Recommended practice                                                   |
| -------------------------------------------------- | ------------------------------------------------------------------ | ---------------------------------------------------------------------- |
| Blank `theme`                                      | Normalizes to `default`                                            | Store normalized, non-empty mode names                                 |
| Unknown custom name                                | CSS-only custom theme with default metadata and no theme plugins   | Register the complete definition collection before selecting it        |
| Duplicate custom name                              | Last valid array entry wins                                        | Enforce unique names in preset tests                                   |
| Definition named like a built-in                   | Definition is ignored                                              | Namespace distributable presets                                        |
| Missing parent or cycle                            | Selected child applies over default; invalid ancestors are skipped | Validate every exported inheritance graph                              |
| Invalid scheme, size, token, or plugin entry       | Invalid value is ignored                                           | Use `defineTheme()` and TypeScript rather than untyped runtime objects |
| Duplicate constructor in a chain or across sources | One plugin instance                                                | Share the exact imported class when behavior should be shared          |
| Two look-alike subclasses                          | Two distinct plugin instances                                      | Avoid unnecessary wrapper subclasses                                   |
| New class created during every render              | Constructor identity changes and the old instance is released      | Declare plugin classes at module scope                                 |
| In-place definition mutation                       | Watchers may not run                                               | Assign a new `themeDefinitions` array                                  |
| Plugin omits cleanup                               | External resources can outlive its active theme                    | Override `destroy()` and call `super.destroy()`                        |
| Plugin-bearing definition serialized as JSON       | Constructors are lost                                              | Distribute executable TypeScript/JavaScript modules                    |

## Performance and isolation

Theme resolution is per grid and plugin instances are never shared between grid elements. Reusing a definition object or constructor across two grids creates isolated runtime instances with the providers for each grid.

RevoGrid avoids unnecessary churn during configuration changes:

-   unchanged plugin constructors retain their instances;
-   duplicate constructors are created once per grid;
-   reordering a requested set does not destroy retained instances;
-   color-only token updates do not reset row geometry;
-   row geometry updates only when effective density changes;
-   disconnect destroys managed instances, and reconnect creates a clean runtime set.

Theme switching is therefore suitable for application modes, but it should not be used as a high-frequency state channel. Keep rapidly changing filters, selection, source data, and remote state in their owning grid properties or providers.

## Public theme token reference

`ThemeTokens` is the source of truth for definition keys. Every key maps to an inheritable CSS custom property.

### Foundation and grid states

| Token                | CSS custom property                |
| -------------------- | ---------------------------------- |
| `primary`            | `--revo-grid-primary`              |
| `primaryTransparent` | `--revo-grid-primary-transparent`  |
| `background`         | `--revo-grid-background`           |
| `foreground`         | `--revo-grid-foreground`           |
| `divider`            | `--revo-grid-divider`              |
| `shadow`             | `--revo-grid-shadow`               |
| `text`               | `--revo-grid-text`                 |
| `border`             | `--revo-grid-border`               |
| `headerBg`           | `--revo-grid-header-bg`            |
| `headerColor`        | `--revo-grid-header-color`         |
| `headerBorder`       | `--revo-grid-header-border`        |
| `headerFocusedBg`    | `--revo-grid-header-focused-bg`    |
| `headerHoverBg`      | `--revo-grid-header-hover-bg`      |
| `cellBorder`         | `--revo-grid-cell-border`          |
| `cellVerticalBorder` | `--revo-grid-cell-vertical-border` |
| `focusedBg`          | `--revo-grid-focused-bg`           |
| `rowHover`           | `--revo-grid-row-hover`            |
| `rowHeadersBg`       | `--revo-grid-row-headers-bg`       |
| `rowHeadersColor`    | `--revo-grid-row-headers-color`    |
| `cellDisabledBg`     | `--revo-grid-cell-disabled-bg`     |

`cellVerticalBorder` is transparent by default for material and compact structures. Set it explicitly to opt into vertical separators; `highContrastDark` enables it by default.

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

Token values are CSS strings. RevoGrid maps known tokens to custom properties on the grid; it does not inject arbitrary CSS or global stylesheets. Use normal CSS selectors when token-level customization is not sufficient.

## Theme Manager checklist

Before publishing a theme-driven workspace:

1. Give every definition a stable, namespaced name.
2. Register the complete inheritance chain on each grid that uses it.
3. Keep plugin constructors and definition arrays stable at module scope.
4. Verify the union with `grid.plugins`, especially overlapping constructors.
5. Test switching themes and replacing the active definition at runtime.
6. Confirm every plugin releases subscriptions and external resources in `destroy()`.
7. Test disconnect/reconnect and multiple grids for instance isolation.
8. Review contrast, focus, disabled, hover, selection, and custom-renderer states.
9. Keep plugin-bearing presets in executable modules, not serialized configuration.

With those boundaries, a RevoGrid theme becomes a compact, reusable description of a data-grid workspace: visual system, density, and behavior activated together while the application remains the source of truth for data and decisions.
