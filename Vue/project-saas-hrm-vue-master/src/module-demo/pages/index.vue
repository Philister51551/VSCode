<template>
  <div class="dashboard-container">
    <div class="app-container">
      <el-card shadow="never">
        {{tname}}
      </el-card>
    </div>
  </div>
</template>

<script>

const axiosDemo = axios.create({
  baseURL: '/api/api/orgs',
  timeout: 5000,
  headers: {
    'token' : '32b0d1e410134134a69b98692b99c157',
    'Content-Type': 'application/json; charset=utf-8'
    //'Access-Control-Allow-Origin' : '*'
  }
}
)

import { list } from "@/api/example/table";
import axios from "axios";
export default {
  name: "saas-clients-table-index",
  data() {
    return {
      dataList: [],
      tname: '666' 
    };
  },
  methods: {
    // 获取列表数据
    getList() {
      list().then((res) => {
        this.dataList = res.data.items;
        //console.log(this.dataList);
      });
    },
    getData() {
      axiosDemo({
        method: 'get'
      }).then((res) => {
        this.tname=res.data.data[0].name;
        console.log(res.data.data[0].name);
      }).catch((err) => {
        console.log(err);
      })
    }
  },
  // 创建完毕状态
  created() {
    //this.getList();
    console.log("created方法执行");
    this.getData();
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
