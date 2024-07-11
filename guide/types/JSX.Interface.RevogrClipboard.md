[@revolist/revogrid](README.md) / [JSX](Namespace.JSX.md) / RevogrClipboard

# Interface: RevogrClipboard

This Clipboard provides functionality for handling clipboard events in a web application.

## Properties

| Property | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| `onAfterpasteapply?` | (`event`: [`RevogrClipboardCustomEvent`](Interface.RevogrClipboardCustomEvent.md)\<`any`\>) => `void` | Paste 4. Fired after paste applied to the grid | [src/components.d.ts:1508](https://github.com/revolist/revogrid/blob/2f44a261094fb5584023b62ddfd589facc70cf92/src/components.d.ts#L1508) |
| `onBeforecopy?` | (`event`: [`RevogrClipboardCustomEvent`](Interface.RevogrClipboardCustomEvent.md)\<`any`\>) => `void` | Copy 1. Fired before copy triggered | [src/components.d.ts:1514](https://github.com/revolist/revogrid/blob/2f44a261094fb5584023b62ddfd589facc70cf92/src/components.d.ts#L1514) |
| `onBeforecopyapply?` | (`event`: [`RevogrClipboardCustomEvent`](Interface.RevogrClipboardCustomEvent.md)\<`any`\>) => `void` | Copy Method 1. Fired before copy applied to the clipboard from outside. | [src/components.d.ts:1521](https://github.com/revolist/revogrid/blob/2f44a261094fb5584023b62ddfd589facc70cf92/src/components.d.ts#L1521) |
| `onBeforecut?` | (`event`: [`RevogrClipboardCustomEvent`](Interface.RevogrClipboardCustomEvent.md)\<`any`\>) => `void` | Cut 1. Fired before cut triggered | [src/components.d.ts:1527](https://github.com/revolist/revogrid/blob/2f44a261094fb5584023b62ddfd589facc70cf92/src/components.d.ts#L1527) |
| `onBeforepaste?` | (`event`: [`RevogrClipboardCustomEvent`](Interface.RevogrClipboardCustomEvent.md)\<`any`\>) => `void` | Paste 1. Fired before paste applied to the grid | [src/components.d.ts:1534](https://github.com/revolist/revogrid/blob/2f44a261094fb5584023b62ddfd589facc70cf92/src/components.d.ts#L1534) |
| `onBeforepasteapply?` | (`event`: [`RevogrClipboardCustomEvent`](Interface.RevogrClipboardCustomEvent.md)\<`any`\>) => `void` | Paste 2. Fired before paste applied to the grid and after data parsed | [src/components.d.ts:1540](https://github.com/revolist/revogrid/blob/2f44a261094fb5584023b62ddfd589facc70cf92/src/components.d.ts#L1540) |
| `onClearregion?` | (`event`: [`RevogrClipboardCustomEvent`](Interface.RevogrClipboardCustomEvent.md)\<`DataTransfer`\>) => `void` | Cut 2. Clears region when cut is done | [src/components.d.ts:1544](https://github.com/revolist/revogrid/blob/2f44a261094fb5584023b62ddfd589facc70cf92/src/components.d.ts#L1544) |
| `onCopyregion?` | (`event`: [`RevogrClipboardCustomEvent`](Interface.RevogrClipboardCustomEvent.md)\<`DataTransfer`\>) => `void` | Copy 2. Fired when region copied | [src/components.d.ts:1550](https://github.com/revolist/revogrid/blob/2f44a261094fb5584023b62ddfd589facc70cf92/src/components.d.ts#L1550) |
| `onPasteregion?` | (`event`: [`RevogrClipboardCustomEvent`](Interface.RevogrClipboardCustomEvent.md)\<`string`[][]\>) => `void` | Paste 3. Internal method. When data region is ready pass it to the top. | [src/components.d.ts:1556](https://github.com/revolist/revogrid/blob/2f44a261094fb5584023b62ddfd589facc70cf92/src/components.d.ts#L1556) |
| `readonly?` | `boolean` | If readonly mode - disabled Paste event | [src/components.d.ts:1560](https://github.com/revolist/revogrid/blob/2f44a261094fb5584023b62ddfd589facc70cf92/src/components.d.ts#L1560) |
