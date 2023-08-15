<script setup>
import { ref } from 'vue';

import MaterialSymbolsFormatBold from '~icons/material-symbols/format-bold'


const TutorAssisName = ref('');
const tutorName = ref('');
const email = ref('');

const onSubmit = () => {
  // Handle form submission here (e.g., send data to the server)
  // Reset form fields after submission
  TutorAssisName.value = '';
  tutorName.value = '';
  email.value = '';

};

const showDropdown = ref(false);
const selectedOption = ref(null);

function toggleDropdown() {
  showDropdown.value = !showDropdown.value;
}

function selectOption(option) {
  selectedOption.value = option;
}
</script>

<template>
  <div class="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center">
    <div class="bg-white p-4 rounded-lg shadow-md border-green-4">
      <form class="flex flex-col justify-center">
        <h1 class="py-4 font-semibold text-center text-5 border-b-2 mb-4 bg-green-500 text-white">Tutor Assistant Information</h1>
        <div>
          <div class="mb-2 grid grid-cols-1 gap-x-6 gap-y-6 sm:grid-cols-6 justify-center flex">
            <div class="col-span-full">
              <div class="mt-1 flex items-center gap-x-3">
                <svg class="h-25 w-25 text-gray-300" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path fill-rule="evenodd"
                    d="M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
                    clip-rule="evenodd" />
                </svg>
              </div>
            </div>
          </div>
          <div class="border-t border-gray-100">
            <dl class="divide-y divide-gray-100 w-100">
              <div class="px-4 py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0 ">
                <dt class="text-sm font-medium leading-6 text-gray-900 font-semibold pl-6">First name :</dt>
                <dd class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">Nuwan</dd>
              </div>
              <div class="px-4 py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                <dt class="text-sm font-medium leading-6 text-gray-900 font-semibold pl-6">Last Name :</dt>
                <dd class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">Pradeep</dd>
              </div>
              <div class="px-4 py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                <dt class="text-sm font-medium leading-6 text-gray-900 font-semibold pl-6">Email address :</dt>
                <dd class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">NuwanPPradeep1999@example.com</dd>
              </div>
              <div class="px-4 py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                <dt class="text-sm font-medium leading-6 text-gray-900 font-semibold pl-6">Tutor Name :</dt>
                <dd class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">Ruwan Darshana</dd>
              </div>
              <div class="px-4 py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                <dt class="text-sm font-medium leading-6 text-gray-900 font-semibold pl-6">Joined Date :</dt>
                <dd class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">2020-05-14</dd>
              </div>
              <div class="justify-end flex p-4">
                <button @click="onSubmit"
                  class="px-7 py-1 bg-[#5e5cba] text-white rounded-md cursor-pointer">Back</button>
              </div>
            </dl>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.toolbar-item {
  @apply p-1 m-1 border-2 flex justify-center;
}
</style>
