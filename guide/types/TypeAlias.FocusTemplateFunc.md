[@revolist/revogrid](README.md) / FocusTemplateFunc

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

[src/types/interfaces.ts:377](https://github.com/revolist/revogrid/blob/b38c1177864e6fa9f2bec506ea55d1b2f7e35679/src/types/interfaces.ts#L377)
