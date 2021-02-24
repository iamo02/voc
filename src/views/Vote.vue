<template>
  <v-container>
    <v-card elevation="0">
      <div class="text-center">
        <v-card-subtitle style="height: 100px;">
          Rate you experience</v-card-subtitle
        >
        <v-rating
          v-model="rating"
          background-color="warning lighten-1"
          color="warning"
          size="40"
          style="height: 100px;"
          @input="inputNumber"
        ></v-rating>

        <v-card-subtitle> You feedback makes a big difference</v-card-subtitle>
      </div>
    </v-card>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    rating: 0,
  }),
  methods: {
    inputNumber(Number) {
      console.log(Number);
      this.$router.push(`/submitScore?score=${Number}`);
    },
  },
};
</script>

<style></style>
