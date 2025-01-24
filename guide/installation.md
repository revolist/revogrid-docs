# Installation

<!--@include: ./parts/_framework.md-->


## Package Manager Installation

First, install `revo-grid` using your preferred package manager.

::: code-group

```npm
npm i @revolist/revogrid

```

```pnpm
pnpm add @revolist/revogrid
```

```yarn
yarn add @revolist/revogrid
```

```bun
bun add @revolist/revogrid
```
:::

After installation, you can import `RevoGrid` into your module. 

Using lazy loading:

```js
import { defineCustomElements } from "@revolist/revogrid/loader";
// defineCustomElements function can be used to quickly define all RevoGrid components in a project on the custom elements registry.
defineCustomElements();
```

If you're using ES Modules in your project, [here’s how you can import it](./standalone).



This import statement brings the RevoGrid component into your project, allowing you to utilize it within your JavaScript or TypeScript files. From here, you can proceed to instantiate and configure your grid according to your project's requirements.


## No-Build Integration

Integrating components into a project doesn't have to be complicated, especially when not working within a JavaScript framework. If you're crafting a site with simple HTML, adding `RevoGrid` is as easy as inserting a script tag.


### CDN

To quickly include `RevoGrid` in your project, you can use a `CDN` like unpkg. Here’s how you can do it:

```js
<script src="https://unpkg.com/@revolist/revogrid@latest/dist/revo-grid/revo-grid.js"></script>
```


### ES Module Import


For a more modern approach that leverages ES Modules, you can import `RevoGrid` components directly. This method is particularly beneficial if you're aiming to maintain a modular project structure.

```js
<script type="module">
    import { applyPolyfills, defineCustomElements } from "https://unpkg.com/@revolist/revogrid@latest/loader";
    applyPolyfills().then(() => {
        defineCustomElements();
    });
</script>
```

This import statement not only loads RevoGrid but also ensures that any necessary polyfills are applied, making your project compatible with a broader range of browsers.
