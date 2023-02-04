import { defineStore } from 'pinia'
import { IUser } from '../interfaces/user'
export const useUsersDataStore = defineStore('usersData', {
  state: () => ({
    users: [] as IUser[],
  }),
  actions: {
    addUser(userData: IUser) {
     this.users.push(userData)
    },
  },
})