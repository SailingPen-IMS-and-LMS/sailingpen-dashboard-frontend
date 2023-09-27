import { authenticatedInstance } from '../../instance'
import type { CreateImageOrDocumentResourceCreateDto, ResourceResults } from '~/types'
import { useUploadsStore } from '~/stores'

export async function imageOrDocumentCreate(folderId: number, { file }: CreateImageOrDocumentResourceCreateDto) {
  const uploadsStore = useUploadsStore()
  try {
    const formData = new FormData()
    formData.append('file', file)
    const result = await authenticatedInstance().post<ResourceResults>(`/library/resources/image-or-document?folderId=${folderId}`, formData, {
      onUploadProgress(progressEvent) {
        // print error as percentage
        console.log(progressEvent.progress)
        if (progressEvent.progress)
          uploadsStore.setProgress(file.name, progressEvent.progress * 100)
      },
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    })
    if (result.status === 201) {
      console.log(result.data)
      return result.data
    }
    return undefined
  }
  catch (error) {
    console.log(error)
    return undefined
  }
}
