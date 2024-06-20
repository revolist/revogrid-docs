[@revolist/revogrid](README.md) / [JSX](Namespace.JSX.md) / RevogrClipboard

# Interface: RevogrClipboard

This Clipboard provides functionality for handling clipboard events in a web application.

## Properties

| Property | Type | Description |
| :------ | :------ | :------ |
| `onAfterpasteapply?` | (`event`: [`RevogrClipboardCustomEvent`](Interface.RevogrClipboardCustomEvent.md)\<`any`\>) => `void` | Paste 4. Fired after paste applied to the grid |
| `onBeforecopy?` | (`event`: [`RevogrClipboardCustomEvent`](Interface.RevogrClipboardCustomEvent.md)\<`any`\>) => `void` | Copy 1. Fired before copy triggered |
| `onBeforecopyapply?` | (`event`: [`RevogrClipboardCustomEvent`](Interface.RevogrClipboardCustomEvent.md)\<`any`\>) => `void` | Copy Method 1. Fired before copy applied to the clipboard from outside. |
| `onBeforecut?` | (`event`: [`RevogrClipboardCustomEvent`](Interface.RevogrClipboardCustomEvent.md)\<`any`\>) => `void` | Cut 1. Fired before cut triggered |
| `onBeforepaste?` | (`event`: [`RevogrClipboardCustomEvent`](Interface.RevogrClipboardCustomEvent.md)\<`any`\>) => `void` | Paste 1. Fired before paste applied to the grid |
| `onBeforepasteapply?` | (`event`: [`RevogrClipboardCustomEvent`](Interface.RevogrClipboardCustomEvent.md)\<`any`\>) => `void` | Paste 2. Fired before paste applied to the grid and after data parsed |
| `onClearregion?` | (`event`: [`RevogrClipboardCustomEvent`](Interface.RevogrClipboardCustomEvent.md)\<`DataTransfer`\>) => `void` | Cut 2. Clears region when cut is done |
| `onCopyregion?` | (`event`: [`RevogrClipboardCustomEvent`](Interface.RevogrClipboardCustomEvent.md)\<`DataTransfer`\>) => `void` | Copy 2. Fired when region copied |
| `onPasteregion?` | (`event`: [`RevogrClipboardCustomEvent`](Interface.RevogrClipboardCustomEvent.md)\<`string`[][]\>) => `void` | Paste 3. Internal method. When data region is ready pass it to the top. |
| `readonly?` | `boolean` | If readonly mode - disabled Paste event |
