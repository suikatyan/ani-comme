import {
  getThreadId,
  getWssUrl,
  listen,
} from '@/services/NicoService'
import Chat from '../../models/Chat'

const NAME_LENGTH_WHEN_184 = 8

export default class Niconico {
  #callback
  #id

  constructor(id) {
    this.#id = id
  }

  async start() {
    const wssUrl = await getWssUrl(this.#id)
    const {
      messageWssUrl,
      threadId,
    } = await getThreadId(wssUrl)
    listen(messageWssUrl, threadId, e => {
      const message = JSON.parse(e.data)
      if (Object.prototype.hasOwnProperty.call(message, 'chat')) {
        this.#callback(this.convert(message.chat))
      }
    })
  }

  onRecieved(callback) {
    this.#callback = callback
  }

  convert(message) {
    const chat = new Chat()
    chat.message = message.content
    chat.time = new Date(message.date * 1000)
    chat.number = message.no
    chat.site = 'niconico'

    if (message.mail && message.mail.includes('184')) {
      chat.icon = ''
      chat.name = message.user_id.slice(0, NAME_LENGTH_WHEN_184)
    } else {
      chat.icon = ''
      chat.name = message.user_id
    }

    return chat
  }
}
