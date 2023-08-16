<template>
  <div class="container mx-auto p-2">
    <div class="flex items-center justify-between mb-8">
      <div>
        <h1 class="text-6 font-semibold">{{ selectedStudent.studentName }} Payment Details in {{ selectedYear }} - {{ months[selectedMonth-1] }}</h1>
      </div>
      <div class="flex gap-4 items-center">
        <label for="monthSelect" class="text-sm font-medium text-gray-700">Month:</label>
        <select id="monthSelect" v-model="selectedMonth" class="p-2 border rounded-md">
          <option v-for="(month, index) in months" :value="index + 1" :key="month">
            {{ month }}
          </option>
        </select>
        <label for="yearSelect" class="text-sm font-medium text-gray-700">Year:</label>
        <select id="yearSelect" v-model="selectedYear" class="p-2 border rounded-md">
          <option v-for="year in years" :value="year" :key="year">{{ year }}</option>
        </select>
      </div>
    </div>
    <div class="p-4">
      <table class="table-auto w-full">
        <thead>
          <tr>
            <th class="px-4 py-2">Class ID</th>
            <th class="px-4 py-2">Class Name</th>
            <th class="px-4 py-2">Class Fees</th>
            <th class="px-1 py-2">Paid</th>
            <th class="px-1 py-2">Not Paid</th>
            <th class="px-1 py-2">Excuse</th>
            <th class="px-1 py-2"></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(course, index) in selectedStudent.enrolledCourses" :key="index"
            :class="{ 'bg-[#EDF2F7]': index % 2 === 0, 'bg-white': index % 2 !== 0 }">
            <td class="px-4 py-2 justify-center">{{ course.classId }}</td>
            <td class="px-4 py-2 justify-center">{{ course.selectedCourse }}</td>
            <td class="px-4 py-2 justify-center">Rs. {{ course.courseFees }}</td>
            <td class="px-1 py-2">
              <div class="flex justify-center">
                <span v-if="course.paid" class="w-5 h-5 rounded-full bg-green-500"></span>
              </div>
            </td>
            <td class="px-1 py-2">
              <div class="flex justify-center">
                <span v-if="!course.paid" class="w-5 h-5 rounded-full bg-red-500"></span>
              </div>
            </td>
            <td class="px-1 py-2">
              <div class="flex justify-center">
                <span v-if="course.excuse" class="w-5 h-5 rounded-full bg-blue-500"></span>
              </div>
            </td>
            <td class="pl-2 px-1 py-2">
              <div class="flex justify-center w-6 px-3 py-1 text-3">
                <NButton style="height: 1.5rem;">PDF</NButton>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup>
import { NButton } from '@nethren-ui/vue';
import { ref, computed } from 'vue';

const selectedMonth = ref(1);
const selectedYear = ref(new Date().getFullYear());
const months = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December'
];
const years = Array.from({ length: 22 }, (_, index) => 2019 + index);

const selectedStudent = ref({
  studentName: 'John Doe',
  enrolledCourses: [
    {
      classId: "CLS005",
      selectedCourse: 'Ruwan Darshana',
      courseFees: '3000.00',
      paid: true,
      excuse: false,
    },
    {
      classId: "CLS002",
      selectedCourse: 'Nilantha Jayasuriya',
      courseFees: '2500.00',
      paid: false,
      excuse: false,
    },
    {
      classId: "CLS005",
      selectedCourse: 'Ruwan Darshana',
      courseFees: '3000.00',
      paid: false,
      excuse: true,
    },
    {
      classId: "CLS002",
      selectedCourse: 'Nilantha Jayasuriya',
      courseFees: '2500.00',
      paid: false,
      excuse: false,
    },
    // Add more courses as needed
  ],
});
</script>

<style>
/* You can customize styles here */
</style>
