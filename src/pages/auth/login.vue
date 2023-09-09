<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { NButton, NInput } from '@nethren-ui/vue'
import { ref } from 'vue'
import { useAuthStore } from '~/stores'
import { api } from '~/api'
import type { AdminProfile, LoginDto, TutorProfile } from '~/types'

const { t } = useI18n()

const loginFormData = ref<LoginDto>({
  username: '',
  password: '',
})

const authStore = useAuthStore()
const router = useRouter()

const loading = ref(false)

async function onLoginFormSubmit() {
  loading.value = true
  try {
    const result = await api.auth.login(loginFormData.value)
    if (result) {
      let profile: AdminProfile | TutorProfile | null | undefined
      switch (result) {
        case 'admin':
          profile = await api.users.admins.getProfile()
          authStore.setAdminProfile(profile || null)
          await router.replace('/')
          break
        case 'tutor':
          profile = await api.users.tutors.getProfile()
          authStore.setTutorProfile(profile || null)
          await router.replace('/tutor-dashboard/my-classes')
          break

        default:
          console.log('Invalid user type')
          break
      }
    }
  }
  catch (error) {
    console.log(error)
  }
  finally {
    loading.value = false
  }
}
</script>

<template>
  <div class="h-screen w-screen flex items-center justify-center">
    <div class="h-screen w-[50%] flex flex-col items-center justify-center">
      <h1 class="text-3xl font-bold">
        Welcome to SailingPen
      </h1>
      <br>
      <form class="w-[450px] flex flex-col gap-4 rounded-lg bg-white p-4" @submit.prevent="onLoginFormSubmit">
        <div class="flex flex-col gap-2">
          <NInput
            id="username" v-model="loginFormData.username" label="Username" placeholder="Enter your username"
            name="username" type="text"
          />
        </div>

        <div class="flex flex-col gap-2">
          <NInput
            id="password" v-model="loginFormData.password" type="password" label="Password"
            placeholder="Enter your password" name="password"
          />
        </div>
        <div class="flex flex-row">
          <div class="pl-2.5">
            <p class="">
              {{ t('auth.remember') }}
            </p>
          </div>

          <div class="ml-auto">
            <p>{{ t('auth.forgotpassword') }}</p>
          </div>
        </div>

        <NButton :is-loading="loading" loading-text="Submitting">
          <template #leftIcon>
            <material-symbols-login />
          </template>
          {{ t('auth.login') }}
        </NButton>
      </form>
    </div>

    <div class="h-screen w-[50%] flex flex-col">
      <img
        src="https://images.unsplash.com/photo-1588702547954-4800ead296ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fHR1dG9yfGVufDB8MXwwfHx8MA%3D%3D&auto=format&fit=crop&w=900&q=60"
        alt="" class="h-full w-full object-cover"
      >
    </div>
  </div>
</template>

<route lang="yml">
meta:
  layout: auth
</route>
