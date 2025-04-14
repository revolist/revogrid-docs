[RevoGrid Documentation v4.15.2](README.md) / [JSX](Namespace.JSX.md) / RevogrExtra

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
| `nodes?` | ([`VNode`](Interface.VNode.md) \| (`c`: [`ExtraNodeFuncConfig`](Interface.ExtraNodeFuncConfig.md)) => [`VNode`](Interface.VNode.md))[] | Nodes to render | [src/components.d.ts:1839](https://github.com/revolist/revogrid/blob/30cfedca97f5b42c948bd2668fa87c350d2411bd/src/components.d.ts#L1839) |
