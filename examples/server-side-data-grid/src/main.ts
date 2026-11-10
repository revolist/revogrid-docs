import { defineCustomElements } from '@revolist/revogrid/loader'
import type { ColumnRegular } from '@revolist/revogrid'
import { PaginationPlugin, type PaginationFullConfig } from '@revolist/revogrid-pro'
import '@revolist/revogrid-pro/styles.css'
import {
  amountToCents,
  columns,
  isUtc,
  statuses,
  type Condition,
  type Filter,
  type Query,
} from '../shared/query.ts'
import { createOrdersLoader, httpOrders, type LoadedOrders } from './load-orders.ts'
import '@revolist/ui/styles.css'
import '@revolist/ui/dropdown/editor-dropdown.style.scss'
import { installUi } from './ui-controls.ts'
import { statusBadge, statusNames } from './status-badges.ts'
import { mountPageChart } from './page-chart.ts'
import './style.css'

export const messages = {
  eyebrow: 'RE V O G R I D / SERVER DATA',
  heading: 'Orders from a SQL-backed API',
  intro: 'Pro PaginationPlugin loads one page from the SQL API and owns the paging controls.',
  account: 'Pro trial · Demo account A · synthetic orders',
  search: 'Search order ID or customer',
  placeholder: 'Try Needle',
  searchHelp:
    'Matches ID or customer name. Case-insensitive ASCII matching; spaces at either end are ignored.',
  customer: 'Customer',
  contains: 'Contains',
  equals: 'Equals',
  status: 'Status',
  total: 'Amount (USD)',
  gte: 'At least',
  lte: 'At most',
  isNull: 'Is not calculated',
  from: 'Created on or after (UTC)',
  until: 'Created before (UTC)',
  dateHelp: 'UTC midnight: the start day is included; the end day is excluded.',
  fromPicker: 'Choose start date',
  untilPicker: 'Choose end date',
  pickerApply: 'Apply date',
  pickerCancel: 'Cancel',
  pickerClear: 'Clear date',
  pickerDate: 'Date',
  calendarLocale: 'en-US',
  apply: 'Apply filters',
  clear: 'Clear filters',
  sort: 'Sort order',
  ascending: 'Ascending',
  descending: 'Descending',
  none: 'None',
  sortHelp: 'Add another sort field to break ties. Order ID provides the final stable order.',
  resetSort: 'Reset sorting',
  size: 'Rows per page',
  first: 'First page',
  last: 'Last page',
  previous: 'Previous page',
  next: 'Next page',
  loading: 'Loading orders…',
  updating: 'Updating orders… The plugin clears the previous page while loading.',
  error: 'Could not load these orders. Please try again.',
  retry: 'Retry',
  empty: 'No orders match these filters.',
  noPages: 'No pages.',
  recovered: 'That page is no longer available. The plugin is loading the last valid page.',
  inspect: 'Query details',
  requested: 'Requested query',
  displayed: 'Displayed query',
  scope: 'Server-selected demo account A',
  demo: 'Request delivery demonstrations',
  race: 'Demonstrate overlapping requests',
  release: 'Release earlier result',
  fail: 'Fail next request',
  reset: 'Reset example',
  demoHelp:
    'These controls delay delivery of a real SQL response or reject it in the client. They demonstrate ordering and recovery, not database speed.',
  held: 'Earlier Needle response is held. Boundary is now the latest query.',
  released: 'Earlier response released; the latest query stays displayed.',
  failureArmed:
    'The next successful HTTP result will be rejected by the controlled client transport.',
  duplicateSort: 'Choose each sort field only once.',
  invalidDate: 'Enter a valid date in YYYY-MM-DD format.',
  invertedDate: 'The end must be after the start.',
  invalidAmount: 'Enter a nonnegative amount with up to two decimal places.',
  id: 'Order ID',
  customerColumn: 'Customer',
  statusColumn: 'Status',
  totalColumn: 'Total (USD)',
  createdAt: 'Created (UTC)',
  nullTotal: 'Not calculated',
  count: 'Showing {start}–{end} of {total} matching orders',
  pageLabel: 'Page',
  of: 'of',
  items: 'matching orders',
  pendingStatus: 'Pending',
  paidStatus: 'Paid',
  shippedStatus: 'Shipped',
  cancelledStatus: 'Cancelled',
  chartEyebrow: 'LIVE / PIVOT',
  chartHeading: 'Orders by status',
  chartScope: 'Current page only · updates with the table',
  chartCount: '{total} orders on this page',
  chartCountOne: '1 order on this page',
  chartMeasure: 'Orders',
  chartUnavailable: 'Chart unavailable. The table is still usable.',
}
const interpolate = (text: string, vars: Record<string, number>) =>
  text.replace(/\{(\w+)\}/g, (_, key: string) => String(vars[key]))
const escape = (text: string) =>
  text.replace(
    /[&<>"']/g,
    char => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[char]!,
  )

export function mountOrders(root: HTMLElement, overrides: Partial<typeof messages> = {}) {
  const t = { ...messages, ...overrides }
  const e = (key: keyof typeof messages) => escape(t[key])
  const statusLabels = statusNames(t)
  const labels = {
    id: t.id,
    customer: t.customerColumn,
    status: t.statusColumn,
    totalCents: t.totalColumn,
    createdAt: t.createdAt,
  }
  root.innerHTML = `<header><p class="eyebrow">${e('eyebrow')}</p><h1>${e('heading')}</h1><p>${e('intro')}</p><p class="badge">${e('account')}</p></header>
    <section class="shell"><form id="filters"><div class="filters">
      <label class="wide">${e('search')}<input name="search" placeholder="${e('placeholder')}" maxlength="80"><small>${e('searchHelp')}</small></label>
      <label>${e('customer')}<span class="pair"><select name="customerOp" aria-label="${e('customer')} operation"><option value="contains">${e('contains')}</option><option value="eq">${e('equals')}</option></select><input name="customer" aria-label="${e('customer')} value" maxlength="80"></span></label>
      <label>${e('total')}<span class="pair"><select name="amountOp" aria-label="${e('total')} operation"><option value="gte">${e('gte')}</option><option value="lte">${e('lte')}</option><option value="eq">${e('equals')}</option><option value="isNull">${e('isNull')}</option></select><input name="amount" aria-label="${e('total')}" inputmode="decimal"></span></label>
      <fieldset><legend>${e('status')}</legend>${statuses.map(status => `<label class="check"><input name="status" type="checkbox" value="${status}">${escape(statusLabels[status])}</label>`).join('')}</fieldset>
      <label>${e('from')}<input name="from" placeholder="YYYY-MM-DD" maxlength="10"></label><label>${e('until')}<input name="until" placeholder="YYYY-MM-DD" maxlength="10"><small>${e('dateHelp')}</small></label>
    </div><div class="actions"><button class="rv-btn-primary" type="submit">${e('apply')}</button><button type="button" id="clear">${e('clear')}</button><label>${e('size')}<select id="size">${[1, 10, 25, 50, 100].map(n => `<option ${n === 10 ? 'selected' : ''}>${n}</option>`).join('')}</select></label></div></form>
    <fieldset class="sort"><legend>${e('sort')}</legend><div class="sort-fields">${[0, 1, 2].map(index => `<span class="pair"><select aria-label="${e('sort')} ${index + 1}" id="sort-${index}"><option value="">${e('none')}</option>${columns.map(field => `<option value="${field}">${escape(labels[field])}</option>`).join('')}</select><select aria-label="${e('sort')} ${index + 1} direction" id="direction-${index}"><option value="asc">${e('ascending')}</option><option value="desc">${e('descending')}</option></select></span>`).join('')}</div><small>${e('sortHelp')}</small><button id="reset-sort">${e('resetSort')}</button></fieldset>
    <div role="alert" id="form-error" class="error" hidden></div><div role="status" aria-live="polite" id="status" class="status"></div>
    <div class="error" role="alert" id="load-error" hidden><span id="load-error-message"></span><button id="retry">${e('retry')}</button></div>
    <div class="results"><div class="table-panel"><div class="grid-wrap"></div><p id="empty" hidden>${e('empty')}</p></div><section class="chart-panel" aria-label="${e('chartHeading')}"><p class="eyebrow">${e('chartEyebrow')}</p><h2>${e('chartHeading')}</h2><p class="chart-scope">${e('chartScope')}</p><div id="page-chart"></div><p id="chart-count" role="status"></p></section></div>

    <details><summary>${e('inspect')}</summary><p>${e('scope')}</p><h3>${e('requested')}</h3><pre id="desired"></pre><h3>${e('displayed')}</h3><pre id="applied"></pre></details>
    <details><summary>${e('demo')}</summary><p>${e('demoHelp')}</p><div class="actions"><button id="race">${e('race')}</button><button id="release" disabled>${e('release')}</button><button id="fail">${e('fail')}</button><button id="reset">${e('reset')}</button></div><p id="diagnostic" role="status"></p></details></section>`
  const sharedUi = installUi(root, statusLabels, t)
  // DOM access is limited to the surrounding application controls and grid mount.
  const get = <T extends HTMLElement>(selector: string) => root.querySelector<T>(selector)!
  const form = get<HTMLFormElement>('#filters')
  const grid = document.createElement('revo-grid')
  const pageChart = mountPageChart(get('#page-chart'), get('#chart-count'), t, statusLabels)
  const scheme = matchMedia('(prefers-color-scheme: dark)')
  const applyTheme = () => {
    grid.theme = scheme.matches ? 'darkCompact' : 'compact'
    pageChart.setTheme(scheme.matches)
  }
  applyTheme()
  scheme.addEventListener('change', applyTheme)
  grid.readonly = true
  grid.columns = columns.map(
    prop =>
      ({
        prop,
        name: labels[prop],
        size: prop === 'createdAt' ? 230 : prop === 'customer' ? 220 : 145,
        sortable: false,
        ...(prop === 'status'
          ? { cellTemplate: (h, { model }) => statusBadge(h, String(model.status), statusLabels) }
          : {}),
        ...(prop === 'totalCents'
          ? {
              cellTemplate: (_h, { model }) =>
                model.totalCents === null
                  ? t.nullTotal
                  : new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(
                      Number(model.totalCents) / 100,
                    ),
            }
          : {}),
      }) satisfies ColumnRegular,
  )
  const initialIntent = () => ({
    search: '',
    sort: [] as Query['sort'],
    filter: null as Filter | null,
  })
  let desired = initialIntent()
  let applied: Query | null = null
  let itemsPerPage = 10
  let debounce: ReturnType<typeof setTimeout> | undefined
  let holdNext = false,
    failNext = false,
    release: (() => void) | undefined
  let onHeld: (() => void) | undefined
  let disposed = false
  const abortDemo = () => {
    onHeld = undefined
    release?.()
    release = undefined
    get<HTMLButtonElement>('#release').disabled = true
  }
  const transport = async (query: Query, signal?: AbortSignal) => {
    const hold = holdNext
    holdNext = false
    const fail = failNext
    failNext = false
    const response = await httpOrders(query, hold ? undefined : signal)
    if (hold && !disposed && onHeld) {
      const next = onHeld
      onHeld = undefined
      await new Promise<void>(resolve => {
        release = resolve
        get<HTMLButtonElement>('#release').disabled = false
        next()
      })
    }
    if (fail) throw new Error('Controlled client delivery failure')
    return response
  }
  let currentLoader: PaginationFullConfig['loadData']
  function configuration(): PaginationFullConfig {
    currentLoader = createOrdersLoader(desired, transport, request => {
      get('#desired').textContent = JSON.stringify(request, null, 2)
    })
    return {
      itemsPerPage,
      initialPage: 0,
      total: 0,
      buttonCount: 3,
      boundaryButtons: true,
      info: true,
      totalInfo: true,
      locales: {
        first: t.first,
        last: t.last,
        previous: t.previous,
        next: t.next,
        page: t.pageLabel,
        of: t.of,
        items: t.items,
        loading: t.loading,
      },
      loadData: currentLoader,
      query: {
        retry: false,
        staleTime: 0,
        gcTime: 0,
        refetchOnWindowFocus: false,
        refetchOnReconnect: false,
        onStatus(status) {
          get('#load-error').hidden = status.status !== 'error'
          get('#load-error-message').textContent = t.error
          get('#empty').hidden = true
          if (status.fetching) {
            pageChart.clear()
            get('#status').textContent = applied ? t.updating : t.loading
          } else if (status.status === 'error') get('#status').textContent = ''
        },
        // The plugin calls reconciliation only for an accepted result. The
        // attached request also keeps inspector labels correct on cache reads.
        reconcile(result) {
          const page = result as LoadedOrders
          const request = page.request
          if (!page.data.length && page.total && request.offset >= page.total) {
            get('#status').textContent = t.recovered
            return result
          }
          pageChart.setRows(page.data)
          applied = structuredClone(request)
          get('#applied').textContent = JSON.stringify(
            { query: applied, matchingTotal: page.total, rowsReceived: page.data.length },
            null,
            2,
          )
          get('#empty').hidden = page.total !== 0
          get('#status').textContent = page.total
            ? interpolate(t.count, {
                start: request.offset + 1,
                end: request.offset + page.data.length,
                total: page.total,
              })
            : t.empty
          return result
        },
      },
    }
  }
  const clearTimer = () => {
    if (debounce) clearTimeout(debounce)
    debounce = undefined
  }
  const run = () => {
    clearTimer()
    get('#form-error').hidden = true
    grid.pagination = configuration()
  }
  grid.pagination = configuration()
  grid.plugins = [PaginationPlugin]
  get('.grid-wrap').append(grid)
  const input = (name: string) => (form.elements.namedItem(name) as HTMLInputElement).value
  function filterInput() {
    const children: Filter[] = []
    const statuses = new FormData(form).getAll('status').map(String)
    if (statuses.length)
      children.push({
        kind: 'group',
        logic: 'or',
        children: statuses.map(value => ({ kind: 'condition', field: 'status', op: 'eq', value })),
      })
    if (input('customer'))
      children.push({
        kind: 'condition',
        field: 'customer',
        op: input('customerOp') as Condition['op'],
        value: input('customer'),
      })
    const op = input('amountOp') as Condition['op']
    if (op === 'isNull') children.push({ kind: 'condition', field: 'totalCents', op })
    else {
      let amount: number | null
      try {
        amount = amountToCents(input('amount'))
      } catch {
        throw new Error(t.invalidAmount)
      }
      if (amount !== null)
        children.push({ kind: 'condition', field: 'totalCents', op, value: amount })
    }
    for (const [name, op] of [
      ['from', 'gte'],
      ['until', 'lt'],
    ] as const) {
      // A calendar day is a UTC-midnight boundary in this API, never local time.
      const day = input(name)
      const value = day ? `${day}T00:00:00.000Z` : ''
      if (value && !isUtc(value)) throw new Error(t.invalidDate)
      if (value) children.push({ kind: 'condition', field: 'createdAt', op, value })
    }
    if (input('from') && input('until') && input('until') <= input('from'))
      throw new Error(t.invertedDate)
    return children.length ? { kind: 'group' as const, logic: 'and' as const, children } : null
  }
  const showFormError = (error: unknown) => {
    const element = get('#form-error')
    get('#form-error-message').textContent = error instanceof Error ? error.message : t.error
    element.hidden = false
  }
  form.onsubmit = event => {
    event.preventDefault()
    try {
      desired = { ...desired, search: input('search'), filter: filterInput() }
      run()
    } catch (error) {
      showFormError(error)
    }
  }
  get<HTMLInputElement>('[name=search]').oninput = () => {
    clearTimer()
    debounce = setTimeout(() => {
      desired = { ...desired, search: input('search') }
      run()
    }, 250)
  }
  const clear = () => {
    clearTimer()
    form.reset()
    sharedUi.setSelect(get<HTMLSelectElement>('#size'), String(itemsPerPage))
    sharedUi.syncForm()
    desired = { ...desired, search: '', filter: null }
    run()
  }
  get('#clear').onclick = clear
  function applySort() {
    try {
      const sort: Query['sort'] = []
      for (let index = 0; index < 3; index++) {
        const field = get<HTMLSelectElement>(`#sort-${index}`)
          .value as Query['sort'][number]['field']
        if (field) {
          if (sort.some(term => term.field === field)) throw new Error(t.duplicateSort)
          sort.push({
            field,
            order: get<HTMLSelectElement>(`#direction-${index}`).value as 'asc' | 'desc',
          })
        }
      }
      desired = { ...desired, sort }
      run()
    } catch (error) {
      showFormError(error)
    }
  }
  get('.sort').onchange = applySort
  const resetSort = () => {
    for (let index = 0; index < 3; index++) {
      sharedUi.setSelect(get<HTMLSelectElement>(`#sort-${index}`), '')
      sharedUi.setSelect(get<HTMLSelectElement>(`#direction-${index}`), 'asc')
    }
    desired = { ...desired, sort: [] }
  }
  get('#reset-sort').onclick = () => {
    resetSort()
    run()
  }
  get('#size').onchange = () => {
    itemsPerPage = Number(get<HTMLSelectElement>('#size').value)
    run()
  }
  get('#retry').onclick = () => {
    // A partial configuration update retains the plugin's current page/size.
    grid.pagination = { loadData: currentLoader }
  }
  get('#fail').onclick = () => {
    failNext = true
    get('#diagnostic').textContent = t.failureArmed
  }
  get('#release').onclick = () => {
    abortDemo()
    get('#diagnostic').textContent = t.released
  }
  get('#race').onclick = () => {
    clearTimer()
    abortDemo()
    holdNext = true
    onHeld = () => {
      desired = { ...desired, search: 'Boundary' }
      get<HTMLInputElement>('[name=search]').value = 'Boundary'
      run()
      get('#diagnostic').textContent = t.held
    }
    desired = { ...desired, search: 'Needle' }
    run()
  }
  get('#reset').onclick = () => {
    abortDemo()
    failNext = false
    holdNext = false
    get('#diagnostic').textContent = ''
    resetSort()
    sharedUi.setSelect(get<HTMLSelectElement>('#size'), '10')
    itemsPerPage = 10
    desired = initialIntent()
    clear()
  }
  return () => {
    disposed = true
    scheme.removeEventListener('change', applyTheme)
    clearTimer()
    abortDemo()
    pageChart.destroy()
    grid.remove()
    sharedUi.destroy()
    root.replaceChildren()
  }
}
defineCustomElements()
void customElements
  .whenDefined('revo-grid')
  .then(() => mountOrders(document.querySelector<HTMLElement>('#app')!))
