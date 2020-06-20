<template>
  <default-layout>
    <div class="chat">
      <template v-if="code">
        <v-dialog
          v-model="dialog"
          persistent
          max-width="700px"
        >
          <v-card scrollable>
            <v-card-title>
              <v-row no-gutters>
                <v-col>
                  配信設定
                </v-col>
                <v-spacer />
                <v-col
                  cols="auto"
                  class="subtitle-1"
                >
                  {{ code }}
                  <v-btn
                    :to="{name: 'Config', query: {code}}"
                    color="primary"
                    icon
                  >
                    <v-icon>
                      mdi-pencil-outline
                    </v-icon>
                  </v-btn>
                </v-col>
              </v-row>
            </v-card-title>
            <v-container>
              <v-row>
                <v-col>
                  <v-card outlined>
                    <v-container>
                      <v-row>
                        <v-col class="font-weight-bold">
                          <v-icon color="primary">
                            mdi-numeric-1-circle
                          </v-icon>
                          各配信のURLを入力してください
                        </v-col>
                      </v-row>
                      <v-row>
                        <v-col>
                          <v-text-field
                            v-model="niconicoUrl"
                            label="ニコニコ生放送"
                            placeholder="https://live2.nicovideo.jp/watch/lv99999999999"
                            dense
                          />
                        </v-col>
                      </v-row>
                      <v-row>
                        <v-col>
                          <v-text-field
                            v-model="youtubeUrl"
                            label="Youtube"
                            placeholder="https://www.youtube.com/watch?v=-aaaaaaaaaa"
                            dense
                          />
                        </v-col>
                      </v-row>
                    </v-container>
                  </v-card>
                </v-col>
              </v-row>
              <v-row>
                <v-col>
                  <v-card
                    outlined
                    :disabled="!(niconicoLiveId || youtubeLiveId)"
                  >
                    <v-container>
                      <v-row>
                        <v-col class="font-weight-bold">
                          <v-icon color="primary">
                            mdi-numeric-2-circle
                          </v-icon>
                          配信に映す用意をしてください
                        </v-col>
                      </v-row>
                      <v-row>
                        <v-col>
                          OBSを使う場合は、URLをコピーしてください。
                        </v-col>
                        <v-col>
                          <v-text-field
                            v-model="chatUrl"
                            dense
                          >
                            <template v-slot:append-outer>
                              <v-btn
                                color="grey lighten-2"
                                icon
                                @click="copy(chatUrl)"
                              >
                                <v-icon
                                  color="primary"
                                  small
                                >
                                  mdi-content-copy
                                </v-icon>
                              </v-btn>
                            </template>
                          </v-text-field>
                        </v-col>
                      </v-row>
                      <v-row>
                        <v-col>
                          このページにチャット画面を出す場合は、このまま開始してください。
                          <v-btn
                            :href="chatUrl"
                            color="grey lighten-2"
                            depressed
                          >
                            開始する
                            <v-icon color="primary">
                              mdi-arrow-right-bold-circle-outline
                            </v-icon>
                          </v-btn>
                        </v-col>
                      </v-row>
                    </v-container>
                  </v-card>
                </v-col>
              </v-row>
              <v-row>
                <v-alert
                  type="info"
                  class="ml-3"
                  dense
                  outlined
                >
                  今後もこのレイアウト設定を使う場合は、このページをブックマークしておくと便利です。
                </v-alert>
              </v-row>
            </v-container>
          </v-card>
        </v-dialog>
      </template>
      <template v-else>
        エラーが発生しました。
      </template>
    </div>
  </default-layout>
</template>

<script>
import DefaultConfig from '@/models/config/DefaultConfig'
import DefaultLayout from '@/components/layouts/DefaultLayout'
import copy from '@/utils/copy'

export default {
  components: {
    DefaultLayout,
  },
  data() {
    return {
      config: DefaultConfig,
      dialog: true,
      niconicoUrl: '',
      youtubeUrl: '',
    }
  },
  computed: {
    code() {
      return this.$route.query.code
    },
    niconicoLiveId() {
      if (this.$route.query.niconico) {
        return this.$route.query.niconico
      }

      const match = this.niconicoUrl.match(/lv\d+/u)

      return match ? match[0] : ''
    },
    youtubeLiveId() {
      if (this.$route.query.youtube) {
        return this.$route.query.youtube
      }

      const match = this.youtubeUrl.match(/(?<=(?:[?&])v=)[^&]+/u)

      return match ? match[0] : ''
    },
    chatUrl() {
      return location.origin + this.$router.resolve({
        name: 'Chat',
        query: {
          code: this.code,
          niconico: this.niconicoLiveId,
          youtube: this.youtubeLiveId,
        },
      }).href
    },
  },
  methods: {
    copy,
  },
}
</script>
