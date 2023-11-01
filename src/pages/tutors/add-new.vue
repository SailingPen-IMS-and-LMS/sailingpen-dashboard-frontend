<script setup lang="ts">
import { ref } from 'vue'
import { NButton, NInput } from '@nethren-ui/vue'
import PageHeading from '~/components/common/PageHeading.vue'
import { api } from '~/api'

const subjects = ref([
  {
    label: 'Combined Mathematics',
    subjectId: 'subject_762cf227-c280-45f8-baec-0380953d7a73',
  },
  {
    label: 'Physics',
    subjectId: 'subject_fe9748c4-e409-440d-9324-d026aa07aead',
  },
  {
    label: 'Chemistry',
    subjectId: 'subject_d95be18b-e4a3-4f8a-b9a7-b94376e4ba15',
  },
  {
    label: 'Biology',
    subjectId: 'subject_272a4e7c-bc6c-4dab-ad67-3e1fd755f536',
  },
])

const rawAvatar = ref('')
const avatarImageUri = ref('')

const newTutorFormData = ref({
  username: '',
  nic: '',
  f_name: '',
  l_name: '',
  email: '',
  password: '',
  confirm_password: '',
  dob: '',
  address: '',
  contact_no: '',
  avatar: null as File | null,
  qualifications: [] as string[],
  subject_id: '',
  bank_name: '',
  branch_name: '',
  account_no: '',
})
const rawQualifications = ref('')

watch(rawQualifications, (value) => {
  newTutorFormData.value.qualifications = value.split(',')
})

watch(rawAvatar, (value) => {
  newTutorFormData.value.avatar = null
  avatarImageUri.value = value
})

function onProfilePictureChange(event: Event) {
  const target = event.target as HTMLInputElement
  if (target.files) {
    const files = target.files as FileList
    const file = files[0]
    newTutorFormData.value.avatar = file
    const fileReader = new FileReader()
    fileReader.onload = () => {
      avatarImageUri.value = fileReader.result as string
    }
    fileReader.readAsDataURL(file)
  }
}

const loading = ref(false)
const router = useRouter()

async function onNewRegisterFormData() {
  loading.value = true
  try {
    // if any property is not set, don't allow to submit
    for (const key in newTutorFormData.value) {
      const typedKey = key as keyof typeof newTutorFormData.value
      if (newTutorFormData.value[typedKey] === '' || newTutorFormData.value[typedKey] === null || newTutorFormData.value[typedKey]?.length === 0)
        return
    }
    const result = await api.auth.tutorRegister(newTutorFormData.value)
    if (result)
      await router.replace('/tutors')
  }
  catch (error) {
    console.log(error)
  }
  finally {
    loading.value = false
  }
}

function onFormReset() {
  rawAvatar.value = ''
  avatarImageUri.value = ''
}
</script>

<template>
  <div class="add-new-tutor-page">
    <PageHeading>Add a new tutor</PageHeading>
    <form class="new-tutor-form" @submit.prevent="onNewRegisterFormData" @reset="onFormReset">
      <div class="new-tutor-form__top flex items-start gap-8">
        <div class="w-[280px]">
          <img v-if="avatarImageUri !== ''" :src="avatarImageUri" alt="Profile photo" class="mt-10">
          <div v-else class="profile-photo-placeholder mt-10 flex items-center justify-center text-6xl">
            <material-symbols-android-camera-outline />
          </div>
        </div>
        <div class="new-tutor-form__inputs">
          <NInput id="f_name" v-model="newTutorFormData.f_name" label="First Name" required name="f_name" />
          <NInput id="l_name" v-model="newTutorFormData.l_name" label="Last Name" required name="l_name" />
          <NInput id="username" v-model="newTutorFormData.username" label="Username" required name="username" />
          <NInput id="nic" v-model="newTutorFormData.nic" label="NIC" required name="nic" />
          <NInput id="email" v-model="newTutorFormData.email" label="Email" type="email" required name="email" />
          <NInput v-model="newTutorFormData.contact_no" label="Contact No" type="tel" required />
          <NInput
            id="password" v-model="newTutorFormData.password" label="Password" type="password" required
            name="password"
          />
          <NInput
            id="confirm_password" v-model="newTutorFormData.confirm_password" label="Confirm Password"
            type="password" required name="confirm_password"
          />
          <NInput v-model="newTutorFormData.dob" label="Date of Birth" type="date" required />
          <NInput v-model="newTutorFormData.address" label="Address" required />
          <NInput v-model="rawAvatar" label="Profile Picture" type="file" required @change="onProfilePictureChange" />
          <NInput
            v-model="rawQualifications" label="Qualifications" placeholder="Please enter ad comma separated values"
            required
          />
          <div class="n-input n-input--primary n--primary">
            <label for="subject_id" class="n-input__label">Subject</label>
            <select id="subject_id" v-model="newTutorFormData.subject_id" name="subject_id" class="n-input__input">
              <option v-for="subject in subjects" :key="subject.subjectId" :value="subject.subjectId">
                {{
                  subject.label }}
              </option>
            </select>
          </div>
          <NInput v-model="newTutorFormData.bank_name" label="Bank Name" required />
          <NInput v-model="newTutorFormData.branch_name" label="Branch Name" required />
          <NInput v-model="newTutorFormData.account_no" label="Account No" required />
        </div>
      </div>
      <div class="new-tutor-form__actions flex items-center justify-end gap-4">
        <NButton type="reset" mode="text" color="danger">
          Reset
        </NButton>
        <NButton type="submit" :is-loading="loading" loading-text="Submitting">
          Submit
        </NButton>
      </div>
    </form>
  </div>
</template>

<style lang="scss">
.new-tutor-form {
  display: flex;
  flex-direction: column;

  img {
    width: 250px;
    height: 250px;
    object-fit: cover;
    object-position: center;
    border-radius: 50%;
  }

  .profile-photo-placeholder {
    min-width: 250px;
    min-height: 250px;
    border-radius: 50%;
    background-color: #e5e7eb;
  }

  &__inputs {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    column-gap: 1.5rem;
    row-gap: 1rem;
    margin-block: 2rem;

  }
}
</style>
