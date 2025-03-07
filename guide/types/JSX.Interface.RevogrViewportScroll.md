[RevoGrid Documentation v4.13.1](README.md) / [JSX](Namespace.JSX.md) / RevogrViewportScroll

# Interface: RevogrViewportScroll

Viewport scroll component for RevoGrid

## Properties

| Property | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| `colType` | [`DimensionCols`](TypeAlias.DimensionCols.md) \| `"rowHeaders"` | - | [src/components.d.ts:2271](https://github.com/revolist/revogrid/blob/4ebc7221c475d12b7f731e54908af9eefb855c73/src/components.d.ts#L2271) |
| `contentHeight?` | `number` | Height of inner content | [src/components.d.ts:2275](https://github.com/revolist/revogrid/blob/4ebc7221c475d12b7f731e54908af9eefb855c73/src/components.d.ts#L2275) |
| `contentWidth?` | `number` | Width of inner content | [src/components.d.ts:2279](https://github.com/revolist/revogrid/blob/4ebc7221c475d12b7f731e54908af9eefb855c73/src/components.d.ts#L2279) |
| `onResizeviewport?` | (`event`: [`RevogrViewportScrollCustomEvent`](Interface.RevogrViewportScrollCustomEvent.md)\<[`ViewPortResizeEvent`](TypeAlias.ViewPortResizeEvent.md)\>) => `void` | Viewport resize | [src/components.d.ts:2283](https://github.com/revolist/revogrid/blob/4ebc7221c475d12b7f731e54908af9eefb855c73/src/components.d.ts#L2283) |
| `onScrollchange?` | (`event`: [`RevogrViewportScrollCustomEvent`](Interface.RevogrViewportScrollCustomEvent.md)\<\{ `hasScroll`: `boolean`; `type`: [`DimensionType`](TypeAlias.DimensionType.md); \}\>) => `void` | Triggered on scroll change, can be used to get information about scroll visibility | [src/components.d.ts:2287](https://github.com/revolist/revogrid/blob/4ebc7221c475d12b7f731e54908af9eefb855c73/src/components.d.ts#L2287) |
| `onScrollviewport?` | (`event`: [`RevogrViewportScrollCustomEvent`](Interface.RevogrViewportScrollCustomEvent.md)\<[`ViewPortScrollEvent`](TypeAlias.ViewPortScrollEvent.md)\>) => `void` | Before scroll event | [src/components.d.ts:2294](https://github.com/revolist/revogrid/blob/4ebc7221c475d12b7f731e54908af9eefb855c73/src/components.d.ts#L2294) |
| `onScrollviewportsilent?` | (`event`: [`RevogrViewportScrollCustomEvent`](Interface.RevogrViewportScrollCustomEvent.md)\<[`ViewPortScrollEvent`](TypeAlias.ViewPortScrollEvent.md)\>) => `void` | Silently scroll to coordinate Made to align negative coordinates for mobile devices | [src/components.d.ts:2298](https://github.com/revolist/revogrid/blob/4ebc7221c475d12b7f731e54908af9eefb855c73/src/components.d.ts#L2298) |
| `rowHeader?` | `boolean` | Enable row header | [src/components.d.ts:2302](https://github.com/revolist/revogrid/blob/4ebc7221c475d12b7f731e54908af9eefb855c73/src/components.d.ts#L2302) |
