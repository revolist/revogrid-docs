import * as React from 'react';
import { RevoGrid } from '@revolist/react-datagrid';
import { InventoryHistory } from './history';
import {
  INITIAL_ROWS, STORAGE_KEY, applyChanges, decodeSavedRows, type RawChange,
} from './model';
import './inventory.css';

type GridProps = React.ComponentProps<typeof RevoGrid>;
const columns: GridProps['columns'] = [
  { prop: 'sku', name: 'SKU', size: 110, readonly: true },
  { prop: 'product', name: 'Product', size: 205, readonly: true },
  { prop: 'quantity', name: 'Quantity', size: 125 },
  { prop: 'price', name: 'Price (USD)', size: 145 },
];
const SAMPLE = '12\t19.95\n0\t29.50\n8\t14.25';

export default function InventoryEditor() {
  const [history] = React.useState(() => new InventoryHistory(INITIAL_ROWS));
  // Never give the grid a reference to a historical checkpoint.
  const [source, setSource] = React.useState(() => history.snapshot());
  const [notice, setNotice] = React.useState('Edit quantities and prices, or paste the sample.');
  const [error, setError] = React.useState('');
  const [ready, setReady] = React.useState(false);
  const [, redraw] = React.useReducer((n: number) => n + 1, 0);
  const sampleRef = React.useRef<HTMLTextAreaElement>(null);
  const sampleId = React.useId();

  React.useEffect(() => {
    try {
      const stored = window.localStorage.getItem(STORAGE_KEY);
      if (stored !== null) {
        history.reset(decodeSavedRows(stored));
        setSource(history.snapshot());
        setNotice('Loaded your saved demo from this browser.');
      }
    } catch {
      setError('Saved data could not be loaded. The starter inventory is shown; nothing was overwritten.');
    } finally {
      setReady(true);
    }
  }, [history]);

  function refresh(message: string) {
    setSource(history.snapshot());
    setError('');
    setNotice(message);
  }

  function commitChanges(changes: RawChange[]) {
    if (!ready) return;
    try {
      const next = applyChanges(history.snapshot(), changes);
      const changed = history.commit(next);
      setError('');
      if (changed) refresh('Change accepted. Review it, undo it, or save locally.');
      else setNotice('No values changed.');
    } catch (cause) {
      setError(`${cause instanceof Error ? cause.message : 'Invalid edit.'} Nothing in this edit was applied.`);
    }
  }

  const beforeEdit: NonNullable<GridProps['onBeforeedit']> = event => {
    // Controlled mode: this application owns the commit, not the grid's default write.
    event.preventDefault();
    commitChanges([{
      id: event.detail.model?.id,
      prop: event.detail.prop,
      value: event.detail.val,
    }]);
  };

  const beforeRangeEdit: NonNullable<GridProps['onBeforerangeedit']> = event => {
    event.preventDefault();
    const changes: RawChange[] = [];
    for (const [rowIndex, cells] of Object.entries(event.detail.data)) {
      const model = event.detail.models[Number(rowIndex)];
      for (const [prop, value] of Object.entries(cells)) {
        changes.push({ id: model?.id, prop, value });
      }
    }
    commitChanges(changes); // One validation pass and one history checkpoint for this range.
  };

  function undo() {
    if (history.undo()) refresh('Undid the last accepted change.');
  }
  function redo() {
    if (history.redo()) refresh('Reapplied the last undone change.');
  }
  function save() {
    // Save committed values only. Readers are instructed to press Enter first.
    const submitted = history.snapshot();
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify({ version: 1, rows: submitted }));
      history.markSaved(submitted);
      setError('');
      setNotice('Saved in this browser. Reload this page to check it.');
      redraw();
    } catch {
      setError('Saving failed. Your unsaved changes and undo history are still available.');
    }
  }
  function resetDemo() {
    try {
      window.localStorage.removeItem(STORAGE_KEY);
      history.reset(INITIAL_ROWS);
      refresh('Restored the starter inventory and cleared this demo’s saved copy and history.');
    } catch {
      setError('The saved demo could not be cleared. No changes were made.');
    }
  }
  async function copySample() {
    try {
      await navigator.clipboard.writeText(SAMPLE);
      setNotice('Sample copied. Click the first Quantity cell and paste.');
    } catch {
      sampleRef.current?.focus();
      sampleRef.current?.select();
      setNotice('The sample is selected. Copy it with Ctrl+C or Cmd+C.');
    }
  }

  return (
    <section className="rg-inventory-demo" aria-label="Editable inventory spreadsheet">
      <div className="rg-inventory-heading">
        <div><strong>Inventory editor</strong><span>Core grid · application-owned validation, history, and local save</span></div>
        <span className="rg-inventory-badge">{history.dirty ? 'Unsaved changes' : 'No unsaved changes'}</span>
      </div>
      <div className="rg-inventory-toolbar" role="group" aria-label="Inventory actions">
        <button type="button" disabled={!ready || !history.canUndo} onClick={undo}>Undo</button>
        <button type="button" disabled={!ready || !history.canRedo} onClick={redo}>Redo</button>
        <button type="button" disabled={!ready || !history.dirty} onClick={save}>Save locally</button>
        <button type="button" disabled={!ready} onClick={resetDemo}>Reset demo</button>
      </div>
      <p className="rg-inventory-hint">Double-click a Quantity or Price cell to edit. Press Enter to commit before using Undo, Redo, or Save locally. Escape cancels the open editor.</p>
      <div className="rg-inventory-grid-shell">
        <RevoGrid
          source={source}
          columns={columns}
          range
          useClipboard
          readonly={!ready}
          filter={false}
          canMoveColumns={false}
          canDrag={false}
          applyOnClose={false}
          theme="compact"
          onBeforeedit={beforeEdit}
          onBeforerangeedit={beforeRangeEdit}
          style={{ height: '285px', width: '100%' }}
          hideAttribution
        />
      </div>
      <div className="rg-inventory-feedback" aria-live="polite" aria-atomic="true">
        {error ? <p role="alert" className="rg-inventory-error">{error}</p> : <p role="status">{notice}</p>}
      </div>
      <details className="rg-inventory-sample" open>
        <summary>Try a three-row paste</summary>
        <p>Copy the sample, click the first Quantity cell (KB-001), and paste with Ctrl+V or Cmd+V. Do not enter cell-edit mode first.</p>
        <label htmlFor={sampleId}>Three rows: quantity, then price. No header row.</label>
        <textarea id={sampleId} ref={sampleRef} readOnly value={SAMPLE} rows={3} spellCheck={false} />
        <button type="button" onClick={() => void copySample()}>Copy sample</button>
        <p>Paste only into existing rows and columns. This demo does not create products or import Excel workbooks.</p>
      </details>
    </section>
  );
}
