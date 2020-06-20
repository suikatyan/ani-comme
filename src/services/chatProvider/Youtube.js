import {
  getInitialContinuation,
  listen,
} from '@/services/YoutubeService'
import Chat from '../../models/Chat'
// import Chat from '@/models/Chat'

export default class Youtube {
  #callback
  #id

  constructor(id) {
    this.#id = id
  }

  onRecieved(callback) {
    this.#callback = callback
  }

  async start() {
    const continuation = await getInitialContinuation(this.#id)
    if (!continuation) {
      return
    }

    let isFirst = true

    await listen(continuation, chatSet => {
      if (isFirst) {
        isFirst = false
        return
      }
      const chats = chatSet.chats.map(chat => this.convert(chat))

      let index = 0
      const timer = setInterval(() => {
        if (chats.length <= index) {

          clearInterval(timer)
          return
        }

        this.#callback(chats[index])
        index++
      }, chatSet.time / chats.length + 100)
    })
  }

  convert(message) {
    const chat = new Chat()
    chat.message = message.message.runs
      .filter(m => Object.prototype.hasOwnProperty.call(m, 'text'))
      .map(m => m.text)
      .join('')
    chat.time = new Date(message.timestampUsec / 1000)
    chat.number = ''
    chat.site = 'youtube'
    chat.name = message.authorName.simpleText

    return chat
  }
}
