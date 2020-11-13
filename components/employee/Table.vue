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
          value: "first_name",
          class: "grey lighten-3",
        },
        {
          text: "Last Name",
          align: "left",
          sortable: false,
          value: "last_name",
          class: "grey lighten-3",
        },
        {
          text: "Phone",
          align: "left",
          sortable: false,
          value: "tel_no",
          class: "grey lighten-3",
        },
        {
          text: "Actions",
          align: "left",
          sortable: false,
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