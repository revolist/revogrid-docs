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

[src/types/interfaces.ts:318](https://github.com/revolist/revogrid/blob/a4b231d71029faeb28d2b2f5098e6a96aa320bc0/src/types/interfaces.ts#L318)

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

[src/types/interfaces.ts:326](https://github.com/revolist/revogrid/blob/a4b231d71029faeb28d2b2f5098e6a96aa320bc0/src/types/interfaces.ts#L326)

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

[src/types/interfaces.ts:334](https://github.com/revolist/revogrid/blob/a4b231d71029faeb28d2b2f5098e6a96aa320bc0/src/types/interfaces.ts#L334)

```ts
interface HyperFunc(sel: any, children: (undefined | null | T)[]): T
```

`HyperFunc` is a function that takes an HTML tag or component, and returns a
JSX element. This function is used to create JSX elements in a context where
JSX is not valid.

## Parameters

| Parameter | Type |
| ------ | ------ |
| `sel` | `any` |
| `children` | (`undefined` \| `null` \| `T`)[] |

## Returns

`T`

## Defined in

[src/types/interfaces.ts:343](https://github.com/revolist/revogrid/blob/a4b231d71029faeb28d2b2f5098e6a96aa320bc0/src/types/interfaces.ts#L343)

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

[src/types/interfaces.ts:352](https://github.com/revolist/revogrid/blob/a4b231d71029faeb28d2b2f5098e6a96aa320bc0/src/types/interfaces.ts#L352)

```ts
interface HyperFunc(
   sel: any, 
   data: any, 
   children: (undefined | null | T)[]): T
```

`HyperFunc` is a function that takes an HTML tag or component, and returns a
JSX element. This function is used to create JSX elements in a context where
JSX is not valid.

## Parameters

| Parameter | Type |
| ------ | ------ |
| `sel` | `any` |
| `data` | `any` |
| `children` | (`undefined` \| `null` \| `T`)[] |

## Returns

`T`

## Defined in

[src/types/interfaces.ts:361](https://github.com/revolist/revogrid/blob/a4b231d71029faeb28d2b2f5098e6a96aa320bc0/src/types/interfaces.ts#L361)

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

[src/types/interfaces.ts:370](https://github.com/revolist/revogrid/blob/a4b231d71029faeb28d2b2f5098e6a96aa320bc0/src/types/interfaces.ts#L370)
