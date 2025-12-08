<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import Oven from './components/Oven.vue'
import MainTable from './components/MainTable.vue'
import Header from './components/Header.vue'
import MachineClear from './components/MachineClear.vue'
</script>

<template>
  <div class="wrapper">
    <div class="container-title">
      <Header class="component" />
    </div>
    <div class="container">
      <MainTable class="component" />
      <Oven class="component" />
    </div>
    <div class="container-record">
      <MachineClear class="component" />
    </div>
  </div>
</template>

<style scoped>

.wrapper {
  width: 100vw;
  height: 100vh;
  overflow: auto; /* 整个容器可以滚动 */
  /* background-color: pink; */
}

.container-title {
}
.container {
  display: flex;
  flex-wrap: nowrap;
  min-width: fit-content;
  overflow: auto;
  padding: 10px;
}
.container-record {
  width: 100%;
   display: flex;
  flex-direction: column;
  min-width: fit-content;
  overflow: auto;
  padding: 10px;
}
.component {
  flex-shrink: 0;
  height: 100%;
}
</style>
