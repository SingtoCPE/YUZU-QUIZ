<template>
  <v-card
    class="d-flex justify-end ma-2 ml-6"
    color="white"
    height="43"
    outlined
  >
    <v-card-actions>
      <v-btn
        @click="openDialogCreateDepartment"
        dark
        color="green"
        width="115px"
      >
        <v-icon class="mr-1"> mdi-plus-circle </v-icon>New
      </v-btn>
    </v-card-actions>
    <department-create-container />
    <department-update-container />
  </v-card>
</template>
<script>
import DepartmentCreateContainer from "@/container/DepartmentCreateContainer.vue";
import DepartmentUpdateContainer from "@/container/DepartmentUpdateContainer.vue";
export default {
  name: "DepartmentTableHeader",
  components: { DepartmentCreateContainer, DepartmentUpdateContainer },
  methods: {
    openDialogCreateDepartment() {
      this.$store.commit("department/setIsDialogCreateDepartment", true);
    },
  },
};
</script>