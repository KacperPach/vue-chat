import { reactive } from 'vue'

export const selectedChat = reactive({
  userUuid: '',
  userName: '',

  setUserName(name) {
    this.userName = name
  },
  setUserId(id) {
    this.userUuid = id
  },
  setUser(user) {
    this.setUserName(user.name)
    this.setUserId(user.uuid)
  },
})
