<template>
  <div class="mt-1">
    <div>
      <v-btn dark @click="addImg"><v-icon>mdi-plus</v-icon></v-btn>
      <v-btn dark @click="reduceImg"><v-icon>mdi-minus</v-icon></v-btn>
      <v-btn dark @click="addSizeImg"><v-icon>mdi-magnify-plus</v-icon></v-btn>
      <v-btn dark @click="reduceSizeImg">
        <v-icon>mdi-magnify-minus</v-icon>
      </v-btn>
      <v-btn dark @click="randomImg"><v-icon>mdi-reload</v-icon></v-btn>
    </div>
    <v-row class="pt-1">
      <v-col
        v-for="n in countImg"
        :key="n"
        class="d-flex child-flex"
        :cols="countSizeImg"
      >
        <v-card elevation="5">
          <v-img
            :src="`https://picsum.photos/1920/1080?random?image=${n * 5 + 10}`"
            aspect-ratio="1"
          >
          </v-img>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>
<script>
export default {
  name: "inspire",
  data() {
    return {
      countImg: 3,
      countSizeImg: 4
    };
  },
  methods: {
    addImg() {
      if (this.countImg == 36) {
        this.countImg += 0;
      } else {
        this.countImg += 1;
      }
    },
    reduceImg() {
      if (this.countImg == 1) {
        this.countImg -= 0;
      } else {
        this.countImg -= 1;
      }
    },
    addSizeImg() {
      if (this.countSizeImg == 12) {
        this.countSizeImg += 0;
      } else {
        this.countSizeImg += 1;
      }
    },
    reduceSizeImg() {
      if (this.countSizeImg == 1) {
        this.countSizeImg -= 0;
      } else {
        this.countSizeImg -= 1;
      }
    },
    randomImg() {
      this.$router.go(0);
    }
  }
};
</script>
