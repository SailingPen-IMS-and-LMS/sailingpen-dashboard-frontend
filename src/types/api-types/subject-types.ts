export type ListOfSubjectDetails = SubjectDetails[]

export interface SubjectDetails {
  subject_id: string
  subject_name: string
  subject_description: string
  subject_stream: SubjectStream[]
}

export interface SubjectStream {
  subject_stream_id: string
  stream_name: string
  stream_description: string
}
