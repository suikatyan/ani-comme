<template>
  <div class="config">
    <v-breadcrumbs :items="breads">
      <template v-slot:divider>
        <v-icon>mdi-chevron-right</v-icon>
      </template>
    </v-breadcrumbs>
    <div class="d-flex justify-space-between">
      <h2>設定画面</h2>
      <v-btn color="success">
        保存
      </v-btn>
    </div>
    <v-container>
      <v-row>
        <!-- 設定項目 -->
        <v-col cols="7">
          <!-- プリセット -->
          <v-card
            color="grey lighten-4"
            class="mb-4"
          >
            <v-card-title>
              プリセット
            </v-card-title>
            <v-card-subtitle>
              予め用意されているおすすめ設定です。
            </v-card-subtitle>
            <v-container>
              <v-row justify="space-around">
                <v-btn
                  depressed
                  color="primary"
                >
                  1
                </v-btn>
                <v-btn
                  depressed
                  color="primary"
                >
                  2
                </v-btn>
                <v-btn
                  depressed
                  color="primary"
                >
                  3
                </v-btn>
                <v-btn
                  depressed
                  color="primary"
                >
                  4
                </v-btn>
              </v-row>
            </v-container>
          </v-card>

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
                          この項目は複数選択です。<br>
                          一番左にあるものが優先されます。
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
                    <v-select
                      v-model="config.fontSize"
                      :items="['6px', '7px', '8px', '9px', '10px', '11px', '12px', '13px', '14px', '15px', '16px', '17px', '18px', '19px', '20px']"
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
                          新規コメントを下から挿入するかどうか選んでください。
                        </v-card-text>
                      </v-card>
                    </config-hint>
                  </template>
                  <template v-slot:content>
                    <v-switch
                      v-model="config.fromBottom"
                      color="accent"
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

                <!-- 表示アニメーション -->
                <config-item>
                  <template v-slot:title>
                    表示アニメーション
                  </template>
                  <template v-slot:content>
                    <animation-in-config :animation="config.animationIn" />
                  </template>
                </config-item>

                <!-- 非表示アニメーション -->
                <config-item>
                  <template v-slot:title>
                    非表示アニメーション
                  </template>
                  <template v-slot:content>
                    <animation-out-config :animation="config.animationOut" />
                  </template>
                </config-item>

                <!-- アニメーションスピード -->
                <config-item>
                  <template v-slot:title>
                    アニメーションスピード
                  </template>
                  <template v-slot:content>
                    <v-select
                      v-model="config.animationSpeed"
                      :items="['slower', 'slow', 'normal', 'fast', 'faster']"
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
          <chat-area
            :config="config"
            :chats="chats"
          />
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<style scoped>
.preview {
  position: sticky;
  top: 70px;
}
</style>

<script>
import AnimationInConfig from '@/components/config/AnimationInConfig'
import AnimationOutConfig from '@/components/config/AnimationOutConfig'
import ChatArea from '@/components/chat/ChatArea'
import ChatFrameConfig from '@/components/config/ChatFrameConfig'
import ColorConfig from '@/components/config/ColorConfig'
import ConfigHint from '@/components/config/ConfigHint'
import ConfigItem from '@/components/config/ConfigItem'
import DefaultConfig from '@/models/DefaultConfig'
import FontConfig from '@/components/config/FontConfig'

export default {
  'components': {
    ConfigItem,
    ColorConfig,
    FontConfig,
    ConfigHint,
    AnimationInConfig,
    AnimationOutConfig,
    ChatFrameConfig,
    ChatArea
  },
  data () {
    return {
      'breads': [
        {'text': 'トップ',
          'to': '/'},
        {'text': '設定',
          'to': '/config',
          'disabled': true}
      ],
      'config': DefaultConfig,
      'moreDetail': false,
      'chats': [{}]
    }
  },
  mounted () {
    // SetInterval(() => this.chats.push({}), 2000)
  }
}
</script>
