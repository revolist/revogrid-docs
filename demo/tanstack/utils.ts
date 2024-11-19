// Helper functions to convert tanstack to revogrid format
import type { ColumnGrouping, ColumnRegular } from "@revolist/vue3-datagrid";
import type { Column } from "@tanstack/vue-table";

export function tanstackToRvGridColumns(tanstackColumns: Column<any>[]) {
  return tanstackColumns.map((col) => {
    // Check if this column has children (group columns)
    if (col.columns?.length) {
      const rvGroup: ColumnGrouping = {
        name: col.columnDef.header,
        children: tanstackToRvGridColumns(col.columns),
      };
      return rvGroup; // Recursive call for child columns
    }
    const rvColumn: ColumnRegular = {
      prop: col.id, // Use col.id or accessorKey
      name: col.columnDef.header, // Direct mapping for column header
      sortable: !!col.getCanSort(), // Check if the column is sortable
      filter: col.getCanFilter() ? "customFilterType" : false, // Handle filters
    };

    // Handle custom sorting functions via cellCompare
    const sortingFn = col.getSortingFn();
    if (!!sortingFn) {
      rvColumn.cellCompare = (_, rowA: any, rowB: any) =>
        sortingFn(rowA, rowB, col.id);
      rvColumn.sortable = true; // Ensure sorting is enabled
    }

    // Handle filtering logic if provided
    const filterFn = col.getFilterFn();
    if (filterFn) {
      rvColumn.filter = "customFilterType"; // Assume custom type for filtering
    }

    rvColumn.cellParser = (model) => {
      return model.renderValue(col.id);
    };

    return rvColumn;
  });
}
