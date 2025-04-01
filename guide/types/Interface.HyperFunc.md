[RevoGrid Documentation v4.14.13](README.md) / HyperFunc

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

[src/types/interfaces.ts:337](https://github.com/revolist/revogrid/blob/4eff1607ca8ee7d75f31750c713182488767268a/src/types/interfaces.ts#L337)

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

[src/types/interfaces.ts:353](https://github.com/revolist/revogrid/blob/4eff1607ca8ee7d75f31750c713182488767268a/src/types/interfaces.ts#L353)

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

[src/types/interfaces.ts:361](https://github.com/revolist/revogrid/blob/4eff1607ca8ee7d75f31750c713182488767268a/src/types/interfaces.ts#L361)

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

[src/types/interfaces.ts:370](https://github.com/revolist/revogrid/blob/4eff1607ca8ee7d75f31750c713182488767268a/src/types/interfaces.ts#L370)

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

[src/types/interfaces.ts:379](https://github.com/revolist/revogrid/blob/4eff1607ca8ee7d75f31750c713182488767268a/src/types/interfaces.ts#L379)

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

[src/types/interfaces.ts:388](https://github.com/revolist/revogrid/blob/4eff1607ca8ee7d75f31750c713182488767268a/src/types/interfaces.ts#L388)

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

[src/types/interfaces.ts:397](https://github.com/revolist/revogrid/blob/4eff1607ca8ee7d75f31750c713182488767268a/src/types/interfaces.ts#L397)
