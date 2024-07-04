[@revolist/revogrid](README.md) / FocusRenderEvent

# Interface: FocusRenderEvent

Represents the event object that is emitted before focus rendering.
It includes information about the dimension type and range area.

## Extends

- [`AllDimensionType`](Interface.AllDimensionType.md)

## Properties

| Property | Type | Description | Inherited from | Defined in |
| ------ | ------ | ------ | ------ | ------ |
| `colType` | [`DimensionCols`](TypeAlias.DimensionCols.md) | Represents the dimension type for columns. | [`AllDimensionType`](Interface.AllDimensionType.md).`colType` | [src/types/interfaces.ts:727](https://github.com/revolist/revogrid/blob/4056bfa6a410a4e819b4e23d2047ed6d5d60c1ea/src/types/interfaces.ts#L727) |
| `next?` | `Partial`\<[`Cell`](Interface.Cell.md)\> | Represents the next cell to focus. | - | [src/types/interfaces.ts:749](https://github.com/revolist/revogrid/blob/4056bfa6a410a4e819b4e23d2047ed6d5d60c1ea/src/types/interfaces.ts#L749) |
| `range` | [`RangeArea`](TypeAlias.RangeArea.md) | Represents the range area of the focus. | - | [src/types/interfaces.ts:744](https://github.com/revolist/revogrid/blob/4056bfa6a410a4e819b4e23d2047ed6d5d60c1ea/src/types/interfaces.ts#L744) |
| `rowType` | [`DimensionRows`](TypeAlias.DimensionRows.md) | Represents the dimension type for rows. | [`AllDimensionType`](Interface.AllDimensionType.md).`rowType` | [src/types/interfaces.ts:722](https://github.com/revolist/revogrid/blob/4056bfa6a410a4e819b4e23d2047ed6d5d60c1ea/src/types/interfaces.ts#L722) |
