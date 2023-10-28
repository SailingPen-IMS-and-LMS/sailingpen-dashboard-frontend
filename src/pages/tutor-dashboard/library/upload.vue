<script setup lang="ts">
import { NButton } from '@nethren-ui/vue'
import ResourceUploadModal from '~/components/ResourceUploadModal.vue'
import PageHeading from '~/components/common/PageHeading.vue'

const resourceUploadModal = ref<InstanceType<typeof ResourceUploadModal>>()
</script>

<template>
  <div class="lesson-packs-page">
    <div class="left-side-container">
      <div class="top-left-container">
        <PageHeading>
          Library
        </PageHeading>
        <div class="flex items-center justify-end">
          <NButton @click="resourceUploadModal?.openResourceUploadModal">
            <template #leftIcon>
              <material-symbols-upload-rounded />
            </template>
            Upload
          </NButton>
        </div>

        <div class="flex gap-2">
          <VideoThumbnail />
          <VideoThumbnail />
          <VideoThumbnail />
        </div>
      </div>
    </div>
  </div>
  <ResourceUploadModal ref="resourceUploadModal" />
</template>

<style lang="scss" scoped></style>
