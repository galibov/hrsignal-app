<template>
  <div class="flex justify-center mt-4">
    <form  @submit.prevent="sendData">
    <div>
      <input
        type="text"
        v-model="userName"
        placeholder="Type your name"
        class="input input-bordered w-full max-w-xs"
      />
    </div>
    <div class="mt-2">
      <label class="label cursor-pointer">
        <span class="label-text mr-2">Agree to send my data to the 3rd party API</span>
        <input type="checkbox" @change="disabled = !disabled" :checked="agreeToSend" class="checkbox" />
      </label>
    </div>
    <div class="mt-2">
      <button :disabled="disabled"  type="submit" class="btn">Send</button>
    </div>
  
  </form>
  </div>

</template>

<script setup lang="ts">
import { ref } from 'vue';
import axios from 'axios';
import { useUsersDataStore } from '../store/usersData';
const userName  = ref<string>('');
const agreeToSend = ref<boolean>(false);
const disabled = ref<boolean>(true);
const usersData = useUsersDataStore();

const sendData = async () => {
  try {
    const response = await axios.get('http://localhost:3000/', {
      params: {
        name: userName.value
      }
    });
    usersData.addUser(response.data);
    userName.value = '';
  } catch (error) {
    console.log(error);
  }
}
</script>

