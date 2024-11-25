[@revolist/revogrid](README.md) / [JSX](Namespace.JSX.md) / RevogrViewportScroll

# Interface: RevogrViewportScroll

Viewport scroll component for RevoGrid

## Properties

| Property | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| `colType` | [`DimensionCols`](TypeAlias.DimensionCols.md) \| `"rowHeaders"` | - | [src/components.d.ts:2255](https://github.com/revolist/revogrid/blob/029346d93426056ab8f85e88430904164676d501/src/components.d.ts#L2255) |
| `contentHeight?` | `number` | Height of inner content | [src/components.d.ts:2259](https://github.com/revolist/revogrid/blob/029346d93426056ab8f85e88430904164676d501/src/components.d.ts#L2259) |
| `contentWidth?` | `number` | Width of inner content | [src/components.d.ts:2263](https://github.com/revolist/revogrid/blob/029346d93426056ab8f85e88430904164676d501/src/components.d.ts#L2263) |
| `onResizeviewport?` | (`event`: [`RevogrViewportScrollCustomEvent`](Interface.RevogrViewportScrollCustomEvent.md)\<[`ViewPortResizeEvent`](TypeAlias.ViewPortResizeEvent.md)\>) => `void` | Viewport resize | [src/components.d.ts:2267](https://github.com/revolist/revogrid/blob/029346d93426056ab8f85e88430904164676d501/src/components.d.ts#L2267) |
| `onScrollchange?` | (`event`: [`RevogrViewportScrollCustomEvent`](Interface.RevogrViewportScrollCustomEvent.md)\<\{ `hasScroll`: `boolean`; `type`: [`DimensionType`](TypeAlias.DimensionType.md); \}\>) => `void` | Triggered on scroll change, can be used to get information about scroll visibility | [src/components.d.ts:2271](https://github.com/revolist/revogrid/blob/029346d93426056ab8f85e88430904164676d501/src/components.d.ts#L2271) |
| `onScrollviewport?` | (`event`: [`RevogrViewportScrollCustomEvent`](Interface.RevogrViewportScrollCustomEvent.md)\<[`ViewPortScrollEvent`](TypeAlias.ViewPortScrollEvent.md)\>) => `void` | Before scroll event | [src/components.d.ts:2278](https://github.com/revolist/revogrid/blob/029346d93426056ab8f85e88430904164676d501/src/components.d.ts#L2278) |
| `onScrollviewportsilent?` | (`event`: [`RevogrViewportScrollCustomEvent`](Interface.RevogrViewportScrollCustomEvent.md)\<[`ViewPortScrollEvent`](TypeAlias.ViewPortScrollEvent.md)\>) => `void` | Silently scroll to coordinate Made to align negative coordinates for mobile devices | [src/components.d.ts:2282](https://github.com/revolist/revogrid/blob/029346d93426056ab8f85e88430904164676d501/src/components.d.ts#L2282) |
| `rowHeader?` | `boolean` | Enable row header | [src/components.d.ts:2286](https://github.com/revolist/revogrid/blob/029346d93426056ab8f85e88430904164676d501/src/components.d.ts#L2286) |
