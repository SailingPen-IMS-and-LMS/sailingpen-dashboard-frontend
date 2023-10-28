import { authenticatedInstance } from '../instance'
import type { SubjectCreateDto } from '~/types'

// import type { EnrolledClasses } from '~/types'

export async function create(createSubjectDto: SubjectCreateDto) {
  try {
    const result = await authenticatedInstance().post('/subjects', createSubjectDto)
    if (result.status === 201)
      return result.data
  }
  catch (error) {
    console.log(error)
    return undefined
  }
}
