<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { NButton, NInput } from '@nethren-ui/vue'
import { ref } from 'vue'

const { t } = useI18n()
const email = ref('')
const password = ref('')
</script>

<template>
  <div class="h-screen w-screen flex items-center justify-center">
    <div class="h-screen w-[50%] flex flex-col items-center justify-center">
      <h1 class="text-3xl font-bold outline-5 outline-offset-1 outline">
        Welcome to SailingPen
      </h1>
      <br>
      <form action="" class="w-[450px] flex flex-col gap-4 rounded-lg bg-white p-4">
        <div class="flex flex-col gap-2">
          <NInput
            id="email"
            v-model="email"
            label="Email"
            placeholder="Enter your email address"
            name="email"
            type="email"
          />
        </div>

        <div class="flex flex-col gap-2">
          <NInput
            id="password"
            v-model="password"
            type="password"
            label="Password"
            placeholder="Enter your password"
            name="password"
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

        <NButton>
          <template #leftIcon>
            <material-symbols-login />
          </template>
          {{ t('auth.login') }}
        </NButton>
      </form>
    </div>

    <div class="h-screen w-[50%] flex flex-col">
      <img src="https://images.unsplash.com/photo-1588702547954-4800ead296ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fHR1dG9yfGVufDB8MXwwfHx8MA%3D%3D&auto=format&fit=crop&w=900&q=60" alt="" class="h-full w-full object-cover">
    </div>
  </div>
</template>

<route lang="yml">
meta:
  layout: auth
</route>
