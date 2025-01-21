<div style="text-align: center">


# Svelte Data Grid Getting Started

<img src="/svelte.svg" alt="Svelte logo" width="300" height="300" style="margin: 20px auto;" />

</div>


::: warning

We have updated our latest version to support **Svelte 5** following its official release. 🎉  
Read more about the announcement here: [Svelte 5 is Alive](https://svelte.dev/blog/svelte-5-is-alive).

If you want to continue using **Svelte 4**, please switch to the [svelte-4](https://github.com/revolist/svelte-datagrid/tree/svelte-4) branch or use version prior to 4.11.0.

:::

Revogrid provide special wrapper based on [stenciljs svelte adapter](https://www.npmjs.com/package/@stencil/svelte-output-target). Just import it to your project and it can be used as part of svelte system.


<!--@include: ./install.md-->


## Example

<<< @/demo/svelte/svelte.sample.svelte

<!--@include: ../../demo/svelte/svelte-datagrid.md-->




## SvelteKit

::: warning

SSR is not compatible with RevoGrid out of the box because it depends on the browser environment.
There is no documentation on hybrid projects with server-side rendering (SSR) for SvelteKit at this time. This is going to be added in the future.

:::

Here are two approaches to use RevoGrid in a SvelteKit project:


### Option 1: Disable SSR

You can disable SSR for the entire page where RevoGrid is used. This ensures the page is rendered only on the client.

Add a `+page.js` (For JavaScript Projects) or `+page.ts` (For TypeScript Projects) file in the same directory as your `+page.svelte`:

```typescript
// +page.js or +page.ts
export const ssr = false;
```

With this setup, your +page.svelte can directly use RevoGrid:

```svelte
<script>
  import { RevoGrid } from '@revolist/svelte-datagrid';
</script>
<RevoGrid />
```

### Option 2: Use CSR (Client-Side Rendering)

If you don’t want to disable SSR for the entire page, you can render RevoGrid only in the browser using CSR loading techniques.

#### CSR: Conditional Rendering Based on the Browser

Use the browser variable from SvelteKit to ensure RevoGrid is only rendered on the client side:

```svelte
<script>
  import { browser } from '$app/environment';
  import { RevoGrid } from '@revolist/svelte-datagrid';
</script>

{#if browser}
  <RevoGrid />
{:else}
  <p>RevoGrid is not available during server-side rendering.</p>
{/if}
```

#### CSR: Lazy-Loading

You can dynamically import RevoGrid using Svelte’s onMount lifecycle method. This ensures the library is only loaded after the page is mounted in the browser:

```svelte
<script>
  import { onMount } from 'svelte';
  let RevoGrid;

  onMount(async () => {
    const module = await import('@revolist/svelte-datagrid');
    RevoGrid = module.RevoGrid;
  });
</script>

{#if RevoGrid}
  <RevoGrid />
{:else}
  <p>Loading RevoGrid...</p>
{/if}
```

Check out our repo for example: [SvelteKit](https://github.com/revolist/revogrid-svelte-kit)

When to Use These Options?

- Disabling SSR for the Page: Use this if the entire page depends on RevoGrid and SSR isn’t necessary.
- Client-Side Rendering (CSR) for RevoGrid: Use this if you need other parts of the page to be server-rendered but still want to use RevoGrid in the browser.

With these methods, you can successfully integrate RevoGrid into your SvelteKit project while handling its lack of SSR compatibility.
