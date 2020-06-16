<template>
  <default-layout class="config">
    <v-breadcrumbs :items="breads">
      <template v-slot:divider>
        <v-icon>mdi-chevron-right</v-icon>
      </template>
    </v-breadcrumbs>
    <v-container>
      <div class="d-flex justify-space-between">
        <h2>設定画面</h2>
        <save-button :config="config" />
      </div>
      <v-row>
        <!-- 設定項目 -->
        <v-col cols="7">
          <!-- プリセット -->
          <preset-section />

          <!-- 設定コードを読み込む -->
          <old-config-section />

          <v-btn
            v-if="!moreDetail"
            class="mb-4"
            color="primary"
            text
            @click="moreDetail = true"
          >
            細かく設定する
          </v-btn>

          <template v-if="moreDetail">
            <!-- 全体 -->
            <v-card
              color="grey lighten-4"
              class="mb-4"
            >
              <v-card-title>
                全体
              </v-card-title>
              <v-card-subtitle>
                すべてのサイトに適用される設定です。
              </v-card-subtitle>
              <v-container fluid>
                <!-- フォント -->
                <config-item>
                  <template v-slot:title>
                    フォント
                    <config-hint>
                      <v-card>
                        <v-card-title>
                          フォント について
                        </v-card-title>
                        <v-card-text>
                          この項目は複数選択です。左にあるものが優先されます。<br>
                          自分のPCにインストールされているフォントを使いたい場合、そのフォント名を記入してください。<br>
                          sans-serifはブラウザに設定されているゴシック体フォントのことです。sansは、その明朝体のことです。
                        </v-card-text>
                      </v-card>
                    </config-hint>
                  </template>
                  <template v-slot:content>
                    <font-config
                      :fonts="config.font"
                      @input="config.font = $event"
                    />
                  </template>
                </config-item>

                <!-- 文字サイズ -->
                <config-item>
                  <template v-slot:title>
                    文字サイズ
                  </template>
                  <template v-slot:content>
                    <font-size-config
                      :font-size="config.fontSize"
                      @input="config.fontSize = $event"
                    />
                  </template>
                </config-item>

                <!-- 背景色 -->
                <config-item>
                  <template v-slot:title>
                    チャットエリアの背景色
                  </template>
                  <template v-slot:content>
                    <color-config
                      :color="config.backgroundColor"
                      @update="config.backgroundColor = $event"
                    />
                  </template>
                </config-item>

                <!-- 時間経過で消す -->
                <config-item>
                  <template v-slot:title>
                    時間経過で消す
                    <config-hint>
                      <v-card>
                        <v-card-title>
                          時間経過で消す について
                        </v-card-title>
                        <v-card-text>
                          この項目では、何秒間コメントを表示するか入力してください。<br>
                          指定した時間が経過したコメントは消えます。<br>
                          ゼロ秒を指定した場合、コメントは消えなくなります。
                        </v-card-text>
                      </v-card>
                    </config-hint>
                  </template>
                  <template v-slot:content>
                    <v-select
                      v-model="config.durationTime"
                      :items="[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30]"
                      hint="単位は秒です。ゼロ秒を指定するとコメントは消えなくなります。"
                      persistent-hint
                      @input="clearPreview()"
                    />
                  </template>
                </config-item>

                <!-- チャットエリアの角を丸くする -->
                <config-item>
                  <template v-slot:title>
                    チャットエリアの角を丸くする
                  </template>
                  <template v-slot:content>
                    <v-switch
                      v-model="config.chatAreaRounded"
                      color="accent"
                    />
                  </template>
                </config-item>

                <!-- コメントエリアに影をつける -->
                <config-item>
                  <template v-slot:title>
                    コメントエリアに影をつける
                  </template>
                  <template v-slot:content>
                    <v-switch
                      v-model="config.commentAreaShadow"
                      color="accent"
                    />
                  </template>
                </config-item>

                <!-- 下から上へ -->
                <config-item>
                  <template v-slot:title>
                    下から上へ
                    <config-hint>
                      <v-card>
                        <v-card-title>
                          下から上へ について
                        </v-card-title>
                        <v-card-text>
                          新規コメントを下から挿入するかどうか選んでください。<br>
                          オンにすると一部の「表示アニメーション」「非表示アニメーション」で表示がおかしくなるので、注意してください。
                        </v-card-text>
                      </v-card>
                    </config-hint>
                  </template>
                  <template v-slot:content>
                    <v-switch
                      v-model="config.fromBottom"
                      color="accent"
                      @change="clearPreview()"
                    />
                  </template>
                </config-item>

                <!-- 表示アニメーション -->
                <config-item>
                  <template v-slot:title>
                    表示アニメーション
                  </template>
                  <template v-slot:content>
                    <animation-in-config
                      :animation="config.animationIn"
                      @input="config.animationIn = $event"
                    />
                  </template>
                </config-item>

                <!-- 非表示アニメーション -->
                <config-item>
                  <template v-slot:title>
                    非表示アニメーション
                  </template>
                  <template v-slot:content>
                    <animation-out-config
                      :animation="config.animationOut"
                      @input="config.animationOut = $event"
                    />
                  </template>
                </config-item>

                <!-- アニメーションをスムーズにする -->
                <config-item>
                  <template v-slot:title>
                    アニメーションをスムーズにする
                    <config-hint>
                      <v-card>
                        <v-card-title>
                          アニメーションをスムーズにする について
                        </v-card-title>
                        <v-card-text>
                          アニメーションをよりスムーズにします。<br>
                          コメントの流れが速いときに表示がおかしくなるときがあります。<br>
                          その場合は、この項目をオフにしてください。
                        </v-card-text>
                      </v-card>
                    </config-hint>
                  </template>
                  <template v-slot:content>
                    <v-switch
                      v-model="config.smooth"
                      color="accent"
                    />
                  </template>
                </config-item>
              </v-container>
            </v-card>

            <!-- 配置 -->
            <v-card
              color="grey lighten-4"
              class="mb-4"
            >
              <v-card-title>
                配置
              </v-card-title>
              <v-card-subtitle>
                枠にはそれぞれ表示内容が決められます。<br>
                枠組みは最大3x3までです。
              </v-card-subtitle>
              <chat-frame-config :layout="config.layout" />
            </v-card>

            <v-card
              color="grey lighten-4"
              class="mb-4"
            >
              <v-card-title>
                ニコニコ生放送
              </v-card-title>
              <v-card-subtitle>
                ニコニコ生放送のチャットに適用されます。
              </v-card-subtitle>

              <!-- 背景色 -->
              <config-item>
                <template v-slot:title>
                  コメントエリアの背景色
                </template>
                <template v-slot:content>
                  <color-config
                    :color="config.niconico.backgroundColor"
                    @update="config.niconico.backgroundColor = $event"
                  />
                </template>
              </config-item>

              <!-- コメントエリアの角を丸くする -->
              <config-item>
                <template v-slot:title>
                  コメントエリアの角を丸くする
                </template>
                <template v-slot:content>
                  <v-switch
                    v-model="config.niconico.commentAreaRounded"
                    color="accent"
                  />
                </template>
              </config-item>
            </v-card>

            <v-card color="grey lighten-4">
              <v-card-title>
                Youtube
              </v-card-title>
              <v-card-subtitle>
                Youtubeのチャットに適用されます。
              </v-card-subtitle>

              <!-- 背景色 -->
              <config-item>
                <template v-slot:title>
                  コメントエリアの背景色
                </template>
                <template v-slot:content>
                  <color-config
                    :color="config.youtube.backgroundColor"
                    @update="config.youtube.backgroundColor = $event"
                  />
                </template>
              </config-item>

              <!-- コメントエリアの角を丸くする -->
              <config-item>
                <template v-slot:title>
                  コメントエリアの角を丸くする
                </template>
                <template v-slot:content>
                  <v-switch
                    v-model="config.youtube.commentAreaRounded"
                    color="accent"
                  />
                </template>
              </config-item>
            </v-card>
          </template>
        </v-col>

        <!-- プレビュー -->
        <v-col cols="5">
          <v-card
            :style="{borderRadius: config.chatAreaRounded ? '4px' : 0}"
            class="ichimatsu elevation-0 pa-0 ma-0 preview"
          >
            <chat-area
              :config="config"
              :chats="chats"
              class="full-height"
            />
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </default-layout>
</template>

<style scoped>
.preview {
  position: sticky;
  top: 70px;
  height: 400px;
  overflow: scroll;
  -ms-overflow-style: none;
  scrollbar-width: none;
}

.full-height {
  height: 100%;
}

.preview::-webkit-scrollbar {
  display:none;
}

.ichimatsu {
  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAGElEQVQYlWNgYGCQwoKxgqGgcJA5h3yFAAs8BRWVSwooAAAAAElFTkSuQmCC) repeat;
}
</style>

<script>
import AnimationInConfig from '@/components/config/AnimationInConfig'
import AnimationOutConfig from '@/components/config/AnimationOutConfig'
import ChatArea from '@/components/chat/ChatArea'
import ChatFrameConfig from '@/components/config/ChatFrameConfig'
import ChatService from '@/services/ChatService'
import ColorConfig from '@/components/config/ColorConfig'
import ConfigHint from '@/components/config/ConfigHint'
import ConfigItem from '@/components/config/ConfigItem'
import DefaultConfig from '@/models/config/DefaultConfig'
import DefaultLayout from '@/components/layouts/DefaultLayout'
import DummyProvider from '@/services/chatProvider/Dummy'
import FontConfig from '@/components/config/FontConfig'
import FontSizeConfig from '@/components/config/FontSizeConfig'
import OldConfigSection from '@/components/config/sections/OldConfigSection'
import PresetSection from '@/components/config/sections/PresetSection'
import SaveButton from '@/components/config/SaveButton'

export default {
  components: {
    DefaultLayout,
    ConfigItem,
    ColorConfig,
    FontConfig,
    ConfigHint,
    AnimationInConfig,
    AnimationOutConfig,
    ChatFrameConfig,
    ChatArea,
    FontSizeConfig,
    PresetSection,
    OldConfigSection,
    SaveButton,
  },
  data() {
    return {
      breads: [
        {
          text: 'トップ',
          to: '/',
        },
        {
          text: '設定',
          to: '/config',
          disabled: true,
        },
      ],
      config: DefaultConfig,
      moreDetail: false,
      chats: [],
    }
  },
  mounted() {
    const chatService = new ChatService([new DummyProvider()], chat => {
      this.chats.push(chat)
    })

    const el = window.document.querySelector('.preview ')
    setInterval(() => {
      if (this.config.fromBottom) {
        el.scrollTop = el.scrollHeight
      } else {
        el.scrollTop = 0
      }
    }, 50)

    chatService.start()
  },
  methods: {
    clearPreview() {
      this.chats.push({type: 'command:clear'})
    },
  },
}
</script>
