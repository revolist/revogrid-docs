```ts
const chart = await createChart({
  ...options,
  rendererOptions: { transitions: false },
})
await chart.update({ data: nextRows })
```
