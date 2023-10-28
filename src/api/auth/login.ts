import { instance } from '../instance'
import type { LoginResponse, StudentLoginDto } from '~/types'

export async function login(loginDto: StudentLoginDto) {
  try {
    const result = await instance.post<LoginResponse>('/auth/login', loginDto)
    if (result.status === 200) {
      console.log(result.data)
      console.log(result.data)
      localStorage.setItem('accessTokenDashboard', result.data.accessTokenDashboard)
      return result.data.userType
    }
  }
  catch (error) {
    console.log(error)
    throw error
  }
}
