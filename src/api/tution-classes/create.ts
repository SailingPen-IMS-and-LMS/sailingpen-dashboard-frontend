import { authenticatedInstance } from '../instance'
import type { CreateClassDto } from '~/types'

export async function create(dto: CreateClassDto) {
  try {
    const result = await authenticatedInstance().post('/tution-classes', dto)
    if (result.status === 201)
      return true
  }
  catch (error) {
    console.log(error)
    return false
  }
}
