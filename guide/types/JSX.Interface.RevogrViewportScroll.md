[@revolist/revogrid](README.md) / [JSX](Namespace.JSX.md) / RevogrViewportScroll

# Interface: RevogrViewportScroll

Viewport scroll component for RevoGrid

## Properties

| Property | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| `colType` | [`DimensionCols`](TypeAlias.DimensionCols.md) \| `"rowHeaders"` | - | [src/components.d.ts:2092](https://github.com/revolist/revogrid/blob/04dd894203fb683ca28026a56e8b7c79feca958d/src/components.d.ts#L2092) |
| `contentHeight?` | `number` | Height of inner content | [src/components.d.ts:2096](https://github.com/revolist/revogrid/blob/04dd894203fb683ca28026a56e8b7c79feca958d/src/components.d.ts#L2096) |
| `contentWidth?` | `number` | Width of inner content | [src/components.d.ts:2100](https://github.com/revolist/revogrid/blob/04dd894203fb683ca28026a56e8b7c79feca958d/src/components.d.ts#L2100) |
| `onResizeviewport?` | (`event`: [`RevogrViewportScrollCustomEvent`](Interface.RevogrViewportScrollCustomEvent.md)\<[`ViewPortResizeEvent`](TypeAlias.ViewPortResizeEvent.md)\>) => `void` | Viewport resize | [src/components.d.ts:2104](https://github.com/revolist/revogrid/blob/04dd894203fb683ca28026a56e8b7c79feca958d/src/components.d.ts#L2104) |
| `onScrollchange?` | (`event`: [`RevogrViewportScrollCustomEvent`](Interface.RevogrViewportScrollCustomEvent.md)\<\{ `hasScroll`: `boolean`; `type`: [`DimensionType`](TypeAlias.DimensionType.md); \}\>) => `void` | Triggered on scroll change, can be used to get information about scroll visibility | [src/components.d.ts:2108](https://github.com/revolist/revogrid/blob/04dd894203fb683ca28026a56e8b7c79feca958d/src/components.d.ts#L2108) |
| `onScrollviewport?` | (`event`: [`RevogrViewportScrollCustomEvent`](Interface.RevogrViewportScrollCustomEvent.md)\<[`ViewPortScrollEvent`](TypeAlias.ViewPortScrollEvent.md)\>) => `void` | Before scroll event | [src/components.d.ts:2115](https://github.com/revolist/revogrid/blob/04dd894203fb683ca28026a56e8b7c79feca958d/src/components.d.ts#L2115) |
| `onScrollviewportsilent?` | (`event`: [`RevogrViewportScrollCustomEvent`](Interface.RevogrViewportScrollCustomEvent.md)\<[`ViewPortScrollEvent`](TypeAlias.ViewPortScrollEvent.md)\>) => `void` | Silently scroll to coordinate Made to align negative coordinates for mobile devices | [src/components.d.ts:2119](https://github.com/revolist/revogrid/blob/04dd894203fb683ca28026a56e8b7c79feca958d/src/components.d.ts#L2119) |
| `rowHeader?` | `boolean` | Enable row header | [src/components.d.ts:2123](https://github.com/revolist/revogrid/blob/04dd894203fb683ca28026a56e8b7c79feca958d/src/components.d.ts#L2123) |
