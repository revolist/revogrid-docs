[@revolist/revogrid](README.md) / [JSX](Namespace.JSX.md) / RevogrViewportScroll

# Interface: RevogrViewportScroll

Viewport scroll component for RevoGrid

## Properties

| Property | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| `colType` | [`DimensionCols`](TypeAlias.DimensionCols.md) \| `"rowHeaders"` | - | [src/components.d.ts:2240](https://github.com/revolist/revogrid/blob/80825bf77a49d260f052f2584a0efe930c2da0d3/src/components.d.ts#L2240) |
| `contentHeight?` | `number` | Height of inner content | [src/components.d.ts:2244](https://github.com/revolist/revogrid/blob/80825bf77a49d260f052f2584a0efe930c2da0d3/src/components.d.ts#L2244) |
| `contentWidth?` | `number` | Width of inner content | [src/components.d.ts:2248](https://github.com/revolist/revogrid/blob/80825bf77a49d260f052f2584a0efe930c2da0d3/src/components.d.ts#L2248) |
| `onResizeviewport?` | (`event`: [`RevogrViewportScrollCustomEvent`](Interface.RevogrViewportScrollCustomEvent.md)\<[`ViewPortResizeEvent`](TypeAlias.ViewPortResizeEvent.md)\>) => `void` | Viewport resize | [src/components.d.ts:2252](https://github.com/revolist/revogrid/blob/80825bf77a49d260f052f2584a0efe930c2da0d3/src/components.d.ts#L2252) |
| `onScrollchange?` | (`event`: [`RevogrViewportScrollCustomEvent`](Interface.RevogrViewportScrollCustomEvent.md)\<\{ `hasScroll`: `boolean`; `type`: [`DimensionType`](TypeAlias.DimensionType.md); \}\>) => `void` | Triggered on scroll change, can be used to get information about scroll visibility | [src/components.d.ts:2256](https://github.com/revolist/revogrid/blob/80825bf77a49d260f052f2584a0efe930c2da0d3/src/components.d.ts#L2256) |
| `onScrollviewport?` | (`event`: [`RevogrViewportScrollCustomEvent`](Interface.RevogrViewportScrollCustomEvent.md)\<[`ViewPortScrollEvent`](TypeAlias.ViewPortScrollEvent.md)\>) => `void` | Before scroll event | [src/components.d.ts:2263](https://github.com/revolist/revogrid/blob/80825bf77a49d260f052f2584a0efe930c2da0d3/src/components.d.ts#L2263) |
| `onScrollviewportsilent?` | (`event`: [`RevogrViewportScrollCustomEvent`](Interface.RevogrViewportScrollCustomEvent.md)\<[`ViewPortScrollEvent`](TypeAlias.ViewPortScrollEvent.md)\>) => `void` | Silently scroll to coordinate Made to align negative coordinates for mobile devices | [src/components.d.ts:2267](https://github.com/revolist/revogrid/blob/80825bf77a49d260f052f2584a0efe930c2da0d3/src/components.d.ts#L2267) |
| `rowHeader?` | `boolean` | Enable row header | [src/components.d.ts:2271](https://github.com/revolist/revogrid/blob/80825bf77a49d260f052f2584a0efe930c2da0d3/src/components.d.ts#L2271) |
