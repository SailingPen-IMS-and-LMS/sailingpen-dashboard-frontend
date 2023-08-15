<script setup>
import { ref } from 'vue';

import MaterialSymbolsFormatBold from '~icons/material-symbols/format-bold'


const FName = ref('');
const LName = ref('');
const DOB = ref('');
const Email = ref('');
const Address = ref('');
const ParentMobileNumber = ref('');
const Gender = ref('');
const School = ref('');
const NIC = ref('');

const onSubmit = () => {
  // Handle form submission here (e.g., send data to the server)
  // Reset form fields after submission
  FName.value = '';
  LName.value = '';
  DOB.value = '';
  Address.value = '';
  Email.value = '';
  Gender.value = '';
  ParentMobileNumber.value = '';
  School.value = '';
  NIC.value = '';
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
    <div class="bg-white p-4 rounded-lg shadow-md;">
      <form class="flex flex-col">
        <h1 class="py-4 font-semibold text-center border-b-2 mb-3 text-5 bg-blue-500 text-white">Edit Student Details
        </h1>
        <form>
          <div class="">
            <div class="mt-2 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6 flex justify-center">
              <div class="col-span-full ml-6">
                <label for="photo" class="block text-sm font-medium leading-6 text-gray-900">Photo :</label>
                <div class="mt-2 flex items-center gap-x-3 ml-6">
                  <svg class="h-12 w-12 text-gray-300" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path fill-rule="evenodd"
                      d="M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
                      clip-rule="evenodd" />
                  </svg>
                  <button type="button"
                    class="rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">Edit</button>
                </div>
              </div>
            </div>
            <div class="mt-2 pb-2">
              <div class="mt-2 grid grid-cols-1 gap-x-6 gap-y-3 sm:grid-cols-6">
                <div class="sm:col-span-3">
                  <label for="first-name" class="block text-sm font-medium leading-6 text-gray-900">First name :</label>
                  <div class="mt-2">
                    <input type="text" name="first-name" id="first-name" autocomplete="given-name"
                      class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
                  </div>
                </div>

                <div class="sm:col-span-3">
                  <label for="last-name" class="block text-sm font-medium leading-6 text-gray-900">Last name :</label>
                  <div class="mt-2">
                    <input type="text" name="last-name" id="last-name" autocomplete="family-name"
                      class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
                  </div>
                </div>

                <div class="sm:col-span-3">
                  <label for="first-name" class="block text-sm font-medium leading-6 text-gray-900">NIC number :</label>
                  <div class="mt-2">
                    <input type="text" name="first-name" id="first-name" autocomplete="given-name"
                      class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
                  </div>
                </div>

                <div class="sm:col-span-3">
                  <label for="last-name" class="block text-sm font-medium leading-6 text-gray-900">Parent's TelePhone No
                    :</label>
                  <div class="mt-2">
                    <input type="text" name="last-name" id="last-name" autocomplete="family-name"
                      class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
                  </div>
                </div>

                <div class="sm:col-span-3">
                  <label for="last-name" class="block text-sm font-medium leading-6 text-gray-900">Date Of Birth
                    :</label>
                  <div class="mt-2">
                    <input type="date" name="last-name" id="last-name" autocomplete="family-name"
                      class="p-1 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
                  </div>
                </div>

                <div class="sm:col-span-3">
                  <label for="last-name" class="block text-sm font-medium leading-6 text-gray-900">Gender :</label>
                  <div class="flex items-center gap-x-3 mt-3 ml-6">
                    <input id="" name="male" type="radio"
                      class="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600">
                    <label for="" class="block text-sm font-medium leading-6 text-gray-900">Male</label>
                    <input id="" name="female" type="radio"
                      class="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600">
                    <label for="" class="block text-sm font-medium leading-6 text-gray-900">Female</label>
                  </div>
                </div>

                <div class="mt-2 sm:col-span-6">
                  <label for="email" class="block text-sm font-medium leading-6 text-gray-900">Address :</label>
                  <div class="mt-2">
                    <input id="email" name="email" type="email" autocomplete="email"
                      class="block w-full rounded-md  py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
                  </div>
                </div>
                <div class="mt-2 sm:col-span-6">
                  <label for="email" class="block text-sm font-medium leading-6 text-gray-900">School :</label>
                  <div class="mt-2">
                    <input id="email" name="email" type="email" autocomplete="email"
                      class="block w-full rounded-md  py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
                  </div>
                </div>
                <div class="mt-2 sm:col-span-6">
                  <label for="email" class="block text-sm font-medium leading-6 text-gray-900">Email address :</label>
                  <div class="mt-2">
                    <input id="email" name="email" type="email" autocomplete="email"
                      class="block w-full rounded-md  py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>

        <div class="justify-end flex p-4 gap-4">
          <button @click="onSubmit" class="px-3 py-1 bg-green-500 text-white rounded-md cursor-pointer">Save</button>
          <button @click="onSubmit" class="px-2 py-1 bg-red-500 text-white rounded-md cursor-pointer">Cancel</button>
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
