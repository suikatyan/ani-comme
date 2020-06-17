export default class ChatService {
  #chatProviders = []

  #callback

  #chats = []

  constructor(providers, callback) {
    this.#chatProviders.push(...providers)
    this.#callback = callback
  }

  start() {
    for (const provicer of this.#chatProviders) {
      provicer.onRecieved(chat => this.#chats.push(chat))
      provicer.start()
    }

    setInterval(() => {
      if (this.#chats.length === 0) {
        return
      }

      this.#callback(this.#chats.shift())
    }, 100)
  }
}
