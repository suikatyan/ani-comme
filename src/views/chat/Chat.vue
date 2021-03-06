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
import ConfigService from '@/services/ConfigService'
import DefaultConfig from '@/models/config/DefaultConfig'
import NiconicoProvider from '@/services/chatProvider/Niconico'
import YoutubeProvider from '@/services/chatProvider/Youtube'

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
      errorMessage: null,
      homeUrl: window.location.origin,
      chatServices: [],
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

      const configService = new ConfigService()
      const config = await configService.fetch(this.code)
      if (config) {
        this.config = config
        this.status = 9
      } else {
        this.errorMessage = '設定コードは無効です。'
        this.status = 1
        return
      }

      if (this.niconicoLiveId) {
        this.chatServices.push(new NiconicoProvider(this.niconicoLiveId))
      }

      if (this.youtubeLiveId) {
        this.chatServices.push(new YoutubeProvider(this.youtubeLiveId))
      }

      this.start()
    },
    start() {
      const chatService = new ChatService(this.chatServices, chat => {
        this.chats.push(chat)
      })
      chatService.start()
    },
  },
}
</script>
