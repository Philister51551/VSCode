<template>
  <div class="dashboard-container">
    <div class="app-container">
      <el-card shadow="never">
        <h3>佩戴人员位置分布</h3>
        <div
          class="main"
          ref="myChartsDom"
          :style="{ width: '500px', height: '500px' }"
        ></div>
      </el-card>
    </div>
  </div>
</template>

<script>
import { list } from "@/api/example/table";
import * as echarts from "echarts";
import $ from "jquery";
export default {
  name: "saas-clients-table-index",
  data() {
    return {
      dataList: [],
    };
  },
  methods: {
    // 获取列表数据
    getList() {
      list().then((res) => {
        this.dataList = res.data.items;
        console.log(this.dataList);
      });
    },
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
  },
  // 创建完毕状态
  mounted() {    
    this.getList();
    //console.log("created方法执行");
    this.drawDemo();
  },
};
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.alert {
  margin: 10px 0px 0px 0px;
}
.pagination {
  margin-top: 10px;
  text-align: right;
}
</style>

<!-- 数据 -->
        <!-- <el-table :data="dataList"  fit highlight-current-row style="width: 100%" border>
          <el-table-column align="center" :label="$t('table.operationType')">
            <template slot-scope="scope">
              <span>{{scope.row.type}}</span>
            </template>
          </el-table-column>
          <el-table-column align="center" :label="$t('table.operator')">
            <template slot-scope="scope">
              <span>{{scope.row.author}}</span>
            </template>
          </el-table-column>
          <el-table-column :label="$t('table.results')">
            <template slot-scope="scope">
              <span>{{scope.row.title}}</span>
            </template>
          </el-table-column>
          <el-table-column align="center" :label="$t('table.operationDate')">
            <template slot-scope="scope">
              <span>{{scope.row.display_time}}</span>
            </template>
          </el-table-column>
          <el-table-column align="center" :label="$t('table.describe')">
            <template slot-scope="scope">
              <span>{{scope.row.forecast}}</span>
            </template>
          </el-table-column>
        </el-table> -->
        <!-- end -->
