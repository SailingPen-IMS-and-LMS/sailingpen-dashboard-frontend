export type ListOfSubjectDetails = SubjectDetails[]
export type ListOfSubjectStream = SubjectStream[]

export interface SubjectDetails {
  subject_id: string
  subject_name: string
  subject_description: string
  subject_stream: SubjectStream[]
}

export interface SubjectCreateDto {
  subject_name: string
  subject_description: string
  subject_stream_ids: string[]
}

export interface SubjectStreamCreateDto {
  subject_stream_name: string
  subject_stream_description: string
}

export interface SubjectStream {
  subject_stream_id: string
  stream_name: string
  stream_description: string
}
