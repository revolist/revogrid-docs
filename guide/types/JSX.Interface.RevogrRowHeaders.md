[@revolist/revogrid](README.md) / [JSX](Namespace.JSX.md) / RevogrRowHeaders

# Interface: RevogrRowHeaders

Row headers component
Visible on the left side of the table

## Properties

| Property | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| `additionalData?` | `any` | Additional data to pass to renderer | [src/components.d.ts:2047](https://github.com/revolist/revogrid/blob/e1595e2274ede0d95fc882d4d4e21ec46b508cad/src/components.d.ts#L2047) |
| `dataPorts?` | [`ViewportData`](TypeAlias.ViewportData.md)[] | Viewport data | [src/components.d.ts:2051](https://github.com/revolist/revogrid/blob/e1595e2274ede0d95fc882d4d4e21ec46b508cad/src/components.d.ts#L2051) |
| `headerProp?` | `Record`\<`string`, `any`\> | Header props | [src/components.d.ts:2055](https://github.com/revolist/revogrid/blob/e1595e2274ede0d95fc882d4d4e21ec46b508cad/src/components.d.ts#L2055) |
| `height?` | `number` | Header height to setup row headers | [src/components.d.ts:2059](https://github.com/revolist/revogrid/blob/e1595e2274ede0d95fc882d4d4e21ec46b508cad/src/components.d.ts#L2059) |
| `jobsBeforeRender?` | `Promise`\<`any`\>[] | Prevent rendering until job is done. Can be used for initial rendering performance improvement. When several plugins require initial rendering this will prevent double initial rendering. | [src/components.d.ts:2063](https://github.com/revolist/revogrid/blob/e1595e2274ede0d95fc882d4d4e21ec46b508cad/src/components.d.ts#L2063) |
| `onRef?` | (`event`: [`RevogrRowHeadersCustomEvent`](Interface.RevogrRowHeadersCustomEvent.md)\<[`ElementScroll`](Interface.ElementScroll.md)\>) => `void` | Register element to scroll | [src/components.d.ts:2067](https://github.com/revolist/revogrid/blob/e1595e2274ede0d95fc882d4d4e21ec46b508cad/src/components.d.ts#L2067) |
| `onScrollview?` | (`event`: [`RevogrRowHeadersCustomEvent`](Interface.RevogrRowHeadersCustomEvent.md)\<[`ViewPortScrollEvent`](TypeAlias.ViewPortScrollEvent.md)\>) => `void` | Scroll viewport | [src/components.d.ts:2071](https://github.com/revolist/revogrid/blob/e1595e2274ede0d95fc882d4d4e21ec46b508cad/src/components.d.ts#L2071) |
| `resize?` | `boolean` | Enable resize | [src/components.d.ts:2075](https://github.com/revolist/revogrid/blob/e1595e2274ede0d95fc882d4d4e21ec46b508cad/src/components.d.ts#L2075) |
| `rowClass?` | `string` | Row class | [src/components.d.ts:2079](https://github.com/revolist/revogrid/blob/e1595e2274ede0d95fc882d4d4e21ec46b508cad/src/components.d.ts#L2079) |
| `rowHeaderColumn?` | [`RowHeaders`](Interface.RowHeaders.md) | Row header column | [src/components.d.ts:2083](https://github.com/revolist/revogrid/blob/e1595e2274ede0d95fc882d4d4e21ec46b508cad/src/components.d.ts#L2083) |
