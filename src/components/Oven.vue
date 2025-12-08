<template>
  <div>
    <vxe-table
      border
      height="530"
      size="mini"
      :virtual-y-config="{ enabled: false }"
      :span-method="rowspanMethod"
      :data="tableData"
      class="custom-header-height"
      :cell-config="{ height: 28.9 }"
      :edit-config="{ trigger: 'click', mode: 'cell', beforeEditMethod: activeEditMethod }"
      :style="{
        '--vxe-ui-table-border-color': '#000'
      }"
    >
      <vxe-colgroup title="">
        <template #header>
          <div style="text-align: center">
            <div>烘焙炉</div>
            <div style="font-size: 8px">(一次/6小时/每班)</div>
          </div>
        </template>
        <vxe-column field="name1" title="" width="60">
          <template #default="{ row }">
            <div v-if="row.paramKey">{{ row.paramName }}</div>
            <div v-else>{{ row.name1 }}</div>
          </template>
        </vxe-column>

        <vxe-colgroup title="频率">
          <template #header>
            <div style="text-align: center">
              <div>频率</div>
              <div style="font-size: 8px">Frequency</div>
            </div>
          </template>
          <vxe-column
            field="freq1"
            title="F1"
            width="70"
            header-class-name="no-sub-header"
            :edit-render="{ name: 'input' }"
          >
            <template #default="{ row }">
              <div v-if="row.paramKey"></div>
              <div v-else v-html="formatName(row.freq1)"></div>
            </template>
          </vxe-column>
          <vxe-column field="freq2" title="F2" width="30" header-class-name="no-sub-header">
            <template #default="{ row }">
              <div v-if="row.paramKey"></div>
              <div v-else v-html="formatName(row.freq2)"></div>
            </template>
          </vxe-column>
        </vxe-colgroup>

        <!-- 设定值列：按区域合并2行 -->
        <vxe-colgroup title="设定值">
          <template #header>
            <div style="text-align: center">
              <div>设定值</div>
              <div style="font-size: 8px">SV (℃)</div>
            </div>
          </template>
          <vxe-column
            field="svMin"
            title="Min"
            width="201"
            header-class-name="no-sub-header"
            :edit-render="{ name: 'input' }"
          >
            <template #default="{ row }">
              <div
                v-if="
                  row.paramKey &&
                  (row.paramKey === 'airPressure' || row.paramKey === 'pressMachine')
                "
              >
                {{ row.svMin }}
              </div>

              <div v-else-if="row.paramKey && row.paramKey === 'chillerTemp'">
                {{ row.svMin }}
              </div>

              <div v-else-if="row.paramKey && row.paramKey === 'beltSpeed'">
                {{ row.svMin }}
              </div>

              <!-- 通常行不编辑-->
              <div v-else>
                {{ row.svMin }}
              </div>
            </template>
          </vxe-column>
          <vxe-column
            field="svMax"
            title="Max"
            width="90"
            header-class-name="no-sub-header"
            :edit-render="{ name: 'input' }"
          >
            <template #default="{ row }">
              <div
                v-if="
                  row.paramKey &&
                  (row.paramKey === 'airPressure' || row.paramKey === 'pressMachine')
                "
              ></div>

              <div v-else-if="row.paramKey && row.paramKey === 'chillerTemp'">
                {{ row.svMax }}
              </div>

              <!-- 通常行 -->
              <div v-else>
                {{ row.svMax }}
              </div>
            </template>
          </vxe-column>
        </vxe-colgroup>

        <vxe-column field="name4" title="实际值" width="110" :edit-render="{ name: 'input' }">
          <template #header>
            <div style="text-align: center">
              <div>实际值</div>
              <div style="font-size: 8px">PV (℃)</div>
            </div>
          </template>
          <template #default="{ row }">
            <!-- 气枪/压平机类型：name4 被合并，留空 -->
            <div
              v-if="
                row.paramKey && (row.paramKey === 'airPressure' || row.paramKey === 'pressMachine')
              "
            ></div>

            <div v-else-if="row.paramKey && row.paramKey === 'chillerTemp'"></div>

            <!-- 其他（包含钢带速度） -->
            <div v-else>
              {{ row.name4 }}
            </div>
          </template>
        </vxe-column>
      </vxe-colgroup>
    </vxe-table>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import XEUtils from 'xe-utils'
const tableData = ref([])

// 定义层级数据
const topGroupName = '温度控制器'
const subGroupList = [
  {
    key: '1st',
    name: '1st\n（ ）',
    freq1: '1st\n（ ）',
  },
  {
    key: '2nd',
    name: '2nd\n（ ）',
    freq1: '2nd\n（ ）',
  },
]
const areaList = ['第一区', '第二区', '第三区'] // 区域（每2行合并）

// 生成表格数据（温度控制器→1st/2nd→区域，共12行） + 追加 8 行
const generateTableData = () => {
  const list = []
  let globalIndex = 0

  // 遍历1st/2nd子分组（各6行）
  subGroupList.forEach((subGroup) => {
    // 每个子分组6行数据
    const subGroupData = [
      { name2: '查看', name3: '用户列表', name4: '' },
      { name2: '查看', name3: '用户列表', name4: '' },
      { name2: '编辑', name3: '用户列表', name4: '' },
      { name2: '编辑', name3: '用户列表', name4: '' },
      { name2: '操作', name3: '新增', name4: '' },
      { name2: '操作', name3: '删除', name4: '' },
    ]

    // 为每行添加层级标识和数据
    subGroupData.forEach((item, index) => {
      const area = areaList[Math.floor(index / 2)] // 每2行对应一个区域
      list.push({
        name1: topGroupName, // 顶级：温度控制器
        name2_sub: subGroup.name, // 二级：1st/2nd
        name2: item.name2,
        name3: item.name3,
        name4: item.name4,
        freq1: subGroup.freq1, // F1列：按1st/2nd显示
        freq2: area, // F2列：按区域显示
        svMin: (index % 2) + 1,
        svMax: '',
        topKey: topGroupName, // 顶级标识
        subKey: subGroup.key, // 二级标识（1st/2nd）
        areaKey: area, // 区域标识
        _rowIndex: globalIndex++, // 全局行索引
        // 无 paramKey（不是额外项目）
      })
    })
  })

  // ---------- 在原有 12 行之后直接追加 8 行（每个项目 2 行） ----------
  const extraRows = [
    // 钢带速度（2 行）
    // 钢带速度（2行）
    {
      paramKey: 'beltSpeed',
      paramName: '钢带速度',
      name1: '',
      freq1: '',
      freq2: '',
      svMin: '显示值1：', // 第一行 svMin
      svMax: '显示值2：', // svMax 与 name4 合并
      name4: '',
    },
    {
      paramKey: 'beltSpeed',
      paramName: '钢带速度',
      name1: '',
      freq1: '',
      freq2: '',
      svMin: '',
      svMax: '',
      name4: '',
    },

    // 气枪压力（2 行）
    {
      paramKey: 'airPressure',
      paramName: '气枪压力',
      name1: '',
      freq1: '',
      freq2: '',
      svMin: '实际值：', // svMin 将合并 svMax + name4，并显示此内容（第一行）
      svMax: '',
      name4: '',
    },
    {
      paramKey: 'airPressure',
      paramName: '气枪压力',
      name1: '',
      freq1: '',
      freq2: '',
      svMin: '', // 第二行空白
      svMax: '',
      name4: '',
    },

    // 压平机压力（2 行）
    {
      paramKey: 'pressMachine',
      paramName: '压平机压力',
      name1: '',
      freq1: '',
      freq2: '',
      svMin: '实际值：',
      svMax: '',
      name4: '',
    },
    {
      paramKey: 'pressMachine',
      paramName: '压平机压力',
      name1: '',
      freq1: '',
      freq2: '',
      svMin: '',
      svMax: '',
      name4: '',
    },

    // 冰水机温度（2 行）
    {
      paramKey: 'chillerTemp',
      paramName: '冰水机温度',
      name1: '',
      freq1: '',
      freq2: '',
      svMin: '1：', // 第一行 svMin = 1
      svMax: '2：', // svMax 将与 name4 合并显示 2（第一行）
      name4: '',
    },
    {
      paramKey: 'chillerTemp',
      paramName: '冰水机温度',
      name1: '',
      freq1: '',
      freq2: '',
      svMin: '',
      svMax: '',
      name4: '',
    },
  ]

  extraRows.forEach((item) => {
    list.push({
      ...item,
      topKey: null,
      subKey: null,
      areaKey: null,
      _rowIndex: globalIndex++,
    })
  })

  return list
}

const activeEditMethod = ({ row, column }) => {
  if (column.field === 'svMin') {
    return !!row.paramKey
  }
  return true
}

// 核心：三层合并方法（温度控制器→1st/2nd→区域） + 额外行的横向合并与设定值/实际值合并
const rowspanMethod = ({ row, _rowIndex, column, visibleData }) => {
  const field = column.field

  // 1. 顶级：温度控制器（合并12行）
  if (field === 'name1' && row.topKey) {
    const sameTopGroup = visibleData.filter((item) => item.topKey === row.topKey)
    if (sameTopGroup.length > 0 && sameTopGroup[0]._rowIndex === _rowIndex) {
      return { rowspan: 12, colspan: 1 } // 合并12行
    } else if (sameTopGroup.some((item) => item._rowIndex === _rowIndex)) {
      return { rowspan: 0, colspan: 0 } // 隐藏重复行
    }
  }

  // 2. 二级：1st/2nd（各合并6行）
  if (field === 'name2_sub' && row.subKey) {
    const sameSubGroup = visibleData.filter((item) => item.subKey === row.subKey)
    if (sameSubGroup.length > 0 && sameSubGroup[0]._rowIndex === _rowIndex) {
      return { rowspan: 6, colspan: 1 } // 合并6行
    } else if (sameSubGroup.some((item) => item._rowIndex === _rowIndex)) {
      return { rowspan: 0, colspan: 0 } // 隐藏重复行
    }
  }

  // 3. F1列：按1st/2nd合并6行（和name2_sub同步）
  if (field === 'freq1' && row.subKey) {
    const sameSubGroup = visibleData.filter((item) => item.subKey === row.subKey)
    if (sameSubGroup.length > 0 && sameSubGroup[0]._rowIndex === _rowIndex) {
      return { rowspan: 6, colspan: 1 }
    } else if (sameSubGroup.some((item) => item._rowIndex === _rowIndex)) {
      return { rowspan: 0, colspan: 0 }
    }
  }

  // 4. F2列：按区域（同子分组+同区域）合并2行
  if (field === 'freq2' && row.subKey) {
    const sameArea = visibleData.filter(
      (item) => item.subKey === row.subKey && item.areaKey === row.areaKey
    )
    if (sameArea.length > 0 && sameArea[0]._rowIndex === _rowIndex) {
      return { rowspan: 2, colspan: 1 }
    } else if (sameArea.some((item) => item._rowIndex === _rowIndex)) {
      return { rowspan: 0, colspan: 0 }
    }
  }

  // ---------- 额外 8 行的合并显示规则 ----------

  // A. 如果是额外项目（paramKey 存在），先处理 name1 / freq1 / freq2 三列横向合并成一格显示 paramName
  if (row.paramKey) {
    // 对应三列（name1、freq1、freq2），我们在 name1 上做 colspan=3 的横向合并，仅在该 param 的第一行显示
    if (['name1', 'freq1', 'freq2'].includes(field)) {
      // visibleData 中找到此 paramKey 所有行（通常为 2 行）
      const sameParamRows = visibleData.filter((item) => item.paramKey === row.paramKey)
      if (sameParamRows.length > 0 && sameParamRows[0]._rowIndex === _rowIndex) {
        // 第一行：在 name1 上合并三列（name1 + freq1 + freq2）
        if (field === 'name1') {
          return { rowspan: 1, colspan: 3 }
        }
        // freq1、freq2 在第一次行由 colspan 覆盖，其他同 param 的相应列设为隐藏
        return { rowspan: 0, colspan: 0 }
      } else if (sameParamRows.some((item) => item._rowIndex === _rowIndex)) {
        // 第二行：所有这三列都隐藏（因为被第一行 colspan 吞掉）
        return { rowspan: 0, colspan: 0 }
      }
    }

    // B. 钢带速度：不合并设定/实际列，保持各自显示（svMin = 显示值，svMax = 1/2，name4 空）

    // C. 气枪压力 / 压平机压力：把 svMin、svMax、name4 三列合并成一列（显示在 svMin 单元格）
    if (row.paramKey === 'airPressure' || row.paramKey === 'pressMachine') {
      // 找到同 param 的两行
      const sameParamRows = visibleData.filter((item) => item.paramKey === row.paramKey)
      if (sameParamRows.length > 0 && sameParamRows[0]._rowIndex === _rowIndex) {
        // 第一行：让 svMin colspan=3（吞并 svMax & name4），显示 svMin 的内容（如 "实际值"）
        if (field === 'svMin') {
          return { rowspan: 1, colspan: 3 }
        }
        // 第一行的 svMax/name4 被 colspan 吞，返回隐藏
        if (field === 'svMax' || field === 'name4') {
          return { rowspan: 0, colspan: 0 }
        }
      } else if (sameParamRows.some((item) => item._rowIndex === _rowIndex)) {
        // 第二行的三列都隐藏（因为被第一行 colspan 吞）
        if (['svMin', 'svMax', 'name4'].includes(field)) {
          return { rowspan: 0, colspan: 0 }
        }
      }
    }

    // D. 冰水机温度：
    //    第一行：svMin 单独显示(1)，svMax 与 name4 合并为一格（colspan=2）显示 svMax 的值（2）
    //    第二行：所有这些列为空/隐藏
    if (row.paramKey === 'chillerTemp') {
      const sameParamRows = visibleData.filter((item) => item.paramKey === 'chillerTemp')
      if (sameParamRows.length > 0 && sameParamRows[0]._rowIndex === _rowIndex) {
        // 第一行
        if (field === 'svMin') {
          return { rowspan: 1, colspan: 1 } // svMin 显示 1
        }
        if (field === 'svMax') {
          return { rowspan: 1, colspan: 2 } // svMax 吞并 name4，显示 2
        }
        if (field === 'name4') {
          return { rowspan: 0, colspan: 0 } // name4 被吞
        }
      } else if (sameParamRows.some((item) => item._rowIndex === _rowIndex)) {
        // 第二行：这三列都隐藏（第二行空白）
        if (['svMin', 'svMax', 'name4'].includes(field)) {
          return { rowspan: 0, colspan: 0 }
        }
      }
    }
    if (row.paramKey === 'beltSpeed' || row.paramKey === 'chillerTemp') {
      const sameParamRows = visibleData.filter((item) => item.paramKey === row.paramKey)
      if (sameParamRows.length > 0 && sameParamRows[0]._rowIndex === _rowIndex) {
        // 第一行
        if (field === 'svMin') return { rowspan: 1, colspan: 1 } // svMin显示值
        if (field === 'svMax') return { rowspan: 1, colspan: 2 } // svMax 与 name4 合并显示
        if (field === 'name4') return { rowspan: 0, colspan: 0 } // name4 被吞
      } else if (sameParamRows.some((item) => item._rowIndex === _rowIndex)) {
        // 第二行隐藏
        if (['svMin', 'svMax', 'name4'].includes(field)) return { rowspan: 0, colspan: 0 }
      }
    }
  }

  // 其他列默认不合并
  return { rowspan: 1, colspan: 1 }
}

const formatName = (name) => {
  if (!name) return ''
  return name.replace(/\n/g, '<br>').replace(/&nbsp;/g, ' ')
}

// 初始化表格数据
const initTableData = () => {
  tableData.value = generateTableData()
}

// 初始化
initTableData()
</script>

<style scoped>
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

/* 全局居中 */
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
  line-height: 1.26;
  padding: 4px 0;
}

/* 隐藏分组下的子列表头文字 */
:deep(.vxe-table--header .no-sub-header) {
  display: none;
}

/* 父级表头垂直居中 */
:deep(.vxe-table--header .vxe-header--column .vxe-cell) {
  /* line-height: 40px; */
  height: 57px;
}
</style>