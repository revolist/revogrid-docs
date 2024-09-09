[@revolist/revogrid](README.md) / [JSX](Namespace.JSX.md) / RevogrViewportScroll

# Interface: RevogrViewportScroll

Viewport scroll component for RevoGrid

## Properties

| Property | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| `colType` | [`DimensionCols`](TypeAlias.DimensionCols.md) \| `"rowHeaders"` | - | [src/components.d.ts:2200](https://github.com/revolist/revogrid/blob/cef5db5acf21deb63962d633ec5e3d088dfc6c5b/src/components.d.ts#L2200) |
| `contentHeight?` | `number` | Height of inner content | [src/components.d.ts:2204](https://github.com/revolist/revogrid/blob/cef5db5acf21deb63962d633ec5e3d088dfc6c5b/src/components.d.ts#L2204) |
| `contentWidth?` | `number` | Width of inner content | [src/components.d.ts:2208](https://github.com/revolist/revogrid/blob/cef5db5acf21deb63962d633ec5e3d088dfc6c5b/src/components.d.ts#L2208) |
| `onResizeviewport?` | (`event`: [`RevogrViewportScrollCustomEvent`](Interface.RevogrViewportScrollCustomEvent.md)\<[`ViewPortResizeEvent`](TypeAlias.ViewPortResizeEvent.md)\>) => `void` | Viewport resize | [src/components.d.ts:2212](https://github.com/revolist/revogrid/blob/cef5db5acf21deb63962d633ec5e3d088dfc6c5b/src/components.d.ts#L2212) |
| `onScrollchange?` | (`event`: [`RevogrViewportScrollCustomEvent`](Interface.RevogrViewportScrollCustomEvent.md)\<\{ `hasScroll`: `boolean`; `type`: [`DimensionType`](TypeAlias.DimensionType.md); \}\>) => `void` | Triggered on scroll change, can be used to get information about scroll visibility | [src/components.d.ts:2216](https://github.com/revolist/revogrid/blob/cef5db5acf21deb63962d633ec5e3d088dfc6c5b/src/components.d.ts#L2216) |
| `onScrollviewport?` | (`event`: [`RevogrViewportScrollCustomEvent`](Interface.RevogrViewportScrollCustomEvent.md)\<[`ViewPortScrollEvent`](TypeAlias.ViewPortScrollEvent.md)\>) => `void` | Before scroll event | [src/components.d.ts:2223](https://github.com/revolist/revogrid/blob/cef5db5acf21deb63962d633ec5e3d088dfc6c5b/src/components.d.ts#L2223) |
| `onScrollviewportsilent?` | (`event`: [`RevogrViewportScrollCustomEvent`](Interface.RevogrViewportScrollCustomEvent.md)\<[`ViewPortScrollEvent`](TypeAlias.ViewPortScrollEvent.md)\>) => `void` | Silently scroll to coordinate Made to align negative coordinates for mobile devices | [src/components.d.ts:2227](https://github.com/revolist/revogrid/blob/cef5db5acf21deb63962d633ec5e3d088dfc6c5b/src/components.d.ts#L2227) |
| `rowHeader?` | `boolean` | Enable row header | [src/components.d.ts:2231](https://github.com/revolist/revogrid/blob/cef5db5acf21deb63962d633ec5e3d088dfc6c5b/src/components.d.ts#L2231) |
