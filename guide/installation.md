# Installation



## Package Manager Installation

First, install `Revogrid` using your preferred package manager.

::: code-group

```npm
npm i @revolist/Revogrid

```

```pnpm
pnpm add @revolist/Revogrid
```

```yarn
yarn add @revolist/Revogrid
```

```bun
npm i @revolist/Revogrid
```

:::

After installation, you can import `Revogrid` into your module. If you're using ES Modules in your project, here’s how you can import it:
```js
import { Revogrid } from '@revolist/Revogrid';
```
This import statement brings the Revogrid component into your project, allowing you to utilize it within your JavaScript or TypeScript files. From here, you can proceed to instantiate and configure your grid according to your project's requirements.


## No-Build Integration

Integrating components into a project doesn't have to be complicated, especially when not working within a JavaScript framework. If you're crafting a site with simple HTML, adding `Revogrid` is as easy as inserting a script tag.


### CDN

To quickly include `Revogrid` in your project, you can use a `CDN` like unpkg. Here’s how you can do it:

```js
<script src="https://unpkg.com/@revolist/Revogrid@latest/dist/revo-grid/revo-grid.js"></script>
```


### ES Module Import


For a more modern approach that leverages ES Modules, you can import `Revogrid` components directly. This method is particularly beneficial if you're aiming to maintain a modular project structure.

```js
<script type="module">
    import { applyPolyfills, defineCustomElements } from "https://unpkg.com/@revolist/Revogrid@latest/loader";
    applyPolyfills().then(() => {
        defineCustomElements();
    });
</script>
```

This import statement not only loads Revogrid but also ensures that any necessary polyfills are applied, making your project compatible with a broader range of browsers.
