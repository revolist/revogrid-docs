[RevoGrid Documentation v4.12.11](README.md) / [Components](Namespace.Components.md) / RevogrExtra

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
| `nodes` | ([`VNode`](Interface.VNode.md) \| (`c`: [`ExtraNodeFuncConfig`](Interface.ExtraNodeFuncConfig.md)) => [`VNode`](Interface.VNode.md))[] | Nodes to render | [src/components.d.ts:432](https://github.com/revolist/revogrid/blob/6f8df4eb606fcbd6f32b575f3753800c08ad78f6/src/components.d.ts#L432) |
| `refresh` | () => `Promise`\<`void`\> | Refreshes the extra component. Useful if you want to manually force the component to re-render. | [src/components.d.ts:439](https://github.com/revolist/revogrid/blob/6f8df4eb606fcbd6f32b575f3753800c08ad78f6/src/components.d.ts#L439) |
