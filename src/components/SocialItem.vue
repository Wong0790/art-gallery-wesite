<script lang="ts" setup>
defineProps({
  name: String,
  color: String,
});
</script>

<template>
  <a class="group" href="#your-day">
    <component :is="name" :color="color"></component>
  </a>
</template>
