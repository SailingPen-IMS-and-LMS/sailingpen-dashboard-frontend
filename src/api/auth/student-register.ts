import { authenticatedInstance } from '../instance'
import type { StudentRegisterDto } from '~/types'

export async function studentRegister(registerDto: StudentRegisterDto) {
  try {
    const formData = new FormData()
    Object.entries(registerDto).forEach(([key, value]) => {
      // if value is an array, we need to loop through it
      if (Array.isArray(value)) {
        value.forEach((item) => {
          formData.append(key, item)
        })
      }
      else {
        formData.append(key, value)
      }
    })
    const response = await authenticatedInstance().post('/auth/student-register', registerDto, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    })
    if (response.status === 201)
      return true
  }
  catch (error) {
    console.log(error)
    return false
  }
}
