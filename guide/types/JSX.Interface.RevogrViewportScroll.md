[@revolist/revogrid](README.md) / [JSX](Namespace.JSX.md) / RevogrViewportScroll

# Interface: RevogrViewportScroll

Viewport scroll component for RevoGrid

## Properties

| Property | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| `colType` | [`DimensionCols`](TypeAlias.DimensionCols.md) \| `"rowHeaders"` | - | [src/components.d.ts:2174](https://github.com/revolist/revogrid/blob/0787a2552cf5bbb21cb9aa4dbfa802d1d65b108b/src/components.d.ts#L2174) |
| `contentHeight?` | `number` | Height of inner content | [src/components.d.ts:2178](https://github.com/revolist/revogrid/blob/0787a2552cf5bbb21cb9aa4dbfa802d1d65b108b/src/components.d.ts#L2178) |
| `contentWidth?` | `number` | Width of inner content | [src/components.d.ts:2182](https://github.com/revolist/revogrid/blob/0787a2552cf5bbb21cb9aa4dbfa802d1d65b108b/src/components.d.ts#L2182) |
| `onResizeviewport?` | (`event`: [`RevogrViewportScrollCustomEvent`](Interface.RevogrViewportScrollCustomEvent.md)\<[`ViewPortResizeEvent`](TypeAlias.ViewPortResizeEvent.md)\>) => `void` | Viewport resize | [src/components.d.ts:2186](https://github.com/revolist/revogrid/blob/0787a2552cf5bbb21cb9aa4dbfa802d1d65b108b/src/components.d.ts#L2186) |
| `onScrollchange?` | (`event`: [`RevogrViewportScrollCustomEvent`](Interface.RevogrViewportScrollCustomEvent.md)\<\{ `hasScroll`: `boolean`; `type`: [`DimensionType`](TypeAlias.DimensionType.md); \}\>) => `void` | Triggered on scroll change, can be used to get information about scroll visibility | [src/components.d.ts:2190](https://github.com/revolist/revogrid/blob/0787a2552cf5bbb21cb9aa4dbfa802d1d65b108b/src/components.d.ts#L2190) |
| `onScrollviewport?` | (`event`: [`RevogrViewportScrollCustomEvent`](Interface.RevogrViewportScrollCustomEvent.md)\<[`ViewPortScrollEvent`](TypeAlias.ViewPortScrollEvent.md)\>) => `void` | Before scroll event | [src/components.d.ts:2197](https://github.com/revolist/revogrid/blob/0787a2552cf5bbb21cb9aa4dbfa802d1d65b108b/src/components.d.ts#L2197) |
| `onScrollviewportsilent?` | (`event`: [`RevogrViewportScrollCustomEvent`](Interface.RevogrViewportScrollCustomEvent.md)\<[`ViewPortScrollEvent`](TypeAlias.ViewPortScrollEvent.md)\>) => `void` | Silently scroll to coordinate Made to align negative coordinates for mobile devices | [src/components.d.ts:2201](https://github.com/revolist/revogrid/blob/0787a2552cf5bbb21cb9aa4dbfa802d1d65b108b/src/components.d.ts#L2201) |
| `rowHeader?` | `boolean` | Enable row header | [src/components.d.ts:2205](https://github.com/revolist/revogrid/blob/0787a2552cf5bbb21cb9aa4dbfa802d1d65b108b/src/components.d.ts#L2205) |
