<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { NButton, NCheckbox, NInput } from '@nethren-ui/vue'
import MaterialSymbolsLogin from '~icons/material-symbols/login'
import { ref } from 'vue'

const { t } = useI18n()
const email = ref('')
const password = ref('')
const rememberMe = ref(false)

</script>


<template>
    <div class="h-screen w-screen flex items-center justify-center">
        <div class="h-screen w-[50%] flex flex-col items-center justify-center">
            <h1 class="text-3xl font-bold outline outline-offset-1 outline-5">Welcome to SailingPen</h1>
            <br>
            <form action="" class="w-[450px] rounded-lg bg-white flex flex-col gap-4 p-4">
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

                        <div class="flex flex-row">
                    <n-checkbox>
                        <template>
                        </template>
                    </n-checkbox>
                        </div>

                        <div class="pl-2.5">
                                <p class=""> {{ t('auth.remember') }}</p>
                        </div>
                        
                        <div class="ml-auto">
                                <p>{{ t('auth.forgotpassword') }}</p>
                        </div>

                    </div>

                <n-button>
                <template #leftIcon>
                    <MaterialSymbolsLogin />
                </template>
        {{ t('auth.login') }} </n-button>

        <n-button class="bg-white hover:outline-slate-500 hover:text-black text-slate-900 outline outline-offset-0 outline-1 outline-slate-200">
            <template>
            </template>
            {{ t('auth.google') }}
        </n-button>
            </form>
    </div>

    <div class=" flex flex-col h-screen w-[50%]">
        <img src="https://images.unsplash.com/photo-1588702547954-4800ead296ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fHR1dG9yfGVufDB8MXwwfHx8MA%3D%3D&auto=format&fit=crop&w=900&q=60" alt="" class="object-cover h-full w-full">
    </div>
    

    </div>
</template>
