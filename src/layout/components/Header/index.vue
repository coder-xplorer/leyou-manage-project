<template>
  <div class="header">
    <div class="left-logo">
      <img src="../../../assets/logo.svg" alt="" srcset="" />
      <div class="title">Vue Template</div>
    </div>

    <div class="right-info">
      <el-icon><el-icon-userFilled /></el-icon>
      <span>乐游</span>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="less">
.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 56px;
  background-color: rgba(255, 255, 255, 0.6);
  padding: 0 32px 0 16px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.05);

  .left-logo {
    display: flex;
    align-items: center;
  }
  img {
    width: 28px;
    height: 28px;
  }
  .title {
    font-size: 18px;
    margin-left: 8px;
    font-weight: 600;
  }
}
</style>
