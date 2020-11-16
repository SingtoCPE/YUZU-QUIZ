<template>
  <div class="mt-1">
    <v-btn dark @click="addSizeImg"><v-icon>mdi-magnify-plus</v-icon></v-btn>
    <v-btn dark @click="reduceSizeImg"
      ><v-icon>mdi-magnify-minus</v-icon></v-btn
    >
    <div class="container d-flex justify-center align-center">
      <v-row class="d-flex justify-center align-center pt-1">
        <v-col class="d-flex justify-center align-center">
          <v-card elevation="10">
            <img src="@/assets/1.png" alt="" :width="countSizeImg" />
          </v-card>
        </v-col>
        <v-col class="d-flex justify-center align-center">
          <v-card elevation="10">
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
