<template>
  <div>
    {{ siteName }}
  </div>
</template>

<script>
export default {
  props: {
    chat: {
      type: Object,
      required: true,
    },
  },
  computed: {
    siteName() {
      switch (this.chat.site) {
      case 'niconico':
        return 'ニコ生'
      case 'youtube':
        return 'Youtube'
      default:
        return ''
      }
    },
  },
}
</script>
