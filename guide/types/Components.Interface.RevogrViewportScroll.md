[@revolist/revogrid](README.md) / [Components](Namespace.Components.md) / RevogrViewportScroll

# Interface: RevogrViewportScroll

Viewport scroll component for RevoGrid

## Properties

| Property | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| `applyScroll` | (`type`: [`DimensionType`](TypeAlias.DimensionType.md), `e`: `UIEvent`) => `Promise`\<`void`\> | Extra layer for scroll event monitoring, where MouseWheel event is not passing We need to trigger scroll event in case there is no mousewheel event | [src/components.d.ts:683](https://github.com/revolist/revogrid/blob/834ef2bcc7d11d36bb9e66716a7f07087a633494/src/components.d.ts#L683) |
| `changeScroll` | (`e`: [`ViewPortScrollEvent`](TypeAlias.ViewPortScrollEvent.md), `silent`?: `boolean`) => `Promise`\<`undefined` \| [`ViewPortScrollEvent`](TypeAlias.ViewPortScrollEvent.md)\> | update on delta in case we don't know existing position or external change | [src/components.d.ts:688](https://github.com/revolist/revogrid/blob/834ef2bcc7d11d36bb9e66716a7f07087a633494/src/components.d.ts#L688) |
| `colType` | [`DimensionCols`](TypeAlias.DimensionCols.md) \| `"rowHeaders"` | - | [src/components.d.ts:689](https://github.com/revolist/revogrid/blob/834ef2bcc7d11d36bb9e66716a7f07087a633494/src/components.d.ts#L689) |
| `contentHeight` | `number` | Height of inner content | [src/components.d.ts:693](https://github.com/revolist/revogrid/blob/834ef2bcc7d11d36bb9e66716a7f07087a633494/src/components.d.ts#L693) |
| `contentWidth` | `number` | Width of inner content | [src/components.d.ts:697](https://github.com/revolist/revogrid/blob/834ef2bcc7d11d36bb9e66716a7f07087a633494/src/components.d.ts#L697) |
| `rowHeader` | `boolean` | Enable row header | [src/components.d.ts:701](https://github.com/revolist/revogrid/blob/834ef2bcc7d11d36bb9e66716a7f07087a633494/src/components.d.ts#L701) |
| `setScroll` | (`e`: [`ViewPortScrollEvent`](TypeAlias.ViewPortScrollEvent.md)) => `Promise`\<`void`\> | - | [src/components.d.ts:702](https://github.com/revolist/revogrid/blob/834ef2bcc7d11d36bb9e66716a7f07087a633494/src/components.d.ts#L702) |
