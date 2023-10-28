import { authenticatedInstance } from '../../instance'
import type { ResourceResults } from '~/types'

export async function imageOrDocumentGet(folderId: number) {
  try {
    const result = await authenticatedInstance().get<ResourceResults>(`/library/resources/image-or-document?folderId=${folderId}`)
    if (result.status === 200) {
      // console.log(result.data)
      return result.data
    }
    return undefined
  }
  catch (error) {
    console.log(error)
    return undefined
  }
}
