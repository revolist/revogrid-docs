### Fulfilment: mount a chart

Copy the source module below and give the host an explicit height. Call this after the host mounts:

```ts
import { createChart } from '@revolist/charts'
import { buildFulfilmentStory } from './fulfilment-data'

const examples = buildFulfilmentStory({ warehouse: '', carrier: '', region: '', period: 'all' })
const chart = await createChart({
  container: document.getElementById('chart')!,
  chartType: 'sankey',
  ...examples.flow,
})

// When the host unmounts:
// chart.destroy()
```

### Fulfilment: data and chart configurations

<<< @/charts/use-cases/fulfilment-data.ts

### Fulfilment: shared option type

<<< @/charts/use-cases/types.ts

### Fulfilment: host filters and lifecycle

The running example's Vue component owns filters and cleanup:

<<< @/charts/use-cases/FulfilmentBottlenecks.vue
