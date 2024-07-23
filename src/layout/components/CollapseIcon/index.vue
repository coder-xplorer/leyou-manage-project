<template>
  <div
    class="open"
    @click="handleIsCollapse"
    :style="{ left: isCollapse ? '43px' : '243px' }"
  >
    <el-icon>
      <ArrowLeftBold
        style="font-size: 12px"
        color="#bfbfbf"
        v-if="!isCollapse"
      />
      <ArrowRightBold style="font-size: 12px" color="#bfbfbf" v-else />
    </el-icon>
  </div>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { ArrowLeftBold, ArrowRightBold } from '@element-plus/icons-vue';
import { useIsCollapseStore } from '@/stores/isCollapse';

const isCollapseStore = useIsCollapseStore();
const { isCollapse } = storeToRefs(isCollapseStore);
const handleIsCollapse = () => {
  isCollapseStore.setIsCollapse();
};
</script>

<style scoped>
.open {
  position: absolute;
  left: 243px;
  top: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 24px;
  height: 24px;
  background-color: #fff;
  border-radius: 40px;
  box-shadow: 0 2px 8px -2px rgba(0, 0, 0, 0.05),
    0 1px 4px -1px rgba(25, 15, 15, 0.07), 0 0 1px 0 rgba(0, 0, 0, 0.08);
  z-index: 101;
  cursor: pointer;
}
</style>
