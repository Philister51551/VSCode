<template>
  <div class="dashboard-container">
    <div class="app-container">
      <el-card shadow="never">
        <h3></h3>
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

      // prettier-ignore
      const data = [["2022-04-05", 36.5], ["2022-04-06", 129], ["2022-04-07", 135], ["2022-04-08", 86], ["2022-04-09", 73], ["2022-04-10", 85], ["2022-04-11", 73], ["2022-04-12", 68], ["2022-04-13", 92], ["2022-04-14", 130], ["2022-04-15", 245], ["2022-04-16", 139], ["2022-04-17", 115], ["2022-04-18", 111], ["2022-04-19", 309], ["2022-04-20", 206], ["2022-04-21", 137], ["2022-04-22", 128], ["2022-04-23", 85], ["2022-04-24", 94], ["2022-04-25", 71], ["2022-04-26", 106], ["2022-04-27", 84], ["2022-04-28", 93], ["2022-04-29", 85], ["2022-04-30", 73], ["2022-05-01", 83], ["2022-05-02", 125], ["2022-05-03", 107], ["2022-05-04", 82], ["2000-07-05", 44], ["2000-07-06", 72], ["2000-07-07", 106], ["2000-07-08", 107], ["2000-07-09", 66], ["2000-07-10", 91], ["2000-07-11", 92], ["2000-07-12", 113], ["2000-07-13", 107], ["2000-07-14", 131], ["2000-07-15", 111], ["2000-07-16", 64], ["2000-07-17", 69], ["2000-07-18", 88], ["2000-07-19", 77], ["2000-07-20", 83], ["2000-07-21", 111], ["2000-07-22", 57], ["2000-07-23", 55], ["2000-07-24", 60]];
      const dateList = data.map(function (item) {
        return item[0];
      });
      const valueList = data.map(function (item) {
        return item[1];
      });
      option = {
        // Make gradient line here
        visualMap: [
          {
            show: false,
            type: "continuous",
            seriesIndex: 0,
            min: 0,
            max: 400,
          },
          {
            show: false,
            type: "continuous",
            seriesIndex: 1,
            dimension: 0,
            min: 0,
            max: dateList.length - 1,
          },
        ],
        title: [
          {
            left: "left",
            text: "10016号人员单日体温",
          },
          {
            top: "50%",
            left: "left",
            text: "63号隔离点当前温度汇总",
          },
        ],
        tooltip: {
          trigger: "axis",
        },
        xAxis: [
          {
            data: dateList,
          },
          {
            data: dateList,
            gridIndex: 1,
          },
        ],
        yAxis: [
          {},
          {
            gridIndex: 1,
          },
        ],
        grid: [
          {
            bottom: "60%",
          },
          {
            top: "60%",
          },
        ],
        series: [
          {
            type: "line",
            showSymbol: false,
            data: valueList,
          },
          {
            type: "line",
            showSymbol: false,
            data: valueList,
            xAxisIndex: 1,
            yAxisIndex: 1,
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
