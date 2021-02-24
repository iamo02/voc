import Vue from "vue";
import VueRouter from "vue-router";
import Vote from "../views/Vote.vue";
import SubmitScore from "../views/SubmitScore.vue";
import RecordVoice from "../views/RecordVoice.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Vote",
    component: Vote,
  },
  {
    path: "/submitScore",
    name: "SubmitScore",
    component: SubmitScore,
  },
  {
    path: "/recordVoice",
    name: "RecordVoice",
    component: RecordVoice, 
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
