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
            URLの「config:○○○」の部分です。
          </v-card-text>
        </v-card>
      </config-hint>
    </v-card-title>
    <v-row class="pl-4">
      <v-col cols="8">
        <v-text-field
          label="config:から始まるコード"
          dense
        />
      </v-col>
      <v-col cols="4">
        <v-btn color="primary">
          読み込む
        </v-btn>
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
import ConfigHint from '@/components/config/ConfigHint'

export default {
  components: {
    ConfigHint,
  },
}
</script>
