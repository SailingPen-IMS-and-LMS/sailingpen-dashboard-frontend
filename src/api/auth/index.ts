import { login } from './login'
import { studentRegister } from './student-register'
import { tutorRegister } from './tutor-register'
import { refreshDashboard } from './refresh-dashboard'
import { logout } from './logout'

export const auth = {
  login,
  logout,
  studentRegister,
  tutorRegister,
  refreshDashboard,
}
