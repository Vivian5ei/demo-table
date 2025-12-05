<template>
  <div>
    <vxe-table
      border
      :data="tableData"
      height="907"
      :cell-config="{ height: 25.5 }"
      :virtual-y-config="{ enabled: false }"
      :span-method="customSpanMethod"
      :edit-config="{ trigger: 'click', mode: 'cell' }"
    >
      <!-- 修复序号列：自定义序号，按逻辑行1-10显示 -->
      <vxe-column title="序号" width="50" align="center">
        <template #default="{ row }">
          {{ row.logicIndex }}
        </template>
      </vxe-column>
      <vxe-column field="orderNo" title="流程单" width="120"></vxe-column>
      <vxe-column field="type" title="产品类别" width="60"></vxe-column>
      <vxe-column field="TUNum" title="T/U数量" width="60"></vxe-column>
      <vxe-colgroup title="Jig类型" header-align="center">
        <vxe-column field="confirm" title="确认" width="70"></vxe-column>
      </vxe-colgroup>
      <vxe-colgroup title="铜膏" header-align="center">
        <vxe-column field="thermalPasteType" title="铜膏类型" width="60"></vxe-column>
        <vxe-column field="LotNo" title="Lot No." width="80"></vxe-column>
        <vxe-column field="canNum" title="罐号" width="80"></vxe-column>
      </vxe-colgroup>
      <vxe-column field="programSelection" title="程式选择" width="60"></vxe-column>
      <vxe-column field="oscFreq" title="震荡频率" width="50" :edit-render="{ name: 'input' }"></vxe-column>
      <vxe-column field="oscClean" title="震荡清机" width="50" :edit-render="{ name: 'input' }"></vxe-column>
      <vxe-column field="panelClean" title="换面面板清洁" width="50" :edit-render="{ name: 'input' }"></vxe-column>
      <vxe-colgroup title="膏深（*10μm）" header-align="center">
        <vxe-colgroup title="1st side" header-align="center">
          <vxe-column field="attr3" title="左" width="50"></vxe-column>
          <vxe-column field="attr4" title="中" width="50"></vxe-column>
          <vxe-column field="attr7" title="右" width="50"></vxe-column>
        </vxe-colgroup>
        <vxe-colgroup title="2nd side" header-align="center">
          <vxe-column field="attr5" title="左" width="50"></vxe-column>
          <vxe-column field="attr6" title="中" width="50"></vxe-column>
          <vxe-column field="attr8" title="右" width="50"></vxe-column>
        </vxe-colgroup>
      </vxe-colgroup>
      <vxe-colgroup title="首件（㎜）" header-align="center">
        <vxe-column field="electrodeLen" title="端电极长度" width="70"></vxe-column>
        <vxe-column field="leftTop" title="左上" width="80"></vxe-column>
        <vxe-column field="leftBottom" title="左下" width="80"></vxe-column>
        <vxe-column field="middle" title="中间" width="80"></vxe-column>
        <vxe-column field="rightTop" title="右上" width="80"></vxe-column>
        <vxe-column field="rightBottom" title="右下" width="80"></vxe-column>
      </vxe-colgroup>
      <vxe-colgroup title="浸镀前目检" header-align="center">
        <vxe-column field="pasteTypeCheck" title="表缺" width="100" :edit-render="{ name: 'input' }"></vxe-column>
        <vxe-column field="lotNoCheck" title="Others" width="80" :edit-render="{ name: 'input' }"></vxe-column>
      </vxe-colgroup>
      <vxe-column field="remark" title="备注" width="80" :edit-render="{ name: 'input' }"></vxe-column>
      <vxe-column field="tearClean" title="撕料清机" width="80" :edit-render="{ name: 'input' }"></vxe-column>
    </vxe-table>
  </div>
</template>

<script setup>
import { ref } from 'vue'

// 生成30行数据（对应10个逻辑行，每3行1组），并添加逻辑序号（1-10）
const tableData = ref(
  Array.from({ length: 30 }, (_, index) => {
    const logicIndex = Math.floor(index / 3) + 1 // 每3行1个逻辑序号（1-10）
    return {
      id: 10001 + index,
      logicIndex, // 新增：逻辑序号（用于显示）
      orderNo: `Test${logicIndex}`, // 流程单按逻辑序号显示（可选）
      type: '1',
      TUNum: index % 3 === 0 ? [10, 15, 12, 8, 14, 11, 9, 7, 6, 5][logicIndex - 1] : '',
      confirm: index % 3 === 0 ? '2' : '',
      thermalPasteType: index % 2 === 0 ? '1' : '2',
      LotNo: [
        46, 28, 35, 26, 31, 29, 42, 27, 33, 30, 38, 25, 40, 24, 32, 37, 45, 23, 34, 36, 39, 22, 43,
        21, 35, 41, 44, 20, 36, 47,
      ][index],
      canNum: index % 3 === 0 ? `4-${10 + logicIndex}` : `4-${10 + logicIndex}`,
      programSelection: '',
      oscFreq: '',
      oscClean: '',
      panelClean: '',
      attr3: [
        22, 18, 25, 19, 21, 23, 27, 17, 24, 20, 26, 16, 28, 15, 22, 29, 30, 14, 23, 31, 32, 13, 33,
        12, 24, 34, 35, 11, 36, 37,
      ][index],
      attr4: [
        100, 88, 92, 85, 89, 95, 98, 82, 91, 87, 96, 81, 99, 79, 90, 97, 100, 77, 93, 94, 86, 76,
        84, 74, 83, 82, 80, 72, 78, 75,
      ][index],
      attr5: [
        66, 72, 68, 74, 70, 65, 71, 76, 69, 73, 67, 78, 64, 80, 75, 62, 63, 82, 77, 61, 79, 83, 81,
        84, 85, 86, 87, 88, 89, 90,
      ][index],
      attr6: [
        86, 94, 79, 91, 87, 82, 88, 93, 85, 90, 84, 92, 83, 95, 89, 81, 78, 96, 91, 77, 98, 97, 99,
        100, 93, 95, 94, 92, 90, 88,
      ][index],
      attr7: [
        66, 72, 68, 74, 70, 65, 71, 76, 69, 73, 67, 78, 64, 80, 75, 62, 63, 82, 77, 61, 79, 83, 81,
        84, 85, 86, 87, 88, 89, 90,
      ][index],
      attr8: [
        86, 94, 79, 91, 87, 82, 88, 93, 85, 90, 84, 92, 83, 95, 89, 81, 78, 96, 91, 77, 98, 97, 99,
        100, 93, 95, 94, 92, 90, 88,
      ][index],
      electrodeLen: index % 3 === 0 ? 'L2' : index % 3 === 1 ? 'L3' : '|L2-L3|',
      leftTop: '',
      leftBottom: '',
      middle: '',
      rightTop: '',
      rightBottom: '',
      pasteTypeCheck: '',
      lotNoCheck: '',
      remark: '',
      tearClean: '',
    }
  })
)

// 核心：自定义合并方法（同步序号列合并规则）
const customSpanMethod = ({ row, _rowIndex, column, visibleData }) => {
  const field = column.field
  const rowIndex = _rowIndex

  // 1. 序号列：每3行合并为1行（与通用列保持一致）
  if (column.title === '序号') {
    const groupIndex = Math.floor(rowIndex / 3)
    const innerIndex = rowIndex % 3
    if (innerIndex === 0) {
      return { rowspan: 3, colspan: 1 } // 第0行合并3行
    } else {
      return { rowspan: 0, colspan: 0 } // 第1/2行隐藏
    }
  }

  // 2. 首件列：不合并
  const firstArticleFields = [
    'electrodeLen',
    'leftTop',
    'leftBottom',
    'middle',
    'rightTop',
    'rightBottom',
  ]
  if (firstArticleFields.includes(field)) {
    return { rowspan: 1, colspan: 1 }
  }

  // 3. 特殊列：LotNo/罐号/程式选择（每3行合并为2行）
  const specialFields = ['LotNo', 'canNum', 'programSelection']
  if (specialFields.includes(field)) {
    const groupIndex = Math.floor(rowIndex / 3)
    const innerIndex = rowIndex % 3
    if (innerIndex === 0) {
      return { rowspan: 2, colspan: 1 } // 第0行合并2行
    } else if (innerIndex === 1) {
      return { rowspan: 0, colspan: 0 } // 第1行隐藏
    } else {
      return { rowspan: 1, colspan: 1 } // 第2行单独显示
    }
  }

  // 4. 通用列：每3行合并为1行
  const groupIndex = Math.floor(rowIndex / 3)
  const innerIndex = rowIndex % 3
  if (innerIndex === 0) {
    return { rowspan: 3, colspan: 1 }
  } else {
    return { rowspan: 0, colspan: 0 }
  }
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
