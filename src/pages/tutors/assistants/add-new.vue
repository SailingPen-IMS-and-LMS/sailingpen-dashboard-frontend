<script setup>
import { ref } from 'vue'
import PageHeading from '~/components/common/PageHeading.vue'

const f_name = ref('')
const l_name = ref('')
const dob = ref('')
const email = ref('')
const address = ref('')
const contact_no = ref('')
const gender = ref('')
const school = ref('')
const nic = ref('')

function onSubmit() {
  // Handle form submission here (e.g., send data to the server)
  // Reset form fields after submission
  f_name.value = ''
  l_name.value = ''
  dob.value = ''
  address.value = ''
  email.value = ''
  gender.value = ''
  contact_no.value = ''
  school.value = ''
  nic.value = ''
}

const showDropdown = ref(false)
const selectedOption = ref(null)

function toggleDropdown() {
  showDropdown.value = !showDropdown.value
}

function selectOption(option) {
  selectedOption.value = option
}
</script>

<template>
  <div class="add-new-tutor-page">
    <PageHeading>Add a new assistant for tutors</PageHeading>
    <div class="my-6 w-full flex items-center justify-center">
      <div class="border-2 rounded-lg bg-white p-4 shadow-md">
        <form class="flex flex-col">
          <h2 class="text-6 font-semibold leading-7 text-gray-900">
            Profile
          </h2>
          <p class="text-m mt-1 leading-6 text-gray-600">
            This information will be displayed publicly so be careful
            what you share.
          </p>
          <form>
            <div class="mt-4 flex gap-12">
              <div class="">
                <div class="pb-2">
                  <div class="grid grid-cols-1 mt-2 flex justify-center gap-x-6 gap-y-8 sm:grid-cols-6">
                    <div class="col-span-full ml-6">
                      <div class="h-70 w-70 flex items-center justify-center overflow-hidden rounded-full bg-gray-300">
                        <img class="max-h-full max-w-full" src="/images/student_avatar.jpg" alt="Your Image" aria-hidden="true">
                      </div>
                      <div class="flex justify-center pt-4">
                        <button
                          type="button"
                          class="rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-gray-300 ring-inset hover:bg-gray-50"
                        >
                          Add
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div class="mt-2 pb-2">
                  <h2 class="text-base font-semibold leading-7 text-gray-900">
                    Personal Information
                  </h2>
                  <div class="grid grid-cols-1 mt-2 gap-x-6 gap-y-3 sm:grid-cols-6">
                    <div class="sm:col-span-3">
                      <label for="first-name" class="block text-sm font-medium leading-6 text-gray-900">First name :</label>
                      <div class="mt-2">
                        <input
                          id="first-name" type="text" name="first-name" autocomplete="given-name"
                          class="block w-full border-0 rounded-md py-1.5 text-gray-900 shadow-sm ring-1 ring-gray-300 ring-inset sm:text-sm sm:leading-6 placeholder:text-gray-400 focus:ring-2 focus:ring-indigo-600 focus:ring-inset"
                        >
                      </div>
                    </div>

                    <div class="sm:col-span-3">
                      <label for="last-name" class="block text-sm font-medium leading-6 text-gray-900">Last name :</label>
                      <div class="mt-2">
                        <input
                          id="last-name" type="text" name="last-name" autocomplete="family-name"
                          class="block w-full border-0 rounded-md py-1.5 text-gray-900 shadow-sm ring-1 ring-gray-300 ring-inset sm:text-sm sm:leading-6 placeholder:text-gray-400 focus:ring-2 focus:ring-indigo-600 focus:ring-inset"
                        >
                      </div>
                    </div>

                    <div class="sm:col-span-3">
                      <label for="first-name" class="block text-sm font-medium leading-6 text-gray-900">nic number :</label>
                      <div class="mt-2">
                        <input
                          id="first-name" type="text" name="first-name" autocomplete="given-name"
                          class="block w-full border-0 rounded-md py-1.5 text-gray-900 shadow-sm ring-1 ring-gray-300 ring-inset sm:text-sm sm:leading-6 placeholder:text-gray-400 focus:ring-2 focus:ring-indigo-600 focus:ring-inset"
                        >
                      </div>
                    </div>

                    <div class="sm:col-span-3">
                      <label for="last-name" class="block text-sm font-medium leading-6 text-gray-900">TelePhone No
                        :</label>
                      <div class="mt-2">
                        <input
                          id="last-name" type="text" name="last-name" autocomplete="family-name"
                          class="block w-full border-0 rounded-md py-1.5 text-gray-900 shadow-sm ring-1 ring-gray-300 ring-inset sm:text-sm sm:leading-6 placeholder:text-gray-400 focus:ring-2 focus:ring-indigo-600 focus:ring-inset"
                        >
                      </div>
                    </div>

                    <div class="sm:col-span-3">
                      <label for="last-name" class="block text-sm font-medium leading-6 text-gray-900">Date Of Birth
                        :</label>
                      <div class="mt-2">
                        <input
                          id="last-name" type="date" name="last-name" autocomplete="family-name"
                          class="block w-full border-0 rounded-md p-1 py-1.5 text-gray-900 shadow-sm ring-1 ring-gray-300 ring-inset sm:text-sm sm:leading-6 placeholder:text-gray-400 focus:ring-2 focus:ring-indigo-600 focus:ring-inset"
                        >
                      </div>
                    </div>

                    <div class="sm:col-span-3">
                      <label for="last-name" class="block text-sm font-medium leading-6 text-gray-900">gender :</label>
                      <div class="ml-6 mt-3 flex items-center gap-x-3">
                        <input
                          id="" name="male" type="radio"
                          class="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                        >
                        <label for="" class="block text-sm font-medium leading-6 text-gray-900">Male</label>
                        <input
                          id="" name="female" type="radio"
                          class="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                        >
                        <label for="" class="block text-sm font-medium leading-6 text-gray-900">Female</label>
                      </div>
                    </div>

                    <div class="mt-2 sm:col-span-6">
                      <label for="email" class="block text-sm font-medium leading-6 text-gray-900">address :</label>
                      <div class="mt-2">
                        <input
                          id="email" name="email" type="email" autocomplete="email"
                          class="block w-full rounded-md py-1.5 text-gray-900 shadow-sm ring-1 ring-gray-300 ring-inset sm:text-sm sm:leading-6 placeholder:text-gray-400 focus:ring-2 focus:ring-indigo-600 focus:ring-inset"
                        >
                      </div>
                    </div>
                    <div class="mt-2 sm:col-span-6">
                      <label for="email" class="block text-sm font-medium leading-6 text-gray-900">email address :</label>
                      <div class="mt-2">
                        <input
                          id="email" name="email" type="email" autocomplete="email"
                          class="block w-full rounded-md py-1.5 text-gray-900 shadow-sm ring-1 ring-gray-300 ring-inset sm:text-sm sm:leading-6 placeholder:text-gray-400 focus:ring-2 focus:ring-indigo-600 focus:ring-inset"
                        >
                      </div>
                    </div>
                    <div class="mt-2 sm:col-span-6">
                      <label for="email" class="block text-sm font-medium leading-6 text-gray-900">Bank Name :</label>
                      <div class="mt-2">
                        <input
                          id="email" name="email" type="email" autocomplete="email"
                          class="block w-full rounded-md py-1.5 text-gray-900 shadow-sm ring-1 ring-gray-300 ring-inset sm:text-sm sm:leading-6 placeholder:text-gray-400 focus:ring-2 focus:ring-indigo-600 focus:ring-inset"
                        >
                      </div>
                    </div>
                    <div class="mt-2 sm:col-span-6">
                      <label for="email" class="block text-sm font-medium leading-6 text-gray-900">Account No :</label>
                      <div class="mt-2">
                        <input
                          id="email" name="email" type="email" autocomplete="email"
                          class="block w-full rounded-md py-1.5 text-gray-900 shadow-sm ring-1 ring-gray-300 ring-inset sm:text-sm sm:leading-6 placeholder:text-gray-400 focus:ring-2 focus:ring-indigo-600 focus:ring-inset"
                        >
                      </div>
                    </div>
                    <div class="mt-2 sm:col-span-6">
                      <label for="email" class="block text-sm font-medium leading-6 text-gray-900">Branch Name :</label>
                      <div class="mt-2">
                        <input
                          id="email" name="email" type="email" autocomplete="email"
                          class="block w-full rounded-md py-1.5 text-gray-900 shadow-sm ring-1 ring-gray-300 ring-inset sm:text-sm sm:leading-6 placeholder:text-gray-400 focus:ring-2 focus:ring-indigo-600 focus:ring-inset"
                        >
                      </div>
                    </div>
                    <div class="mt-2 sm:col-span-12">
                      <label for="email" class="block text-sm font-medium leading-6 text-gray-900">qualifications :</label>
                      <div class="mt-2">
                        <input
                          id="email" name="email" type="email" autocomplete="email"
                          class="block w-full rounded-md py-1.5 text-gray-900 shadow-sm ring-1 ring-gray-300 ring-inset sm:text-sm sm:leading-6 placeholder:text-gray-400 focus:ring-2 focus:ring-indigo-600 focus:ring-inset"
                        >
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>

          <div class="flex justify-end gap-4 p-4">
            <RouterLink to="/admin-settings/tutor">
              <button class="cursor-pointer rounded-md bg-green-500 px-3 py-1 text-white">
                Save
              </button>
            </RouterLink>
            <RouterLink to="/admin-settings/tutor">
              <button class="cursor-pointer rounded-md bg-red-500 px-2 py-1 text-white">
                Cancel
              </button>
            </RouterLink>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.toolbar-item {
  @apply p-1 m-1 border-2 flex justify-center;
}
</style>
