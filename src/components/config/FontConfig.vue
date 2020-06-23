<template>
  <v-combobox
    v-model="model"
    :items="fontList"
    multiple
    chips
    @input="onInput"
  />
</template>

<script>
export default {
  props: {
    fonts: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      model: this.fonts,
      fontList: [
        'Noto Sans JP',
        'sans-serif',
        'serif',
      ],
    }
  },
  methods: {
    onInput(font) {
      this.$emit(
        'input',
        font,
      )
    },
  },
}
</script>
