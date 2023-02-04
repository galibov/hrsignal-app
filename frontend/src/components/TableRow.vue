<template>
  <tr>
    <th>{{ props.user.name }}</th>
    <td>{{ props.user.age }}</td>
    <td>{{ props.user.gender }}</td>
    <td>{{ props.user.nationality }}</td>
    <td>{{ props.user.dateSent }}</td>
  </tr>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';
const props = defineProps(['user'])





</script>
