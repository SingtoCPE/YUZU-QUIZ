<template>
  <v-dialog
    v-model="isDialogUpdateEmployee"
    width="500px"
    persistent
    :retain-focus="false"
  >
    <form @submit.prevent="onSubmit">
      <v-card>
        <v-card-title class="blue-grey lighten-3 text-uppercase"
          >Update Employee List</v-card-title
        >
        <v-card-subtitle class="mt-3">
          Employee information
          <v-divider />
        </v-card-subtitle>

        <v-card-text>
          <employee-form
            v-if="isDialogUpdateEmployee"
            :employee-update-item="employeeUpdateItem"
            @employee-input-change="employeeInputChange"
          />
        </v-card-text>

        <v-card-actions>
          <v-spacer />
          <v-btn id="add-button" color="primary" dark type="onSubmit"
            >Submit</v-btn
          >
          <v-btn @click="closeDialog" name="close-button" color="red" dark
            >Close</v-btn
          >
        </v-card-actions>
      </v-card>
    </form>
  </v-dialog>
</template>
<script>
import EmployeeForm from "../components/employee/EmployeeForm";
import { mapState } from "vuex";
export default {
  name: "EmployeeUpdateContainer",
  data: () => ({
    employeePayload: {},
    employeeUpdateItem: {
      employeeName: "",
      email: "",
      address: "",
      phone: "",
      department: ""
    }
  }),
  computed: mapState({
    isDialogUpdateEmployee: state => state.employee.isDialogUpdateEmployee,
    idEmployeeUpdate: state => state.employee.idEmployeeUpdate,
    employeeItem: state => state.employee.employeeItem
  }),
  watch: {
    isDialogUpdateEmployee: {
      handler(value) {
        if (value) {
          this.setInput();
        }
      },
      immediate: true
    }
  },
  methods: {
    setInput() {
      if (this.employeeItem) {
        this.employeeUpdateItem.employeeName = this.employeeItem.employee_name;
        this.employeeUpdateItem.email = this.employeeItem.email;
        this.employeeUpdateItem.address = this.employeeItem.address;
        this.employeeUpdateItem.phone = this.employeeItem.phone;
        this.employeeUpdateItem.department = this.employeeItem.department_id;
      }
    },
    employeeInputChange(employeeDataList) {
      this.employeePayload = employeeDataList;
    },
    updateEmployee() {
      this.$store.dispatch("employee/updateEmployee", this.employeePayload);
    },
    setEmployeeItem() {
      this.employeePayload = {
        ...this.employeePayload,
        employee_id: this.idEmployeeUpdate
      };
    },
    onSubmit() {
      this.setEmployeeItem();
      this.updateEmployee();
      this.closeDialog();
    },
    closeDialog() {
      this.$store.commit("employee/setIsDialogUpdateEmployee", false);
    }
  }
};
</script>
