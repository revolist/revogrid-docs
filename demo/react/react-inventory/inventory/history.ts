import { cloneRows, sameRows, type InventoryRow } from './model';

/** A small, application-owned snapshot history, not RevoGrid's Pro HistoryPlugin. */
export class InventoryHistory {
  private present: InventoryRow[];
  private saved: InventoryRow[];
  private past: InventoryRow[][] = [];
  private future: InventoryRow[][] = [];
  private readonly limit: number;

  constructor(rows: readonly InventoryRow[], limit = 50) {
    if (!Number.isInteger(limit) || limit < 1) throw new Error('History limit must be positive.');
    this.limit = limit;
    this.present = cloneRows(rows);
    this.saved = cloneRows(rows);
  }
  get canUndo(): boolean { return this.past.length > 0; }
  get canRedo(): boolean { return this.future.length > 0; }
  get dirty(): boolean { return !sameRows(this.present, this.saved); }
  get undoCount(): number { return this.past.length; }
  snapshot(): InventoryRow[] { return cloneRows(this.present); }

  commit(next: readonly InventoryRow[]): boolean {
    if (sameRows(this.present, next)) return false;
    this.past.push(cloneRows(this.present));
    if (this.past.length > this.limit) this.past.shift();
    this.present = cloneRows(next);
    this.future = [];
    return true;
  }
  undo(): boolean {
    const previous = this.past.pop();
    if (!previous) return false;
    this.future.push(cloneRows(this.present));
    this.present = previous;
    return true;
  }
  redo(): boolean {
    const next = this.future.pop();
    if (!next) return false;
    this.past.push(cloneRows(this.present));
    this.present = next;
    return true;
  }
  markSaved(rows: readonly InventoryRow[]): void { this.saved = cloneRows(rows); }
  reset(rows: readonly InventoryRow[]): void {
    this.present = cloneRows(rows);
    this.saved = cloneRows(rows);
    this.past = [];
    this.future = [];
  }
}
