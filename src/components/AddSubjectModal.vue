<script setup lang="ts">
import { ref, toRefs } from 'vue'
import { NButton, NInput, NModal } from '@nethren-ui/vue'
import type { ListOfSubjectStream, SubjectCreateDto } from '~/types'
import { api } from '~/api'

const props = defineProps<{
  streams: ListOfSubjectStream
}>()

const emit = defineEmits<{
  onAddSubject: [void]
}>()

const { streams } = toRefs(props)

const newSubjectData = ref<SubjectCreateDto>({
  subject_name: '',
  subject_description: '',
  subject_stream_ids: [] as string[],
})
const loadingAddSubject = ref(false)
const addSubjectModal = ref<InstanceType<typeof NModal>>()

async function onAddNewSubjectFormSubmit() {
  try {
    loadingAddSubject.value = true
    const result = await api.subjects.create(newSubjectData.value)
    if (result)
      emit('onAddSubject')
  }
  catch (e) {
    console.log(e)
  }
  finally {
    loadingAddSubject.value = false
    addSubjectModal.value?.closeModal()
    // reset form
    newSubjectData.value = {
      subject_name: '',
      subject_description: '',
      subject_stream_ids: [] as string[],
    }
  }
}
</script>

<template>
  <NButton mode="solid" @click="addSubjectModal?.openModal()">
    + Add Subject
    <NModal ref="addSubjectModal" :close-on-outside-click="false">
      <template #modal-header>
        <h3>Add a new subject</h3>
      </template>
      <template #modal-body>
        <form class="flex flex-col gap-4" @submit.prevent="onAddNewSubjectFormSubmit">
          <NInput id="subject-name" v-model="newSubjectData.subject_name" label="Subject name" name="subject-name" />
          <NInput id="subject-description" v-model="newSubjectData.subject_description" label="Subject description" name="subject-description" />
          <div class="n-input n-input--primary n--primary">
            <label for="stream_id" class="n-input__label">Subject</label>
            <select id="stream_id" v-model="newSubjectData.subject_stream_ids" name="stream_id" class="n-input__input" multiple>
              <option v-for="stream in streams" :key="stream.subject_stream_id" :value="stream.subject_stream_id">
                {{
                  stream.stream_name }}
              </option>
            </select>
          </div>
          <div class="flex items-center justify-between">
            <NButton type="reset" mode="text" color="danger">
              Reset
            </NButton>
            <NButton type="submit" mode="solid" :is-loading="loadingAddSubject" loading-text="Submitting">
              Submit
            </NButton>
          </div>
        </form>
      </template>
    </NModal>
  </NButton>
</template>
