[RevoGrid Documentation v4.13.4](README.md) / [JSX](Namespace.JSX.md) / RevogrViewportScroll

# Interface: RevogrViewportScroll

Viewport scroll component for RevoGrid

## Properties

| Property | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| `colType` | [`DimensionCols`](TypeAlias.DimensionCols.md) \| `"rowHeaders"` | - | [src/components.d.ts:2278](https://github.com/revolist/revogrid/blob/325e86c31155d90566dec588c08b121b0ae7657a/src/components.d.ts#L2278) |
| `contentHeight?` | `number` | Height of inner content | [src/components.d.ts:2282](https://github.com/revolist/revogrid/blob/325e86c31155d90566dec588c08b121b0ae7657a/src/components.d.ts#L2282) |
| `contentWidth?` | `number` | Width of inner content | [src/components.d.ts:2286](https://github.com/revolist/revogrid/blob/325e86c31155d90566dec588c08b121b0ae7657a/src/components.d.ts#L2286) |
| `onResizeviewport?` | (`event`: [`RevogrViewportScrollCustomEvent`](Interface.RevogrViewportScrollCustomEvent.md)\<[`ViewPortResizeEvent`](TypeAlias.ViewPortResizeEvent.md)\>) => `void` | Viewport resize | [src/components.d.ts:2290](https://github.com/revolist/revogrid/blob/325e86c31155d90566dec588c08b121b0ae7657a/src/components.d.ts#L2290) |
| `onScrollchange?` | (`event`: [`RevogrViewportScrollCustomEvent`](Interface.RevogrViewportScrollCustomEvent.md)\<\{ `hasScroll`: `boolean`; `type`: [`DimensionType`](TypeAlias.DimensionType.md); \}\>) => `void` | Triggered on scroll change, can be used to get information about scroll visibility | [src/components.d.ts:2294](https://github.com/revolist/revogrid/blob/325e86c31155d90566dec588c08b121b0ae7657a/src/components.d.ts#L2294) |
| `onScrollviewport?` | (`event`: [`RevogrViewportScrollCustomEvent`](Interface.RevogrViewportScrollCustomEvent.md)\<[`ViewPortScrollEvent`](TypeAlias.ViewPortScrollEvent.md)\>) => `void` | Before scroll event | [src/components.d.ts:2301](https://github.com/revolist/revogrid/blob/325e86c31155d90566dec588c08b121b0ae7657a/src/components.d.ts#L2301) |
| `onScrollviewportsilent?` | (`event`: [`RevogrViewportScrollCustomEvent`](Interface.RevogrViewportScrollCustomEvent.md)\<[`ViewPortScrollEvent`](TypeAlias.ViewPortScrollEvent.md)\>) => `void` | Silently scroll to coordinate Made to align negative coordinates for mobile devices | [src/components.d.ts:2305](https://github.com/revolist/revogrid/blob/325e86c31155d90566dec588c08b121b0ae7657a/src/components.d.ts#L2305) |
| `rowHeader?` | `boolean` | Enable row header | [src/components.d.ts:2309](https://github.com/revolist/revogrid/blob/325e86c31155d90566dec588c08b121b0ae7657a/src/components.d.ts#L2309) |
