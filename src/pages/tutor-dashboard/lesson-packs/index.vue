<script setup lang="ts">
import { onMounted } from 'vue'
import { NButton, NInput, NModal, NTextarea } from '@nethren-ui/vue'
import { storeToRefs } from 'pinia'
import { api } from '~/api'
import { useLessonPackCreationStore, useLessonPacksStore } from '~/stores'
import { ResourceType } from '~/types'

const lessonPacksStore = useLessonPacksStore()
const { lessonPacks } = storeToRefs(lessonPacksStore)

const lessonPackCreationStore = useLessonPackCreationStore()
const { newResourcePackTextualData, resources, inAddMode } = storeToRefs(lessonPackCreationStore)

const createLessonPackModal = ref<InstanceType<typeof NModal>>()

function cancelLessonPackCreating() {
  createLessonPackModal.value?.closeModal()
  lessonPackCreationStore.resetAddMode()
}

function openCreateLessonPackModal() {
  lessonPackCreationStore.setAddMode(true)
  createLessonPackModal.value?.openModal()
}

function onCoverImageSelect(e: Event) {
  const target = e.target as HTMLInputElement
  if (target.files && target.files.length > 0) {
    const file = target.files[0]
    lessonPackCreationStore.setCoverImage(file)
  }
}

const lessonPackCreating = ref(false)

async function onLessonPackCreationFormSubmit() {
  if (!newResourcePackTextualData.value.coverImage)
    return
  lessonPackCreating.value = true
  const result = await api.lessonPacks.createLessonPack({
    ...newResourcePackTextualData.value,
    price: Number(newResourcePackTextualData.value.price),
    resources: lessonPackCreationStore.getAllResourceIds(),
    coverImage: newResourcePackTextualData.value.coverImage,
  })
  if (result) {
    await loadLessonPacks()
    lessonPackCreationStore.resetAddMode()
    createLessonPackModal.value?.closeModal()
  }
  else { alert('Something went wrong, please try again later') }

  lessonPackCreating.value = false
}

async function loadLessonPacks() {
  lessonPacksStore.setLoadingLessonPacks(true)
  const result = await api.lessonPacks.getTutorsLEssonPacks()
  if (result)
    lessonPacksStore.setLessonPacks(result)

  else
    alert('Something went wrong, please try again later')

  lessonPacksStore.setLoadingLessonPacks(false)
}

onMounted(async () => {
  if (inAddMode.value)
    createLessonPackModal.value?.openModal()
  await loadLessonPacks()
})
</script>

<template>
  <div class="lesson-packs-page">
    <div class="left-side-container">
      <div class="top-left-container">
        <PageHeading>
          Lesson packs
        </PageHeading>
        <div class="flex items-center justify-end">
          <NButton @click="openCreateLessonPackModal">
            + New lesson pack
            <NModal
              ref="createLessonPackModal" :close-on-outside-click="false" :model-attrs="{
                style: 'max-height: 90vh;  overflow-y: auto;',
              }"
            >
              <template #modal-header>
                <h3 class="text-lg font-semibold">
                  Create new lesson pack
                </h3>
              </template>
              <template #modal-body>
                <form class="w-[600px] flex flex-col gap-4" @submit.prevent="onLessonPackCreationFormSubmit">
                  <div class="flex items-center gap-4">
                    <NInput id="name" v-model="newResourcePackTextualData.name" required :wrapper-attrs="{ class: 'w-full' }" placeholder="Name of the lesson pack" label="Name" name="name" />
                    <NInput id="price" v-model="newResourcePackTextualData.price" required :wrapper-attrs="{ class: 'w-full' }" placeholder="Price of the lesson pack" label="Price" name="price" type="number" />
                  </div>
                  <NTextarea id="description" v-model="newResourcePackTextualData.description" required placeholder="Description" label="Description" name="description" class="h-[120px]" />
                  <div class="n-input n-input--primary n--primary">
                    <label for="n-input__label">Cover image</label>
                    <input id="cover_image" required type="file" class="n-input__input" name="cover_image" @change="onCoverImageSelect">
                  </div>
                  <RouterLink to="/tutor-dashboard/library?mode=add_lesson_pack_resources" class="w-max">
                    <NButton type="button" role="button" mode="outline">
                      Select resources to include
                    </NButton>
                  </RouterLink>
                  <div v-if="Object.entries(resources).length > 0" class="max-h-[300px]" style="overflow-y: auto;">
                    <ul class="flex flex-col gap-2">
                      <li v-for="resource in resources" :key="resource.id">
                        ({{ resource.type === ResourceType.VIDEO ? 'Video' : (resource.type === ResourceType.DOCUMENT ? 'Document' : 'Image') }}) - {{ resource.name }}
                      </li>
                    </ul>
                  </div>
                  <div class="flex items-center justify-end gap-4">
                    <NButton mode="text" color="danger" type="button" role="button" @click="cancelLessonPackCreating">
                      Cancel
                    </NButton>
                    <NButton type="submit" :is-loading="lessonPackCreating" loading-text="Submitting">
                      Confirm & Create this pack
                    </NButton>
                  </div>
                </form>
              </template>
            </NModal>
          </NButton>
        </div>

        <div class="grid grid-cols-4">
          <LessonPackPreview v-for="lessonPack in lessonPacks" :key="lessonPack.id" :lesson-pack="lessonPack" />
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.default-sidebar{
  transition: all 300ms ease-in-out;
  background-color: var(--bg-primary);
  width: 225px;
grid-column: 1/2;
grid-row: 1/3;

display: flex;
flex-direction: column;
align-items: center;

img {
  width: 200px;
  height: 60px;
  margin-top: 1.5rem;

}

/* ul{
    display: flex;
    flex-direction: column;

  } */
}

.default-sidebar--close {
  width: 100px;

}

.navigation-bar{
  background-color: #f8f8f8;
  height: 100%;

}

.default-header{
  grid-column: 2/3;
  grid-row: 1/2;
  padding: 2rem;

}

.default-page-container{
  padding: 0 2rem;
}

.default-layout{
  overflow: hidden;
  height: 100vh;
  width: 100vw;
  display: grid;
  grid-template-columns: min-content 1fr;
  grid-template-rows: 80px 1fr;
  grid-column: 2/3;
  grid-row: 2/3;
}

.profile-picture{
  width: 50px;
  height: 50px;
  aspect-ratio: 1;
  border-radius: 50%;
}

.continue-watch-video{
  width: 320px;
  height: 180px;
  background-image: linear-gradient(to left, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(../assets/images/video-1.jpg);
  background-repeat: no-repeat;
  border-radius: 8px;
  background-position: center;
  background-size: cover;
  margin-block: 1rem;
  color: white;
  padding: 1rem 2rem;
  position: relative;

  svg{
    position: absolute;
    top: 60%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
}

.top-right-container{
  width: 250px;
  height: 250px;
  background-color: black;
  margin-left: 1.5rem;
  border-radius: 8px;
}

/* .top-left-container{
    // overflow-x: scroll;
    // width: 900px;
} */
</style>
