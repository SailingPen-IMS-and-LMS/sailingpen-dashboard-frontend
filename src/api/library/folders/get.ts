import { authenticatedInstance } from '../../instance'
import type { LibraryFolderStructure } from '../../../types'

export async function get() {
  try {
    const result = await authenticatedInstance().get<LibraryFolderStructure>('/library/folders')
    if (result.status === 200)
      return result.data
  }
  catch (error) {
    console.log(error)
  }
}
