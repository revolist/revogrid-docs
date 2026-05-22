<script lang="ts">
  import type { EditorType } from '@revolist/svelte-datagrid';

  let { val, value, save, close }: EditorType = $props();
  let currentValue = $state('');

  $effect(() => {
    currentValue = String(val ?? value ?? '');
  });

  export function getValue() {
    return currentValue;
  }
</script>

<input bind:value={currentValue} aria-label="Operation value" />
<button type="button" onclick={() => save(currentValue)}>Save</button>
<button type="button" onclick={() => close()}>Close</button>
