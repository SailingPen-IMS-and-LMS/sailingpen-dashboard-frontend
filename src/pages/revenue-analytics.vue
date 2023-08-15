<script setup>

</script>

<template>
  <div class="rev-page-container">

    <div class="admin-rev-top grid grid-cols-3 gap-5 mb-6">

      <div class="classes-income admin-rev-top-card"></div>

      <div class="classes-wages admin-rev-top-card"></div>

      <div class="class-top-right
                  grid grid-cols-2 grid-rows-2 gap-3">

        <div class="new-reg-stu class-top-right--card"></div>
        <div class="not-payed-lst-3 class-top-right--card"></div>
        <div class="online-physical-payment class-top-right--card col-span-2"></div>

      </div>

    </div>

    <div class="admin-rev-btm grid grid-cols-2 gap-5 mb-15">

      <div class="income-summery admin-rev-btm--card">

      </div>

      <div class="student-participation admin-rev-btm--card">

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
}
.class-top-right--card{
  background-color: #ffffff;
  box-shadow: 0 0.25rem 1rem rgba(0, 0, 0, 0.1);
  height: 12rem;
  border-radius: 15px;
}
.admin-rev-btm--card{
  background-color: #ffffff;
  box-shadow: 0 0.25rem 1rem rgba(0, 0, 0, 0.1);
  height: 18rem;
  border-radius: 15px;

}
</style>
