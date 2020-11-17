<template>
  <v-data-table
    :headers="headers"
    :items="departmentList"
    class="elevation-1"
    item-key="employee_id"
  >
    <template v-slot:top>
      <department-table-header />
    </template>

    <template v-slot:body="{ items }">
      <department-table-body :items="items" />
    </template>
  </v-data-table>
</template>
<script>
import { mapState } from "vuex";
import DepartmentTableHeader from "@/components/department/DepartmentTableHeader.vue";
import DepartmentTableBody from "@/components/department/DepartmentTableBody.vue";
export default {
  name: "DepartmentTable",
  components: { DepartmentTableHeader, DepartmentTableBody },
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
          text: "Department Code",
          align: "left",
          sortable: false,
          value: "department_id",
          class: "grey lighten-3"
        },
        {
          text: "Department Name",
          align: "left",
          sortable: false,
          value: "department_name",
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
    departmentList: state => state.department.departmentList
  })
};
</script>
