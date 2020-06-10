<template>
  <div class="config">
    <v-breadcrumbs :items="breads">
      <template v-slot:divider>
        <v-icon>mdi-chevron-right</v-icon>
      </template>
    </v-breadcrumbs>
    <h2>設定画面</h2>

    <v-container >
      <v-row>
        <v-btn color="primary">保存</v-btn>
        {{ config }}
      </v-row>
      <v-row>

        <!-- 設定項目 -->
        <v-col cols="7">

          <!-- 全体 -->
          <v-card color="grey lighten-4" class="mb-2">
            <v-card-title>
              全体
            </v-card-title>
            <v-divider></v-divider>
            <v-container>

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
                    v-model='config.fontSize'
                    :items="['6px', '7px', '8px', '9px', '10px', '11px', '12px', '13px', '14px', '15px', '16px', '17px', '18px', '19px', '20px']"
                  />
                </template>
              </config-item>

              <!-- 文字色 -->
              <config-item>
                <template v-slot:title>
                  文字色
                </template>
                <template v-slot:content>
                  <color-config
                    :color="config.color"
                    @update="config.color = $event"
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
                    v-model='config.durationTime'
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

            </v-container>
          </v-card>

          <!-- 配置 -->
          <v-card color="grey lighten-4">
            <v-card-title>
              配置
            </v-card-title>
          </v-card>
        </v-col>

        <!-- プレビュー -->
        <v-col cols="5">
          <v-card color="grey lighten-4" height="500px">
            preview
          </v-card>
        </v-col>

      </v-row>
    </v-container>
  </div>
</template>

<script>
import DefaultConfig from '@/models/DefaultConfig'
import ConfigItem from '@/components/config/ConfigItem'
import ColorConfig from '@/components/config/ColorConfig'
import FontConfig from '@/components/config/FontConfig'
import ConfigHint from '@/components/config/ConfigHint'
import AnimationInConfig from '@/components/config/AnimationInConfig'
import AnimationOutConfig from '@/components/config/AnimationOutConfig'


export default {
  components: {
    ConfigItem,
    ColorConfig,
    FontConfig,
    ConfigHint,
    AnimationInConfig,
    AnimationOutConfig,
  },
  data() {
    return {
      breads: [
        { text: 'トップ', to: '/' },
        { text: '設定', to: '/config', disabled: true },
      ],
      config: DefaultConfig,
      colorMenu: false,
    }
  },
}
</script>
