<script setup lang="ts">
import { NButton } from '@nethren-ui/vue'
</script>

<template>
  <div>
    <div class="mx-auto max-w-2xl px-6 py-10 lg:max-w-7xl lg:px-8 sm:px-6 sm:py-6">
      <div class="mt-5 flex lg:ml-100 lg:mt-0">
        <input
          id="search" type="text" name="search"
          class="mr-8 flex-1 border rounded-l-md px-8 py-2 pr-48 focus:border-blue-600 focus:outline-none focus:ring"
          placeholder="Search Here "
        >
        <NButton mode="solid" color="info">
          + Add New Staff Member
        </NButton>
      </div>
      <h1 class="mb-8 mt-0 text-3xl font-bold">
        Staff Members
      </h1>
      <div>
        <table class="m-4 w-[100%] table-auto border-2 p-4">
          <thead class="border-2">
            <tr class="text-black">
              <th class="px-4 py-2">
                Member Name
              </th>
              <th class="px-4 py-2">
                Joined Date
              </th>
              <th class="px-4 py-2">
                Job Role
              </th>
              <th class="px-4 py-2" />
            </tr>
          </thead>
          <tbody>
            <tr class="bg-white">
              <td class="px-6 py-2 text-center">
                Kasun Perera
              </td>
              <td class="px-6 py-2 text-center">
                2020-04-15
              </td>
              <td class="px-6 py-2 text-center">
                Manager
              </td>
              <td class="flex justify-center px-6 py-2">
                <div class="flex gap-3">
                  <NButton class="shadow-sm" mode="text" color="success">
                    View
                  </NButton>
                  <NButton class="shadow-sm" mode="text" color="primary">
                    Edit
                  </NButton>
                  <NButton class="shadow-sm" mode="text" color="danger">
                    Delete
                  </NButton>
                </div>
              </td>
            </tr>
            <tr class="bg-white">
              <td class="px-6 py-2 text-center">
                Praveen Kumarage
              </td>
              <td class="px-6 py-2 text-center">
                2020-08-20
              </td>
              <td class="px-6 py-2 text-center">
                Assistant
              </td>
              <td class="flex justify-center px-6 py-2">
                <div class="flex gap-3">
                  <NButton class="shadow-sm" mode="text" color="success">
                    View
                  </NButton>
                  <NButton class="shadow-sm" mode="text" color="primary">
                    Edit
                  </NButton>
                  <NButton class="shadow-sm" mode="text" color="danger">
                    Delete
                  </NButton>
                </div>
              </td>
            </tr>
            <tr class="bg-white">
              <td class="px-6 py-2 text-center">
                Piyath Rajapaksha
              </td>
              <td class="px-6 py-2 text-center">
                2021-12-08
              </td>
              <td class="px-6 py-2 text-center">
                Care Taker
              </td>
              <td class="flex justify-center px-6 py-2">
                <div class="flex gap-3">
                  <NButton class="shadow-sm" mode="text" color="success">
                    View
                  </NButton>
                  <NButton class="shadow-sm" mode="text" color="primary">
                    Edit
                  </NButton>
                  <NButton class="shadow-sm" mode="text" color="danger">
                    Delete
                  </NButton>
                </div>
              </td>
            </tr>
            <tr class="bg-white">
              <td class="px-6 py-2 text-center">
                Sakunthala Dias
              </td>
              <td class="px-6 py-2 text-center">
                2022-01-18
              </td>
              <td class="px-6 py-2 text-center">
                Security
              </td>
              <td class="flex justify-center px-6 py-2">
                <div class="flex gap-3">
                  <NButton class="shadow-sm" mode="text" color="success">
                    View
                  </NButton>
                  <NButton class="shadow-sm" mode="text" color="primary">
                    Edit
                  </NButton>
                  <NButton class="shadow-sm" mode="text" color="danger">
                    Delete
                  </NButton>
                </div>
              </td>
            </tr>
            <tr class="bg-white">
              <td class="px-6 py-2 text-center">
                Mahinda pathirana
              </td>
              <td class="px-6 py-2 text-center">
                2022-01-18
              </td>
              <td class="px-6 py-2 text-center">
                Security
              </td>
              <td class="flex justify-center px-6 py-2">
                <div class="flex gap-3">
                  <NButton class="shadow-sm" mode="text" color="success">
                    View
                  </NButton>
                  <NButton class="shadow-sm" mode="text" color="primary">
                    Edit
                  </NButton>
                  <NButton class="shadow-sm" mode="text" color="danger">
                    Delete
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
