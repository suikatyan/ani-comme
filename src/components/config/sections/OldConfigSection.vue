<template>
  <v-card
    color="grey lighten-4"
    class="mb-4"
  >
    <v-card-title>
      設定コードを読み込む
      <config-hint>
        <v-card>
          <v-card-title>
            設定コードを読み込む について
          </v-card-title>
          <v-card-text>
            設定コードから設定を読み込みます。<br>
            URLの「config-○○○」の部分です。
          </v-card-text>
        </v-card>
      </config-hint>
    </v-card-title>
    <v-container>
      <v-row class="pl-4">
        <v-col>
          <v-text-field
            v-model="code"
            :error-messages="errors"
            label="config-から始まるコード"
            dense
          />
        </v-col>
        <v-col>
          <v-btn
            :loading="loading"
            color="primary"
            outlined
            @click="setConfigByCode(code)"
          >
            読み込む
            <v-icon>
              mdi-download-circle-outline
            </v-icon>
          </v-btn>
          <v-icon
            v-if="isSuccess"
            color="success"
            class="ml-4"
          >
            mdi-check-bold
          </v-icon>
        </v-col>
      </v-row>
      <v-row v-if="error">
        <v-col class="error--text">
          {{ error }}
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>

<script>
import ConfigHint from '@/components/config/ConfigHint'
import ConfigService from '@/services/ConfigService'

export default {
  components: {
    ConfigHint,
  },
  data() {
    return {
      code: '',
      errors: [],
      loading: false,
      isSuccess: false,
    }
  },
  methods: {
    async setConfigByCode(code) {
      if (!code) {
        return
      }

      this.errors = []
      this.loading = true
      this.isSuccess = false

      const configService = new ConfigService()
      const config = await configService.fetch(code)
      if (config) {
        this.isSuccess = true
        this.$emit('update', config)
      } else {
        this.errors.push('エラーが発生しました。')
      }

      this.loading = false
      this.code = ''
    },
  },
}
</script>
