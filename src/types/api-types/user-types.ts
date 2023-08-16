export interface StudentProfile {
  student_id: string
  school: string
  parent_contact_no: string
  barcode: string | null
  user_id: string
  address: string
  admin: any
  avatar: string | null
  contact_no: string
  dob: string
  email: string
  f_name: string
  l_name: string
  nic: string
  user_type: string
  username: string
}

export interface AdminProfile {
  admin_id: string
  user_id: string
  address: string
  avatar: string | null
  contact_no: string
  dob: string
  email: string
  f_name: string
  l_name: string
  nic: string
  user_type: string
  username: string
}

export interface TutorBasicDetails {
  tutor_id: string
  subject_name: string
  f_name: string
  l_name: string
  email: string
  avatar: string
  create_at: string
}

export type ListOfTutorBasicDetails = TutorBasicDetails[]

export interface TutorProfile {
  tutor_id: string
  qualifications: string[]
  payment_details: PaymentDetails
  user_id: string
  subject_id: string | null
  address: string
  admin: any
  avatar: string | null
  contact_no: string
  dob: string
  email: string
  f_name: string
  l_name: string
  nic: string
  user_type: string
  username: string
}

export interface PaymentDetails {
  bank_name: string
  branch_name: string
  account_no: string
}
