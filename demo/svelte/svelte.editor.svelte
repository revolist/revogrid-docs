<script lang="ts">
  import {
    Editor,
    RevoGrid,
    Template,
    type ColumnRegular,
    type Editors,
    type EditorType,
  } from '@revolist/svelte-datagrid';
  import OperationCell from './svelte.cell.template.svelte';
  import OperationEditor from './svelte.editor.template.svelte';

  const OPERATION_EDITOR = 'operation';

  const source = [
    { name: 'Order 1', operation: 'Review' },
    { name: 'Order 2', operation: 'Archive' },
  ];

  const editors: Editors = {
    [OPERATION_EDITOR]: Editor(OperationEditor),
  };

  const columns: ColumnRegular[] = [
    { prop: 'name', name: 'Name' },
    {
      prop: 'operation',
      name: 'Operation',
      cellTemplate: Template(OperationCell),
      editor: OPERATION_EDITOR,
    },
  ];
</script>

<RevoGrid {source} {columns} {editors} />
