[@revolist/revogrid](README.md) / [JSX](Namespace.JSX.md) / RevogrRowHeaders

# Interface: RevogrRowHeaders

Row headers component
Visible on the left side of the table

## Properties

| Property | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| `additionalData?` | `any` | Additional data to pass to renderer | [src/components.d.ts:2022](https://github.com/revolist/revogrid/blob/1ed53ebfdb262e9a8c2e5e06c64cb87ad0050ffc/src/components.d.ts#L2022) |
| `dataPorts?` | [`ViewportData`](TypeAlias.ViewportData.md)[] | Viewport data | [src/components.d.ts:2026](https://github.com/revolist/revogrid/blob/1ed53ebfdb262e9a8c2e5e06c64cb87ad0050ffc/src/components.d.ts#L2026) |
| `headerProp?` | `Record`\<`string`, `any`\> | Header props | [src/components.d.ts:2030](https://github.com/revolist/revogrid/blob/1ed53ebfdb262e9a8c2e5e06c64cb87ad0050ffc/src/components.d.ts#L2030) |
| `height?` | `number` | Header height to setup row headers | [src/components.d.ts:2034](https://github.com/revolist/revogrid/blob/1ed53ebfdb262e9a8c2e5e06c64cb87ad0050ffc/src/components.d.ts#L2034) |
| `jobsBeforeRender?` | `Promise`\<`any`\>[] | Prevent rendering until job is done. Can be used for initial rendering performance improvement. When several plugins require initial rendering this will prevent double initial rendering. | [src/components.d.ts:2038](https://github.com/revolist/revogrid/blob/1ed53ebfdb262e9a8c2e5e06c64cb87ad0050ffc/src/components.d.ts#L2038) |
| `onRef?` | (`event`: [`RevogrRowHeadersCustomEvent`](Interface.RevogrRowHeadersCustomEvent.md)\<[`ElementScroll`](Interface.ElementScroll.md)\>) => `void` | Register element to scroll | [src/components.d.ts:2042](https://github.com/revolist/revogrid/blob/1ed53ebfdb262e9a8c2e5e06c64cb87ad0050ffc/src/components.d.ts#L2042) |
| `onScrollview?` | (`event`: [`RevogrRowHeadersCustomEvent`](Interface.RevogrRowHeadersCustomEvent.md)\<[`ViewPortScrollEvent`](TypeAlias.ViewPortScrollEvent.md)\>) => `void` | Scroll viewport | [src/components.d.ts:2046](https://github.com/revolist/revogrid/blob/1ed53ebfdb262e9a8c2e5e06c64cb87ad0050ffc/src/components.d.ts#L2046) |
| `resize?` | `boolean` | Enable resize | [src/components.d.ts:2050](https://github.com/revolist/revogrid/blob/1ed53ebfdb262e9a8c2e5e06c64cb87ad0050ffc/src/components.d.ts#L2050) |
| `rowClass?` | `string` | Row class | [src/components.d.ts:2054](https://github.com/revolist/revogrid/blob/1ed53ebfdb262e9a8c2e5e06c64cb87ad0050ffc/src/components.d.ts#L2054) |
| `rowHeaderColumn?` | [`RowHeaders`](Interface.RowHeaders.md) | Row header column | [src/components.d.ts:2058](https://github.com/revolist/revogrid/blob/1ed53ebfdb262e9a8c2e5e06c64cb87ad0050ffc/src/components.d.ts#L2058) |
