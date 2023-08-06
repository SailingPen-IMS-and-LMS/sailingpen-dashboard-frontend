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
          + Add New Blog Post
        </NButton>
      </div>
      <h1 class="mb-8 mt-0 text-3xl font-bold">
        Blog Posts
      </h1>
      <div>
        <table class="m-4 w-[100%] table-auto border-2 p-4">
          <thead class="border-2">
            <tr class="text-black">
              <th class="px-6 py-2">
                Blog Post
              </th>
              <th class="px-6 py-2">
                Date
              </th>
              <th class="px-6 py-2">
                Publisher's Name
              </th>
              <th class="px-6 py-2" />
            </tr>
          </thead>
          <tbody>
            <tr class="bg-white">
              <td class="px-6 py-2 text-center">
                The Relationship between the Speed and the Distance
              </td>
              <td class="px-6 py-2 text-center">
                1day and 3h ago
              </td>
              <td class="px-6 py-2 text-center">
                Nilantha Jayasuriya
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
                Eyes, Ears and North (EEN) surgery
              </td>
              <td class="px-6 py-2 text-center">
                1day and 8h ago
              </td>
              <td class="px-6 py-2 text-center">
                Tissa Jananayake
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
                Vectors
              </td>
              <td class="px-6 py-2 text-center">
                2day and 1h ago
              </td>
              <td class="px-6 py-2 text-center">
                Ruwan Darshana
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
                Mathematical Calculation Basics
              </td>
              <td class="px-6 py-2 text-center">
                2day and 3h ago
              </td>
              <td class="px-6 py-2 text-center">
                Ruwan Darshana
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
                Periodic Table Introduction
              </td>
              <td class="px-6 py-2 text-center">
                4day and 5h ago
              </td>
              <td class="py-2text-center px-6">
                Charitha Dissanayaka
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

<style lang="scss" scoped>
.top-right-container {
  width: 250px;
  height: 250px;
  background-color: black;
  margin-left: 1.5rem;
  border-radius: 8px;
}
</style>
