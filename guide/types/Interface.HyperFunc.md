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

[src/types/interfaces.ts:317](https://github.com/revolist/revogrid/blob/703fa47ec13d35676d07f3192b2741384647a863/src/types/interfaces.ts#L317)

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

[src/types/interfaces.ts:325](https://github.com/revolist/revogrid/blob/703fa47ec13d35676d07f3192b2741384647a863/src/types/interfaces.ts#L325)

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

[src/types/interfaces.ts:333](https://github.com/revolist/revogrid/blob/703fa47ec13d35676d07f3192b2741384647a863/src/types/interfaces.ts#L333)

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

[src/types/interfaces.ts:342](https://github.com/revolist/revogrid/blob/703fa47ec13d35676d07f3192b2741384647a863/src/types/interfaces.ts#L342)

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

[src/types/interfaces.ts:351](https://github.com/revolist/revogrid/blob/703fa47ec13d35676d07f3192b2741384647a863/src/types/interfaces.ts#L351)

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

[src/types/interfaces.ts:360](https://github.com/revolist/revogrid/blob/703fa47ec13d35676d07f3192b2741384647a863/src/types/interfaces.ts#L360)

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

[src/types/interfaces.ts:369](https://github.com/revolist/revogrid/blob/703fa47ec13d35676d07f3192b2741384647a863/src/types/interfaces.ts#L369)
