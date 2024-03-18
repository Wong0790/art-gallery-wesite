<script lang="ts" setup>
import { onMounted } from "vue";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

onMounted(() => {
  gsap
    .timeline({
      scrollTrigger: {
        trigger: "#first-part-container",
        start: "top top",
        end: "+=500",
        scrub: true,
      },
    })
    .to(
      [
        "h3",
        ".your-day-text",
        ".first-part-container-img",
        ".gallery-grid-img-1",
        ".gallery-grid-img-2",
        ".gallery-grid-card",
      ],
      {
        duration: 1,
        ease: "power2.inOut",
      }
    )
    .to(
      [
        "h3",
        ".your-day-text",
        ".first-part-container-img",
        ".gallery-grid-img-1",
        ".gallery-grid-img-2",
        ".gallery-grid-card",
      ],
      {
        opacity: 1,
        y: 0,
        stagger: 0.4,
        duration: 1,
        ease: "power2.out",
      }
    );
});
</script>

<template>
  <section id="your-day">
    <div class="first-part-container">
      <div>
        <h3>Your Day at the Gallery</h3>
        <p class="mt-8 your-day-text">
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
          class="first-part-container-img"
          src="@assets/mobile/image-grid-1.jpg"
          alt="Gallery room showcasing a collection of paintings with a sculpture prominently placed in the center"
        />
      </picture>
    </div>
    <div class="grid-part-container">
      <img
        src="@assets/desktop/image-grid-2.jpg"
        alt="Gallery room showcasing a collection of paintings with a sculpture prominently placed in the center"
        width="635"
        height="720"
        class="row-span-2 gallery-grid gallery-grid-img-1"
      />
      <img
        src="@assets/desktop/image-grid-3.jpg"
        alt="Gallery room displaying a collection of paintings with individuals admiring the artwork"
        width="445"
        height="313"
        class="mx-auto gallery-grid gallery-grid-img-2"
      />
      <div
        class="bg-almost-black text-white px-6 py-12 md:px-12 md:py-16 gallery-grid gallery-grid-card"
      >
        <h3 class="mb-6">COME & BE INSPIRED</h3>
        <p>
          We’re excited to welcome you to our gallery and see how our
          collections influence you.
        </p>
      </div>
    </div>
  </section>
</template>
