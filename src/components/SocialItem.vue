<script lang="ts" setup>
defineProps({
  name: String,
  aria: String,
  name: String,
  url: String,
  color: String,
});
</script>

<template>
  <a class="group" :href="url" :aria-label="aria" target="_blank">
    <component :is="name" :color="color"></component>
  </a>
</template>
