<template>
  <div class="px-3">
    <v-text-field
      v-model="departmentInput.departmentName"
      prepend-inner-icon="mdi-alpha-n-circle"
      clearable
      dense
      label="Department Name *"
      outlined
      required
    />

    <v-text-field
      v-model="departmentInput.departmentCode"
      prepend-inner-icon="mdi-alpha-c-circle"
      clearable
      dense
      label="Department Code*"
      outlined
      required
    />

    <span class="amber accent-1">
      <v-icon size="20px">mdi-alert-rhombus</v-icon>Fields with * require
      information to be filled in
    </span>
  </div>
</template>
<script>
export default {
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