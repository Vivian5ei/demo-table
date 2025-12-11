<script setup lang="ts">
import { ref } from 'vue'
import { RouterLink, RouterView } from 'vue-router'
import Oven from './components/Oven.vue'
import MainTable from './components/MainTable.vue'
import Header from './components/Header.vue'
import MachineClear from './components/MachineClear.vue'
import Maintenance from './components/Maintenance.vue'
import { VxeUI } from 'vxe-table'

</script>

<template>
  <div class="wrapper">
    <div class="container-title">
      <Header ref="headerRef" class="component" />
    </div>
    <div class="container">
      <MainTable ref="mainTableRef" class="component" />
      <Oven ref="ovenRef" class="component" />
    </div>
    <div class="container-record">
      <MachineClear ref="machineClearRef" class="component" />
    </div>
    <div class="container-record">
      <Maintenance ref="maintenanceRef" class="component" />
    </div>
    <!-- <vxe-button content="点击打印" @click="printEvent"></vxe-button> -->
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
  max-width: 1920px;
  padding-right: 10px;
}

.container {
  display: flex;
  padding: 0 5px;
  max-width: 1920px;
}
.container-record {
  max-width: 1920px;
  padding: 5px 6px;
}

/* 组件行为 */
.component {
  width: 100%;
  flex-shrink: 1;
}
</style>