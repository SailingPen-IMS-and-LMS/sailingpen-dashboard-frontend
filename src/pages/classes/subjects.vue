<script setup lang="ts">
import { NButton, NModal } from '@nethren-ui/vue'
import { storeToRefs } from 'pinia'
import PageHeading from '~/components/common/PageHeading.vue'
import DataTable from '~/components/common/table-components/DataTable.vue'
import DataTableData from '~/components/common/table-components/DataTableData.vue'
import DataTableHeading from '~/components/common/table-components/DataTableHeading.vue'
import DataTableRow from '~/components/common/table-components/DataTableRow.vue'
import { useSubjectsStore } from '~/stores'

const subjectsStore = useSubjectsStore()
const { loadingSubjects, subjects } = storeToRefs(subjectsStore)

const deleteTutorModal = ref<InstanceType<typeof NModal>>()

function onDeleteSubmit() {
  console.log('Trying to delete')
}

const viewTutorModal = ref<InstanceType<typeof NModal>>()
</script>

<template>
  <div class="subjects-page">
    <PageHeading>Tutors</PageHeading>
    <div class="flex justify-end">
      <div class="flex items-center gap-4">
        <div class="mr-8 flex border rounded-l-md px-4 py-2 pr-48">
          <MaterialSymbolsSearch />
          <input id="search" type="text" name="search" placeholder="Search Here " class="pl-4">
        </div>

        <NButton mode="solid">
          <RouterLink to="/subjects/add-new">
            + Add Tutor
          </RouterLink>
        </NButton>
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
          \
          <DataTableData>
            <div class="flex items-center justify-end gap-2">
              <NButton style="height:2rem !important;" mode="outline" color="info" @click="viewTutorModal?.openModal()">
                <mdi-eye-outline />
              </NButton>
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
    <NModal ref="viewTutorModal">
      <template #modal-body>
        <div class="fixed left-0 top-0 h-full w-full flex items-center justify-center bg-black bg-opacity-50">
          <div class="border-green-4 rounded-lg bg-white p-4 shadow-md">
            <form class="flex flex-col justify-center">
              <h1 class="pb-4 pt-2 text-center text-2xl font-bold">
                Profile
              </h1>
              <div>
                <div class="grid grid-cols-1 mb-2 flex justify-center gap-x-6 gap-y-6 sm:grid-cols-6">
                  <div class="">
                    <div class="grid grid-cols-1 mt-2 flex justify-center gap-x-6 gap-y-8 sm:grid-cols-6">
                      <div class="h-70 w-70 flex items-center justify-center overflow-hidden rounded-full bg-gray-300">
                        <img
                          class="max-h-full max-w-full" src="/images/student_avatar.jpg" alt="Your Image"
                          aria-hidden="true"
                        >
                      </div>
                    </div>
                  </div>
                  <div class="border-t border-gray-100">
                    <dl class="w-100 divide-y divide-gray-100">
                      <div class="px-4 py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                        <dt class="pl-6 text-sm font-medium font-semibold leading-6 text-gray-900">
                          User Name :
                        </dt>
                        <dd class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                          NuwanP78
                        </dd>
                      </div>
                      <div class="px-4 py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                        <dt class="pl-6 text-sm font-medium font-semibold leading-6 text-gray-900">
                          First name :
                        </dt>
                        <dd class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                          Nuwan
                        </dd>
                      </div>
                      <div class="px-4 py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                        <dt class="pl-6 text-sm font-medium font-semibold leading-6 text-gray-900">
                          Last Name :
                        </dt>
                        <dd class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                          Pradeep
                        </dd>
                      </div>
                      <div class="px-4 py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                        <dt class="pl-6 text-sm font-medium font-semibold leading-6 text-gray-900">
                          Gender :
                        </dt>
                        <dd class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                          Male
                        </dd>
                      </div>
                      <div class="px-4 py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                        <dt class="pl-6 text-sm font-medium font-semibold leading-6 text-gray-900">
                          Date Of Birth :
                        </dt>
                        <dd class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                          1989-04-21
                        </dd>
                      </div>
                      <div class="px-4 py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                        <dt class="pl-6 text-sm font-medium font-semibold leading-6 text-gray-900">
                          NIC No :
                        </dt>
                        <dd class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                          198908701604
                        </dd>
                      </div>
                      <div class="px-4 py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                        <dt class="pl-6 text-sm font-medium font-semibold leading-6 text-gray-900">
                          Address :
                        </dt>
                        <dd class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                          122/B , Borupana Road ,
                          Rathmalana
                        </dd>
                      </div>
                      <div class="px-4 py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                        <dt class="pl-6 text-sm font-medium font-semibold leading-6 text-gray-900">
                          Mobile No :
                        </dt>
                        <dd class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                          077 9787945
                        </dd>
                      </div>
                      <div class="px-4 py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                        <dt class="pl-6 text-sm font-medium font-semibold leading-6 text-gray-900">
                          Email address :
                        </dt>
                        <dd class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                          NuwanPPradeep1999@example.com
                        </dd>
                      </div>
                      <div class="px-4 py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                        <dt class="pl-6 text-sm font-medium font-semibold leading-6 text-gray-900">
                          Bank Details :
                        </dt>
                        <dd class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                          658958712 , BOC bank - Hanwella
                        </dd>
                      </div>
                    </dl>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </template>
    </NModal>
  </div>
</template>
