[RevoGrid Documentation v4.23.11](README.md) / [JSX](Namespace.JSX.md) / OneOf

# Type Alias: OneOf\<K, PropT, AttrT\>

```ts
type OneOf<K, PropT, AttrT>: { [P in K]: PropT } & { [P in `attr:${K}` | `prop:${K}`]?: never } | { [P in `attr:${K}`]: AttrT } & { [P in K | `prop:${K}`]?: never } | { [P in `prop:${K}`]: PropT } & { [P in K | `attr:${K}`]?: never };
```

## Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `K` *extends* `string` | - |
| `PropT` | - |
| `AttrT` | `PropT` |

## Defined in

[src/components.d.ts:1355](https://github.com/revolist/revogrid/blob/f395a0413c5a19651688edda4523592251ea55cc/src/components.d.ts#L1355)
