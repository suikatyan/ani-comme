<template>
  <v-select
    v-model="model"
    :items="sizeList"
    @input="onInput"
  />
</template>

<script>
import range from '@/utils/range'

export default {
  props: {
    fontSize: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      model: this.fontSize,
      sizeList: range(40).map((_, index) => `${index + 10}px`),
    }
  },
  watch: {
    fontSize() {
      this.model = this.fontSize
    },
  },
  methods: {
    onInput(fontSize) {
      this.$emit('input', fontSize)
    },
  },
}
</script>
