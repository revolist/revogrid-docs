[@revolist/revogrid](README.md) / FocusRenderEvent

# Interface: FocusRenderEvent

Represents the event object that is emitted before focus rendering.
It includes information about the dimension type and range area.

## Extends

- [`AllDimensionType`](Interface.AllDimensionType.md)

## Properties

| Property | Type | Description | Inherited from | Defined in |
| ------ | ------ | ------ | ------ | ------ |
| `colType` | [`DimensionCols`](TypeAlias.DimensionCols.md) | Represents the dimension type for columns. | [`AllDimensionType`](Interface.AllDimensionType.md).`colType` | [src/types/interfaces.ts:737](https://github.com/revolist/revogrid/blob/1d7f63e049242097564b7da6ec33fe3875543951/src/types/interfaces.ts#L737) |
| `next?` | `Partial`\<[`Cell`](Interface.Cell.md)\> | Changes for the next cell to focus. **Example** `{ y: -1 }` | - | [src/types/interfaces.ts:759](https://github.com/revolist/revogrid/blob/1d7f63e049242097564b7da6ec33fe3875543951/src/types/interfaces.ts#L759) |
| `range` | [`RangeArea`](TypeAlias.RangeArea.md) | Represents the range area of the focus. | - | [src/types/interfaces.ts:754](https://github.com/revolist/revogrid/blob/1d7f63e049242097564b7da6ec33fe3875543951/src/types/interfaces.ts#L754) |
| `rowType` | [`DimensionRows`](TypeAlias.DimensionRows.md) | Represents the dimension type for rows. | [`AllDimensionType`](Interface.AllDimensionType.md).`rowType` | [src/types/interfaces.ts:732](https://github.com/revolist/revogrid/blob/1d7f63e049242097564b7da6ec33fe3875543951/src/types/interfaces.ts#L732) |
