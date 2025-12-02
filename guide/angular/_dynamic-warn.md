::: warning Dynamic Component Usage
When using RevoGrid with Angular 19+, there are known issues with dynamically loading or using the component in certain scenarios. The grid frame may render, but columns and source data may not display properly.

**Known Issues:**
- Columns and source data may not render when the component is used dynamically
- Plugins and readonly properties may stop working in some dynamic scenarios
- Silent errors may occur without visible error messages

**Related Issue:** [GitHub Issue #798](https://github.com/revolist/revogrid/issues/798)

**Helpful Resources:**
- [Angular Component Communication](https://angular.dev/guide/components/inputs-outputs)
- [Angular Standalone Components](https://angular.dev/guide/components/importing)
- [Angular Router Outlet](https://angular.dev/api/router/RouterOutlet)


If you encounter issues with dynamic component usage, please report them on [GitHub Issues](https://github.com/revolist/revogrid/issues) with details about your Angular version and setup.
:::
