import { authenticatedInstance } from '../../instance'
import type { SubjectStreamCreateDto } from '~/types'

// import type { EnrolledClasses } from '~/types'

export async function create(createSubjectStreamDto: SubjectStreamCreateDto) {
  try {
    const result = await authenticatedInstance().post('/subjects/streams', createSubjectStreamDto)
    if (result.status === 201)
      return result.data
  }
  catch (error) {
    console.log(error)
    return undefined
  }
}
