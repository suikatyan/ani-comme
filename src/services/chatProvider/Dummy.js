import random from '@/utils/random'

export default class Dummy {
  #callback

  #chats = () => [
    {
      uid: random(),
      type: 'comment',
      site: 'youtube',
      time: new Date(),
      name: '山田',
      icon: '',
      number: '',
      message: 'おもしろいゲーム教えて',
    },
    {
      uid: random(),
      type: 'comment',
      site: 'niconico',
      time: new Date(),
      name: 'wji392h8',
      icon: '',
      number: 1,
      message: 'ニコ生からのコメント',
    },
    {
      uid: random(),
      type: 'comment',
      site: 'youtube',
      time: new Date(),
      name: '鈴ちゃん',
      icon: '',
      number: '',
      message: 'Youtubeからのコメント',
    },
    {
      uid: random(),
      type: 'comment',
      site: 'youtube',
      time: new Date(),
      name: 'ゆーた',
      icon: '',
      number: '',
      message: 'おはよー',
    },
    {
      uid: random(),
      type: 'comment',
      site: 'niconico',
      time: new Date(),
      name: 'るいたん',
      icon: '',
      number: 2,
      message: '最近暑いね〜',
    },
    {
      uid: random(),
      type: 'comment',
      site: 'youtube',
      time: new Date(),
      name: '無限のかなた',
      icon: '',
      number: '',
      message: 'わこつ！',
    },
    {
      uid: random(),
      type: 'comment',
      site: 'niconico',
      time: new Date(),
      name: '39gh10av',
      icon: '',
      number: 3,
      message: '！？',
    },
    {
      uid: random(),
      type: 'comment',
      site: 'youtube',
      time: new Date(),
      name: '鈴ちゃん',
      icon: '',
      number: '',
      message: 'マイク入ってる？',
    },
    {
      uid: random(),
      type: 'comment',
      site: 'niconico',
      time: new Date(),
      name: 'ojfe5d9',
      icon: '',
      number: 4,
      message: 'ボカロ曲　何が好き？',
    },
    {
      uid: random(),
      type: 'comment',
      site: 'youtube',
      time: new Date(),
      name: '90号式怪獣',
      icon: '',
      number: '',
      message: '今日、僕の誕生日〜',
    },
    {
      uid: random(),
      type: 'comment',
      site: 'niconico',
      time: new Date(),
      name: 'jo910fb3',
      icon: '',
      number: 5,
      message: 'ぬるぽ',
    },
    {
      uid: random(),
      type: 'comment',
      site: 'niconico',
      time: new Date(),
      name: 'ma028gb3',
      icon: '',
      number: 6,
      message: 'スーパーカリフラジリスティックエクスピアリドーシャス！',
    },
    {
      uid: random(),
      type: 'comment',
      site: 'youtube',
      time: new Date(),
      name: 'test',
      icon: '90号式怪獣',
      number: '',
      message: 'あぶなっ！',
    },
    {
      uid: random(),
      type: 'comment',
      site: 'niconico',
      time: new Date(),
      name: '01bza98t',
      icon: '',
      number: 7,
      message: 'ひぐらしのなく頃にって懐かしいよね。あの作者何してるんだろう…',
    },
    {
      uid: random(),
      type: 'comment',
      site: 'niconico',
      time: new Date(),
      name: 'aoei38gb',
      icon: '',
      number: 8,
      message: '枠お(*´ 3 `)ちゅっちゅー',
    },
    {
      uid: random(),
      type: 'comment',
      site: 'youtube',
      time: new Date(),
      name: 'スイカちゃん',
      icon: '',
      number: '',
      message: 'あれ　この赤いの何？',
    },
    {
      uid: random(),
      type: 'comment',
      site: 'niconico',
      time: new Date(),
      name: '10a9gn32',
      icon: '',
      number: 9,
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
