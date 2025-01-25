import { defineCustomElements } from '@revolist/revogrid/loader'
import {
    EXPAND_COLUMN,
    MasterRowPlugin,
    CellColumnFocusVerifyPlugin,
    ColumnStretchPlugin,
    OverlayPlugin,
    type RowMasterConfig,
} from '@revolist/revogrid-pro'
import { makeData, type Person } from '../composables/makeData'
import { currentTheme } from '../composables/useRandomData'

defineCustomElements()

export function load(parentSelector: string) {
    const grid = document.createElement('revo-grid')
    const { isDark } = currentTheme()

    grid.theme = isDark() ? 'darkCompact' : 'compact'
    grid.source = makeData(500, 20)
    grid.columns = [
        { prop: 'expand', focus: () => false, ...EXPAND_COLUMN },
        { name: 'First Name', prop: 'firstName', size: 180 },
        { name: 'Last Name', prop: 'lastName' },
    ]

    grid.plugins = [
        MasterRowPlugin,
        OverlayPlugin,
        CellColumnFocusVerifyPlugin,
        ColumnStretchPlugin,
    ]

    const masterRow: RowMasterConfig = {
        rowHeight: 60,
        template: (h, data) => {
            const subItems = data.model.subRows?.map((subRow: Person) =>
                h('span', { class: { 'master-row': true } }, [
                    subRow.firstName + ' ' + subRow.lastName,
                    ', ',
                ])
            )
            return h('div', null, [h('strong', {}, 'Team: '), subItems])
        },
    }

    grid.additionalData = {
        masterRow,
        stretch: 'last',
    }

    document.querySelector(parentSelector)?.appendChild(grid)
}
