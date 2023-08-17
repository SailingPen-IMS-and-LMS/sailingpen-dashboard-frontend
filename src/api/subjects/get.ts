import { instance } from '../instance'
import type { ListOfSubjectDetails } from '~/types'

// import type { EnrolledClasses } from '~/types'

export async function get() {
  try {
    const result = await instance.get<ListOfSubjectDetails>('/subjects')
    if (result.status === 200)
      return result.data
  }
  catch (error) {
    console.log(error)
  }
}
