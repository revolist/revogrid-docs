[RevoGrid Documentation v4.19.2](README.md) / [JSX](Namespace.JSX.md) / RevogrViewportScroll

# Interface: RevogrViewportScroll

Viewport scroll component for RevoGrid

## Properties

| Property | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| `colType` | [`DimensionCols`](TypeAlias.DimensionCols.md) \| `"rowHeaders"` | - | [src/components.d.ts:2415](https://github.com/revolist/revogrid/blob/7388e547230456f2843749ba32fcb5583ae0fea2/src/components.d.ts#L2415) |
| `contentHeight?` | `number` | Height of inner content **Default** `0` | [src/components.d.ts:2420](https://github.com/revolist/revogrid/blob/7388e547230456f2843749ba32fcb5583ae0fea2/src/components.d.ts#L2420) |
| `contentWidth?` | `number` | Width of inner content **Default** `0` | [src/components.d.ts:2425](https://github.com/revolist/revogrid/blob/7388e547230456f2843749ba32fcb5583ae0fea2/src/components.d.ts#L2425) |
| `onResizeviewport?` | (`event`: [`RevogrViewportScrollCustomEvent`](Interface.RevogrViewportScrollCustomEvent.md)\<[`ViewPortResizeEvent`](TypeAlias.ViewPortResizeEvent.md)\>) => `void` | Viewport resize | [src/components.d.ts:2429](https://github.com/revolist/revogrid/blob/7388e547230456f2843749ba32fcb5583ae0fea2/src/components.d.ts#L2429) |
| `onScrollchange?` | (`event`: [`RevogrViewportScrollCustomEvent`](Interface.RevogrViewportScrollCustomEvent.md)\<\{ `hasScroll`: `boolean`; `type`: [`DimensionType`](TypeAlias.DimensionType.md); \}\>) => `void` | Triggered on scroll change, can be used to get information about scroll visibility | [src/components.d.ts:2433](https://github.com/revolist/revogrid/blob/7388e547230456f2843749ba32fcb5583ae0fea2/src/components.d.ts#L2433) |
| `onScrollviewport?` | (`event`: [`RevogrViewportScrollCustomEvent`](Interface.RevogrViewportScrollCustomEvent.md)\<[`ViewPortScrollEvent`](TypeAlias.ViewPortScrollEvent.md)\>) => `void` | Before scroll event | [src/components.d.ts:2440](https://github.com/revolist/revogrid/blob/7388e547230456f2843749ba32fcb5583ae0fea2/src/components.d.ts#L2440) |
| `onScrollviewportsilent?` | (`event`: [`RevogrViewportScrollCustomEvent`](Interface.RevogrViewportScrollCustomEvent.md)\<[`ViewPortScrollEvent`](TypeAlias.ViewPortScrollEvent.md)\>) => `void` | Silently scroll to coordinate Made to align negative coordinates for mobile devices | [src/components.d.ts:2444](https://github.com/revolist/revogrid/blob/7388e547230456f2843749ba32fcb5583ae0fea2/src/components.d.ts#L2444) |
| `rowHeader?` | `boolean` | Enable row header | [src/components.d.ts:2448](https://github.com/revolist/revogrid/blob/7388e547230456f2843749ba32fcb5583ae0fea2/src/components.d.ts#L2448) |
