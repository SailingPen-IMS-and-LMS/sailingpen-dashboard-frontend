import { authenticatedInstance } from '../instance'
import type { CreateTutorDto } from '~/types'

export async function tutorRegister(registerDto: CreateTutorDto) {
  try {
    const formData = new FormData()
    Object.entries(registerDto).forEach(([key, value]) => {
      formData.append(key, value)
    })
    const response = await authenticatedInstance().post('/auth/tutor-register', registerDto, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    })
    if (response.status === 201) {
      console.log(response.data)
      return true
    }
  }
  catch (error) {
    console.log(error)
    return false
  }
}
