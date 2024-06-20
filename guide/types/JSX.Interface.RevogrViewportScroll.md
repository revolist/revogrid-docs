[@revolist/revogrid](README.md) / [JSX](Namespace.JSX.md) / RevogrViewportScroll

# Interface: RevogrViewportScroll

Viewport scroll component for RevoGrid

## Properties

| Property | Type | Description |
| :------ | :------ | :------ |
| `colType` | [`DimensionCols`](Type.DimensionCols.md) \| `"rowHeaders"` | - |
| `contentHeight?` | `number` | Height of inner content |
| `contentWidth?` | `number` | Width of inner content |
| `onResizeviewport?` | (`event`: [`RevogrViewportScrollCustomEvent`](Interface.RevogrViewportScrollCustomEvent.md)\<[`ViewPortResizeEvent`](Type.ViewPortResizeEvent.md)\>) => `void` | Viewport resize |
| `onScrollchange?` | (`event`: [`RevogrViewportScrollCustomEvent`](Interface.RevogrViewportScrollCustomEvent.md)\<\{ `hasScroll`: `boolean`; `type`: [`DimensionType`](Type.DimensionType.md); \}\>) => `void` | Triggered on scroll change, can be used to get information about scroll visibility |
| `onScrollviewport?` | (`event`: [`RevogrViewportScrollCustomEvent`](Interface.RevogrViewportScrollCustomEvent.md)\<[`ViewPortScrollEvent`](Type.ViewPortScrollEvent.md)\>) => `void` | Before scroll event |
| `onScrollviewportsilent?` | (`event`: [`RevogrViewportScrollCustomEvent`](Interface.RevogrViewportScrollCustomEvent.md)\<[`ViewPortScrollEvent`](Type.ViewPortScrollEvent.md)\>) => `void` | Silently scroll to coordinate Made to align negative coordinates for mobile devices |
| `rowHeader?` | `boolean` | Enable row header |
