import { authenticatedInstance } from '../../instance'
import type { LibraryRootFolder } from '../../../types'

export async function root() {
  try {
    const result = await authenticatedInstance().get<LibraryRootFolder>('/library/folders/root')
    if (result.status === 200)
      return result.data
  }
  catch (error) {
    console.log(error)
  }
}
