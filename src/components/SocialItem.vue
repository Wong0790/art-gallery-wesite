<script lang="ts" setup>
defineProps({
  name: String,
  color: String,
});
</script>

<template>
  <button class="group">
    <component :is="name" :color="color"></component>
  </button>
</template>
