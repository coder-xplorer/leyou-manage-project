<template>
  <el-menu
    :style="{ width: isCollapse ? '56px' : '256px' }"
    default-active="1"
    :collapse="isCollapse"
    @open="handleOpen"
    @close="handleClose"
    :collapse-transition="false"
  >
    <el-menu-item index="1">
      <el-icon>
        <el-icon-pieChart></el-icon-pieChart>
      </el-icon>

      <!-- <IEpPieChart /> -->
      <template #title>总览</template>
    </el-menu-item>
    <el-sub-menu index="2">
      <template #title>
        <el-icon>
          <el-icon-user></el-icon-user>
        </el-icon>
        <span>用户管理</span>
      </template>
      <el-menu-item index="2-1">用户列表</el-menu-item>
      <el-menu-item index="2-2">个人中心</el-menu-item>
    </el-sub-menu>
    <el-sub-menu index="3">
      <template #title>
        <el-icon><el-icon-setting /></el-icon>
        <span>系统管理</span>
      </template>
      <el-menu-item index="3-1">权限配置</el-menu-item>
    </el-sub-menu>
    <el-menu-item index="4">
      <el-icon><el-icon-files /></el-icon>
      <template #title>Excel</template>
    </el-menu-item>
    <el-menu-item index="5">
      <el-icon><el-icon-notebook /></el-icon>
      <template #title>富文本编辑器</template>
    </el-menu-item>
    <el-menu-item index="6">
      <el-icon><el-icon-warning /></el-icon>
      <template #title>错误页</template>
    </el-menu-item>
  </el-menu>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { storeToRefs } from 'pinia';
import { useIsCollapseStore } from '@/stores/isCollapse';

const isCollapseStore = useIsCollapseStore();
const { isCollapse } = storeToRefs(isCollapseStore);
const handleOpen = (key: string, keyPath: string[]) => {
  console.log(key, keyPath);
};
const handleClose = (key: string, keyPath: string[]) => {
  console.log(key, keyPath);
};
</script>

<style scoped>
.el-menu {
  height: 100%;
  background-color: #f8f8f8;
}
</style>
