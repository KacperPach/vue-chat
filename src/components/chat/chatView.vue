<script setup>
import Chatbubble from './chatbubble.vue'
import { selectedChat } from './chatVariables'
</script>

<template>
  <div class="chatWindow">
    <h2>Chat z: {{ selectedChat.userName }}</h2>
    <hr />
    <div class="chatContainer">
      <Chatbubble v-for="message in selectedChat.userMessages">
        <a>{{ message.text }}</a>
      </Chatbubble>
    </div>
  </div>
</template>

<style scoped>
.chatContainer {
  padding: 0.5em;
  display: flex;
  flex-direction: column;
  overflow: auto;
}
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
