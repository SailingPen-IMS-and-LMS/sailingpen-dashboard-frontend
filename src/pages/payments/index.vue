<template>
  <div class="container mx-auto p-2">
    <div class="mt-2 mb-4 flex ">
      <div class="flex-4/6 border rounded-md px-2 mt-5 flex items-center">
        <MaterialSymbolsSearch class="mr-2" />
        <input id="search" type="text" name="search" placeholder="Search Here " class="w-full">
      </div>
      <div class="flex-1/4 justify-end">
        <div class="flex mt-5 justify-end pb-4">
          <NButton mode="solid" color="info" @click="showAttendanceChartModal">
            {{ months[selectedMonth - 1] }} payments Chart
          </NButton>
        </div>
        <div v-if="isAttendanceSheetModalVisible">
          <AttendanceSheetView @cancelForm="hideAttendanceChartModal" />
        </div>
      </div>
    </div>
    <div class="flex items-center justify-between gap-8 mb-8">
      <div class="flex-3/4">
        <p class="text-6 font-semibold p-2">Students payments Sheet - {{ selectedYear }} {{ months[selectedMonth - 1] }}
        </p>
      </div>
      <div class="flex-2/6 flex gap-2 justify-end">
        <div>
          <label for="yearSelect" class="block text-sm font-medium text-gray-700">Year:</label>
          <select id="yearSelect" v-model="selectedYear" class="p-2 w-full border rounded-md">
            <option v-for="year in years" :value="year" :key="year">{{ year }}</option>
          </select>
        </div>
        <div>
          <label for="monthSelect" class="block text-sm font-medium text-gray-700">Month:</label>
          <select id="monthSelect" v-model="selectedMonth" class="p-2 w-full border rounded-md">
            <option v-for="(month, index) in months" :value="index + 1" :key="month">
              {{ month }}
            </option>
          </select>
        </div>
      </div>
    </div>
    <div class="border-2 rounded-lg p-4">
      <table class="table-auto w-full ">
        <thead>
          <tr>
            <th class="px-4 py-2">Student ID</th>
            <th class="px-4 py-2">Student Name</th>
            <th class="px-4 py-2">Student Email</th>
            <th class="px-4 py-2">Class Name</th>
            <th class="py-2">Paid</th>
            <th class="py-2">Not Paid</th>
            <th class="py-2">Excuse </th>
            <th class="px-4 py-2">Mark Payments</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(student, studentIndex) in students" :key="studentIndex"
            :class="{ 'bg-gray-200': studentIndex % 2 === 0, 'bg-gray-100': studentIndex % 2 !== 0 }">
            <td class="  px-4 py-2">
              <div class="flex">
                <div>{{ student.studentId }}</div>
                <RouterLink to="/attendance/attendance-student-view">
                  <div class="p-0.5 ml-2">
                    <GotoStudent />
                  </div>
                </RouterLink>
              </div>
            </td>
            <td class="  px-4 py-2">{{ student.studentName }}</td>
            <td class="  px-4 py-2">{{ student.email }}</td>
            <td class="  px-4 py-2">
              <select v-model="student.selectedCourse" class="w-full  rounded p-1">
                <option v-for="course in courses" :value="course" :key="course">{{ course }}</option>
              </select>
            </td>
            <td class="px-4 py-2">
              <div class="flex justify-center">
                <span v-if="student.paid" class="w-6 h-6 rounded-full bg-green-500"></span>
              </div>
            </td>
            <td class="px-4 py-2">
              <div class="flex justify-center">
                <span v-if="!student.paid" class="w-6 h-6 rounded-full bg-red-500"></span>
              </div>
            </td>
            <td class="px-4 py-2">
              <div class="flex justify-center">
                <span v-if="student.excuse" class="w-6 h-6 rounded-full bg-blue-500"></span>
              </div>
            </td>
            <td>
              <div class="flex justify-center">
                <NButton class="shadow-sm" mode="solid" color="info" @click="showUpdateModal" style="height: 2rem;">
                  Update
                </NButton>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div v-if="isUpdateModalVisible">
      <PaymentUpdate @cancelForm="hideUpdateModal" />
    </div>
  </div>
</template>

<script setup>
import { NButton } from '@nethren-ui/vue'
import AttendanceSheetView from './payments-sheet-view.vue'


import PaymentUpdate from './payments-update.vue'

const selectedMonth = ref(1);
const selectedYear = ref(new Date().getFullYear());
const courses = ['Ruwan Darshana', 'Nilantha Jayasuriya', 'Charitha dissanayake', 'Amila Kasthiri', 'Thimira Galahitiyawa', 'Amila Nadeshani'];
const months = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December'
];
const years = Array.from({ length: 22 }, (_, index) => 2019 + index);

const weeks = ['W1', 'W2', 'W3', 'W4', 'W5'];

const students = [
  {
    studentId: 'ST0011',
    studentName: 'John Doe',
    email: 'johndoe7878@gmail.com',
    selectedCourse: 'Ruwan Darshana',
    paid: true,
    excuse: false,
  },
  {
    studentId: 'ST0012',
    studentName: 'Jane Smith',
    email: 'janesmith@gmail.com',
    selectedCourse: 'Nilantha Jayasuriya',
    paid: false,
    excuse: false,
  },
  {
    studentId: 'ST0013',
    studentName: 'Michael Johnson',
    email: 'michaeljohnson@gmail.com',
    selectedCourse: 'Charitha Dissanayake',
    paid: false,
    excuse: true,
  },
  {
    studentId: 'ST0014',
    studentName: 'Emily Brown',
    email: 'emilybrown@gmail.com',
    selectedCourse: 'Amila Kasthiri',
    paid: true,
    excuse: false,
  },
  {
    studentId: 'ST0015',
    studentName: 'William Davis',
    email: 'williamdavis@gmail.com',
    selectedCourse: 'Thimira Galahitiyawa',
    paid: false,
    excuse: false,
  },
];



const isAttendanceSheetModalVisible = ref(false);
const isUpdateModalVisible = ref(false);

const showAttendanceChartModal = () => {
  isAttendanceSheetModalVisible.value = true;
};

const hideAttendanceChartModal = () => {
  isAttendanceSheetModalVisible.value = false;
};

const showUpdateModal = () => {
  isUpdateModalVisible.value = true;
};

const hideUpdateModal = () => {
  isUpdateModalVisible.value = false;
};

</script>

<style>
/* You can customize styles here */
</style>
