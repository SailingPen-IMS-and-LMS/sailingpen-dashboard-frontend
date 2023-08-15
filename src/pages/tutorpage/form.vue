<template>
  <div class="modal-overlay">
  <form class="modal">
    <h1 class="name">{{ props.title }}</h1>
    <input v-model="input1" type="text" :placeholder="props.placeholder1" :class="{ 'form-input': true, 'invalid': !input1 }" />
<input v-model="input2" type="text" :placeholder="props.placeholder2" :class="{ 'form-input': true, 'invalid': !input2 }" />

<!-- ... Other form inputs ... -->
<button @click="onSubmit" class="button submit-button">{{ props.okbutton }}</button>
<button @click="onPressCancel" class="button cancel-button">{{ props.cancelbutton }}</button>

  </form>
  
  </div>
</template>

<script setup>
import { ref, defineProps } from 'vue';

const props = defineProps(['title', 'placeholder1', 'placeholder2', 'okbutton', 'cancelbutton']);

const input1 = ref('');
const input2 = ref('');
// ... Other input refs ...
const onSubmit = () => {
  if (!input1 || !input2) {
    // Set validation indicators for empty fields
    if (!input1) {
      input1.value = '';
      input1.classList.add('invalid');
    }
    if (!input2) {
      input2.value = '';
      input2.classList.add('invalid');
    }
    // ... Handle other fields ...
    return; // Prevent form submission
  }

  // Handle form submission here (e.g., send data to the server)
  // Reset form fields after submission
  input1.value = '';
  input2.value = '';
  // ... Reset other input fields ...
};

</script>

<style scoped>
/* Your shared component styles here */

.name {
  padding: 1rem 0;
  font-weight: 600;
}


.modal {
  background-color: #fff;
  padding: 3rem;
  border-radius: 8px;
  box-shadow: 0 3px 12px rgba(0, 0, 0, 0.15);
  display: flex;
  flex-direction: column;
  align-items: center;
}
.modal-overlay {
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

.form-input {
  margin-bottom: 1rem;
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 100%; /* Make the input fields stretch to full width */
}


/* Optional: Add focus styles for form elements */
.form-input:focus,
.submit-button:focus {
  outline: none;
  box-shadow: 0 0 0 2px #5e5cba;
}


.button-group {
  display: flex;
  justify-content: space-between;
  margin-top: 1rem;
}

.cancel-button,
.submit-button {
  padding: 0.5rem 2rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  color: #fff; /* Set text color to white */
}

.submit-button {
  background-color: #4CAF50; /* Green color */
}

.cancel-button {
  background-color: #FF5733; /* Red color */
}


/**********************/






</style>
