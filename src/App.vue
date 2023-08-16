<script setup lang="ts">
import { useAuthStore } from '~/stores'
import { api } from '~/api'
import type { AdminProfile, TutorProfile } from '~/types'

const router = useRouter()
const authStore = useAuthStore()

onMounted(async () => {
  const refreshResponse = await api.auth.refreshDashboard()
  if (refreshResponse) {
    let profile: null | AdminProfile | TutorProfile
    switch (refreshResponse) {
      case 'admin':
        profile = await api.users.admins.getProfile() || null
        authStore.setAdminProfile(profile)
        break

      case 'tutor':
        profile = await api.users.tutors.getProfile() || null
        authStore.setTutorProfile(profile)
        break

      default:
        break
    }

    setInterval(async () => {
      await api.auth.refreshDashboard()
    }, 1000 * 60 * 14.5)
  }
  else {
    await router.replace('/auth/login')
  }
})
</script>

<template>
  <RouterView />
</template>
