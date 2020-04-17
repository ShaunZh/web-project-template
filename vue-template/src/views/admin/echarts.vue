<!--
 * @Description: 
 * @Author: Hexon
 * @Date: 2020-04-16 18:27:10
 * @LastEditors: Hexon
 * @LastEditTime: 2020-04-17 16:35:21
 -->
<template>
  <div class="page-echarts">
    <div id="echarts-bar"></div>
    <div id="echarts-pie"></div>
  </div>
</template>

<script>
import echarts from 'echarts/lib/echarts'
// 引入柱状图
import 'echarts/lib/chart/bar'
import 'echarts/lib/chart/line'
import 'echarts/lib/chart/pie'
// 引入提示框和标题组件
import 'echarts/lib/component/tooltip'
import 'echarts/lib/component/title'

import { option } from './echartsPie'

export default {
  name: 'Echarts',
  mounted() {
    this.initEchartsBar()
    this.initEchartsPie()
  },
  methods: {
    initEchartsBar() {
      // 基于准备好的dom，初始化echarts实例
      let myChart = echarts.init(document.getElementById('echarts-bar'), 'light')
      // 绘制图表
      myChart.setOption({
        title: {
          text: 'bar'
        },
        tooltip: {},
        xAxis: {
          data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
        },
        yAxis: {},
        series: [
          {
            name: '销量',
            type: 'bar',
            data: [5, 20, 36, 10, 10, 20]
          }
        ]
      })
    },
    initEchartsPie() {
      // 基于准备好的dom，初始化echarts实例
      let myChart = echarts.init(document.getElementById('echarts-pie'))
      // 绘制图表
      myChart.setOption(option)
    }
  }
}
</script>

<style lang="scss" scoped>
#echarts-bar {
  margin: 20px auto;
  width: 355px;
  height: 355px;
}
#echarts-pie {
  margin: 50px auto;
  width: 300px;
  height: 300px;
}
</style>
