import { useEffect, useMemo, useState } from 'react'
import { AreaChart, Badge, Button, SegmentedSwitch, Switch, TextInput } from '@revolist/ui/react'
import { RevoGrid, type ColumnRegular } from '@revolist/react-datagrid'

type Status = 'Pending' | 'Paid' | 'Overdue'
type StatusFilter = 'All' | Status
type Invoice = {
  id: string
  client: string
  status: Status
  amount: number
  due: string
}

// Sample data stays immutable. All views derive from the same filtered rows.
const invoices: Invoice[] = [
  { id: 'INV-1001', client: 'Acme Labs', status: 'Pending', amount: 2400, due: '2026-11-12' },
  { id: 'INV-1002', client: 'Orbit Design', status: 'Paid', amount: 1850, due: '2026-11-03' },
  { id: 'INV-1003', client: 'Forma Studio', status: 'Overdue', amount: 3200, due: '2026-11-01' },
  { id: 'INV-1004', client: 'Acme Labs', status: 'Paid', amount: 1200, due: '2026-11-05' },
  { id: 'INV-1005', client: 'Northstar', status: 'Pending', amount: 2750, due: '2026-11-18' },
  { id: 'INV-1006', client: 'Orbit Design', status: 'Overdue', amount: 950, due: '2026-11-02' },
]
const statuses: Status[] = ['Pending', 'Paid', 'Overdue']
const statusOptions = ['All', ...statuses].map(value => ({ value, label: value }))
const columns: ColumnRegular[] = [
  { prop: 'id', name: 'Invoice', size: 140 },
  { prop: 'client', name: 'Client', size: 230 },
  { prop: 'status', name: 'Status', size: 130 },
  { prop: 'due', name: 'Due date', size: 150 },
  { prop: 'amount', name: 'Amount (USD)', size: 150 },
]
const money = (value: number) =>
  new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0,
  }).format(value)

export default function App() {
  const [query, setQuery] = useState('')
  const [status, setStatus] = useState<StatusFilter>('All')
  const [dark, setDark] = useState(false)

  useEffect(() => {
    document.documentElement.dataset.theme = dark ? 'dark' : 'light'
  }, [dark])

  const search = query.trim().toLowerCase()
  const visible = useMemo(
    () =>
      invoices.filter(
        invoice =>
          (status === 'All' || invoice.status === status) &&
          `${invoice.id} ${invoice.client}`.toLowerCase().includes(search),
      ),
    [search, status],
  )
  const total = visible.reduce((sum, invoice) => sum + invoice.amount, 0)
  // Keep a stable date axis so filtered and empty results remain comparable.
  const chartData = [...new Set(invoices.map(invoice => invoice.due))].sort().map(date => {
    const value = visible
      .filter(invoice => invoice.due === date)
      .reduce((sum, invoice) => sum + invoice.amount, 0)
    return {
      key: `Nov ${date.slice(-2)}`,
      value,
      tooltip: { title: date, details: [money(value)] },
    }
  })

  const outstanding = visible
    .filter(invoice => invoice.status !== 'Paid')
    .reduce((sum, invoice) => sum + invoice.amount, 0)
  const overdueCount = visible.filter(invoice => invoice.status === 'Overdue').length

  return (
    <main className="dashboard rv-ui">
      <header className="dashboard-header">
        <div>
          <p className="eyebrow">FINANCE / ACCOUNTS RECEIVABLE</p>
          <h1>Invoice overview</h1>
          <p className="intro">A clear picture of what is paid, pending, and needs attention.</p>
        </div>
        <Switch label="Dark theme" checked={dark} onChange={setDark} />
      </header>
      <section className="metrics" aria-label="Invoice summary">
        <article className="metric">
          <span>Visible invoices</span>
          <strong>{visible.length}</strong>
          <small>Matching your filters</small>
        </article>
        <article className="metric">
          <span>Total value</span>
          <strong>{money(total)}</strong>
          <small>Across visible invoices</small>
        </article>
        <article className="metric">
          <span>Outstanding</span>
          <strong>{money(outstanding)}</strong>
          <small>
            {overdueCount} overdue {overdueCount === 1 ? 'invoice' : 'invoices'}
          </small>
        </article>
      </section>
      <section className="panel chart-panel" aria-labelledby="chart-heading">
        <div className="section-heading">
          <div>
            <span className="kicker">DUE DATE OVERVIEW</span>
            <h2 id="chart-heading">Invoice value by due date</h2>
            <p>Based on the invoices matching your filters</p>
          </div>
          <Badge variant="neutral">USD</Badge>
        </div>
        <AreaChart
          data={chartData}
          ariaLabel="Invoice value by due date in US dollars"
          height={165}
          showLabels
          showGrid
          showPoints
          areaFill="gradient"
          formatValue={money}
        />
      </section>
      <section className="panel records-panel" aria-labelledby="grid-heading">
        <div className="section-heading records-heading">
          <div>
            <span className="kicker">INVOICE ACTIVITY</span>
            <h2 id="grid-heading">Invoice details</h2>
            <p>Search and filter your invoice records</p>
          </div>
          <Badge variant="neutral">Sample data</Badge>
        </div>
        <div className="filters">
          <TextInput
            aria-label="Search invoices"
            placeholder="Search client or invoice number"
            value={query}
            onValueChange={setQuery}
          />
          <SegmentedSwitch
            className="status-filter"
            ariaLabel="Invoice status"
            role="radiogroup"
            options={statusOptions}
            value={status}
            onChange={value => setStatus(value as StatusFilter)}
          />
          <Button
            variant="secondary"
            onClick={() => {
              setQuery('')
              setStatus('All')
            }}
          >
            Reset filters
          </Button>
        </div>
        <p className="result-summary" role="status">
          <strong>
            {visible.length} {visible.length === 1 ? 'invoice' : 'invoices'}
          </strong>{' '}
          · Total value <strong>{money(total)}</strong>
        </p>
        {visible.length === 0 && <p className="empty-state">No invoices match these filters.</p>}
        <RevoGrid
          aria-label="Invoice details"
          columns={columns}
          source={visible}
          theme={dark ? 'darkCompact' : 'compact'}
          readonly
          style={{ height: '260px', width: '100%' }}
        />
      </section>
      <p className="footnote">Illustrative sample data · Status values are stored explicitly.</p>
    </main>
  )
}
