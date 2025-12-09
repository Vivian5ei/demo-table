<template>
  <div class="production-table-container">
    <!-- 表头信息区 -->
    <div class="header">
      <div class="header-left">
        <div class="left-box">
          <div class="title">厂别/班别：</div>
          {{ formData.factoryShift }}
        </div>
        <div class="left-box">
          <div class="title">日期：</div>
          {{ formData.date }}
        </div>
      </div>
      <div class="header-right">
        <div class="left-box">
          <div class="title">薪号：</div>
          {{ formData.pay }}
        </div>
        <div class="left-box">
          <div class="title">机台号码：</div>
          {{ formData.machineNo }}
        </div>
      </div>
    </div>

    <div class="table-header">
      <div>浸镀站生产管理表</div>
      <div class="tip">Dipping Production Management Sheet</div>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'
// 表单基础信息
const formData = reactive({
  date: '2025-12-5',
  pay: '789',
  machineNo: '123',
  factoryShift: '白班',
})
</script>

<style scoped>
.production-table-container {
  display: flex;
  height: 43px !important;
  flex-direction: row;
  align-items: center;
  gap: 32%;
  padding: 0 20px;
  font-family: 'Microsoft YaHei', sans-serif;
  border: 1px solid #000;
  border-bottom: none;
  margin: 0 5px;
  color: #000;
}
.header {
  display: flex;
  flex-direction: row;
  width: 20%;
  gap: 40px;
}
.header-left {
  display: flex;
  flex-direction: column;
  font-size: 10px;
}
.header-right {
  display: flex;
  flex-direction: column;
  font-size: 10px;
}
.left-box {
  display: flex;
}
.title {
  width: 60px;
}
.table-header {
  display: flex;
  flex-direction: column;
  text-align: center;
}

.table-header div:first-child {
  text-align: center;
  font-size: 16px;
  font-weight: bold;
  letter-spacing: 22px;
  font-family: 'Microsoft YaHei', sans-serif;
}
.table-header .tip {
  font-size: 12px;
  font-weight: bold;
}
</style>