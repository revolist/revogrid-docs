[RevoGrid Documentation v4.12.3](README.md) / [JSX](Namespace.JSX.md) / RevogrExtra

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
| `nodes?` | ([`VNode`](Interface.VNode.md) \| (`c`: [`ExtraNodeFuncConfig`](Interface.ExtraNodeFuncConfig.md)) => [`VNode`](Interface.VNode.md))[] | Nodes to render | [src/components.d.ts:1828](https://github.com/revolist/revogrid/blob/d8faaf908685ef9767dc3ea8ccad1628e41fbf76/src/components.d.ts#L1828) |
