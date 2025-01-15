[@revolist/revogrid](README.md) / [Components](Namespace.Components.md) / RevogrExtra

# Interface: RevogrExtra

Contains extra elements for stencil components.
Performs rendering and updates for external components.

## Example

```ts
In Plugins if you want to add extra elements to grid and use stenciljs vnodes reactivity:
function paginationPanel(this: PaginationPlugin, config: { refresh: () => void }) {
   // use `config.refresh()` for component to re-render
   return h('div')
}
revogrid.registerVNode = [
   ...existingNodes,
    paginationPanel.bind(this)
];
/**
```

## Properties

| Property | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| `nodes` | ([`VNode`](Interface.VNode.md) \| (`c`: [`ExtraNodeFuncConfig`](Interface.ExtraNodeFuncConfig.md)) => [`VNode`](Interface.VNode.md))[] | Nodes to render | [src/components.d.ts:428](https://github.com/revolist/revogrid/blob/6916c62aedeba77f36804fdc386f78e588e18412/src/components.d.ts#L428) |
| `refresh` | () => `Promise`\<`void`\> | Refreshes the extra component. Useful if you want to manually force the component to re-render. | [src/components.d.ts:435](https://github.com/revolist/revogrid/blob/6916c62aedeba77f36804fdc386f78e588e18412/src/components.d.ts#L435) |
