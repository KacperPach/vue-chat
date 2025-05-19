<script setup>
const tempUrl = import.meta.env.VITE_API_URL_USERS

import { onMounted, ref } from 'vue'

const friendList = ref({})
onMounted(() => {
  fetch(tempUrl)
    .then((res) => res.json())
    .then((data) => (friendList.value = data))
    .catch((err) => console.log(err))
})
</script>

<template>
  <div class="chatWindow">
    <h2>Friends</h2>
    <hr />
    <div v-for="friend in friendList" class="friendItem">
      <a>{{ friend.name }}</a>
    </div>
  </div>
</template>

<style scoped>
.chatWindow {
  display: flex;
  flex-direction: column;
  width: 20vw;
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
.friendItem {
  display: flex;
  justify-content: center;
}
</style>
