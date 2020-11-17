<template>
  <div class="mt-1">
    <v-btn dark @click="addSizeImg"><v-icon>mdi-magnify-plus</v-icon></v-btn>
    <v-btn dark @click="reduceSizeImg">
      <v-icon>mdi-magnify-minus</v-icon>
    </v-btn>
    <div :size="size" class="flex-wrap">
      <v-row class="pt-1">
        <v-col class="d-flex justify-center align-center">
          <v-card elevation="10" width="auto">
            <img src="@/assets/1.png" alt="" :width="countSizeImg" />
          </v-card>
        </v-col>
        <v-col class="d-flex justify-center align-center">
          <v-card elevation="10" width="auto">
            <img src="@/assets/2.png" alt="" :width="countSizeImg" />
          </v-card>
        </v-col>
      </v-row>
    </div>
  </div>
</template>
<script>
export default {
  name: "Resume",
  data() {
    return {
      countSizeImg: 450
    };
  },
  computed: {
    size() {
      switch (this.$vuetify.breakpoint.name) {
        case "xs":
          return (this.countSizeImg = 350);
        case "sm":
          return (this.countSizeImg = 625);
        case "md":
          return (this.countSizeImg = 850);
        case "lg":
          return (this.countSizeImg = 450);
        case "xl":
          return (this.countSizeImg = 450);
      }
    }
  },
  methods: {
    addSizeImg() {
      if (this.countSizeImg == 1000) {
        this.countSizeImg += 0;
      } else {
        this.countSizeImg += 50;
      }
    },
    reduceSizeImg() {
      if (this.countSizeImg == 200) {
        this.countSizeImg -= 0;
      } else {
        this.countSizeImg -= 50;
      }
    }
  }
};
</script>
