<template>
<div>


<el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
 <el-row :gutter="10">
  <el-col :xs="4" :sm="6" :md="4" :lg="3"><div class="grid-content bg-purple"><el-menu-item index="1">处理1</el-menu-item></div></el-col>
  <el-col :xs="4" :sm="6" :md="8" :lg="9"><div class="grid-content bg-purple-light">  <el-menu-item index="2">处理2</el-menu-item></div></el-col>
  <el-col :xs="4" :sm="6" :md="8" :lg="9"><div class="grid-content bg-purple">  <el-menu-item index="3">处理3</el-menu-item></div></el-col>
   <el-col :xs="4" :sm="6" :md="4" :lg="3"><div class="grid-content bg-purple"><el-menu-item index="4">处理1</el-menu-item></div></el-col>
  <el-col :xs="4" :sm="6" :md="8" :lg="9"><div class="grid-content bg-purple-light">  <el-menu-item index="5">处理2</el-menu-item></div></el-col>
  <el-col :xs="4" :sm="6" :md="8" :lg="9"><div class="grid-content bg-purple">  <el-menu-item index="6">处理3</el-menu-item></div></el-col>
  <el-col :xs="4" :sm="6" :md="4" :lg="3"><div class="grid-content bg-purple-light">  <el-menu-item index="3">处理3</el-menu-item></div></el-col>
</el-row>
</el-menu>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        activeIndex: '1'
      };
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>