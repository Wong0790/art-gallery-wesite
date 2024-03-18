<script lang="ts" setup>
import { onMounted } from "vue";
import { useRouter } from "vue-router";
import FooterItem from "./FooterItem.vue";

const router = useRouter();

const goBackHome = () => {
  router.push({ name: "Home" });
};

onMounted(() => {
  let map = L.map("map").setView([41.48131, -71.31041], 16);
  let marker = L.icon({
    iconUrl: "src/assets/icon-location.svg",
    iconAnchor: [22, 94],
    popupAnchor: [-3, -76],
  });
  L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution:
      '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  }).addTo(map);

  L.marker([41.48131, -71.31041], { icon: marker }).addTo(map).openPopup();
});
</script>

<template>
  <div class="relative">
    <div id="map" class="location-container dynamic-container"></div>
    <button
      class="btn btn-go-back hover:bg-gold group slide pl-0 pr-8"
      @click="goBackHome"
    >
      <span class="svg-btn-container group-hover:bg-almost-black">
        <img src="@assets/icon-arrow-left.svg" alt="Left arrow svg" />
      </span>
      <span class="ml-8">To home</span>
    </button>
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
