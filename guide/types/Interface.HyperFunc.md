[@revolist/revogrid](README.md) / HyperFunc

# Interface: HyperFunc()\<T\>

`HyperFunc` is a function that takes an HTML tag or component, and returns a
JSX element. This function is used to create JSX elements in a context where
JSX is not valid.

## Type Parameters

| Type Parameter |
| ------ |
| `T` |

```ts
interface HyperFunc(tag: any): T
```

`HyperFunc` is a function that takes an HTML tag or component, and returns a
JSX element. This function is used to create JSX elements in a context where
JSX is not valid.

## Parameters

| Parameter | Type |
| ------ | ------ |
| `tag` | `any` |

## Returns

`T`

## Defined in

[src/types/interfaces.ts:314](https://github.com/revolist/revogrid/blob/32c6316d328fcc561520e19c2a4b987d1e8a85d2/src/types/interfaces.ts#L314)

```ts
interface HyperFunc(tag: any, data: any): T
```

`HyperFunc` is a function that takes an HTML tag or component, and returns a
JSX element. This function is used to create JSX elements in a context where
JSX is not valid.

## Parameters

| Parameter | Type |
| ------ | ------ |
| `tag` | `any` |
| `data` | `any` |

## Returns

`T`

## Defined in

[src/types/interfaces.ts:322](https://github.com/revolist/revogrid/blob/32c6316d328fcc561520e19c2a4b987d1e8a85d2/src/types/interfaces.ts#L322)

```ts
interface HyperFunc(tag: any, text: string): T
```

`HyperFunc` is a function that takes an HTML tag or component, and returns a
JSX element. This function is used to create JSX elements in a context where
JSX is not valid.

## Parameters

| Parameter | Type |
| ------ | ------ |
| `tag` | `any` |
| `text` | `string` |

## Returns

`T`

## Defined in

[src/types/interfaces.ts:330](https://github.com/revolist/revogrid/blob/32c6316d328fcc561520e19c2a4b987d1e8a85d2/src/types/interfaces.ts#L330)

```ts
interface HyperFunc(sel: any, children: T[]): T
```

`HyperFunc` is a function that takes an HTML tag or component, and returns a
JSX element. This function is used to create JSX elements in a context where
JSX is not valid.

## Parameters

| Parameter | Type |
| ------ | ------ |
| `sel` | `any` |
| `children` | `T`[] |

## Returns

`T`

## Defined in

[src/types/interfaces.ts:339](https://github.com/revolist/revogrid/blob/32c6316d328fcc561520e19c2a4b987d1e8a85d2/src/types/interfaces.ts#L339)

```ts
interface HyperFunc(
   sel: any, 
   data: any, 
   text: string): T
```

`HyperFunc` is a function that takes an HTML tag or component, and returns a
JSX element. This function is used to create JSX elements in a context where
JSX is not valid.

## Parameters

| Parameter | Type |
| ------ | ------ |
| `sel` | `any` |
| `data` | `any` |
| `text` | `string` |

## Returns

`T`

## Defined in

[src/types/interfaces.ts:348](https://github.com/revolist/revogrid/blob/32c6316d328fcc561520e19c2a4b987d1e8a85d2/src/types/interfaces.ts#L348)

```ts
interface HyperFunc(
   sel: any, 
   data: any, 
   children: T[]): T
```

`HyperFunc` is a function that takes an HTML tag or component, and returns a
JSX element. This function is used to create JSX elements in a context where
JSX is not valid.

## Parameters

| Parameter | Type |
| ------ | ------ |
| `sel` | `any` |
| `data` | `any` |
| `children` | `T`[] |

## Returns

`T`

## Defined in

[src/types/interfaces.ts:357](https://github.com/revolist/revogrid/blob/32c6316d328fcc561520e19c2a4b987d1e8a85d2/src/types/interfaces.ts#L357)

```ts
interface HyperFunc(
   sel: any, 
   data: any, 
   children: T): T
```

`HyperFunc` is a function that takes an HTML tag or component, and returns a
JSX element. This function is used to create JSX elements in a context where
JSX is not valid.

## Parameters

| Parameter | Type |
| ------ | ------ |
| `sel` | `any` |
| `data` | `any` |
| `children` | `T` |

## Returns

`T`

## Defined in

[src/types/interfaces.ts:366](https://github.com/revolist/revogrid/blob/32c6316d328fcc561520e19c2a4b987d1e8a85d2/src/types/interfaces.ts#L366)
