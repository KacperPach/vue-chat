<script setup>
import Chatbubble from './chatbubble.vue'
import { selectedChat } from './chatVariables'
const chatsUrl = import.meta.env.VITE_API_URL_CHATS
import { ref } from 'vue'

const userText = ref()

const handleMessageSubmit = () => {
  selectedChat.appendMessage(userText.value)
  console.log(userText.value)
}
</script>

<template>
  <div class="chatWindow">
    <h2>Chat z: {{ selectedChat.userName }}</h2>
    <hr />
    <div class="chatContainer">
      <Chatbubble
        v-for="message in selectedChat.userMessages"
        :isUserMessage="message.uuid !== selectedChat.userUuid"
      >
        {{ message.text }}
      </Chatbubble>
    </div>
    <form @submit.prevent="handleMessageSubmit">
      <input type="text" name="" id="" v-model="userText" placeholder="Wiadomość..." />
      <input type="submit" value=">" :disabled="selectedChat.userUuid === ''" />
    </form>
  </div>
</template>

<style scoped>
.chatContainer {
  width: 100%;
  height: 100%;
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
form {
  display: flex;
  padding: 10px;

  justify-content: flex-end;
  align-items: center;
  height: 10%;
}
</style>
