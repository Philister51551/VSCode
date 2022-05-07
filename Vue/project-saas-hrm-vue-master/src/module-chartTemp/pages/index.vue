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
      const data = [["2022-03-05", 36.5], ["2022-03-06", 36.2], ["2022-03-07", 36.5], ["2022-03-08", 36.2], ["2022-03-09", 36.5], ["2022-03-10", 36.5], ["2022-03-11", 36.2], ["2022-03-12", 36.5], ["2022-03-13", 36.5], ["2022-03-14", 36.4], ["2022-03-15", 36.5], ["2022-03-16", 36.4], ["2022-03-17", 36.5], ["2022-03-18", 36.4], ["2022-03-19", 36.5], ["2022-03-20", 36.4], ["2022-03-21", 36.4], ["2022-03-22", 36.5], ["2022-03-23", 36.5], ["2022-03-24", 36.4], ["2022-03-25", 36.3], ["2022-03-26", 36.5], ["2022-03-27", 36.3], ["2022-03-28", 36.3], ["2022-03-29", 36.4], ["2022-03-30", 36.5], ["2022-04-01", 36.4], ["2022-04-02", 36.6], ["2022-04-03", 36.5], ["2022-04-04", 36.4], ["2022-04-05", 36.5], ["2022-04-06", 36.4], ["2022-04-07", 36.5], ["2022-04-08", 36.3], ["2022-04-09", 36.4], ["2022-04-10", 36.5], ["2022-04-11", 36.5], ["2022-04-12", 36.5], ["2022-04-13", 36.5], ["2022-04-14", 36.5], ["2022-04-15", 36.5], ["2022-04-16", 36.5], ["2022-04-17", 36.5], ["2022-04-18", 36.5], ["2022-04-19", 36.5], ["2022-04-20", 36.5], ["2022-04-21", 36.5], ["2022-04-22", 36.5], ["2022-04-23", 36.5], ["2022-04-24", 36.5]];
      const data1 = [["06：00", 36.1], ["06：30", 36.2], ["07:00", 36.4], ["07:30", 36.2], ["08:00", 36.5], ["08:30", 36.5], ["09:00", 36.2], ["09:30", 36.5], ["10:00", 36.5], ["10:30", 36.5], ["11:00", 36.2], ["11:30", 36.5], ["12:00", 36.2], ["12:30", 36.5], ["13:00", 36.5], ["13:30", 36.2], ["14:00", 36.5], ["14:30", 36.7], ["15:00", 36.6], ["15:30", 36.5], ["16:00", 36.7], ["16:30", 36.8], ["17:00", 36.7], ["17:30", 36.6], ["18:00", 36.8], ["18:30", 36.5],  ["19:00", 36.7], ["19:30", 36.6], ["20:00", 36.6], ["20:30", 36.5], ["21:00", 36.5], ["21:30", 36.5], ["22:00", 36.5], ["22:30", 36.5], ["23:00", 36.5], ["23:30", 36.5], ["24:00", 36.5]];
      const dateList = data.map(function (item) {
        return item[0];
      });
      const valueList = data.map(function (item) {
        return item[1];
      });
      const dateList1 = data1.map(function (item) {
        return item[0];
      });
      const valueList1 = data1.map(function (item) {
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
            text: "10016号人员2022.05.06单日体温",
          },
          {
            top: "50%",
            left: "left",
            text: "10016号人员日平均温度温度汇总",
          },
        ],
        tooltip: {
          trigger: "axis",
        },
        xAxis: [
          {
            data: dateList1,
          },
          {
            data: dateList,
            gridIndex: 1,
          },
        ],
        yAxis: [
          {
            max: 38,
            min: 35.5,
            gridIndex: 0,
          },
          {
            //type: 'value',
            max: 38,
            min: 35,
            //minInterval: 0,
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
            data: valueList1,
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
