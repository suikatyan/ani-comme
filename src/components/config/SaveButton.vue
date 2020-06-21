<template>
  <v-dialog
    v-model="dialog"
    max-width="700px"
  >
    <template #activator="{ on, attrs }">
      <v-btn
        color="accent"
        v-bind="attrs"
        v-on="on"
        @click="save()"
      >
        決定
      </v-btn>
    </template>
    <v-card :loading="loading">
      <template v-if="loading">
        <v-card-title>
          設定を保存しています。
        </v-card-title>
      </template>
      <template v-else>
        <v-card-title>
          設定を保存しました！
        </v-card-title>
        <v-container>
          <v-row>
            <v-col>
              作成した設定は、次の設定コードから使うことができます。
            </v-col>
          </v-row>
          <v-row>
            <v-col>
              <v-text-field
                v-model="code"
                readonly
                filled
                dense
              />
            </v-col>
          </v-row>
          <v-row>
            <v-col>
              OBSなどの配信ツールで使う場合は、チャット画面を開いてください。
              <v-btn
                :to="{name: 'Setup', query: {code}}"
                color="primary"
                text
                mini
              >
                チャット画面へ
                <v-icon>
                  mdi-arrow-right-bold-circle-outline
                </v-icon>
              </v-btn>
            </v-col>
          </v-row>
        </v-container>
      </template>
      <v-card-actions>
        <v-spacer />
        <v-btn
          color="primary"
          text
          @click="dialog = false"
        >
          閉じる
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import ConfigService from '@/services/ConfigService'

export default {
  props: {
    config: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      dialog: false,
      code: '',
      loading: false,
    }
  },
  methods: {
    async save() {
      this.loading = true
      const configService = new ConfigService()
      configService.config = this.config
      this.code = await configService.save()
      this.loading = false
    },
  },
}
</script>
