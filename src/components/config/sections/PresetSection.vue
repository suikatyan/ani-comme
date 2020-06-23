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
          @click="change(index)"
        >
          {{ index }}
        </v-btn>
      </v-row>
    </v-container>
  </v-card>
</template>

<script>
import DefaultLayout from '@/components/layouts/DefaultLayout'

const layouts = [
  DefaultLayout,
  DefaultLayout,
  DefaultLayout,
  DefaultLayout,
]

export default {
  methods: {
    change(index) {
      this.$emit('change', layouts[index])
    },
  },
}
</script>
