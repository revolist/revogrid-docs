<script lang="ts">
  import {
    RevoGrid,
    Template,
    type ColumnRegular,
  } from '@revolist/svelte-datagrid';
  import OperationCell from './svelte.cell.template.svelte';

  const source = [
    { name: 'Order 1', status: 'Pending', operation: 'Review' },
    { name: 'Order 2', status: 'Done', operation: 'Archive' },
  ];

  const columns: ColumnRegular[] = [
    { prop: 'name', name: 'Name' },
    { prop: 'status', name: 'Status' },
    {
      prop: 'operation',
      name: 'Operation',
      cellTemplate: Template(OperationCell),
    },
  ];
</script>

<RevoGrid {source} {columns} />
