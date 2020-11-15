<template>
  <v-dialog
    v-model="isDialogCreateEmployee"
    width="500px"
    persistent
    :retain-focus="false"
  >
    <ValidationObserver ref="employeeForm">
      <form @submit.prevent="onSubmit">
        <v-card>
          <v-card-title class="blue-grey lighten-3 text-uppercase"
            >Create Employee List</v-card-title
          >
          <v-card-subtitle class="mt-3">
            Employee information
            <v-divider />
          </v-card-subtitle>

          <v-card-text>
            <employee-form
              :is-clear-input="isClearInput"
              @employee-input-change="employeeInputChange"
              @reset-is-clear-input="resetIsClearInput"
            />
          </v-card-text>

          <v-card-actions>
            <v-spacer />
            <v-btn id="add-button" color="primary" dark type="submit"
              >Submit</v-btn
            >
            <v-btn @click="clearInput" name="close-button" color="red" dark
              >Close</v-btn
            >
          </v-card-actions>
        </v-card>
      </form>
    </ValidationObserver>
  </v-dialog>
</template>
<script>
import { mapState } from "vuex";
import EmployeeForm from "../components/employee/EmployeeForm";
import { ValidationObserver } from "vee-validate/dist/vee-validate.full";
export default {
  name: "EmployeeCreateContainer",
  components: {
    ValidationObserver: ValidationObserver,
  },
  data: () => ({
    employeePayload: [],
    isClearInput: false,
  }),
  computed: mapState({
    isDialogCreateEmployee: (state) => state.employee.isDialogCreateEmployee,
  }),
  methods: {
    employeeInputChange(employeeDataList) {
      this.employeePayload = employeeDataList;
    },
    async onSubmit() {
      const isValid = await this.$refs.departmentForm.validate();
      if (isValid) {
        this.createEmployee();
        this.clearInput();
      }
    },
    createEmployee() {
      this.$store.dispatch("employee/createEmployee", this.employeePayload);
    },
    closeDialog() {
      this.$store.commit("employee/setIsDialogCreateEmployee", false);
    },
    clearInput() {
      this.isClearInput = true;
      this.clearValidate();
      this.closeDialog();
    },
    clearValidate() {
      this.$refs.employeeForm.reset();
    },
    resetIsClearInput() {
      this.isClearInput = false;
    },
  },
};
</script>