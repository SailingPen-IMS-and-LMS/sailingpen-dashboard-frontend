<script setup>
import { NButton } from '@nethren-ui/vue'
import AttendanceSheetView from './payments-sheet-view.vue'

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
    <div class="mb-4 mt-2 flex">
      <div class="mt-5 flex flex-4/6 items-center border rounded-md px-2">
        <MaterialSymbolsSearch class="mr-2" />
        <input id="search" type="text" name="search" placeholder="Search Here " class="w-full">
      </div>
      <div class="flex-1/4 justify-end">
        <div class="mt-5 flex justify-end pb-4">
          <NButton mode="solid" color="info" @click="showAttendanceChartModal">
            {{ months[selectedMonth - 1] }} payments Chart
          </NButton>
        </div>
        <div v-if="isAttendanceSheetModalVisible">
          <AttendanceSheetView @cancelForm="hideAttendanceChartModal" />
        </div>
      </div>
    </div>
    <div class="mb-8 flex items-center justify-between gap-8">
      <div class="flex-3/4">
        <p class="p-2 text-6 font-semibold">
          Students payments Sheet - {{ selectedYear }} {{ months[selectedMonth - 1] }}
        </p>
      </div>
      <div class="flex flex-2/6 justify-end gap-2">
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
            <th class="py-2">
              Paid
            </th>
            <th class="py-2">
              Not Paid
            </th>
            <th class="py-2">
              Excuse
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
              <div class="flex justify-center">
                <span v-if="student.paid" class="h-6 w-6 rounded-full bg-green-500" />
              </div>
            </td>
            <td class="px-4 py-2">
              <div class="flex justify-center">
                <span v-if="!student.paid" class="h-6 w-6 rounded-full bg-red-500" />
              </div>
            </td>
            <td class="px-4 py-2">
              <div class="flex justify-center">
                <span v-if="student.excuse" class="h-6 w-6 rounded-full bg-blue-500" />
              </div>
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
