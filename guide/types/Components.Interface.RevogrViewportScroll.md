[@revolist/revogrid](README.md) / [Components](Namespace.Components.md) / RevogrViewportScroll

# Interface: RevogrViewportScroll

Viewport scroll component for RevoGrid

## Properties

| Property | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| `applyScroll` | (`type`: [`DimensionType`](TypeAlias.DimensionType.md), `e`: `UIEvent`) => `Promise`\<`void`\> | Extra layer for scroll event monitoring, where MouseWheel event is not passing We need to trigger scroll event in case there is no mousewheel event | [src/components.d.ts:701](https://github.com/revolist/revogrid/blob/825821baadfa2debcf4d39f08d4e13cf00eca4b8/src/components.d.ts#L701) |
| `changeScroll` | (`e`: [`ViewPortScrollEvent`](TypeAlias.ViewPortScrollEvent.md), `silent`?: `boolean`) => `Promise`\<`undefined` \| [`ViewPortScrollEvent`](TypeAlias.ViewPortScrollEvent.md)\> | update on delta in case we don't know existing position or external change | [src/components.d.ts:706](https://github.com/revolist/revogrid/blob/825821baadfa2debcf4d39f08d4e13cf00eca4b8/src/components.d.ts#L706) |
| `colType` | [`DimensionCols`](TypeAlias.DimensionCols.md) \| `"rowHeaders"` | - | [src/components.d.ts:707](https://github.com/revolist/revogrid/blob/825821baadfa2debcf4d39f08d4e13cf00eca4b8/src/components.d.ts#L707) |
| `contentHeight` | `number` | Height of inner content | [src/components.d.ts:711](https://github.com/revolist/revogrid/blob/825821baadfa2debcf4d39f08d4e13cf00eca4b8/src/components.d.ts#L711) |
| `contentWidth` | `number` | Width of inner content | [src/components.d.ts:715](https://github.com/revolist/revogrid/blob/825821baadfa2debcf4d39f08d4e13cf00eca4b8/src/components.d.ts#L715) |
| `rowHeader` | `boolean` | Enable row header | [src/components.d.ts:719](https://github.com/revolist/revogrid/blob/825821baadfa2debcf4d39f08d4e13cf00eca4b8/src/components.d.ts#L719) |
| `setScroll` | (`e`: [`ViewPortScrollEvent`](TypeAlias.ViewPortScrollEvent.md)) => `Promise`\<`void`\> | - | [src/components.d.ts:720](https://github.com/revolist/revogrid/blob/825821baadfa2debcf4d39f08d4e13cf00eca4b8/src/components.d.ts#L720) |
