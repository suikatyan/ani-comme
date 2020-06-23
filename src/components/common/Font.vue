<template>
  <div v-if="fonts">
    <link
      :href="'https://fonts.googleapis.com/css2?' + fonts"
      rel="stylesheet"
    >
  </div>
</template>

<script>
const availableFonts = ['Noto Sans JP']

export default {
  props: {
    fontFamily: {
      type: Array,
      required: true,
    },
  },
  computed: {
    fonts() {
      return this.fontFamily
        .reduce((previous, current) => {
          if (availableFonts.includes(current)) {
            previous.push(current)
          }

          return previous
        }, [])
        .map(font => font.replace(/ /gu, '+'))
        .map(font => `family=${font}`)
        .join('&')
    },
  },
  mounted() {
    console.log(this.fonts)
  },
}
</script>
