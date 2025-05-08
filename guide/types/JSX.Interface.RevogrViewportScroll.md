[RevoGrid Documentation v4.15.7](README.md) / [JSX](Namespace.JSX.md) / RevogrViewportScroll

# Interface: RevogrViewportScroll

Viewport scroll component for RevoGrid

## Properties

| Property | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| `colType` | [`DimensionCols`](TypeAlias.DimensionCols.md) \| `"rowHeaders"` | - | [src/components.d.ts:2302](https://github.com/revolist/revogrid/blob/4b66617ba213e84ecc08d523780ce49415de163a/src/components.d.ts#L2302) |
| `contentHeight?` | `number` | Height of inner content | [src/components.d.ts:2306](https://github.com/revolist/revogrid/blob/4b66617ba213e84ecc08d523780ce49415de163a/src/components.d.ts#L2306) |
| `contentWidth?` | `number` | Width of inner content | [src/components.d.ts:2310](https://github.com/revolist/revogrid/blob/4b66617ba213e84ecc08d523780ce49415de163a/src/components.d.ts#L2310) |
| `onResizeviewport?` | (`event`: [`RevogrViewportScrollCustomEvent`](Interface.RevogrViewportScrollCustomEvent.md)\<[`ViewPortResizeEvent`](TypeAlias.ViewPortResizeEvent.md)\>) => `void` | Viewport resize | [src/components.d.ts:2314](https://github.com/revolist/revogrid/blob/4b66617ba213e84ecc08d523780ce49415de163a/src/components.d.ts#L2314) |
| `onScrollchange?` | (`event`: [`RevogrViewportScrollCustomEvent`](Interface.RevogrViewportScrollCustomEvent.md)\<\{ `hasScroll`: `boolean`; `type`: [`DimensionType`](TypeAlias.DimensionType.md); \}\>) => `void` | Triggered on scroll change, can be used to get information about scroll visibility | [src/components.d.ts:2318](https://github.com/revolist/revogrid/blob/4b66617ba213e84ecc08d523780ce49415de163a/src/components.d.ts#L2318) |
| `onScrollviewport?` | (`event`: [`RevogrViewportScrollCustomEvent`](Interface.RevogrViewportScrollCustomEvent.md)\<[`ViewPortScrollEvent`](TypeAlias.ViewPortScrollEvent.md)\>) => `void` | Before scroll event | [src/components.d.ts:2325](https://github.com/revolist/revogrid/blob/4b66617ba213e84ecc08d523780ce49415de163a/src/components.d.ts#L2325) |
| `onScrollviewportsilent?` | (`event`: [`RevogrViewportScrollCustomEvent`](Interface.RevogrViewportScrollCustomEvent.md)\<[`ViewPortScrollEvent`](TypeAlias.ViewPortScrollEvent.md)\>) => `void` | Silently scroll to coordinate Made to align negative coordinates for mobile devices | [src/components.d.ts:2329](https://github.com/revolist/revogrid/blob/4b66617ba213e84ecc08d523780ce49415de163a/src/components.d.ts#L2329) |
| `rowHeader?` | `boolean` | Enable row header | [src/components.d.ts:2333](https://github.com/revolist/revogrid/blob/4b66617ba213e84ecc08d523780ce49415de163a/src/components.d.ts#L2333) |
