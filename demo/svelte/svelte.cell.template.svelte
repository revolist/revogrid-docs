<script lang="ts">
  import type { SvelteCellProps } from '@revolist/svelte-datagrid';

  let { value, rowIndex }: SvelteCellProps = $props();
</script>

<button type="button">
  Row {rowIndex}: {value}
</button>
