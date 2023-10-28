<script setup lang="ts">
import { useAuthStore, useSubjectsStore, useTutionClassesStore, useTutorsStore } from '~/stores'
import { api } from '~/api'
import type { AdminProfile, ListOfSubjectDetails, ListOfSubjectStream, ListOfTutionClassDetails, ListOfTutorBasicDetails, TutorProfile } from '~/types'

const router = useRouter()
const authStore = useAuthStore()
const tutionClassesStore = useTutionClassesStore()
const subjectsStore = useSubjectsStore()
const tutorsStore = useTutorsStore()

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

onMounted(async () => {
  const refreshResponse = await api.auth.refreshDashboard()
  console.log(refreshResponse)
  if (refreshResponse) {
    let profile: null | AdminProfile | TutorProfile
    let classesListForAdmins: undefined | ListOfTutionClassDetails
    let subjectListForAdmins: undefined | ListOfSubjectDetails
    let subjectStreamListForAdmins: undefined | ListOfSubjectStream
    let tutorListForAdmins: undefined | ListOfTutorBasicDetails
    switch (refreshResponse) {
      case 'admin':
        // profile = await api.users.admins.getProfile() || null
        // authStore.setAdminProfile(profile)
        // classesListForAdmins = await api.tutionClasses.get()
        // tutionClassesStore.setTutionClasses(classesListForAdmins || [])
        // tutionClassesStore.setLoadingTutionClasses(false)
        // subjectListForAdmins = await api.subjects.get()
        // subjectsStore.setSubjects(subjectListForAdmins || [])
        // subjectsStore.setLoadingSubjects(false)
        // subjectStreamListForAdmins = await api.subjects.streams.get()
        // subjectsStore.setSubjectStreams(subjectStreamListForAdmins || [])
        // subjectsStore.setLoadingSubjectStreams(false)
        // tutorListForAdmins = await api.users.tutors.getListForAdmin() || undefined
        // tutorsStore.setTutors(tutorListForAdmins || [])
        // tutorsStore.setLoadingTutors(false)
        await Promise.all([
          setProfile('admin'),
          setTutionClassesForAdmins(),
          setSubjectsForAdmins(),
          setSubjectStreamsForAdmins(),
          setTutorsForAdmins(),
        ])
        break

      case 'tutor':
        // profile = await api.users.tutors.getProfile() || null
        // authStore.setTutorProfile(profile)
        await Promise.all([
          setProfile('tutor'),
          setTutionClassesForLoggedInTutor(),
        ])
        break

      default:
        break
    }

    const refreshTime = 1000 * 60 * 14.5

    setInterval(async () => {
      console.log(await api.auth.refreshDashboard())
    }, refreshTime)
  }
  else {
    await router.replace('/auth/login')
  }
})
</script>

<template>
  <RouterView />
</template>
