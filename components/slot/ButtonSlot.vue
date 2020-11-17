<template>
  <v-btn dark :color="colorButton" v-bind="$attrs" v-on="$listeners">{{
    textButton
  }}</v-btn>
</template>
<script>
export default {
  name: "ButtonSlot",
  props: {
    textButton: {
      type: String,
      default: ""
    },
    colorButton: {
      type: String,
      default: ""
    }
  }
};
</script>
