<template>
  <v-card
    class="d-flex justify-end ma-2 ml-6"
    color="white"
    height="43"
    outlined
  >
    <v-card-actions>
      <v-btn dark color="red" width="115px">
        <v-icon class="mr-1"> mdi-minus-circle </v-icon>Delete
      </v-btn>
      <v-btn @click="openDialogCreateEmployee" dark color="green" width="115px">
        <v-icon class="mr-1"> mdi-plus-circle </v-icon>New
      </v-btn>
    </v-card-actions>
    <employee-create-container />
    <employee-update-container />
  </v-card>
</template>
<script>
import EmployeeCreateContainer from "@/container/EmployeeCreateContainer.vue";
import EmployeeUpdateContainer from "@/container/EmployeeUpdateContainer.vue";
export default {
  name: "EmployeeTableHeader",
  components: {
    EmployeeCreateContainer,
    EmployeeUpdateContainer
  },
  methods: {
    openDialogCreateEmployee() {
      this.$store.commit("employee/setIsDialogCreateEmployee", true);
    }
  }
};
</script>
