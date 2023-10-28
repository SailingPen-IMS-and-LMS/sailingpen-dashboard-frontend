import { authenticatedInstance } from '../../instance'
import type { LibraryFolderChildrenFolders } from '../../../types'

export async function getChildren(folderId: number) {
  try {
    const result = await authenticatedInstance().get<LibraryFolderChildrenFolders>(`/library/folders/${folderId}`)
    if (result.status === 200)
      return result.data
  }
  catch (error) {
    console.log(error)
  }
}
