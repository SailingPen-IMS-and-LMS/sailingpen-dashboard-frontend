<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useAuthStore, useSubjectsStore, useTutionClassesStore, useTutorsStore } from '~/stores'
import { api } from '~/api'

const router = useRouter()
const authStore = useAuthStore()
const tutionClassesStore = useTutionClassesStore()
const subjectsStore = useSubjectsStore()
const tutorsStore = useTutorsStore()

const { userType } = storeToRefs(authStore)
async function setProfile(type: 'admin' | 'tutor') {
  if (type === 'admin') {
    const profile = await api.users.admins.getProfile() || null
    authStore.setAdminProfile(profile)
  }
  else {
    const profile = await api.users.tutors.getProfile() || null
    authStore.setTutorProfile(profile)
  }
}

async function setTutionClassesForAdmins() {
  const classesListForAdmins = await api.tutionClasses.get()
  tutionClassesStore.setTutionClasses(classesListForAdmins || [])
  tutionClassesStore.setLoadingTutionClasses(false)
}

async function setTutionClassesForLoggedInTutor() {
  const classesListForLoggedInTutor = await api.tutionClasses.getMyClasses()
  tutionClassesStore.setMyTutionClasses(classesListForLoggedInTutor || [])
  tutionClassesStore.setLoadingMyTutionClasses(false)
}

async function setSubjectsForAdmins() {
  const subjectListForAdmins = await api.subjects.get()
  subjectsStore.setSubjects(subjectListForAdmins || [])
  subjectsStore.setLoadingSubjects(false)
}

async function setSubjectStreamsForAdmins() {
  const subjectStreamListForAdmins = await api.subjects.streams.get()
  subjectsStore.setSubjectStreams(subjectStreamListForAdmins || [])
  subjectsStore.setLoadingSubjectStreams(false)
}

async function setTutorsForAdmins() {
  const tutorListForAdmins = await api.users.tutors.getListForAdmin() || undefined
  tutorsStore.setTutors(tutorListForAdmins || [])
  tutorsStore.setLoadingTutors(false)
}

async function dashboardSetup(refreshResponse: 'admin' | 'tutor' | 'adminassistant' | 'tutorassistant') {
  switch (refreshResponse) {
    case 'admin':
      await Promise.all([
        setProfile('admin'),
        setTutionClassesForAdmins(),
        setSubjectsForAdmins(),
        setSubjectStreamsForAdmins(),
        setTutorsForAdmins(),
      ])
      break

    case 'tutor':
      await Promise.all([
        setProfile('tutor'),
        setTutionClassesForLoggedInTutor(),
        router.replace('/tutor-dashboard/my-classes'),
      ])
      break

    default:
      break
  }
}

onMounted(async () => {
  const refreshResponse = await api.auth.refreshDashboard()
  if (refreshResponse) {
    await dashboardSetup(refreshResponse)
    const refreshTime = 1000 * 60 * 14.5
    setInterval(async () => {
      console.log(await api.auth.refreshDashboard())
    }, refreshTime)
  }
  else {
    await router.replace('/auth/login')
  }
})

watch(userType, async (newUserType) => {
  if (newUserType)
    await dashboardSetup(newUserType)
})
</script>

<template>
  <RouterView />
</template>
