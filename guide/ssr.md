# SSR (Server side rendering)

Revogrid library includes a hydrate app that is a bundle of the same components, but compiled so that they can be hydrated on a NodeJS server and generate static HTML and CSS. To get started, import the hydrate app into your server’s code like so:

```js
import hydrate from "@revolist/revogrid/hydrate"
```

If you are using for example [Eleventy](https://www.11ty.dev/), you could now add a transform into `.eleventy.js` configuration file that takes content as an input and processes it using Revogrid’s hydrate app:

```js
eleventyConfig.addTransform("hydrate", async(content, outputPath) => {
  if (process.env.ELEVENTY_ENV == "production") {
    if (outputPath.endsWith(".html")) {
      try {
        const results = await hydrate.renderToString(content, {
          clientHydrateAnnotations: true,
          removeScripts: false,
          removeUnusedStyles: false
        })
        return results.html
      } catch (error) {
        return error
      }
    }
  }
  return content
})
```

The above transform gives you server side rendered components that function without JavaScript. Please note that you need to separately pre-render the content for each theme you want to support.
