-   **Summary on Breaking Changes**:

    -   Redesigned type support:
        -   Removed deprecated namespaces `RevoGrid`, `Selection` and others from type imports. Use direct import instead. For example:
            -   **Before**: `RevoGrid.ColumnRegular`
            -   **Now**: `ColumnRegular`;
                ...
        -   Improved type imports. For example:
            -   **Before**: `import { RevoGrid } from '@revolist/revogrid/dist/types/interfaces'`
            -   **Now**: `import { ColumnRegular } from '@revolist/revogrid'`.
        -   Changed viewport type names everywhere. For example, before: `rowDefinitions: [{ type: "row", index: 0, size: 145 }]`, after: `rowDefinitions: [{ type: "rgRow", index: 0, size: 145 }]`.
    -   Updated [event](/guide/api/events) naming convention. Review your [event](/guide/api/events) usage. [Event names](/guide/api/events) are all lowercase now and are aligned with modern event naming conventions. For example, `afterEdit` -> `afteredit`. Check migration guide for details.

-   **Major improvements**:

    -   Rethought the entire framework approach. Introduced [Pro](/pro/) version with advance support and pro features.
    -   Updated scrolling system for better mobile support.
    -   Advance template support. Introduced `additionalData` for templates and editors. `Prop` gives access to parent/root app context.
    -   Redesigned the documentation.
    -   Fixed major issues and significantly improved overall performance, making the grid multiple time faster.
    -   Enhanced plugin support - now with full access to grid providers.
    -   Provided full framework support and native render for [Angular](/guide/angular/), [React](/guide/react/), [Svelte](/guide/svelte/), and [Vue](/guide/vue3/), with partial support for Ember.
