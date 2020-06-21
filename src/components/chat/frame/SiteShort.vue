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
        return 'N'
      case 'youtube':
        return 'Y'
      default:
        return ''
      }
    },
  },
}
</script>
