<template>
  <div class="px-3">
    <ValidationProvider name="Name" :rules="{ required: true, max: 100 }">
      <v-text-field
        v-model="employeeInput.employeeName"
        slot-scope="{ errors }"
        prepend-inner-icon="mdi-alpha-n-circle"
        clearable
        dense
        label="Name *"
        outlined
        required
        :error-messages="errors"
        :counter="100"
      />
    </ValidationProvider>

    <ValidationProvider name="Email" :rules="{ required: true, max: 45 }">
      <v-text-field
        v-model="employeeInput.email"
        slot-scope="{ errors }"
        prepend-inner-icon="mdi-email-newsletter"
        clearable
        dense
        label="Email*"
        outlined
        required
        :error-messages="errors"
        :counter="45"
      />
    </ValidationProvider>

    <ValidationProvider name="Address" :rules="{ max: 255 }">
      <v-text-field
        v-model="employeeInput.address"
        slot-scope="{ errors }"
        prepend-inner-icon="mdi-map-marker"
        clearable
        dense
        label="Address"
        outlined
        required
        :error-messages="errors"
        :counter="255"
      />
    </ValidationProvider>

    <ValidationProvider name="Phone" :rules="{ max: 10 }">
      <v-text-field
        v-model="employeeInput.phone"
        slot-scope="{ errors }"
        prepend-inner-icon="mdi-phone"
        clearable
        dense
        label="Phone"
        outlined
        :error-messages="errors"
        :counter="10"
      />
    </ValidationProvider>

    <ValidationProvider name="Department" :rules="{ required: true }">
      <v-select
        v-model="employeeInput.department"
        slot-scope="{ errors }"
        prepend-inner-icon="mdi-account-group"
        :items="departmentItems"
        item-text="departmentName"
        item-value="value"
        label="Department *"
        outlined
        dense
        :error-messages="errors"
      ></v-select>
    </ValidationProvider>
    <span class="amber accent-1">
      <v-icon size="20px">mdi-alert-rhombus</v-icon>Fields with * require
      information to be filled in
    </span>
  </div>
</template>
<script>
import { ValidationProvider } from "vee-validate/dist/vee-validate.full";
export default {
  name: "EmployeeForm",
  components: {
    ValidationProvider: ValidationProvider,
  },
  props: {
    isClearInput: {
      type: Boolean,
      default: false,
    },
    employeeUpdateItem: {
      type: Object,
      default: () => ({
        employeeName: "",
        email: "",
        address: "",
        phone: "",
        department: "",
      }),
    },
  },
  data: () => ({
    employeeInput: {
      employeeName: "",
      email: "",
      address: "",
      phone: "",
      department: "",
    },
    departmentItems: [
      { value: "D01", departmentName: "Front-End" },
      { value: "D02", departmentName: "Back-End" },
      { value: "D03", departmentName: "Maid" },
      { value: "D04", departmentName: "UX/UI Design" },
      { value: "D05", departmentName: "CEO" },
      { value: "D06", departmentName: "System Analysis" },
    ],
  }),
  watch: {
    employeeInput: {
      handler(value) {
        this.$emit("employee-input-change", value);
      },
      immediate: true,
      deep: true,
    },
    isClearInput: {
      handler(value) {
        if (value) {
          this.clearForm();
          this.$emit("reset-is-clear-input");
        }
      },
      immediate: true,
    },
  },
  created() {
    this.setEmployeeInput();
  },
  methods: {
    clearForm() {
      this.employeeInput.employeeName = "";
      this.employeeInput.email = "";
      this.employeeInput.address = "";
      this.employeeInput.phone = "";
      this.employeeInput.department = "";
    },
    setEmployeeInput() {
      if (this.employeeUpdateItem) {
        this.employeeInput.employeeName = this.employeeUpdateItem.employeeName;
        this.employeeInput.email = this.employeeUpdateItem.email;
        this.employeeInput.address = this.employeeUpdateItem.address;
        this.employeeInput.phone = this.employeeUpdateItem.phone;
        this.employeeInput.departmentItems = this.employeeUpdateItem.department;
      }
    },
  },
};
</script>