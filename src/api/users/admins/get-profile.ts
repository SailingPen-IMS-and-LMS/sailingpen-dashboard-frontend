import { authenticatedInstance } from '../../instance'
import type { AdminProfile } from '~/types'

export async function getProfile() {
  try {
    const result = await authenticatedInstance().get<AdminProfile>('/users/admins/get-profile')
    if (result.status === 200)
      return result.data
  }
  catch (error) {
    console.log(error)
    return null
  }
}
