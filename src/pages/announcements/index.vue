<script setup>
import { NButton } from '@nethren-ui/vue'
import { ref } from 'vue'

const pure = ref([
  {
    title: 'Differentiation Formulations',
    Description1: 'It was popularized in the 1960s with the release of Letraset sheets containing Lorem Ipsus passages.',
    className: '2023 Mathematics',
    teacherName: 'Ruwan Darshana',
  },
  {
    title: 'Differentiation Formulations',
    Description1: 'It was popularized in the 1960s with the release of Letraset sheets containing Lorem Ipsus passages.',
    className: '2023 Mathematics',
    teacherName: 'Ruwan Darshana',
  },
  {
    title: 'Differentiation Formulations',
    Description1: 'It was popularized in the 1960s with the release of Letraset sheets containing Lorem Ipsus passages.',
    className: '2023 Mathematics',
    teacherName: 'Ruwan Darshana',
  },
  // ... (your other data entries)
])
</script>

<template>
  <div class="mt-8 flex justify-end lg:ml-100">
    <div class="mr-8 flex border rounded-l-md px-4 py-2 pr-48">
      <MaterialSymbolsSearch />
      <input id="search" type="text" name="search" placeholder="Search Here " class="pl-4">
    </div>
    <!-- <NButton mode="solid" color="info" @click="showAddModal">
      + Add New Announcements
    </NButton> -->
    <RouterLink to="/announcement/add-announcement-post">
      <NButton mode="solid" color="info">
        + New
      </NButton>
    </RouterLink>
  </div>
  <div class="mt-5">
    <h2 class="text-2xl font-bold tracking-tight text-gray-900">
      Announcements
    </h2>
    <div class="mt-6">
      <table class="w-full">
        <thead>
          <tr>
            <th class="px-4 py-2">
              Title
            </th>
            <th class="px-4 py-2">
              Description
            </th>
            <th class="px-4 py-2">
              Class Name
            </th>
            <th class="px-4 py-2">
              Teacher Name
            </th>
            <th class="px-4 py-2">
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="(course, index) in pure" :key="index"
            :class="{ 'bg-[#EDF2F7]': index % 2 === 0, 'bg-white': index % 2 !== 0 }"
          >
            <td class="px-4 py-2">
              {{ course.title }}
            </td>
            <td class="px-4 py-2">
              {{ course.Description1 }}
            </td>
            <td class="px-4 py-2">
              {{ course.className }}
            </td>
            <td class="px-4 py-2">
              {{ course.teacherName }}
            </td>
            <td class="px-4 py-2">
              <div class="flex gap-2">
                <NButton
                  style="height:2rem !important;" class="shadow-sm" mode="outline"
                  @click="showViewModal(course)"
                >
                  <mdi-eye-outline />
                </NButton>
                <RouterLink to="/announcement/edit-announcement-post">
                  <NButton style="height:2rem !important;" class="shadow-sm" mode="outline" color="warning">
                    <ic-baseline-edit />
                  </NButton>
                </RouterLink>
                <NButton
                  style="height:2rem !important;" class="shadow-sm" mode="outline" color="danger"
                  @click="showDeleteModal(course)"
                >
                  <mdi-delete-outline />
                </NButton>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
