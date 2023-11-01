import { authenticatedInstance } from '../../../instance'
import type { ClassDetailedWeeklySessions } from '~/types'

export async function getCurrentMonthWeeklyResources(classId: string) {
  try {
    const result = await authenticatedInstance().get<ClassDetailedWeeklySessions>(`/tution-classes/weekly-sessions?tution_class_id=${classId}`)
    if (result.status === 200) {
      console.log(result.data)
      return result.data.map((session) => {
        return {
          ...session,
          date: session.date.split('T')[0],
        }
      })
    }
    return undefined
  }
  catch (error) {
    console.log(error)
    return undefined
  }
}
