<template>
  <!-- <div id="app">
      <el-button>{{ message }}</el-button>
    </div> -->
  <div class="common-layout">
    <el-container>
      <el-header><h3>健康手环数据可视化</h3></el-header>
      <el-container>
        <el-aside width="200px">
          <!-- Aside -->
          <SideBar/>
        </el-aside>
        <el-main>
          <el-card>
            <el-container>
              <el-aside :style="{ width: '50%', background: '#ffffff' }">
                <h3>佩戴人员位置分布</h3>
                <div
                  class="main"
                  ref="myChartsDom"
                  :style="{ width: '500px', height: '500px' }"
                ></div>
              </el-aside>
              <el-aside :style="{ width: '50%', background: '#ffffff' }">
                <h3>佩戴人员年龄分布</h3>
                <div
                  class="mainAge"
                  ref="myChartsDomAge"
                  :style="{ width: '500px', height: '500px' }"
                ></div>
              </el-aside>
            </el-container>
          </el-card>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>


<script>
import * as echarts from "echarts";
import $ from "jquery";
import SideBar from "@/components/SideBar";

export default {
  data() {
    return {
      message: "Hello Element Plus",
    };
  },
  mounted() {
    //this.drawLine();
    this.drawDemo();
    this.drawAge();
  },
  components: {
    SideBar
  },
  methods: {
    // drawLine() {
    //   // 基于准备好的dom，初始化echarts实例
    //   var myChart = echarts.init(this.$refs.myChartsDom);
    //   // 绘制图表
    //   myChart.setOption({
    //     title: {
    //       text: "ECharts 入门示例",
    //     },
    //     tooltip: {},
    //     xAxis: {
    //       data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"],
    //     },
    //     yAxis: {},
    //     series: [
    //       {
    //         name: "销量",
    //         type: "bar",
    //         data: [5, 20, 36, 10, 10, 20],
    //       },
    //     ],
    //   });
    // },
    drawDemo() {
      var chartDom = this.$refs.myChartsDom;
      var myChart = echarts.init(chartDom);
      var option;

      option = {
        legend: {
          top: "bottom",
        },
        // toolbox: {
        //   show: true,
        //   feature: {
        //     mark: { show: true },
        //     dataView: { show: true, readOnly: false },
        //     restore: { show: true },
        //     saveAsImage: { show: true },
        //   },
        // },
        series: [
          {
            name: "Nightingale Chart",
            type: "pie",
            radius: [50, 180],
            center: ["50%", "50%"],
            roseType: "area",
            itemStyle: {
              borderRadius: 8,
            },
            data: [
              { value: 40, name: "兰州市" },
              { value: 38, name: "天水市" },
              { value: 32, name: "金昌市" },
              { value: 30, name: "白银市" },
              { value: 28, name: "武威市" },
              { value: 26, name: "张掖市" },
              { value: 22, name: "平凉市" },
              { value: 18, name: "酒泉市" },
            ],
          },
        ],
      };

      option && myChart.setOption(option);
    },
    drawAge() {
      var ROOT_PATH =
        "https://cdn.jsdelivr.net/gh/apache/echarts-website@asf-site/examples";

      var chartDom = this.$refs.myChartsDomAge;
      var myChart = echarts.init(chartDom);
      var option;
      $.getJSON(
        ROOT_PATH + "/data/asset/data/house-price-area2.json",
        function (data) {
          var option = {
            title: {
              // text: "Dispersion of house price based on the area",
              left: "center",
              top: 0,
            },
            visualMap: {
              min: 15202,
              max: 159980,
              dimension: 1,
              orient: "vertical",
              right: 10,
              top: "center",
              text: ["HIGH", "LOW"],
              calculable: true,
              inRange: {
                color: ["#f2c31a", "#24b7f2"],
              },
            },
            tooltip: {
              trigger: "item",
              axisPointer: {
                type: "cross",
              },
            },
            xAxis: [
              {
                type: "value",
              },
            ],
            yAxis: [
              {
                type: "value",
              },
            ],
            series: [
              {
                name: "price-area",
                type: "scatter",
                symbolSize: 5,
                data: data,
              },
            ],
          };
          myChart.setOption(option);
        }
      );

      option && myChart.setOption(option);
    },
  },
};
</script>

<style>
.el-header,
.el-footer {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  line-height: 20px;
}

.el-aside {
  background-color: #d3dce6;
  color: #333;
  text-align: center;
  line-height: 60px;
}

.el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: left;
  line-height: 60px;
}

.el-card {
  line-height: 100%;
}

body > .el-container {
  margin-bottom: 40px;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}
</style>

