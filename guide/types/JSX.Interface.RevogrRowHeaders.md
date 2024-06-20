[@revolist/revogrid](README.md) / [JSX](Namespace.JSX.md) / RevogrRowHeaders

# Interface: RevogrRowHeaders

Row headers component
Visible on the left side of the table

## Properties

| Property | Type | Description |
| :------ | :------ | :------ |
| `additionalData?` | `any` | Additional data to pass to renderer |
| `dataPorts?` | [`ViewportData`](Type.ViewportData.md)[] | Viewport data |
| `headerProp?` | `Record`\<`string`, `any`\> | Header props |
| `height?` | `number` | Header height to setup row headers |
| `jobsBeforeRender?` | `Promise`\<`any`\>[] | Prevent rendering until job is done. Can be used for initial rendering performance improvement. When several plugins require initial rendering this will prevent double initial rendering. |
| `onRef?` | (`event`: [`RevogrRowHeadersCustomEvent`](Interface.RevogrRowHeadersCustomEvent.md)\<[`ElementScroll`](Interface.ElementScroll.md)\>) => `void` | Register element to scroll |
| `onScrollview?` | (`event`: [`RevogrRowHeadersCustomEvent`](Interface.RevogrRowHeadersCustomEvent.md)\<[`ViewPortScrollEvent`](Type.ViewPortScrollEvent.md)\>) => `void` | Scroll viewport |
| `resize?` | `boolean` | Enable resize |
| `rowClass?` | `string` | Row class |
| `rowHeaderColumn?` | [`RowHeaders`](Interface.RowHeaders.md) | Row header column |
