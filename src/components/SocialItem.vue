<script lang="ts" setup>
defineProps({
  name: String,
  color: String,
});
</script>

<template>
  <a class="group" href="#your-day" :aria-label="name">
    <component :is="name" :color="color"></component>
  </a>
</template>
