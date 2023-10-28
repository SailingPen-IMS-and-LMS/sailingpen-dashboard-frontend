import { instance } from '../instance'
import type { ListOfTutionClassDetails } from '~/types'

export async function get() {
  try {
    const result = await instance.get<ListOfTutionClassDetails>('/tution-classes')
    if (result.status === 200) {
      console.log(result.data)
      return result.data
    }
  }
  catch (error) {
    console.log(error)
  }
}
