[@revolist/revogrid](README.md) / ObservableMap

# Interface: ObservableMap\<T\>

## Type Parameters

| Type Parameter |
| ------ |
| `T` |

## Properties

| Property | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| `get` | [`Getter`](Interface.Getter.md)\<`T`\> | Only useful if you need to support IE11. **Example** `const { state, get } = createStore({ hola: 'hello', adios: 'goodbye' }); console.log(state.hola); // If you don't need to support IE11, use this way. console.log(get('hola')); // If you need to support IE11, use this other way.` | [src/utils/store.types.ts:53](https://github.com/revolist/revogrid/blob/7eb028636fe9635cf32f3cf0775076c9e2dde053/src/utils/store.types.ts#L53) |
| `on` | [`OnHandler`](Interface.OnHandler.md)\<`T`\> | Register a event listener, you can listen to `set`, `get` and `reset` events. **Example** `store.on('set', (prop, value) => { console.log(`Prop ${prop} changed to: ${value}`); });` | [src/utils/store.types.ts:71](https://github.com/revolist/revogrid/blob/7eb028636fe9635cf32f3cf0775076c9e2dde053/src/utils/store.types.ts#L71) |
| `onChange` | [`OnChangeHandler`](Interface.OnChangeHandler.md)\<`T`\> | Easily listen for value changes of the specified key. | [src/utils/store.types.ts:75](https://github.com/revolist/revogrid/blob/7eb028636fe9635cf32f3cf0775076c9e2dde053/src/utils/store.types.ts#L75) |
| `set` | [`Setter`](Interface.Setter.md)\<`T`\> | Only useful if you need to support IE11. **Example** `const { state, get } = createStore({ hola: 'hello', adios: 'goodbye' }); state.hola = 'ola'; // If you don't need to support IE11, use this way. set('hola', 'ola')); // If you need to support IE11, use this other way.` | [src/utils/store.types.ts:62](https://github.com/revolist/revogrid/blob/7eb028636fe9635cf32f3cf0775076c9e2dde053/src/utils/store.types.ts#L62) |
| `state` | `T` | Proxied object that will detect dependencies and call the subscriptions and computed properties. If available, it will detect from which Stencil Component it was called and rerender it when the property changes. Note: Proxy objects are not supported by IE11 (not even with a polyfill) so you need to use the store.get and store.set methods of the API if you wish to support IE11. | [src/utils/store.types.ts:44](https://github.com/revolist/revogrid/blob/7eb028636fe9635cf32f3cf0775076c9e2dde053/src/utils/store.types.ts#L44) |

## Methods

### dispose()

```ts
dispose(): void
```

Resets the state to its original state and
signals a dispose event to all the plugins.

This method is intended for plugins to reset
all their internal state between tests.

#### Returns

`void`

#### Defined in

[src/utils/store.types.ts:83](https://github.com/revolist/revogrid/blob/7eb028636fe9635cf32f3cf0775076c9e2dde053/src/utils/store.types.ts#L83)

***

### forceUpdate()

```ts
forceUpdate(key: keyof T): any
```

Force a rerender of the specified key, just like the value changed.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `key` | keyof `T` |

#### Returns

`any`

#### Defined in

[src/utils/store.types.ts:96](https://github.com/revolist/revogrid/blob/7eb028636fe9635cf32f3cf0775076c9e2dde053/src/utils/store.types.ts#L96)

***

### reset()

```ts
reset(): void
```

Resets the state to its original state.

#### Returns

`void`

#### Defined in

[src/utils/store.types.ts:87](https://github.com/revolist/revogrid/blob/7eb028636fe9635cf32f3cf0775076c9e2dde053/src/utils/store.types.ts#L87)

***

### use()

```ts
use(...plugins: Subscription<T>[]): () => void
```

Registers a subscription that will be called whenever the user gets, sets, or
resets a value.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| ...`plugins` | [`Subscription`](Interface.Subscription.md)\<`T`\>[] |

#### Returns

`Function`

##### Returns

`void`

#### Defined in

[src/utils/store.types.ts:92](https://github.com/revolist/revogrid/blob/7eb028636fe9635cf32f3cf0775076c9e2dde053/src/utils/store.types.ts#L92)
