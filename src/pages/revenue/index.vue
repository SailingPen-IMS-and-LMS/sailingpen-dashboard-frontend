<script setup lang="ts">
import { NButton } from '@nethren-ui/vue'

const classes = [
  {
    id: 1, title: '2024 CM Ruwan Darshana',
  },
  {
    id: 2, title: '2023 CM Ruwan Darshana',
  },
  {
    id: 3, title: '2024 PHY Nilantha Jayasooriya',
  },
  {
    id: 4, title: '2025 CHE Prasanna Withana',
  },
  {
    id: 5, title: '2024 CM Bhanuka Darshana',
  },
  {
    id: 6, title: '2023 CHE Jeewaka Aponsu',
  },
  {
    id: 7, title: '2024 PHY Samitha Rathnayake',
  },
]

const tutors = [
  {
    id: 1, title: 'Ruwan Darshana',
  },
  {
    id: 2, title: 'Amila Patabandige',
  },
  {
    id: 3, title: 'Nilantha Jayasooriya',
  },
  {
    id: 4, title: 'Prasanna Withana',
  },
  {
    id: 5, title: 'Samitha Rathnayeke',
  },
  {
    id: 6, title: 'Jeewaka Aponsu',
  },
  {
    id: 7, title: 'Bhanuka Darshana',
  },
]
</script>

<template>
  <div class="rev-page-container">
    <div class="admin-rev-top grid grid-cols-3 mb-6 gap-5">
      <div class="classes-income admin-rev-top-card">
        <div class="card-title flex justify-between">
          <h3> Class Income </h3>
          <NButton color="info" style="border-radius: 15px ; height: 1.5rem">
            View All
          </NButton>
        </div>
        <h4 class="mx-1 mb-1 text-sm text-gray-400">
          Name
        </h4>
        <div v-for="cls in classes" :key="cls.id" class="rev-card-cont">
          <div class="card-cont-row">
            <span>{{ cls.title }}</span>
            <NButton mode="outline" style="border-radius: 5px ; height: 1.5rem">
              View
            </NButton>
          </div>
        </div>
      </div>

      <div class="classes-wages admin-rev-top-card">
        <div class="card-title flex justify-between">
          <h3> Tutor Payments </h3>
          <NButton color="info" style="border-radius: 15px ; height: 1.5rem">
            View All
          </NButton>
        </div>
        <h4 class="mx-1 mb-1 text-sm text-gray-400">
          Name
        </h4>
        <div v-for="tutor in tutors" :key="tutor.id" class="rev-card-cont">
          <div class="card-cont-row">
            <span>{{ tutor.title }}</span>
            <NButton mode="outline" style="border-radius: 5px ; height: 1.5rem">
              View
            </NButton>
          </div>
        </div>
      </div>

      <div
        class="class-top-right grid grid-cols-2 grid-rows-2 gap-3"
      >
        <div class="new-reg-stu class-top-right--card">
          <h3>New Registrations</h3>
          <span>25</span>
        </div>
        <div class="not-payed-lst-3 class-top-right--card">
          <h3>Deactivated Accounts</h3>
          <span class="text-red-600" style="color: rgb(220 38 38);">
            12
          </span>
        </div>
        <div class="online-physical-payment class-top-right--card col-span-2">
          <h3>Total Payments</h3>
          <div class="flex justify-center">
            <img src="../../assets/images/pie.png" alt="" class=" " style="height: 90%; width: 60%;">
          </div>
        </div>
      </div>
    </div>

    <div class="admin-rev-btm grid grid-cols-2 mb-15 gap-5">
      <div class="income-summery admin-rev-btm--card">
        <h3>Income Summery</h3>
        <div class="flex justify-center">
          <img src="../../assets/images/income-sum.png" alt="" class=" ">
        </div>
      </div>

      <div class="student-participation admin-rev-btm--card">
        <h3>Payment Inflow</h3>
        <div class="flex justify-center">
          <img src="../..//assets/images/income-flow.png" alt="" class=" " style="height: 80%; width: 80%;">
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.admin-rev-top-card{
  background-color: #ffffff;
  box-shadow: 0 0.25rem 1rem rgba(0, 0, 0, 0.1);
  height: 25rem;
  border-radius: 15px;
  padding: 1rem;
}
.class-top-right--card{
  background-color: #ffffff;
  box-shadow: 0 0.25rem 1rem rgba(0, 0, 0, 0.1);
  height: 12rem;
  border-radius: 15px;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  // align-items: center;
  justify-content: center;
  text-align: center;

    span{
    font-size: 2.5rem;
    font-weight: bold;
    color:#5e5cba;
  }
  h3{
    height: 3rem;
  }

}

.admin-rev-btm--card{
  background-color: #ffffff;
  box-shadow: 0 0.25rem 1rem rgba(0, 0, 0, 0.1);
  height: 18rem;
  border-radius: 15px;
  padding: 1rem;

}

.card-cont-row{
  display: flex;
  justify-content: space-between;
  padding: 6px;
  margin-bottom: 6px;
  border-bottom: solid #c4c4c442;
}

h3{
    font-weight: 600;
    margin-bottom: .5em;

  }
</style>
