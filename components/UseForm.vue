<template>
    <form @submit.prevent="createUser">
      <input v-model="name" placeholder="Name" />
      <input v-model="email" placeholder="Email" />
      <button type="submit">Create User</button>
    </form>
  </template>
  
  <script setup lang="ts">
  import { ref } from 'vue';
  import { useStore } from '@/stores/user';
  
  const name = ref('');
  const email = ref('');
  const store = useStore();
  
  const createUser = async () => {
    await store.createUser({ name: name.value, email: email.value });
    name.value = '';
    email.value = '';
    emit('userCreated');
  };
  </script>
  