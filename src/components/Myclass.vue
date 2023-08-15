<template>
<div class="continue-watch-video min-h-[20%] bg-black/50 flex flex-col">
                            <div class="overlay-card flex flex-row items-center">
                              <p class="pl-3.5 py-2.5 pr-2 mx-px">2022 Physics Theory</p>
                              <div class="flex items-center">
                              <CharmChevronsRight class="ml-6 my--1"></CharmChevronsRight> </div>
                            </div>
                        </div>
</template>

<style scoped lang="scss">
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
    
    .overlay-card {
      position: absolute;
      width: 100%; /* 1/4 width of main card */
      height: 25%; /* 1/4 height of main card */
      background-color: rgba(255, 255, 255, 0.5); /* Transparent white */
      border-radius: 5px;
      top: 75%;
      left: 50%;
      transform: translateX(-50%);
      bottom: 0;
      
    
    }
</style>