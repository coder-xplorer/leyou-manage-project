import { ref, computed } from 'vue';
import { defineStore } from 'pinia';

export const useIsCollapseStore = defineStore('isCollapse', () => {
  const isCollapse = ref(false);
  // const doubleCount = computed(() => count.value * 2);
  // function increment() {
  //   count.value++;
  // }

  return { isCollapse };
});
