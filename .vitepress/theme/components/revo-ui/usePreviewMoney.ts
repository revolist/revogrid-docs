import { computed } from 'vue'
import { useData } from 'vitepress'

export function usePreviewMoney() {
  const { lang } = useData()
  const formatter = computed(
    () =>
      new Intl.NumberFormat(lang.value, {
        style: 'currency',
        currency: 'USD',
        maximumFractionDigits: 0,
      }),
  )
  return (value: number) => formatter.value.format(value)
}
