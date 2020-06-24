<template>
  <default-layout class="home">
    <v-container>
      <v-row>
        <v-col cols="7">
          <div class="my-12">
            <h2 class="text-h3">
              アニメーション付きコメント表示ツール
            </h2>
            <div class="mt-2">
              自分だけのコメントのレイアウトを決めて、配信画面に映そう！
              OBSにも対応！
            </div>
          </div>
          <div class="pt-5 text-center">
            <v-btn
              :to="{name: 'Config'}"
              color="white"
              large
            >
              レイアウトを決める
              <v-icon small>
                mdi-cog
              </v-icon>
            </v-btn>
          </div>
        </v-col>
        <v-col cols="5">
          <div class="text-center">
            サンプル
          </div>
          <v-card class="preview">
            <chat-area
              :config="config"
              :chats="chats"
              class="full-height"
            />
          </v-card>
          <preset-section @change="config = $event" />
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="4">
          <v-card height="100%">
            <v-card-title>
              高いカスタマイズ性
            </v-card-title>
            <v-card-text>
              チャットのフォント、色など多くの項目をカスタマイズ可能です。「時間・コメント」「名前・コメント」など表示項目を決められます。
            </v-card-text>
          </v-card>
        </v-col>
        <v-col cols="4">
          <v-card height="100%">
            <v-card-title>
              多様なアニメーション
            </v-card-title>
            <v-card-text>
              フェードイン・アウトだけでなくユニークなアニメーションも使えます。
            </v-card-text>
          </v-card>
        </v-col>
        <v-col cols="4">
          <v-card height="100%">
            <v-card-title>
              複数の配信サイトに対応
            </v-card-title>
            <v-card-text>
              ニコニコ生放送・Youtubeに対応しています。
              両方のチャットを1つの画面にまとめて表示します。
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </default-layout>
</template>

<style scoped>
.preview {
  height: 400px;
  overflow: scroll;
  -ms-overflow-style: none;
  scrollbar-width: none;
}

.home {
  color: white;
  background: linear-gradient(to bottom, #610dc9 0%,#df9bff 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
}
</style>

<script>
import ChatArea from '@/components/chat/ChatArea'
import ChatService from '@/services/ChatService'
import DefaultConfig from '@/models/config/DefaultConfig'
import DefaultLayout from '@/components/layouts/DefaultLayout'
import DummyProvider from '@/services/chatProvider/Dummy'
import PresetSection from '@/components/config/sections/PresetSection.vue'

export default {
  components: {
    DefaultLayout,
    ChatArea,
    PresetSection,
  },
  data() {
    return {
      config: DefaultConfig,
      chats: [],
    }
  },
  mounted() {
    const chatService = new ChatService([new DummyProvider()], chat => {
      this.chats.push(chat)
    })
    chatService.start()
  },
}
</script>
