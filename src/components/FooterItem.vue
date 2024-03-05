<script lang="ts" setup>
import { ref, computed } from "vue";
import SocialItem from "./SocialItem.vue";

const props = defineProps({
  home: {
    type: Boolean,
    default: true,
  },
});

const socialItems = ref([
  {
    url: "https://www.linkedin.com/in/anneris-wong-jorge-257948104",
    name: "LinkedInIcon",
    aria: "Anneris E. Wong Jorge LinkedIn profile",
  },
  {
    url: "https://github.com/Wong0790",
    name: "GithubIcon",
    aria: "Anneris E. Wong Jorge Github profile",
  },
  {
    url: "https://www.frontendmentor.io/profile/Wong0790",
    name: "FrontendMentorIcon",
    aria: "Anneris E. Wong Jorge Frowntend Mentor profile",
  },
]);
const color = computed(() => (!props.home ? "#151515" : "#fff"));
const styleObject = computed(() => {
  if (!props.home) {
    return {
      background: "#D5966C",
      color: "#151515",
    };
  }
  return;
});
</script>

<template>
  <footer class="footer-container" :style="styleObject">
    <div class="footer-first-section">
      <h4>Modern art Gallery</h4>
      <small
        >The Modern Art Gallery is free to all visitors and open seven days a
        week from 8am to 9pm. Find us at 99 King Street, Newport, USA.</small
      >
    </div>
    <div>
      <div class="social-container mb-2">
        <SocialItem
          class="group"
          v-for="social in socialItems"
          :key="social.name"
          :name="social.name"
          :aria="social.aria"
          :url="social.url"
          :color="color"
        />
      </div>
      <span class="font-extralight" :class="`text-${color}`">
        &copy;2024 Anneris E. Wong Jorge
      </span>
    </div>
  </footer>
</template>
