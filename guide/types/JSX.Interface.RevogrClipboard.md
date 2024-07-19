[@revolist/revogrid](README.md) / [JSX](Namespace.JSX.md) / RevogrClipboard

# Interface: RevogrClipboard

This Clipboard provides functionality for handling clipboard events in a web application.

## Properties

| Property | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| `onAfterpasteapply?` | (`event`: [`RevogrClipboardCustomEvent`](Interface.RevogrClipboardCustomEvent.md)\<`any`\>) => `void` | Paste 4. Fired after paste applied to the grid | [src/components.d.ts:1509](https://github.com/revolist/revogrid/blob/8aea4c92d6f61dbd5ec14b529d8993bb7069ef1f/src/components.d.ts#L1509) |
| `onBeforecopy?` | (`event`: [`RevogrClipboardCustomEvent`](Interface.RevogrClipboardCustomEvent.md)\<`any`\>) => `void` | Copy 1. Fired before copy triggered | [src/components.d.ts:1515](https://github.com/revolist/revogrid/blob/8aea4c92d6f61dbd5ec14b529d8993bb7069ef1f/src/components.d.ts#L1515) |
| `onBeforecopyapply?` | (`event`: [`RevogrClipboardCustomEvent`](Interface.RevogrClipboardCustomEvent.md)\<`any`\>) => `void` | Copy Method 1. Fired before copy applied to the clipboard from outside. | [src/components.d.ts:1522](https://github.com/revolist/revogrid/blob/8aea4c92d6f61dbd5ec14b529d8993bb7069ef1f/src/components.d.ts#L1522) |
| `onBeforecut?` | (`event`: [`RevogrClipboardCustomEvent`](Interface.RevogrClipboardCustomEvent.md)\<`any`\>) => `void` | Cut 1. Fired before cut triggered | [src/components.d.ts:1528](https://github.com/revolist/revogrid/blob/8aea4c92d6f61dbd5ec14b529d8993bb7069ef1f/src/components.d.ts#L1528) |
| `onBeforepaste?` | (`event`: [`RevogrClipboardCustomEvent`](Interface.RevogrClipboardCustomEvent.md)\<`any`\>) => `void` | Paste 1. Fired before paste applied to the grid | [src/components.d.ts:1535](https://github.com/revolist/revogrid/blob/8aea4c92d6f61dbd5ec14b529d8993bb7069ef1f/src/components.d.ts#L1535) |
| `onBeforepasteapply?` | (`event`: [`RevogrClipboardCustomEvent`](Interface.RevogrClipboardCustomEvent.md)\<`any`\>) => `void` | Paste 2. Fired before paste applied to the grid and after data parsed | [src/components.d.ts:1541](https://github.com/revolist/revogrid/blob/8aea4c92d6f61dbd5ec14b529d8993bb7069ef1f/src/components.d.ts#L1541) |
| `onClearregion?` | (`event`: [`RevogrClipboardCustomEvent`](Interface.RevogrClipboardCustomEvent.md)\<`DataTransfer`\>) => `void` | Cut 2. Clears region when cut is done | [src/components.d.ts:1545](https://github.com/revolist/revogrid/blob/8aea4c92d6f61dbd5ec14b529d8993bb7069ef1f/src/components.d.ts#L1545) |
| `onCopyregion?` | (`event`: [`RevogrClipboardCustomEvent`](Interface.RevogrClipboardCustomEvent.md)\<`DataTransfer`\>) => `void` | Copy 2. Fired when region copied | [src/components.d.ts:1551](https://github.com/revolist/revogrid/blob/8aea4c92d6f61dbd5ec14b529d8993bb7069ef1f/src/components.d.ts#L1551) |
| `onPasteregion?` | (`event`: [`RevogrClipboardCustomEvent`](Interface.RevogrClipboardCustomEvent.md)\<`string`[][]\>) => `void` | Paste 3. Internal method. When data region is ready pass it to the top. | [src/components.d.ts:1557](https://github.com/revolist/revogrid/blob/8aea4c92d6f61dbd5ec14b529d8993bb7069ef1f/src/components.d.ts#L1557) |
| `readonly?` | `boolean` | If readonly mode - disabled Paste event | [src/components.d.ts:1561](https://github.com/revolist/revogrid/blob/8aea4c92d6f61dbd5ec14b529d8993bb7069ef1f/src/components.d.ts#L1561) |
