[@revolist/revogrid](README.md) / RevogrScrollVirtualCustomEvent

# Interface: RevogrScrollVirtualCustomEvent\<T\>

## Extends

- `CustomEvent`\<`T`\>

## Type Parameters

| Type Parameter |
| ------ |
| `T` |

## Properties

| Property | Modifier | Type | Description | Overrides | Inherited from | Defined in |
| ------ | ------ | ------ | ------ | ------ | ------ | ------ |
| `AT_TARGET` | `readonly` | `2` | - | - | `CustomEvent.AT_TARGET` | node\_modules/typescript/lib/lib.dom.d.ts:8145 |
| `BUBBLING_PHASE` | `readonly` | `3` | - | - | `CustomEvent.BUBBLING_PHASE` | node\_modules/typescript/lib/lib.dom.d.ts:8146 |
| `CAPTURING_PHASE` | `readonly` | `1` | - | - | `CustomEvent.CAPTURING_PHASE` | node\_modules/typescript/lib/lib.dom.d.ts:8144 |
| `NONE` | `readonly` | `0` | - | - | `CustomEvent.NONE` | node\_modules/typescript/lib/lib.dom.d.ts:8143 |
| `bubbles` | `readonly` | `boolean` | Returns true or false depending on how event was initialized. True if event goes through its target's ancestors in reverse tree order, and false otherwise. [MDN Reference](https://developer.mozilla.org/docs/Web/API/Event/bubbles) | - | `CustomEvent.bubbles` | node\_modules/typescript/lib/lib.dom.d.ts:8040 |
| ~~`cancelBubble`~~ | `public` | `boolean` | **Deprecated** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Event/cancelBubble) | - | `CustomEvent.cancelBubble` | node\_modules/typescript/lib/lib.dom.d.ts:8046 |
| `cancelable` | `readonly` | `boolean` | Returns true or false depending on how event was initialized. Its return value does not always carry meaning, but true can indicate that part of the operation during which event was dispatched, can be canceled by invoking the preventDefault() method. [MDN Reference](https://developer.mozilla.org/docs/Web/API/Event/cancelable) | - | `CustomEvent.cancelable` | node\_modules/typescript/lib/lib.dom.d.ts:8052 |
| `composed` | `readonly` | `boolean` | Returns true or false depending on how event was initialized. True if event invokes listeners past a ShadowRoot node that is the root of its target, and false otherwise. [MDN Reference](https://developer.mozilla.org/docs/Web/API/Event/composed) | - | `CustomEvent.composed` | node\_modules/typescript/lib/lib.dom.d.ts:8058 |
| `currentTarget` | `readonly` | `EventTarget` | Returns the object whose event listener's callback is currently being invoked. [MDN Reference](https://developer.mozilla.org/docs/Web/API/Event/currentTarget) | - | `CustomEvent.currentTarget` | node\_modules/typescript/lib/lib.dom.d.ts:8064 |
| `defaultPrevented` | `readonly` | `boolean` | Returns true if preventDefault() was invoked successfully to indicate cancelation, and false otherwise. [MDN Reference](https://developer.mozilla.org/docs/Web/API/Event/defaultPrevented) | - | `CustomEvent.defaultPrevented` | node\_modules/typescript/lib/lib.dom.d.ts:8070 |
| `detail` | `public` | `T` | Returns any custom data event was created with. Typically used for synthetic events. [MDN Reference](https://developer.mozilla.org/docs/Web/API/CustomEvent/detail) | `CustomEvent.detail` | - | [src/components.d.ts:725](https://github.com/revolist/revogrid/blob/c9c4fc1791ac452c4c9470419263ce544ebb624f/src/components.d.ts#L725) |
| `eventPhase` | `readonly` | `number` | Returns the event's phase, which is one of NONE, CAPTURING_PHASE, AT_TARGET, and BUBBLING_PHASE. [MDN Reference](https://developer.mozilla.org/docs/Web/API/Event/eventPhase) | - | `CustomEvent.eventPhase` | node\_modules/typescript/lib/lib.dom.d.ts:8076 |
| `isTrusted` | `readonly` | `boolean` | Returns true if event was dispatched by the user agent, and false otherwise. [MDN Reference](https://developer.mozilla.org/docs/Web/API/Event/isTrusted) | - | `CustomEvent.isTrusted` | node\_modules/typescript/lib/lib.dom.d.ts:8082 |
| ~~`returnValue`~~ | `public` | `boolean` | **Deprecated** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Event/returnValue) | - | `CustomEvent.returnValue` | node\_modules/typescript/lib/lib.dom.d.ts:8088 |
| ~~`srcElement`~~ | `readonly` | `EventTarget` | **Deprecated** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Event/srcElement) | - | `CustomEvent.srcElement` | node\_modules/typescript/lib/lib.dom.d.ts:8094 |
| `target` | `public` | `HTMLRevogrScrollVirtualElement` | Returns the object to which event is dispatched (its target). [MDN Reference](https://developer.mozilla.org/docs/Web/API/Event/target) | `CustomEvent.target` | - | [src/components.d.ts:726](https://github.com/revolist/revogrid/blob/c9c4fc1791ac452c4c9470419263ce544ebb624f/src/components.d.ts#L726) |
| `timeStamp` | `readonly` | `number` | Returns the event's timestamp as the number of milliseconds measured relative to the time origin. [MDN Reference](https://developer.mozilla.org/docs/Web/API/Event/timeStamp) | - | `CustomEvent.timeStamp` | node\_modules/typescript/lib/lib.dom.d.ts:8106 |
| `type` | `readonly` | `string` | Returns the type of event, e.g. "click", "hashchange", or "submit". [MDN Reference](https://developer.mozilla.org/docs/Web/API/Event/type) | - | `CustomEvent.type` | node\_modules/typescript/lib/lib.dom.d.ts:8112 |

## Methods

### composedPath()

```ts
composedPath(): EventTarget[]
```

Returns the invocation target objects of event's path (objects on which listeners will be invoked), except for any nodes in shadow trees of which the shadow root's mode is "closed" that are not reachable from event's currentTarget.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Event/composedPath)

#### Returns

`EventTarget`[]

#### Inherited from

`CustomEvent.composedPath`

#### Defined in

node\_modules/typescript/lib/lib.dom.d.ts:8118

***

### ~~initCustomEvent()~~

```ts
initCustomEvent(
   type: string, 
   bubbles?: boolean, 
   cancelable?: boolean, 
   detail?: T): void
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `type` | `string` |
| `bubbles`? | `boolean` |
| `cancelable`? | `boolean` |
| `detail`? | `T` |

#### Returns

`void`

#### Inherited from

`CustomEvent.initCustomEvent`

#### Deprecated

[MDN Reference](https://developer.mozilla.org/docs/Web/API/CustomEvent/initCustomEvent)

#### Defined in

node\_modules/typescript/lib/lib.dom.d.ts:5965

***

### ~~initEvent()~~

```ts
initEvent(
   type: string, 
   bubbles?: boolean, 
   cancelable?: boolean): void
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `type` | `string` |
| `bubbles`? | `boolean` |
| `cancelable`? | `boolean` |

#### Returns

`void`

#### Inherited from

`CustomEvent.initEvent`

#### Deprecated

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Event/initEvent)

#### Defined in

node\_modules/typescript/lib/lib.dom.d.ts:8124

***

### preventDefault()

```ts
preventDefault(): void
```

If invoked when the cancelable attribute value is true, and while executing a listener for the event with passive set to false, signals to the operation that caused event to be dispatched that it needs to be canceled.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Event/preventDefault)

#### Returns

`void`

#### Inherited from

`CustomEvent.preventDefault`

#### Defined in

node\_modules/typescript/lib/lib.dom.d.ts:8130

***

### stopImmediatePropagation()

```ts
stopImmediatePropagation(): void
```

Invoking this method prevents event from reaching any registered event listeners after the current one finishes running and, when dispatched in a tree, also prevents event from reaching any other objects.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Event/stopImmediatePropagation)

#### Returns

`void`

#### Inherited from

`CustomEvent.stopImmediatePropagation`

#### Defined in

node\_modules/typescript/lib/lib.dom.d.ts:8136

***

### stopPropagation()

```ts
stopPropagation(): void
```

When dispatched in a tree, invoking this method prevents event from reaching any objects other than the current object.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Event/stopPropagation)

#### Returns

`void`

#### Inherited from

`CustomEvent.stopPropagation`

#### Defined in

node\_modules/typescript/lib/lib.dom.d.ts:8142
