# Single file bundle

Revogrid also offers a single file bundle without the polyfills and other additional functionality included in the default output. To import that instead of the default output, use:

```jsx
import { RevoGrid } from "@revolist/revogrid/custom-element";

customElements.define("revo-grid", RevoGrid);
```

Please note that this custom-element output does not automatically define the custom elements or apply any polyfills which is why we’re defining the custom element above ourselves.

For more details, please see [Stencil.js documentation](https://stenciljs.com/docs/custom-elements).