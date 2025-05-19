import { reactive } from 'vue'
const chatsUrl = import.meta.env.VITE_API_URL_CHATS

export const selectedChat = reactive({
  userUuid: '',
  userName: '',
  userMessages: [],

  appendMessage(userMessage) {
    const message = {
      from: 'noUser',
      to: this.userUuid,
      message: userMessage,
    }
    // ten endpoint nie jest poprawinie obsługiwany przez mockapi
    fetch(chatsUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(message),
    })
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((err) => console.log(err))
    this.userMessages.push({ text: userMessage, uuid: 'noUser' })
  },
  fetchMessages() {
    fetch(chatsUrl + '/' + this.userUuid)
      .then((res) => res.json())
      .then((data) => (this.userMessages = data[0].messages))
      .catch((err) => console.log(err))
  },
  setUserName(name) {
    this.userName = name
  },
  setUserId(id) {
    this.userUuid = id
    this.fetchMessages()
  },
  setUser(user) {
    this.setUserName(user.name)
    this.setUserId(user.uuid)
  },
})
