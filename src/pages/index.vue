<template>
  <div class="index-page">
    <div class="left-side-container">
      <div class="top-left-container">
        <h2 class="font-semibold">
          My Classes
        </h2>

        <div class="flex gap-2">
          <VideoThumbnail />
          <VideoThumbnail />
          <VideoThumbnail />
        </div>
      </div>

      <div class="middle-left-container">
        <div>
          <h2 class="font-semibold">
            Pinned
          </h2>

          <div class="flex gap-2">
            <VideoThumbnail />
            <VideoThumbnail />
            <VideoThumbnail />
          </div>
        </div>
      </div>

      <div class="bottom-left-container">
        <h2 class="font-semibold">
          Your Progress
        </h2>

        <img src="../assets/images/placeholders/chart-1.jpg" alt="">
      </div>

      <div class="right-side-container">
        <div class="top-right-container">
          <h1 class="text-slate-300">
            Calendar
          </h1>
        </div>

        <div class="right-middle-container">
          <h1>Upcoming events</h1>
        </div>

        <div class="right-bottom-container">
          <h1>Your Achievements</h1>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.top-right-container{
  width: 250px;
  height: 250px;
  background-color: black;
  margin-left: 1.5rem;
  border-radius: 8px;
}
</style>
