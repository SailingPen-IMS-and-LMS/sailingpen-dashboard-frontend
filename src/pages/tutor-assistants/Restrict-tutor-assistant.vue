<template>
    <div class="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center">
      <div class="bg-white p-4 rounded-lg shadow-md w-100">
        <form class="flex flex-col">
          <h1 class="py-4 font-semibold text-center border-b-2 bg-red-500 text-white">Restrict The Tutor Assistant</h1>
          <div class="pt-8 ">
            <p>Assistant's Name : {{  }}</p>
            <p>Email: {{ }}</p>
            <p>Tutor Name: {{  }}</p>
            <p class="pt-8 font-bold text-center">Do You Want To Restrict This Tutor Assistant ?</p>
          </div>
          <div class="justify-center gap-4 flex p-4">
            <button @click="onSubmit" class="px-2 py-1 bg-red-500 text-white rounded-md cursor-pointer">Restrict</button>
            <button @click="onSubmit" class="px-2 py-1 bg-green-500 text-white rounded-md cursor-pointer">Back</button>
          </div>
        </form>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
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
  </script>
  
  <style lang="scss" scoped></style>