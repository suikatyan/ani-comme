import random from '@/utils/random'

export default class Dummy {
  #callback

  #chats = () => [
    {
      uid: random(),
      type: 'comment',
      site: 'youtube',
      message: 'おもしろいゲーム教えて',
    },
    {
      uid: random(),
      type: 'comment',
      site: 'niconico',
      message: 'ニコ生からのコメント',
    },
    {
      uid: random(),
      type: 'comment',
      site: 'youtube',
      message: 'Youtubeからのコメント',
    },
    {
      uid: random(),
      type: 'comment',
      site: 'youtube',
      message: 'おはよー',
    },
    {
      uid: random(),
      type: 'comment',
      site: 'niconico',
      message: '最近暑いね〜',
    },
    {
      uid: random(),
      type: 'comment',
      site: 'youtube',
      message: 'わこつ！',
    },
    {
      uid: random(),
      type: 'comment',
      site: 'niconico',
      message: '！？',
    },
    {
      uid: random(),
      type: 'comment',
      site: 'youtube',
      message: 'マイク入ってる？',
    },
    {
      uid: random(),
      type: 'comment',
      site: 'niconico',
      message: 'ボカロ曲　何が好き？',
    },
    {
      uid: random(),
      type: 'comment',
      site: 'youtube',
      message: '今日、僕の誕生日〜',
    },
    {
      uid: random(),
      type: 'comment',
      site: 'niconico',
      message: 'ぬるぽ',
    },
    {
      uid: random(),
      type: 'comment',
      site: 'niconico',
      message: 'スーパーカリフラジリスティックエクスピアリドーシャス！',
    },
    {
      uid: random(),
      type: 'comment',
      site: 'youtube',
      message: 'あぶなっ！',
    },
    {
      uid: random(),
      type: 'comment',
      site: 'niconico',
      message: 'ひぐらしのなく頃にって懐かしいよね。あの作者何してるんだろう…',
    },
    {
      uid: random(),
      type: 'comment',
      site: 'niconico',
      message: '枠お(*´ 3 `)ちゅっちゅー',
    },
    {
      uid: random(),
      type: 'comment',
      site: 'youtube',
      message: 'あれ　この赤いの何？',
    },
    {
      uid: random(),
      type: 'comment',
      site: 'niconico',
      message: 'アメリカナイズされたテンションの上げ方だな',
    },
  ]

  onRecieved(callback) {
    this.#callback = callback
  }

  start() {
    const generator = () => {
      const chat = this.#chats()
      const that = this
      return function *() {
        let index = 1
        while (true) {
          yield that.#chats()[index % chat.length]
          index += 1
        }
      }
    }

    const gen = generator()()

    const timer = () => {
      this.#callback(gen.next().value)
      setTimeout(timer, random(500, 3000))
    }

    timer()
  }
}
