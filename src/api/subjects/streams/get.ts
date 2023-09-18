import { authenticatedInstance } from '../../instance'
import type { ListOfSubjectStream } from '~/types'

export async function get() {
  try {
    const result = await authenticatedInstance().get<ListOfSubjectStream>('/subjects/streams')
    if (result.status === 200)
      return result.data
  }
  catch (error) {
    console.log(error)
  }
}
