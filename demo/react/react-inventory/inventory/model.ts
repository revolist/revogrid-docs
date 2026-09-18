export interface InventoryRow {
  id: string;
  sku: string;
  product: string;
  quantity: number;
  price: number;
}

export type EditableField = 'quantity' | 'price';
export interface RawChange {
  id: unknown;
  prop: unknown;
  value: unknown;
}

export const INITIAL_ROWS: InventoryRow[] = [
  { id: 'p-1', sku: 'KB-001', product: 'Compact keyboard', quantity: 18, price: 49.9 },
  { id: 'p-2', sku: 'MS-002', product: 'Wireless mouse', quantity: 32, price: 24.5 },
  { id: 'p-3', sku: 'HB-003', product: 'USB-C hub', quantity: 9, price: 39 },
  { id: 'p-4', sku: 'ST-004', product: 'Laptop stand', quantity: 15, price: 34.95 },
  { id: 'p-5', sku: 'CB-005', product: 'USB-C cable', quantity: 60, price: 12 },
];

export const cloneRows = (rows: readonly InventoryRow[]): InventoryRow[] =>
  rows.map(row => ({ ...row }));

export function sameRows(a: readonly InventoryRow[], b: readonly InventoryRow[]): boolean {
  return a.length === b.length && a.every((row, index) => {
    const other = b[index];
    return row.id === other.id && row.sku === other.sku &&
      row.product === other.product && row.quantity === other.quantity &&
      row.price === other.price;
  });
}

export function normalizeValue(prop: EditableField, input: unknown): number {
  const label = prop === 'quantity' ? 'Quantity' : 'Price';
  if (typeof input !== 'string' && typeof input !== 'number') {
    throw new Error(`${label} is required.`);
  }
  const text = String(input).trim();
  if (!text) throw new Error(`${label} is required.`);

  // Deliberately plain, dot-decimal input: no currency signs, grouping, or formulas.
  const pattern = prop === 'quantity' ? /^\d+$/ : /^\d+(?:\.\d{1,2})?$/;
  if (!pattern.test(text)) {
    throw new Error(prop === 'quantity'
      ? 'Quantity must be a whole number, zero or greater.'
      : 'Price must be zero or greater, with at most two decimal places (for example, 19.95).');
  }
  const value = Number(text);
  const maximum = prop === 'quantity' ? 1_000_000 : 1_000_000.00;
  if (!Number.isFinite(value) || value > maximum) {
    throw new Error(`${label} must not exceed 1,000,000.`);
  }
  return value;
}

export function applyChanges(
  rows: readonly InventoryRow[], changes: readonly RawChange[],
): InventoryRow[] {
  const knownRows = new Map(rows.map(row => [row.id, row]));
  // Stage and validate EVERY change before writing even the first cell.
  const prepared = changes.map(change => {
    const row = typeof change.id === 'string' ? knownRows.get(change.id) : undefined;
    if (!row) throw new Error('This product is no longer available. Reload before editing.');
    if (change.prop !== 'quantity' && change.prop !== 'price') {
      throw new Error(`${row.sku}: only Quantity and Price are editable.`);
    }
    const prop: EditableField = change.prop;
    try {
      return { id: row.id, prop, value: normalizeValue(prop, change.value) };
    } catch (error) {
      throw new Error(`${row.sku}: ${error instanceof Error ? error.message : 'Invalid value.'}`);
    }
  });
  const next = cloneRows(rows);
  const byId = new Map(next.map(row => [row.id, row]));
  for (const change of prepared) byId.get(change.id)![change.prop] = change.value;
  return next;
}

export const STORAGE_KEY = 'revogrid-react-inventory-tutorial-v1';

export function decodeSavedRows(text: string): InventoryRow[] {
  const payload: unknown = JSON.parse(text);
  if (!payload || typeof payload !== 'object' || !('version' in payload) ||
      payload.version !== 1 || !('rows' in payload) || !Array.isArray(payload.rows)) {
    throw new Error('The saved demo has an unsupported format.');
  }
  const saved = payload.rows as unknown[];
  if (saved.length !== INITIAL_ROWS.length) throw new Error('The saved inventory is incomplete.');
  const seen = new Set<string>();
  const changes: RawChange[] = [];
  for (const item of saved) {
    if (!item || typeof item !== 'object' || !('id' in item) ||
        typeof item.id !== 'string' || seen.has(item.id) ||
        !('quantity' in item) || !('price' in item)) {
      throw new Error('The saved inventory contains an invalid or duplicate product.');
    }
    seen.add(item.id);
    changes.push({ id: item.id, prop: 'quantity', value: item.quantity });
    changes.push({ id: item.id, prop: 'price', value: item.price });
  }
  // Only editable fields are restored; product identity comes from our catalog.
  return applyChanges(INITIAL_ROWS, changes);
}
