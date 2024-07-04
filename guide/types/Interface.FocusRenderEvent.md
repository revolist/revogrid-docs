[@revolist/revogrid](README.md) / FocusRenderEvent

# Interface: FocusRenderEvent

Represents the event object that is emitted before focus rendering.
It includes information about the dimension type and range area.

## Extends

- [`AllDimensionType`](Interface.AllDimensionType.md)

## Properties

| Property | Type | Description | Inherited from | Defined in |
| ------ | ------ | ------ | ------ | ------ |
| `colType` | [`DimensionCols`](TypeAlias.DimensionCols.md) | Represents the dimension type for columns. | [`AllDimensionType`](Interface.AllDimensionType.md).`colType` | [src/types/interfaces.ts:727](https://github.com/revolist/revogrid/blob/5b9d5acc12b1e8b58b94bf47dcbc001b6b394655/src/types/interfaces.ts#L727) |
| `next?` | `Partial`\<[`Cell`](Interface.Cell.md)\> | Represents the next cell to focus. | - | [src/types/interfaces.ts:749](https://github.com/revolist/revogrid/blob/5b9d5acc12b1e8b58b94bf47dcbc001b6b394655/src/types/interfaces.ts#L749) |
| `range` | [`RangeArea`](TypeAlias.RangeArea.md) | Represents the range area of the focus. | - | [src/types/interfaces.ts:744](https://github.com/revolist/revogrid/blob/5b9d5acc12b1e8b58b94bf47dcbc001b6b394655/src/types/interfaces.ts#L744) |
| `rowType` | [`DimensionRows`](TypeAlias.DimensionRows.md) | Represents the dimension type for rows. | [`AllDimensionType`](Interface.AllDimensionType.md).`rowType` | [src/types/interfaces.ts:722](https://github.com/revolist/revogrid/blob/5b9d5acc12b1e8b58b94bf47dcbc001b6b394655/src/types/interfaces.ts#L722) |
