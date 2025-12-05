<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import Oven from './components/Oven.vue'
import MainTable from './components/MainTable.vue'
</script>

<template>
  <div class="wrapper">
    <MainTable />
    <!-- <Oven /> -->
  </div>
</template>

<style scoped>

.wrapper {
  width: 1920px;
  /* display: flex; */
  overflow: auto;
  /* place-items: flex-start; */
  /* gap: 20px; */
  /* background-color: pink; */
}
</style>
