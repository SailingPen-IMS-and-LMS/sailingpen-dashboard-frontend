<script setup lang="ts">

import { ref } from 'vue';
import { NButton } from '@nethren-ui/vue'

const tutors = [
  {
    name: 'Ruwan Darshan',
    id: 1,
    classes: [
      { id:'CLS01' , name: '2023 Theory Class', fees: '3000.00', image: '/public/images/Profile Avatart.png', date: '2017/05/04' },
      { id:'CLS02' , name: '2022 Theory Class', fees: '2500.00', image: '/public/images/Profile Avatart.png', date: '2028/07/04' },
      { id:'CLS03' , name: '2021 Paper Class', fees: '1500.00', image: '/public/images/Profile Avatart.png', date: '2020/05/04' },
    ],
  },
  {
    name: 'Charitha Dissanayake',
    id: 2,
    classes: [
      { id:'CLS01' , name: '2023 Theory Class', fees: '3000.00', image: '/public/images/Profile Avatart.png', date: '2017/05/04' },
      { id:'CLS02' , name: '2022 Theory Class', fees: '2500.00', image: '/public/images/Profile Avatart.png', date: '2028/07/04' },
      { id:'CLS03' , name: '2021 Paper Class', fees: '1500.00', image: '/public/images/Profile Avatart.png', date: '2020/05/04' },
    ],
  },
];

</script>

<template>
  <div class="class-page-container">

    <div class="class-page-title flex justify-between mb-5">
      <h1 class="text-3xl font-bold">Classes</h1>
      <div class="flex border rounded-l-md px-4 py-2 pr-48">
        <MaterialSymbolsSearch />
        <input id="search" type="text" name="search" placeholder="Search Here " class="pl-4">
      </div>
    </div>

    <div class="class-page-card-wrapper">
      <div class="class-tutor-card mb-15 w-5/6"  v-for="tutor in tutors" >
        <div class="class-home-card-title flex justify-between  ">
          <div>
            <p class="px-6 py-2 text-left font-semibold text-5">
              {{ tutor.name }}
            </p>
          </div>
          <div class="px-6 py-3 pr-2">
            <NButton class="shadow-sm" mode="solid" color="info">
              + Add Class
            </NButton>
          </div>
        </div>

        <div class="ml-10 ">
          <table>
            <tbody class="ml-10">
                  <tr class="">
                    <td></td>
                    <td class=" py-2 pl-12  font-semibold">Class ID</td>
                    <td class=" py-2   font-semibold">Class Name</td>
                    <td class=" py-2   font-semibold">Class Fees</td>
                    <td class=" py-2   font-semibold">Created Date</td>
                    <td></td>
                  </tr>
                  <tr v-for="(assistant, assistantIndex) in tutor.classes" :key="assistantIndex">
                    <td class=" py-2">
                      <div class="flex text-right justify-end ">
                        <img :src="assistant.image" alt="" class="h-[50%] w-[50%]">
                      </div>
                    </td>
                    <td class="pl-12 py-2 text-left w-50">
                      {{ assistant.id }}
                    </td>
                    <td class=" py-2 text-left w-50">
                      {{ assistant.name }}
                    </td>
                    <td class=" py-2 text-left w-30">
                      {{ assistant.fees }}
                    </td>
                    <td class=" py-2 text-left">
                      {{ assistant.date }}
                    </td>
                    <td class="pl-2"></td>
                    <td class="flex justify-center px-4 py-2 pt-4">
                      <div class="flex gap-4">
                        <NButton class="shadow-sm " mode="outline" color="success">
                          View
                        </NButton>
                        <NButton class="shadow-sm" mode="outline" color="danger" >
                          Restrict
                        </NButton>
                      </div>
                    </td>
                  </tr>
                </tbody>
          </table>
        </div>
      </div>

    </div>

  </div>
</template>

<style lang="scss" scoped>

.class-tutor-card{
  background-color: #ffffff;
  box-shadow: 0 0.25rem 1rem rgba(0, 0, 0, 0.1);
  border-radius: 5px;
}

</style>
