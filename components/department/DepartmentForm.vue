<template>
  <div class="px-3">
    <ValidationProvider
      name="Department Name"
      :rules="{ required: true, max: 100 }"
    >
      <v-text-field
        v-model="departmentInput.departmentName"
        slot-scope="{ errors }"
        prepend-inner-icon="mdi-alpha-n-circle"
        clearable
        dense
        label="Department Name *"
        outlined
        required
        :error-messages="errors"
        :counter="100"
      />
    </ValidationProvider>

    <ValidationProvider
      name="Department Code"
      :rules="{ required: true, max: 4 }"
    >
      <v-text-field
        v-model="departmentInput.departmentCode"
        slot-scope="{ errors }"
        prepend-inner-icon="mdi-alpha-c-circle"
        clearable
        dense
        label="Department Code*"
        outlined
        required
        :error-messages="errors"
        :counter="4"
      />
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
  name: 'DepartmentForm',
  components: {
    ValidationProvider: ValidationProvider,
  },
  props: {
    isClearInput: {
      type: Boolean,
      default: false,
    },
    departmentUpdateItem: {
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
    departmentInput: {
      departmentName: "",
      departmentCode: "",
    },
  }),
  watch: {
    departmentInput: {
      handler(value) {
        this.$emit("department-input-change", value);
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
    this.setDepartmentInput();
  },
  methods: {
    clearForm() {
      this.departmentInput.departmentName = "";
      this.departmentInput.departmentCode = "";
    },
    setDepartmentInput() {
      if (this.departmentUpdateItem) {
        this.departmentInput.departmentName = this.departmentUpdateItem.departmentName;
        this.departmentInput.departmentCode = this.departmentUpdateItem.departmentCode;
      }
    },
  },
};
</script>