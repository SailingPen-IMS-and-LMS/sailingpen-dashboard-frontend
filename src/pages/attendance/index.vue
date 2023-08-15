<template>
  <div class="container mx-auto p-2">
    <div class="flex justify-between mb-4">
      <div class="flex">
        <p class="text-6 font-semibold p-2">Students Attendance Sheet - {{ selectedYear }} {{ months[selectedMonth - 1] }}
        </p>
      </div>
      <div class="flex justify-end ">
        <NButton mode="solid" color="info" @click="showAttendanceChartModal">
          {{ months[selectedMonth - 1] }} Attendance Chart
        </NButton>
      </div>
      <div v-if="isAttendanceSheetModalVisible">
        <AttendanceSheetView @cancelForm="hideAttendanceChartModal" />
      </div>
    </div>
    <div class="mb-6 flex h-10 gap-3 mt-8">
      <div class="flex-4/6 border rounded-md px-2 flex items-center ">
        <MaterialSymbolsSearch class="mr-2" />
        <input id="search" type="text" name="search" placeholder="Search Here " class="w-full">
      </div>
      <div class="flex items-center justify-between gap-8 p-2 mb-5">
        <div class="flex gap-2 justify-end">
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
    </div>
    <div class="border-2 rounded-lg p-4">
      <table class="table-auto w-full ">
        <thead>
          <tr>
            <th class="px-4 py-2">Student ID</th>
            <th class="px-4 py-2">Student Name</th>
            <th class="px-4 py-2">Student Email</th>
            <th class="px-4 py-2">Class Name</th>
            <th class="px-4 py-2">Paid</th>
            <th v-for="(week, index) in weeks" :key="index" class="px-2 py-2 w-12 text-center">{{ week }}</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(student, studentIndex) in students" :key="studentIndex"
            :class="{ 'bg-gray-200': studentIndex % 2 === 0, 'bg-gray-100': studentIndex % 2 !== 0 }">
            <td class="  px-4 py-2">
              <div class="flex">
                <div>{{ student.studentId }}</div>
                <RouterLink to="/attendance/attendance-student-view">
                  <div class="p-0.5 ml-2" >
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
            <td class=" px-4 py-2 ">
              <div class="flex gap-2 justify-center">
                <input type="checkbox" v-model="student.paid" class="w-6 h-6">
              </div>
            </td>
            <td v-for="(week, index) in weeks" :key="index" class=" px-2 py-2 text-center">
              <span v-if="student.attendance[week]" :class="{
                'bg-green-500': student.attendance[week] === 'Present',
                'bg-red-500': student.attendance[week] === 'Absent',
              }" class="block w-4 h-4 mx-auto rounded"></span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup>
import { NButton } from '@nethren-ui/vue'
import AttendanceSheetView from './attendance-sheet-view.vue'
import GotoStudent from '~icons/material-symbols/arrow-circle-left-outline'

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
    studentId: 'ST001',
    studentName: 'John Doe',
    email: 'johndoe@example.com',
    selectedCourse: 'Ruwan Darshana',
    paid: true,
    paymentStatus: 'Paid',
    attendance: {
      'W1': 'Present',
      'W2': 'Absent',
      'W3': 'Absent',
      'W4': 'Present',
      'W5': 'Present',
    },
  },
  {
    studentId: 'ST002',
    studentName: 'Jane Smith',
    email: 'janesmith@example.com',
    selectedCourse: 'Nilantha Jayasuriya',
    paid: false,
    paymentStatus: 'Not Paid',
    attendance: {
      'W1': 'Absent',
      'W2': 'Absent',
      'W3': 'Absent',
      'W4': 'Absent',
      'W5': 'Absent',
    },
  },
  {
    studentId: 'ST003',
    studentName: 'Michael Johnson',
    email: 'michaeljohnson@example.com',
    selectedCourse: 'Charitha Dissanayake',
    paid: true,
    paymentStatus: 'Paid',
    attendance: {
      'W1': 'Present',
      'W2': 'Present',
      'W3': 'Absent',
      'W4': 'Present',
      'W5': 'Present',
    },
  },
  {
    studentId: 'ST004',
    studentName: 'Emily Brown',
    email: 'emilybrown@example.com',
    selectedCourse: 'Amila Kasthiri',
    paid: false,
    paymentStatus: 'Not Paid',
    attendance: {
      'W1': 'Absent',
      'W2': 'Absent',
      'W3': 'Present',
      'W4': 'Present',
      'W5': 'Absent',
    },
  },
  {
    studentId: 'ST005',
    studentName: 'William Davis',
    email: 'williamdavis@example.com',
    selectedCourse: 'Thimira Galahitiyawa',
    paid: true,
    paymentStatus: 'Paid',
    attendance: {
      'W1': 'Present',
      'W2': 'Present',
      'W3': 'Present',
      'W4': 'Present',
      'W5': 'Absent',
    },
  },
];




const isAttendanceSheetModalVisible = ref(false);

const showAttendanceChartModal = () => {
  isAttendanceSheetModalVisible.value = true;
};

const hideAttendanceChartModal = () => {
  isAttendanceSheetModalVisible.value = false;
};

</script>

<style>/* You can customize styles here */</style>
