<template>
  <div>
<h1>This is dashboard page</h1>
  </div>

  <div class="admin-dash-top-row grid grid-cols-5 gap-4 mt-5 mb-5">
    <div class="no-of-tut admin-dash-top-row-card">
       <h3>No. of Tutors</h3>
       <span>10</span>
    </div>
    <div class="no-of-tut-assists admin-dash-top-row-card">
      <h3>No. of Tutor Assistants</h3>
      <span>10</span>
    </div>
    <div class="no-of-staff admin-dash-top-row-card">
      <h3>No. of Staff</h3>
      <span>10</span>
    </div>
    <div class="no-of-announce  admin-dash-top-row-card">
      <h3>No. of Announcements</h3>
      <span>10</span>
    </div>
    <div class="no-of-posts admin-dash-top-row-card">
      <h3>No. of Blog Posts</h3>
      <span>10</span>
    </div>
  </div>

  <div class="admin-dash-middle-row grid grid-cols-3 gap-4 mb-5">
    <div class="ongoing-classes admin-dash-middle-row-card">
      classes ongoing
    </div>
    <div class="blog-posts admin-dash-middle-row-card">
      Blog posts
    </div>
    <div class="announcement-card admin-dash-middle-row-card">
      Announcements
    </div>
  </div>

  <div class="admin-dash-bottom-row grid grid-cols-3 gap-4 mb-10">
    <div class="tutor-details admin-dash-bottom-row-card">
      Tutors
    </div>
    <div class="student-details admin-dash-bottom-row-card">
      Students
    </div>
    <div class="staff-details admin-dash-bottom-row-card">
      Staff
    </div>
  </div>


</template>

<script setup>

</script>

<style lang="scss" scoped>

.admin-dash-top-row-card{
  background-color: red;
  height: 8rem;
  border-radius: 15px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;


}

.admin-dash-middle-row-card{
  background-color: yellow;
  height: 12rem;
  border-radius: 15px;
  padding: 5px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

}

.admin-dash-bottom-row-card{
  background-color: green;
  height: 20rem;
  border-radius: 15px;
  padding: 5px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

}

</style>
