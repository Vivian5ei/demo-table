<template>
  <div class="table-container">
    <vxe-table :data="tableData1" border>
      <vxe-colgroup
        title="维修记录（填写RM系统不能登修之项目）"
        field="maintenanceRecord"
        header-align="center"
      >
        <vxe-column type="seq" width="70"></vxe-column>
        <vxe-column field="error" title="机台故障现象" width="200"></vxe-column>
        <vxe-column field="repairTime" title="报修时间： H:M" width="150"></vxe-column>
        <vxe-column field="repairPerson" title="报修人员" width="100"></vxe-column>
        <vxe-column field="maintenanceTime" title="维修时间： H:M" width="150"></vxe-column>
        <vxe-column field="sign" title="维修R+M签名" width="110"></vxe-column>
      </vxe-colgroup>
    </vxe-table>
    <vxe-table :data="tableData2" border>
      <vxe-colgroup title="铜膏使用记录" field="thermalPaste" header-align="center">
        <vxe-column field="project" title="项目" width="120"></vxe-column>
        <vxe-column field="sex" title="1" width="95"></vxe-column>
        <vxe-column field="age" title="2" width="95"></vxe-column>
        <vxe-column field="sex" title="3" width="95"></vxe-column>
        <vxe-column field="age" title="4" width="95"></vxe-column>
      </vxe-colgroup>
    </vxe-table>
    <vxe-table :data="tableData3" border>
      <vxe-colgroup title="膏深规格" field="thickOintment" header-align="center">
        <vxe-column field="size" title="产品尺寸" width="80"></vxe-column>
        <vxe-column field="range" title="数值范围" width="80"></vxe-column>
        <vxe-column field="unit" title="单位" width="80"></vxe-column>
      </vxe-colgroup>
    </vxe-table>
    <vxe-table :data="tableData4" border>
      <vxe-colgroup title="端电极长度规格" field="endElectrode" header-align="center">
        <vxe-column field="size" title="产品尺寸" width="100"></vxe-column>
        <vxe-column field="range" title="规格范围" width="100"></vxe-column>
      </vxe-colgroup>
    </vxe-table>
    <vxe-table :data="tableData5" border>
      <vxe-colgroup title="|L2-L3|规格" field="endElectrode" header-align="center">
        <vxe-column field="size" title="产品尺寸" width="100"></vxe-column>
        <vxe-column field="range" title="规格范围" width="100"></vxe-column>
      </vxe-colgroup>
    </vxe-table>
    <vxe-table :data="tableData3" border>
      <vxe-colgroup title="膏深规格" field="thickOintment" header-align="center">
        <vxe-column field="size" title="产品尺寸" width="80"></vxe-column>
        <vxe-column field="range" title="数值范围" width="80"></vxe-column>
        <vxe-column field="unit" title="单位" width="80"></vxe-column>
      </vxe-colgroup>
    </vxe-table>
    <vxe-table :data="tableData4" border>
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
}

/* 适配换行文本的行高 */
:deep(.vxe-table--body .vxe-cell div) {
  line-height: 1.4;
  /* padding: 4px 0; */
}

/* 父级表头垂直居中 */
:deep(.vxe-table--header .vxe-header--column .vxe-cell) {
  /* line-height: 20px; */
}
:deep(.vxe-body--column) {
  /* padding: 1px !important; */
}
:deep(.vxe-table--header) {
}
:deep(.vxe-table--render-default.vxe-editable .vxe-body--column) {
  padding: 0px !important;
}
</style>