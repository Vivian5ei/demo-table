<template>
  <div>
    <vxe-table
      border
      :column-config="columnConfig"
      :data="tableData"
      :merge-cells="mergeCells"
      :show-header="false"
      :cell-config="{ height: 20 }"
      class="custom-header-height"
      :cell-style="cellStyle"
      :edit-config="{ trigger: 'click', mode: 'cell', beforeEditMethod: activeEditMethod }"
      :style="{
        '--vxe-ui-table-border-color': '#000'
      }"
    >
      <vxe-colgroup title="清机记录" field="group1" header-align="center">
        <vxe-column field="record" title="清机记录" width="30"></vxe-column>
        <vxe-column field="title" title="标题" width="120"></vxe-column>
        <vxe-column
          field="times11"
          title="次数1-1"
          width="120"
          :edit-render="{ name: 'input' }"
        ></vxe-column>
        <vxe-column
          field="times12"
          title="次数1-2"
          width="120"
          :edit-render="{ name: 'input' }"
        ></vxe-column>
        <vxe-column
          field="times21"
          title="次数2-1"
          width="120"
          :edit-render="{ name: 'input' }"
        ></vxe-column>
        <vxe-column
          field="times22"
          title="次数2-2"
          width="120"
          :edit-render="{ name: 'input' }"
        ></vxe-column>
        <vxe-column
          field="uptimeLoss"
          title="UptimeLoss"
          width="120"
          :edit-render="{ name: 'input' }"
        ></vxe-column>
        <vxe-column
          field="code1"
          title="代码1"
          width="120"
          :edit-render="{ name: 'input' }"
        ></vxe-column>
        <vxe-column
          field="unit1"
          title="%1"
          width="120"
          :edit-render="{ name: 'input' }"
        ></vxe-column>
        <vxe-column
          field="code2"
          title="代码2"
          width="120"
          :edit-render="{ name: 'input' }"
        ></vxe-column>
        <vxe-column
          field="unit2"
          title="%2"
          width="120"
          :edit-render="{ name: 'input' }"
        ></vxe-column>
        <vxe-column
          field="code3"
          title="代码3"
          width="300"
          :edit-render="{ name: 'input' }"
        ></vxe-column>
        <vxe-column
          field="unit3"
          title="%3"
          width="134"
          :edit-render="{ name: 'input' }"
        ></vxe-column>
        <vxe-column
          field="sign"
          title="交接班记录填写"
          width="120"
          :edit-render="{ name: 'input' }"
        ></vxe-column>
        <vxe-column
          field="time"
          title="实际时间"
          width="124"
          :edit-render="{ name: 'input' }"
        ></vxe-column>
      </vxe-colgroup>
    </vxe-table>
  </div>
</template>

<script setup>
import { ref } from 'vue'
const tableData = ref([
  {
    id: 10001,
    name: 'Test1',
    role: 'Develop',
    record: '清机记录',
    title: '清机次数-机台',
    times11: '第1次-第1面',
    times12: '第1次-第2面',
    times21: '第2次-第1面',
    times22: '第2次-第2面',
    uptimeLoss: 'Uptime Loss记录：________________________',
    sex: 'Man',
    sign: '交接班记录填写',
    age: 46,
    attr3: 22,
    attr4: 100,
    attr5: 66,
    attr6: 86,
    address: 'Guangzhou',
  },
  {
    id: 10002,
    name: 'Test2',
    role: 'Test',
    sex: 'Women',
    title: '清机时间',
    code1: '代码',
    unit1: '%',
    code2: '代码',
    unit2: '%',
    code3: '代码',
    unit3: '%',
    age: 0,
    attr3: 0,
    attr4: 0,
    attr5: 0,
    attr6: 0,
    address: '',
  },
  {
    id: 10003,
    name: 'Test3',
    role: 'PM',
    sex: 'Man',
    title: '清机薪号',
    age: 0,
    attr3: 22,
    attr4: 0,
    attr5: 0,
    attr6: 0,
    address: '',
    sign: 'Actual Uptime： ____________%',
  },
  {
    id: 10004,
    name: 'Test4',
    role: 'Designer',
    sex: 'Women',
    title: '刮刀锁紧确认',
    age: 0,
    attr3: 0,
    attr4: 0,
    attr5: 0,
    attr6: 0,
    address: '',
  },
])
const columnConfig = ref({
  resizable: true,
})
const mergeCells = ref([
  { row: 0, col: 0, rowspan: 4, colspan: 1 },
  { row: 0, col: 6, rowspan: 1, colspan: 2 },
  { row: 0, col: 6, rowspan: 1, colspan: 6 },
  { row: 0, col: 13, rowspan: 2, colspan: 1 },
  { row: 0, col: 14, rowspan: 2, colspan: 1 },
  { row: 2, col: 13, rowspan: 2, colspan: 2 },
])
const cellStyle = ({ row, column }) => {
  if (column.field === 'record') {
    if (row.sex >= '1') {
      return {
        backgroundColor: '#e0e0e0',
      }
    } else {
      return {
        backgroundColor: '#fff',
      }
    }
  }
}
const activeEditMethod = ({ row, column }) => {
  console.log('beforeEditMethod', row, column)
  if (row.id === 10001 && column.field === 'sign' && column.field !== 'time') {
    return false
  }

  if (
    row.id === 10002 &&
    (column.field === 'code1' ||
      column.field === 'unit1' ||
      column.field === 'code2' ||
      column.field === 'unit2' ||
      column.field === 'code3' ||
      column.field === 'unit3')
  ) {
    return false
  }
  return true
}
</script>

<style scoped>
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
  color: #000;
}

/* 适配换行文本的行高 */
:deep(.vxe-table--body .vxe-cell div) {
  line-height: 1.4;
}

:deep(.vxe-table--render-default.vxe-editable .vxe-body--column) {
  padding: 0px !important;
}
/* 重置所有高度相关样式 */
:deep(.vxe-table) {
  font-size: 8px;
  color: #000;
}

/* 关键：设置表头容器的总高度（根据表头层级计算） */
.custom-header-height :deep(.vxe-table--header-wrapper) {
  /* 多级表头总高度 = 行数 × 行高 + 边框 */
  height: auto !important; /* 改为auto自动适应 */
  min-height: 40px; /* 设置最小高度确保显示 */
  color: #000;
  background: #fff !important;
}

/* 设置每行表头的高度 */
.custom-header-height :deep(.vxe-table--header .vxe-header--row) {
  height: 20px !important; /* 每行高度 */
  line-height: 20px !important;
}

/* 表头单元格自适应高度 */
.custom-header-height :deep(.vxe-table--header .vxe-header--column) {
  height: auto !important;
}

/* 表头单元格内容居中 */
.custom-header-height :deep(.vxe-table--header .vxe-cell) {
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
.custom-header-height :deep(.vxe-table--body .vxe-body--column) {
  height: 15px !important;
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

/* 输入框样式 */
:deep(.vxe-cell .vxe-default-input) {
  height: 12px !important;
  line-height: 12px !important;
  padding: 0 4px;
  font-size: 8px;
}
</style>