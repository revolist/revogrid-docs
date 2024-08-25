[@revolist/revogrid](README.md) / [Components](Namespace.Components.md) / RevogrScrollVirtual

# Interface: RevogrScrollVirtual

Virtual scroll component

## Properties

| Property | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| `changeScroll` | (`e`: [`ViewPortScrollEvent`](TypeAlias.ViewPortScrollEvent.md)) => `Promise`\<[`ViewPortScrollEvent`](TypeAlias.ViewPortScrollEvent.md)\> | Update if `delta` exists in case we don't know current position or if it's external change | [src/components.d.ts:624](https://github.com/revolist/revogrid/blob/7c04a51ec5214ac7292502c14a49e3fb70d452cb/src/components.d.ts#L624) |
| `dimension` | [`DimensionType`](TypeAlias.DimensionType.md) | Scroll dimension (`X` - `rgCol` or `Y` - `rgRow`) | [src/components.d.ts:628](https://github.com/revolist/revogrid/blob/7c04a51ec5214ac7292502c14a49e3fb70d452cb/src/components.d.ts#L628) |
| `dimensionStore` | [`Observable`](TypeAlias.Observable.md)\<[`DimensionSettingsState`](Interface.DimensionSettingsState.md)\> | Dimensions | [src/components.d.ts:632](https://github.com/revolist/revogrid/blob/7c04a51ec5214ac7292502c14a49e3fb70d452cb/src/components.d.ts#L632) |
| `setScroll` | (`e`: [`ViewPortScrollEvent`](TypeAlias.ViewPortScrollEvent.md)) => `Promise`\<`void`\> | - | [src/components.d.ts:633](https://github.com/revolist/revogrid/blob/7c04a51ec5214ac7292502c14a49e3fb70d452cb/src/components.d.ts#L633) |
| `viewportStore` | [`Observable`](TypeAlias.Observable.md)\<[`ViewportState`](Interface.ViewportState.md)\> | Viewport | [src/components.d.ts:637](https://github.com/revolist/revogrid/blob/7c04a51ec5214ac7292502c14a49e3fb70d452cb/src/components.d.ts#L637) |
