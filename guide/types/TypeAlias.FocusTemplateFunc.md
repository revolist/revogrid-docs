[RevoGrid Documentation v4.23.16](README.md) / FocusTemplateFunc

# Type Alias: FocusTemplateFunc()

```ts
type FocusTemplateFunc: (createElement: HyperFunc<VNode>, detail: FocusRenderEvent) => any;
```

`FocusTemplateFunc` is a function that takes an HTML tag or component, and
returns a JSX element. This function is used to create JSX elements in a
context where JSX is not valid.

## Parameters

| Parameter | Type |
| ------ | ------ |
| `createElement` | [`HyperFunc`](Interface.HyperFunc.md)\<[`VNode`](Interface.VNode.md)\> |
| `detail` | [`FocusRenderEvent`](Interface.FocusRenderEvent.md) |

## Returns

`any`

## Defined in

[src/types/interfaces.ts:428](https://github.com/revolist/revogrid/blob/afa54ee5117a4202f152f3480ef450775449789b/src/types/interfaces.ts#L428)
