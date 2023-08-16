import { ref } from 'vue'

const isSidebarOpen = ref(true)
export function useSidebar() {
  function toggleSidebar() {
    isSidebarOpen.value = !isSidebarOpen.value
  }

  return {
    isSidebarOpen,
    toggleSidebar,
  }
}
