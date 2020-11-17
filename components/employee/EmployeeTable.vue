<template>
  <v-data-table
    :headers="headers"
    :items="employeeList"
    class="elevation-1"
    item-key="employee_id"
    v-model="selected"
    show-select
  >
    <template v-slot:top>
      <employee-table-header />
    </template>

    <template v-slot:body="{ items }">
      <employee-table-body :items="items" />
    </template>
  </v-data-table>
</template>
<script>
import { mapState } from "vuex";
import EmployeeTableHeader from "@/components/employee/EmployeeTableHeader.vue";
import EmployeeTableBody from "@/components/employee/EmployeeTableBody.vue";
export default {
  name: "EmployeeTable",
  components: { EmployeeTableHeader, EmployeeTableBody },
  data() {
    return {
      selected: [],
      headers: [
        {
          text: "ID",
          align: "left",
          sortable: false,
          value: "id",
          class: "grey lighten-3"
        },
        {
          text: "Name",
          align: "left",
          sortable: false,
          value: "employee_name",
          class: "grey lighten-3"
        },
        {
          text: "Email",
          align: "left",
          sortable: false,
          value: "email",
          class: "grey lighten-3"
        },
        {
          text: "Address",
          align: "left",
          sortable: false,
          value: "address",
          class: "grey lighten-3"
        },
        {
          text: "Phone",
          align: "left",
          sortable: false,
          value: "phone",
          class: "grey lighten-3"
        },
        {
          text: "Department",
          align: "left",
          sortable: false,
          value: "department",
          class: "grey lighten-3"
        },
        {
          text: "Actions",
          align: "center",
          sortable: false,
          value: "department",
          class: "grey lighten-3"
        }
      ]
    };
  },
  computed: mapState({
    employeeList: state => state.employee.employeeList
  })
};
</script>
