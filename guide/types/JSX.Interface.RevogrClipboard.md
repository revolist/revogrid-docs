[@revolist/revogrid](README.md) / [JSX](Namespace.JSX.md) / RevogrClipboard

# Interface: RevogrClipboard

This Clipboard provides functionality for handling clipboard events in a web application.

## Properties

| Property | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| `onAfterpasteapply?` | (`event`: [`RevogrClipboardCustomEvent`](Interface.RevogrClipboardCustomEvent.md)\<`any`\>) => `void` | Paste 4. Fired after paste applied to the grid | [src/components.d.ts:1506](https://github.com/revolist/revogrid/blob/69db770b4dd0e83354c8d987e03567beaf944291/src/components.d.ts#L1506) |
| `onBeforecopy?` | (`event`: [`RevogrClipboardCustomEvent`](Interface.RevogrClipboardCustomEvent.md)\<`any`\>) => `void` | Copy 1. Fired before copy triggered | [src/components.d.ts:1512](https://github.com/revolist/revogrid/blob/69db770b4dd0e83354c8d987e03567beaf944291/src/components.d.ts#L1512) |
| `onBeforecopyapply?` | (`event`: [`RevogrClipboardCustomEvent`](Interface.RevogrClipboardCustomEvent.md)\<`any`\>) => `void` | Copy Method 1. Fired before copy applied to the clipboard from outside. | [src/components.d.ts:1519](https://github.com/revolist/revogrid/blob/69db770b4dd0e83354c8d987e03567beaf944291/src/components.d.ts#L1519) |
| `onBeforecut?` | (`event`: [`RevogrClipboardCustomEvent`](Interface.RevogrClipboardCustomEvent.md)\<`any`\>) => `void` | Cut 1. Fired before cut triggered | [src/components.d.ts:1525](https://github.com/revolist/revogrid/blob/69db770b4dd0e83354c8d987e03567beaf944291/src/components.d.ts#L1525) |
| `onBeforepaste?` | (`event`: [`RevogrClipboardCustomEvent`](Interface.RevogrClipboardCustomEvent.md)\<`any`\>) => `void` | Paste 1. Fired before paste applied to the grid | [src/components.d.ts:1532](https://github.com/revolist/revogrid/blob/69db770b4dd0e83354c8d987e03567beaf944291/src/components.d.ts#L1532) |
| `onBeforepasteapply?` | (`event`: [`RevogrClipboardCustomEvent`](Interface.RevogrClipboardCustomEvent.md)\<`any`\>) => `void` | Paste 2. Fired before paste applied to the grid and after data parsed | [src/components.d.ts:1538](https://github.com/revolist/revogrid/blob/69db770b4dd0e83354c8d987e03567beaf944291/src/components.d.ts#L1538) |
| `onClearregion?` | (`event`: [`RevogrClipboardCustomEvent`](Interface.RevogrClipboardCustomEvent.md)\<`DataTransfer`\>) => `void` | Cut 2. Clears region when cut is done | [src/components.d.ts:1542](https://github.com/revolist/revogrid/blob/69db770b4dd0e83354c8d987e03567beaf944291/src/components.d.ts#L1542) |
| `onCopyregion?` | (`event`: [`RevogrClipboardCustomEvent`](Interface.RevogrClipboardCustomEvent.md)\<`DataTransfer`\>) => `void` | Copy 2. Fired when region copied | [src/components.d.ts:1548](https://github.com/revolist/revogrid/blob/69db770b4dd0e83354c8d987e03567beaf944291/src/components.d.ts#L1548) |
| `onPasteregion?` | (`event`: [`RevogrClipboardCustomEvent`](Interface.RevogrClipboardCustomEvent.md)\<`string`[][]\>) => `void` | Paste 3. Internal method. When data region is ready pass it to the top. | [src/components.d.ts:1554](https://github.com/revolist/revogrid/blob/69db770b4dd0e83354c8d987e03567beaf944291/src/components.d.ts#L1554) |
| `readonly?` | `boolean` | If readonly mode - disabled Paste event | [src/components.d.ts:1558](https://github.com/revolist/revogrid/blob/69db770b4dd0e83354c8d987e03567beaf944291/src/components.d.ts#L1558) |
