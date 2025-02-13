[RevoGrid Documentation v4.12.1](README.md) / [Components](Namespace.Components.md) / RevogrViewportScroll

# Interface: RevogrViewportScroll

Viewport scroll component for RevoGrid

## Properties

| Property | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| `applyScroll` | (`type`: [`DimensionType`](TypeAlias.DimensionType.md), `e`: `UIEvent`) => `Promise`\<`void`\> | Extra layer for scroll event monitoring, where MouseWheel event is not passing We need to trigger scroll event in case there is no mousewheel event | [src/components.d.ts:710](https://github.com/revolist/revogrid/blob/d509c0063a76a472726c991b21f1c163442771b4/src/components.d.ts#L710) |
| `changeScroll` | (`e`: [`ViewPortScrollEvent`](TypeAlias.ViewPortScrollEvent.md), `silent`?: `boolean`) => `Promise`\<`undefined` \| [`ViewPortScrollEvent`](TypeAlias.ViewPortScrollEvent.md)\> | update on delta in case we don't know existing position or external change | [src/components.d.ts:715](https://github.com/revolist/revogrid/blob/d509c0063a76a472726c991b21f1c163442771b4/src/components.d.ts#L715) |
| `colType` | [`DimensionCols`](TypeAlias.DimensionCols.md) \| `"rowHeaders"` | - | [src/components.d.ts:716](https://github.com/revolist/revogrid/blob/d509c0063a76a472726c991b21f1c163442771b4/src/components.d.ts#L716) |
| `contentHeight` | `number` | Height of inner content | [src/components.d.ts:720](https://github.com/revolist/revogrid/blob/d509c0063a76a472726c991b21f1c163442771b4/src/components.d.ts#L720) |
| `contentWidth` | `number` | Width of inner content | [src/components.d.ts:724](https://github.com/revolist/revogrid/blob/d509c0063a76a472726c991b21f1c163442771b4/src/components.d.ts#L724) |
| `rowHeader` | `boolean` | Enable row header | [src/components.d.ts:728](https://github.com/revolist/revogrid/blob/d509c0063a76a472726c991b21f1c163442771b4/src/components.d.ts#L728) |
| `setScroll` | (`e`: [`ViewPortScrollEvent`](TypeAlias.ViewPortScrollEvent.md)) => `Promise`\<`void`\> | - | [src/components.d.ts:729](https://github.com/revolist/revogrid/blob/d509c0063a76a472726c991b21f1c163442771b4/src/components.d.ts#L729) |
