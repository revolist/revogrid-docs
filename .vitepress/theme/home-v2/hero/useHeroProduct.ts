import { computed, onBeforeUnmount, ref, shallowRef, watch } from 'vue'
import type { ViewFieldMap } from '@revolist/revogrid-pro'
import type { HomeV2Record } from '../homeV2Utils'
import { heroOwnerPhotos } from './people'
import type { HeroProductModule } from './products/types'
import type { HeroProject, HeroView } from './portfolio'

const fields: ViewFieldMap = {
  id: 'id',
  title: 'name',
  status: 'workflowStatus',
  start: 'startDate',
  end: 'endDate',
  progress: 'percentDone',
  resourceId: 'owner',
  color: 'color',
}
const loaders = {
  gantt: () => import('./products/gantt'),
  scheduler: () => import('./products/scheduler'),
  kanban: () => import('./products/kanban'),
  pivot: () => import('./products/pivot'),
}
/** Lazy product runtime/configuration; the parent retains authored grid data. */
export function useHeroProduct(props: {
  view: HeroView
  rows: HeroProject[]
  labels: HomeV2Record
}) {
  const resources = Object.entries(heroOwnerPhotos).map(([name, avatarUrl]) => ({
    id: name,
    name,
    avatarUrl,
  }))
  const product = shallowRef<HeroProductModule>()
  const state = ref<'loading' | 'ready' | 'error'>('ready')
  let version = 0

  async function load() {
    const request = ++version
    product.value = undefined
    if (props.view === 'grid' || props.view === 'charts') {
      state.value = 'ready'
      return
    }
    state.value = 'loading'
    try {
      const module = await loaders[props.view]()
      if (request !== version) return
      product.value = module.default
      state.value = 'ready'
    } catch {
      if (request === version) state.value = 'error'
    }
  }
  watch(() => props.view, load, { immediate: true })
  onBeforeUnmount(() => {
    version++
  })

  const config = computed(() =>
    product.value?.configure({ labels: props.labels, rows: props.rows, fields, resources }),
  )
  return { product, state, config, resources, load }
}
