import { defineStore } from 'pinia';
import { useFetchHelper } from '@/composables/useFetchHelper';

export const useStore = defineStore('user', {
  state: () => ({
    users: [],
  }),
  actions: {
    async fetchUsers() {
      try {
        const data = await useFetchHelper('/api/users');
        this.users = data;
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    },
    async createUser(userData: { name: string; email: string }) {
      try {
        await useFetchHelper('/api/users', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(userData),
        });
        this.fetchUsers();
      } catch (error) {
        console.error('Error creating user:', error);
      }
    },
  },
});
