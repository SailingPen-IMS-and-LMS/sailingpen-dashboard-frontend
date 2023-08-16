import { authenticatedInstance } from '../../instance'
import type { TutorProfile } from '~/types'

export async function getProfile() {
  try {
    const result = await authenticatedInstance().get<TutorProfile>('/users/tutors/get-profile')
    if (result.status === 200)
      return result.data
  }
  catch (error) {
    console.log(error)
    return null
  }
}
