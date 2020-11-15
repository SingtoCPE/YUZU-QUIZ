<template>
  <div>
    <department-table />
  </div>
</template>

<script>
import DepartmentTable from "../components/department/DepartmentTable";
export default {
  name: "Department",
  components: {
    DepartmentTable,
  },
  mounted() {
    this.$store.dispatch("department/getDepartment");
  },
};
</script>