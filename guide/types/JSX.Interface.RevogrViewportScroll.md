[@revolist/revogrid](README.md) / [JSX](Namespace.JSX.md) / RevogrViewportScroll

# Interface: RevogrViewportScroll

Viewport scroll component for RevoGrid

## Properties

| Property | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| `colType` | [`DimensionCols`](TypeAlias.DimensionCols.md) \| `"rowHeaders"` | - | [src/components.d.ts:2257](https://github.com/revolist/revogrid/blob/339b58d64f0e4822db63d040318421d77ef85671/src/components.d.ts#L2257) |
| `contentHeight?` | `number` | Height of inner content | [src/components.d.ts:2261](https://github.com/revolist/revogrid/blob/339b58d64f0e4822db63d040318421d77ef85671/src/components.d.ts#L2261) |
| `contentWidth?` | `number` | Width of inner content | [src/components.d.ts:2265](https://github.com/revolist/revogrid/blob/339b58d64f0e4822db63d040318421d77ef85671/src/components.d.ts#L2265) |
| `onResizeviewport?` | (`event`: [`RevogrViewportScrollCustomEvent`](Interface.RevogrViewportScrollCustomEvent.md)\<[`ViewPortResizeEvent`](TypeAlias.ViewPortResizeEvent.md)\>) => `void` | Viewport resize | [src/components.d.ts:2269](https://github.com/revolist/revogrid/blob/339b58d64f0e4822db63d040318421d77ef85671/src/components.d.ts#L2269) |
| `onScrollchange?` | (`event`: [`RevogrViewportScrollCustomEvent`](Interface.RevogrViewportScrollCustomEvent.md)\<\{ `hasScroll`: `boolean`; `type`: [`DimensionType`](TypeAlias.DimensionType.md); \}\>) => `void` | Triggered on scroll change, can be used to get information about scroll visibility | [src/components.d.ts:2273](https://github.com/revolist/revogrid/blob/339b58d64f0e4822db63d040318421d77ef85671/src/components.d.ts#L2273) |
| `onScrollviewport?` | (`event`: [`RevogrViewportScrollCustomEvent`](Interface.RevogrViewportScrollCustomEvent.md)\<[`ViewPortScrollEvent`](TypeAlias.ViewPortScrollEvent.md)\>) => `void` | Before scroll event | [src/components.d.ts:2280](https://github.com/revolist/revogrid/blob/339b58d64f0e4822db63d040318421d77ef85671/src/components.d.ts#L2280) |
| `onScrollviewportsilent?` | (`event`: [`RevogrViewportScrollCustomEvent`](Interface.RevogrViewportScrollCustomEvent.md)\<[`ViewPortScrollEvent`](TypeAlias.ViewPortScrollEvent.md)\>) => `void` | Silently scroll to coordinate Made to align negative coordinates for mobile devices | [src/components.d.ts:2284](https://github.com/revolist/revogrid/blob/339b58d64f0e4822db63d040318421d77ef85671/src/components.d.ts#L2284) |
| `rowHeader?` | `boolean` | Enable row header | [src/components.d.ts:2288](https://github.com/revolist/revogrid/blob/339b58d64f0e4822db63d040318421d77ef85671/src/components.d.ts#L2288) |
