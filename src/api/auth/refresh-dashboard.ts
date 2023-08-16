import { instance } from '../instance'
import type { AuthRefreshResponse } from '~/types'

export async function refreshDashboard() {
  try {
    const result = await instance.get<AuthRefreshResponse>('/auth/refresh-dashboard')
    if (result.status === 200) {
      localStorage.setItem('accessToken', result.data.accessToken)
      return result.data.userType
    }
  }
  catch (error) {
    console.log(error)
  }
}
