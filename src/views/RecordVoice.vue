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
          Please press button below to record</v-card-subtitle
        >

        <i
          class="mdi mdi-microphone mdi-48px"
          :class="{ isListening }"
          @click="listen"
        ></i>
        <p class="speechToText">
          {{ speechToText }}
        </p>

        <v-row align="center" justify="space-around">
          <v-btn class="ma-2" @click="submit">
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
    speechToText: null,
    isListening: false,
    recognition: null,
    rating: 0,
  }),
  methods: {
    inputNumber(Number) {
      this.rating = Number;
    },
    submit() {
      alert("คะแนน : " + this.rating + " comment : " + this.speechToText);
    },
    listen() {
      this.isListening = true;
      this.recognition.start();
    },
    record(event) {
      this.isListening = false;
      this.speechToText = event.results[0][0].transcript;

      //   const parseRegex = /(?<id>(\d*))\s(?=nolu).*(?<command>(sil))$/giu;
      //   const voiceMatch = parseRegex.exec(this.speechToText);

      //   const allNoteRemoveRegex = /tüm notları sil/giu;
      //   const allNotesRemoveMatch = allNoteRemoveRegex.test(this.speechToText);

      setTimeout(() => {
        // if (voiceMatch && voiceMatch.groups.id && voiceMatch.groups.command) {
        //   this.deleteNote(voiceMatch.groups.id);
        // } else if (allNotesRemoveMatch) {
        //   this.removeAllNotes();
        // } else {
        //   this.addNote(event.results[0][0].transcript);
        // }
        // this.speechToText = null;
      }, 1000);
    },
  },
  mounted() {
    this.recognition = new window.webkitSpeechRecognition();
    this.recognition.lang = "th";
    this.recognition.onresult = this.record;
    this.rating = Number(this.$route.query.score);
  },
};
</script>

<style>
.isListening {
  color: #fec224;
  transition: all 0.5s;
}

.speechToText {
  margin-top: 10px;
}
</style>
