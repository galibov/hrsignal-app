<template>
  <div class="flex justify-center mt-4">
    <table class="table w-2/3">
    <!-- head -->
    <thead>
      <tr>
        <th>Name</th>
        <th>Age</th>
        <th>Gender</th>
        <th>Nationality</th>
        <th>Date Sent</th>
       
      </tr>
    </thead>
    <tbody>
      <TableRow :user="user" :key="`user-row-${key}`"  v-for="(user, key) in users"/>
    </tbody>
  </table>
  </div>

</template>

<script setup lang="ts">
import TableRow from './TableRow.vue';
import {useUsersDataStore} from '../store/usersData';
const usersData = useUsersDataStore();
const users = usersData.users;
</script>

