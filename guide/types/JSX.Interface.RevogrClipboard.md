[@revolist/revogrid](README.md) / [JSX](Namespace.JSX.md) / RevogrClipboard

# Interface: RevogrClipboard

This Clipboard provides functionality for handling clipboard events in a web application.

## Properties

| Property | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| `onAfterpasteapply?` | (`event`: [`RevogrClipboardCustomEvent`](Interface.RevogrClipboardCustomEvent.md)\<`any`\>) => `void` | Paste 4. Fired after paste applied to the grid | [src/components.d.ts:1520](https://github.com/revolist/revogrid/blob/424884a9332ccde4a5d40c39536fe61d1ccacbfc/src/components.d.ts#L1520) |
| `onBeforecopy?` | (`event`: [`RevogrClipboardCustomEvent`](Interface.RevogrClipboardCustomEvent.md)\<`any`\>) => `void` | Copy 1. Fired before copy triggered | [src/components.d.ts:1526](https://github.com/revolist/revogrid/blob/424884a9332ccde4a5d40c39536fe61d1ccacbfc/src/components.d.ts#L1526) |
| `onBeforecopyapply?` | (`event`: [`RevogrClipboardCustomEvent`](Interface.RevogrClipboardCustomEvent.md)\<`any`\>) => `void` | Copy Method 1. Fired before copy applied to the clipboard from outside. | [src/components.d.ts:1533](https://github.com/revolist/revogrid/blob/424884a9332ccde4a5d40c39536fe61d1ccacbfc/src/components.d.ts#L1533) |
| `onBeforecut?` | (`event`: [`RevogrClipboardCustomEvent`](Interface.RevogrClipboardCustomEvent.md)\<`any`\>) => `void` | Cut 1. Fired before cut triggered | [src/components.d.ts:1539](https://github.com/revolist/revogrid/blob/424884a9332ccde4a5d40c39536fe61d1ccacbfc/src/components.d.ts#L1539) |
| `onBeforepaste?` | (`event`: [`RevogrClipboardCustomEvent`](Interface.RevogrClipboardCustomEvent.md)\<`any`\>) => `void` | Paste 1. Fired before paste applied to the grid | [src/components.d.ts:1546](https://github.com/revolist/revogrid/blob/424884a9332ccde4a5d40c39536fe61d1ccacbfc/src/components.d.ts#L1546) |
| `onBeforepasteapply?` | (`event`: [`RevogrClipboardCustomEvent`](Interface.RevogrClipboardCustomEvent.md)\<`any`\>) => `void` | Paste 2. Fired before paste applied to the grid and after data parsed | [src/components.d.ts:1552](https://github.com/revolist/revogrid/blob/424884a9332ccde4a5d40c39536fe61d1ccacbfc/src/components.d.ts#L1552) |
| `onClearregion?` | (`event`: [`RevogrClipboardCustomEvent`](Interface.RevogrClipboardCustomEvent.md)\<`DataTransfer`\>) => `void` | Cut 2. Clears region when cut is done | [src/components.d.ts:1556](https://github.com/revolist/revogrid/blob/424884a9332ccde4a5d40c39536fe61d1ccacbfc/src/components.d.ts#L1556) |
| `onCopyregion?` | (`event`: [`RevogrClipboardCustomEvent`](Interface.RevogrClipboardCustomEvent.md)\<`DataTransfer`\>) => `void` | Copy 2. Fired when region copied | [src/components.d.ts:1562](https://github.com/revolist/revogrid/blob/424884a9332ccde4a5d40c39536fe61d1ccacbfc/src/components.d.ts#L1562) |
| `onPasteregion?` | (`event`: [`RevogrClipboardCustomEvent`](Interface.RevogrClipboardCustomEvent.md)\<`string`[][]\>) => `void` | Paste 3. Internal method. When data region is ready pass it to the top. | [src/components.d.ts:1568](https://github.com/revolist/revogrid/blob/424884a9332ccde4a5d40c39536fe61d1ccacbfc/src/components.d.ts#L1568) |
| `readonly?` | `boolean` | If readonly mode - disabled Paste event | [src/components.d.ts:1572](https://github.com/revolist/revogrid/blob/424884a9332ccde4a5d40c39536fe61d1ccacbfc/src/components.d.ts#L1572) |
