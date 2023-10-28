<script setup lang="ts">
import { NButton } from '@nethren-ui/vue'
import PageHeading from '~/components/common/PageHeading.vue'
</script>

<template>
  <div class="lesson-packs-page">
    <div class="left-side-container">
      <div class="top-left-container">
        <PageHeading>
          Lesson packs
        </PageHeading>
        <div class="flex items-center justify-end">
          <NButton>+ new lesson pack</NButton>
        </div>

        <div class="flex gap-2">
          <VideoThumbnail />
          <VideoThumbnail />
          <VideoThumbnail />
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.default-sidebar{
  transition: all 300ms ease-in-out;
  background-color: var(--bg-primary);
  width: 225px;
grid-column: 1/2;
grid-row: 1/3;

display: flex;
flex-direction: column;
align-items: center;

img {
  width: 200px;
  height: 60px;
  margin-top: 1.5rem;

}

/* ul{
    display: flex;
    flex-direction: column;

  } */
}

.default-sidebar--close {
  width: 100px;

}

.navigation-bar{
  background-color: #f8f8f8;
  height: 100%;

}

.default-header{
  grid-column: 2/3;
  grid-row: 1/2;
  padding: 2rem;

}

.default-page-container{
  padding: 0 2rem;
}

.default-layout{
  overflow: hidden;
  height: 100vh;
  width: 100vw;
  display: grid;
  grid-template-columns: min-content 1fr;
  grid-template-rows: 80px 1fr;
  grid-column: 2/3;
  grid-row: 2/3;
}

.profile-picture{
  width: 50px;
  height: 50px;
  aspect-ratio: 1;
  border-radius: 50%;
}

.continue-watch-video{
  width: 320px;
  height: 180px;
  background-image: linear-gradient(to left, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(../assets/images/video-1.jpg);
  background-repeat: no-repeat;
  border-radius: 8px;
  background-position: center;
  background-size: cover;
  margin-block: 1rem;
  color: white;
  padding: 1rem 2rem;
  position: relative;

  svg{
    position: absolute;
    top: 60%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
}

.top-right-container{
  width: 250px;
  height: 250px;
  background-color: black;
  margin-left: 1.5rem;
  border-radius: 8px;
}

/* .top-left-container{
    // overflow-x: scroll;
    // width: 900px;
} */
</style>
