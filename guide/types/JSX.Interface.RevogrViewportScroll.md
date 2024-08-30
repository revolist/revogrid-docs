[@revolist/revogrid](README.md) / [JSX](Namespace.JSX.md) / RevogrViewportScroll

# Interface: RevogrViewportScroll

Viewport scroll component for RevoGrid

## Properties

| Property | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| `colType` | [`DimensionCols`](TypeAlias.DimensionCols.md) \| `"rowHeaders"` | - | [src/components.d.ts:2129](https://github.com/revolist/revogrid/blob/b7bc91178b5b059b1432f9bb6ddbfab652d2c8cf/src/components.d.ts#L2129) |
| `contentHeight?` | `number` | Height of inner content | [src/components.d.ts:2133](https://github.com/revolist/revogrid/blob/b7bc91178b5b059b1432f9bb6ddbfab652d2c8cf/src/components.d.ts#L2133) |
| `contentWidth?` | `number` | Width of inner content | [src/components.d.ts:2137](https://github.com/revolist/revogrid/blob/b7bc91178b5b059b1432f9bb6ddbfab652d2c8cf/src/components.d.ts#L2137) |
| `onResizeviewport?` | (`event`: [`RevogrViewportScrollCustomEvent`](Interface.RevogrViewportScrollCustomEvent.md)\<[`ViewPortResizeEvent`](TypeAlias.ViewPortResizeEvent.md)\>) => `void` | Viewport resize | [src/components.d.ts:2141](https://github.com/revolist/revogrid/blob/b7bc91178b5b059b1432f9bb6ddbfab652d2c8cf/src/components.d.ts#L2141) |
| `onScrollchange?` | (`event`: [`RevogrViewportScrollCustomEvent`](Interface.RevogrViewportScrollCustomEvent.md)\<\{ `hasScroll`: `boolean`; `type`: [`DimensionType`](TypeAlias.DimensionType.md); \}\>) => `void` | Triggered on scroll change, can be used to get information about scroll visibility | [src/components.d.ts:2145](https://github.com/revolist/revogrid/blob/b7bc91178b5b059b1432f9bb6ddbfab652d2c8cf/src/components.d.ts#L2145) |
| `onScrollviewport?` | (`event`: [`RevogrViewportScrollCustomEvent`](Interface.RevogrViewportScrollCustomEvent.md)\<[`ViewPortScrollEvent`](TypeAlias.ViewPortScrollEvent.md)\>) => `void` | Before scroll event | [src/components.d.ts:2152](https://github.com/revolist/revogrid/blob/b7bc91178b5b059b1432f9bb6ddbfab652d2c8cf/src/components.d.ts#L2152) |
| `onScrollviewportsilent?` | (`event`: [`RevogrViewportScrollCustomEvent`](Interface.RevogrViewportScrollCustomEvent.md)\<[`ViewPortScrollEvent`](TypeAlias.ViewPortScrollEvent.md)\>) => `void` | Silently scroll to coordinate Made to align negative coordinates for mobile devices | [src/components.d.ts:2156](https://github.com/revolist/revogrid/blob/b7bc91178b5b059b1432f9bb6ddbfab652d2c8cf/src/components.d.ts#L2156) |
| `rowHeader?` | `boolean` | Enable row header | [src/components.d.ts:2160](https://github.com/revolist/revogrid/blob/b7bc91178b5b059b1432f9bb6ddbfab652d2c8cf/src/components.d.ts#L2160) |
