import { authenticatedInstance } from '../instance'
import type { ListOfTutionClassDetails } from '~/types'

export async function getMyClasses() {
  try {
    const result = await authenticatedInstance().get<ListOfTutionClassDetails>('/tution-classes/my-classes')
    if (result.status === 200) {
      console.log(result.data)
      return result.data
    }
  }
  catch (error) {
    console.log(error)
  }
}
