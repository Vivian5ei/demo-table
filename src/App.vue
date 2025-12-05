<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import Oven from './components/Oven.vue'
</script>

<template>
  <div class="wrapper">
    <!-- <Oven /> -->
    <Oven />
  </div>
</template>

<style scoped>

.wrapper {
  /* width: 786px; */
  display: flex;
  place-items: flex-start;
  gap: 20px;
}
</style>
