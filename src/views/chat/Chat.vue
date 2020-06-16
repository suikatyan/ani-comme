<template>
  <blank-layout>
    <div class="chat">
      <template v-if="status === 1">
        エラー。{{ errorMessage }}<br>
        <v-btn
          :href="homeUrl"
          color="primary"
        >
          トップへ戻る
        </v-btn>
      </template>
      <template v-if="status === 2">
        <v-container fill-height>
          <v-row>
            <v-col class="text-center">
              <v-progress-circular
                :size="70"
                :width="7"
                color="primary"
                indeterminate
              />
            </v-col>
          </v-row>
        </v-container>
      </template>
      <template v-if="status === 9">
        <chat-area
          :config="config"
          :chats="chats"
        />
      </template>
    </div>
  </blank-layout>
</template>

<style>
.chat {
  height: 100%;
  margin: 4px;
  padding: 0;
  overflow: scroll;
}

* {
  -ms-overflow-style: none;
  scrollbar-width: none;
}

*::-webkit-scrollbar {
  display: none;
}

*:not(.chat *), .v-application {
  background-color: #00000000 !important;
}
</style>

<script>
import BlankLayout from '@/components/layouts/BlankLayout'
import ChatArea from '@/components/chat/ChatArea'
import ChatService from '@/services/ChatService'
import DefaultConfig from '@/models/config/DefaultConfig'
import DummyProvider from '@/services/chatProvider/Dummy'

export default {
  components: {
    BlankLayout,
    ChatArea,
  },
  data() {
    return {
      config: DefaultConfig,
      chats: [],
      status: 0,
      dialog: true,
      niconicoUrl: '',
      youtubeUrl: '',
      errorMessage: null,
      homeUrl: window.location.origin,
    }
  },
  computed: {
    niconicoLiveId() {
      return this.$route.query.niconico
    },
    youtubeLiveId() {
      return this.$route.query.youtube
    },
    code() {
      return this.$route.query.code
    },
  },
  mounted() {
    this.initialize()
  },
  methods: {
    async initialize() {
      if (!this.code) {
        this.errorMessage = '設定コードが指定されていません。'
        this.status = 1
        return
      }

      if (!(this.niconicoLiveId || this.youtubeLiveId)) {
        this.errorMessage = 'ニコニコ生放送あるいはYoutubeの配信IDが指定されていません。'
        this.status = 1
        return
      }

      this.status = 2

      const {db} = await import('@/utils/firestore')
      const collection = db.collection('config')
      const configOnCloud = await collection
        .doc(this.code)
        .get()

      if (configOnCloud.exists) {
        this.config = Object.assign({}, DefaultConfig, JSON.parse(configOnCloud.data().config))
        this.start()
        this.status = 9
      } else {
        this.errorMessage = '設定コードは無効です。'
        this.status = 1
      }
    },
    start() {
      const chatService = new ChatService([new DummyProvider()], chat => {
        this.chats.push(chat)
      })
      chatService.start()
    },
  },
}
</script>
