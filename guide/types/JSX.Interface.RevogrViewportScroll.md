[@revolist/revogrid](README.md) / [JSX](Namespace.JSX.md) / RevogrViewportScroll

# Interface: RevogrViewportScroll

Viewport scroll component for RevoGrid

## Properties

| Property | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| `colType` | [`DimensionCols`](TypeAlias.DimensionCols.md) \| `"rowHeaders"` | - | [src/components.d.ts:2104](https://github.com/revolist/revogrid/blob/645c5b44e05a187c8aab0cf802e5a080c331a78f/src/components.d.ts#L2104) |
| `contentHeight?` | `number` | Height of inner content | [src/components.d.ts:2108](https://github.com/revolist/revogrid/blob/645c5b44e05a187c8aab0cf802e5a080c331a78f/src/components.d.ts#L2108) |
| `contentWidth?` | `number` | Width of inner content | [src/components.d.ts:2112](https://github.com/revolist/revogrid/blob/645c5b44e05a187c8aab0cf802e5a080c331a78f/src/components.d.ts#L2112) |
| `onResizeviewport?` | (`event`: [`RevogrViewportScrollCustomEvent`](Interface.RevogrViewportScrollCustomEvent.md)\<[`ViewPortResizeEvent`](TypeAlias.ViewPortResizeEvent.md)\>) => `void` | Viewport resize | [src/components.d.ts:2116](https://github.com/revolist/revogrid/blob/645c5b44e05a187c8aab0cf802e5a080c331a78f/src/components.d.ts#L2116) |
| `onScrollchange?` | (`event`: [`RevogrViewportScrollCustomEvent`](Interface.RevogrViewportScrollCustomEvent.md)\<\{ `hasScroll`: `boolean`; `type`: [`DimensionType`](TypeAlias.DimensionType.md); \}\>) => `void` | Triggered on scroll change, can be used to get information about scroll visibility | [src/components.d.ts:2120](https://github.com/revolist/revogrid/blob/645c5b44e05a187c8aab0cf802e5a080c331a78f/src/components.d.ts#L2120) |
| `onScrollviewport?` | (`event`: [`RevogrViewportScrollCustomEvent`](Interface.RevogrViewportScrollCustomEvent.md)\<[`ViewPortScrollEvent`](TypeAlias.ViewPortScrollEvent.md)\>) => `void` | Before scroll event | [src/components.d.ts:2127](https://github.com/revolist/revogrid/blob/645c5b44e05a187c8aab0cf802e5a080c331a78f/src/components.d.ts#L2127) |
| `onScrollviewportsilent?` | (`event`: [`RevogrViewportScrollCustomEvent`](Interface.RevogrViewportScrollCustomEvent.md)\<[`ViewPortScrollEvent`](TypeAlias.ViewPortScrollEvent.md)\>) => `void` | Silently scroll to coordinate Made to align negative coordinates for mobile devices | [src/components.d.ts:2131](https://github.com/revolist/revogrid/blob/645c5b44e05a187c8aab0cf802e5a080c331a78f/src/components.d.ts#L2131) |
| `rowHeader?` | `boolean` | Enable row header | [src/components.d.ts:2135](https://github.com/revolist/revogrid/blob/645c5b44e05a187c8aab0cf802e5a080c331a78f/src/components.d.ts#L2135) |
