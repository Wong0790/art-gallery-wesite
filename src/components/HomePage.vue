<script lang="ts" setup>
import { onMounted } from "vue";
import { useRouter } from "vue-router";
import FooterItem from "./FooterItem.vue";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const router = useRouter();

const goToLocation = () => {
  router.push({ name: "Location" });
};

const paraAnimation = (para) => {
  let paraTL = gsap.timeline();
  paraTL.from(para, { scale: 0, x: -200, duration: 1 });
  return paraTL;
};

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

  gsap
    .timeline({
      scrollTrigger: {
        trigger: ".first-part-container",
        start: "top center",
        end: "center center",
        scrub: true,
      },
    })
    .to(".first-part-container", {
      height: "100%",
      duration: 0.2,
      ease: "power2.inOut",
    })
    .to(
      ["h3", ".your-day-text", ".first-part-container-img"],
      { opacity: 1, y: 0, stagger: 0.01, duration: 0.1, ease: "power2.out" },
      ""
    );

  gsap
    .timeline({
      scrollTrigger: {
        trigger: ".grid-part-container",
        start: "top center",
        end: "top center",
        scrub: true,
      },
    })
    .to(".grid-part-container", {
      height: "100%",
      duration: 0.2,
      ease: "power2.inOut",
    })
    .to(
      ["h3", ".gallery-grid"],
      { opacity: 1, y: 0, stagger: 0.1, duration: 0.1, ease: "power2.out" },
      ""
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
        class="row-span-2 gallery-grid"
      />
      <img
        src="@assets/desktop/image-grid-3.jpg"
        alt="Gallery room displaying a collection of paintings with individuals admiring the artwork"
        width="445"
        height="313"
        class="mx-auto gallery-grid"
      />
      <div
        class="bg-almost-black text-white px-6 py-12 md:px-12 md:py-16 gallery-grid"
      >
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
