import { acceptHMRUpdate, defineStore } from 'pinia'
import type { AdminProfile, TutorProfile } from '~/types'

export interface AuthState {
  profile: AdminProfile | TutorProfile | null
  userType: 'admin' | 'adminassistant' | 'tutor' | 'tutorassistant' | null
}

export const useAuthStore = defineStore('auth', {
  state: (): AuthState => ({
    profile: null,
    userType: null,
  }),

  getters: {
    isAuthenticated: (state) => { return !!state.profile },

    fullName: (state) => {
      if (!state.profile)
        return ''
      return `${state.profile.f_name} ${state.profile.l_name}`
    },

  },

  actions: {
    setAdminProfile(profile: AdminProfile | null) {
      this.profile = profile
      this.userType = 'admin'
    },
    setTutorProfile(profile: TutorProfile | null) {
      this.profile = profile
      this.userType = 'tutor'
    },
  },
})

if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(useAuthStore, import.meta.hot))
