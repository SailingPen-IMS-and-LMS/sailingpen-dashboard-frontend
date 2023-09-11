<script setup lang="ts">
import { ref, toRefs } from 'vue'

const props = defineProps<{
  container: string
}>()

const { container } = toRefs(props)

const isOpen = ref(false)
const menu = ref<HTMLDivElement>()
const position = ref({
  x: 0,
  y: 0,
})

function openMenu(e: MouseEvent) {
  e.preventDefault()
  if (isOpen.value)
    isOpen.value = false

  setTimeout(() => {
    const clientX = e.clientX
    const clientY = e.clientY
    position.value.x = clientX
    position.value.y = clientY
    isOpen.value = true
  }, 10)
}

onMounted(() => {
  if (container.value) {
    document.querySelector(container.value)?.addEventListener('contextmenu', (e) => {
      openMenu(e as MouseEvent)
    })
  }
})
</script>

<template>
  <Teleport to="body">
    <Transition name="context-menu">
      <div
        v-if="isOpen" ref="menu" class="absolute z-[10] bg-[var(--bg-secondary)]" :style="{
          top: `${position.y}px`,
          left: `${position.x}px`,
        }"
      >
        <slot />
      </div>
    </Transition>
  </Teleport>
</template>

<style lang="scss">
.context-menu-enter-active, .context-menu-leave-active {
  transition: all 200ms ease-in-out;
}

.context-menu-enter-from, .context-menu-leave-to {
  opacity: 0;
  transform: translateY(10px);
}

.context-menu-enter-to, .context-menu-leave-from {
  opacity: 1;
  transform: translateY(0px);
}
</style>
