<template>
  <div class="home">
    <el-row :gutter="20">
      <el-col
        :xs="24"
        :sm="12"
        :md="6"
        v-for="(item, index) in items"
        :key="index"
      >
        <el-image :src="item"></el-image>
      </el-col>
      <!-- 不设置响应式，为24 -->
      <el-col :span="24">
        <!-- 为 ECharts 准备一个具备大小（宽高）的 DOM -->
        <div id="chart" style="width: 100%; height: 400px"></div>
        <div id="chart2" style="width: 100%; height: 400px"></div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  // components: {
  //   HelloWorld,
  // },
  data() {
    return {
      // 加载图片，必须用 require 导入
      items: [
        require('../assets/logo.png'),
        require('../assets/1.jpg'),
        require('../assets/logo.png'),
        require('../assets/1.jpg'),
      ],
    }
  },
  mounted() {
    // 一进来就加载
    this.init()
  },
  methods: {
    init() {
      // 基于准备好的dom，初始化echarts实例
      var myChart = this.$echarts.init(document.getElementById('chart'))

      // 指定图表的配置项和数据
      var option = {
        title: {
          text: 'ECharts 入门示例',
        },
        tooltip: {},
        legend: {
          data: ['销量'],
        },
        xAxis: {
          data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子'],
        },
        yAxis: {},
        series: [
          {
            name: '销量',
            type: 'bar',
            data: [5, 20, 36, 10, 10, 20],
          },
        ],
      }

      // 使用刚指定的配置项和数据显示图表。
      myChart.setOption(option)
    },
  },
}
</script>
