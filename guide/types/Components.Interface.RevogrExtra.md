[RevoGrid Documentation v4.12.7](README.md) / [Components](Namespace.Components.md) / RevogrExtra

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
| `nodes` | ([`VNode`](Interface.VNode.md) \| (`c`: [`ExtraNodeFuncConfig`](Interface.ExtraNodeFuncConfig.md)) => [`VNode`](Interface.VNode.md))[] | Nodes to render | [src/components.d.ts:432](https://github.com/revolist/revogrid/blob/435ff99a088c5c293d22eb08cc3e448f60f4eb56/src/components.d.ts#L432) |
| `refresh` | () => `Promise`\<`void`\> | Refreshes the extra component. Useful if you want to manually force the component to re-render. | [src/components.d.ts:439](https://github.com/revolist/revogrid/blob/435ff99a088c5c293d22eb08cc3e448f60f4eb56/src/components.d.ts#L439) |
