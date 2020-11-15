
<template>
  <tbody>
    <tr v-for="(item, index) in items" :key="item.employee_id">
      <td><v-checkbox></v-checkbox></td>
      <td>{{ index + 1 }}</td>
      <td>{{ item.employee_name }}</td>
      <td>{{ item.email }}</td>
      <td>{{ item.address }}</td>
      <td>{{ item.phone }}</td>
      <td>{{ item.department_name }}</td>
      <td>
        <div class="d-flex justify-center">
          <v-btn
            depressed
            small
            width="40"
            class="d-flex justify-center pt-1 mr-2"
            @click="openDialogUpdateEmployee(item.employee_id)"
          >
            <v-icon style="color: orange">mdi-border-color</v-icon>
          </v-btn>
          <v-btn
            @click="
              openDialogDeleteEmployee(item.employee_id, item.employee_name)
            "
            depressed
            small
            width="40"
            class="d-flex justify-center"
          >
            <v-icon style="color: red">mdi-delete</v-icon>
          </v-btn>
        </div>
      </td>
    </tr>
    <v-dialog v-model="isDialogAlert" width="290px" persistent>
      <v-card>
        <v-card-title class="headline"
          >Do you want to delete " {{ this.nameEmployeeDelete }} "
          ?</v-card-title
        >
        <v-card-actions>
          <v-spacer />
          <button-slot
            @click="confirmDelete"
            text-button="Delete"
            color-button="blue"
          />
          <button-slot
            @click="cancelDelete"
            text-button="Cencel"
            color-button="red"
          />
        </v-card-actions>
      </v-card>
    </v-dialog>
  </tbody>
</template>

<script>
import { mapState } from "vuex";
import ButtonSlot from "../slot/ButtonSlot.vue";
export default {
  name: "EmployeeTableBody",
  components: { ButtonSlot },
  props: {
    items: {
      type: Array,
      default: () => [],
    },
  },
  data: () => ({
    idEmployeeDelete: null,
    employeeItem: "",
    nameEmployeeDelete: "",
    isDialogAlert: false,
  }),
  computed: mapState({
    employeeList: (state) => state.employee.employeeList,
  }),
  methods: {
    openDialogUpdateEmployee(employeeId) {
      this.employeeItem = this.employeeList.find(
        (employeeItem) => employeeItem.employee_id === employeeId
      );
      this.$store.commit("employee/setEmployeeItem", this.employeeItem);
      this.$store.commit("employee/setIdEmployeeUpdate", employeeId);
      this.$store.commit("employee/setIsDialogUpdateEmployee", true);
    },
    openDialogDeleteEmployee(employeeId, employeeName) {
      this.idEmployeeDelete = employeeId;
      this.nameEmployeeDelete = employeeName;
      this.isDialogAlert = true;
    },
    confirmDelete() {
      this.$store.dispatch("employee/deleteEmployee", this.idEmployeeDelete);
      this.cancelDelete();
    },
    cancelDelete() {
      this.isDialogAlert = false;
    },
  },
};
</script>