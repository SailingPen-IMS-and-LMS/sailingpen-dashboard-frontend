import { authenticatedInstance } from '../../instance'
import type { CreateFolderDto, LibraryFolderStructure } from '../../../types'

export async function create(createFolderDto: CreateFolderDto) {
  try {
    const result = await authenticatedInstance().post<LibraryFolderStructure>('/library/folders', createFolderDto)
    if (result.status === 201)
      return result.data
  }
  catch (error) {
    console.log(error)
  }
}
