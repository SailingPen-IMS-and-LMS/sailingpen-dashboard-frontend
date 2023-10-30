import { ref } from 'vue'

export function useWeeklySessionCreation() {
  const addMode = ref(false)
  const newWeeklySessionFormData = ref({
    description: '',
    video_id: '',
    attachment_ids: [] as string[],
  })
  return { addMode, newWeeklySessionFormData }
}
