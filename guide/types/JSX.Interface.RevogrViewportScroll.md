[@revolist/revogrid](README.md) / [JSX](Namespace.JSX.md) / RevogrViewportScroll

# Interface: RevogrViewportScroll

Viewport scroll component for RevoGrid

## Properties

| Property | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| `colType` | [`DimensionCols`](TypeAlias.DimensionCols.md) \| `"rowHeaders"` | - | [src/components.d.ts:2087](https://github.com/revolist/revogrid/blob/2f44a261094fb5584023b62ddfd589facc70cf92/src/components.d.ts#L2087) |
| `contentHeight?` | `number` | Height of inner content | [src/components.d.ts:2091](https://github.com/revolist/revogrid/blob/2f44a261094fb5584023b62ddfd589facc70cf92/src/components.d.ts#L2091) |
| `contentWidth?` | `number` | Width of inner content | [src/components.d.ts:2095](https://github.com/revolist/revogrid/blob/2f44a261094fb5584023b62ddfd589facc70cf92/src/components.d.ts#L2095) |
| `onResizeviewport?` | (`event`: [`RevogrViewportScrollCustomEvent`](Interface.RevogrViewportScrollCustomEvent.md)\<[`ViewPortResizeEvent`](TypeAlias.ViewPortResizeEvent.md)\>) => `void` | Viewport resize | [src/components.d.ts:2099](https://github.com/revolist/revogrid/blob/2f44a261094fb5584023b62ddfd589facc70cf92/src/components.d.ts#L2099) |
| `onScrollchange?` | (`event`: [`RevogrViewportScrollCustomEvent`](Interface.RevogrViewportScrollCustomEvent.md)\<\{ `hasScroll`: `boolean`; `type`: [`DimensionType`](TypeAlias.DimensionType.md); \}\>) => `void` | Triggered on scroll change, can be used to get information about scroll visibility | [src/components.d.ts:2103](https://github.com/revolist/revogrid/blob/2f44a261094fb5584023b62ddfd589facc70cf92/src/components.d.ts#L2103) |
| `onScrollviewport?` | (`event`: [`RevogrViewportScrollCustomEvent`](Interface.RevogrViewportScrollCustomEvent.md)\<[`ViewPortScrollEvent`](TypeAlias.ViewPortScrollEvent.md)\>) => `void` | Before scroll event | [src/components.d.ts:2110](https://github.com/revolist/revogrid/blob/2f44a261094fb5584023b62ddfd589facc70cf92/src/components.d.ts#L2110) |
| `onScrollviewportsilent?` | (`event`: [`RevogrViewportScrollCustomEvent`](Interface.RevogrViewportScrollCustomEvent.md)\<[`ViewPortScrollEvent`](TypeAlias.ViewPortScrollEvent.md)\>) => `void` | Silently scroll to coordinate Made to align negative coordinates for mobile devices | [src/components.d.ts:2114](https://github.com/revolist/revogrid/blob/2f44a261094fb5584023b62ddfd589facc70cf92/src/components.d.ts#L2114) |
| `rowHeader?` | `boolean` | Enable row header | [src/components.d.ts:2118](https://github.com/revolist/revogrid/blob/2f44a261094fb5584023b62ddfd589facc70cf92/src/components.d.ts#L2118) |
