<template>

  <div class="modal-overlay">
    <div class="modal">
      <!-- Modal content (your form) goes here -->
      <!-- For simplicity, I'm just showing the input fields -->
      <form class="blog-form">
        <h1 class="name">Add new Blog Post</h1>
        <input v-model="blogName" type="text" placeholder="Blog name" class="form-input" />
        <input v-model="className" type="text" placeholder="Class name" class="form-input" />
        <input v-model="date" type="date" class="form-input" />
        <textarea v-model="postBody" placeholder="Post body" class="form-textarea"></textarea>
        <button @click="onSubmit" class="button submit-button">Post</button>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const blogName = ref('');
const className = ref('');
const date = ref('');
const postBody = ref('');

const onSubmit = () => {
  // Handle form submission here (e.g., send data to the server)
  // Reset form fields after submission
  blogName.value = '';
  className.value = '';
  date.value = '';
  postBody.value = '';
};
</script>

<style lang="scss" scoped>
.name{

    padding-top: 1rem;
    padding-bottom: 1rem;
    font-weight: 600;

}
.modal-overlay {
  /* Your styles for the modal overlay, e.g., gray background and centering */
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5); /* Semi-transparent black overlay */
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal {
  /* Your styles for the modal container, e.g., white background and padding */
  background-color: #fff;
  padding: 1rem;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
}

.blog-form {
  /* Your styles for the form inside the modal */
  display: flex;
  flex-direction: column;
}

.form-input,
.form-textarea {
  /* Your styles for the form input fields */
  margin-bottom: 1rem;
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.submit-button {
  /* Your styles for the submit button */
  padding: 0.5rem 1rem;
  background-color: #5e5cba;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

/* Optional: Add focus styles for form elements */
.form-input:focus,
.form-textarea:focus,
.submit-button:focus {
  outline: none;
  box-shadow: 0 0 0 2px #5e5cba;
}
</style>
