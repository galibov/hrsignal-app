<template>
  <div class="flex justify-center">
    <form @submit.prevent>
    <div>
      <input
        type="text"
        placeholder="Type your name"
        class="input input-bordered w-full max-w-xs"
      />
    </div>
    <div class="mt-2">
      <label class="label cursor-pointer">
        <span class="label-text mr-2">Agree to send my data to the 3rd party API</span>
        <input type="checkbox" checked="checked" class="checkbox" />
      </label>
    </div>
    <div class="mt-2">
      <button type="submit" class="btn">Send</button>
    </div>
  
  </form>
  </div>

</template>

<script setup lang="ts"></script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>
