<template>
  <div class="overlay">
    <div class="form-box">
      <h1 class="heading">Invite New Tutor Assistant</h1>
      <form @submit="onSubmit">
        <div class="form-group">
          <label for="email">Tutor Assistant's Email:</label>
          <input v-model="email" type="email" id="email" required class="input-field" />
        </div>
        <div class="form-group">
          <label for="tel">Name</label>
          <input v-model="tel" type="tel" id="tel" required class="input-field" />
        </div>
        <div class="button-group">
       
          <button @click="onRemove" class="button remove-button">Cancel</button>
          <button type="submit" class="button save-button">Invite</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const email = ref('');
const tel = ref('');

const onSubmit = (event) => {
  event.preventDefault();
  // Handle form submission logic, e.g., save data
  console.log('Form submitted with:', email.value, tel.value);
};

const onRemove = () => {
  // Handle the remove logic here
  console.log('Remove button clicked');
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


.heading {
  font-weight: bold;
  padding-bottom: 1.7rem;
  padding-top: 0.5rem;
  
}
.form-box {
  background-color: #fff;
  padding: 1rem;
  border-radius: 4px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.1);
  padding: 3rem;
}

h2 {
  margin-bottom: 1rem;
}

.form-group {
  margin-bottom: 1rem;
}

.label {
  font-weight: bold;
}

.input-field {
  background-color: #f3f3f3;
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 100%;
}

.button-group {
  display: flex;
  justify-content: space-between;
}

.save-button,
.remove-button {
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  color: #fff;
}

.save-button {
  background-color: #6464cf; /* Green color */
}

.remove-button {
  background-color: #a8a7a7; /* Red color */
}
</style>
