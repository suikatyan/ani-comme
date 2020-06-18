import DefaultConfig from '@/models/config/DefaultConfig'
import md5 from 'md5'

export default class ConfigService {
  config
  code

  async save() {
    const {db} = await import('@/utils/firestore')
    const collection = db.collection('config')
    this.generateCode()
    const configOnCloud = await collection
      .doc(this.code)
      .get()

    if (!configOnCloud.exists) {
      const json = JSON.stringify(this.config)
      collection.doc(this.code).set({
        code: this.code,
        config: json,
      })
    }

    return this.code
  }

  async fetch(code) {
    const {db} = await import('@/utils/firestore')
    const collection = db.collection('config')
    this.code = code
    const configOnCloud = await collection
      .doc(this.code)
      .get()

    if (configOnCloud.exists) {
      this.config = Object.assign({}, DefaultConfig, JSON.parse(configOnCloud.data().config))
      return this.config
    }

    return false
  }

  generateCode() {
    const json = JSON.stringify(this.config)
    this.code = `config-${md5(json)}`
    return this.code
  }
}
