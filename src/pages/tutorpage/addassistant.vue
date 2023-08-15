<template>
  <div>
    <FormComponent title="Invite New Tutor Assistant"
                   placeholder1="Tutor Assistant's Email"
                   placeholder2="Name"
                 
                   okbutton="Invite"
                 
                   >
    </FormComponent>
  </div>
</template>

<script setup>
import FormComponent from './form.vue'; // Update the path as needed


const submitForm = () => {
  // Perform form submission logic here
  FormComponent.onSubmit(); // Call the onSubmit function from FormComponent
};
// ... Other script setup ...
</script>

<style>
/* Page-specific styles */
</style>
