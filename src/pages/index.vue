<script setup lang="ts">
import { NButton } from '@nethren-ui/vue'
import { storeToRefs } from 'pinia'
import { useAuthStore } from '~/stores'

const authStore = useAuthStore()
const { userType } = storeToRefs(authStore)

const blogs = [
  {
    id: 1, title: 'Blog Post 1',
  },
  {
    id: 2, title: 'Blog Post 2',
  },
  {
    id: 3, title: 'Blog Post 3',
  },
  {
    id: 4, title: 'Blog Post 4',
  },
]

const announcements = [
  {
    id: 1, title: 'Announcement 1',
  },
  {
    id: 2, title: 'Announcement 2',
  },
  {
    id: 3, title: 'Announcement 3',
  },
  {
    id: 4, title: 'Announcement 4',
  },
]

const tutors = [
  {
    id: 1, name: 'Tutor 1',
  },
  {
    id: 2, name: 'Tutor 2',
  },
  {
    id: 3, name: 'Tutor 3',
  },
  {
    id: 4, name: 'Tutor 4',
  },
  {
    id: 5, name: 'Tutor 5',
  },

]

const staffs = [
  {
    id: 1, name: 'Staff 1',
  },
  {
    id: 2, name: 'Staff 2',
  },
  {
    id: 3, name: 'Staff 3',
  },
  {
    id: 4, name: 'Staff 4',
  },
  {
    id: 5, name: 'Staff 5',
  },

]

const students = [
  {
    id: 1, name: 'Student 1',
  },
  {
    id: 2, name: 'Student 2',
  },
  {
    id: 3, name: 'Student 3',
  },
  {
    id: 4, name: 'Student 4',
  },
  {
    id: 5, name: 'Student 5',
  },

]
</script>

<template>
  <template v-if="userType === 'admin'">
    <div class="admin-dash-top-row grid grid-cols-5 mb-5 mt-5 gap-6">
      <div class="no-of-tut admin-dash-top-row-card">
        <h3>No. of Tutors</h3>
        <span>13</span>
      </div>
      <div class="no-of-tut-assists admin-dash-top-row-card">
        <h3>No. of Tutor Assistants</h3>
        <span>25</span>
      </div>
      <div class="no-of-staff admin-dash-top-row-card">
        <h3>No. of Staff</h3>
        <span>9</span>
      </div>
      <div class="no-of-announce admin-dash-top-row-card">
        <h3>No. of Announcements</h3>
        <span>20</span>
      </div>
      <div class="no-of-posts admin-dash-top-row-card">
        <h3>No. of Blog Posts</h3>
        <span>22</span>
      </div>
    </div>

    <div class="admin-dash-middle-row grid grid-cols-3 mb-5 gap-6">
      <!-- participation count -->
      <div class="ongoing-classes admin-dash-middle-row-card">
        <div class="ongoing-classes-title flex justify-between">
          <h3> Class Participation </h3>
          <NButton color="info" style="border-radius: 15px ; height: 1.5rem">
            View All
          </NButton>
        </div>
        <div class="grid mt-2.5 justify-items-center">
          <img src="../../src/assets/images/class-part.png" alt="" class="h-8/9">
        </div>
      </div>

      <!-- Blog posts  -->
      <div class="blog-posts admin-dash-middle-row-card">
        <div class="blog-posts-title-classes-title flex justify-between">
          <h3> Blog Posts </h3>
          <NButton color="info" style="border-radius: 15px ; height: 1.5rem">
            View All
          </NButton>
        </div>
        <div v-for="blog in blogs" :key="blog.id" class="blog-card-cont mx-7">
          <div class="blog-card-cont-row">
            <span>{{ blog.title }}</span>
            <NButton mode="outline" style="border-radius: 5px ; height: 1.5rem">
              View
            </NButton>
          </div>
        </div>
      </div>

      <!-- announcements -->
      <div class="announcement-card admin-dash-middle-row-card">
        <div class="ongoing-classes-title flex justify-between">
          <h3> Announcements </h3>
          <NButton color="info" style="border-radius: 15px ; height: 1.5rem">
            View All
          </NButton>
        </div>
        <div v-for="announcement in announcements" :key="announcement.id" class="blog-card-cont mx-7">
          <div class="blog-card-cont-row">
            <span>{{ announcement.title }}</span>
            <NButton mode="outline" style="border-radius: 5px ; height: 1.5rem">
              View
            </NButton>
          </div>
        </div>
      </div>
    </div>

    <div class="admin-dash-bottom-row grid grid-cols-3 mb-10 gap-6">
      <!-- tutor details  -->
      <div class="tutor-details admin-dash-bottom-row-card">
        <div class="ongoing-classes-title flex justify-between">
          <h3> Tutors </h3>
          <NButton color="info" style="border-radius: 15px ; height: 1.5rem">
            View All
          </NButton>
        </div>
        <h4 class="mx-8 mb-1 text-sm text-gray-400">
          Name
        </h4>
        <div v-for="tutor in tutors" :key="tutor.id" class="blog-card-cont mx-7">
          <div class="blog-card-cont-row">
            <span>{{ tutor.name }}</span>
            <NButton mode="outline" style="border-radius: 5px ; height: 1.5rem">
              View
            </NButton>
          </div>
        </div>
      </div>

      <!-- Staff -->
      <div class="student-details admin-dash-bottom-row-card">
        <div class="ongoing-classes-title flex justify-between">
          <h3> Staff </h3>
          <NButton color="info" style="border-radius: 15px ; height: 1.5rem">
            View All
          </NButton>
        </div>
        <h4 class="mx-8 mb-1 text-sm text-gray-400">
          Name
        </h4>
        <div v-for="staff in staffs" :key="staff.id" class="blog-card-cont mx-7">
          <div class="blog-card-cont-row">
            <span>{{ staff.name }}</span>
            <NButton mode="outline" style="border-radius: 5px ; height: 1.5rem">
              View
            </NButton>
          </div>
        </div>
      </div>
      <div class="staff-details admin-dash-bottom-row-card">
        <div class="ongoing-classes-title flex justify-between">
          <h3> Student </h3>
          <NButton color="info" style="border-radius: 15px ; height: 1.5rem">
            View All
          </NButton>
        </div>
        <h4 class="mx-8 mb-1 text-sm text-gray-400">
          Name
        </h4>
        <div v-for="student in students" :key="student.id" class="blog-card-cont mx-7">
          <div class="blog-card-cont-row">
            <span>{{ student.name }}</span>
            <NButton mode="outline" style="border-radius: 5px ; height: 1.5rem">
              View
            </NButton>
          </div>
        </div>
      </div>
    </div>
  </template>
</template>

<style lang="scss" scoped>
.top-right-container{
  width: 250px;
  height: 250px;
  background-color: black;
  margin-left: 1.5rem;
  border-radius: 8px;
}

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
