import { defineStore } from 'pinia'
import { IUser } from '../interfaces/user'
export const useUsersDataStore = defineStore('usersData', {
  state: () => ({
    users: localStorage.getItem('users') ? JSON.parse(localStorage.getItem('users')) : [] as IUser[],
  }),
  actions: {
    addUser(userData: IUser) {
     this.users.push(userData)
     localStorage.setItem('users', JSON.stringify(this.users))
    },
  },
})