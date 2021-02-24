<template>
  <v-container>
    <v-card elevation="0">
      <div class="text-center">
        <v-rating
          v-model="rating"
          background-color="warning lighten-1"
          color="warning"
          size="40"
          style="height: 100px;"
          @input="inputNumber"
        ></v-rating>

        <v-card-subtitle style="height: 100px;">
          Give more feedback by voice record</v-card-subtitle
        >
        <v-card-subtitle>
          <v-checkbox
            v-model="checkbox"
            label="I agree to give permission to record audio to improve the service"
            color="warning"
            hide-details
          ></v-checkbox>
        </v-card-subtitle>

        <v-row align="center" justify="space-around">
          <v-btn class="ma-2" :disabled="!checkbox" @click="submit">
            Submit
          </v-btn>
        </v-row>
      </div>
    </v-card>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    rating: 0,
    checkbox: false,
  }),
  methods: {
    inputNumber(Number) {
     this.rating = Number;
    },
    submit(){
      this.$router.push(`/recordVoice?score=${this.rating}`);
    }
  },
  mounted() {
    this.rating = Number(this.$route.query.score);
  },
};
</script>

<style></style>
