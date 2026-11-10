'use client'
import { useCallback, useEffect, useRef, useState } from 'react'
import {
  Alert,
  Button,
  ConfirmDialog,
  Disclosure,
  Dropdown,
  FieldHint,
  FormField,
  Panel,
  Toolbar,
} from '@revolist/ui/react'
import { RevoGrid, type BeforeSaveDataDetails, type ColumnRegular } from '@revolist/react-datagrid'
import {
  fields,
  format,
  isDirty,
  isOrder,
  messages,
  reapply,
  toDraft,
  validateDraft,
  type DraftRow,
  type Field,
  type OrderLine,
} from '../shared/order-model.ts'

export const ui = {
  ...messages,
  selected: 'Selected order line',
  id: 'Order line',
  skuLabel: 'SKU',
  quantityLabel: 'Quantity',
  priceLabel: 'Unit price (USD cents)',
  statusLabel: 'Status',
  version: 'Version',
  helper: 'Allowed status: draft, confirmed, shipped. 125 cents = USD 1.25.',
  saving: 'Saving {id}…',
  wait: 'Wait for {id} to finish saving.',
  conflict: '{id} changed on the server. Your draft is preserved.',
  review: 'Review changes for {id}',
  field: 'Field',
  original: 'Originally loaded',
  yours: 'Your draft',
  latest: 'Latest on server',
  adopt: 'Use latest values',
  reapply: 'Reapply my changed fields',
  reapplied: 'Your changed fields are ready for review on version {version}. Save again to submit.',
  cancelled: 'Changes discarded for {id}.',
  unavailable: '{id} is no longer available. Your draft is preserved for review.',
  bulk: 'Edit one cell at a time in this example.',
  resetConfirm: 'Restore all 20 example rows? Unsaved edits will be discarded.',
  restore: 'Restore example rows',
  keep: 'Keep editing',
  restoring: 'Restoring example rows…',
  restored: 'Example restored. All 20 rows are ready to edit.',
  resetFailed: 'The example could not be restored. Your current view is preserved. Try again.',
  scenario: 'Save a newer version of OL-0003',
  scenarioDone:
    'A newer version of OL-0003 is now on the demo server. Your loaded row is unchanged.',
  retry: 'Retry save',
  empty: 'No order lines to display.',
  demo: 'Demo scenarios',
}
type Conflict = { original: OrderLine; latest: OrderLine; draft: DraftRow }
const columnsFor = (text: typeof ui): ColumnRegular[] => [
  { prop: 'id', name: text.id, readonly: true, size: 135 },
  { prop: 'sku', name: text.skuLabel, size: 155 },
  { prop: 'quantity', name: text.quantityLabel, size: 110 },
  { prop: 'unitPriceCents', name: text.priceLabel, size: 200 },
  { prop: 'status', name: text.statusLabel, size: 130 },
  { prop: 'version', name: text.version, readonly: true, size: 90 },
]

export default function OrdersGrid({
  initialRows,
  demoActions,
  copy = {},
}: {
  initialRows: OrderLine[]
  demoActions: boolean
  copy?: Partial<typeof ui>
}) {
  const [text] = useState(() => ({ ...ui, ...copy }))
  const [columns] = useState(() => columnsFor(text))
  const [source, setSource] = useState(() => initialRows.map(toDraft))
  const rows = useRef(source)
  const confirmed = useRef(new Map(initialRows.map(row => [row.id, { ...row }])))
  const grid = useRef<HTMLRevoGridElement | null>(null)
  const [gridElement, setGridElement] = useState<HTMLRevoGridElement | null>(null)
  const bindGrid = useCallback((element: HTMLRevoGridElement | null) => {
    grid.current = element
    setGridElement(element)
  }, [])
  const [selected, setSelected] = useState(initialRows[0]?.id ?? '')
  const [, refresh] = useState(0)
  const [editing, setEditing] = useState(false)
  const [notice, setNotice] = useState('')
  const [pending, setPending] = useState('')
  const [resetting, setResetting] = useState(false)
  const [confirmReset, setConfirmReset] = useState(false)
  const [conflicts, setConflicts] = useState<Record<string, Conflict>>({})
  const [unavailable, setUnavailable] = useState<string[]>([])
  const [serverErrors, setServerErrors] = useState<Record<string, Partial<Record<Field, string>>>>(
    {},
  )
  const request = useRef<{ token: number; id: string; generation: number } | null>(null)
  const token = useRef(0)
  const generation = useRef(0)
  const busy = useRef(false)
  useEffect(() => {
    const element = gridElement
    if (!element) return
    const scheme = matchMedia('(prefers-color-scheme: dark)')
    const applyTheme = () => {
      element.theme = scheme.matches ? 'darkCompact' : 'compact'
    }
    applyTheme()
    scheme.addEventListener('change', applyTheme)
    const close = () => setEditing(false)
    element.addEventListener('canceledit', close)
    return () => {
      scheme.removeEventListener('change', applyTheme)
      element.removeEventListener('canceledit', close)
      generation.current++
      request.current = null
    }
  }, [gridElement])
  const draft = source.find(row => row.id === selected)
  const baseline = confirmed.current.get(selected)
  const validation = draft ? validateDraft(draft, text) : { errors: {} }
  const dirty = !!draft && !!baseline && isDirty(draft, baseline)
  const conflict = conflicts[selected]

  async function display(row: DraftRow) {
    const index = rows.current.findIndex(current => current.id === row.id)
    if (index < 0) return
    Object.assign(rows.current[index], row)
    for (let col = 0; col < columns.length; col++) {
      const prop = columns[col].prop as keyof DraftRow
      await grid.current?.setDataAt({
        row: index,
        col,
        rowType: 'rgRow',
        colType: 'rgCol',
        val: row[prop],
      })
    }
    refresh(n => n + 1)
  }
  function clearConflict(id: string) {
    setConflicts(current => {
      const next = { ...current }
      delete next[id]
      return next
    })
  }
  async function save() {
    if (
      busy.current ||
      editing ||
      !draft ||
      !baseline ||
      !dirty ||
      !validation.changes ||
      conflict ||
      unavailable.includes(selected)
    )
      return
    busy.current = true
    const submitted = { ...draft }
    const original = { ...baseline }
    const identity = { id: submitted.id, token: ++token.current, generation: generation.current }
    request.current = identity
    setPending(identity.id)
    setNotice(format(text.saving, identity))
    try {
      const response = await fetch(`/api/orders/${encodeURIComponent(identity.id)}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ expectedVersion: original.version, changes: validation.changes }),
      })
      const body: unknown = await response.json()
      if (request.current !== identity || generation.current !== identity.generation) return
      if (
        response.status === 409 &&
        body &&
        typeof body === 'object' &&
        'current' in body &&
        isOrder(body.current) &&
        body.current.id === identity.id
      ) {
        setConflicts(current => ({
          ...current,
          [identity.id]: { original, latest: body.current as OrderLine, draft: submitted },
        }))
        setNotice(format(text.conflict, identity))
        return
      }
      if (response.status === 404) {
        setUnavailable(ids => [...ids, identity.id])
        setNotice(format(text.unavailable, identity))
        return
      }
      if (
        response.status === 422 &&
        body &&
        typeof body === 'object' &&
        'fields' in body &&
        body.fields &&
        typeof body.fields === 'object'
      ) {
        const errors: Partial<Record<Field, string>> = {}
        for (const field of fields)
          if (Object.hasOwn(body.fields, field)) errors[field] = text[field]
        setServerErrors(current => ({ ...current, [identity.id]: errors }))
        setNotice(text.invalid)
        return
      }
      if (
        !response.ok ||
        !body ||
        typeof body !== 'object' ||
        !('row' in body) ||
        !isOrder(body.row) ||
        body.row.id !== identity.id ||
        body.row.version !== original.version + 1
      )
        throw new Error('Invalid save response')
      confirmed.current.set(identity.id, { ...body.row })
      await display(toDraft(body.row))
      setNotice(format(text.saved, { id: identity.id, version: body.row.version }))
    } catch {
      if (request.current === identity && generation.current === identity.generation)
        setNotice(format(text.failed, identity))
    } finally {
      if (request.current === identity && generation.current === identity.generation) {
        request.current = null
        busy.current = false
        setPending('')
      }
    }
  }
  async function cancel() {
    if (editing || pending === selected || !baseline) return
    await display(toDraft(baseline))
    clearConflict(selected)
    setServerErrors(current => ({ ...current, [selected]: {} }))
    setNotice(format(text.cancelled, { id: selected }))
  }
  async function scenario(action: 'reset' | 'conflict') {
    if (busy.current || editing) return
    busy.current = true
    if (action === 'reset') {
      setResetting(true)
      setNotice(text.restoring)
      generation.current++
    }
    const currentGeneration = generation.current
    try {
      const response = await fetch(`/api/scenarios/${action}`, { method: 'POST' })
      const body: unknown = await response.json()
      if (!response.ok) throw new Error('Scenario failed')
      if (generation.current !== currentGeneration) return
      if (action === 'reset') {
        const read = await fetch('/api/orders', { cache: 'no-store' })
        const data: unknown = await read.json()
        if (
          !read.ok ||
          !data ||
          typeof data !== 'object' ||
          !('rows' in data) ||
          !Array.isArray(data.rows) ||
          !data.rows.every(isOrder)
        )
          throw new Error('Invalid read')
        if (generation.current !== currentGeneration) return
        confirmed.current = new Map(data.rows.map(row => [row.id, { ...row }]))
        const next = data.rows.map(toDraft)
        rows.current = next
        setSource(next)
        setConflicts({})
        setServerErrors({})
        setUnavailable([])
        setSelected(next[0]?.id ?? '')
        setConfirmReset(false)
        setNotice(text.restored)
      } else if (body) setNotice(text.scenarioDone)
    } catch {
      if (generation.current === currentGeneration) setNotice(text.resetFailed)
    } finally {
      if (generation.current === currentGeneration) {
        busy.current = false
        setResetting(false)
      }
    }
  }
  function beforeEdit(event: CustomEvent<BeforeSaveDataDetails>) {
    const id = String(event.detail.model.id)
    if (pending === id || resetting || ['id', 'version'].includes(String(event.detail.prop))) {
      event.preventDefault()
      return
    }
    event.detail.val = String(event.detail.val ?? '')
  }
  const errors = { ...validation.errors, ...serverErrors[selected] }
  const blocked =
    !draft ||
    !dirty ||
    editing ||
    !!pending ||
    resetting ||
    !validation.changes ||
    !!conflict ||
    unavailable.includes(selected)
  return (
    <Panel className="editor-shell">
      <Toolbar className="toolbar" label={text.heading}>
        <FormField label={text.selected}>
          <Dropdown
            className="rv-select"
            source={source.map(row => ({ value: row.id, label: row.id }))}
            value={selected}
            disabled={resetting}
            config={{ ariaLabel: text.selected }}
            onChange={(value: unknown) => {
              if (typeof value === 'string') setSelected(value)
            }}
          />
        </FormField>
        <Button variant="primary" disabled={blocked} onClick={() => void save()}>
          {text.save}
        </Button>
        <Button
          disabled={!dirty || editing || pending === selected || resetting}
          onClick={() => void cancel()}
        >
          {text.cancel}
        </Button>
        {demoActions && (
          <Button
            disabled={!!pending || resetting || editing}
            onClick={() => setConfirmReset(true)}
          >
            {text.reset}
          </Button>
        )}
      </Toolbar>
      <div role="status" aria-live="polite" className="status">
        <strong>{selected}</strong> · {editing ? text.finish : dirty ? text.dirty : text.clean}
        {pending && <span> · {format(text.wait, { id: pending })}</span>}
        <p>{notice}</p>
      </div>
      <FieldHint>{text.helper}</FieldHint>
      {Object.keys(errors).length > 0 && (
        <Alert tone="danger" role="alert" className="error">
          <strong>{text.invalid}</strong>
          <ul>
            {fields
              .filter(field => errors[field])
              .map(field => (
                <li key={field}>{errors[field]}</li>
              ))}
          </ul>
        </Alert>
      )}
      <div className="grid-wrap">
        <RevoGrid
          ref={bindGrid}
          source={source}
          columns={columns}
          range={false}
          canMoveColumns={false}
          resize={true}
          onBeforeedit={beforeEdit}
          onBeforeeditstart={event => {
            if (
              pending === String(event.detail.model.id) ||
              resetting ||
              conflicts[String(event.detail.model.id)]
            )
              event.preventDefault()
            else {
              setSelected(String(event.detail.model.id))
              setEditing(true)
            }
          }}
          onBeforecellfocus={event => setSelected(String(event.detail.model.id))}
          onBeforerangeedit={event => {
            event.preventDefault()
            setNotice(text.bulk)
          }}
          onAfteredit={event => {
            if (!('model' in event.detail)) return
            setEditing(false)
            const id = String(event.detail.model.id)
            setServerErrors(current => ({ ...current, [id]: {} }))
            refresh(n => n + 1)
          }}
        />
      </div>
      {!source.length && <p>{text.empty}</p>}
      {conflict && (
        <Alert tone="warning" className="conflict" role="alert">
          <h2>{format(text.review, { id: selected })}</h2>
          <div className="table-scroll">
            <table>
              <thead>
                <tr>
                  {[
                    text.field,
                    `${text.original} (${text.version} ${conflict.original.version})`,
                    text.yours,
                    `${text.latest} (${text.version} ${conflict.latest.version})`,
                  ].map(label => (
                    <th key={label}>{label}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {fields.map(field => (
                  <tr key={field}>
                    <th>{columns.find(column => column.prop === field)?.name}</th>
                    <td>{String(conflict.original[field])}</td>
                    <td>{conflict.draft[field]}</td>
                    <td>{String(conflict.latest[field])}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <Button
            onClick={() => {
              confirmed.current.set(selected, { ...conflict.latest })
              void display(toDraft(conflict.latest))
              clearConflict(selected)
            }}
          >
            {text.adopt}
          </Button>
          <Button
            onClick={() => {
              confirmed.current.set(selected, { ...conflict.latest })
              void display(reapply(conflict.draft, conflict.original, conflict.latest))
              clearConflict(selected)
              setNotice(format(text.reapplied, { version: conflict.latest.version }))
            }}
          >
            {text.reapply}
          </Button>
        </Alert>
      )}
      <ConfirmDialog
        open={confirmReset}
        title={text.reset}
        closeLabel={text.keep}
        onClose={() => {
          if (!resetting) setConfirmReset(false)
        }}
        onConfirm={() => {
          if (!pending && !editing) void scenario('reset')
        }}
        confirmLabel={text.restore}
        cancelLabel={text.keep}
        pending={resetting}
      >
        <p>{text.resetConfirm}</p>
      </ConfirmDialog>
      {demoActions && (
        <Disclosure summary={text.demo}>
          <Button
            disabled={!!pending || resetting || editing}
            onClick={() => void scenario('conflict')}
          >
            {text.scenario}
          </Button>
        </Disclosure>
      )}
    </Panel>
  )
}
