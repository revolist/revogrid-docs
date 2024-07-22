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

[src/types/interfaces.ts:319](https://github.com/revolist/revogrid/blob/169fb7626f86c9813d59597eddde6f6dd50e49a6/src/types/interfaces.ts#L319)

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

[src/types/interfaces.ts:327](https://github.com/revolist/revogrid/blob/169fb7626f86c9813d59597eddde6f6dd50e49a6/src/types/interfaces.ts#L327)

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

[src/types/interfaces.ts:335](https://github.com/revolist/revogrid/blob/169fb7626f86c9813d59597eddde6f6dd50e49a6/src/types/interfaces.ts#L335)

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

[src/types/interfaces.ts:344](https://github.com/revolist/revogrid/blob/169fb7626f86c9813d59597eddde6f6dd50e49a6/src/types/interfaces.ts#L344)

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

[src/types/interfaces.ts:353](https://github.com/revolist/revogrid/blob/169fb7626f86c9813d59597eddde6f6dd50e49a6/src/types/interfaces.ts#L353)

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

[src/types/interfaces.ts:362](https://github.com/revolist/revogrid/blob/169fb7626f86c9813d59597eddde6f6dd50e49a6/src/types/interfaces.ts#L362)

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

[src/types/interfaces.ts:371](https://github.com/revolist/revogrid/blob/169fb7626f86c9813d59597eddde6f6dd50e49a6/src/types/interfaces.ts#L371)
