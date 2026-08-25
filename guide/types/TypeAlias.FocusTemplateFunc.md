[RevoGrid Documentation v4.26.2](README.md) / FocusTemplateFunc

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

[src/types/interfaces.ts:431](https://github.com/revolist/revogrid/blob/3228e771269f05d2ed0b0d9b7dd71866fcd26d2d/src/types/interfaces.ts#L431)
