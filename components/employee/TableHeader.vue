<template>
  <v-card
    class="d-flex justify-end ma-2 ml-6"
    color="white"
    height="43"
    outlined
  >
    <v-card-actions>
      <v-btn id="new-button" color="grey lighten-1" width="115px">
        <v-icon small> mdi-plus </v-icon>New
      </v-btn>
    </v-card-actions>
  </v-card>
</template>
<script>
export default {
  name: "TableHeader",
};
</script>