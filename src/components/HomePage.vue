<script lang="ts" setup>
import { onMounted } from "vue";
import HeaderSection from "./sections/HeaderSection.vue";
import YourDaySection from "./sections/YourDaySection.vue";
import FooterItem from "./FooterItem.vue";
import { gsap } from "gsap";

onMounted(() => {
  gsap.set(
    [
      "h1, .header-text",
      "h3",
      ".your-day-text",
      ".first-part-container-img",
      ".gallery-grid",
    ],
    {
      opacity: 0,
      y: "+=50",
    }
  );
});
</script>

<template>
  <HeaderSection />
  <YourDaySection />
  <FooterItem />
</template>
