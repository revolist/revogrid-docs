import { defineComponent, h } from 'vue'

export const PivotMockup = defineComponent({
  name: 'PivotMockup',
  setup() {
    const cells = [
      ['Region / Quarter', 'Q1', 'Q2', 'Q3', 'Q4', 'Total'],
      ['▾ EMEA', 'EUR 142,400', 'EUR 168,920', 'EUR 191,210', 'EUR 218,460', 'EUR 720,990'],
      ['Germany', 'EUR 58,200', 'EUR 71,100', 'EUR 80,800', 'EUR 94,300', 'EUR 304,400'],
      ['Poland', 'EUR 42,800', 'EUR 49,600', 'EUR 58,210', 'EUR 67,100', 'EUR 217,710'],
      ['▸ Americas', 'EUR 188,100', 'EUR 212,400', 'EUR 240,890', 'EUR 271,200', 'EUR 912,590'],
      ['▸ APAC', 'EUR 71,300', 'EUR 86,440', 'EUR 102,100', 'EUR 124,800', 'EUR 384,640'],
      ['Grand total', 'EUR 401,800', 'EUR 467,760', 'EUR 534,200', 'EUR 614,460', 'EUR 2,018,220'],
    ]

    return () => h('div', { class: 'mockup-pivot' }, [
      h('div', { class: 'pivot-grid' }, cells.flatMap((row, rowIndex) =>
        row.map((cell, colIndex) => h('div', {
          class: [
            rowIndex === 0 ? 'ph' : 'pl',
            colIndex > 0 ? 'num' : '',
            rowIndex > 1 && rowIndex < 4 && colIndex === 0 ? 'indent' : '',
            colIndex === 5 ? 'tot' : '',
            rowIndex === 6 ? 'gtot' : '',
            rowIndex > 0 && (rowIndex === 1 || rowIndex === 4 || rowIndex === 5) && colIndex === 0 ? 'head' : '',
          ],
        }, cell)),
      )),
      h('div', { class: 'pivot-config' }, [
        h('span', { class: 'chip-label' }, 'Rows ->'),
        h('span', { class: 'chip row' }, 'Region'),
        h('span', { class: 'chip row' }, 'Country'),
        h('span', { class: 'chip-label' }, 'Columns ->'),
        h('span', { class: 'chip col' }, 'Quarter'),
        h('span', { class: 'chip-label' }, 'Values ->'),
        h('span', { class: 'chip val' }, 'SUM(Revenue)'),
      ]),
    ])
  },
})

export const GanttMockup = defineComponent({
  name: 'GanttMockup',
  setup() {
    const rows = [
      ['Discovery', 'coral', '0%', '25%', '100%'],
      ['Research', 'amber child', '2%', '12%', ''],
      ['Stakeholder review', 'amber child', '14%', '10%', ''],
      ['Design', 'violet', '24%', '28%', '60%'],
      ['Wireframes', 'violet child', '25%', '12%', ''],
      ['Prototype', 'violet child', '37%', '14%', '25%'],
      ['Engineering', 'teal', '48%', '32%', ''],
      ['Launch', 'rose', '80%', '18%', ''],
    ]

    return () => h('div', { class: 'mockup-gantt' }, [
      h('div', { class: 'gantt-head' }, [
        h('div', { class: 'gh-label' }, 'Task / Phase'),
        h('div', { class: 'gh-weeks' }, ['W1', 'W2', 'W3', 'W4', 'W5', 'W6', 'W7', 'W8'].map((week) =>
          h('span', { class: week === 'W4' ? 'today' : '' }, week),
        )),
      ]),
      ...rows.map(([label, tone, left, width, text]) => h('div', { class: 'gantt-row' }, [
        h('div', { class: ['gr-label', tone.includes('child') ? 'child' : ''] }, [
          !tone.includes('child') ? h('span', { class: ['ind', tone.split(' ')[0]] }) : null,
          label,
        ]),
        h('div', { class: 'gr-track' }, [
          h('div', { class: ['bar', tone.split(' ')[0]], style: { left, width } }, [
            h('span', { class: 'pct', style: { width: text ? text : '100%' } }),
            text,
          ]),
          tone.includes('violet') || tone.includes('teal') || tone.includes('rose')
            ? h('div', { class: 'gantt-today', style: { left: '37.5%' } })
            : null,
        ]),
      ])),
      h('div', { class: 'gantt-foot' }, [
        h('div', { class: 'leg' }, [h('i', { class: 'coral' }), 'Discovery']),
        h('div', { class: 'leg' }, [h('i', { class: 'violet' }), 'Design']),
        h('div', { class: 'leg' }, [h('i', { class: 'teal' }), 'Engineering']),
        h('div', { class: 'leg' }, [h('i', { class: 'rose' }), 'Launch']),
        h('div', { class: 'gantt-summary' }, 'Critical path: 6w - Slack: 2d - Resources: 4'),
      ]),
    ])
  },
})

export const SheetMockup = defineComponent({
  name: 'SheetMockup',
  setup() {
    const rows = [
      ['1', 'Q1', 'EUR 142,400', '21%', '+18%', 'EMEA'],
      ['2', 'Q2', 'EUR 168,920', '21%', '+19%', 'EMEA'],
      ['3', 'Q3', 'EUR 191,210', '21%', '+13%', 'EMEA'],
      ['4', 'Q4', 'EUR 218,460', '21%', '+14%', 'EMEA'],
      ['5', 'Q5', 'EUR 244,100', '21%', '+12%', 'EMEA'],
      ['6', 'Q6', 'EUR 271,200', '21%', '+11%', 'EMEA'],
      ['7', 'Total', 'EUR 1,236,290', '-', '-', '-'],
    ]

    return () => h('div', { class: 'mockup-sheet' }, [
      h('div', { class: 'sheet-formula' }, [
        h('span', { class: 'cell-ref' }, 'F7'),
        h('span', { class: 'fx' }, 'fx'),
        h('span', { class: 'input' }, '=SUM(B2:B6)*(1+C7)'),
      ]),
      h('div', { class: 'sheet-grid' }, [
        h('div', { class: 'row-h' }),
        ...['A', 'B', 'C', 'D', 'E'].map((col) => h('div', { class: 'col-h' }, col)),
        ...rows.flatMap((row, rowIndex) => [
          h('div', { class: 'row-h' }, row[0]),
          ...row.slice(1).map((cell, colIndex) => h('div', {
            class: [
              'cell',
              colIndex === 0 ? 'left' : '',
              colIndex === 1 && rowIndex > 0 && rowIndex < 6 ? 'range' : '',
              colIndex === 1 && rowIndex === 5 ? 'range-corner' : '',
              rowIndex === 6 && colIndex === 1 ? 'total' : '',
              cell.startsWith('+') ? 'green' : '',
            ],
          }, [
            cell,
            colIndex === 1 && rowIndex === 5 ? h('span', { class: 'fill-handle' }) : null,
          ])),
        ]),
      ]),
    ])
  },
})

export const TreeMockup = defineComponent({
  name: 'TreeMockup',
  setup() {
    return () => h('div', { class: 'mockup-tree' }, [
      h('div', { class: 'tree-row head' }, [h('div', 'Account'), h('div', 'Users'), h('div', 'Status'), h('div')]),
      h('div', { class: 'tree-row' }, [h('div', { class: 'tree-name' }, '▸ Acme Industries'), h('div', { class: 'num' }, '142'), h('div', [h('span', { class: 'badge badge-good' }, 'Active')]), h('div', { class: 'actions' }, '...')]),
      h('div', { class: 'tree-row' }, [h('div', { class: 'tree-name open' }, '▸ Northwind GmbH'), h('div', { class: 'num' }, '86'), h('div', [h('span', { class: 'badge badge-good' }, 'Active')]), h('div', { class: 'actions' }, '...')]),
      h('div', { class: 'tree-detail' }, [
        h('div', { class: 'det' }, [h('div', { class: 'lbl' }, 'Plan'), h('div', { class: 'val accent' }, 'Pro Advanced')]),
        h('div', { class: 'det' }, [h('div', { class: 'lbl' }, 'MRR'), h('div', { class: 'val' }, 'EUR 14,210')]),
        h('div', { class: 'det' }, [h('div', { class: 'lbl' }, 'Renewal'), h('div', { class: 'val' }, 'Apr 12, 2026')]),
        h('div', { class: 'det' }, [h('div', { class: 'lbl' }, 'Health'), h('div', { class: 'val good' }, '92 / 100')]),
      ]),
      h('div', { class: 'tree-row' }, [h('div', { class: 'tree-name' }, '▾ Initech Holdings'), h('div', { class: 'num' }, '38'), h('div', [h('span', { class: 'badge badge-warn' }, 'Trial')]), h('div', { class: 'actions' }, '...')]),
      h('div', { class: 'tree-row' }, [h('div', { class: 'tree-name depth-1' }, '▸ Initech UK'), h('div', { class: 'num' }, '22'), h('div', [h('span', { class: 'badge badge-warn' }, 'Trial')]), h('div', { class: 'actions' }, '...')]),
      h('div', { class: 'tree-row' }, [h('div', { class: 'tree-name' }, '▸ Globex SA'), h('div', { class: 'num' }, '11'), h('div', [h('span', { class: 'badge badge-info' }, 'Onboarding')]), h('div', { class: 'actions' }, '...')]),
    ])
  },
})

export const AuditMockup = defineComponent({
  name: 'AuditMockup',
  setup() {
    const items = [
      ['14:32:08', 'maks@revolist edited F7  EUR 218,460 -> EUR 244,100', 'EDIT'],
      ['14:31:55', 'maks@revolist applied auto-fill to range B2:B6', 'RANGE'],
      ['14:30:41', 'anna@revolist added row #48,220  "Vandelay Industries"', 'ADD'],
      ['14:28:19', 'anna@revolist deleted column G - Notes', 'UNDONE'],
      ['14:24:02', 'maks@revolist pasted JSON clipboard payload (12 cells)', 'PASTE'],
      ['14:22:48', 'system validation failed on D5  "value out of range"', 'REJECT'],
    ]

    return () => h('div', { class: 'mockup-audit' }, [
      h('div', { class: 'audit-head' }, [
        h('div', 'Audit log - q4-revenue.grid - last 24h'),
        h('div', { class: 'actions' }, [
          h('button', { class: 'primary', type: 'button' }, 'Undo last'),
          h('button', { type: 'button' }, 'Redo'),
          h('button', { type: 'button' }, 'Export CSV'),
        ]),
      ]),
      h('div', { class: 'audit-list' }, items.map(([time, msg, tag]) => h('div', { class: ['audit-item', tag === 'UNDONE' ? 'undone' : ''] }, [
        h('div', { class: 'time' }, time),
        h('div', { class: 'msg' }, msg),
        h('div', { class: ['tag', tag.toLowerCase()] }, tag),
      ]))),
    ])
  },
})
