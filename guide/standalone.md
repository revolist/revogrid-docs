# Single file bundle

RevoGrid also offers a single file bundle without the polyfills and other additional functionality included in the default output.

You would need additional dependency to load RevoGrid as standalone esm module.

::: code-group

```npm
npm i @stencil/core

```

```pnpm
pnpm add @stencil/core
```

```yarn
yarn add @stencil/core
```

```bun
bun add @stencil/core
```
:::

Now you can import `RevoGrid` into your app:

```js
import { defineCustomElement } from "@revolist/revogrid/standalone";

// A utility defineCustomElement() function is exported from esm file of the output directory.
// This function can be used to quickly define all RevoGrid components in a project on the custom elements registry.
defineCustomElement();

import { defineCustomElement as defineFilterPanel } from '@revolist/revogrid/standalone/revogr-filter-panel.js';
// Filter is defined as a standalone component plugin and should be imported here
defineFilterPanel?.();
```

Please note that this standalone output does not automatically define the custom elements or apply any polyfills which is why we’re defining the custom element above ourselves.

For more details, please see [Stencil.js documentation](https://stenciljs.com/docs/custom-elements).


<!--@include: ../demo/js/js.start.standalone.md-->