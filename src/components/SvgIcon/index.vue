<template>
  <svg :style="{ width, height }">
    <use :xlink:href="prefix + name" :fill="color"></use>
  </svg>
</template>

<script setup lang="ts">
defineProps({
  prefix: {
    type: String,
    default: '#icon-',
  },
  name: String,
  width: {
    type: String,
    default: '100px',
  },
  height: {
    type: String,
    default: '100px',
  },
  color: String,
})
</script>

<style scoped></style>
