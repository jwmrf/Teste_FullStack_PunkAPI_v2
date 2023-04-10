// @ts-check
import { defineStore, acceptHMRUpdate } from 'pinia'
import Webservices from './../services/web'
const ws = new Webservices('user')

async function apiLogin(a: string, p: string) {
  ws.resource = 'user/login'
  let result = await ws.login(a, p)
  if (!result?.data?.access_token) {
    return Promise.reject(new Error('invalid credentials'))
  }
  return result.data.access_token
}

export const useUserStore = defineStore({
    id:'user',
  state: () => {
    return {
        name: '',
        isAdmin: false,
        token: ''
    }
  },
  persistedState: {
    overwrite: true
  },

  actions: {
    logout() {
      this.$patch({
        name: '',
        isAdmin: false,
        token: ''
      })

    },
    async login(user: string, password: string) {
      
      const userData = await apiLogin(user, password)
      ws.setToken(userData)
      this.$patch({
        name: user,
        isAdmin: true,
        token: userData
      })
    },

    async testAuth() {
      ws.resource = 'user'
      const users = await ws.getUsers()
      console.log(users)

    }
  }
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useUserStore, import.meta.hot))
}
