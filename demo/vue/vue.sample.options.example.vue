<template>
  <div id="app">
    <VGrid theme="material" :source="rows" :columns="columns" />
  </div>
</template>

<script>
import VGrid from "@revolist/vue3-datagrid";
export default {
  name: "App",
  data() {
    return {
      columns: [{ prop: "name", name: "First" }, { prop: "details", name: "Second" }],
      rows: [
        {
          name: "1",
          details: "Item 1",
        },
      ],
    };
  },
  components: {
    VGrid,
  },
};
</script>
