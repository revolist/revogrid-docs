import { defineCustomElements } from '@revolist/revogrid/loader'
// This function can be used to quickly define all RevoGrid components in a project on the custom elements registry.
defineCustomElements()

// #region snippet
import type { ColumnRegular, FilterCollectionItem } from '@revolist/revogrid'

type SavedFilterState = {
    collection: Record<string, FilterCollectionItem>
}

type SavedGridState = {
    columnOrder?: string[]
    columnWidths?: Record<string, number>
    sorting?: {
        columns?: {
            prop: string
            order: 'asc' | 'desc'
        }[]
    }
    filter?: SavedFilterState
}

const STORAGE_KEY = 'revogrid:state-persistence-demo:v1'

const rows = [
    { id: 'INV-1001', customer: 'Northwind Traders', status: 'Open', owner: 'Mila', total: 1280 },
    { id: 'INV-1002', customer: 'Bluefin Logistics', status: 'Paid', owner: 'Jonas', total: 830 },
    { id: 'INV-1003', customer: 'Orbit Labs', status: 'Review', owner: 'Priya', total: 2140 },
    { id: 'INV-1004', customer: 'Summit Retail', status: 'Open', owner: 'Mila', total: 1560 },
    { id: 'INV-1005', customer: 'Evergreen Health', status: 'Paid', owner: 'Noah', total: 980 },
    { id: 'INV-1006', customer: 'Atlas Works', status: 'Review', owner: 'Priya', total: 1760 },
]

const baseColumns: ColumnRegular[] = [
    { prop: 'id', name: 'Invoice', size: 120, sortable: true, pin: 'colPinStart' },
    { prop: 'customer', name: 'Customer', size: 220, sortable: true },
    { prop: 'status', name: 'Status', size: 140, sortable: true, filter: 'string' },
    { prop: 'owner', name: 'Owner', size: 140, sortable: true, filter: 'string' },
    {
        prop: 'total',
        name: 'Total',
        size: 120,
        sortable: true,
        cellTemplate: (h, { model, prop }) =>
            h('span', null, `$${Number(model[prop]).toLocaleString()}`),
    },
]

function loadState(): SavedGridState {
    try {
        return JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}')
    } catch {
        return {}
    }
}

function saveState(partial: SavedGridState) {
    const next = { ...loadState(), ...partial }
    localStorage.setItem(STORAGE_KEY, JSON.stringify(next))
    updateStatus(next)
}

function applyState(columns: ColumnRegular[], state: SavedGridState) {
    const order = new Map(
        (state.columnOrder ?? []).map((prop, index) => [prop, index])
    )
    const sorting = new Map(
        (state.sorting?.columns ?? []).map((column) => [
            String(column.prop),
            column.order,
        ])
    )

    return [...columns]
        .map((column) => ({
            ...column,
            size: state.columnWidths?.[String(column.prop)] ?? column.size,
            order: sorting.get(String(column.prop)),
        }))
        .sort((a, b) => {
            const left = order.get(String(a.prop)) ?? Number.MAX_SAFE_INTEGER
            const right = order.get(String(b.prop)) ?? Number.MAX_SAFE_INTEGER
            return left - right
        })
}

function getColumnWidths(columns: ColumnRegular[]): Record<string, number> {
    return Object.fromEntries(
        columns.flatMap((column) =>
            typeof column.size === 'number'
                ? [[String(column.prop), column.size]]
                : []
        )
    )
}

function updateStatus(state = loadState()) {
    const status = document.getElementById('state-persistence-status')
    if (!status) {
        return
    }

    const savedKeys = Object.keys(state)
    status.textContent = savedKeys.length
        ? `Saved: ${savedKeys.join(', ')}`
        : 'No saved layout'
}

function isDarkMode() {
    return document.documentElement.classList.contains('dark')
}

function applyTheme(grid: HTMLRevoGridElement) {
    grid.theme = isDarkMode() ? 'darkCompact' : 'compact'
}

function render() {
    const parent = document.getElementById('demo-state-persistence')
    if (!parent) {
        return
    }

    parent.innerHTML = `
        <div class="state-demo-toolbar">
            <button type="button" class="rg-btn" id="state-persistence-save">Save layout</button>
            <button type="button" class="rg-btn rg-btn-secondary" id="state-persistence-reset">Reset saved layout</button>
            <div class="language-ts"><pre><code id="state-persistence-status"></code></pre></div>
        </div>
    `

    const grid = document.createElement('revo-grid')
    const savedState = loadState()

    applyTheme(grid)
    grid.columns = applyState(baseColumns, savedState)
    grid.resize = true
    grid.canMoveColumns = true
    grid.filter = savedState.filter ?? {}
    grid.sorting = savedState.sorting
    grid.style.height = '320px'
    grid.source = rows

    parent.appendChild(grid)
    updateStatus(savedState)

    new MutationObserver(() => applyTheme(grid)).observe(document.documentElement, {
        attributes: true,
        attributeFilter: ['class'],
    })

    grid.addEventListener('columndragend', (event) => {
        saveState({
            columnOrder: event.detail.columns.map((column) => String(column.prop)),
        })
    })

    grid.addEventListener('aftercolumnresize', (event) => {
        const current = loadState().columnWidths ?? {}
        const resized = getColumnWidths(Object.values(event.detail))

        saveState({ columnWidths: { ...current, ...resized } })
    })

    grid.addEventListener('beforesortingapply', (event) => {
        saveState({
            sorting: {
                columns: [
                    {
                        prop: String(event.detail.column.prop),
                        order: event.detail.order,
                    },
                ],
            },
        })
    })

    grid.addEventListener('beforefilterapply', (event) => {
        saveState({ filter: { collection: event.detail.collection } })
    })

    document
        .getElementById('state-persistence-save')
        ?.addEventListener('click', async () => {
            const columns = await grid.getColumns()
            const state = loadState()
            saveState({
                columnOrder: columns.map((column) => String(column.prop)),
                columnWidths: getColumnWidths(columns),
                sorting: state.sorting,
                filter: state.filter ?? grid.filter,
            })
        })

    document
        .getElementById('state-persistence-reset')
        ?.addEventListener('click', () => {
            localStorage.removeItem(STORAGE_KEY)
            grid.columns = baseColumns
            grid.sorting = undefined
            grid.filter = {}
            updateStatus({})
        })
}

// #endregion snippet

export { render }
