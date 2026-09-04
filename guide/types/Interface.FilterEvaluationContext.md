[RevoGrid Documentation v4.27.6](README.md) / FilterEvaluationContext

# Interface: FilterEvaluationContext\<TModel, TColumn\>

Source-aware context supplied while a filter predicate is evaluated.

## Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `TModel` *extends* [`DataType`](TypeAlias.DataType.md) | [`DataType`](TypeAlias.DataType.md) |
| `TColumn` *extends* [`ColumnRegular`](Interface.ColumnRegular.md) | [`ColumnRegular`](Interface.ColumnRegular.md) |

## Properties

| Property | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| `blankSemantics` | [`BlankSemantics`](Interface.BlankSemantics.md) | Effective blank policy after grid and column settings are merged. | [src/plugins/filter/filter.types.ts:64](https://github.com/revolist/revogrid/blob/83088a5efb95df5d6b5a082ad10cadaa2bdcb42b/src/plugins/filter/filter.types.ts#L64) |
| `column?` | `TColumn` | Column associated with the filter, when one is available. | [src/plugins/filter/filter.types.ts:54](https://github.com/revolist/revogrid/blob/83088a5efb95df5d6b5a082ad10cadaa2bdcb42b/src/plugins/filter/filter.types.ts#L54) |
| `hasOwnProperty` | `boolean` | Whether the property exists directly on the row model. | [src/plugins/filter/filter.types.ts:62](https://github.com/revolist/revogrid/blob/83088a5efb95df5d6b5a082ad10cadaa2bdcb42b/src/plugins/filter/filter.types.ts#L62) |
| `model` | `TModel` | Row model being evaluated. | [src/plugins/filter/filter.types.ts:52](https://github.com/revolist/revogrid/blob/83088a5efb95df5d6b5a082ad10cadaa2bdcb42b/src/plugins/filter/filter.types.ts#L52) |
| `parsedValue` | `any` | Value after the column cell parser, when configured. | [src/plugins/filter/filter.types.ts:60](https://github.com/revolist/revogrid/blob/83088a5efb95df5d6b5a082ad10cadaa2bdcb42b/src/plugins/filter/filter.types.ts#L60) |
| `property` | [`ColumnProp`](TypeAlias.ColumnProp.md) | Property the filter is evaluating. | [src/plugins/filter/filter.types.ts:56](https://github.com/revolist/revogrid/blob/83088a5efb95df5d6b5a082ad10cadaa2bdcb42b/src/plugins/filter/filter.types.ts#L56) |
| `sourceValue` | `any` | Unparsed value read from the row model. | [src/plugins/filter/filter.types.ts:58](https://github.com/revolist/revogrid/blob/83088a5efb95df5d6b5a082ad10cadaa2bdcb42b/src/plugins/filter/filter.types.ts#L58) |
