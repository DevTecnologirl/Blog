<template>
    <div>
      <UserForm @userCreated="fetchUsers" />
      <UserList :users="users" />
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref, onMounted } from 'vue';
  import { useStore } from '@/stores/user';
  import UserForm from '@/components/UseForm.vue';
  import UserList from '@/components/UserList.vue';
  
  const store = useStore();
  const users = ref(store.users);
  
  const fetchUsers = async () => {
    await store.fetchUsers();
    users.value = store.users;
  };
  
  onMounted(fetchUsers);
  </script>
  