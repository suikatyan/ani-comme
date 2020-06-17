import random from '@/utils/random'

export default class Chat {
  uid = random()
  site
  message
  time = new Date()
  name
  icon
  number
  type = 'comment'

  isNiconico() {
    return this.site === 'niconico'
  }

  isYoutube() {
    return this.site === 'youtube'
  }
}
