<script setup lang="ts">
import { ref } from 'vue'
import { NButton, NInput, NModal } from '@nethren-ui/vue'
import type { SubjectStreamCreateDto } from '~/types'
import { api } from '~/api'

const emit = defineEmits<{
  onAddSubjectStream: [void]
}>()

const newSubjectStreamData = ref<SubjectStreamCreateDto>({
  subject_stream_name: '',
  subject_stream_description: '',
})
const loadingAddSubjectStream = ref(false)
const addSubjectStreamModal = ref<InstanceType<typeof NModal>>()

async function onAddNewSubjectFormSubmit() {
  try {
    loadingAddSubjectStream.value = true
    const result = await api.subjects.streams.create(newSubjectStreamData.value)
    if (result)
      emit('onAddSubjectStream')
  }
  catch (e) {
    console.log(e)
  }
  finally {
    loadingAddSubjectStream.value = false
    addSubjectStreamModal.value?.closeModal()
    // reset form
    newSubjectStreamData.value = {
      subject_stream_name: '',
      subject_stream_description: '',
    }
  }
}
</script>

<template>
  <NButton mode="solid" @click="addSubjectStreamModal?.openModal()">
    + Add stream
    <NModal ref="addSubjectStreamModal" :close-on-outside-click="false">
      <template #modal-header>
        <h3>Add a new subject</h3>
      </template>
      <template #modal-body>
        <form class="flex flex-col gap-4" @submit.prevent="onAddNewSubjectFormSubmit">
          <NInput id="stream-name" v-model="newSubjectStreamData.subject_stream_name" label="Stream name" name="stream-name" />
          <NInput id="stream-description" v-model="newSubjectStreamData.subject_stream_description" label="Stream description" name="stream-description" />
          <div class="flex items-center justify-between">
            <NButton type="reset" mode="text" color="danger">
              Reset
            </NButton>
            <NButton type="submit" mode="solid" :is-loading="loadingAddSubjectStream" loading-text="Submitting">
              Submit
            </NButton>
          </div>
        </form>
      </template>
    </NModal>
  </NButton>
</template>
