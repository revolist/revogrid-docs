[@revolist/revogrid](README.md) / [JSX](Namespace.JSX.md) / RevogrViewportScroll

# Interface: RevogrViewportScroll

Viewport scroll component for RevoGrid

## Properties

| Property | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| `colType` | [`DimensionCols`](TypeAlias.DimensionCols.md) \| `"rowHeaders"` | - | [src/components.d.ts:2193](https://github.com/revolist/revogrid/blob/97bf2134af01be0f2e3e5ac6768e7a2e7070a947/src/components.d.ts#L2193) |
| `contentHeight?` | `number` | Height of inner content | [src/components.d.ts:2197](https://github.com/revolist/revogrid/blob/97bf2134af01be0f2e3e5ac6768e7a2e7070a947/src/components.d.ts#L2197) |
| `contentWidth?` | `number` | Width of inner content | [src/components.d.ts:2201](https://github.com/revolist/revogrid/blob/97bf2134af01be0f2e3e5ac6768e7a2e7070a947/src/components.d.ts#L2201) |
| `onResizeviewport?` | (`event`: [`RevogrViewportScrollCustomEvent`](Interface.RevogrViewportScrollCustomEvent.md)\<[`ViewPortResizeEvent`](TypeAlias.ViewPortResizeEvent.md)\>) => `void` | Viewport resize | [src/components.d.ts:2205](https://github.com/revolist/revogrid/blob/97bf2134af01be0f2e3e5ac6768e7a2e7070a947/src/components.d.ts#L2205) |
| `onScrollchange?` | (`event`: [`RevogrViewportScrollCustomEvent`](Interface.RevogrViewportScrollCustomEvent.md)\<\{ `hasScroll`: `boolean`; `type`: [`DimensionType`](TypeAlias.DimensionType.md); \}\>) => `void` | Triggered on scroll change, can be used to get information about scroll visibility | [src/components.d.ts:2209](https://github.com/revolist/revogrid/blob/97bf2134af01be0f2e3e5ac6768e7a2e7070a947/src/components.d.ts#L2209) |
| `onScrollviewport?` | (`event`: [`RevogrViewportScrollCustomEvent`](Interface.RevogrViewportScrollCustomEvent.md)\<[`ViewPortScrollEvent`](TypeAlias.ViewPortScrollEvent.md)\>) => `void` | Before scroll event | [src/components.d.ts:2216](https://github.com/revolist/revogrid/blob/97bf2134af01be0f2e3e5ac6768e7a2e7070a947/src/components.d.ts#L2216) |
| `onScrollviewportsilent?` | (`event`: [`RevogrViewportScrollCustomEvent`](Interface.RevogrViewportScrollCustomEvent.md)\<[`ViewPortScrollEvent`](TypeAlias.ViewPortScrollEvent.md)\>) => `void` | Silently scroll to coordinate Made to align negative coordinates for mobile devices | [src/components.d.ts:2220](https://github.com/revolist/revogrid/blob/97bf2134af01be0f2e3e5ac6768e7a2e7070a947/src/components.d.ts#L2220) |
| `rowHeader?` | `boolean` | Enable row header | [src/components.d.ts:2224](https://github.com/revolist/revogrid/blob/97bf2134af01be0f2e3e5ac6768e7a2e7070a947/src/components.d.ts#L2224) |
