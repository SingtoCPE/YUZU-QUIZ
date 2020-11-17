<template>
  <div>
    <employee-table />
  </div>
</template>

<script>
import EmployeeTable from "../components/employee/EmployeeTable";
export default {
  name: "Employee",
  components: {
    EmployeeTable
  },
  mounted() {
    this.$store.dispatch("employee/getEmployee");
  }
};
</script>
