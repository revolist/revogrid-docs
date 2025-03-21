[RevoGrid Documentation v4.14.4](README.md) / FocusTemplateFunc

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

[src/types/interfaces.ts:392](https://github.com/revolist/revogrid/blob/a32d3a869ff2d770043cd2738815e885c8f5d1a9/src/types/interfaces.ts#L392)
