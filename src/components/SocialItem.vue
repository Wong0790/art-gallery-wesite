<script lang="ts" setup>
defineProps({
  name: String,
  color: String,
});
</script>

<template>
  <a class="group" href="#">
    <component :is="name" :color="color"></component>
  </a>
</template>
