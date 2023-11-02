import { authenticatedInstance } from '../instance'
import type { CreateClassDto } from '~/types'

export async function create(dto: CreateClassDto) {
  try {
    const { admission_fee, banner, class_description, class_name, day, end_date, monthly_fee, start_date, subject_id, time, tutor_id } = dto
    const formData = new FormData()
    console.log('file', banner)
    formData.append('admission_fee', admission_fee.toString())
    formData.append('banner', banner as File)
    formData.append('class_description', class_description)
    formData.append('class_name', class_name)
    formData.append('day', day)
    formData.append('end_date', end_date)
    formData.append('monthly_fee', monthly_fee.toString())
    formData.append('start_date', start_date)
    formData.append('subject_id', subject_id)
    formData.append('time', time)
    formData.append('tutor_id', tutor_id)
    const result = await authenticatedInstance().post('/tution-classes', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    })
    if (result.status === 201)
      return true
  }
  catch (error) {
    console.log(error)
    return false
  }
}
