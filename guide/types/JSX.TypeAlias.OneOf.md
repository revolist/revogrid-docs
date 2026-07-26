[RevoGrid Documentation v4.23.24](README.md) / [JSX](Namespace.JSX.md) / OneOf

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

[src/components.d.ts:1361](https://github.com/revolist/revogrid/blob/378ffaf8d0c296fdd666895c8f50ce7cb8d43e36/src/components.d.ts#L1361)
