## Versions

### 2.0+
- Introduced the plugin system, grouping, sorting, and filtering.

### 3.0+
- **Breaking Changes**:
    - Removed the redundant viewport component.
    - Renamed classes to support Bootstrap and other libraries:
        - `row` -> `rgRow`
        - `col` -> `rgCol`
        - `data-cell` -> `rgCell`
        - `data-header-cell` -> `rgHeaderCell`
    - Migrated all method names to lowercase to align with modern event naming conventions. For example, `afterEdit` is now `afteredit`. Check the API for details.
    - Added support for pure ESM modules to enable the use of the grid in all modern frontend tooling like Vite, Parcel, etc. You can now import custom elements without lazy loading. Note that you are responsible for polyfills.

### 4.0+
- **Breaking Changes**:
    - Rethought the entire framework approach.
    - Redesigned type support.
    - New event system. Event names are all lowercase now and are aligned with modern event naming conventions. For example, `afterEdit` is now `afteredit`.
    - Introduced slot support.
    - Advanced template support.
    - Redesigned the documentation.
    - Fixed major issues and significantly improved overall performance, making the grid much faster.
    - Enhanced plugin support.
    - Provided full framework support for Angular, React, and Vue, with partial support for Ember and Svelte.
