import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import HomePage from "@components/HomePage.vue";
import OurLocation from "@components/OurLocation.vue";
import FacebookIcon from "@icons/FacebookIcon.vue";
import InstagramIcon from "@icons/InstagramIcon.vue";
import TwitterIcon from "@icons/TwitterIcon.vue";
import "@fontsource/big-shoulders-display";
import "@fontsource/big-shoulders-display/800.css";
import "@fontsource/big-shoulders-display/900.css";
import "@fontsource/outfit";
import "@fontsource/outfit/200.css";
import "@fontsource/outfit/300.css";
import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      component: HomePage,
      name: "Home",
    },
    {
      path: "/location",
      component: OurLocation,
      name: "Location",
    },
  ],
  scrollBehavior() {
    return { top: 0 };
  },
});

const app = createApp(App);
app.component("FacebookIcon", FacebookIcon);
app.component("InstagramIcon", InstagramIcon);
app.component("TwitterIcon", TwitterIcon);
app.use(router).mount("#app");
