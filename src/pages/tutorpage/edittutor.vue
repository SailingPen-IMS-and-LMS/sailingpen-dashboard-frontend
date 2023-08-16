<template>
  <div class="overlay">
    <!-- <button class="close-button" >iii</button> -->
   
    <div class="form-box">
     <div class="top">

      <h1 class="heading">Edit Tutor Assistant Details  </h1>
     
     </div>
     
      
      <form @submit="onSubmit">
        <div class="form-group">
          <label for="email">Tutor Assistant's Email:</label>
       
          <input v-model="email" type="email" id="email" required class="input-field" />
        </div>
        <div class="form-group">
          <label for="tel">Tel No:</label>
          <input v-model="tel" type="tel" id="tel" required class="input-field" />
        </div>
        <div class="button-group">
          <button type="submit" class="button save-button">Save</button>
          <button @click="onRemove" class="button remove-button">Remove</button>
          
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const email = ref('');
const tel = ref('');
import { useRouter } from 'vue-router';

const router = useRouter();

const onSubmit = (event) => {
  event.preventDefault();
  // Handle form submission logic, e.g., save data
  console.log('Form submitted with:', email.value, tel.value);
  router.push('/tutorpage/successmsg'); // Change this to your actual route
};

const onRemove = () => {
  // Handle the remove logic here
  console.log('Remove button clicked');
  router.push('/tutorpage/deletetutor'); // Change this to your actual route
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
  padding: 3rem;
  border-radius: 4px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.1);
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
  background-color: #4CAF50; /* Green color */
}

.remove-button {
  background-color: #FF5733; /* Red color */
}


.close-button {
  position: absolute;
  top: 10px;
  right: 10px;
  background-color: transparent;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  color: #555;
  z-index: 10000;
}
</style>
