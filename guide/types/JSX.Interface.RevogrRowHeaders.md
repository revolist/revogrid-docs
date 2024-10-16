[@revolist/revogrid](README.md) / [JSX](Namespace.JSX.md) / RevogrRowHeaders

# Interface: RevogrRowHeaders

Row headers component
Visible on the left side of the table

## Properties

| Property | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| `additionalData?` | `any` | Additional data to pass to renderer | [src/components.d.ts:2176](https://github.com/revolist/revogrid/blob/ff1c29109648eb0543e674392be7b9af90d92acc/src/components.d.ts#L2176) |
| `dataPorts?` | [`ViewportData`](TypeAlias.ViewportData.md)[] | Viewport data | [src/components.d.ts:2180](https://github.com/revolist/revogrid/blob/ff1c29109648eb0543e674392be7b9af90d92acc/src/components.d.ts#L2180) |
| `headerProp?` | `Record`\<`string`, `any`\> | Header props | [src/components.d.ts:2184](https://github.com/revolist/revogrid/blob/ff1c29109648eb0543e674392be7b9af90d92acc/src/components.d.ts#L2184) |
| `height?` | `number` | Header height to setup row headers | [src/components.d.ts:2188](https://github.com/revolist/revogrid/blob/ff1c29109648eb0543e674392be7b9af90d92acc/src/components.d.ts#L2188) |
| `jobsBeforeRender?` | `Promise`\<`any`\>[] | Prevent rendering until job is done. Can be used for initial rendering performance improvement. When several plugins require initial rendering this will prevent double initial rendering. | [src/components.d.ts:2192](https://github.com/revolist/revogrid/blob/ff1c29109648eb0543e674392be7b9af90d92acc/src/components.d.ts#L2192) |
| `onRef?` | (`event`: [`RevogrRowHeadersCustomEvent`](Interface.RevogrRowHeadersCustomEvent.md)\<[`ElementScroll`](Interface.ElementScroll.md)\>) => `void` | Register element to scroll | [src/components.d.ts:2196](https://github.com/revolist/revogrid/blob/ff1c29109648eb0543e674392be7b9af90d92acc/src/components.d.ts#L2196) |
| `onScrollview?` | (`event`: [`RevogrRowHeadersCustomEvent`](Interface.RevogrRowHeadersCustomEvent.md)\<[`ViewPortScrollEvent`](TypeAlias.ViewPortScrollEvent.md)\>) => `void` | Scroll viewport | [src/components.d.ts:2200](https://github.com/revolist/revogrid/blob/ff1c29109648eb0543e674392be7b9af90d92acc/src/components.d.ts#L2200) |
| `resize?` | `boolean` | Enable resize | [src/components.d.ts:2204](https://github.com/revolist/revogrid/blob/ff1c29109648eb0543e674392be7b9af90d92acc/src/components.d.ts#L2204) |
| `rowClass?` | `string` | Row class | [src/components.d.ts:2208](https://github.com/revolist/revogrid/blob/ff1c29109648eb0543e674392be7b9af90d92acc/src/components.d.ts#L2208) |
| `rowHeaderColumn?` | [`RowHeaders`](Interface.RowHeaders.md) | Row header column | [src/components.d.ts:2212](https://github.com/revolist/revogrid/blob/ff1c29109648eb0543e674392be7b9af90d92acc/src/components.d.ts#L2212) |
