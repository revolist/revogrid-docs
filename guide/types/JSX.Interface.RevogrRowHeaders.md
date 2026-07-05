[RevoGrid Documentation v4.23.20](README.md) / [JSX](Namespace.JSX.md) / RevogrRowHeaders

# Interface: RevogrRowHeaders

Row headers component
Visible on the left side of the table

## Properties

| Property | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| `additionalData?` | `any` | Additional data to pass to renderer | [src/components.d.ts:2363](https://github.com/revolist/revogrid/blob/0426d53a46c1f3da5ce6b3adf7d65996494f6b42/src/components.d.ts#L2363) |
| `dataPorts?` | [`ViewportData`](TypeAlias.ViewportData.md)[] | Viewport data | [src/components.d.ts:2367](https://github.com/revolist/revogrid/blob/0426d53a46c1f3da5ce6b3adf7d65996494f6b42/src/components.d.ts#L2367) |
| `headerProp?` | `Record`\<`string`, `any`\> | Header props | [src/components.d.ts:2371](https://github.com/revolist/revogrid/blob/0426d53a46c1f3da5ce6b3adf7d65996494f6b42/src/components.d.ts#L2371) |
| `height?` | `number` | Header height to setup row headers | [src/components.d.ts:2375](https://github.com/revolist/revogrid/blob/0426d53a46c1f3da5ce6b3adf7d65996494f6b42/src/components.d.ts#L2375) |
| `jobsBeforeRender?` | `Promise`\<`any`\>[] | Prevent rendering until job is done. Can be used for initial rendering performance improvement. When several plugins require initial rendering this will prevent double initial rendering. **Default** `[]` | [src/components.d.ts:2380](https://github.com/revolist/revogrid/blob/0426d53a46c1f3da5ce6b3adf7d65996494f6b42/src/components.d.ts#L2380) |
| `onRef?` | (`event`: [`RevogrRowHeadersCustomEvent`](Interface.RevogrRowHeadersCustomEvent.md)\<[`ElementScroll`](Interface.ElementScroll.md)\>) => `void` | Register element to scroll | [src/components.d.ts:2384](https://github.com/revolist/revogrid/blob/0426d53a46c1f3da5ce6b3adf7d65996494f6b42/src/components.d.ts#L2384) |
| `onScrollview?` | (`event`: [`RevogrRowHeadersCustomEvent`](Interface.RevogrRowHeadersCustomEvent.md)\<[`ViewPortScrollEvent`](TypeAlias.ViewPortScrollEvent.md)\>) => `void` | Scroll viewport | [src/components.d.ts:2388](https://github.com/revolist/revogrid/blob/0426d53a46c1f3da5ce6b3adf7d65996494f6b42/src/components.d.ts#L2388) |
| `resize?` | `boolean` | Enable resize | [src/components.d.ts:2392](https://github.com/revolist/revogrid/blob/0426d53a46c1f3da5ce6b3adf7d65996494f6b42/src/components.d.ts#L2392) |
| `rowClass?` | `string` | Row class | [src/components.d.ts:2396](https://github.com/revolist/revogrid/blob/0426d53a46c1f3da5ce6b3adf7d65996494f6b42/src/components.d.ts#L2396) |
| `rowHeaderColumn?` | [`RowHeaders`](Interface.RowHeaders.md) | Row header column | [src/components.d.ts:2400](https://github.com/revolist/revogrid/blob/0426d53a46c1f3da5ce6b3adf7d65996494f6b42/src/components.d.ts#L2400) |
