<script setup lang="ts">
import { useAuthStore, useSubjectsStore, useTutionClassesStore, useTutorsStore } from '~/stores'
import { api } from '~/api'
import type { AdminProfile, ListOfSubjectDetails, ListOfTutionClassDetails, ListOfTutorBasicDetails, TutorProfile } from '~/types'

const router = useRouter()
const authStore = useAuthStore()
const tutionClassesStore = useTutionClassesStore()
const subjectsStore = useSubjectsStore()
const tutorsStore = useTutorsStore()

onMounted(async () => {
  const refreshResponse = await api.auth.refreshDashboard()
  if (refreshResponse) {
    let profile: null | AdminProfile | TutorProfile
    let classesListForAdmins: undefined | ListOfTutionClassDetails
    let subjectListForAdmins: undefined | ListOfSubjectDetails
    let tutorListForAdmins: undefined | ListOfTutorBasicDetails
    switch (refreshResponse) {
      case 'admin':
        profile = await api.users.admins.getProfile() || null
        authStore.setAdminProfile(profile)
        classesListForAdmins = await api.tutionClasses.get()
        tutionClassesStore.setTutionClasses(classesListForAdmins || [])
        tutionClassesStore.setLoadingTutionClasses(false)
        subjectListForAdmins = await api.subjects.get()
        subjectsStore.setSubjects(subjectListForAdmins || [])
        subjectsStore.setLoadingSubjects(false)
        tutorListForAdmins = await api.users.tutors.getListForAdmin() || undefined
        tutorsStore.setTutors(tutorListForAdmins || [])
        tutorsStore.setLoadingTutors(false)
        break

      case 'tutor':
        profile = await api.users.tutors.getProfile() || null
        authStore.setTutorProfile(profile)
        break

      default:
        break
    }

    setInterval(async () => {
      await api.auth.refreshDashboard()
    }, 1000 * 60 * 14.5)
  }
  else {
    await router.replace('/auth/login')
  }
})
</script>

<template>
  <RouterView />
</template>
