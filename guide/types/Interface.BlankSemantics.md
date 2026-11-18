[RevoGrid Documentation v4.31.5](README.md) / BlankSemantics

# Interface: BlankSemantics

Configures which source values are treated as blank by blank operators.

## Properties

| Property | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| `emptyArray?` | `boolean` | - | [src/plugins/filter/filter.types.ts:73](https://github.com/revolist/revogrid/blob/e9c07f63dbf4f45ec2f24fd771a247f1a20d1802/src/plugins/filter/filter.types.ts#L73) |
| `emptyString?` | `boolean` | - | [src/plugins/filter/filter.types.ts:71](https://github.com/revolist/revogrid/blob/e9c07f63dbf4f45ec2f24fd771a247f1a20d1802/src/plugins/filter/filter.types.ts#L71) |
| `isBlank?` | (`value`: `any`, `context`: [`FilterEvaluationContext`](Interface.FilterEvaluationContext.md)\<[`DataType`](TypeAlias.DataType.md), [`ColumnRegular`](Interface.ColumnRegular.md)\<[`ColumnProp`](TypeAlias.ColumnProp.md), [`DataType`](TypeAlias.DataType.md)\<`any`, [`ColumnProp`](TypeAlias.ColumnProp.md)\>\>\>, `fallbackResult`: `boolean`) => `boolean` | Final application override, evaluated after the configured fallback. | [src/plugins/filter/filter.types.ts:76](https://github.com/revolist/revogrid/blob/e9c07f63dbf4f45ec2f24fd771a247f1a20d1802/src/plugins/filter/filter.types.ts#L76) |
| `missingProperty?` | `boolean` | - | [src/plugins/filter/filter.types.ts:74](https://github.com/revolist/revogrid/blob/e9c07f63dbf4f45ec2f24fd771a247f1a20d1802/src/plugins/filter/filter.types.ts#L74) |
| `null?` | `boolean` | - | [src/plugins/filter/filter.types.ts:69](https://github.com/revolist/revogrid/blob/e9c07f63dbf4f45ec2f24fd771a247f1a20d1802/src/plugins/filter/filter.types.ts#L69) |
| `undefined?` | `boolean` | - | [src/plugins/filter/filter.types.ts:70](https://github.com/revolist/revogrid/blob/e9c07f63dbf4f45ec2f24fd771a247f1a20d1802/src/plugins/filter/filter.types.ts#L70) |
| `whitespaceOnlyString?` | `boolean` | - | [src/plugins/filter/filter.types.ts:72](https://github.com/revolist/revogrid/blob/e9c07f63dbf4f45ec2f24fd771a247f1a20d1802/src/plugins/filter/filter.types.ts#L72) |
