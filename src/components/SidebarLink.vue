<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { toRefs } from 'vue'
import { RouterLink } from 'vue-router'
import { useAuthStore } from '~/stores'

interface SidebarLinkProps {
  to?: string
  text: string
  isSidebarOpen: boolean
  isButton?: boolean
  children?: SidebarLinkProps[]
  isChild?: boolean
}

const props = withDefaults(defineProps<SidebarLinkProps>(), {
  isButton: false,
  children: () => [] as SidebarLinkProps[],
  isChild: true,
})

const { to, text, isSidebarOpen, isButton, children, isChild } = toRefs(props)
console.log(isChild.value)

const route = useRoute()
const authStore = useAuthStore()
const { userType } = storeToRefs(authStore)

const definitiveMatchAgainst = computed(() => {
  switch (userType.value) {
    case 'admin':
      return '/'
    case 'tutor':
      return '/tutor-dashboard'
    default:
      return '/'
  }
})

const activeClass = computed(() => {
  if (route.fullPath === props.to)
    return 'sidebar-link--active'

  if (props.to && route.fullPath.startsWith(props.to) && props.to !== definitiveMatchAgainst.value && !props.isChild)
    return 'sidebar-link--active'
})

const button = ref<HTMLButtonElement | null>(null)
const childrenContainer = ref<HTMLDivElement | null>(null)

const areChildrenShown = ref(false)

function showChildren() {
  if (props.children.length)
    areChildrenShown.value = true
}

onClickOutside(button, (event) => {
  const clickTarget = event.target as HTMLElement

  if (childrenContainer.value && (!childrenContainer.value.contains(clickTarget) || childrenContainer.value === clickTarget))
    areChildrenShown.value = false
})
</script>

<template>
  <button
    v-if="isButton" ref="button" class="sidebar-link relative flex items-center gap-4 px-4 py-2" :class="activeClass"
    @click="showChildren"
  >
    <slot name="icon" />
    <span v-if="isSidebarOpen">{{ text }}</span>
    <uil-angle-down
      v-if="isButton && children.length !== 0" class="ml-auto text-xl" :style="{
        transition: 'all 200ms',
        transform: areChildrenShown ? 'rotate(180deg)' : 'rotate(0deg)',
      }"
    />
    <Transition name="slc">
      <div v-if="areChildrenShown" ref="childrenContainer" class="sidebar-link__children flex flex-col gap-2">
        <SidebarLink
          v-for="child in children" :key="child.to" :to="child.to" :text="child.text" :is-sidebar-open="true"
          :is-button="child.isButton" :children="child.children"
        />
      </div>
    </Transition>
  </button>
  <RouterLink
    v-else-if="to" :to="to" class="sidebar-link flex items-center gap-4 px-4 py-2"
    exact-active-class="sidebar-link--active" active-class="sidebar-link--active"
    :class="activeClass"
  >
    <slot name="icon" />
    <Transition name="sidebar-link-text">
      <span v-if="isSidebarOpen">{{ text }}</span>
    </Transition>
  </RouterLink>
</template>

<style lang="scss" scoped>
.sidebar-link {
  transition: all 200ms;
  border-radius: 8px;
  color: #000;
  //   width: 100%;

  &:hover {
    background-color: var(--n-color-primary-200-transparent);
  }

  &:active {
    background-color: var(--n-color-primary-600-transparent);
  }

  &--active {
    background-color: var(--n-color-primary-400);
    color: #fff;

    &:hover {
      background-color: var(--n-color-primary-400);
    }

    &:active {
      background-color: var(--n-color-primary-400);
    }
  }

  span {
    // prevent text from wrapping
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;

  }
}

.sidebar-link-text-enter-active {
  transition: all 200ms;
}

.sidebar-link-text-enter-from,
.sidebar-link-text-leave-to {
  opacity: 0;
  transform: translateX(-10px);
}

.sidebar-link-text-enter-to,
.sidebar-link-text-leave-from {
  opacity: 1;
  transform: translateX(0);
}

.sidebar-link__children {
  position: absolute;
  top: 3rem;
  left: 3rem;
  width: 175px;
  padding: 0.5rem;
  border-radius: 0.375rem;
  background-color: #fff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  z-index: 1;
}

.slc-enter-active,
.slc-leave-active {
  transition: all 200ms;
}

.slc-enter-from,
.slc-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}

.slc-enter-to,
.slc-leave-from {
  opacity: 1;
  transform: translateY(0);
}
</style>
