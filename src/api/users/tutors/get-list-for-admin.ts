import { authenticatedInstance } from '../../instance'
import type { ListOfTutorBasicDetails } from '~/types'

export async function getListForAdmin() {
  try {
    const result = await authenticatedInstance().get<ListOfTutorBasicDetails>('/users/tutors')
    if (result.status === 200)
      return result.data
  }
  catch (error) {
    console.log(error)
    return null
  }
}
