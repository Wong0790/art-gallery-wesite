<script lang="ts" setup>
import { useRouter } from "vue-router";
import FooterItem from "./FooterItem.vue";

const router = useRouter();

const goBackHome = () => {
  router.push({ name: "Home" });
};
</script>

<template>
  <div>
    <div class="location-container dynamic-container">
      <button
        class="btn btn-go-back hover:bg-gold group slide pl-0 pr-8"
        @click="goBackHome"
      >
        <div class="svg-btn-container group-hover:bg-almost-black">
          <img src="@assets/icon-arrow-left.svg" alt="Left arrow svg" />
        </div>
        <span class="ml-8">To home</span>
      </button>
    </div>
    <div class="location-info">
      <h2>Our location</h2>
      <div class="max-w-540">
        <h4 class="text-gold mb-5">99 King Street</h4>
        <p class="mb-5 lg:mb-8">
          Newport<br />
          RI 02840<br />
          United States of America
        </p>
        <p>
          Our newly opened gallery is located near the Edward King House on 99
          King Street, the Modern Art Gallery is free to all visitors and open
          seven days a week from 8am to 9pm.
        </p>
      </div>
    </div>
    <FooterItem :home="false" />
  </div>
</template>
