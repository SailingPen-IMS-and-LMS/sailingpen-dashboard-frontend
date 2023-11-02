import type { DayName } from '~/types'

export interface EnrolledClass {
  class_id: string
  class_name: string
  tutor_id: string
  tutor_f_name: string
  tutor_l_name: string
  tutor_avatar: string
}

export type EnrolledClasses = EnrolledClass[]

export interface NotEnrolledClass {
  class_description: string
  class_id: string
  class_name: string
  schedule: null | Array<{ day: DayName; from_time: string; to_time: string }>
  subject_id: string
  tutor_id: string
  admission_fee: number | string
  monthly_fee: number | string
}

export type NotEnrolledClasses = NotEnrolledClass[]

export type ListOfTutionClassDetails = TutionClassDetails[]

export interface TutionClassDetails {
  class_id: string
  class_name: string
  class_description: string
  schedule: null | {
    day: DayName
    time: string
  }
  admission_fee: string
  monthly_fee: string
  subject_id: string
  tutor_id: string
  subject: Subject
  tutor: Tutor
  enrollment: Enrollment[]
}

export interface Subject {
  subject_id: string
  subject_name: string
  subject_description: string
}

export interface Tutor {
  tutor_id: string
  qualifications: string[]
  payment_details: string
  user_id: string
  user: GenericUser
  subject_id: string
}

export interface Enrollment {
  id: number
  enrolled_date_time: string
  student_id: string
  class_id: string
}

export interface GenericUser {
  f_name: string
  l_name: string
}

export interface CreateClassDto {

  class_name: string
  class_description: string
  admission_fee: number
  monthly_fee: number
  subject_id: string
  tutor_id: string
  day: DayName | ''
  time: string
  start_date: string
  end_date: string
  banner: File | null
}
