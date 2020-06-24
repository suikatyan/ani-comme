<template>
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
          v-for="index in 4"
          :key="index"
          color="primary"
          outlined
          @click="change(index - 1)"
        >
          {{ index }}
        </v-btn>
      </v-row>
    </v-container>
  </v-card>
</template>

<script>
import BlackWhiteConfig from '@/models/config/BlackWhiteConfig'
import DefaultConfig from '@/models/config/DefaultConfig'
import SepiaConfig from '@/models/config/SepiaConfig'
import WinterConfig from '@/models/config/WinterConfig'

const layouts = [
  DefaultConfig,
  BlackWhiteConfig,
  SepiaConfig,
  WinterConfig,
]

export default {
  methods: {
    change(index) {
      this.$emit('change', layouts[index])
    },
  },
}
</script>
