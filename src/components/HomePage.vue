<script lang="ts" setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import FooterItem from "./FooterItem.vue";

const router = useRouter();
const paintings = ref([
  {
    src: "/src/assets/desktop/image-grid-2.jpg",
    alt: "Gallery room showcasing a collection of paintings with a sculpture prominently placed in the center",
    width: 635,
    height: 720,
    class: "row-span-2",
  },
  {
    src: "/src/assets/desktop/image-grid-3.jpg",
    alt: "Gallery room displaying a collection of paintings with individuals admiring the artwork",
    width: 445,
    height: 313,
    class: "mx-auto",
  },
]);

const goToLocation = () => {
  router.push({ name: "Location" });
};
</script>

<template>
  <header class="relative">
    <div class="left-container">
      <h1 class="modern-art-gallery blend">Modern Art Gallery</h1>
    </div>
    <div class="right-container">
      <h1 class="modern-art-gallery-smaller">Modern Art Gallery</h1>
      <p>
        The arts in the collection of the Modern Art Gallery all started from a
        spark of inspiration. Will these pieces inspire you? Visit us and find
        out.
      </p>
      <button
        class="btn btn-location hover:bg-gold group slide"
        @click="goToLocation"
      >
        <span class="mr-8">Our location</span>
        <div class="svg-btn-container group-hover:bg-almost-black">
          <img src="@assets/icon-arrow-right.svg" alt="Right arrow svg" />
        </div>
      </button>
    </div>
  </header>
  <section id="your-day">
    <div class="first-part-container">
      <div>
        <h3>Your Day at the Gallery</h3>
        <p class="mt-8">
          Wander through our distinct collections and find new insights about
          our artists. Dive into the details of their creative process.
        </p>
      </div>
      <picture>
        <source
          media="(min-width: 1000px)"
          srcset="@assets/desktop/image-grid-1.jpg"
        />
        <source
          media="(min-width: 640px)"
          srcset="@assets/tablet/image-grid-1.jpg"
        />
        <img
          src="@assets/mobile/image-grid-1.jpg"
          alt="Gallery room showcasing a collection of paintings with a sculpture prominently placed in the center"
        />
      </picture>
    </div>
    <div class="grid-part-container">
      <img
        v-for="(painting, index) in paintings"
        :key="index"
        :src="painting.src"
        :alt="painting.alt"
        :width="painting.width"
        :height="painting.height"
        :class="painting.class"
      />
      <div class="bg-almost-black text-white px-6 py-12 md:px-12 md:py-16">
        <h3 class="mb-6">COME & BE INSPIRED</h3>
        <p>
          We’re excited to welcome you to our gallery and see how our
          collections influence you.
        </p>
      </div>
    </div>
  </section>
  <FooterItem />
</template>
