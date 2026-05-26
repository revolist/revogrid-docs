[RevoGrid Documentation v4.23.2](README.md) / [JSX](Namespace.JSX.md) / OneOf

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

[src/components.d.ts:1355](https://github.com/revolist/revogrid/blob/2ab297309bca72a9ee6de7e26f5f41940fbe0414/src/components.d.ts#L1355)
