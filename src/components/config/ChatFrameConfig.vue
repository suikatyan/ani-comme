<template>
  <v-container
    fluid
    class="chat-frame px-7"
  >
    <v-row
      v-for="(row, rowIndex) in frame"
      :key="rowIndex"
      class="frame-row"
    >
      <v-col
        v-for="(col, colIndex) in row"
        :key="colIndex"
        :cols="frame[rowIndex][colIndex].autoWidth ? 'auto' : false"
      >
        <v-menu
          v-model="menu[rowIndex][colIndex]"
          :close-on-content-click="false"
          transition="fade-transition"
          min-width="400px"
          offset-y
          top
        >
          <template #activator="{ on, attrs }">
            <v-btn
              color="primary"
              v-bind="attrs"
              :class="convertAlign(frame[rowIndex][colIndex].align)"
              outlined
              block
              v-on="on"
            >
              {{ getContentName(col.content) }}
            </v-btn>
          </template>
          <v-card>
            <v-container fluid>
              <!-- 内容 -->
              <config-item>
                <template #title>
                  内容
                </template>
                <template #content>
                  <v-select
                    v-model="frame[rowIndex][colIndex].content"
                    :items="contents"
                    dense
                  />
                </template>
              </config-item>

              <!-- 文字寄せ -->
              <config-item>
                <template #title>
                  文字寄せ
                </template>
                <template #content>
                  <v-btn-toggle
                    v-model="frame[rowIndex][colIndex].align"
                    color="primary"
                    mandatory
                  >
                    <v-btn
                      value="left"
                      small
                    >
                      <v-icon>mdi-format-align-left</v-icon>
                    </v-btn>
                    <v-btn
                      value="center"
                      small
                    >
                      <v-icon>mdi-format-align-center</v-icon>
                    </v-btn>
                    <v-btn
                      value="right"
                      small
                    >
                      <v-icon>mdi-format-align-right</v-icon>
                    </v-btn>
                  </v-btn-toggle>
                </template>
              </config-item>

              <!-- 文字色 -->
              <config-item>
                <template #title>
                  文字色
                </template>
                <template #content>
                  <color-config
                    :color="frame[rowIndex][colIndex].color"
                    @update="frame[rowIndex][colIndex].color = $event"
                  />
                </template>
              </config-item>

              <!-- 横幅自動調整 -->
              <config-item>
                <template #title>
                  横幅自動調整
                  <config-hint>
                    <v-card>
                      <v-card-title>
                        横幅自動調整 について
                      </v-card-title>
                      <v-card-text>
                        この枠の横幅を可変（表示内容の横幅と同じ横幅）にさせます。<br>
                        オフにすると、横幅は固定になります。
                      </v-card-text>
                    </v-card>
                  </config-hint>
                </template>
                <template #content>
                  <v-switch
                    v-model="frame[rowIndex][colIndex].autoWidth"
                    color="accent"
                  />
                </template>
              </config-item>

              <!-- 追加アクション -->
              <v-row class="pa-2">
                <v-btn
                  :disabled="frame[rowIndex].length >= MAX_COLUMN_COUNT"
                  color="success"
                  class="mr-2"
                  depressed
                  @click="addColumn(rowIndex, colIndex)"
                >
                  右に列を追加する
                </v-btn>
                <v-btn
                  :disabled="frame.length >= MAX_ROW_COUNT"
                  color="success"
                  depressed
                  @click="addRow(rowIndex, colIndex)"
                >
                  下に行を追加する
                </v-btn>
              </v-row>

              <!-- 削除アクション -->
              <v-row class="pa-2">
                <v-btn
                  :disabled="frame[rowIndex].length === 1"
                  color="error"
                  class="mr-2"
                  depressed
                  @click="removeColumn(rowIndex, colIndex)"
                >
                  この枠を削除する
                </v-btn>
                <v-btn
                  :disabled="frame.length === 1"
                  color="error"
                  depressed
                  @click="removeRow(rowIndex, colIndex)"
                >
                  この行を削除する
                </v-btn>
              </v-row>
            </v-container>
          </v-card>
        </v-menu>
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped>
.chat-frame > .row {
  border-left: black 1px solid;
  border-top: black 1px solid;
}

.chat-frame > .row > .col {
  border-right: black 1px solid;
}

.chat-frame > .row:last-child > .col {
  border-bottom: black 1px solid;
}
</style>

<script>
import ColorConfig from '@/components/config/ColorConfig'
import ConfigHint from '@/components/config/ConfigHint'
import ConfigItem from '@/components/config/ConfigItem'
import range from '@/utils/range'

const MAX_COLUMN_COUNT = 3
const MAX_ROW_COUNT = 3
const defaultFrame = () => ({
  content: 'message',
  align: 'left',
  color: '#000000FF',
})

export default {
  components: {
    ConfigItem,
    ColorConfig,
    ConfigHint,
  },
  props: {
    layout: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      MAX_COLUMN_COUNT,
      MAX_ROW_COUNT,
      frame: this.layout,
      contents: [
        {
          text: '名前',
          value: 'name',
        },
        {
          text: '時刻',
          value: 'date',
        },
        {
          text: '時刻+名前',
          value: 'date-name',
        },
        {
          text: 'コメント番号',
          value: 'number',
        },
        {
          text: 'コメント番号+名前',
          value: 'number-name',
        },
        {
          text: '時刻+コメント番号+名前',
          value: 'date-number-name',
        },
        {
          text: 'サイト名',
          value: 'site',
        },
        {
          text: 'サイト名（短縮）',
          value: 'site-short',
        },
        {
          text: 'メッセージ',
          value: 'message',
        },
      ],
      menu: range(MAX_ROW_COUNT).map(() => range(
        MAX_COLUMN_COUNT,
        false,
      )),
    }
  },
  methods: {
    addColumn(rowIndex, colIndex) {
      this.menu[rowIndex][colIndex] = false
      this.frame[rowIndex].splice(
        colIndex + 1,
        0,
        defaultFrame(),
      )
    },
    addRow(rowIndex, colIndex) {
      this.menu[rowIndex][colIndex] = false
      this.frame.splice(
        rowIndex + 1,
        0,
        [defaultFrame()],
      )
    },
    removeColumn(rowIndex, colIndex) {
      this.menu[rowIndex][colIndex] = false
      this.frame[rowIndex].splice(
        colIndex,
        1,
      )
    },
    removeRow(rowIndex, colIndex) {
      this.menu[rowIndex][colIndex] = false
      this.frame.splice(
        rowIndex,
        1,
      )
    },
    convertAlign(align) {
      return {
        left: 'justify-start',
        center: 'justify-center',
        right: 'justify-end',
      }[align]
    },
    getContentName(name) {
      return this.contents.find(content => content.value === name).text
    },
  },
}
</script>
