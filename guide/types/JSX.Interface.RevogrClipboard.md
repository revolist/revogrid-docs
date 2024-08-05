[@revolist/revogrid](README.md) / [JSX](Namespace.JSX.md) / RevogrClipboard

# Interface: RevogrClipboard

This Clipboard provides functionality for handling clipboard events in a web application.

## Properties

| Property | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| `onAfterpasteapply?` | (`event`: [`RevogrClipboardCustomEvent`](Interface.RevogrClipboardCustomEvent.md)\<`any`\>) => `void` | Paste 4. Fired after paste applied to the grid | [src/components.d.ts:1521](https://github.com/revolist/revogrid/blob/0b52000f7477669f9da5b2b768b7ac1b608db9f9/src/components.d.ts#L1521) |
| `onBeforecopy?` | (`event`: [`RevogrClipboardCustomEvent`](Interface.RevogrClipboardCustomEvent.md)\<`any`\>) => `void` | Copy 1. Fired before copy triggered | [src/components.d.ts:1527](https://github.com/revolist/revogrid/blob/0b52000f7477669f9da5b2b768b7ac1b608db9f9/src/components.d.ts#L1527) |
| `onBeforecopyapply?` | (`event`: [`RevogrClipboardCustomEvent`](Interface.RevogrClipboardCustomEvent.md)\<`any`\>) => `void` | Copy Method 1. Fired before copy applied to the clipboard from outside. | [src/components.d.ts:1534](https://github.com/revolist/revogrid/blob/0b52000f7477669f9da5b2b768b7ac1b608db9f9/src/components.d.ts#L1534) |
| `onBeforecut?` | (`event`: [`RevogrClipboardCustomEvent`](Interface.RevogrClipboardCustomEvent.md)\<`any`\>) => `void` | Cut 1. Fired before cut triggered | [src/components.d.ts:1540](https://github.com/revolist/revogrid/blob/0b52000f7477669f9da5b2b768b7ac1b608db9f9/src/components.d.ts#L1540) |
| `onBeforepaste?` | (`event`: [`RevogrClipboardCustomEvent`](Interface.RevogrClipboardCustomEvent.md)\<`any`\>) => `void` | Paste 1. Fired before paste applied to the grid | [src/components.d.ts:1547](https://github.com/revolist/revogrid/blob/0b52000f7477669f9da5b2b768b7ac1b608db9f9/src/components.d.ts#L1547) |
| `onBeforepasteapply?` | (`event`: [`RevogrClipboardCustomEvent`](Interface.RevogrClipboardCustomEvent.md)\<`any`\>) => `void` | Paste 2. Fired before paste applied to the grid and after data parsed | [src/components.d.ts:1553](https://github.com/revolist/revogrid/blob/0b52000f7477669f9da5b2b768b7ac1b608db9f9/src/components.d.ts#L1553) |
| `onClearregion?` | (`event`: [`RevogrClipboardCustomEvent`](Interface.RevogrClipboardCustomEvent.md)\<`DataTransfer`\>) => `void` | Cut 2. Clears region when cut is done | [src/components.d.ts:1557](https://github.com/revolist/revogrid/blob/0b52000f7477669f9da5b2b768b7ac1b608db9f9/src/components.d.ts#L1557) |
| `onCopyregion?` | (`event`: [`RevogrClipboardCustomEvent`](Interface.RevogrClipboardCustomEvent.md)\<`DataTransfer`\>) => `void` | Copy 2. Fired when region copied | [src/components.d.ts:1563](https://github.com/revolist/revogrid/blob/0b52000f7477669f9da5b2b768b7ac1b608db9f9/src/components.d.ts#L1563) |
| `onPasteregion?` | (`event`: [`RevogrClipboardCustomEvent`](Interface.RevogrClipboardCustomEvent.md)\<`string`[][]\>) => `void` | Paste 3. Internal method. When data region is ready pass it to the top. | [src/components.d.ts:1569](https://github.com/revolist/revogrid/blob/0b52000f7477669f9da5b2b768b7ac1b608db9f9/src/components.d.ts#L1569) |
| `readonly?` | `boolean` | If readonly mode - disabled Paste event | [src/components.d.ts:1573](https://github.com/revolist/revogrid/blob/0b52000f7477669f9da5b2b768b7ac1b608db9f9/src/components.d.ts#L1573) |
