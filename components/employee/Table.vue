<template>
  <v-data-table
    :headers="headers"
    :items="employeeList"
    class="elevation-1"
    item-key="id"
  >
    <template v-slot:top>
      <table-header />
    </template>

    <template v-slot:body="{ items }">
      <table-body :items="items" />
    </template>
  </v-data-table>
</template>
<script>
import { mapState } from "vuex";
import TableHeader from "@/components/employee/TableHeader.vue";
import TableBody from "@/components/employee/TableBody.vue";
export default {
  name: "CustomerTable",
  components: { TableHeader, TableBody },
  data() {
    return {
      headers: [
        {
          text: "ID",
          align: "left",
          sortable: false,
          value: "id",
          class: "grey lighten-3",
        },
        {
          text: "Name",
          align: "left",
          sortable: false,
          value: "employee_name",
          class: "grey lighten-3",
        },
        {
          text: "Email",
          align: "left",
          sortable: false,
          value: "email",
          class: "grey lighten-3",
        },
        {
          text: "Address",
          align: "left",
          sortable: false,
          value: "address",
          class: "grey lighten-3",
        },
        {
          text: "Phone",
          align: "left",
          sortable: false,
          value: "phone",
          class: "grey lighten-3",
        },
        {
          text: "Department",
          align: "left",
          sortable: false,
          value: "department",
          class: "grey lighten-3",
        },
        {
          text: "Actions",
          align: "center",
          sortable: false,
          value: "department",
          class: "grey lighten-3",
        },
      ],
    };
  },
  computed: mapState({
    employeeList: (state) => state.employee.employeeList,
  }),
};
</script>