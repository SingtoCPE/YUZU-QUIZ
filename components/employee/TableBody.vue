
<template>
  <tbody>
    <tr v-for="(item, index) in items" :key="item.employee_id">
      <td>{{ index + 1 }}</td>
      <td>{{ item.employee_name }}</td>
      <td>{{ item.email }}</td>
      <td>{{ item.address }}</td>
      <td>{{ item.phone }}</td>
      <td>{{ item.department }}</td>
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
          <v-btn depressed small width="40" class="d-flex justify-center">
            <v-icon style="color: red">mdi-delete</v-icon>
          </v-btn>
        </div>
      </td>
    </tr>
  </tbody>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "TableBody",
  props: {
    items: {
      type: Array,
      default: () => [],
    },
  },
};
</script>