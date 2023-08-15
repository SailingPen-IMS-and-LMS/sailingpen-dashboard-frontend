<template>
    <div class="">

      <div class="col-sm-10 offset-sm-1">
       
      
     
        <div id="">
          <div class="flip-card">
            <div class="flip-card-inner">
              <div class="flip-card-front">
                <h2>Card 1 Front</h2>
              </div>
              <div class="flip-card-back">
                <p>Card 2 Back</p>
              </div>
            </div>
          </div>

      
        
  


        </div> 
  
       
        <br />
        <div id="card-container2">
          <div class="flip-card-click">
            <div class="flip-card-inner">
              <div class="flip-card-front">
                <h2>Card 1 Front</h2>
              </div>
              <div class="flip-card-back">
                <p>Card 1 Back</p>
              </div>
            </div>
          </div>
  
          <!-- Add more flip-card-click elements here for Card 2 and Card 3... -->
        </div> <!-- end of container -->
      </div>
    </div>

    <div class="flip-card">
            <div class="flip-card-inner">
              <div class="flip-card-front">
                <h2>Card 2 Front</h2>
              </div>
              <div class="flip-card-back">
                <p>Card 2 Back</p>
              </div>
            </div>
            </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue';
  
  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    return array;
  };
  
  const shuffle = (id) => {
    const container = document.getElementById(id);
    const cardClass = container.querySelector('.flip-card-inner').className;
    const elementsArray = Array.from(container.getElementsByClassName(cardClass));
    elementsArray.forEach((element) => {
      container.removeChild(element);
    });
    shuffleArray(elementsArray);
    elementsArray.forEach((element) => {
      container.appendChild(element);
    });
  };
  
  onMounted(() => {
    const flipCardClickInnerEls = document.querySelectorAll('.flip-card-click .flip-card-inner');
    flipCardClickInnerEls.forEach((item) => {
      item.addEventListener('keypress', (evt) => {
        if (evt.keyCode === 13 || evt.keyCode === 32) {
          item.click();
        }
      });
    });
  
    const flipCardClickEls = document.querySelectorAll('.flip-card-click');
    flipCardClickEls.forEach((item) => {
      item.addEventListener('click', function () {
        this.classList.toggle('flipped');
      });
    });
  });
  </script>
  
  <style scoped>
  /* ... Your existing CSS ... */
  .flip-card, .flip-card-click {
  display: inline-block;
    background-color: transparent;
    width: 300px;
    height: 300px;
    margin-right: 12px;
    margin-bottom: 12px;
    border: 1px solid #f1f1f1;
    perspective: 1000px;
  }
  .flip-card-inner {
    position: relative;
    width: 100%;
    height: 100%;
    text-align: center;
    transition: transform 0.8s;
    transform-style: preserve-3d;
  }
  .flip-card:hover .flip-card-inner,
  .flip-card:focus .flip-card-inner,
  .flip-card:focus-within .flip-card-inner,
  .flip-card:active .flip-card-inner,
  .flip-card-click:focus .flip-card-inner,
  .flip-card-click:active .flip-card-inner,
  .flip-card-click.flipped .flip-card-inner {
    transform: rotateY(180deg);
  }
  .flip-card-inner:focus {
    outline: 5px solid #03c23c;
    cursor: pointer;
  }
  .flip-card-inner:hover {
    outline: 5px solid #0336c2;
    cursor: pointer;
  }
  .flip-card-front, .flip-card-back {
    position: absolute;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    -webkit-backface-visibility: hidden; /* Safari */
    backface-visibility: hidden;
  }
  .flip-card-front h2 {
      color: white;
      font-size: 16pt;
      font-weight: 500;
      padding: 10px;
    }
  .flip-card-front p, .flip-card-back p {
    padding: 10px;
    font-size: 16pt;
    color: white;
  }
  .flip-card-front {
    background-color: #18453b;
  }
  .flip-card-back {
    background-color: #008183;
    transform: rotateY(180deg);
  }
  </style>
  