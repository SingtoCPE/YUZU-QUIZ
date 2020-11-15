
<template>
  <tbody>
    <tr v-for="(item, index) in items" :key="item.department_id">
      <td>{{ index + 1 }}</td>
      <td>{{ item.department_name }}</td>
      <td>{{ item.department_id }}</td>
      <td>
        <div class="d-flex justify-center">
          <v-btn
            depressed
            small
            width="40"
            class="d-flex justify-center pt-1 mr-2"
          >
            <v-icon style="color: orange">mdi-border-color</v-icon>
          </v-btn>
          <v-btn
            @click="
              openDialogDeleteDepartment(
                item.department_id,
                item.department_name
              )
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
          >Do you want to delete " {{ this.nameDepartmentDelete }} "
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
import ButtonSlot from "../slot/ButtonSlot.vue";
export default {
  name: "DepartmentTableBody",
  components: { ButtonSlot },
  props: {
    items: {
      type: Array,
      default: () => [],
    },
  },
  data: () => ({
    idDepartmentDelete: null,
    nameDepartmentDelete: "",
    isDialogAlert: false,
  }),
  methods: {
    openDialogDeleteDepartment(departmentId, departmentName) {
      this.idDepartmentDelete = departmentId;
      this.nameDepartmentDelete = departmentName;
      this.isDialogAlert = true;
    },
    confirmDelete() {
      this.$store.dispatch(
        "department/deleteDepartment",
        this.idDepartmentDelete
      );
      this.cancelDelete();
    },
    cancelDelete() {
      this.isDialogAlert = false;
    },
  },
};
</script>