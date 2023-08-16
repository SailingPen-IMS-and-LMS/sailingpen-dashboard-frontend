<script setup lag="ts">
import { NButton } from '@nethren-ui/vue'

const classes = [
  {
    id: 1, title: "2022/2023 AL Physics",
  },
  {
    id: 2, title: "2022/2023 AL Physics Paper",
  },
  {
    id: 3, title: "2023/2024 AL Physics",
  },
  {
    id: 4, title: "2023/2024 AL Physics Paper"
  }
]

const announcements = [
  {
    id: 1, title: "Announcement 1",
  },
  {
    id: 2, title: "Announcement 2",
  },
  {
    id: 3, title: "Announcement 3",
  },
  {
    id: 4, title: "Announcement 4"
  }
]

const tutorassistants = [
  {
    id: 1, name: "Tutor Assistant 1",
  },
  {
    id: 2, name: "Tutor Assistant 2",
  },
  {
    id: 3, name: "Tutor Assistant 3",
  },
  {
    id: 4, name: "Tutor Assistant 4",
  },
  {
    id: 5, name: "Tutor Assistant 5",
  }

]

const classR = [
  {
    id: 1, name: "2022/2023 AL Physics",
  },
  {
    id: 2, name: "2022/2023 AL Physics Paper",
  },
  {
    id: 3, name: "2023/2024 AL Physics",
  },
  {
    id: 4, name: "2022/2023 AL Physics Paper"
  },
  {
    id: 5, name: "Class 5",
  }

]





</script>

<template>

  <div class="admin-dash-top-row grid grid-cols-5 gap-6 mt-5 mb-5">
    <div class="no-of-tut admin-dash-top-row-card">
       <h3>Classes</h3>
       <span>10</span>
    </div>
    <div class="no-of-tut-assists admin-dash-top-row-card">
      <h3>Total Students</h3>
      <span>1000</span>
    </div>

    <div class="no-of-posts admin-dash-top-row-card">
      <h3>Monthly Revenue (all)</h3>
      <span>600000LKR</span>
    </div>
    <div class="no-of-staff admin-dash-top-row-card">
      <h3>Tutor Assistants (all)</h3>
      <span>9</span>
    </div>
    <div class="no-of-announce  admin-dash-top-row-card">
      <h3>Announcements</h3>
      <span>20</span>
    </div>
  </div>

  <div class="admin-dash-middle-row grid grid-cols-3 gap-6 mb-5">

   <!-- participation count -->
    <div class="ongoing-classes admin-dash-middle-row-card overflow-y-auto">
      <div class="ongoing-classes-title flex justify-between">
        <h3> Class Participation </h3>
        <NButton color="info" style="border-radius: 15px ; height: 1.5rem">View All</NButton>
      </div>
      <div class="grid justify-items-center mt-2.5 ">
        <img src="../../src/assets/images/class-part.png" alt="" class="h-8/9">
      </div>
    </div>

    <!-- classes  -->
    <div class="blog-posts admin-dash-middle-row-card overflow-y-auto">
      <div class="blog-posts-title-classes-title flex justify-between">
        <h3> My Classes </h3>
        <NButton color="info" style="border-radius: 15px ; height: 1.5rem">View All</NButton>
      </div>
      <div class="blog-card-cont mx-7" v-for="classes in classes" :key="classes.id">
        <div class="blog-card-cont-row">
          <span>{{ classes.title }}</span>
          <NButton  mode="outline" style="border-radius: 5px ; height: 1.5rem">View</NButton>
        </div>
      </div>

    </div>

    <!-- announcements -->
    <div class="announcement-card admin-dash-middle-row-card overflow-y-auto">
      <div class="ongoing-classes-title flex justify-between">
        <h3> Announcements </h3>
        <NButton color="info" style="border-radius: 15px ; height: 1.5rem">View All</NButton>
      </div>
      <div class="blog-card-cont mx-7" v-for="announcement in announcements" :key="announcement.id">
        <div class="blog-card-cont-row">
          <span>{{ announcement.title }}</span>
          <NButton  mode="outline" style="border-radius: 5px ; height: 1.5rem">View</NButton>
        </div>
      </div>
    </div>
  </div>

  <div class="admin-dash-bottom-row grid grid-cols-3 gap-6 mb-10">

<!-- tutor assistant details  -->
    <div class="tutor-details admin-dash-bottom-row-card overflow-y-auto">

      <div class="ongoing-classes-title flex justify-between">
        <h3> Tutors Assistants </h3>
        <NButton color="info" style="border-radius: 15px ; height: 1.5rem">View All</NButton>
      </div>
        <h4 class="mx-8 mb-1 text-sm text-gray-400">Name</h4>
      <div class="blog-card-cont mx-7" v-for="tutorassistants in tutorassistants" :key="tutorassistants.id">
        <div class="blog-card-cont-row">
          <span>{{ tutorassistants.name }}</span>
          <NButton  mode="outline" style="border-radius: 5px ; height: 1.5rem">View</NButton>
        </div>
      </div>

    </div>

    <!-- revenue -->
    <div class="student-details admin-dash-bottom-row-card overflow-y-auto">

      <div class="ongoing-classes-title flex justify-between">
        <h3> Class Revenue </h3>
        <NButton color="info" style="border-radius: 15px ; height: 1.5rem">View All</NButton>
      </div>
        <h4 class="mx-8 mb-1 text-sm text-gray-400">LKR</h4>
      <div class="blog-card-cont mx-7" v-for="classR in classR" :key="classR.id">
        <div class="blog-card-cont-row">
          <span>{{ classR.name }}</span>
          <NButton  mode="outline" style="border-radius: 5px ; height: 1.5rem">10000</NButton>
        </div>
      </div>

    </div>
    <div class="staff-details admin-dash-bottom-row-card overflow-y-auto bg-white">
      <img src="../../public/images/dashboard.png" alt="" class="h-8/9">
      
    </div>
  </div>


</template>



<style lang="scss" scoped>

.admin-dash-top-row-card{
  // background-color: #f2f2f2 ;
    background-color: #ffffff;
    box-shadow: 0 0.25rem 1rem rgba(0, 0, 0, 0.1);
  height: 7rem;
  border-radius: 15px;
  // padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;


  span{
    font-size: 2.5rem;
    font-weight: bold;
    color:#5e5cba;
  }

  h3{
    font-weight: 600;
    margin-bottom: .5em;

  }


}

.admin-dash-middle-row-card{
  // background-color: #f2f2f2;
  background-color: #ffffff;
  box-shadow: 0 0.25rem 1rem rgba(0, 0, 0, 0.1);
  height: 15rem;
  border-radius: 15px;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  // justify-content: center;
  // align-items: center;

  h3{
    font-weight: 600;
    margin-bottom: .5em;

  }
}

.admin-dash-bottom-row-card{
  // background-color:#f2f2f2;
  background-color: #ffffff;
  box-shadow: 0 0.25rem 1rem rgba(0, 0, 0, 0.1);
  height: 20rem;
  border-radius: 15px;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  // justify-content: center;
  // align-items: center;

  h3{
    font-weight: 600;
    margin-bottom: .5em;

  }

}

.blog-card-cont-row{
  display: flex;
  justify-content: space-between;
  padding: 6px;
  margin-bottom: 6px;
  border-bottom: solid #c4c4c442;
}

</style>