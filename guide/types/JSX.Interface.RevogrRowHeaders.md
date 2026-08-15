[RevoGrid Documentation v4.25.1](README.md) / [JSX](Namespace.JSX.md) / RevogrRowHeaders

# Interface: RevogrRowHeaders

Row headers component
Visible on the left side of the table

## Properties

| Property | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| `additionalData?` | `any` | Additional data to pass to renderer | [src/components.d.ts:2393](https://github.com/revolist/revogrid/blob/d06ea5b7beb9764dab968fd781d3f71fda941337/src/components.d.ts#L2393) |
| `dataPorts?` | [`ViewportData`](TypeAlias.ViewportData.md)[] | Viewport data | [src/components.d.ts:2397](https://github.com/revolist/revogrid/blob/d06ea5b7beb9764dab968fd781d3f71fda941337/src/components.d.ts#L2397) |
| `headerProp?` | `Record`\<`string`, `any`\> | Header props | [src/components.d.ts:2401](https://github.com/revolist/revogrid/blob/d06ea5b7beb9764dab968fd781d3f71fda941337/src/components.d.ts#L2401) |
| `height?` | `number` | Header height to setup row headers | [src/components.d.ts:2405](https://github.com/revolist/revogrid/blob/d06ea5b7beb9764dab968fd781d3f71fda941337/src/components.d.ts#L2405) |
| `jobsBeforeRender?` | `Promise`\<`any`\>[] | Prevent rendering until job is done. Can be used for initial rendering performance improvement. When several plugins require initial rendering this will prevent double initial rendering. **Default** `[]` | [src/components.d.ts:2410](https://github.com/revolist/revogrid/blob/d06ea5b7beb9764dab968fd781d3f71fda941337/src/components.d.ts#L2410) |
| `onRef?` | (`event`: [`RevogrRowHeadersCustomEvent`](Interface.RevogrRowHeadersCustomEvent.md)\<[`ElementScroll`](Interface.ElementScroll.md)\>) => `void` | Register element to scroll | [src/components.d.ts:2414](https://github.com/revolist/revogrid/blob/d06ea5b7beb9764dab968fd781d3f71fda941337/src/components.d.ts#L2414) |
| `onScrollview?` | (`event`: [`RevogrRowHeadersCustomEvent`](Interface.RevogrRowHeadersCustomEvent.md)\<[`ViewPortScrollEvent`](TypeAlias.ViewPortScrollEvent.md)\>) => `void` | Scroll viewport | [src/components.d.ts:2418](https://github.com/revolist/revogrid/blob/d06ea5b7beb9764dab968fd781d3f71fda941337/src/components.d.ts#L2418) |
| `resize?` | `boolean` | Enable resize | [src/components.d.ts:2422](https://github.com/revolist/revogrid/blob/d06ea5b7beb9764dab968fd781d3f71fda941337/src/components.d.ts#L2422) |
| `rowClass?` | `string` | Row class | [src/components.d.ts:2426](https://github.com/revolist/revogrid/blob/d06ea5b7beb9764dab968fd781d3f71fda941337/src/components.d.ts#L2426) |
| `rowHeaderColumn?` | [`RowHeaders`](Interface.RowHeaders.md) | Row header column | [src/components.d.ts:2430](https://github.com/revolist/revogrid/blob/d06ea5b7beb9764dab968fd781d3f71fda941337/src/components.d.ts#L2430) |
