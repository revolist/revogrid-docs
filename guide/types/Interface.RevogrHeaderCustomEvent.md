[@revolist/revogrid](README.md) / RevogrHeaderCustomEvent

# Interface: RevogrHeaderCustomEvent\<T\>

## Extends

- `CustomEvent`\<`T`\>

## Type parameters

| Type parameter |
| :------ |
| `T` |

## Properties

| Property | Modifier | Type | Description | Overrides | Inherited from |
| :------ | :------ | :------ | :------ | :------ | :------ |
| `AT_TARGET` | `readonly` | `2` | - | `CustomEvent.AT_TARGET` | `CustomEvent.AT_TARGET` |
| `BUBBLING_PHASE` | `readonly` | `3` | - | `CustomEvent.BUBBLING_PHASE` | `CustomEvent.BUBBLING_PHASE` |
| `CAPTURING_PHASE` | `readonly` | `1` | - | `CustomEvent.CAPTURING_PHASE` | `CustomEvent.CAPTURING_PHASE` |
| `NONE` | `readonly` | `0` | - | `CustomEvent.NONE` | `CustomEvent.NONE` |
| `bubbles` | `readonly` | `boolean` | <p>Returns true or false depending on how event was initialized. True if event goes through its target's ancestors in reverse tree order, and false otherwise.</p><p>[MDN Reference](https://developer.mozilla.org/docs/Web/API/Event/bubbles)</p> | `CustomEvent.bubbles` | `CustomEvent.bubbles` |
| ~~`cancelBubble`~~ | `public` | `boolean` | <p>**Deprecated**</p><p>[MDN Reference](https://developer.mozilla.org/docs/Web/API/Event/cancelBubble)</p> | `CustomEvent.cancelBubble` | `CustomEvent.cancelBubble` |
| `cancelable` | `readonly` | `boolean` | <p>Returns true or false depending on how event was initialized. Its return value does not always carry meaning, but true can indicate that part of the operation during which event was dispatched, can be canceled by invoking the preventDefault() method.</p><p>[MDN Reference](https://developer.mozilla.org/docs/Web/API/Event/cancelable)</p> | `CustomEvent.cancelable` | `CustomEvent.cancelable` |
| `composed` | `readonly` | `boolean` | <p>Returns true or false depending on how event was initialized. True if event invokes listeners past a ShadowRoot node that is the root of its target, and false otherwise.</p><p>[MDN Reference](https://developer.mozilla.org/docs/Web/API/Event/composed)</p> | `CustomEvent.composed` | `CustomEvent.composed` |
| `currentTarget` | `readonly` | `EventTarget` | <p>Returns the object whose event listener's callback is currently being invoked.</p><p>[MDN Reference](https://developer.mozilla.org/docs/Web/API/Event/currentTarget)</p> | `CustomEvent.currentTarget` | `CustomEvent.currentTarget` |
| `defaultPrevented` | `readonly` | `boolean` | <p>Returns true if preventDefault() was invoked successfully to indicate cancelation, and false otherwise.</p><p>[MDN Reference](https://developer.mozilla.org/docs/Web/API/Event/defaultPrevented)</p> | `CustomEvent.defaultPrevented` | `CustomEvent.defaultPrevented` |
| `detail` | `public` | `T` | - | `CustomEvent.detail` | `CustomEvent.detail` |
| `eventPhase` | `readonly` | `number` | <p>Returns the event's phase, which is one of NONE, CAPTURING_PHASE, AT_TARGET, and BUBBLING_PHASE.</p><p>[MDN Reference](https://developer.mozilla.org/docs/Web/API/Event/eventPhase)</p> | `CustomEvent.eventPhase` | `CustomEvent.eventPhase` |
| `isTrusted` | `readonly` | `boolean` | <p>Returns true if event was dispatched by the user agent, and false otherwise.</p><p>[MDN Reference](https://developer.mozilla.org/docs/Web/API/Event/isTrusted)</p> | `CustomEvent.isTrusted` | `CustomEvent.isTrusted` |
| ~~`returnValue`~~ | `public` | `boolean` | <p>**Deprecated**</p><p>[MDN Reference](https://developer.mozilla.org/docs/Web/API/Event/returnValue)</p> | `CustomEvent.returnValue` | `CustomEvent.returnValue` |
| ~~`srcElement`~~ | `readonly` | `EventTarget` | <p>**Deprecated**</p><p>[MDN Reference](https://developer.mozilla.org/docs/Web/API/Event/srcElement)</p> | `CustomEvent.srcElement` | `CustomEvent.srcElement` |
| `target` | `public` | `HTMLRevogrHeaderElement` | - | `CustomEvent.target` | `CustomEvent.target` |
| `timeStamp` | `readonly` | `number` | <p>Returns the event's timestamp as the number of milliseconds measured relative to the time origin.</p><p>[MDN Reference](https://developer.mozilla.org/docs/Web/API/Event/timeStamp)</p> | `CustomEvent.timeStamp` | `CustomEvent.timeStamp` |
| `type` | `readonly` | `string` | <p>Returns the type of event, e.g. "click", "hashchange", or "submit".</p><p>[MDN Reference](https://developer.mozilla.org/docs/Web/API/Event/type)</p> | `CustomEvent.type` | `CustomEvent.type` |

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

#### Source

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
| :------ | :------ |
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

#### Source

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
| :------ | :------ |
| `type` | `string` |
| `bubbles`? | `boolean` |
| `cancelable`? | `boolean` |

#### Returns

`void`

#### Inherited from

`CustomEvent.initEvent`

#### Deprecated

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Event/initEvent)

#### Source

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

#### Source

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

#### Source

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

#### Source

node\_modules/typescript/lib/lib.dom.d.ts:8142
