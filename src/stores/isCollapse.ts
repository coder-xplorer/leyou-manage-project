import { ref, computed } from 'vue';
import { defineStore } from 'pinia';

export const useIsCollapseStore = defineStore('isCollapse', () => {
  const isCollapse = ref(false);
  // const doubleCount = computed(() => count.value * 2);
  function setIsCollapse() {
    isCollapse.value = !isCollapse.value;
  }

  return { isCollapse, setIsCollapse };
});
