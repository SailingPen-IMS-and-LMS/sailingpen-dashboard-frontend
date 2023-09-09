import { authenticatedInstance } from '../instance'

export async function logout() {
  try {
    const result = await authenticatedInstance().post('/auth/logout')
    if (result.status === 200) {
      localStorage.setItem('accessTokenDashboard', '')
      return true
    }
  }
  catch (error) {
    console.log(error)
    return false
  }
}
