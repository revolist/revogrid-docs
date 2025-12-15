[RevoGrid Documentation v4.20.0](README.md) / [Components](Namespace.Components.md) / RevogrExtra

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
| `nodes` | ([`VNode`](Interface.VNode.md) \| (`c`: [`ExtraNodeFuncConfig`](Interface.ExtraNodeFuncConfig.md)) => [`VNode`](Interface.VNode.md))[] | Nodes to render **Default** `[]` | [src/components.d.ts:477](https://github.com/revolist/revogrid/blob/7faf5f2ab39719d64ef2a8ff607d5deafda02379/src/components.d.ts#L477) |
| `refresh` | () => `Promise`\<`void`\> | Refreshes the extra component. Useful if you want to manually force the component to re-render. | [src/components.d.ts:484](https://github.com/revolist/revogrid/blob/7faf5f2ab39719d64ef2a8ff607d5deafda02379/src/components.d.ts#L484) |
