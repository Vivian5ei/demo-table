<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import Oven from './components/Oven.vue'
import MainTable from './components/MainTable.vue'
import Header from './components/Header.vue'
import MachineClear from './components/MachineClear.vue'
import Maintenance from './components/Maintenance.vue'
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
    <div class="container-record">
      <Maintenance class="component" />
    </div>
  </div>
</template>

<style scoped>

.wrapper {
  width: 100vw;
  min-height: 100vh;
  overflow-y: auto;
  background-color: #fff;
}

.container-title {
  width: 100%;
  padding-right: 10px;
}

.container {
  display: flex;
  padding: 0 5px;
  width: 100%;
}
.container-record {
  width: 100%;
  padding: 5px 6px;
}

/* 组件行为 */
.component {
  width: 100%; 
  flex-shrink: 1;
}

</style>
