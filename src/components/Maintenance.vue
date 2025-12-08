<template>
  <div class="table-container">
    <vxe-table
      :data="tableData1"
      border
      size="mini"
      :cell-config="{ height: 25 }"
      :header-cell-style="{ height: '10px' }"
      class="custom-header-table"
      :edit-config="{ trigger: 'click', mode: 'cell' }"
      :style="{
        '--vxe-ui-table-border-color': '#000',
      }"
    >
      <vxe-colgroup
        title="维修记录（填写RM系统不能登修之项目）"
        field="maintenanceRecord"
        header-align="center"
      >
        <vxe-column type="seq" width="30"></vxe-column>
        <vxe-column
          field="error"
          title="机台故障现象"
          width="120"
          :edit-render="{ name: 'input' }"
        ></vxe-column>
        <vxe-column
          field="repairTime"
          title="报修时间： H:M"
          width="80"
          :edit-render="{ name: 'input' }"
        ></vxe-column>
        <vxe-column
          field="repairPerson"
          title="报修人员"
          width="80"
          :edit-render="{ name: 'input' }"
        ></vxe-column>
        <vxe-column
          field="maintenanceTime"
          title="维修时间： H:M"
          width="80"
          :edit-render="{ name: 'input' }"
        ></vxe-column>
        <vxe-column
          field="sign"
          title="维修R+M签名"
          width="80"
          :edit-render="{ name: 'input' }"
        ></vxe-column>
      </vxe-colgroup>
    </vxe-table>
    <vxe-table
      :data="tableData2"
      border
      size="mini"
      :cell-config="{ height: 25 }"
      class="custom-header-table"
      :edit-config="{ trigger: 'click', mode: 'cell' }"
      :style="{
        '--vxe-ui-table-border-color': '#000',
      }"
    >
      <vxe-colgroup title="铜膏使用记录" field="thermalPaste" header-align="center">
        <vxe-column field="project" title="项目" width="100"></vxe-column>
        <vxe-column
          field="first"
          title="1"
          width="65"
          :edit-render="{ name: 'input' }"
        ></vxe-column>
        <vxe-column
          field="second"
          title="2"
          width="65"
          :edit-render="{ name: 'input' }"
        ></vxe-column>
        <vxe-column
          field="third"
          title="3"
          width="65"
          :edit-render="{ name: 'input' }"
        ></vxe-column>
        <vxe-column
          field="fourth"
          title="4"
          width="65"
          :edit-render="{ name: 'input' }"
        ></vxe-column>
      </vxe-colgroup>
    </vxe-table>
    <vxe-table
      :data="tableData3"
      border
      size="mini"
      :cell-config="{ height: 25 }"
      class="custom-header-table"
      :style="{
        '--vxe-ui-table-border-color': '#000',
      }"
    >
      <vxe-colgroup title="膏深规格" field="thickOintment" header-align="center">
        <vxe-column field="size" title="产品尺寸" width="80"></vxe-column>
        <vxe-column field="range" title="数值范围" width="80"></vxe-column>
        <vxe-column field="unit" title="单位" width="80"></vxe-column>
      </vxe-colgroup>
    </vxe-table>
    <vxe-table
      :data="tableData4"
      border
      size="mini"
      :cell-config="{ height: 25 }"
      class="custom-header-table"
      :style="{
        '--vxe-ui-table-border-color': '#000',
      }"
    >
      <vxe-colgroup title="端电极长度规格" field="endElectrode" header-align="center">
        <vxe-column field="size" title="产品尺寸" width="100"></vxe-column>
        <vxe-column field="range" title="规格范围" width="100"></vxe-column>
      </vxe-colgroup>
    </vxe-table>
    <vxe-table
      :data="tableData5"
      border
      size="mini"
      :cell-config="{ height: 25 }"
      class="custom-header-table"
      :style="{
        '--vxe-ui-table-border-color': '#000',
      }"
    >
      <vxe-colgroup title="|L2-L3|规格" field="endElectrode" header-align="center">
        <vxe-column field="size" title="产品尺寸" width="100"></vxe-column>
        <vxe-column field="range" title="规格范围" width="100"></vxe-column>
      </vxe-colgroup>
    </vxe-table>
    <vxe-table
      :data="tableData3"
      border
      size="mini"
      :cell-config="{ height: 25 }"
      class="custom-header-table"
      :style="{
        '--vxe-ui-table-border-color': '#000',
      }"
    >
      <vxe-colgroup title="膏深规格" field="thickOintment" header-align="center">
        <vxe-column field="size" title="产品尺寸" width="80"></vxe-column>
        <vxe-column field="range" title="数值范围" width="80"></vxe-column>
        <vxe-column field="unit" title="单位" width="80"></vxe-column>
      </vxe-colgroup>
    </vxe-table>
    <vxe-table
      :data="tableData4"
      border
      size="mini"
      :cell-config="{ height: 25 }"
      class="custom-header-table"
      :style="{
        '--vxe-ui-table-border-color': '#000',
      }"
    >
      <vxe-colgroup title="端电极长度规格" field="endElectrode" header-align="center">
        <vxe-column field="size" title="产品尺寸" width="100"></vxe-column>
        <vxe-column field="range" title="规格范围" width="100"></vxe-column>
      </vxe-colgroup>
    </vxe-table>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const tableData1 = ref([{ id: 10001 }, { id: 10002 }, { id: 10003 }, { id: 10004 }, { id: 10005 }])
const tableData2 = ref([
  { id: 20001, project: '铜膏罐编号' },
  { id: 20002, project: '开封时间' },
  { id: 20003, project: '开封后期限时间' },
  {
    id: 20004,
    project: '实际使用完时间',
  },
  { id: 20005 },
])
const tableData3 = ref([
  { id: 10001, size: 'Develop', range: 'Man', unit: 28 },
  { id: 10002, size: 'Test', range: 'Women', unit: 22 },
  { id: 10003, size: 'PM', range: 'Man', unit: 32 },
  { id: 10004, size: 'Designer', range: 'Women', unit: 24 },
  { id: 10005, size: 'Designer', range: 'Women', unit: 24 },
])
const tableData4 = ref([
  { id: 10001, size: 'Develop', range: 'Man' },
  { id: 10002, size: 'Test', range: 'Women' },
  { id: 10003, size: 'PM', range: 'Man' },
  { id: 10004, size: 'Designer', range: 'Women' },
  { id: 10005, size: 'Designer', range: 'Women' },
])
const tableData5 = ref([
  { id: 10001, size: 'Develop', range: 'Man' },
  { id: 10002, size: 'Test', range: 'Women' },
  { id: 10003, size: 'PM', range: 'Man' },
  { id: 10004, size: 'Designer', range: 'Women' },
  { id: 10005, size: 'Designer', range: 'Women' },
])
</script>

<style scoped>
.table-container {
  display: flex;
  width: 100%;
  flex-wrap: nowrap; /* 不换行 */
}
/* 全局居中 */
:deep(.vxe-table--header) .vxe-header--column,
:deep(.vxe-table--body) .vxe-body--column {
  text-align: center;
  vertical-align: middle;
}

/* 表头样式 */
:deep(.vxe-table--header-wrapper) {
  background-color: #f5f7fa;
}
:deep(.vxe-table--header-border-line) {
  border-bottom: 2px solid #e8eaec;
}

/* 合并单元格内容垂直居中 */
:deep(.vxe-cell) {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  min-height: 20px !important;
  color: #000;
}

:deep(.vxe-table--render-default.vxe-editable .vxe-body--column) {
  padding: 0px !important;
}

.custom-header-table :deep(.vxe-table--header-wrapper .vxe-header--row:first-child) {
  background-color: #e0e0e0 !important;
}

.custom-header-table
  :deep(.vxe-table--header-wrapper .vxe-header--row:first-child .vxe-header--column) {
  background-color: #e0e0e0 !important;
  color: #000 !important; /* 设置文字颜色为白色 */
}

.custom-header-table :deep(.vxe-table--header-wrapper .vxe-header--row:not(:first-child)) {
  background-color: #fff !important; /* 其他行用默认背景色 */
}

/* 重置所有高度相关样式 */
:deep(.vxe-table) {
  font-size: 8px;
  color: #000;
}

/* 关键：设置表头容器的总高度（根据表头层级计算） */
.custom-header-table :deep(.vxe-table--header-wrapper) {
  /* 多级表头总高度 = 行数 × 行高 + 边框 */
  height: auto !important; /* 改为auto自动适应 */
  min-height: 0px; /* 设置最小高度确保显示 */
  color: #000;
  background: #fff !important;
}

/* 设置每行表头的高度 */
.custom-header-table :deep(.vxe-table--header .vxe-header--row) {
  height: 27px !important; /* 每行高度 */
  line-height: 27px !important;
}

/* 表头单元格自适应高度 */
.custom-header-table :deep(.vxe-table--header .vxe-header--column) {
  height: auto !important;
}

/* 表头单元格内容居中 */
.custom-header-table :deep(.vxe-table--header .vxe-cell) {
  height: 100% !important;
  min-height: 20px !important;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 4px;
  font-size: 8px;
  line-height: 1.2;
  white-space: normal; /* 允许换行 */
  word-break: break-word;
}

/* 数据行单元格样式 */
.custom-header-table :deep(.vxe-table--body .vxe-body--column) {
  height: 20px !important;
  line-height: 15px !important;
  padding: 0 4px !important;
  font-size: 8px;
}

/* 单元格内容居中 */
:deep(.vxe-table--header) .vxe-header--column,
:deep(.vxe-table--body) .vxe-body--column {
  text-align: center;
  vertical-align: middle;
}

/* 表头背景色 */
:deep(.vxe-table--header-wrapper) {
  background-color: #fff;
  color: #000;
}

/* 表头边框 */
:deep(.vxe-table--header-border-line) {
  border-bottom: 2px solid #e8eaec;
}

/* 输入框样式 */
:deep(.vxe-cell .vxe-default-input) {
  height: 12px !important;
  line-height: 12px !important;
  padding: 0 4px;
  font-size: 8px;
}
</style>