[RevoGrid Documentation v4.31.8](README.md) / [Components](Namespace.Components.md) / RevogrClipboard

# Interface: RevogrClipboard

This Clipboard provides functionality for handling clipboard events in a web application.

## Properties

| Property | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| `doCopy` | (`e`: `DataTransfer`, `data`?: `any`[][]) => `Promise`\<`void`\> | - | [src/components.d.ts:379](https://github.com/revolist/revogrid/blob/d3fcbce83dfdc16a79a05fb2ad67e78e03bb7bb7/src/components.d.ts#L379) |
| `getCopyData?` | () => `undefined` \| `false` \| `any`[][] | - | [src/components.d.ts:380](https://github.com/revolist/revogrid/blob/d3fcbce83dfdc16a79a05fb2ad67e78e03bb7bb7/src/components.d.ts#L380) |
| `readonly` | `boolean` | If readonly mode - disabled Paste event | [src/components.d.ts:384](https://github.com/revolist/revogrid/blob/d3fcbce83dfdc16a79a05fb2ad67e78e03bb7bb7/src/components.d.ts#L384) |
