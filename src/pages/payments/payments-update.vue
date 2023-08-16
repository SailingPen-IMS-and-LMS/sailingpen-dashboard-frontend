<template>
  <div class="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center">
    <div class="bg-white p-4 rounded-lg shadow-md w-100">
      <form class="flex flex-col">
        <h1 class="py-4 font-semibold text-center border-b-2">Update Students Monthly Payment</h1>
        <div class="pt-8 ">
          <p>Student ID : {{ }}</p>
          <p>Student Name : {{ }}</p>
          <p>Month : {{ }}</p>
          <div>
            <p>Payment:</p>
            <div class="flex justify-center gap-4">
              <div>
                <input type="radio" name="payment-type" value="paid">
                <label class="pl-2">Paid</label>
              </div>
              <div>
                <input type="radio" name="payment-type" value="not_paid">
                <label class="pl-2">Not paid</label>
              </div>
              <div>
                <input type="radio" name="payment-type" value="excuse">
                <label class="pl-2">Excuse</label>
              </div>
            </div>
          </div>
          <p class="pt-8 font-bold text-center">Are You Sure To Conform? </p>
        </div>
        <div class="justify-center gap-4 flex p-4">
          <button @click="onSubmit" class="px-2 py-1 bg-red-500 text-white rounded-md cursor-pointer">Yes</button>
          <button @click="onSubmit" class="px-2 py-1 bg-green-500 text-white rounded-md cursor-pointer">No</button>
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

const paid = 'true';

const months = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December'
];

</script>

<style lang="scss" scoped></style>
