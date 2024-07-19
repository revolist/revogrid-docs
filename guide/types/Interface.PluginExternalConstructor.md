[@revolist/revogrid](README.md) / PluginExternalConstructor

# Interface: PluginExternalConstructor

Interface for plugin constructors that expect a providers object

## Param

The RevoGrid component instance

## Param

The providers object to inject into the plugin's template

## Param

Additional parameters for the plugin constructor

## Constructors

### new PluginExternalConstructor()

```ts
new PluginExternalConstructor(
   revogrid: HTMLRevoGridElement, 
   providers: Record<string, any>, ...
   __namedParameters: Iterable<any>): PluginBaseComponent
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `revogrid` | `HTMLRevoGridElement` |
| `providers` | `Record`\<`string`, `any`\> |
| ...`__namedParameters` | `Iterable`\<`any`\> |

#### Returns

[`PluginBaseComponent`](Interface.PluginBaseComponent.md)

#### Defined in

[src/types/plugin.ts:34](https://github.com/revolist/revogrid/blob/8aea4c92d6f61dbd5ec14b529d8993bb7069ef1f/src/types/plugin.ts#L34)
