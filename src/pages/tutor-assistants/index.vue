<script setup lang="ts">
import { ref } from 'vue';
import { NButton } from '@nethren-ui/vue'

import TutorAssistantAdd from './add-tutor-assistant.vue'
import TutorAssistantView from './view-tutor-assistant.vue'
import TutorAssistantRestrict from './Restrict-tutor-assistant.vue'

const tutors = [
  {
    name: 'Ruwan Darshana',
    assistants: [
      { name: 'Kasun Pramod', email: 'kasunpramod199@gmail.com', image: '/public/images/Profile Avatart.png', date: '2017/05/04' },
      { name: 'Pradeep Kumara', email: 'kumarapradeepkumara123@gmail.com', image: '/public/images/Profile Avatart.png', date: '2028/07/04' },
      { name: 'Sanka P Dinesh', email: 'spd199978spd@gmail.com', image: '/public/images/Profile Avatart.png', date: '2020/05/04' },
    ],
  },
  
];

const isAddModalVisible = ref(false);
const isViewModalVisible = ref(false);
const isRestrictModalVisible = ref(false);

const showAddModal = () => {
  isAddModalVisible.value = true;
};

const hideAddModal = () => {
  isAddModalVisible.value = false;
};

const showViewModal = () => {
  isViewModalVisible.value = true;
};

const hideViewModal = () => {
  isViewModalVisible.value = false;
};

const showRestrictModal = () => {
  isRestrictModalVisible.value = true;
};

const hideRestrictModal = () => {
  isRestrictModalVisible.value = false;
};

</script>

<template>
  <div class="mx-auto max-w-2xl py-10 lg:max-w-7xl lg:px-8 sm:px-6 sm:py-6">
    <div class="mt-5 flex lg:ml-100 lg:mt-0 justify-end">
      <div class="mr-8 flex border rounded-l-md px-4 py-2 pr-48">
        <MaterialSymbolsSearch />
        <input id="search" type="text" name="search" placeholder="Search Here " class="pl-4">
      </div>
    </div>
    <h2 class="mb-4 text-3xl font-bold">
      Tutor Assistants
    </h2>
    <div>
      <table class="w-[100%] table-auto">
        <div>
          <template v-for="tutor in tutors">
            <div class="flex border-2 rounded-lg ml-16 flex-row m-4">
              <tbody class="w-280">
                <div class="flex justify-between mt-4 mb-2">
                  <div>
                    <p class="px-6 py-2 text-left font-semibold text-5">
                      {{ tutor.name }}
                    </p>
                  </div>
                  <div class="flex gap-3 pr-2">
                    <NButton class="shadow-sm" mode="solid" color="info" @click="showAddModal">
                      + Add Assistants
                    </NButton>
                  </div>
                </div>
              <tbody class="ml-10">
                <tr class="">
                  <td></td>
                  <td class=" py-2  pl-10 font-semibold">Tutor's Name</td>
                  <td class=" py-2  pl-15 font-semibold">E-mail</td>
                  <td class=" py-2  pl-5 font-semibold">Joined Date</td>
                  <td></td>
                </tr>
                <tr v-for="(assistant, assistantIndex) in tutor.assistants" :key="assistantIndex">
                  <td class=" px-6 py-2">
                    <div class="flex text-right justify-end ">
                      <img :src="assistant.image" alt="" class="h-[50%] w-[50%]">
                    </div>
                  </td>
                  <td class="px-6 py-2 text-left w-50">
                    {{ assistant.name }}
                  </td>
                  <td class="px-6 py-2 text-left w-100">
                    {{ assistant.email }}
                  </td>
                  <td class="px-6 py-2 text-left">
                    {{ assistant.date }}
                  </td>
                  <td class="pl-2"></td>
                  <td class="flex justify-center px-4 py-2 pt-4">
                    <div class="flex gap-4">
                      <NButton class="shadow-sm " mode="outline" color="success" @click="showViewModal">
                        View
                      </NButton>
                      <NButton class="shadow-sm" mode="outline" color="danger" @click="showRestrictModal">
                        Restrict
                      </NButton>
                      <NButton class="shadow-sm" mode="outline" color="warning" @click="showEditModal">
                            Edit
                      </NButton>
                    </div>
                  </td>
                </tr>
              </tbody>
              </tbody>
            </div>
          </template>


        </div>
      </table>
    </div>
    <div v-if="isAddModalVisible">
      <TutorAssistantAdd @cancelForm="hideAddModal" />
    </div>

    <div v-if="isViewModalVisible">
      <TutorAssistantView @cancelForm="hideViewModal" />
    </div>

    <div v-if="isRestrictModalVisible">
      <TutorAssistantRestrict @cancelForm="hideRestrictModal" />
    </div>
  </div>
</template>