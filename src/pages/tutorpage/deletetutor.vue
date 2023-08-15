<template>
    <div class="overlay">
      <div class="confirmation-box">
        <div class="message">Do you want to delete this tutor?</div>
        <div class="button-group">
          <button @click="onConfirm" class="button yes-button">Yes</button>
          <button @click="onCancel" class="button cancel-button">Cancel</button>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    methods: {
      onConfirm() {
        // Handle the confirmation logic here
        console.log("Tutor deleted");
        // Close the confirmation box or perform any other action
      },
      onCancel() {
        // Handle the cancel logic here
        console.log("Deletion canceled");
        // Close the confirmation box or perform any other action
      }
    }
  };
  </script>
  
  <style scoped>
  .overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(169, 169, 169, 0.5); /* Ash-colored semi-transparent overlay */
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 9999; /* Ensure the overlay appears above other content */
  }
  
  .confirmation-box {
    background-color: #fff;
    padding: 1rem;
    border-radius: 4px;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.1);
    display: inline-block;
  }
  
  .message {
    margin-bottom: 1rem;
  }
  
  .button-group {
    display: flex;
    justify-content: space-between;
  }
  
  .yes-button,
  .cancel-button {
    padding: 0.5rem 1rem;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    color: #fff;
  }
  
  .yes-button {
    background-color: #4CAF50; /* Green color */
  }
  
  .cancel-button {
    background-color: #FF5733; /* Red color */
  }
  </style>
  