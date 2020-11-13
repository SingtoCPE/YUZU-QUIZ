
<template>
  <tbody>
    <tr v-for="(item, index) in items" :key="item.employee_id">
      <td>{{ index + 1 }}</td>
      <td>{{ item.employee_name }}</td>
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