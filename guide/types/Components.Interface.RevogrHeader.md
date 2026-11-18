[RevoGrid Documentation v4.31.5](README.md) / [Components](Namespace.Components.md) / RevogrHeader

# Interface: RevogrHeader

## Properties

| Property | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| `accessible` | `boolean` | Enable accessible header semantics. **Default** `false` | [src/components.d.ts:584](https://github.com/revolist/revogrid/blob/e9c07f63dbf4f45ec2f24fd771a247f1a20d1802/src/components.d.ts#L584) |
| `additionalData` | `any` | Extra properties to pass into header renderer, such as vue or react components to handle parent **Default** `{}` | [src/components.d.ts:589](https://github.com/revolist/revogrid/blob/e9c07f63dbf4f45ec2f24fd771a247f1a20d1802/src/components.d.ts#L589) |
| `canResize` | `boolean` | If columns can be resized | [src/components.d.ts:593](https://github.com/revolist/revogrid/blob/e9c07f63dbf4f45ec2f24fd771a247f1a20d1802/src/components.d.ts#L593) |
| `colData` | [`ColumnRegular`](Interface.ColumnRegular.md)\<[`ColumnProp`](TypeAlias.ColumnProp.md), [`DataType`](TypeAlias.DataType.md)\<`any`, [`ColumnProp`](TypeAlias.ColumnProp.md)\>\>[] | Columns - defines an array of grid columns. | [src/components.d.ts:597](https://github.com/revolist/revogrid/blob/e9c07f63dbf4f45ec2f24fd771a247f1a20d1802/src/components.d.ts#L597) |
| `columnFilter` | `boolean` | Column filter | [src/components.d.ts:601](https://github.com/revolist/revogrid/blob/e9c07f63dbf4f45ec2f24fd771a247f1a20d1802/src/components.d.ts#L601) |
| `dimensionCol` | [`Observable`](TypeAlias.Observable.md)\<[`DimensionSettingsState`](Interface.DimensionSettingsState.md)\> | Dimension settings X | [src/components.d.ts:605](https://github.com/revolist/revogrid/blob/e9c07f63dbf4f45ec2f24fd771a247f1a20d1802/src/components.d.ts#L605) |
| `groupingDepth` | `number` | Grouping depth, how many levels of grouping **Default** `0` | [src/components.d.ts:610](https://github.com/revolist/revogrid/blob/e9c07f63dbf4f45ec2f24fd771a247f1a20d1802/src/components.d.ts#L610) |
| `groups` | [`Groups`](TypeAlias.Groups.md) | Column groups | [src/components.d.ts:614](https://github.com/revolist/revogrid/blob/e9c07f63dbf4f45ec2f24fd771a247f1a20d1802/src/components.d.ts#L614) |
| `headerRowIndices?` | [`HeaderRowIndices`](TypeAlias.HeaderRowIndices.md) | Logical ARIA row indices shared by the column panes. | [src/components.d.ts:618](https://github.com/revolist/revogrid/blob/e9c07f63dbf4f45ec2f24fd771a247f1a20d1802/src/components.d.ts#L618) |
| `readonly` | `boolean` | Readonly mode | [src/components.d.ts:622](https://github.com/revolist/revogrid/blob/e9c07f63dbf4f45ec2f24fd771a247f1a20d1802/src/components.d.ts#L622) |
| `resizeHandler` | ( \| `"r"` \| `"b"` \| `"rt"` \| `"lt"` \| `"rb"` \| `"lb"` \| `"l"` \| `"t"`)[] | Defines resize position | [src/components.d.ts:626](https://github.com/revolist/revogrid/blob/e9c07f63dbf4f45ec2f24fd771a247f1a20d1802/src/components.d.ts#L626) |
| `selectionStore` | [`Observable`](TypeAlias.Observable.md)\<[`SelectionStoreState`](TypeAlias.SelectionStoreState.md)\> | Selection, range, focus | [src/components.d.ts:630](https://github.com/revolist/revogrid/blob/e9c07f63dbf4f45ec2f24fd771a247f1a20d1802/src/components.d.ts#L630) |
| `type` | [`DimensionCols`](TypeAlias.DimensionCols.md) \| `"rowHeaders"` | Column type | [src/components.d.ts:634](https://github.com/revolist/revogrid/blob/e9c07f63dbf4f45ec2f24fd771a247f1a20d1802/src/components.d.ts#L634) |
| `viewportCol` | [`Observable`](TypeAlias.Observable.md)\<[`ViewportState`](Interface.ViewportState.md)\> | Viewport X | [src/components.d.ts:638](https://github.com/revolist/revogrid/blob/e9c07f63dbf4f45ec2f24fd771a247f1a20d1802/src/components.d.ts#L638) |
