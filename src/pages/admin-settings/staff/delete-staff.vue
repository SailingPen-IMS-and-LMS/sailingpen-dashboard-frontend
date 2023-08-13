<template>
  <div class="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center">
    <div class="bg-white p-4 rounded-lg shadow-md w-100">
      <form class="flex flex-col">
        <h1 class="py-4 font-semibold text-center border-b-2">Remove Staff Member</h1>
        <div class="pt-8 ">
          <p>Staff Member Name : {{ }}</p>
          <p>Job Role : {{ }}</p>
          <p>Mobile No: {{ }}</p>
          <p class="pt-8 font-bold text-center">Do You Want To Remove This Staff Member ?</p>
        </div>
        <div class="justify-center gap-4 flex p-4">
          <button @click="onSubmit" class="px-2 py-1 bg-red-500 text-white rounded-md cursor-pointer">Remove</button>
          <button @click="onSubmit" class="px-2 py-1 bg-green-500 text-white rounded-md cursor-pointer">Back</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const FName = ref('');
const LName = ref('');
const DOB = ref('');
const Email = ref('');
const Address = ref('');
const MobileNumber = ref('');
const Gender = ref('');

const onSubmit = () => {
  // Handle form submission here (e.g., send data to the server)
  // Reset form fields after submission
  FName.value = '';
  LName.value = '';
  DOB.value = '';
  Address.value = '';
  Email.value = '';
  Gender.value = '';
  MobileNumber.value = '';

};

</script>

<style lang="scss" scoped></style>
