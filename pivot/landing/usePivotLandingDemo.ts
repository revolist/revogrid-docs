import { computed, type Ref } from 'vue'
import { QUARTERS, RAW, REGIONS, type AggMode, type PivotRawRow } from './pivotLandingData'

export function usePivotLandingDemo(agg: Ref<AggMode>) {
  const values = (filter: Partial<PivotRawRow>) => RAW
    .filter((row) => Object.entries(filter).every(([key, value]) => row[key as keyof PivotRawRow] === value))
    .map((row) => row.rev)

  const aggregate = (numbers: number[]) => {
    if (!numbers.length) return 0
    if (agg.value === 'count') return numbers.length
    if (agg.value === 'avg') return Math.round(numbers.reduce((total, value) => total + value, 0) / numbers.length)
    return numbers.reduce((total, value) => total + value, 0)
  }

  const regionTotal = (region: string, quarter: string) => aggregate(values({ region, quarter }))
  const productValue = (region: string, product: string, quarter: string) => aggregate(values({ region, product, quarter }))
  const regionGrandTotal = (region: string) => aggregate(values({ region }))
  const productGrandTotal = (region: string, product: string) => aggregate(values({ region, product }))
  const quarterGrandTotal = (quarter: string) => aggregate(values({ quarter }))
  const grandTotal = computed(() => aggregate(RAW.map((row) => row.rev)))
  const maxRegionQuarter = computed(() => Math.max(...REGIONS.flatMap((region) => QUARTERS.map((quarter) => regionTotal(region, quarter)))))

  const format = (value: number) => {
    if (agg.value === 'count') return String(value)
    if (value >= 1000000) return `$${(value / 1000000).toFixed(2)}M`
    if (value >= 1000) return `$${(value / 1000).toFixed(1)}K`
    return `$${Math.round(value).toLocaleString()}`
  }

  const barWidth = (value: number) => `${Math.max(3, Math.round((value / maxRegionQuarter.value) * 56))}px`

  return {
    barWidth,
    format,
    grandTotal,
    productGrandTotal,
    productValue,
    quarterGrandTotal,
    regionGrandTotal,
    regionTotal,
  }
}
