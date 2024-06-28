<template>
  <el-container>
    <el-header>
      <Header />
    </el-header>
    <el-container style="position: relative">
      <el-aside>
        <Sidebar />
      </el-aside>
      <CollapseIcon />
      <el-main>
        <AppMain />
      </el-main>
    </el-container>
  </el-container>
</template>

<script setup lang="ts">
import { Header, Sidebar, CollapseIcon, AppMain } from './components';
</script>

<style scoped lang="less">
.el-container {
  height: 100%;

  .el-aside {
    width: inherit;
  }

  .el-header {
    padding: 0;
    height: 56px;
  }
  .el-main {
    padding: 16px;
  }
}
</style>
