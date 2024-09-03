[@revolist/revogrid](README.md) / [JSX](Namespace.JSX.md) / RevogrViewportScroll

# Interface: RevogrViewportScroll

Viewport scroll component for RevoGrid

## Properties

| Property | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| `colType` | [`DimensionCols`](TypeAlias.DimensionCols.md) \| `"rowHeaders"` | - | [src/components.d.ts:2175](https://github.com/revolist/revogrid/blob/2d9504ecff6b493d547df979b2259be6b639351c/src/components.d.ts#L2175) |
| `contentHeight?` | `number` | Height of inner content | [src/components.d.ts:2179](https://github.com/revolist/revogrid/blob/2d9504ecff6b493d547df979b2259be6b639351c/src/components.d.ts#L2179) |
| `contentWidth?` | `number` | Width of inner content | [src/components.d.ts:2183](https://github.com/revolist/revogrid/blob/2d9504ecff6b493d547df979b2259be6b639351c/src/components.d.ts#L2183) |
| `onResizeviewport?` | (`event`: [`RevogrViewportScrollCustomEvent`](Interface.RevogrViewportScrollCustomEvent.md)\<[`ViewPortResizeEvent`](TypeAlias.ViewPortResizeEvent.md)\>) => `void` | Viewport resize | [src/components.d.ts:2187](https://github.com/revolist/revogrid/blob/2d9504ecff6b493d547df979b2259be6b639351c/src/components.d.ts#L2187) |
| `onScrollchange?` | (`event`: [`RevogrViewportScrollCustomEvent`](Interface.RevogrViewportScrollCustomEvent.md)\<\{ `hasScroll`: `boolean`; `type`: [`DimensionType`](TypeAlias.DimensionType.md); \}\>) => `void` | Triggered on scroll change, can be used to get information about scroll visibility | [src/components.d.ts:2191](https://github.com/revolist/revogrid/blob/2d9504ecff6b493d547df979b2259be6b639351c/src/components.d.ts#L2191) |
| `onScrollviewport?` | (`event`: [`RevogrViewportScrollCustomEvent`](Interface.RevogrViewportScrollCustomEvent.md)\<[`ViewPortScrollEvent`](TypeAlias.ViewPortScrollEvent.md)\>) => `void` | Before scroll event | [src/components.d.ts:2198](https://github.com/revolist/revogrid/blob/2d9504ecff6b493d547df979b2259be6b639351c/src/components.d.ts#L2198) |
| `onScrollviewportsilent?` | (`event`: [`RevogrViewportScrollCustomEvent`](Interface.RevogrViewportScrollCustomEvent.md)\<[`ViewPortScrollEvent`](TypeAlias.ViewPortScrollEvent.md)\>) => `void` | Silently scroll to coordinate Made to align negative coordinates for mobile devices | [src/components.d.ts:2202](https://github.com/revolist/revogrid/blob/2d9504ecff6b493d547df979b2259be6b639351c/src/components.d.ts#L2202) |
| `rowHeader?` | `boolean` | Enable row header | [src/components.d.ts:2206](https://github.com/revolist/revogrid/blob/2d9504ecff6b493d547df979b2259be6b639351c/src/components.d.ts#L2206) |
