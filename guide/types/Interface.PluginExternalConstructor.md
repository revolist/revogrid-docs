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

[src/types/plugin.ts:34](https://github.com/revolist/revogrid/blob/bdb9e42430f63c1d6612c6ca28338cbed0c26a6c/src/types/plugin.ts#L34)
