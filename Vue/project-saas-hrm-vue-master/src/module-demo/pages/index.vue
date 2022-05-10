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
    //'token' : '57b46f2498e64231bbcc8379b7b90026',
    'Content-Type': 'application/json; charset=utf-8'
    //'Access-Control-Allow-Origin' : '*'
  }
})

const axiosDemo1 = axios.create({
  baseURL: '/api/api/orgs/6899/grouplist',
  timeout: 5000,
  headers: {
    'token' : '32b0d1e410134134a69b98692b99c157',
    //'token' : '57b46f2498e64231bbcc8379b7b90026',
    'Content-Type': 'application/json; charset=utf-8'
    //'Access-Control-Allow-Origin' : '*'
  }
})

const axiosDemo2 = axios.create({
  baseURL: '/api/api/orgs/6899/groups/4178/devices',
  timeout: 5000,
  headers: {
    'token' : '32b0d1e410134134a69b98692b99c157',
    //'token' : '57b46f2498e64231bbcc8379b7b90026',
    'Content-Type': 'application/json; charset=utf-8'
    //'Access-Control-Allow-Origin' : '*'
  }
})

const axiosDemo3 = axios.create({
  baseURL: '/api/api/orgs/6899/devicestate/15261',
  timeout: 5000,
  headers: {
    'token' : '32b0d1e410134134a69b98692b99c157',
    //'token' : '57b46f2498e64231bbcc8379b7b90026',
    'Content-Type': 'application/json; charset=utf-8'
    //'Access-Control-Allow-Origin' : '*'
  }
})

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
      axiosDemo2({
        method: 'get'
      }).then((res) => {
        //this.tname = res.data.data[0];
        this.tname = res.data.data;
        console.log(res.data.data[0]);
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
