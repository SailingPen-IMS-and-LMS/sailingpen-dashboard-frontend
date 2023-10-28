<script setup>
import AttendanceSheetView from './attendance-sheet-view.vue'
import GotoStudent from '~icons/material-symbols/arrow-circle-left-outline'

const selectedMonth = ref(1)
const selectedYear = ref(new Date().getFullYear())
const courses = ['Ruwan Darshana', 'Nilantha Jayasuriya', 'Charitha dissanayake', 'Amila Kasthiri', 'Thimira Galahitiyawa', 'Amila Nadeshani']
const months = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December',
]
const years = Array.from({ length: 22 }, (_, index) => 2019 + index)

const weeks = ['W1', 'W2', 'W3', 'W4', 'W5']

const students = [
  {
    studentId: 'ST001',
    studentName: 'John Doe',
    email: 'johndoe@example.com',
    selectedCourse: 'Ruwan Darshana',
    paid: true,
    paymentStatus: 'Paid',
    attendance: {
      W1: 'Present',
      W2: 'Absent',
      W3: 'Absent',
      W4: 'Present',
      W5: 'Present',
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
      W1: 'Absent',
      W2: 'Absent',
      W3: 'Absent',
      W4: 'Absent',
      W5: 'Absent',
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
      W1: 'Present',
      W2: 'Present',
      W3: 'Absent',
      W4: 'Present',
      W5: 'Present',
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
      W1: 'Absent',
      W2: 'Absent',
      W3: 'Present',
      W4: 'Present',
      W5: 'Absent',
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
      W1: 'Present',
      W2: 'Present',
      W3: 'Present',
      W4: 'Present',
      W5: 'Absent',
    },
  },
]

const isAttendanceSheetModalVisible = ref(false)

function showAttendanceChartModal() {
  isAttendanceSheetModalVisible.value = true
}

function hideAttendanceChartModal() {
  isAttendanceSheetModalVisible.value = false
}
</script>

<template>
  <div class="mx-auto p-2 container">
    <div class="mb-4 flex justify-between">
      <div class="flex">
        <p class="p-2 text-6 font-semibold">
          Students Attendance Sheet - {{ selectedYear }} {{ months[selectedMonth - 1] }}
        </p>
      </div>
      <!-- <div class="flex justify-end">
        <NButton mode="solid" color="info" @click="showAttendanceChartModal">
          {{ months[selectedMonth - 1] }} Attendance Chart
        </NButton>
      </div> -->
      <div v-if="isAttendanceSheetModalVisible">
        <AttendanceSheetView @cancelForm="hideAttendanceChartModal" />
      </div>
    </div>
    <div class="mb-6 mt-8 h-10 flex gap-3">
      <div class="flex flex-4/6 items-center border rounded-md px-2">
        <MaterialSymbolsSearch class="mr-2" />
        <input id="search" type="text" name="search" placeholder="Search Here " class="w-full">
      </div>
      <div class="mb-5 flex items-center justify-between gap-8 p-2">
        <div class="flex justify-end gap-2">
          <div>
            <label for="yearSelect" class="block text-sm font-medium text-gray-700">Year:</label>
            <select id="yearSelect" v-model="selectedYear" class="w-full border rounded-md p-2">
              <option v-for="year in years" :key="year" :value="year">
                {{ year }}
              </option>
            </select>
          </div>
          <div>
            <label for="monthSelect" class="block text-sm font-medium text-gray-700">Month:</label>
            <select id="monthSelect" v-model="selectedMonth" class="w-full border rounded-md p-2">
              <option v-for="(month, index) in months" :key="month" :value="index + 1">
                {{ month }}
              </option>
            </select>
          </div>
        </div>
      </div>
    </div>
    <div class="border-2 rounded-lg p-4">
      <table class="w-full table-auto">
        <thead>
          <tr>
            <th class="px-4 py-2">
              Student ID
            </th>
            <th class="px-4 py-2">
              Student Name
            </th>
            <th class="px-4 py-2">
              Student Email
            </th>
            <th class="px-4 py-2">
              Class Name
            </th>
            <th class="px-4 py-2">
              Paid
            </th>
            <th v-for="(week, index) in weeks" :key="index" class="w-12 px-2 py-2 text-center">
              {{ week }}
            </th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="(student, studentIndex) in students" :key="studentIndex"
            :class="{ 'bg-gray-200': studentIndex % 2 === 0, 'bg-gray-100': studentIndex % 2 !== 0 }"
          >
            <td class="px-4 py-2">
              <div class="flex">
                <div>{{ student.studentId }}</div>
                <RouterLink to="/students/attendance/attendance-student-view">
                  <div class="ml-2 p-0.5">
                    <GotoStudent />
                  </div>
                </RouterLink>
              </div>
            </td>
            <td class="px-4 py-2">
              {{ student.studentName }}
            </td>
            <td class="px-4 py-2">
              {{ student.email }}
            </td>
            <td class="px-4 py-2">
              <select v-model="student.selectedCourse" class="w-full rounded p-1">
                <option v-for="course in courses" :key="course" :value="course">
                  {{ course }}
                </option>
              </select>
            </td>
            <td class="px-4 py-2">
              <div class="flex justify-center gap-2">
                <input v-model="student.paid" type="checkbox" class="h-6 w-6">
              </div>
            </td>
            <td v-for="(week, index) in weeks" :key="index" class="px-2 py-2 text-center">
              <span
                v-if="student.attendance[week]" :class="{
                  'bg-green-500': student.attendance[week] === 'Present',
                  'bg-red-500': student.attendance[week] === 'Absent',
                }" class="mx-auto block h-4 w-4 rounded"
              />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<style>
/* You can customize styles here */
</style>
