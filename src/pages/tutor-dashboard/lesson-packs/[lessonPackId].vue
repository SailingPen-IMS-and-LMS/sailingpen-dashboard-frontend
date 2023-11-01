<script setup lang="ts">
import { api } from '~/api'
import { useLessonPacksStore } from '~/stores'
import { type LessonPackDetailed, ResourceType } from '~/types'
import ISvgSpinners180Ring from '~icons/svg-spinners/180-ring'

const route = useRoute()
const lessonPackId = route.params.lessonPackId as string

const lessonPacksStore = useLessonPacksStore()
const lessonPackName = lessonPacksStore.getLessonPackName(lessonPackId)

const lessonPackDetails = ref<LessonPackDetailed | undefined>()
const lessonPackInformationLoading = ref(true)

const videoResources = computed(() => {
  if (lessonPackDetails.value)
    return lessonPackDetails.value.resources.filter(r => r.type === ResourceType.VIDEO)
  return []
})

const documentResources = computed(() => {
  if (lessonPackDetails.value)
    return lessonPackDetails.value.resources.filter(r => r.type === ResourceType.DOCUMENT)
  return []
})

const imageResources = computed(() => {
  if (lessonPackDetails.value)
    return lessonPackDetails.value.resources.filter(r => r.type === ResourceType.IMAGE)
  return []
})

onMounted(async () => {
  lessonPackInformationLoading.value = true
  const result = await api.lessonPacks.getMoreDetails(lessonPackId)
  if (result)
    lessonPackDetails.value = result

  else
    alert('Something went wrong, please try again later')

  lessonPackInformationLoading.value = false
})
</script>

<template>
  <div class="lesson-pack-page min-h-[calc(100vh-60px)]" :class="[lessonPackInformationLoading ? 'relative' : '']">
    <PageHeading>
      Lesson pack - {{ lessonPackName }}
    </PageHeading>
    <div v-if="!lessonPackInformationLoading" class="mt-6 flex flex-col gap-4">
      <div>
        <h2 class="text-xl font-semibold">
          Videos
        </h2>
        <div class="mt-4 flex flex-wrap gap-8">
          <div v-for="vr in videoResources" :key="vr.id" class="w-[250px] flex flex-col gap-2 rounded-md bg-[var(--bg-primary)] p-[12.5px] shadow-md">
            <iframe
              class="rounded-lg"
              :src="vr.url"
              style="border: none"
              height="126.725"
              width="225"
              allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture;"
              allowfullscreen="true"
            />
            <p>
              {{
                vr.name
              }}
            </p>
          </div>
        </div>
      </div>
      <div>
        <h2 class="text-xl font-semibold">
          Documents
        </h2>
        <div v-if="documentResources.length > 0" class="mt-4 flex flex-wrap gap-8">
          <a
            v-for="dr in documentResources" :key="dr.id"
            class="w-[285px] flex items-center items-center justify-center gap-4 rounded-md bg-[var(--bg-primary)] p-[12.5px] shadow-md"
            :href="dr.url" target="_blank"
          >
            <img src="../../../assets/images/pdf-icon.png" :alt="dr.name" class="pdf-icon h-[50px] w-[40px]">
            <span class="attachment-text">{{ dr.name }}</span>
          </a>
        </div>
        <p v-else>
          There aren't any document in this lesson pack
        </p>
      </div>      <div>
        <h2 class="text-xl font-semibold">
          Images
        </h2>
        <div v-if="imageResources.length > 0" class="flex flex-wrap gap-8">
          <a
            v-for="ir in imageResources" :key="ir.id"
            class="w-[285px] flex items-center items-center justify-center gap-4 rounded-md bg-[var(--bg-primary)] p-[12.5px] shadow-md"
            :href="ir.url" target="_blank"
          >
            <img :src="ir.url" :alt="ir.name" class="h-[45px] w-[80px]">

            <span class="attachment-text">{{ ir.name }}</span>
          </a>
        </div>
        <p v-else>
          There aren't any images in this lesson pack
        </p>
      </div>
    </div>
    <div v-else class="absolute left-1/2 top-1/2 flex flex-col items-center justify-center gap-4 text-[rgba(0,0,0,0.4)] -translate-[50%]">
      <ISvgSpinners180Ring class="text-3xl" />
      <p class="text-center text-lg">
        Loading resources
      </p>
    </div>
  </div>
</template>
