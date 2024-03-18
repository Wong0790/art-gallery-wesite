<script lang="ts" setup>
import { onMounted } from "vue";
import { useRouter } from "vue-router";
import { gsap } from "gsap";

const router = useRouter();

const goToLocation = () => {
  router.push({ name: "Location" });
};

onMounted(() => {
  gsap
    .timeline({})
    .to(".right-container", {
      height: "100%",
      duration: 1,
      ease: "power2.inOut",
    })
    .to(
      ["h1, .header-text"],
      { opacity: 1, y: 0, stagger: 0.3, duration: 1, ease: "power2.out" },
      "-=0.5"
    );
});
</script>

<template>
  <header>
    <div class="left-container">
      <h1 class="modern-art-gallery blend">Modern Art Gallery</h1>
    </div>
    <div class="right-container">
      <h1 class="modern-art-gallery-smaller">Modern Art Gallery</h1>
      <p class="header-text">
        The arts in the collection of the Modern Art Gallery all started from a
        spark of inspiration. Will these pieces inspire you? Visit us and find
        out.
      </p>
      <button
        class="btn btn-location hover:bg-gold group slide"
        @click="goToLocation"
      >
        <span class="mr-8">Our location</span>
        <span class="svg-btn-container group-hover:bg-almost-black">
          <img src="@assets/icon-arrow-right.svg" alt="Right arrow svg" />
        </span>
      </button>
    </div>
  </header>
</template>
