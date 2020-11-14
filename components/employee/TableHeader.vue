<template>
  <v-card
    class="d-flex justify-end ma-2 ml-6"
    color="white"
    height="43"
    outlined
  >
    <v-card-actions>
      <v-btn dark id="new-button" color="red" width="115px">
        <v-icon class="mr-1"> mdi-minus-circle </v-icon>Delete
      </v-btn>
      <v-btn dark id="new-button" color="green" width="115px">
        <v-icon class="mr-1"> mdi-plus-circle </v-icon>New
      </v-btn>
    </v-card-actions>
  </v-card>
</template>
<script>
export default {
  name: "TableHeader",
};
</script>