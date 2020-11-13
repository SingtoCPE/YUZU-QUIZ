<template>
  <div>
    <Table />
  </div>
</template>

<script>
import Table from "../components/employee/Table";
export default {
  components: {
    Table,
  },
  mounted() {
    this.$store.dispatch("employee/getEmployee", null, { root: true });
  },
};
</script>