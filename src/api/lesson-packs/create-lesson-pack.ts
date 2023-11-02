import { authenticatedInstance } from '../instance'

interface CreateLessonPackDto {
  name: string
  description: string
  price: number
  resources: number[]
  coverImage: File
}

export async function createLessonPack(data: CreateLessonPackDto) {
  try {
    const formData = new FormData()
    formData.append('name', data.name)
    formData.append('description', data.description)
    formData.append('price', data.price.toString())
    formData.append('cover_image', data.coverImage)
    // loop resources and append each one
    for (const resourceId of data.resources)
      formData.append('resources[]', resourceId.toString())

    const response = await authenticatedInstance().post('/lesson-packs', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    })
    if (response.status === 201)
      return response.data
    return undefined
  }
  catch (error) {
    console.error(error)
    return undefined
  }
}
