### Reliability: mount a chart

Copy the source module below and give the host an explicit height. Call this after the host mounts:

```ts
import { createChart } from '@revolist/charts'
import { reliabilityExamples, selectRequests } from './reliability-data'

const examples = reliabilityExamples(selectRequests())
const chart = await createChart({
  container: document.getElementById('chart')!,
  chartType: 'columnLine',
  ...examples.trend,
})

// When the host unmounts:
// chart.destroy()
```

### Reliability: data and chart configurations

<<< @/charts/use-cases/reliability-data.ts

### Reliability: shared option type

<<< @/charts/use-cases/types.ts

### Reliability: host filters and lifecycle

The running example's Vue component owns filters, record inspection and cleanup:

<<< @/charts/use-cases/ServiceReliability.vue
