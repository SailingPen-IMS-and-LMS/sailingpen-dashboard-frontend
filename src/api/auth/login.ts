import { instance } from '../instance'
import type { LoginDto, LoginResponse } from '~/types'

export async function login(loginDto: LoginDto) {
  try {
    const result = await instance.post<LoginResponse>('/auth/login', loginDto)
    if (result.status === 200) {
      console.log(result.data)
      localStorage.setItem('accessToken', result.data.accessToken)
      return result.data.userType
    }
  }
  catch (error) {
    console.log(error)
    throw error
  }
}
