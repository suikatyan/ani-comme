import Chat from '@/models/Chat'

export default class Youtube {
  #callback
  #id

  constructor(id) {
    this.#id = id
  }

  onRecieved(callback) {
    this.#callback = callback
  }

  start() {

    // this.#callback(gen.next().value)
  }
}
