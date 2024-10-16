import React, { useState, useMemo, useCallback } from 'react';
import { RevoGrid, type BeforeSaveDataDetails, type RevoGridCustomEvent } from '@revolist/react-datagrid';
import {
  useReactTable,
  getCoreRowModel,
  type ColumnDef,
} from '@tanstack/react-table';
import { tanstackToRvGridColumns } from '../tanstack/utils';
import { makeData, type Person } from '../makeData';

// Define TanStack columns
const columns: ColumnDef<Person>[] = [
  {
    header: 'Name',
    columns: [
      {
        accessorKey: 'firstName',
        header: 'First Name',
      },
      {
        accessorKey: 'lastName',
        header: 'Last Name',
      },
    ],
  },
];

const ExampleIntegration = () => {
  const [data, setData] = useState(makeData(5));

  // Set up TanStack table instance
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    meta: {
      updateData: (rowIndex, columnId, value) => {
        setData((old) =>
          old.map((row, index) => {
            if (index === rowIndex) {
              return {
                ...old[rowIndex],
                [columnId]: value,
              };
            }
            return row;
          })
        );
      },
    },
  });

  // Extract data and columns for RevoGrid
  const source = useMemo(() => {
    const rows = table.getRowModel().flatRows;
    return rows;
  }, [table]);

  const rvColumns = useMemo(() => {
    // Convert TanStack column definition to RevoGrid format
    return tanstackToRvGridColumns(table.getAllColumns());
  }, [table]);

  const handleEdit = useCallback((e: RevoGridCustomEvent<BeforeSaveDataDetails>) => {
    e.preventDefault();
    const { model, prop, val } = e.detail;
    table.options.meta?.updateData(model.index, prop, val);
  }, [table]);

  return (
    <RevoGrid
      source={source}
      columns={rvColumns}
      onBeforeedit={handleEdit}
      hideAttribution
    />
  );
};

export default ExampleIntegration;
