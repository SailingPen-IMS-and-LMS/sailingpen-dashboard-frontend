export interface StudentRegisterDto {
  nic: string
  f_name: string
  l_name: string
  email: string
  password: string
  confirm_password: string
  dob: string
  address: string
  contact_no: string
  school: string
  parent_contact_no: string
  avatar: File | null
  terms: false
}

export interface StudentLoginDto {
  username: string
  password: string
}

export interface CreateTutorDto {
  username: string
  nic: string
  f_name: string
  l_name: string
  email: string
  password: string
  confirm_password: string
  dob: string
  address: string
  contact_no: string
  avatar: File | null
  qualifications: string[]
  subject_id: string
  bank_name: string
  branch_name: string
  account_no: string
}

export interface LoginResponse {
  accessTokenDashboard: string
  userType: 'admin' | 'tutor' | 'adminassistant' | 'tutorassistant'
}

export interface AuthRefreshResponse {
  accessTokenDashboard: string
  userType: 'admin' | 'tutor' | 'adminassistant' | 'tutorassistant'
}
