<script setup lang="ts">
import { NButton, NModal } from '@nethren-ui/vue'
import { storeToRefs } from 'pinia'
import AddSubjectModal from '~/components/AddSubjectModal.vue'
import AddSubjectStreamModal from '~/components/AddSubjectStreamModal.vue'
import PageHeading from '~/components/common/PageHeading.vue'
import DataTable from '~/components/common/table-components/DataTable.vue'
import DataTableData from '~/components/common/table-components/DataTableData.vue'
import DataTableHeading from '~/components/common/table-components/DataTableHeading.vue'
import DataTableRow from '~/components/common/table-components/DataTableRow.vue'
import { useSubjectsStore } from '~/stores'
import { api } from '~/api'

const subjectsStore = useSubjectsStore()
const { loadingSubjects, subjects, subjectStreams, loadingSubjectStreams } = storeToRefs(subjectsStore)

const deleteTutorModal = ref<InstanceType<typeof NModal>>()

function onDeleteSubmit() {
  console.log('Trying to delete')
}

async function onNewSubjectAdd() {
  try {
    subjectsStore.setLoadingSubjects(true)
    const result = await api.subjects.get()

    if (result)
      subjectsStore.setSubjects(result)
  }
  catch (error) {
    console.log(error)
  }
  finally {
    subjectsStore.setLoadingSubjects(false)
  }
}

async function onNewSubjectStreamAdd() {
  try {
    subjectsStore.setLoadingSubjectStreams(true)
    const result = await api.subjects.streams.get()

    if (result)
      subjectsStore.setSubjectStreams(result)
  }
  catch (error) {
    console.log(error)
  }
  finally {
    subjectsStore.setLoadingSubjectStreams(false)
  }
}
</script>

<template>
  <div class="subjects-page">
    <PageHeading>Subjects</PageHeading>
    <div class="flex justify-end">
      <div class="flex items-center gap-4">
        <div class="mr-8 flex border rounded-l-md px-4 py-2 pr-48">
          <MaterialSymbolsSearch />
          <input id="search" type="text" name="search" placeholder="Search Here " class="pl-4">
        </div>
        <AddSubjectModal :streams="subjectStreams" @on-add-subject="onNewSubjectAdd" />
      </div>
    </div>
    <DataTable class="mt-8" :loading="loadingSubjects">
      <template #table-heading-rows>
        <DataTableHeading>Subject</DataTableHeading>
        <DataTableHeading>Description</DataTableHeading>
        <DataTableHeading>Subject streams</DataTableHeading>
        <DataTableHeading class="text-right" />
      </template>
      <template #table-body-rows>
        <DataTableRow v-for="subject in subjects" :key="subject.subject_id">
          <DataTableData>
            {{ subject.subject_name }}
          </DataTableData>
          <DataTableData>
            {{ subject.subject_description }}
          </DataTableData>
          <DataTableData>
            {{
              subject.subject_stream.map((stream) => {
                return stream.stream_name
              }).join(', ') }}
          </DataTableData>
          <DataTableData>
            <div class="flex items-center justify-end gap-2">
              <NButton style="height:2rem !important;" mode="outline" color="warning">
                <ic-baseline-edit />
              </NButton>
              <NButton
                style="height:2rem !important;" mode="outline" color="danger"
                @click="deleteTutorModal?.openModal()"
              >
                <mdi-delete-outline />
              </NButton>
            </div>
          </DataTableData>
        </DataTableRow>
      </template>
    </DataTable>
    <h2 class="mb-4 mt-8 flex items-center justify-between">
      <span class="text-lg font-bold">
        Subject streams
      </span>
      <AddSubjectStreamModal :streams="subjectStreams" @on-add-subject-stream="onNewSubjectStreamAdd" />
    </h2>
    <DataTable class="my-8" :loading="loadingSubjectStreams">
      <template #table-heading-rows>
        <DataTableHeading>Subject stream</DataTableHeading>
        <DataTableHeading>Description</DataTableHeading>
        <DataTableHeading class="text-right" />
      </template>
      <template #table-body-rows>
        <DataTableRow v-for="stream in subjectStreams" :key="stream.subject_stream_id">
          <DataTableData>
            {{ stream.stream_name }}
          </DataTableData>
          <DataTableData>
            {{ stream.stream_description }}
          </DataTableData>
          <DataTableData>
            <div class="flex items-center justify-end gap-2">
              <NButton style="height:2rem !important;" mode="outline" color="warning">
                <ic-baseline-edit />
              </NButton>
              <NButton
                style="height:2rem !important;" mode="outline" color="danger"
                @click="deleteTutorModal?.openModal()"
              >
                <mdi-delete-outline />
              </NButton>
            </div>
          </DataTableData>
        </DataTableRow>
      </template>
    </DataTable>
    <NModal ref="deleteTutorModal">
      <template #modal-header>
        Are you sure you want to delete this tutor?
      </template>
      <template #modal-body>
        <div class="flex flex-col">
          <div>
            <p>Tutor ID : {{ }}</p>
            <p>Tutor Name: {{ }}</p>
          </div>
        </div>
      </template>
      <template #modal-footer>
        <div class="flex justify-center gap-4 p-4">
          <NButton class="px-2 py-1" color="danger" @click="onDeleteSubmit">
            Delete
          </NButton>
          <NButton class="px-2 py-1" @click="deleteTutorModal?.closeModal()">
            Cancel
          </NButton>
        </div>
      </template>
    </NModal>
  </div>
</template>
