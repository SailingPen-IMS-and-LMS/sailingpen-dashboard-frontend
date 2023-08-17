<script setup lang="ts">
import { NButton, NInput, NModal } from '@nethren-ui/vue'
import { storeToRefs } from 'pinia'
import { api } from '~/api'
import PageHeading from '~/components/common/PageHeading.vue'
import DataTable from '~/components/common/table-components/DataTable.vue'
import DataTableData from '~/components/common/table-components/DataTableData.vue'
import DataTableHeading from '~/components/common/table-components/DataTableHeading.vue'
import DataTableRow from '~/components/common/table-components/DataTableRow.vue'
import { useSubjectsStore, useTutionClassesStore, useTutorsStore } from '~/stores'

const tutionClassesStore = useTutionClassesStore()
const { loadingTutionClasses, tutionClasses } = storeToRefs(tutionClassesStore)
const tutorsStore = useTutorsStore()
const { tutors } = storeToRefs(tutorsStore)
const subjectsStore = useSubjectsStore()
const { subjects } = storeToRefs(subjectsStore)

const deleteTutorModal = ref<InstanceType<typeof NModal>>()

function onDeleteSubmit() {
  console.log('Trying to delete')
}

const viewTutorModal = ref<InstanceType<typeof NModal>>()

const addClassModal = ref<InstanceType<typeof NModal>>()

const newSubjectFormData = ref({
  class_name: '',
  class_description: '',
  admission_fee: 0,
  monthly_fee: 0,
  subject_id: '',
  tutor_id: '',
})

const submittingAdditionForm = ref(false)

async function onSubjectAddFormSubmit() {
  submittingAdditionForm.value = true
  try {
    for (const key in newSubjectFormData.value) {
      if (Object.prototype.hasOwnProperty.call(newSubjectFormData.value, key)) {
        const element = newSubjectFormData.value[key as keyof typeof newSubjectFormData.value]
        if (!element || element === '') {
          // eslint-disable-next-line no-alert
          alert('Please enter all data')
          return
        }
      }
    }
    const result = await api.tutionClasses.create({
      ...newSubjectFormData.value,
      admission_fee: Number(newSubjectFormData.value.admission_fee),
      monthly_fee: Number(newSubjectFormData.value.monthly_fee),
    })
    if (result) {
      tutionClassesStore.setLoadingTutionClasses(true)
      const res = await api.tutionClasses.get()
      if (res) {
        tutionClassesStore.setTutionClasses(res)
        addClassModal.value?.closeModal()
      }
    }
  }
  catch (error) {
    console.log(error)
  }
  finally {
    submittingAdditionForm.value = false
    tutionClassesStore.setLoadingTutionClasses(false)
  }
}
</script>

<template>
  <div class="tutionClasses-page">
    <PageHeading>Classes</PageHeading>
    <div class="flex justify-end">
      <div class="flex items-center gap-4">
        <div class="mr-8 flex border rounded-l-md px-4 py-2 pr-48">
          <MaterialSymbolsSearch />
          <input id="search" type="text" name="search" placeholder="Search Here " class="pl-4">
        </div>

        <NButton mode="solid" @click="addClassModal?.openModal()">
          + Add class
        </NButton>
      </div>
    </div>
    <DataTable class="mt-8" :loading="loadingTutionClasses">
      <template #table-heading-rows>
        <DataTableHeading>Class</DataTableHeading>
        <DataTableHeading>Description</DataTableHeading>
        <DataTableHeading>Tutor</DataTableHeading>
        <DataTableHeading>Subject</DataTableHeading>
        <DataTableHeading class="text-right" />
      </template>
      <template #table-body-rows>
        <DataTableRow v-for="tutionClass in tutionClasses" :key="tutionClass.class_id">
          <DataTableData>
            {{ tutionClass.class_name }}
          </DataTableData>
          <DataTableData>
            {{ tutionClass.class_description }}
          </DataTableData>
          <DataTableData>
            {{ `${tutionClass.tutor.user.f_name} ${tutionClass.tutor.user.l_name}` }}
          </DataTableData>
          <DataTableData>
            {{ tutionClass.subject.subject_name }}
          </DataTableData>
          <DataTableData>
            <div class="flex items-center justify-end gap-2">
              <NButton style="height:2rem !important;" mode="outline" color="info" @click="viewTutorModal?.openModal()">
                <mdi-eye-outline />
              </NButton>
              <RouterLink
                :to="{
                  path: `/classes/${tutionClass.class_id}/edit`,
                  query: {
                    name: `${tutionClass.tutor.user.f_name} ${tutionClass.tutor.user.l_name}`,
                  },
                }"
              >
                <NButton style="height:2rem !important;" mode="outline" color="warning">
                  <ic-baseline-edit />
                </NButton>
              </RouterLink>

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
    <NModal ref="addClassModal">
      <template #modal-header>
        Add new class
      </template>
      <template #modal-body>
        <form class="w-[300px] flex flex-col gap-1" @submit.prevent="onSubjectAddFormSubmit">
          <div class="n-input n-input--primary n--primary">
            <label for="subject_id" class="n-input__label">Subject</label>
            <select id="subject_id" v-model="newSubjectFormData.subject_id" name="subject_id" class="n-input__input">
              <option v-for="subject in subjects" :key="subject.subject_id" :value="subject.subject_id">
                {{
                  subject.subject_name }}
              </option>
            </select>
          </div>
          <div class="n-input n-input--primary n--primary">
            <label for="tutor_id" class="n-input__label">Tutor</label>
            <select id="tutor_id" v-model="newSubjectFormData.tutor_id" name="tutor_id" class="n-input__input">
              <option v-for="tutor in tutors" :key="tutor.tutor_id" :value="tutor.tutor_id">
                {{
                  `${tutor.f_name} ${tutor.l_name}` }}
              </option>
            </select>
          </div>
          <NInput id="class_name" v-model="newSubjectFormData.class_name" label="Class Name" name="class_name" />
          <NInput
            id="class_description" v-model="newSubjectFormData.class_description" label="Class Description"
            name="class_description"
          />
          <NInput
            id="admission_fee" v-model="newSubjectFormData.admission_fee" label="Admission Fee" name="admission_fee"
            type="number"
          />
          <NInput
            id="monthly_fee" v-model="newSubjectFormData.monthly_fee" label="Monthly Fee" name="monthly_fee"
            type="number"
          />
          <div class="flex justify-center gap-4 p-4">
            <NButton class="px-2 py-1" role="button" mode="text" color="danger" @click="addClassModal?.closeModal()">
              Cancel
            </NButton>
            <NButton class="px-2 py-1" color="primary" :is-loading="submittingAdditionForm" loading-text="Submitting">
              Add
            </NButton>
          </div>
        </form>
      </template>
    </NModal>
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
