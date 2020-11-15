<template>
  <v-dialog
    v-model="isDialogCreateDepartment"
    width="500px"
    persistent
    :retain-focus="false"
  >
    <ValidationObserver ref="departmentForm">
      <form @submit.prevent="onSubmit">
        <v-card>
          <v-card-title class="blue-grey lighten-3 text-uppercase"
            >Create Department List</v-card-title
          >
          <v-card-subtitle class="mt-3">
            Department information
            <v-divider />
          </v-card-subtitle>

          <v-card-text>
            <department-form
              :is-clear-input="isClearInput"
              @department-input-change="departmentInputChange"
              @reset-is-clear-input="resetIsClearInput"
            />
          </v-card-text>

          <v-card-actions>
            <v-spacer />
            <v-btn color="primary" dark type="submit">Submit</v-btn>
            <v-btn @click="clearInput" color="red" dark>Close</v-btn>
          </v-card-actions>
        </v-card>
      </form>
    </ValidationObserver>
  </v-dialog>
</template>
<script>
import { mapState } from "vuex";
import DepartmentForm from "../components/department/DepartmentForm";
import { ValidationObserver } from "vee-validate/dist/vee-validate.full";
export default {
  name: "DepartmentCreateContainer",
  components: {
    DepartmentForm,
    ValidationObserver: ValidationObserver,
  },
  data: () => ({
    isClearInput: false,
    departmentPayload: {},
  }),
  computed: mapState({
    isDialogCreateDepartment: (state) =>
      state.department.isDialogCreateDepartment,
  }),
  methods: {
    departmentInputChange(departmentDataList) {
      this.departmentPayload = departmentDataList;
    },
    async onSubmit() {
      const isValid = await this.$refs.departmentForm.validate();
      if (isValid) {
        this.createDepartment();
        this.clearInput();
      }
    },
    createDepartment() {
      this.$store.dispatch(
        "department/createDepartment",
        this.departmentPayload
      );
    },
    closeDialog() {
      this.$store.commit("department/setIsDialogCreateDepartment", false);
    },
    clearInput() {
      this.clearValidate();
      this.isClearInput = true;
      this.closeDialog();
    },
    clearValidate() {
      this.$refs.departmentForm.reset();
    },
    resetIsClearInput() {
      this.isClearInput = false;
    },
  },
};
</script>