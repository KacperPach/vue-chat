import { reactive } from 'vue'
const chatsUrl = import.meta.env.VITE_API_URL_CHATS

export const selectedChat = reactive({
  userUuid: '',
  userName: '',
  userMessages: [],

  fetchMessages() {
    fetch(chatsUrl + '/' + this.userUuid)
      .then((res) => res.json())
      .then((data) => console.log(data))
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
