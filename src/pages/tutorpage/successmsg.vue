<template>
    <div class="overlay">
      <div class="confirmation-box">
        <div class="message"></div>
       
          <button @click="onConfirm" class="button yes-button">Registration Successful!</button>
     

      </div>
    </div>
  </template>
  
  <script setup>
  import { useRouter } from 'vue-router';

const router = useRouter();

 const onConfirm = () => {
  
  // Handle confirmation logic here
  router.push('/tutorpage/leaderboard'); // Change this to your actual route
};


  </script>
  
  <style scoped>
  .overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(169, 169, 169, 0.5);
  /* Ash-colored semi-transparent overlay */
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999; /* Ensure the overlay appears above other content */
}

.confirmation-box {
  background-color: #fff;
  padding: 2rem;
  border-radius: 4px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.1);
  display: inline-block;
  text-align: center; /* Center-align the content */
}

.message {
  margin-bottom: 0.5rem; /* Reduced margin */
  padding: 1rem;
  font-weight: bold; /* Make the message bold */
  font-size: 1.2rem; /* Adjust font size */
}

.button-group {
  display: flex;
  justify-content: center; /* Center-align the button */
}

.yes-button {
  padding: 1rem 1rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  color: #fff;
  background-color: #4caf50; /* Green color */
  transition: background-color 0.3s ease; /* Add smooth transition */
}

.yes-button:hover {
  background-color: #45a049; /* Slightly darker green on hover */
}
  </style>
  