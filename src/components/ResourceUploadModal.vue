<script setup lang="ts">
import { NButton, NModal } from '@nethren-ui/vue'

const resourceUploadModal = ref<InstanceType<typeof NModal>>()
const resourceType = ref<'video' | 'document'>('video')
const fileInput = ref<HTMLInputElement>()

watch(resourceType, (newVal) => {
  console.log(`Changed to ${newVal}`)
})

function openResourceUploadModal() {
  resourceUploadModal.value?.openModal()
}

defineExpose({
  openResourceUploadModal,
})
</script>

<template>
  <NModal ref="resourceUploadModal" :close-on-outside-click="false">
    <template #modal-header>
      <h1 class="text-xl font-bold">
        Upload new resources
      </h1>
    </template>
    <template #modal-body>
      <div class="max-w-[98vw] w-450px">
        <form class="w-full flex flex-col gap-2">
          <div>
            <p class="font-semibold">
              Resource type
            </p>
            <div class="mt-2 flex items-center gap-8">
              <div class="flex items-center gap-4">
                <label for="resource_type_video">Video</label>
                <input id="resource_type_video" v-model="resourceType" type="radio" name="resource_type" value="video">
              </div>
              <div class="flex items-center gap-4">
                <label for="resource_type_document">Document</label>
                <input
                  id="resource_type_document" v-model="resourceType" type="radio" name="resource_type"
                  value="document"
                >
              </div>
            </div>
          </div>
          <NButton mode="outline" class="self-start" type="button" @click="fileInput?.click()">
            <template #leftIcon>
              <material-symbols-attach-file-add-rounded />
            </template>
            Attach files
          </NButton>
          <input ref="fileInput" type="file" class="hidden" accept="video/*">
        </form>
      </div>
    </template>
  </NModal>
</template>
