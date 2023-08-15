<script setup>
import { ref } from 'vue';


import MaterialSymbolsFormatBold from '~icons/material-symbols/format-bold'

const userName = ref('');
const FName = ref('');
const LName = ref('');
const DOB = ref('');
const Email = ref('');
const Address = ref('');
const MobileNumber = ref('');
const Gender = ref('');
const JoinDate = ref('');
const avatar = ref('');
const qualification = ref('');
const bankName = ref('');
const accountName = ref('');
const accountNo = ref('');

const onSubmit = () => {
  // Handle form submission here (e.g., send data to the server)
  // Reset form fields after submission
  userName.value = '';
  FName.value = '';
  LName.value = '';
  DOB.value = '';
  Address.value = '';
  Email.value = '';
  Gender.value = '';
  MobileNumber.value = '';
  JoinDate.value = '';
  avatar.value ='';
  qualification.value ='';
  bankName.value ='';
  accountName.value ='';
  accountNo.value ='';

};

const showDropdown = ref(false);
const selectedOption = ref(null);

const isAttendanceModalVisible = ref(false);

const showAttendanceModal = () => {
  isAttendanceModalVisible.value = true;
}
const hideAttendanceModal = () => {
  isAttendanceModalVisible.value = true;
}


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
        <h1 class="py-4 font-semibold text-center text-5 border-b-2 mb-4 bg-green-500 text-white">Tutor Information</h1>
        <div>
          <hr>
          <h2 class="mt-2 text-base font-semibold leading-7 text-gray-900">Personal Information</h2>
          <div class="mb-2 grid grid-cols-1 gap-x-6 gap-y-6 sm:grid-cols-6 justify-center flex">
            <div class="">
              <div class="mt-2 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6 flex justify-center">
                <div class="h-70 w-70 flex items-center justify-center bg-gray-300 rounded-full overflow-hidden">
                  <img class="max-h-full max-w-full" src="/public/images/student_avatar.jpg" alt="Your Image"
                    aria-hidden="true">
                </div>
              </div>
            </div>
            <div class="border-t border-gray-100">
              <dl class="divide-y divide-gray-100 w-100">
                <div class="px-4 py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0 ">
                  <dt class="text-sm font-medium leading-6 text-gray-900 font-semibold pl-6">User Name :</dt>
                  <dd class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">NuwanP78</dd>
                </div>
                <div class="px-4 py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0 ">
                  <dt class="text-sm font-medium leading-6 text-gray-900 font-semibold pl-6">First name :</dt>
                  <dd class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">Nuwan</dd>
                </div>
                <div class="px-4 py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                  <dt class="text-sm font-medium leading-6 text-gray-900 font-semibold pl-6">Last Name :</dt>
                  <dd class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">Pradeep</dd>
                </div>
                <div class="px-4 py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                  <dt class="text-sm font-medium leading-6 text-gray-900 font-semibold pl-6">Gender :</dt>
                  <dd class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">Male</dd>
                </div>
                <div class="px-4 py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                  <dt class="text-sm font-medium leading-6 text-gray-900 font-semibold pl-6">Date Of Birth :</dt>
                  <dd class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">1989-04-21</dd>
                </div>
                <div class="px-4 py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                  <dt class="text-sm font-medium leading-6 text-gray-900 font-semibold pl-6">NIC No :</dt>
                  <dd class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">198908701604</dd>
                </div>
                <div class="px-4 py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                  <dt class="text-sm font-medium leading-6 text-gray-900 font-semibold pl-6">Address :</dt>
                  <dd class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">122/B , Borupana Road ,
                    Rathmalana
                  </dd>
                </div>
                <div class="px-4 py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                  <dt class="text-sm font-medium leading-6 text-gray-900 font-semibold pl-6">Mobile No :</dt>
                  <dd class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">077 9787945</dd>
                </div>
                <div class="px-4 py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                  <dt class="text-sm font-medium leading-6 text-gray-900 font-semibold pl-6">Email address :</dt>
                  <dd class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">NuwanPPradeep1999@example.com
                  </dd>
                </div>
                <div class="px-4 py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                  <dt class="text-sm font-medium leading-6 text-gray-900 font-semibold pl-6">Bank Details :</dt>
                  <dd class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">658958712 , BOC bank - Hanwella
                  </dd>
                </div>
                <div class="justify-center flex p-4 gap-3">
                  <button @click="onSubmit"
                    class="px-7 py-1 bg-[#5e5cba] text-white rounded-md cursor-pointer">Back</button>
                  <button @click="onSubmit"
                    class="px-7 py-2 bg-[#5e5cba] text-white rounded-lg cursor-pointer">View Profile</button>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </form>
    </div>

    <div v-if="isDeleteModalVisible">
      <ViewAttendance @cancelForm="hideAttendanceModal" />
    </div>

  </div>
</template>

<style lang="scss" scoped>
.toolbar-item {
  @apply p-1 m-1 border-2 flex justify-center;
}
</style>
