<script setup lang="ts">
import { NButton } from '@nethren-ui/vue'
</script>

<template>
  <div>
    <div class="mx-auto ml-0 mr-0 max-w-2xl px-6 py-10 lg:max-w-7xl lg:px-8 sm:px-6 sm:py-6">
      <div class="mt-5 flex lg:ml-100 lg:mt-0">
        <input
          id="search" type="text" name="search"
          class="mr-8 flex-1 border rounded-l-md px-8 py-2 pr-48 focus:border-blue-600 focus:outline-none focus:ring"
          placeholder="Search Here "
        >
        <NButton mode="solid" color="info">
          + Add Tutors
        </NButton>
      </div>
      <h1 class="mb-4 text-3xl font-bold">
        Tutors
      </h1>
      <div>
        <table class="m-4 w-[100%] table-auto border-1 p-5">
          <tbody class="ml-10">
            <tr>
              <td class="flex justify-center px-6 py-2" />
              <td class="px-6 py-2 text-left font-bold">
                Name
              </td>
              <td class="px-6 py-2 text-left font-bold">
                Subject
              </td>
              <td class="px-6 py-2 text-left font-bold">
                E-mail
              </td>
              <td class="flex justify-center px-6 py-2" />
            </tr>
            <tr class="bg-white">
              <td class="justify-end px-6 py-2">
                <div class="flex-row text-right">
                  <img src="/images/Profile Avatart.png" alt="" class="h-[60%] w-[60%]">
                </div>
              </td>
              <td class="px-6 py-2 text-left">
                Kasun Perera
              </td>
              <td class="px-6 py-2 text-left">
                Chemistry
              </td>
              <td class="px-6 py-2 text-left">
                kkp05@gmail.com
              </td>
              <td class="flex justify-center px-6 py-2">
                <div class="flex gap-3">
                  <NButton class="shadow-sm" mode="text" color="success">
                    View
                  </NButton>
                </div>
              </td>
            </tr>
            <tr class="bg-white">
              <td class="justify-end px-6 py-2">
                <div class="flex-row text-right">
                  <img src="/images/Profile Avatart.png" alt="" class="h-[60%] w-[60%]">
                </div>
              </td>
              <td class="px-6 py-2 text-left">
                Jayantha soyza
              </td>
              <td class="px-6 py-2 text-left">
                Physics
              </td>
              <td class="px-6 py-2 text-left">
                jsoyza234@gmail.com
              </td>
              <td class="flex justify-center px-6 py-2">
                <div class="flex gap-3">
                  <NButton class="shadow-sm" mode="text" color="success">
                    View
                  </NButton>
                </div>
              </td>
            </tr>
            <tr class="bg-white">
              <td class="justify-end px-6 py-2">
                <div class="flex-row text-right">
                  <img src="/images/Profile Avatart.png" alt="" class="h-[60%] w-[60%]">
                </div>
              </td>
              <td class="px-6 py-2 text-left">
                Ayusha Perera
              </td>
              <td class="px-6 py-2 text-left">
                Combined
              </td>
              <td class="px-6 py-2 text-left">
                ayushappp05@gmail.com
              </td>
              <td class="flex justify-center px-6 py-2">
                <div class="flex gap-3">
                  <NButton class="shadow-sm" mode="text" color="success">
                    View
                  </NButton>
                </div>
              </td>
            </tr>
            <tr class="bg-white">
              <td class="justify-end px-6 py-2">
                <div class="flex-row text-right">
                  <img src="/images/Profile Avatart.png" alt="" class="h-[60%] w-[60%]">
                </div>
              </td>
              <td class="px-6 py-2 text-left">
                kokila p. soyza
              </td>
              <td class="px-6 py-2 text-left">
                Biology
              </td>
              <td class="px-6 py-2 text-left">
                kokokoza234@gmail.com
              </td>
              <td class="flex justify-center px-6 py-2">
                <div class="flex gap-3">
                  <NButton class="shadow-sm" mode="text" color="success">
                    View
                  </NButton>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>
