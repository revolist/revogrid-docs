<script lang="ts">
  import { RevoGrid, type ColumnRegular } from '@revolist/svelte-datagrid';
  const source = [{ name: '1' }, { name: '2' }, { name: '3' }];
  const columns: ColumnRegular[] = [{ prop: 'name' }];
</script>

<RevoGrid {source} {columns}></RevoGrid>