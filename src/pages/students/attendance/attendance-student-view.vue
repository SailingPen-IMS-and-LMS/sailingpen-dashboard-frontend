<template>
  <div class="container mx-auto ">
    <div class="justify-between flex ">
      <div class="mb-4">
        <p class="text-6 font-semibold p-2">Your Attendance in  {{ selectedYear }} </p>
      </div>
      <div class="mb-6 flex h-10 gap-3 mt-8 ">
        <div class="flex gap-3 w-full mr-4">
          <label for="yearSelect" class="block text-sm font-medium text-gray-700 p-3">Select Year :</label>
          <select id="yearSelect" v-model="selectedYear" class="p-2 w-20 border rounded-md">
            <option v-for="year in years" :value="year" :key="year">{{ year }}</option>
          </select>
        </div>
      </div>
    </div>
    <div class="border-2 rounded-lg p-4 grid grid-cols-4 gap-3 ">
      <div v-for="(month, index) in lastTwelveMonths" :key="index">
        <h3 class="text-lg font-semibold">{{ months[month - 1] }}</h3>
        <div class="grid grid-cols-5 gap-4 border-2 p-4 m-4 rounded-lg">
          <div v-for="(week, weekIndex) in weeks" :key="weekIndex" class="text-center">
            {{ week }}
            <span :class="{
              'bg-green-300': getAttendanceStatus(selectedYear, month, week) === 'Present',
              'bg-red-300': getAttendanceStatus(selectedYear, month, week) === 'Absent',
              'bg-blue-300': getAttendanceStatus(selectedYear, month, week) === 'not',
              'bg-gray-300': getAttendanceStatus(selectedYear, month, week) === '',
            }" class="block w-4 h-4 mx-auto rounded mt-1"></span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const selectedMonth = ref(12); // August
const selectedYear = ref(new Date().getFullYear());
const months = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December'
];
const years = Array.from({ length: 22 }, (_, index) => 2019 + index);

const weeks = ['W1', 'W2', 'W3', 'W4', 'W5'];

const attendance = { // Sample attendance data
  2023: {
    1: {
      'W1': 'not', 'W2': 'not', 'W3': 'not', 'W4': 'not', 'W5': 'not',
    },
    2: {
      'W1': 'not', 'W2': 'not', 'W3': 'not', 'W4': 'not', 'W5': 'not',
    },
    3: {
      'W1': 'Present', 'W2': 'Absent', 'W3': 'Absent', 'W4': 'Present', 'W5': 'Present',
    },
    4: {
      'W1': 'Present', 'W2': 'Absent', 'W3': 'Absent', 'W4': 'Present', 'W5': 'Present',
    },
    5: {
      'W1': 'Present', 'W2': 'Absent', 'W3': 'Absent', 'W4': 'Present', 'W5': 'Present',
    },
    6: {
      'W1': 'Present', 'W2': 'Absent', 'W3': 'Absent', 'W4': 'Present', 'W5': 'Present',
    },
    7: {
      'W1': 'Present', 'W2': 'Absent', 'W3': 'Absent', 'W4': 'Present', 'W5': 'Present',
    },
    8: {
      'W1': 'Present', 'W2': 'Absent', 'W3': '', 'W4': '', 'W5': '',
    },
    9: {
      'W1': '', 'W2': '', 'W3': '', 'W4': '', 'W5': '',
    },
    10: {
      'W1': '', 'W2': '', 'W3': '', 'W4': '', 'W5': '',
    },
    11: {
      'W1': '', 'W2': '', 'W3': '', 'W4': '', 'W5': '',
    },
    12: {
      'W1': '', 'W2': '', 'W3': '', 'W4': '', 'W5': '',
    },
  },
};

const viewFullYearAttendance = () => {
  // Logic to navigate to full year attendance page
};

const lastTwelveMonths = ref(Array.from({ length: 12 }, (_, index) => selectedMonth.value - index).reverse());

const getAttendanceStatus = (year, month, week) => {
  return attendance[year]?.[month]?.[week] || '';
};

const updateMonth = () => {
  lastSixMonths.value = Array.from({ length: 6 }, (_, index) => selectedMonth.value - index).reverse();
};

</script>

<style>
/* You can customize styles here */
</style>
