<template>
  <div>
    <vxe-table
      border
      :column-config="columnConfig"
      :data="tableData"
      :merge-cells="mergeCells"
      :show-header="false"
    >
      <vxe-colgroup title="清机记录" field="group1" header-align="center">
        <vxe-column field="record" title="清机记录"></vxe-column>
        <vxe-column field="title" title="标题"></vxe-column>
        <vxe-column field="times11" title="次数1-1"></vxe-column>
        <vxe-column field="times12" title="次数1-2"></vxe-column>
        <vxe-column field="times21" title="次数2-1"></vxe-column>
        <vxe-column field="times22" title="次数2-2"></vxe-column>
        <vxe-column field="uptimeLoss" title="UptimeLoss"></vxe-column>
        <vxe-column field="code1" title="代码1"></vxe-column>
        <vxe-column field="unit1" title="%1"></vxe-column>
        <vxe-column field="code2" title="代码2"></vxe-column>
        <vxe-column field="unit2" title="%2"></vxe-column>
        <vxe-column field="code3" title="代码3"></vxe-column>
        <vxe-column field="unit3" title="%3"></vxe-column>
        <vxe-column field="sign" title="交接班记录填写"></vxe-column>
        <vxe-column field="time" title="实际时间"></vxe-column>
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
    uptimeLoss: 'Uptime Loss记录：___________________',
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
  { row: 0, col: 14, rowspan: 2, colspan: 1},
  { row: 2, col: 13, rowspan: 2, colspan: 2 },
])
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