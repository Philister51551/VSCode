<template>
  <div class="dashboard-container">
    <div class="app-container">
      <el-card shadow="never">
        <h3>10016号人员心率：</h3>
        <h3><p style="color:green;">{"095"}</p></h3>
        <img :src="demoImg" />
      </el-card>
    </div>
  </div>
</template>

<script>
import { list } from "@/api/example/table";
import * as echarts from "echarts";
import $ from "jquery";
import testImg from '@/module-chartEcg/img/xdt.jpg'
export default {
  name: "saas-clients-table-index",
  data() {
    return {
      dataList: [],
      demoImg:testImg
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
  },
  // 创建完毕状态
  mounted() {
    this.getList();
    //console.log("created方法执行");
    //this.drawDemo();
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
