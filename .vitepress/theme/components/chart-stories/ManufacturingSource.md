### Manufacturing: mount a chart

Copy the source module below and give the host an explicit height. Call this after the host mounts:

```ts
import { createChart } from '@revolist/charts'
import { buildManufacturingStory, selectParts } from './manufacturing-data'

const examples = buildManufacturingStory(selectParts())
const chart = await createChart({
  container: document.getElementById('chart')!,
  chartType: 'columnLine',
  ...examples.histogram,
})

// When the host unmounts:
// chart.destroy()
```

### Manufacturing: data and chart configurations

<<< @/charts/use-cases/manufacturing-data.ts

### Manufacturing: shared option type

<<< @/charts/use-cases/types.ts

### Manufacturing: host filters and lifecycle

The running example's Vue component owns filters, record inspection and cleanup:

<<< @/charts/use-cases/ManufacturingQuality.vue
