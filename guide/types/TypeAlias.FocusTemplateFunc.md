[RevoGrid Documentation v4.13.5](README.md) / FocusTemplateFunc

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

[src/types/interfaces.ts:392](https://github.com/revolist/revogrid/blob/f32590b4b251a55e7610f26e48cd67947bdd6441/src/types/interfaces.ts#L392)
