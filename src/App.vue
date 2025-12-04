<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <div class="wrapper">
    <HelloWorld />
  </div>
</template>

<style scoped>

.wrapper {
  /* width: 786px; */
  display: flex;
  place-items: flex-start;
}
</style>
