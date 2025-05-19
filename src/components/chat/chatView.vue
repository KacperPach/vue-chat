<script setup>
import { selectedChat } from './chatVariables'
</script>

<template>
  <div class="chatWindow">
    <h2>Chat z: {{ selectedChat.userName }}</h2>
    <hr />
  </div>
</template>

<style scoped>
.chatWindow {
  display: flex;
  flex-direction: column;
  width: 50vw;
  height: 50vh;
  border: 4px dashed #bababa;
  border-radius: 25px;
}
h2 {
  padding: 1em;
}
hr {
  border: 2px solid;
}
</style>
