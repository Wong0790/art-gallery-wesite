<script lang="ts" setup>
import { ref, computed } from "vue";
import SocialItem from "./SocialItem.vue";

const props = defineProps({
  home: {
    type: Boolean,
    default: true,
  },
});

const socialItems = ref(["FacebookIcon", "InstagramIcon", "TwitterIcon"]);
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
    <div class="social-container">
      <SocialItem
        class="group"
        v-for="social in socialItems"
        :key="social"
        :name="social"
        :color="color"
      />
    </div>
  </footer>
</template>
