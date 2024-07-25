[@revolist/revogrid](README.md) / [JSX](Namespace.JSX.md) / RevogrClipboard

# Interface: RevogrClipboard

This Clipboard provides functionality for handling clipboard events in a web application.

## Properties

| Property | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| `onAfterpasteapply?` | (`event`: [`RevogrClipboardCustomEvent`](Interface.RevogrClipboardCustomEvent.md)\<`any`\>) => `void` | Paste 4. Fired after paste applied to the grid | [src/components.d.ts:1519](https://github.com/revolist/revogrid/blob/b6cbd022f95d7e046d6bc88abeaf01a3bc067577/src/components.d.ts#L1519) |
| `onBeforecopy?` | (`event`: [`RevogrClipboardCustomEvent`](Interface.RevogrClipboardCustomEvent.md)\<`any`\>) => `void` | Copy 1. Fired before copy triggered | [src/components.d.ts:1525](https://github.com/revolist/revogrid/blob/b6cbd022f95d7e046d6bc88abeaf01a3bc067577/src/components.d.ts#L1525) |
| `onBeforecopyapply?` | (`event`: [`RevogrClipboardCustomEvent`](Interface.RevogrClipboardCustomEvent.md)\<`any`\>) => `void` | Copy Method 1. Fired before copy applied to the clipboard from outside. | [src/components.d.ts:1532](https://github.com/revolist/revogrid/blob/b6cbd022f95d7e046d6bc88abeaf01a3bc067577/src/components.d.ts#L1532) |
| `onBeforecut?` | (`event`: [`RevogrClipboardCustomEvent`](Interface.RevogrClipboardCustomEvent.md)\<`any`\>) => `void` | Cut 1. Fired before cut triggered | [src/components.d.ts:1538](https://github.com/revolist/revogrid/blob/b6cbd022f95d7e046d6bc88abeaf01a3bc067577/src/components.d.ts#L1538) |
| `onBeforepaste?` | (`event`: [`RevogrClipboardCustomEvent`](Interface.RevogrClipboardCustomEvent.md)\<`any`\>) => `void` | Paste 1. Fired before paste applied to the grid | [src/components.d.ts:1545](https://github.com/revolist/revogrid/blob/b6cbd022f95d7e046d6bc88abeaf01a3bc067577/src/components.d.ts#L1545) |
| `onBeforepasteapply?` | (`event`: [`RevogrClipboardCustomEvent`](Interface.RevogrClipboardCustomEvent.md)\<`any`\>) => `void` | Paste 2. Fired before paste applied to the grid and after data parsed | [src/components.d.ts:1551](https://github.com/revolist/revogrid/blob/b6cbd022f95d7e046d6bc88abeaf01a3bc067577/src/components.d.ts#L1551) |
| `onClearregion?` | (`event`: [`RevogrClipboardCustomEvent`](Interface.RevogrClipboardCustomEvent.md)\<`DataTransfer`\>) => `void` | Cut 2. Clears region when cut is done | [src/components.d.ts:1555](https://github.com/revolist/revogrid/blob/b6cbd022f95d7e046d6bc88abeaf01a3bc067577/src/components.d.ts#L1555) |
| `onCopyregion?` | (`event`: [`RevogrClipboardCustomEvent`](Interface.RevogrClipboardCustomEvent.md)\<`DataTransfer`\>) => `void` | Copy 2. Fired when region copied | [src/components.d.ts:1561](https://github.com/revolist/revogrid/blob/b6cbd022f95d7e046d6bc88abeaf01a3bc067577/src/components.d.ts#L1561) |
| `onPasteregion?` | (`event`: [`RevogrClipboardCustomEvent`](Interface.RevogrClipboardCustomEvent.md)\<`string`[][]\>) => `void` | Paste 3. Internal method. When data region is ready pass it to the top. | [src/components.d.ts:1567](https://github.com/revolist/revogrid/blob/b6cbd022f95d7e046d6bc88abeaf01a3bc067577/src/components.d.ts#L1567) |
| `readonly?` | `boolean` | If readonly mode - disabled Paste event | [src/components.d.ts:1571](https://github.com/revolist/revogrid/blob/b6cbd022f95d7e046d6bc88abeaf01a3bc067577/src/components.d.ts#L1571) |
