<template>
<div class="text-center p-4">
  <h1 class="text-3xl font-bold underline">Guess my info</h1>
  <SendingForm/>
  <DataTable/>
</div>

</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import SendingForm from './components/SendingForm.vue';
import DataTable from './components/DataTable.vue';

onMounted(() => {
  console.log('mounted')
})

</script>

<style lang="scss">

</style>
