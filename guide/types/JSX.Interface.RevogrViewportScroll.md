[@revolist/revogrid](README.md) / [JSX](Namespace.JSX.md) / RevogrViewportScroll

# Interface: RevogrViewportScroll

Viewport scroll component for RevoGrid

## Properties

| Property | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| `colType` | [`DimensionCols`](TypeAlias.DimensionCols.md) \| `"rowHeaders"` | - | [src/components.d.ts:2102](https://github.com/revolist/revogrid/blob/169fb7626f86c9813d59597eddde6f6dd50e49a6/src/components.d.ts#L2102) |
| `contentHeight?` | `number` | Height of inner content | [src/components.d.ts:2106](https://github.com/revolist/revogrid/blob/169fb7626f86c9813d59597eddde6f6dd50e49a6/src/components.d.ts#L2106) |
| `contentWidth?` | `number` | Width of inner content | [src/components.d.ts:2110](https://github.com/revolist/revogrid/blob/169fb7626f86c9813d59597eddde6f6dd50e49a6/src/components.d.ts#L2110) |
| `onResizeviewport?` | (`event`: [`RevogrViewportScrollCustomEvent`](Interface.RevogrViewportScrollCustomEvent.md)\<[`ViewPortResizeEvent`](TypeAlias.ViewPortResizeEvent.md)\>) => `void` | Viewport resize | [src/components.d.ts:2114](https://github.com/revolist/revogrid/blob/169fb7626f86c9813d59597eddde6f6dd50e49a6/src/components.d.ts#L2114) |
| `onScrollchange?` | (`event`: [`RevogrViewportScrollCustomEvent`](Interface.RevogrViewportScrollCustomEvent.md)\<\{ `hasScroll`: `boolean`; `type`: [`DimensionType`](TypeAlias.DimensionType.md); \}\>) => `void` | Triggered on scroll change, can be used to get information about scroll visibility | [src/components.d.ts:2118](https://github.com/revolist/revogrid/blob/169fb7626f86c9813d59597eddde6f6dd50e49a6/src/components.d.ts#L2118) |
| `onScrollviewport?` | (`event`: [`RevogrViewportScrollCustomEvent`](Interface.RevogrViewportScrollCustomEvent.md)\<[`ViewPortScrollEvent`](TypeAlias.ViewPortScrollEvent.md)\>) => `void` | Before scroll event | [src/components.d.ts:2125](https://github.com/revolist/revogrid/blob/169fb7626f86c9813d59597eddde6f6dd50e49a6/src/components.d.ts#L2125) |
| `onScrollviewportsilent?` | (`event`: [`RevogrViewportScrollCustomEvent`](Interface.RevogrViewportScrollCustomEvent.md)\<[`ViewPortScrollEvent`](TypeAlias.ViewPortScrollEvent.md)\>) => `void` | Silently scroll to coordinate Made to align negative coordinates for mobile devices | [src/components.d.ts:2129](https://github.com/revolist/revogrid/blob/169fb7626f86c9813d59597eddde6f6dd50e49a6/src/components.d.ts#L2129) |
| `rowHeader?` | `boolean` | Enable row header | [src/components.d.ts:2133](https://github.com/revolist/revogrid/blob/169fb7626f86c9813d59597eddde6f6dd50e49a6/src/components.d.ts#L2133) |
