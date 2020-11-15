<template>
  <v-dialog
    v-model="isDialogUpdateDepartment"
    width="500px"
    persistent
    :retain-focus="false"
  >
    <form @submit.prevent="onSubmit">
      <v-card>
        <v-card-title class="blue-grey lighten-3 text-uppercase"
          >Update Department List</v-card-title
        >
        <v-card-subtitle class="mt-3">
          Department information
          <v-divider />
        </v-card-subtitle>

        <v-card-text>
          <department-form
            v-if="isDialogUpdateDepartment"
            :department-update-item="departmentUpdateItem"
            @department-input-change="departmentInputChange"
          />
        </v-card-text>

        <v-card-actions>
          <v-spacer />
          <v-btn color="primary" dark type="submit">Submit</v-btn>
          <v-btn @click="closeDialog" color="red" dark>Close</v-btn>
        </v-card-actions>
      </v-card>
    </form>
  </v-dialog>
</template>
<script>
import { mapState } from "vuex";
import DepartmentForm from "../components/department/DepartmentForm";
export default {
  name: "DepartmentCreateContainer",
  components: {
    DepartmentForm,
  },
  data: () => ({
    departmentPayload: {},
    departmentUpdateItem: {
      departmentName: "",
      departmentCode: "",
    },
  }),
  computed: mapState({
    isDialogUpdateDepartment: (state) =>
      state.department.isDialogUpdateDepartment,
    idDepartmentUpdate: (state) => state.department.idDepartmentUpdate,
    departmentItem: (state) => state.department.departmentItem,
  }),
  watch: {
    isDialogUpdateDepartment: {
      handler(value) {
        if (value) {
          this.setInput();
        }
      },
      immediate: true,
    },
  },
  methods: {
    setInput() {
      if (this.departmentItem) {
        this.departmentUpdateItem.departmentName = this.departmentItem.department_name;
        this.departmentUpdateItem.departmentCode = this.departmentItem.department_code;
      }
    },
    departmentInputChange(departmentDataList) {
      this.departmentPayload = departmentDataList;
    },
    updateDepartment() {
      this.$store.dispatch(
        "department/updateDepartment",
        this.departmentPayload
      );
    },
    setDepartmentItem() {
      this.departmentPayload = {
        ...this.departmentPayload,
        department_id: this.idDepartmentUpdate,
      };
    },
    async onSubmit() {
      this.setDepartmentItem();
      this.updateDepartment();
      this.closeDialog();
    },
    closeDialog() {
      this.$store.commit("department/setIsDialogUpdateDepartment", false);
    },
  },
};
</script>