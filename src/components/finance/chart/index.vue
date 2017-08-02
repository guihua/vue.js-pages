<template>
  <div class="row chart">
    <div class="container">
      <ve-ring :data="ringData" :settings="ringSettings" width="400px"></ve-ring>
      <ve-histogram :data="histogramData" :settings="histogramSettings" width="824px"></ve-histogram>
    </div>
    <a href="" class="finance-button">立即分析</a>
  </div>
</template>

<script>
  const ringData = {
    columns: ['日期', '销售额-1季度', '销售额-2季度', '占比', '其他'],
    rows: [
      { '日期': '1月1日', '销售额-1季度': 1523, '销售额-2季度': 1523, '占比': 0.12, '其他': 100 },
      { '日期': '1月2日', '销售额-1季度': 1223, '销售额-2季度': 1523, '占比': 0.345, '其他': 100 },
      { '日期': '1月3日', '销售额-1季度': 2123, '销售额-2季度': 1523, '占比': 0.7, '其他': 100 },
      { '日期': '1月4日', '销售额-1季度': 4123, '销售额-2季度': 1523, '占比': 0.31, '其他': 100 },
      { '日期': '1月5日', '销售额-1季度': 3123, '销售额-2季度': 1523, '占比': 0.12, '其他': 100 },
      { '日期': '1月6日', '销售额-1季度': 7123, '销售额-2季度': 1523, '占比': 0.65, '其他': 100 }
    ]
  }

  const ringSettings = {
    dimension: '日期',
    metrics: '销售额-1季度',
    dataType: 'KMB',
    selectedMode: 'single',
    hoverAnimation: false,
    radius: [100, 80],
    offsetY: 200
  }

  const histogramData = {
    columns: ['日期', '销售额-1季度', '销售额-2季度', '占比', '其他'],
    rows: [
      { '日期': '1月1日', '销售额-1季度': 1523, '销售额-2季度': 1523, '占比': 0.12, '其他': 100 },
      { '日期': '1月2日', '销售额-1季度': 1223, '销售额-2季度': 1523, '占比': 0.345, '其他': 100 },
      { '日期': '1月3日', '销售额-1季度': 2123, '销售额-2季度': 1523, '占比': 0.7, '其他': 100 },
      { '日期': '1月4日', '销售额-1季度': 4123, '销售额-2季度': 1523, '占比': 0.31, '其他': 100 },
      { '日期': '1月5日', '销售额-1季度': 3123, '销售额-2季度': 1523, '占比': 0.12, '其他': 100 },
      { '日期': '1月6日', '销售额-1季度': 7123, '销售额-2季度': 1523, '占比': 0.65, '其他': 100 }
    ]
  }

  const histogramSettings = {
    dimension: ['日期'],
    metrics: ['销售额-1季度', '销售额-2季度', '占比'],
    axisSite: {
      right: ['占比']
    },
    yAxisType: ['KMB', 'percent'],
    yAxisName: ['销售额', '占比'],
    area: true,
    stack: {
      '销售额': ['销售额-1季度', '销售额-2季度']
    }
  }

  export default {
    data () {
      return {
        ringData: ringData,
        ringSettings: ringSettings,
        histogramData: histogramData,
        histogramSettings: histogramSettings
      }
    }
  }
</script>

<style lang="scss" scoped>
  .container {
    display: flex;
  }
  .finance-button {
    display: inline-block;
    width: 300px;
    height: 60px;
    line-height: 60px;
    background-color: #ec027d;
    border: 0;
    border-radius: 3px;
    text-align: center;
    color: #fff;
    font-size: 20px;
    text-decoration: none;
    cursor: pointer;
  }
</style>
